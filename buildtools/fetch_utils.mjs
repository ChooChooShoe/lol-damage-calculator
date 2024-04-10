import fs from 'fs';
import fetch from 'node-fetch';
import he from 'he';
import JSON5 from 'json5';

const DEBUG = false;

if (DEBUG) {
  fs.rmSync('./.debug/', { recursive: true, force: true });
  fs.mkdirSync(`./.debug/`, { recursive: true }, (err) => {
    if (err && err.code !== 'EEXIST') console.info(err);
  });
}

/**
 * Fetches in a wiki data page and returns the textarea content as json object.
 * @param {RequestInfo} url
 * @returns string
 */
export async function fetch_wiki(url) {
  console.log('Fetching (wiki):', url);
  const response = await fetch(url);
  if (response.redirected)
    console.info('[WARN] Page redirected', url, 'to', response.url);
  const text = (await response.text()).match(
    /<textarea[^>]*>([^]*)<\/textarea>/m,
  );
  if (text) {
    const decoded = he.decode(text[1]);
    return { text: decoded, response };
  }
  console.info('[ERROR] Page had no content', response.url);
  return { text: null, response };
}

export async function fetch_mod_data() {
  const raw = await fetch_wiki(
    `https://leagueoflegends.fandom.com/wiki/Module:ChampionData/data?action=edit`,
  );

  // Converts Lua data to json data.
  const results = [];
  for (const line of raw.text.split('\n')) {
    const tline = line.trim();
    if (tline === '' || tline.startsWith('--')) continue;
    if (tline.startsWith('return')) {
      results.push('{');
      continue;
    }
    results.push(
      tline
        // replaces [" and "] with "
        .replace(/\["|"]/g, `"`)
        // replaces = with :
        .replace(/=/g, `:`)
        // replaces [1] : with nothing if line has a { or is after a ', '
        .replace(/, \[\d] : /g, `, `)
        .replace(/{\[\d] : /g, `{`)
        // replaces { and } with [ and ] only if line has both
        .replace(/{(.*)}/g, `[$1]`)
        // replaces [12] : with "12" :
        .replace(/\[(\d+)] : /g, `"$1" : `)
        // replaces -- with //
        .replace(/--/g, '//'),
    );
  }
  // return parsed JSON as a javascript object.
  const x = JSON5.parse(results.join(''));
  if (DEBUG) saveFile('./.debug/Module_ChampionData.json', x);
  return x;
}

export function saveFile(path, data) {
  console.log(`Saving file '${path}'...`);
  return fs.promises.writeFile(
    path,
    JSON.stringify(data || {}, null, 2),
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log(`The file '${path}' was saved!`);
    },
  );
}

if (DEBUG) {
  fs.mkdirSync('./.debug/', { recursive: true }, (err) => {
    if (err && err.code !== 'EEXIST') console.info(err);
  });
  // console.log("Ashe", await make_wiki_skill_model("Ashe","Volley"));
  // console.log("Ashe");
}

export async function make_wiki_skill_model(champ_name, skill_name) {
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
    fs.mkdirSync(`./.debug/${champ_name}`, { recursive: true }, (err) => {
      if (err && err.code !== 'EEXIST') console.info(err);
    });
    await saveFile(
      `./.debug/${champ_name}/${skill_name
        .replace(':', '_')
        .replace('/', '_')}.json`,
      obj,
    );
  }
  return { url: decodeURI(raw.response.url), model: obj };
}
function autoCast(s) {
  if (s === null || s === undefined) return null;
  s = s.toString().trim();
  if (s === '') return '';
  if (!isNaN(Number(s))) return Number(s);
  if (parseFloat(s)) return parseFloat(s);
  if (s === 'true' || s === 'True') return true;
  if (s === 'false' || s === 'False') return false;
  return s;
}
