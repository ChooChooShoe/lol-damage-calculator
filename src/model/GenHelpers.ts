import type { SkillData } from '@/api/DataTypes';

export function clearDescRatios<T>(
  SkillDatas: { [skillName in keyof T]: SkillData },
  ...keys: (keyof T)[]
) {
  for (const k of keys) {
    SkillDatas[k].description.forEach((x) => (x.descriptionRatios = []));
  }
}
