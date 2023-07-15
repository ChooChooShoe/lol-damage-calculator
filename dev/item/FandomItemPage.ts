import { cleanName } from '../LeagueWiki.js';
import { JSDOM } from 'jsdom';
import JSON5 from 'json5';
import { fix_wiki_img } from '../live_wiki_fetch';

export async function fetchLiveItem(item_name: string): Promise<Partial<any>> {
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

  function qs<T extends Element>(val: string): T | null {
    const ret = dom.window.document.querySelector<T>(`[data-source="${val}"]`);
    fix_wiki_img(ret);
    if (!ret) {
      console.log(`Item ${item_name}: [data-source="${val}"] is missing.`);
    }
    return ret;
  }

  // This way flattens all the values.
  // source might be duplicated and will silently overwrite the older values.
  // const map: Partial<LiveItemData> = {};
  // for (const htmlElement of inputs) {
  //   const source = htmlElement.dataset.source!;
  //   fix_wiki_img(htmlElement);
  //   const key = source.replaceAll(/ /g, '_');
  //   map[key] = htmlElement;
  // }
  // Does not test for type just assumes that all the values there.
  return {
    disp_name: qs('disp_name')?.textContent || '',
    sub_name: qs('sub_name')?.textContent || '',
    icon: qs('icon')?.textContent || '',
    caption: qs('caption')?.textContent || '',
    ap: qs('ap')?.textContent || '',
    apunique: qs('apunique')?.textContent || '',
    ah: qs('ah')?.textContent || '',
    armor: qs('armor')?.textContent || '',
    armorunique: qs('armorunique')?.textContent || '',
    armpen: qs('armpen')?.textContent || '',
    lethality: qs('lethality')?.textContent || '',
    lethalityunique: qs('lethalityunique')?.textContent || '',
    ad: qs('ad')?.textContent || '',
    as: qs('as')?.textContent || '',
    cdr: qs('cdr')?.textContent || '',
    cdrunique: qs('cdrunique')?.textContent || '',
    crit: qs('crit')?.textContent || '',
    critdamage: qs('critdamage')?.textContent || '',
    gp10: qs('gp10')?.textContent || '',
    hsp: qs('hsp')?.textContent || '',
    hspunique: qs('hspunique')?.textContent || '',
    hp: qs('hp')?.textContent || '',
    hp5: qs('hp5')?.textContent || '',
    hp5flat: qs('hp5flat')?.textContent || '',
    lifesteal: qs('lifesteal')?.textContent || '',
    mr: qs('mr')?.textContent || '',
    msflat: qs('msflat')?.textContent || '',
    ms: qs('ms')?.textContent || '',
    msunique: qs('msunique')?.textContent || '',
    mana: qs('mana')?.textContent || '',
    mp5: qs('mp5')?.textContent || '',
    mp5flat: qs('mp5flat')?.textContent || '',
    mpen: qs('mpen')?.textContent || '',
    mpenflat: qs('mpenflat')?.textContent || '',
    omnivamp: qs('omnivamp')?.textContent || '',
    pvamp: qs('pvamp')?.textContent || '',
    spellvamp: qs('spellvamp')?.textContent || '',
    spec: qs('spec')?.textContent || '',
    spec2: qs('spec2')?.textContent || '',
    consume: qs('consume')?.textContent || '',
    pass: qs('pass')?.textContent || '',
    pass2: qs('pass2')?.textContent || '',
    pass3: qs('pass3')?.textContent || '',
    pass4: qs('pass4')?.textContent || '',
    pass5: qs('pass5')?.textContent || '',
    mythic: qs('mythic ')?.textContent || '',
    act: qs('act')?.textContent || '',
    limit: qs('limit')?.textContent || '',
    req: qs('req')?.textContent || '',
    recipe: qs('recipe')?.textContent || '',
    builds: qs('builds')?.textContent || '',
    buy: qs('buy')?.textContent || '',
    sell: qs('sell')?.textContent || '',
    id: qs('id')?.textContent || '',
    sr: qs('sr')?.textContent || '',
    ha: qs('ha')?.textContent || '',
    ar: qs('ar')?.textContent || '',
    menu: qs('menu')?.textContent || '',
    nickname: qs('nickname')?.textContent || '',
  };
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
