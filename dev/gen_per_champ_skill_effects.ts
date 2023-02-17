import { RootRatio, SkillModel } from '@/api/DataTypes';
import {
  ChampionSkillsData,
  type ChampionSkillsDataType,
} from '../src/model/ChampionSkillsData';
import json5 from 'json5';
import { saveStringFile, mkdir } from './fetch_utils';
import { spellEffectFromStrings } from './skill_ratios_parse';

makePerChampnionTsFiles(ChampionSkillsData);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function makePerChampnionTsFiles(
  ModuleChampionDataFile: ChampionSkillsDataType
) {
  const SubSkillList: Record<string, Record<string, SkillModel>> = {};

  for (const [champName, data] of Object.entries(ModuleChampionDataFile)) {
    const model: Record<string, SkillModel> = {};

    for (const [skillName, skilldata] of Object.entries(data)) {
      model[skillName] = { effects: [] };

      for (const [idx, sdd] of Object.entries(skilldata.description)) {
        const descgArr: RootRatio[] = [];
        const levelingArr: RootRatio[] = [];

        //Try to make leveling from text;
        const descriptionText = sdd.description.split('. ');
        for (const [index, descTextLine] of Object.entries(descriptionText)) {
          const root_ratio = spellEffectFromStrings(
            `Line ${index + 1}:`,
            descTextLine,
            descTextLine
          );
          // Filter the empty ones. values is 0 and has no children.
          if (root_ratio.values === 0) if (!root_ratio.children) continue;

          descgArr.push(root_ratio);
        }

        for (const leveling of sdd.leveling) {
          const root_ratio = spellEffectFromStrings(
            leveling.name,
            leveling.values,
            leveling.values
          );
          levelingArr.push(root_ratio);
        }
        model[skillName].effects[idx] = {
          img: sdd.icon,
          description: sdd.description,
          descriptionRatios: descgArr,
          leveling: sdd.leveling,
          levelingRatios: levelingArr,
          hidden: false,
          locked: true,
        };
      }
    }
    SubSkillList[champName] = model;
  }
  const index: string[] = [];
  const indexExport: string[] = [];
  for (const [champKey, subskillObj] of Object.entries(SubSkillList)) {
    const jsKey = champKey.replaceAll(/[ &'.]/g, '');
    const skillText: string[] = [];
    for (const [k, v] of Object.entries(subskillObj)) {
      skillText.push(
        `"${k}": ${json5.stringify(v, {
          space: 2,
        })}`
      );
    }

    mkdir('./src/model/champion/');
    saveStringFile(
      `./src/model/champion/${champKey}.ts`,
      `import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = "${champKey}";
export const skillsData = ChampionSkillsData["${champKey}"];

export const ${jsKey} = {${skillText.join(
        ',\n'
      )}} satisfies { [skillName in string]: SkillModel };`
    );
    index.push(`import { ${jsKey} } from "./champion/${champKey}"`);
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
} satisfies ChampionSkillsModelType;`
  );
  //Save champion/index.ts
  saveStringFile(`./src/model/ChampionSkillsModel.ts`, index.join('\n'));
}
