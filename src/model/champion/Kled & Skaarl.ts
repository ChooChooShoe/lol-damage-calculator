import type { SkillModel } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import { ChampionSkillsData } from '../ChampionSkillsData';
export const name: ChampionName = 'Kled & Skaarl';
export const skillsData = ChampionSkillsData['Kled & Skaarl'];

export const KledSkaarl = {} satisfies { [skillName in string]: SkillModel };
