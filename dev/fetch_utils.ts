import * as fs from 'fs';
import fetch, { type RequestInfo } from 'node-fetch';
import { JSDOM } from 'jsdom';
import JSON5 from 'json5';
import { DataDragon } from './datadragon';
import { fetchWiki } from './LeagueWiki';

const DEBUG = true;

if (DEBUG) {
  mkdir(`./.debug/`);
  // fetch_Module_ChampionData();
}

export async function fetchAndSaveRealms(): Promise<{
  v: string;
  dv: string;
  l: string;
  cdn: string;
}> {
  const realms = await DataDragon.getRealms();
  const myRealms = {
    v: realms.v,
    dv: realms.v.replace(/\.1$/, ''),
    l: realms.l,
    cdn: realms.cdn,
  };
  console.log('Using ddragon version:', realms.v);
  await saveFile(`./src/api/version.json`, myRealms);
  return myRealms;
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
export function saveStringFile(
  path: fs.PathLike | fs.promises.FileHandle,
  data: string
): Promise<void> {
  console.log(`Saving file '${path}' as string...`);
  return fs.promises.writeFile(path, data);
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

export async function make_wiki_skill_model(
  champ_name: string,
  skill_name: string
) {
  const skillDataUrl = `https://leagueoflegends.fandom.com/wiki/Template:Data_${champ_name
    .trim()
    .replace(/ /g, '_')}/${skill_name.trim().replace(/ /g, '_')}?action=edit`;
  const raw = await fetchWiki(skillDataUrl);
  if (!raw) return { url: decodeURI(skillDataUrl), model: null };

  const obj = {
    name: skill_name,
    url: decodeURI(skillDataUrl),
    redirected: false,
  };
  // Trims {{ and \n}}  splits lines and create an iterator
  const splitIter = raw.trim().slice(2, -3).split('\n|')[Symbol.iterator]();

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
  return { url: skillDataUrl, model: obj };
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

export function stackData<T>(
  obj: Record<string, T>,
  toStack: string
): [T | undefined, T | undefined, T | undefined, T | undefined, T | undefined] {
  return [
    obj[`${toStack}`],
    obj[`${toStack}2`],
    obj[`${toStack}3`],
    obj[`${toStack}4`],
    obj[`${toStack}5`],
  ];
}
