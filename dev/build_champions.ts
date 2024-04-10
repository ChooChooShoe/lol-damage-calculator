import JSON5 from 'json5';
import { SkillData, WikiChampionData } from '../src/api/DataTypes.js';
import { DataDragon } from './datadragon.js';
import { fetchAndSaveRealms, mkdir, saveStringFile } from './fetch_utils.js';
import {
  fetch_Module_ChampionData,
  getSkillModelsForChamp,
} from './LeagueWiki.js';
import { fetch_live_wiki_skills } from './live_wiki_fetch.js';
import { mutateWikiChampionData } from './WikiChampListFetch.js';

console.log('Live Wiki Fetching for all data. VERSION 1.0');

const champWhitelist: null | string[] = null;

main();
async function main() {
  const realms = await fetchAndSaveRealms();

  const dataDragon = new DataDragon({
    version: realms.v,
    lang: 'en_US',
  });

  const ModuleChampionDataFile = await fetch_Module_ChampionData();

  const ChampionList: Record<string, WikiChampionData | null> = {};
  const SkillList: Record<string, Record<string, SkillData>> = {};
  const promises: Array<Promise<void>> = [];
  // const ChampionModule = await fetch_mod_data();
  for (const [name, raw_data] of Object.entries(ModuleChampionDataFile)) {
    if (raw_data.date === 'Upcoming') continue;
    if (champWhitelist && !champWhitelist.includes(name)) continue;

    // To keep the order consistant.
    ChampionList[name] = null;
    SkillList[name] = {};

    const ddragonFull = dataDragon.findChampion(raw_data.apiname);

    promises.push(
      ddragonFull
        .then(async (riot_model): Promise<void> => {
          // const liveData = await fetch_live_wiki_skills(
          //   name,
          //   raw_data,
          //   riot_model
          // );
          // SkillList[name] = liveData;
          const liveData = await getSkillModelsForChamp(
            name,
            raw_data,
            riot_model,
          );
          SkillList[name] = liveData;

          ChampionList[name] = mutateWikiChampionData(
            name,
            raw_data,
            riot_model,
          );
        })
        .catch((e) => console.log(e)),
    );
  }
  console.log('Awaiting all Promises');
  await Promise.all(promises);
  // _.merge(ChampionList, OverwriteChampionList);
  saveStringFile(
    './src/model/ChampionListData.ts',
    `import type { ChampListEntry } from './ChampObj';
// prettier-ignore
export type ChampionName = "${Object.keys(ChampionList).join(`" | "`)}";

export const ChampionListData = 
${JSON5.stringify(ChampionList, {
  space: 2,
})} satisfies Record<ChampionName, ChampListEntry>;\n
export default ChampionListData;\n`,
  );
  //Save ChampionSkillsData.ts
  saveGenModels(SkillList);

  console.log('Goodbye');
}

function saveGenModels(SkillList: Record<string, Record<string, SkillData>>) {
  const index: string[] = [];
  const indexExport: string[] = [];
  for (const [champKey, skillObj] of Object.entries(SkillList)) {
    const jsKey = champKey.replaceAll(/[ &'.]/g, '');
    const skillText: string[] = [];
    for (const [k, v] of Object.entries(skillObj)) {
      skillText.push(
        `"${k}": ${JSON5.stringify(v, {
          space: 2,
        })}`,
      );
    }

    mkdir('./src/model/champion/');
    saveStringFile(
      `./src/model/champion/${champKey}.gen.ts`,
      `import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = "${champKey}";

export default {${skillText.join(
        ',\n',
      )}} satisfies { [skillName in string]: SkillData };`,
    );
    index.push(`import ${jsKey} from "./champion/${champKey}"`);
    indexExport.push(`"${champKey}": ${jsKey},`);
  }
  index.push(`
import type { ChampionName } from './ChampObj';
import type { SkillModel } from '@/api/DataTypes';
export type ChampionSkillsModelType = {
  [key in ChampionName]: {
    [skillName in string]: SkillModel;
  };
};`);
  index.push(
    `export const ChampionSkillsModel = {
${indexExport.join('\n')}
} satisfies ChampionSkillsModelType;`,
  );
  //Save champion/index.ts
  saveStringFile(`./src/model/ChampionSkillsModel.gen.ts`, index.join('\n'));
}
