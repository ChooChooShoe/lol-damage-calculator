import fetch from "node-fetch";
import _ from "lodash";
import { saveFile } from "./fetch_utils.js";
import { Overwrite, dynamicOverwrites } from "./OverwritePerks.js"

import { JSDOM } from "jsdom";
import { ratios_from_text } from "./skill_ratios_parse.js";
import { RootRatio, SubSkill } from "../src/api/DataTypes.js";
import { fix_wiki_img } from "./live_wiki_fetch.js";


const CDRAGON_PERKS_JSON = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perks.json";
const CDRAGON_PERKSTYLES_JSON = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perkstyles.json";

console.log("Runes from CommunityDragon");

main();
async function main() {
  const perks_json: Promise<CDragonPerk[]> = fetch(CDRAGON_PERKS_JSON).then((x) => x.json() as unknown as CDragonPerk[]);
  const perkstyles_json: Promise<CDragonPerkStyles> = fetch(CDRAGON_PERKSTYLES_JSON).then((x) => x.json() as unknown as CDragonPerkStyles);

  const perks: Map<number, any> = new Map();

  for (let x of await perks_json ) {
    const i = x as CDragonPerk & CDragonPerkEx;
    const wiki = await fetchWikiRune(i.name);
    // Only wiki runes are used.
    if (wiki) {
      i.released = wiki.released?.innerHTML?.trim() || undefined;
      i.path = wiki.path?.innerHTML?.trim() || undefined;
      i.slot = wiki.slot?.innerHTML?.trim() || undefined;
      i.cooldown = wiki.cooldown?.innerHTML?.trim() || undefined;
      i.range = wiki.range?.innerHTML?.trim() || undefined;
      i.subskills = [];
      for (const p of [wiki.description, wiki.description2, wiki.description3, wiki.description4]) {
        let subskill = mutateDescriptionLine(p);
        if (subskill) i.subskills.push(subskill);
      }

      // Add the image to the first leveling if defined.
      if (i.subskills[0]) {
        i.subskills[0].img = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${i.iconPath.slice(22).toLowerCase()}`
      }
      perks.set(i.id, i);
    }
    // For StatStones
    else if (i.id >= 5001 && i.id <= 5008) {
      perks.set(i.id, i);
    }
  }
  // Attack model information to some runes.

  let perkStyles: { [key: string]: any } = {};
  // '/lol-game-data/assets/' ''https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/

  const cDragonPerkStyles = await perkstyles_json;
  console.assert(cDragonPerkStyles.schemaVersion === 2);
  for (const i of cDragonPerkStyles.styles) {
    perkStyles[i.id] = {
      id: i.id,
      name: i.name,
      tooltip: i.tooltip,
      iconPath: i.iconPath,
      isAdvanced: i.isAdvanced,
      allowedSubStyles: i.allowedSubStyles,
      // subStyleBonus: i.subStyleBonus, // Outdated.
      slots: mutate_slots(i.slots, perks),
      defaultPageName: i.defaultPageName,
      defaultSubStyle: i.defaultSubStyle, // id
      defaultPerks: i.defaultPerks, // id[]
      defaultPerksWhenSplashed: i.defaultPerksWhenSplashed, // id[]
      defaultStatModsPerSubStyle: i.defaultStatModsPerSubStyle, // { id: id, perks: id[] }[]
    };
  }
  // const statmods = mutate_statmods(perks);
  const statmods = Object.fromEntries([...perks]);
  const output = { styles: perkStyles, perks: statmods };
  _.merge(output, Overwrite);
  dynamicOverwrites(output);
  saveFile("./src/runes/perks.json", output);
  console.log("Goodbye");
}
function mutate_slots(
  slots: Slot[],
  perks: Map<number, any>
) {
  return {
    KeyStone: {
      slotLabel: slots[0].slotLabel,
      perks: slots[0].perks,
    },
    Mixed1: {
      slotLabel: slots[1].slotLabel,
      perks: slots[1].perks,
    },
    Mixed2: {
      slotLabel: slots[2].slotLabel,
      perks: slots[2].perks,
    },
    Mixed3: {
      slotLabel: slots[3].slotLabel,
      perks: slots[3].perks,
    },
  };
}

function mutate_statmods(perks: Map<number, any>) {
  return Object.fromEntries(
    [5001, 5002, 5003, 5005, 5007, 5008].map((perkId) => [
      perkId,
      perks.get(perkId),
    ])
  );
}

// see: https://leagueoflegends.fandom.com/wiki/Template:Rune_data_Cheap_Shot
export interface TemplateRuneData {
  "1"?: HTMLElement; // Cheap Shot
  disp_name?: HTMLElement; // Only necessary if the value differs from Cheap Shot
  released?: HTMLElement; //	2018	Season
  path?: HTMLElement; // Domination	Rune path
  shard?: HTMLElement; // slots	Domination	Slots
  slot?: HTMLElement; //	1	Tier
  description?: HTMLElement; // Description (line 1)
  description2?: HTMLElement; // Description (line 2)
  description3?: HTMLElement; // Description (line 3)
  description4?: HTMLElement; //Description (line 4)
  cooldown?: HTMLElement; //4	Cooldown
  range?: HTMLElement; //Range
}
async function fetchWikiRune(name: string): Promise<TemplateRuneData | null> {
  const url = `https://leagueoflegends.fandom.com/wiki/Template:Rune_data_${name
    .trim()
    .replace(/ /g, "_")}`;
  const response = await fetch(url);
  const dom = new JSDOM(await response.text());
  const document = dom.window.document;
  const inputs = document
    .querySelector("table.article-table.grid")
    ?.querySelectorAll<HTMLElement>("td.te-input");

  if (!inputs) return null;

  const map: TemplateRuneData = {};
  for (const r of inputs) {
    fix_wiki_img(r);
    const key = r.dataset.name!;
    const val = r;
    if (val) map[key] = val;
  }
  return map;
}

const AUTO_MAKE_LEVEING = true;
function mutateDescriptionLine(p: HTMLElement | undefined): SubSkill | undefined {
  const text = p?.textContent?.trim();
  if (!text || !p) return undefined;

  const leveling: RootRatio[] = [];

  if(AUTO_MAKE_LEVEING) {
    const textLines = text.split('. ');
    console.log(`[INFO] Found line (${textLines.length}):`, text)
    for (const i in textLines) {
      const ratio = ratios_from_text(textLines[i]);
      leveling.push(Object.assign({ name: `Rune ${1 + Number(i)}:`, raw: textLines[i] }, ratio));
  
    }
  }

  return { description: p.innerHTML.trim(), leveling }
}


export interface RecommendationDescriptorAttributes {
  kUtility?: number;
  kBurstDamage?: number;
  kDamagePerSecond?: number;
  kGold?: number;
  kMoveSpeed?: number;
  kHealing?: number;
  kDurability?: number;
  kCooldown?: number;
  kMana?: number;
}
export interface CDragonPerk {
  id: number;
  name: string;
  majorChangePatchVersion: string;
  tooltip: string;
  shortDesc: string;
  longDesc: string;
  recommendationDescriptor: string;
  iconPath: string;
  endOfGameStatDescs: string[];
  recommendationDescriptorAttributes: RecommendationDescriptorAttributes;
}

export interface CDragonPerkEx {
  released?: string;
  path?: string;
  slot?: string;
  cooldown?: string;
  range?: string;
  subskills?: SubSkill[];
}

export interface AssetMap {
  [key: string]: string;
  svg_icon: string;
  svg_icon_16: string;
}

export interface SubStyleBonus {
  styleId: number;
  perkId: number;
}

export interface Slot {
  type: string;
  slotLabel: string;
  perks: number[];
}

export interface DefaultStatModsPerSubStyle {
  id: string;
  perks: number[];
}

export interface CDragonPerkStyle {
  id: number;
  name: string;
  tooltip: string;
  iconPath: string;
  assetMap: AssetMap;
  isAdvanced: boolean;
  allowedSubStyles: number[];
  subStyleBonus: SubStyleBonus[];
  slots: Slot[];
  defaultPageName: string;
  defaultSubStyle: number;
  defaultPerks: number[];
  defaultPerksWhenSplashed: number[];
  defaultStatModsPerSubStyle: DefaultStatModsPerSubStyle[];
}

export interface CDragonPerkStyles {
  schemaVersion: number;
  styles: CDragonPerkStyle[];
}
