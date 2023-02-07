import * as fs from 'fs';
import fetch, { type RequestInfo } from 'node-fetch';
import { JSDOM } from 'jsdom';
import JSON5 from 'json5';

const DEBUG = true;

if (DEBUG) {
  mkdir(`./.debug/`);
  fetch_Module_ChampionData();
}

export async function fetchAndSaveRealms(): Promise<{
  v: string;
  l: string;
  cdn: string;
}> {
  const realms: any = await (
    await fetch('https://ddragon.leagueoflegends.com/realms/na.json')
  ).json();

  console.log('Using ddragon version:', realms.v);
  await saveFile(`./src/api/version.json`, {
    v: realms.v,
    dv: realms.v.replace(/\.1$/, ''),
    l: realms.l,
    cdn: realms.cdn,
  });

  return realms;
}

export function mkdir(folder: fs.PathLike) {
  fs.mkdirSync(folder, { recursive: true });
}
export function saveFile(
  path: fs.PathLike | fs.promises.FileHandle,
  data: any
): Promise<void> {
  console.log(`Saving file '${path}'...`);
  return fs.promises.writeFile(path, JSON.stringify(data || {}, null, 2));
}
export function saveTSFile(
  path: fs.PathLike | fs.promises.FileHandle,
  data: any,
  preText: string,
  postText: string
): Promise<void> {
  console.log(`Saving file '${path}' as typescript...`);
  return fs.promises.writeFile(
    path,
    `${preText}\n${JSON5.stringify(data || {}, {
      space: 2,
    })}\n${postText}`
  );
}

export async function saveFileBlob(
  path: fs.PathLike | fs.promises.FileHandle,
  blob: Blob
): Promise<void> {
  console.log(`Saving file (BLOB) '${path}'...`);
  const x = await blob.arrayBuffer();
  return fs.promises.writeFile(path, Buffer.from(x));
}
export function fileExists(path: fs.PathLike): boolean {
  return fs.existsSync(path);
}

/**
 * Fetches in a wiki data page and returns the textarea content as json object.
 * @param {RequestInfo} url
 * @returns string
 */
export async function fetch_wiki(url: RequestInfo) {
  console.log('Fetching (wiki):', url);
  const response = await fetch(url);
  if (response.redirected)
    console.info('[WARN] Page redirected', url, 'to', response.url);

  const dom = new JSDOM(await response.text());
  const text = dom.window.document.querySelector('pre.mw-code.mw-script');
  if (text) return { text: text.textContent || '', response };
  console.info('[ERROR] Page had no content', response.url);
  return { text: '', response };
}

export async function wiki_Module_to_JSON(text: string): Promise<any> {
  // Converts Lua data to json data.
  const results: string[] = [];
  for (const line of text.split('\n')) {
    const tline = line.trim();
    if (tline === '' || tline.startsWith('--')) continue;
    if (tline.startsWith('return')) {
      results.push('{');
      continue;
    }
    results.push(
      tline
        //replaces [" and "] with "
        .replace(/\["|"]/g, `"`)
        //replaces = with :
        .replace(/=/g, `:`)
        //replaces [1] : with nothing if line has a { or is after a ', '
        .replace(/, \[\d] : /g, `, `)
        .replace(/{\[\d] : /g, `{`)
        //replaces { and } with [ and ] only if line has both
        .replace(/{(.*)}/g, `[$1]`)
        //replaces [12] : with "12" :
        .replace(/\[(\d+)] : /g, `"$1" : `)
        //replaces -- with //
        .replace(/--/g, '//')
    );
  }
  // return parsed JSON as a javascript object.
  return JSON5.parse(results.join(''));
}

export async function fetch_Module_ChampionData(): Promise<{
  [key: string]: any;
}> {
  const raw = await fetch_wiki(
    `https://leagueoflegends.fandom.com/wiki/Module:ChampionData/data`
  );

  const x = wiki_Module_to_JSON(raw.text);

  if (DEBUG) {
    await saveFile('./.debug/Module_ChampionData.json', await x);
  }
  return x;
}

export async function make_wiki_skill_model(
  champ_name: string,
  skill_name: string
) {
  const skillDataUrl = `https://leagueoflegends.fandom.com/wiki/Template:Data_${champ_name
    .trim()
    .replace(/ /g, '_')}/${skill_name.trim().replace(/ /g, '_')}?action=edit`;
  const raw = await fetch_wiki(skillDataUrl);
  if (!raw.text) return { url: decodeURI(raw.response.url), model: null };

  const obj = {
    name: skill_name,
    url: decodeURI(raw.response.url),
    redirected: raw.response.redirected,
  };
  // Trims {{ and \n}}  splits lines and create an iterator
  const splitIter = raw.text
    .trim()
    .slice(2, -3)
    .split('\n|')
    [Symbol.iterator]();

  // skip first line
  splitIter.next();

  for (const line of splitIter) {
    const index = line.indexOf('=');
    const key = line.slice(0, index).trim().replace(/ /, '_');
    const value = line.slice(index + 1).trim();
    obj[key] = autoCast(value);
  }
  if (DEBUG) {
    mkdir(`./.debug/${champ_name}`);
    await saveFile(
      `./.debug/${champ_name}/${skill_name
        .replace(':', '_')
        .replace('/', '_')}.json`,
      obj
    );
  }
  return { url: decodeURI(raw.response.url), model: obj };
}
function autoCast(s: string): string | number | boolean;
function autoCast(s: null | undefined): null;
function autoCast(
  s: string | null | undefined
): string | number | boolean | null {
  if (s === null || s === undefined) return null;
  s = s.toString().trim();
  if (s === '') return '';
  if (!isNaN(Number(s))) return Number(s);
  if (parseFloat(s)) return parseFloat(s);
  if (s === 'true' || s === 'True') return true;
  if (s === 'false' || s === 'False') return false;
  return s;
}
