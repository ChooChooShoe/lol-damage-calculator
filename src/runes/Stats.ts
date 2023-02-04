export interface StatBlock {
  ap?: number;
  ad?: number;
  cdr?: number;
  ah?: number;
  as?: number;
  crit?: number;
  hp?: number;
  mana?: number;
  hp5?: number;
  hp5flat?: number;
  mp5?: number;
  mp5flat?: number;
  armor?: number;
  mr?: number;
  ms?: number;
  msflat?: number;
  gp10?: number;
  hsp?: number;
  armpen?: number;
  lethality?: number;
  mpen?: number;
  mpenflat?: number;
  lifesteal?: number;
  omnivamp?: number;
  pvamp?: number;
  spellvamp?: number;
  HealthScaling?: number[];
  Adaptive?: number;
}
export interface StatBlockSpec {
  spec?: string;
  spec2?: string;
}

export class StatMod {
  name: string;
  source: string;
  unique = false;
  stats: StatBlock & StatBlockSpec = {};
  effects: undefined;

  constructor(name: string, source: string, stats: StatBlock & StatBlockSpec) {
    this.name = name;
    this.source = source;
    this.stats = stats;
  }
}

export const stats_to_name = {
  ap: ` ability power`,
  ad: ` attack damage`,
  cdr: ` cooldown reduction`,
  ah: ` ability haste`,
  as: ` attack speed`,
  crit: ` critical strike chance`,
  hp: ` health`,
  mana: ` mana`,
  hp5: `% base health regeneration`,
  hp5flat: ` health per 5 seconds`,
  mp5: `% base mana regeneration`,
  mp5flat: ` mana per 5 seconds`,
  armor: ` armor`,
  mr: ` magic resistance`,
  ms: `% movement speed`,
  msflat: ` movement speed`,
  gp10: ` Gold per 10 seconds`,
  hsp: ` heal and shield power`,
  armpen: ` armor penetration`,
  lethality: ` lethality`,
  mpen: `% magic penetration`,
  mpenflat: ` magic penetration`,
  lifesteal: ` life steal`,
  omnivamp: ` omnivamp`,
  pvamp: ` physical vamp`,
  spellvamp: ` spell vamp`,
  HealthScaling: ` Health (based on level)`,
  Adaptive: ` Adaptive Force`,
};
