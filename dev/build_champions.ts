import JSON5 from 'json5';
import { BaseStatsObj } from '../src/api/ChampObjStats';
import { SkillData, SubSkill, WikiChampionData } from '../src/api/DataTypes';
import { ChampionComplex, DataDragon } from './datadragon';
import { fetchAndSaveRealms, saveStringFile } from './fetch_utils';
import {
  fetch_Module_ChampionData,
  getSkillModelsForChamp,
  ModuleChampionData,
  ModuleChampionDataFile,
} from './LeagueWiki';
import { fetch_live_wiki_skills } from './live_wiki_fetch';
import { mutateWikiChampionData } from './WikiChampListFetch';

console.log('Live Wiki Fetching for all data. VERSION 1.0');

main();
async function main() {
  const realms = await fetchAndSaveRealms();

  const dataDragon = new DataDragon({
    version: realms.v,
    lang: 'en_US',
  });

  const ModuleChampionDataFile = await fetch_Module_ChampionData();

  const ChampionList: Record<string, WikiChampionData | null> = {};
  const SkillList: Record<string, Record<string, SkillData> | null> = {};
  const promises: Array<Promise<void>> = [];
  // const ChampionModule = await fetch_mod_data();
  for (const [name, raw_data] of Object.entries(ModuleChampionDataFile)) {
    if (raw_data.date === 'Upcoming') continue;

    // To keep the order consistant.
    ChampionList[name] = null;
    SkillList[name] = null;

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
            riot_model
          );
          SkillList[name] = liveData;

          ChampionList[name] = mutateWikiChampionData(
            name,
            raw_data,
            riot_model
          );
        })
        .catch((e) => console.log(e))
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
export default ChampionListData;\n`
  );
  //Save ChampionSkillsData.ts
  saveStringFile(
    './src/model/ChampionSkillsData.ts',

    `import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from './ChampionListData';
export type ChampionSkillsDataType = {
  [key in ChampionName]: {
    [s in string]: SkillData & (key extends string ? { champion: key } : never);
    };
};

export const ChampionSkillsData = 
${JSON5.stringify(SkillList, { space: 2 })} satisfies ChampionSkillsDataType;

export default ChampionSkillsData;
\n`
  );

  console.log('Goodbye');
}
