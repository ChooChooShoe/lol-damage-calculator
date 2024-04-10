import { cleanName } from '../LeagueWiki.js';
import { JSDOM } from 'jsdom';
import JSON5 from 'json5';
import { fix_wiki_img } from '../live_wiki_fetch.js';

export type OptionElement = {
  textContent: string;
  innerHTML: string;
} | null;
export async function fetchLiveItem(item_name: string): Promise<{
  spec: string;
  spec2: string;
  consume: OptionElement;
  pass: OptionElement;
  pass2: OptionElement;
  pass3: OptionElement;
  pass4: OptionElement;
  pass5: OptionElement;
  mythic: OptionElement;
  act: OptionElement;
  limit: OptionElement;
  req: OptionElement;
  buy: number;
  sell: number;
}> {
  item_name = cleanName(item_name);
  console.log(`Fetching: Live ${item_name}`);
  const url = `https://leagueoflegends.fandom.com/wiki/${item_name}`;
  const response = await fetch(url);
  const dom = new JSDOM(await response.text());
  // const inputs =
  //   dom.window.document.querySelectorAll<HTMLElement>('[data-source]');

  // if (!inputs) {
  //   console.log(`[ERROR] Item ${item_name} has no Wiki data`);
  //   return {};
  // }

  const document = dom.window.document;

  function qs<T extends Element>(val: string): T | null {
    const ret = document.querySelector<T>(`[data-source="${val}"]`);
    if (ret) fix_wiki_img(ret);
    return ret;
  }
  function qs_required<T extends Element>(val: string): T | null {
    const ret = document.querySelector<T>(`[data-source="${val}"]`);
    if (!ret) {
      console.log(`Item ${item_name}: [data-source="${val}"] is missing.`);
    } else fix_wiki_img(ret);
    return ret;
  }

  const buyEls = document.querySelectorAll(`[data-source="buy"]`);
  const buy = buyEls ? Number(buyEls[2]?.textContent || '') || 0 : 0;
  const sellEls = document.querySelectorAll(`[data-source="sell"]`);
  const sell = buyEls ? Number(sellEls[2]?.textContent || '') || 0 : 0;

  function decompile_effect(
    text: HTMLElement | null,
    removeHead: boolean,
  ): OptionElement {
    if (!text) return null;
    // See: compile_effect in https://leagueoflegends.fandom.com/wiki/Module:ItemData/getter
    // Get from raw data
    //name = effect.name
    //unique = effect.unique
    //cd = effect.cd
    //recharge = effect.recharge
    //charges = effect.charges
    //range = effect.range
    //radius = effect.radius
    //Remove The "UNIQUE - Effect Name :" from html.
    if (removeHead) text.querySelector('.template_sbc')?.remove();
    return {
      textContent: text?.textContent?.trim() || '',
      innerHTML:
        text.firstElementChild?.innerHTML?.trim() ||
        text?.innerHTML?.trim() ||
        '',
    };
  }
  return {
    // disp_name: qs_required('disp_name')?.textContent || '',
    // sub_name: qs('sub_name')?.textContent || '',
    // icon: qs('icon')?.textContent || '',
    // caption: qs('caption')?.textContent || '',
    // ap: qs('ap')?.textContent || '',
    // apunique: qs('apunique')?.textContent || '',
    // ah: qs('ah')?.textContent || '',
    // armor: qs('armor')?.textContent || '',
    // armorunique: qs('armorunique')?.textContent || '',
    // armpen: qs('armpen')?.textContent || '',
    // lethality: qs('lethality')?.textContent || '',
    // lethalityunique: qs('lethalityunique')?.textContent || '',
    // ad: qs('ad')?.textContent || '',
    // as: qs('as')?.textContent || '',
    // cdr: qs('cdr')?.textContent || '',
    // cdrunique: qs('cdrunique')?.textContent || '',
    // crit: qs('crit')?.textContent || '',
    // critdamage: qs('critdamage')?.textContent || '',
    // gp10: qs('gp10')?.textContent || '',
    // hsp: qs('hsp')?.textContent || '',
    // hspunique: qs('hspunique')?.textContent || '',
    // hp: qs('hp')?.textContent || '',
    // hp5: qs('hp5')?.textContent || '',
    // hp5flat: qs('hp5flat')?.textContent || '',
    // lifesteal: qs('lifesteal')?.textContent || '',
    // mr: qs('mr')?.textContent || '',
    // msflat: qs('msflat')?.textContent || '',
    // ms: qs('ms')?.textContent || '',
    // msunique: qs('msunique')?.textContent || '',
    // mana: qs('mana')?.textContent || '',
    // mp5: qs('mp5')?.textContent || '',
    // mp5flat: qs('mp5flat')?.textContent || '',
    // mpen: qs('mpen')?.textContent || '',
    // mpenflat: qs('mpenflat')?.textContent || '',
    // omnivamp: qs('omnivamp')?.textContent || '',
    // pvamp: qs('pvamp')?.textContent || '',
    // spellvamp: qs('spellvamp')?.textContent || '',
    spec: qs('spec')?.firstElementChild?.textContent?.trim() || '',
    spec2: qs('spec2')?.firstElementChild?.textContent?.trim() || '',
    consume: decompile_effect(qs('consume'), false),
    pass: decompile_effect(qs('pass'), true),
    pass2: decompile_effect(qs('pass2'), true),
    pass3: decompile_effect(qs('pass3'), true),
    pass4: decompile_effect(qs('pass4'), true),
    pass5: decompile_effect(qs('pass5'), true),
    mythic: decompile_effect(qs('mythic'), false),
    act: decompile_effect(qs('act'), true),
    limit: decompile_effect(qs('limit'), false),
    req: decompile_effect(qs('req'), false),
    // recipe: qs('recipe')?.textContent || '',
    // builds: qs('builds')?.textContent || '',
    buy,
    sell,
    // id: qs('id')?.textContent || '',
    // sr: qs('sr')?.textContent || '',
    // ha: qs('ha')?.textContent || '',
    // ar: qs('ar')?.textContent || '',
    // menu: qs('menu')?.textContent || '',
    // nickname: qs('nickname')?.textContent || '',
  };
}
