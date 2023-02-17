import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Mega Gnar';
export const skillsData = ChampionSkillsData['Mega Gnar'];

export const MegaGnar = {} satisfies { [skillName in string]: SkillModel };
