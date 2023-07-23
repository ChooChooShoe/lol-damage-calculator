
export type ItemGenData = {
  id: ItemNumber;
  name: string;
  description: Readonly<string>;
  colloq: string;
  active: boolean;
  inStore: boolean;
  // Some items have invalied ItemNumbers
  from: (ItemNumber | number)[];
  to: (ItemNumber | number)[];
  categories?: string[];
  maxStacks: number;
  requiredChampion: '' | 'FiddleSticks' | 'Kalista' | 'Gangplank';
  requiredAlly: '' | 'Ornn';
  requiredBuffCurrencyName:
    | ''
    | 'GangplankBilgewaterToken'
    | 'S11Support_Quest_Completion_Buff';
  requiredBuffCurrencyCost: 0 | 500;
  specialRecipe: number;
  price: number;
  priceTotal: number;
  sellPrice: number;
  // purchasable: boolean;
  iconPath: string;
  spriteStyle: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  maps: ['SR'] | ['SR', 'HA'] | ['HA'] | [];
  depth: 1 | 2 | 3 | 4;
  limit: null | {
    textContent: string;
    innerHTML: string;
  };
  requirementDescription: {
    textContent: string;
    innerHTML: string;
  } | null;
  menu: {
    [key: string]: boolean;
  };
  stats: Partial<Stats>;
  specialStat?: string;
  specialStat2?: string;
  effects: Partial<Effects>;
  type: string[];
  category:
    | 'championitems'
    | 'distributives'
    | 'starters'
    | 'consumables'
    | 'trinkets'
    | 'boots'
    | 'basics'
    | 'epics'
    | 'legendaries'
    | 'ornnitems'
    | 'mythics'
    | 'minionturretitems'
    | 'unsorted';
};

export type Effects = {
  consume: Act;
  act: Act;
  pass: Act;
  pass2: Act;
  pass3: Act;
  pass4: Act;
  pass5: Act;
  mythic: Act;
};

export type Act = {
  name: string;
  unique: boolean;
  description: string;
  descriptionHTML: string;
  descriptionRatios: RootRatio[];
  cd?: number | string;
  recharge?: number | string;
  charges?: number | string;
  range?: number | string;
  radius?: number | string;
};

export type Stats = {
  ah: number;
  hp: number;
  mr: number;
  armor: number;
  ap: number;
  mana: number;
  hsp: number;
  mp5: number;
  ms: number;
  ad: number;
  lethality: number;
  as: number;
  msflat: number;
  gp10: number;
  lifesteal: number;
  mpen: number;
  crit: number;
  hp5: number;
  omnivamp: number;
  hp5flat: number;
  critdamage: number;
  mpenflat: number;
  armpen: number;
};
