import fetch from "node-fetch";
import { saveFile } from "./fetch_utils.js";

console.log("Runes from CommunityDragon");

main();
async function main() {
  const perks_json: Promise<any> = fetch(
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perks.json"
  ).then((x) => x.json());
  const perkstyles_json: Promise<any> = fetch(
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perkstyles.json"
  ).then((x) => x.json());

  const perks: Map<number, any> = new Map();

  for (const i of await perks_json) {
    const wiki = await fetchWikiRune(i.name);
    // Only wiki runes are used.
    if (wiki) {
      i.released = wiki.released?.innerHTML?.trim() || undefined;
      i.path = wiki.path?.innerHTML?.trim() || undefined;
      i.slot = wiki.slot?.innerHTML?.trim() || undefined;
      i.cooldown = wiki.cooldown?.innerHTML?.trim() || undefined;
      i.range = wiki.range?.innerHTML?.trim() || undefined;
      i.root_ratios = [];
      for (const p of [wiki.description, wiki.description2, wiki.description3, wiki.description4]) {
        if (p && p.textContent && p.textContent.trim()) {
          const text = p.textContent.trim().split('. ');
          const leveling: RootRatio[] = [];
          for (const i in text) {
            const ratio = ratios_from_text(text[i]);
            if (ratio.values !== 0)
              leveling.push(Object.assign({ name: `Rune ${1 + Number(i)}:`, raw: text[i] }, ratio));

          }
          i.root_ratios.push({ description: p.innerHTML.trim(), leveling });

        }
      }
      perks.set(i.id, i);
    }
    // For StatStones
    else if (i.id >= 5001 && i.id <= 5008) {
      perks.set(i.id, i);
    }
  }
  // Attack model information to some runes.
  perks.get(5001).stats = { HealthScaling: [15, 140] };
  perks.get(5002).stats = { armor: 6 };
  perks.get(5003).stats = { mr: 8 };
  perks.get(5005).stats = { as: 10 };
  perks.get(5007).stats = { ah: 8 };
  perks.get(5008).stats = { Adaptive: 9 };

  let perkStyles: { [key: string]: any } = {};
  // '/lol-game-data/assets/' ''https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/

  const cd_perkstyles = await perkstyles_json;
  console.assert(cd_perkstyles.schemaVersion === 2);
  for (const i of cd_perkstyles.styles) {
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

  saveFile("./src/runes/perks.json", { styles: perkStyles, perks: statmods });
  console.log("Goodbye");
}
function mutate_slots(
  slots: {
    type: string;
    slotLabel: string;
    perks: [8112, 8124, 8128, 9923];
  }[],
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

import { JSDOM } from "jsdom";
import { ratios_from_text } from "./skill_ratios_parse.js";
import { RootRatio } from "../src/api/DataTypes.js";
import { fix_wiki_img } from "./live_wiki_fetch.js";

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
