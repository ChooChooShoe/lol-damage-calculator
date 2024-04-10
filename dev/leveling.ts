import type { ScaleValue, DamageType } from '@/api/DataTypes';

export function levelingToVal(leveling: string): ScaleValue;
export function levelingToVal(leveling?: string | null): ScaleValue | undefined;
export function levelingToVal(
  leveling?: string | null,
): ScaleValue | undefined {
  if (!leveling) return undefined;
  const arr = leveling
    .split('/')
    .map((x: string) => Number(x.trim()) || x.trim());
  if (arr.length === 1) return arr[0];
  return arr;
}

export function mutate_damagetype(damagetype: string): DamageType[] {
  const res: ('Physical' | 'Magic' | 'True')[] = [];
  if (damagetype.includes('Physical')) res.push('Physical');
  if (damagetype.includes('Magic')) res.push('Magic');
  if (damagetype.includes('True')) res.push('True');
  return res;
}

export function numberExpandOnLevel(values: string): number[] {
  const list: number[] = [];
  //Ex. 'Damaging basic attacks and ability damage deal 10 − 45'
  const found = values.match(/([\d.]+) − ([\d.]+)/);
  if (!found) return list;
  const start = Number(found[1]);
  const end = Number(found[2]);
  const range = 18;
  const diff = (end - start) / (range - 1);
  for (let i = 0; i < range; i++) {
    const answer = +(start + diff * i);
    list.push(+answer.toFixed(2) || i);
  }
  return list;
}
