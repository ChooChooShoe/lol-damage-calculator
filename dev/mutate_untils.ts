export function list_check<T extends string>(
  search: string | T,
  valid_values: Iterable<string | T>,
  fallback_value: T
): T;
export function list_check<T extends string>(
  search: string | T,
  valid_values: Iterable<string | T>
): T | undefined;
export function list_check<T extends string>(
  search: string | T,
  valid_values: Iterable<string | T>,
  fallback_value?: T
): T | undefined {
  for (const i of valid_values) if (search.includes(i)) return i as T;
  return fallback_value;
}
export function table_check<T>(
  search: string,
  valid_table: { [key: string]: string | T },
  fallback_value: T
): T;
export function table_check<T>(
  search: string,
  valid_table: { [key: string]: string | T }
): T | undefined;
export function table_check<T>(
  search: string,
  valid_table: { [key: string]: string | T },
  fallback_value?: T
): T | undefined {
  search = search.toLowerCase();
  for (const key in valid_table)
    if (search.includes(key)) return valid_table[key] as T;
  return fallback_value;
}
export function matchKeyword<T>(
  search: string,
  validation_table: { [key: string]: T },
  defaultVal: T
): T;
export function matchKeyword<T>(
  search: string,
  validation_table: { [key: string]: T },
  defaultVal: T | null
): T | null {
  search = search.toLowerCase();
  for (const key in validation_table)
    if (search.includes(key)) return validation_table[key];

  console.log(
    `[WARN] matchKeyword no results: default="${defaultVal}" for search "${search}"`
  );
  return defaultVal;
}

export const valid_targeting = [
  'Passive',
  'Direction',
  'Location',
  'Auto',
  'Unit',
  'Vector',
];
export const valid_spelleffects = [
  'Proc',
  'Area',
  'Spell',
  'See Notes',
  'Basic',
  'Default',
  'AOE DOT',
  'DOT',
  'Pet',
  'Non-Damaging',
];
export const valid_spellshield = [
  'Blocked',
  'Not Blocked',
  'See Notes',
  'Missing',
];
export const valid_projectile = ['Blocked', 'See Notes'];
export const valid_grounded = ['Disabled', 'See Notes', 'Not Disabled'];
export const valid_knockdown = ['Interrupted', 'See Notes', 'Not Interrupted'];
