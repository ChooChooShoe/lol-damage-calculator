import { RootRatio, SkillModel } from '@/api/DataTypes';
import {
  ChampionSkillsData,
  type ChampionSkillsDataType,
} from '@/model/ChampionSkillsData';
import json5 from 'json5';
import { saveStringFile } from './fetch_utils';
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
        const levelingArr: RootRatio[] = [];
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
          description: sdd.descriptionHTML,
          leveling: levelingArr,
        };
      }
    }
    SubSkillList[champName] = model;
  }
  const index: string[] = [];
  for (const [champKey, subskillObj] of Object.entries(SubSkillList)) {
    const jsKey = champKey.replaceAll(/[ &'.]/g, '');
    const skillText: string[] = [];
    for (const [k, v] of Object.entries(subskillObj)) {
      skillText.push(
        `const ${k}: SubSkill[] = ${json5.stringify(v, {
          space: 2,
        })}`
      );
    }

    saveStringFile(
      `./src/model/champion/${champKey}.ts`,
      `import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';

export const name: ChampionName = '${champKey}';
${skillText.join(';\n')}
export const ${jsKey} = {${Object.keys(subskillObj).toString()}}`
    );
    index.push(`import ${jsKey} from "./${champKey}"`);
  }
  index.push(
    `export ChampSkills = ${Object.keys(SubSkillList).forEach((x) =>
      x.replaceAll(/[ &'.]/g, '')
    )};`
  );
  //Save champion/index.ts
  saveStringFile(`./src/model/champion/index.ts`, index.join('\n'));
}
