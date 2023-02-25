import Annie from './champion/Annie';

import type { ChampionName } from './ChampObj';
import type { SkillModel } from '@/api/DataTypes';
export type ChampionSkillsModelType = {
  [key in ChampionName]: {
    [skillName in string]: SkillModel;
  };
};
export const ChampionSkillsModel = {
  Annie: Annie,
} satisfies ChampionSkillsModelType;
