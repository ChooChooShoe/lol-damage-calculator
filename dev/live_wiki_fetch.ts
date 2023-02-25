import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import parenthesis, { type ArrayTree } from 'parenthesis';
import type {
  Image,
  RootRatio,
  SkillModel,
  SkillModelOld,
  SubSkill,
} from '../src/api/DataTypes';
import { fileExists, saveFileBlob } from './fetch_utils';
import {
  spellEffectFromDescription,
  spellEffectFromStrings,
} from './skill_ratios_parse';
import { levelingToVal, mutate_damagetype } from './leveling';
import { ChampionComplex, DataDragon } from './datadragon';
import { ModuleChampionData } from './LeagueWiki';

// TODO rcp-fe-lol-champion-statistics
// https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champion-statistics/global/default/rcp-fe-lol-champion-statistics.js

const DEBUG = false;

const known_skill_names = {
  basic_attack: 'A',
  skill_innate: 'I',
  skill_q: 'Q',
  skill_w: 'W',
  skill_e: 'E',
  skill_r: 'R',
  skill_aphelios: 'Aphelios',
};
/**
 * Fetches in a live wiki page for some data
 * https://leagueoflegends.fandom.com/wiki/Ezreal/LoL
 * @param {string} champ_name
 * @returns string
 */
export async function fetch_live_wiki_skills(
  champ_name: string,
  o: ModuleChampionData,
  riot: ChampionComplex
): Promise<{ skills: { [key: string]: SkillModel } }> {
  const cleanedName = champ_name.trim().replace(/ /g, '_');
  const url = `https://leagueoflegends.fandom.com/wiki/${cleanedName}/LoL`;
  const response = await fetch(url);
  const dom = new JSDOM(await response.text());
  const document = dom.window.document;

  //[...document.querySelectorAll('.tabber')[1].children].slice(2)[1].querySelectorAll('aside')

  const skill_name_counts: { [s: string]: number } = {};
  const skill_divs = document.querySelectorAll<HTMLElement>(`.skill`);
  const all_skills_div = Array.from(skill_divs, (skill_div, _idx) => {
    fix_wiki_img(skill_div);
    const skill_name =
      known_skill_names[
        skill_div.classList[1] as keyof typeof known_skill_names
      ] || 'X';
    //Finds main body for all sub skills.
    const abilityInfoContainers = skill_div.querySelectorAll<HTMLElement>(
      '.ability-info-container'
    );
    //Finds Details tab for all sub skills.
    let maybe_tabbertab = skill_div?.nextElementSibling?.nextElementSibling;
    if (
      maybe_tabbertab &&
      !maybe_tabbertab.classList.contains('tabbertab-bordered')
    )
      maybe_tabbertab = null;
    const infoTabs =
      maybe_tabbertab?.children[0].querySelectorAll<HTMLElement>('aside') || [];
    //Finds header info for all sub skills.
    const header_aside = skill_div.querySelectorAll<HTMLElement>('aside');
    if (
      abilityInfoContainers.length !== infoTabs.length ||
      header_aside.length !== abilityInfoContainers.length
    )
      console.log(
        '[WARN] Sub-Spell',
        champ_name,
        'has uneven divs lengths',
        abilityInfoContainers.length,
        infoTabs.length,
        header_aside.length
      );

    return Array.from(abilityInfoContainers, (main_div, idx) => {
      let skill_idx = 1;
      if (skill_name in skill_name_counts) {
        skill_name_counts[skill_name]++;
        skill_idx = skill_name_counts[skill_name];
      } else {
        skill_name_counts[skill_name] = 1;
      }
      return {
        skill_name,
        skill_idx,
        main_div,
        header_aside: header_aside[idx],
        infobox: infoTabs[idx],
      };
    });
  }).flat(1);
  const skills: { [key: string]: SkillModel } = {};

  const riot_data = {
    spell_images: {
      i: riot.passive.image || {},
      q: riot.spells[0].image || {},
      w: riot.spells[1].image || {},
      e: riot.spells[2].image || {},
      r: riot.spells[3].image || {},
    },
    spell_maxranks: {
      i: undefined,
      q: riot.spells[0].maxrank || 5,
      w: riot.spells[1].maxrank || 5,
      e: riot.spells[2].maxrank || 5,
      r: riot.spells[3].maxrank || 3,
    },
  };

  for (const {
    skill_name,
    skill_idx,
    main_div,
    header_aside,
    infobox,
  } of all_skills_div) {
    if (!main_div) continue;
    // Rename first name if multiple
    const name =
      skill_name_counts[skill_name] > 1
        ? `${skill_name}${skill_idx}`
        : skill_name;
    skills[name] = new SkillObj(
      name,
      main_div,
      header_aside,
      infobox,
      riot_data
    ) as any;
  }
  return { skills };
}

class SkillObj implements SkillModelOld {
  name: string;
  display_name: string;
  maxrank?: number;
  image: Image | undefined;
  targeting:
    | 'Passice'
    | 'Direction'
    | 'Location'
    | 'Auto'
    | 'Unit'
    | 'Vector'
    | undefined;
  affects: string | undefined;
  damagetype: ('Physical' | 'Magic' | 'True')[];
  spelleffects:
    | 'Proc'
    | 'Area'
    | 'Spell'
    | 'See Notes'
    | 'Basic'
    | 'Default'
    | 'AOE DOT'
    | 'DOT'
    | 'Pet'
    | 'Non-Damaging'
    | undefined;
  spellshield: 'Blocked' | 'Not Blocked' | 'See Notes' | 'Missing' | undefined;
  projectile: 'Blocked' | 'See Notes' | undefined;
  grounded: 'Disabled' | 'See Notes' | 'Not Disabled' | undefined;
  knockdown: 'Interrupted' | 'See Notes' | 'Not Interrupted' | undefined;
  subskills: SubSkill[];

  // [key: string]: ScaleValue | any;

  constructor(
    name: string,
    main_div: HTMLElement,
    header_aside: HTMLElement,
    infobox: HTMLElement,
    riot: {
      spell_images: {
        i: Image;
        q: Image;
        w: Image;
        e: Image;
        r: Image;
      };
      spell_maxranks: {
        i: undefined;
        q: number;
        w: number;
        e: number;
        r: number;
      };
    }
  ) {
    function mutate_val<T>(src: string, table: any, fallback: T): T {
      return mutate(
        infobox?.querySelector(`div[data-source="${src}"]`)?.textContent || '',
        table,
        fallback
      );
    }
    function mutate<T>(text: string, table: any, fallback: T): T {
      for (const i of table) {
        if (text.includes(i)) return i as T;
      }
      return fallback;
    }

    this.name = name;
    const spellKeyboardKey = name.charAt(0).toLocaleLowerCase() as
      | 'i'
      | 'q'
      | 'w'
      | 'e'
      | 'r';
    this.maxrank = riot.spell_maxranks[spellKeyboardKey];
    this.image = riot.spell_images[spellKeyboardKey];
    const header = main_div.querySelector('.champion-ability__header')!;
    const grid = main_div.querySelector('.champion-ability__header+div')!;
    this.display_name = header.querySelector('h3')?.textContent || '';

    for (const child of header_aside.children) {
      const key =
        child
          .querySelector('[data-source]')
          ?.getAttribute('data-source')
          ?.replace(/ /g, '_') || 'x';
      this[key] = levelingToVal(child.querySelector('div')?.textContent);
    }
    // Not found on page _Data required.
    // model.skill[name].cooldown_tooltip = null;
    this.targeting = mutate(
      infobox?.querySelector(`div[data-source="targeting"]`)?.querySelector(`a`)
        ?.textContent || '',
      valid_targeting,
      undefined
    );
    this.affects =
      infobox?.querySelector(`div[data-source="affects"]`)?.textContent ||
      undefined;
    this.damagetype = mutate_damagetype(
      infobox?.querySelector(`div[data-source="damagetype"]`)?.textContent || ''
    ) as any;

    this.spelleffects = mutate_val(
      'spelleffects',
      valid_spelleffects,
      undefined
    );
    this.spellshield = mutate_val('spellshield', valid_spellshield, undefined);
    this.projectile = mutate_val('projectile', valid_projectile, undefined);
    this.grounded = mutate_val('grounded', valid_grounded, undefined);
    this.knockdown = mutate_val('knockdown', valid_knockdown, undefined);
    // model.skill[name].notes = null;

    // this.img = [...main_div.querySelectorAll('img')].map(img => img.src)
    // this.img = [];
    // this.description = [];

    this.subskills = [];

    for (let i = 0; i < grid.childElementCount; i += 2) {
      const img = grid.children[i].querySelector('img')?.src || undefined;
      const div_2 = grid.children[i + 1];
      //If an odd about of table divs, just skip it. See Aatrox "World Ender"
      if (!div_2) continue;

      const leveling: RootRatio[] = [];
      const descriptionHtml = div_2.querySelector('p')?.innerHTML || '';
      const descriptionText = div_2.querySelector('p')?.textContent || '';

      const desc_ratios = descriptionText
        .split('.')
        .map((x, idx) => spellEffectFromDescription(`Line ${idx + 1}:`, x));
      leveling.push(
        ...desc_ratios.filter((x) => {
          // Number 0 or number with no sub_ratios
          if (typeof x.values === 'number') {
            if (x.values === 0 || !x.children) return false;
          }
          return true;
        })
      );

      const dt_list = [...div_2.querySelectorAll('dt')].map(
        (x) => x.textContent || ''
      );
      const dd_list = [...div_2.querySelectorAll('dd')].map(
        (x) => x.textContent || ''
      );

      for (const idx in dt_list) {
        const root_ratio = spellEffectFromStrings(
          dt_list[idx],
          dd_list[idx],
          dd_list[idx]
        );
        leveling.push(root_ratio);
      }
      this.subskills.push({
        img,
        description: descriptionHtml,
        descriptionRatios: [],
        leveling: [],
        levelingRatios: leveling,
      });
    }

    // this.leveling = [...main_div.querySelectorAll('.skill_leveling')]
    //   .map(x => [x.querySelectorAll('dt'), x.querySelectorAll('dd')])
    //   .flatMap((leveling, _levelingidx) => {
    //     const dt_list = [...leveling[0]].map(x => x.textContent || "");
    //     const dd_list = [...leveling[1]].map(x => x.textContent || "");
    //     let ret: RootRatio[] = [];
    //     for (const idx in dt_list) {
    //       let fulltext = dd_list[idx];
    //       let root = parenthesis.parse(fulltext);
    //       let ratio_root = { name: dt_list[idx], raw: fulltext };
    //       ret.push(Object.assign(ratio_root, makeRatioObj(root)));
    //     }
    //     return ret;
    //   });
  }
}

const lazyimg_cache: { [key: string]: string } = {};
export function fix_wiki_img(document: ParentNode) {
  for (const img of document.querySelectorAll<HTMLImageElement>(
    'img.lazyload'
  )) {
    if (img.dataset.src && img.dataset.imageKey) {
      img.loading = 'lazy';
      img.src = '/wiki/images/' + img.dataset.imageKey;
      const file_path = decodeURI(
        './public/wiki/images/' + img.dataset.imageKey
      );
      if (!(img.dataset.imageKey in lazyimg_cache)) {
        lazyimg_cache[img.dataset.imageKey] = img.dataset.src;
        if (!fileExists(file_path)) {
          console.log(
            `Found Image: { imageName: '${img.dataset.imageName}', imageKey: '${img.dataset.imageKey}', src: '${img.dataset.src}' }`
          );
          fetch(img.dataset.src)
            .then((res) => res.blob())
            .then((blob) => saveFileBlob(file_path, blob));
        }
      }
      delete img.dataset.imageName;
      delete img.dataset.imageKey;
      delete img.dataset.src;
    }
  }
}
const valid_targeting = [
  'Passice',
  'Direction',
  'Location',
  'Auto',
  'Unit',
  'Vector',
];
const valid_spelleffects = [
  'Proc',
  'Area',
  'Spell',
  'See Notes',
  'Basic',
  'Default',
  'AOE DOT',
  'DOT',
  'Pet',
  'Non-Damaging',
];
const valid_spellshield = ['Blocked', 'Not Blocked', 'See Notes', 'Missing'];
const valid_projectile = ['Blocked', 'See Notes'];
const valid_grounded = ['Disabled', 'See Notes', 'Not Disabled'];
const valid_knockdown = ['Interrupted', 'See Notes', 'Not Interrupted'];
