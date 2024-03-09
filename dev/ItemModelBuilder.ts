// @ts-nocheck

import type { Dictionary } from 'lodash';
import { CDragonItem } from './communitydragon.js';
import { WikiItem, type Act } from './WikiItem.js';
import { Item as RiotItemEntry } from './datadragon.js';
// import type { ItemGenData } from '../src/api/DataTypes.js';
import { valid_knockdown } from './mutate_untils.js';
import { OptionElement, fetchLiveItem } from './item/FandomItemPage.js';
import { parse } from 'path';
import { spellEffectFromDescription } from './skill_ratios_parse.js';
import type { RootRatio } from '@/api/DataTypes';

let spriteBaseUri = 'null';

export type Options = Partial<{
  DEBUG: boolean;
  spriteBaseUri: string;
  USE_FIXED_REALMS: boolean;
  ITEMS_TO_ITEM_ARRAYS: boolean;
  ITEMS_MISSMATCH_TEST: boolean;
}>;

export const allNamedStatsKeysSet: Set<string> = new Set();

export async function ModelFromJson(
  riotItems: Record<string, RiotItemEntry>,
  cdragonItems: Array<CDragonItem>,
  wikiItems: Record<string, WikiItem>,
  options: Options
): Promise<Dictionary<any>> {
  spriteBaseUri = options.spriteBaseUri || '';

  console.log(
    'Length of riotItems',
    Object.keys(riotItems).length,
    ' vs ',
    cdragonItems.length,
    ' vs ',
    Object.keys(wikiItems).length
  );

  // const defaultRiotItem = {
  //     "name": "Missing Riot Item",
  //     "from": [], "to": [], "image": null, "gold": {}, "tags": [], maps: {
  //         "11": true,
  //         "12": true,
  //         "21": true,
  //         "22": false
  //     },
  // }
  const cdragonById: Record<string, CDragonItem | undefined> = {};
  for (const value of Object.values(cdragonItems)) {
    cdragonById[value.id] = value;
  }

  // Lookup values for wiki data. Fix for "=>OrnnItem" entries
  function lookup_crawl(
    entry: { [x: string]: any },
    root: { [x: string]: any },
    tree: string[]
  ): void {
    for (const [key, val] of Object.entries(entry)) {
      if (
        typeof val === 'string' &&
        (val.startsWith('=>') || val.startsWith(':>'))
      ) {
        let lookup = root[val.slice(2)];
        for (const branch of tree) lookup = lookup[branch];

        if (lookup) {
          console.log('Item lookup kv', key, val);
          entry[key] = lookup[key];
        } else {
          console.log(
            '[ERROR] Itemlookup failed for kv',
            key,
            val,
            ' from is null or undefined'
          );
        }
      }
      if (val && typeof val === 'object') {
        lookup_crawl(val, root, [...tree, key]);
      }
    }
  }
  const allItems: Dictionary<any> = {};
  for (const [key, wikiItem] of Object.entries(wikiItems)) {
    // Ohmwrecker (Turret Item) has no id.
    if (!wikiItem.id) {
      console.log(`[WARN] WikiItem ${key} has no id set. Skipping...`);
      continue;
    }
    const riotItem = riotItems[wikiItem.id];
    const item_obj = cdragonById[wikiItem.id];
    if (!riotItem) {
      console.log(`[WARN] Item ${key} (${wikiItem.id}) is missing RiotData`);
      continue;
    }
    if (!item_obj) {
      console.log(`[WARN] Item ${key} (${wikiItem.id}) is missing CDragonData`);
      continue;
    }
    lookup_crawl(wikiItem, wikiItems, []);
    allItems[wikiItem.id] = await takeRiftItem(item_obj, riotItem, wikiItem);
  }
  return allItems;
}

async function takeRiftItem(
  a: CDragonItem,
  b: RiotItemEntry,
  c: WikiItem
): Promise<any> {
  const liveData = await fetchLiveItem(a.name);

  const name = a.name?.trim() || '';
  if (name !== b.name?.trim()) {
    console.log(`Item ${a.name}:${a.id} - Name mismatch on riot's "${b.name}"`);
  }
  // if (name !== c.name?.trim()) {
  //   console.log(`Item ${a.name}:${a.id} - Name mismatch on wiki's "${c.name}"`);
  // }

  function check(
    key: string,
    key2?: string
  ): number | any[] | boolean | undefined {
    if (key2) return check_val(`${key}" and "${key2}`, a[key], b[key2]);
    return check_val(key, a[key], b[key]);
  }
  function check_val(
    key: string,
    val_a: number | any[] | boolean | undefined,
    val_b: number | any[] | boolean | undefined
  ) {
    if (Array.isArray(val_a)) {
      val_a.sort();
      if (val_a.length === 0) val_a = undefined;
    }
    if (Array.isArray(val_b)) {
      val_b.sort();
      if (val_b.length === 0) val_b = undefined;
    }
    if (val_a && !val_b && key !== 'inStore')
      console.log(
        `Item ${a.name}:${a.id} - Key "${key}" is null in riot (${val_a})`
      );
    if (val_a && val_b && val_a.toString() !== val_b.toString())
      console.log(
        `Item ${a.name}:${a.id} - Key "${key}" not match. (${val_a} !== ${val_b})`
      );
    return val_a;
  }
  function unique(key: string) {
    if (a[key])
      console.log(
        `Item ${a.name}:${a.id} - Key "${key}" hade unique value. "${a[key]}"`
      );
    return a[key];
  }
  function get_type() {
    //typedata definition
    const typedata = (c.type || []).join(',');
    const s: string[] = [];

    //consumable test
    if (c.effects?.consume) {
      if (c.tier === 1) s.push('Consumable');
      else s.push('Advanced Consumable');
    }
    //distributed test
    if (typedata.includes('Distributed')) s.push('Distributed');

    //basic trinket test
    if (typedata.includes('Basic Trinket')) s.push('Basic Trinket');
    //enchantment test
    if (typedata.includes('Enchantment')) s.push('Enchantment');
    //potions test
    if (typedata.includes('Potion')) s.push('Potion');
    //boots test
    if (typedata.includes('Boots')) s.push('Boots');
    //turret test
    if (typedata.includes('Turret')) s.push('Turret');
    //minion item test
    if (typedata.includes('Minion')) s.push('Minion');
    // GeneratedTip test - not on wiki
    if (a.description?.startsWith('GeneratedTip') || a.description === '')
      s.push('GeneratedTip');

    if (typedata.includes('Basic') && !typedata.includes('Basic Trinket'))
      s.push('Basic');
    else if (
      typedata.includes('Starter') &&
      !typedata.includes('Basic Trinket')
    )
      s.push('Starter');
    else if (typedata.includes('Epic') && !typedata.includes('Basic Trinket'))
      s.push('Epic');
    else if (
      typedata.includes('Legendary') &&
      !typedata.includes('Basic Trinket')
    )
      s.push('Legendary');
    else if (s.length == 0) {
      if (b.depth === 0 || c.tier === 1) {
        if (a.to?.length > 0) s.push('Basic');
        else s.push('Starter');
      } else {
        if (c.effects?.mythic) s.push('Mythic');
        else {
          if (a.to?.length > 0) s.push('Epic');
          else s.push('Legendary');
        }
      }
    }
    return s;
  }
  type ItemCatagoryType =
    | 'championitems'
    | 'distributives'
    | 'starters'
    | 'consumables'
    | 'trinkets'
    | 'boots'
    | 'basics'
    | 'epics'
    | 'legendaries'
    | 'ornnitems'
    | 'mythics'
    | 'minionturretitems'
    | 'unsorted';

  function get_category(): ItemCatagoryType {
    const types = get_type().join(',');
    if (c.champion || b.requiredChampion) return 'championitems';
    if (types.includes('Distributed')) return 'distributives';
    if (types.includes('Starter')) return 'starters';
    if (types.includes('Potion') || types.includes('Consumable'))
      return 'consumables';
    if (types.includes('Trinket')) return 'trinkets';
    if (types.includes('Boots')) return 'boots';
    if (types.includes('Basic') && !types.includes('Basic Trinket'))
      return 'basics';
    if (types.includes('Epic')) return 'epics';
    if (types.includes('Legendary')) return 'legendaries';
    if (types.includes('Mythic'))
      if (c.ornn === true) return 'ornnitems';
      else return 'mythics';
    if (types.includes('Trinket')) return 'trinkets';
    if (
      types.includes('Minion') ||
      types.includes('Turret') ||
      types.includes('GeneratedTip')
    )
      return 'minionturretitems';
    return 'unsorted';
  }
  const stats = c.stats || {};
  delete stats['spec'];
  delete stats['spec2'];
  for (const [key, value] of Object.entries(stats)) {
    allNamedStatsKeysSet.add(key);
    if (typeof value !== 'number')
      console.warn(
        `Item ${a.name}:${a.id} - Stat "${key}" has non-number typed value "${value}"`
      );
  }

  function parse_effect(val: Act | undefined | string, live: OptionElement) {
    if (!val || !live) return undefined;
    if (typeof val === 'string') {
      console.log('Effect Type can not be string');
      return undefined;
    }
    // Try to make RootRatios out of every Effect.
    const descriptionRatios: RootRatio[] = [];
    for (const [idx, line] of Object.entries(live.textContent.split('. '))) {
      const x = spellEffectFromDescription(`Line ${idx + 1}:`, line);

      // Number 0 or number with no sub_ratios
      if (typeof x.values === 'number') {
        if (x.values === 0 || !x.children) continue;
      }
      descriptionRatios.push(x);
    }

    return {
      name: val?.name || '',
      unique: val?.unique || false,
      description: live.textContent,
      // description2: val.description2,
      descriptionHTML: live.innerHTML,
      descriptionRatios,
      cd: Number(val?.cd) || val?.cd,
      recharge: Number(val?.recharge) || val?.recharge,
      charges: Number(val?.charges) || val?.charges,
      range: Number(val?.range) || val?.range,
      radius: Number(val?.radius) || val?.radius,
    };
  }
  const effects = {
    consume: parse_effect(
      { name: 'Consume', description: '' },
      liveData.consume
    ),
    pass: parse_effect(c.effects?.pass, liveData.pass),
    pass2: parse_effect(c.effects?.pass2, liveData.pass2),
    pass3: parse_effect(c.effects?.pass3, liveData.pass3),
    pass4: parse_effect(c.effects?.pass4, liveData.pass4),
    pass5: parse_effect(c.effects?.pass5, liveData.pass5),
    mythic: parse_effect(
      { name: 'Mythic Passive', description: '' },
      liveData.mythic
    ),
    act: parse_effect(c.effects?.act, liveData.act),
  };

  // if (!a.iconPath.startsWith('/lol-game-data/assets/DATA/Items/Icons2D/')) {
  //     console.log("Unknown Item PAth", a.iconPath);
  //     a.iconPath = "";
  // }
  // else {
  //     a.iconPath = a.iconPath.substring("/lol-game-data/assets/DATA/Items/Icons2D/".length);
  // }
  // if (b[a.id]) {
  //     a.image = b[a.id].image;
  //     a.colloq = ';' + b[a.id].colloq.split(';').filter(item => item).join(';');
  //     a.search = a.name.toLowerCase() + a.colloq.toLowerCase();
  // }
  // else {
  //     console.log('No image for item', a.id, a.name)
  // }

  // a.stats = {
  //     //TODO item states
  // };
  let colloq = b.colloq || ';';
  if (colloq.indexOf(';') !== 0) colloq = ';' + colloq;
  const iconPath = a.iconPath
    ? 'https://raw.communitydragon.org/latest/game/assets/items/icons2d' +
      a.iconPath.slice(a.iconPath.lastIndexOf('/')).toLowerCase()
    : '';

  return {
    id: a.id,
    name,
    description: a.description,
    colloq: colloq,
    active: a.active,
    from: check('from') || [],
    to: check('to', 'into') || [],
    categories: check('categories', 'tags'),
    maxStacks: a.maxStacks,
    requiredChampion: check('requiredChampion'),
    requiredAlly: check('requiredAlly'),
    requiredBuffCurrencyName: unique('requiredBuffCurrencyName'),
    requiredBuffCurrencyCost: unique('requiredBuffCurrencyCost'),
    specialRecipe: check('specialRecipe'),
    // "isEnchantment": check("isEnchantment"),
    price: check_val('price', a.price, b.gold.base),
    priceTotal: check_val('priceTotal', a.priceTotal, b.gold.total),
    sellPrice: b.gold.sell || 0,
    inStore: check_val('inStore', a.inStore, b.gold.purchasable),
    iconPath: iconPath,
    spriteStyle: b.image
      ? `background: url('${spriteBaseUri}${b?.image?.sprite}') -${b?.image?.x}px -${b?.image?.y}px; width:${b?.image?.w}px; height:${b?.image?.h}px;`
      : `background:url('${iconPath}') 0px 0px;width:48px;height:48px;background-size:contain;`,
    image: b.image || null,
    maps: map_number_to_names(b.maps),
    depth: b.depth !== undefined ? b.depth : 1,
    limit: liveData.limit,
    requirementDescription: liveData.req,
    menu: c.menu || {},
    stats,
    specialStat: liveData.spec || undefined,
    specialStat2: liveData.spec2 || undefined,
    effects,
    type: get_type(),
    category: get_category(),
  };
}

function map_number_to_names(maps: any): (string | null)[] {
  console.assert(Object.keys(maps).length == 4, 'Maps not length 4');
  return [
    maps['11'] === true ? 'SR' : null,
    maps['12'] === true ? 'HA' : null,
    // maps["21"] === true ? 'Nexus Blitz' : null,
    maps['22'] === true ? 'TFT' : null,
  ].filter((x) => x !== null);
}
