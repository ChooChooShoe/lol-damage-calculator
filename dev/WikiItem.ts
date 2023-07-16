import { cleanName, fetchWiki, moduleToJSON } from './LeagueWiki.js';
import { JSDOM } from 'jsdom';
import { fix_wiki_img } from './live_wiki_fetch.js';

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
  type?: string[];
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
  pass?: Act;
  pass2?: Act;
  pass3?: Act;
  pass4?: Act;
  pass5?: Act;
  act?: Act;
  mythic?: MythicClass | string;
  aura?: Act;
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
  radius?: string;
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
