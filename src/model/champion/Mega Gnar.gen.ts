import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Mega Gnar';

export default {} satisfies { [skillName in string]: SkillData };
