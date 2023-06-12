import { cleanName, fetchWiki, moduleToJSON } from './LeagueWiki';
import { JSDOM } from 'jsdom';
import { fix_wiki_img } from './live_wiki_fetch';

export async function fetchAllWikiItems(): Promise<{ [s: string]: WikiItem }> {
  return fetchWiki(
    `https://leagueoflegends.fandom.com/wiki/Module:ItemData/data`
  ).then((x) => moduleToJSON<{ [s: string]: WikiItem }>(x));
}

export interface WikiItem {
  name: string;
  id?: number;
  formatname?: string;
  tier: number;
  type?: string[] | string;
  effects?: Effects;
  itemlimit?: string;
  itemlimit2?: string;
  limit?: string;
  caption?: string;
  champion?: string[];
  maps: MapsClass | string;
  menu?: { [key: string]: boolean } | string;
  stats?: Stats;
  recipe?: string[];
  buy?: number | string;
  nickname?: string[];
  tags?: Tag[];
  sellratio?: number;
  ornn?: boolean;
  req?: string;
  exclusive?: string;
  sell?: number;
}

export interface Effects {
  consume?: string;
  pass?: Act | string;
  pass2?: Aura;
  act?: Act;
  pass3?: Aura;
  mythic?: MythicClass | string;
  aura?: Aura;
}

export interface Act {
  name?: string;
  unique?: boolean;
  description: string;
  cd?: string;
  range?: string;
  charges?: string;
  description2?: string;
  recharge?: string;
}

export interface Aura {
  name?: string;
  unique?: boolean;
  description: string;
  cd?: string;
}

export interface MythicClass {
  ad?: number;
  hp?: number;
  ap?: number;
  ms?: number;
  ah?: number;
  armpen?: number;
  mpen?: number;
  msflat?: number;
  armor?: number;
  mr?: number;
  mpenflat?: number;
  spec?: string;
  omnivamp?: number;
  as?: number;
  lethality?: number;
}

export interface MapsClass {
  sr: boolean;
  ha?: boolean;
  nb?: boolean;
  tt?: boolean;
  cs?: boolean;
}

export interface Stats {
  ah?: number;
  hp?: number;
  mana?: number;
  mr?: number;
  armor?: number;
  ap?: number;
  hsp?: number;
  mp5?: number;
  ad?: number;
  lethality?: number;
  as?: number;
  msflat?: number;
  gp10?: number;
  lifesteal?: number;
  mpen?: number;
  crit?: number;
  spec?: string;
  hp5?: number;
  omnivamp?: number;
  ms?: number;
  hp5flat?: number;
  mpenflat?: number;
  armpen?: number;
}

export enum Tag {
  HasOnAttack = 'HasOnAttack',
  HasOnHit = 'HasOnHit',
  OnHitAppliesLifeSteal = 'OnHitAppliesLifeSteal',
}

export async function fetchTemplateItem(
  item_name: string
): Promise<Partial<LiveItemData>> {
  item_name = cleanName(item_name);
  console.log(`Fetching: Live ${item_name}`);
  const url = `https://leagueoflegends.fandom.com/wiki/${item_name}`;
  const response = await fetch(url);
  const dom = new JSDOM(await response.text());
  const inputs =
    dom.window.document.querySelectorAll<HTMLElement>('[data-source]');

  if (!inputs) {
    console.log(`[ERROR] Item ${item_name} has no Wiki data`);
    return {};
  }

  // This way flattens all the values.
  // source might be duplicated and will silently overwrite the older values.
  const map: Partial<LiveItemData> = {};
  for (const htmlElement of inputs) {
    const source = htmlElement.dataset.source!;
    fix_wiki_img(htmlElement);
    const key = source.replaceAll(/ /g, '_');
    map[key] = htmlElement;
  }
  // Does not test for type just assumes that all the values there.
  return map;
}

export interface LiveItemData {
  disp_name: HTMLElement;
  image: HTMLElement;
  limit: HTMLElement;
  range: HTMLElement;
  recipe: HTMLElement;
  buy: HTMLElement;
  sell: HTMLElement;
  id: HTMLElement;
  menu: HTMLElement;
  nickname: HTMLElement;
  [key: string]: HTMLElement;
}
