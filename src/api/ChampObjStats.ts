export type Stat = keyof ChampObjStats;
export interface ChampObjStats {
  level: number;
  flat_mr_reduction: number;
  percent_mr_reduction: number;
  percent_magicpen: number;
  flat_magicpen: number;
  flat_armor_reduction: number;
  percent_armor_reduction: number;
  percent_armorpen: number;
  percent_bonus_armorpen: number;
  lethality: number;
  flat_armorpen: number;

  lifesteal: number;
  spellvamp: number;
  omnivamp: number;
  pysicalvamp: number;

  tenacity: number;
  slow_resist: number;

  base_hp: number;
  bonus_hp: number;
  maximum_hp: number;
  missing_hp: number;
  current_hp: number;
  total_shield: number;
  total_ap: number;
  ability_haste: number;
  ultimateHaste: number;
  cdr: number;

  base_attackspeed: number; // non-riot
  bonus_attackspeed: number;
  total_attackspeed: number;
  percent_pysical_reduction: number;
  eff_physical_hp: number;
  percent_magic_reduction: number;
  eff_magic_hp: number;

  // generated props
  base_ad: number;
  bonus_ad: number;
  total_ad: number;
  base_mana: number;
  bonus_mana: number;
  total_mana: number;
  base_movespeed: number;
  bonus_movespeed: number;
  total_movespeed: number;
  base_armor: number;
  bonus_armor: number;
  total_armor: number;
  base_mr: number;
  bonus_mr: number;
  total_mr: number;
  base_attackrange: number;
  bonus_attackrange: number;
  total_attackrange: number;
  base_hpregen: number;
  bonus_hpregen: number;
  total_hpregen: number;
  base_manaregen: number;
  bonus_manaregen: number;
  total_manaregen: number;
  base_critchance: number;
  bonus_critchance: number;
  total_critchance: number;
  base_critdamage: number;
  bonus_critdamage: number;
  total_critdamage: number;

  // runes: Perk[] : Array(9)
  // items: Item[];

  bountyHunterStacks: number;
  darkHarvestStacks: number;
  legendStacks: number;
  lethalTempoStacks: number;
  conquerorStacks: number;
  zombieWardsPlaced: number;
  gold: number;
  healAndShieldPower: number;
  itemHaste: number;
  summonerSpellHaste: number;
  // runes: PerkSelections;

  kindredMarks: number;
  feastStacks: number;
  siphoningStrikeStacks: number;

  // Fizz, Leona, Guardian's Horn
  flatDamageReductionPreMitigation: number;
  // Amumu's Tantrum, Frozen Heart, Randuin's Omen, Warden's Mail
  flatDamageReductionPostMitigation: number;
  // for Bone Plateing
  flatTrueDamageReduction: number;

  // Coup de Grace
  percentDamageIncrease: number;

  // For First Strike
  postMitigationBaseDamageTotal: number;

  energy: number;
}

export type BaseStatsObj = {
  hp_base: number;
  hp_lvl: number;
  mp_base: number;
  mp_lvl: number;
  arm_base: number;
  arm_lvl: number;
  mr_base: number;
  mr_lvl: number;
  hp5_base: number;
  hp5_lvl: number;
  mp5_base: number;
  mp5_lvl: number;
  dam_base: number;
  dam_lvl: number;
  as_base: number; // champion's base attack speed as decimal
  as_ratio: number; // champion's attack speed ratio as decimal
  as_lvl: number; // champion's bonus_as growth as whole number
  missile_speed: number; // missile speed for ranged basic attacks (0 = Non-Projectile)
  attack_cast_time: number; // only used to calculated 'windup_percent'
  attack_total_time: number; // only used to calculated 'windup_percent'
  attack_delay_offset: number; // only used to calculated 'windup_percent'
  // windup_percent: undefined; // N/A           // Not stored in data, but is retrievable (default is 0.3)
  windup_modifier: number; // champion's modifier to windup growth
  crit_base: number; // champion's base critical strike damage (defaults to 175%)
  crit_mod: number; // champion's total critical strike damage modifier
  range: number; // champion's range
  ms: number; // champion's movement speed
  gameplay_radius: number; // champion's hitbox for most purposes (defaults to 65)
  acquisition_radius: number; // champion's auto-attack range (defaults to 800)
  selection_radius: number; // champion's mouse-over selection radius (defaults to 100)
  pathing_radius: number; // champion's pathing radius (defaults to 35)
  aram?: Partial<AramBalanceChanges>; // aram balance changes
  nb?: Partial<AramBalanceChanges>; // nexus blitz-specific balance changes (see aram for parameters)
  ofa?: Partial<AramBalanceChanges>; // one for all-specific balance changes (see aram for parameters)
  urf?: Partial<AramBalanceChanges>; // ultimate rapid fire-specific balance changes (see aram for parameters)
  usb?: Partial<AramBalanceChanges>; // ultimate spell book-specific balance changes (see aram for parameters)
};
export type AramBalanceChanges = {
  dmg_dealt: number; // damage dealt modifier in aram as decimal (defaults to 1.0)
  dmg_taken: number; // damage taken modifier in aram as decimal (defaults to 1.0)
  healing: number; // healing modifier in aram as decimal
  shielding: number; // shielding modifier in aram as decimal
  shield?: number; // Temp???
  ability_haste: number; // initial ability haste in aram as integer
  mana_regen: number; // mana regeneration modifier in aram as decimal
  energy_regen: number; // energy regeneration modifier in aram as decimal
  attack_speed: number; // total attack speed modifier in aram as decimal
  movement_speed: number; // movement speed modifier in aram as decimal
  tenacity: number; // tenacity and slow resistance modifier in aram as decimal (defaults to 1.0)
};
