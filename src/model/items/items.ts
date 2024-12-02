import { RootRatio } from '@/api/DataTypes';
import itemsGen, { ItemNumber } from '@/generated/items.gen';

console.log(Object.keys(itemsGen));

export default itemsGen;

export function fromNumber(id: number): ItemGenData | undefined {
  return itemsGen[id as ItemNumber];
}

export function modelForPassive(passiveName: string): ItemGenData | undefined {
  return itemsGen[passiveName as unknown as ItemNumber];
}

export function getItem(itemId: keyof typeof itemsGen) {
  return itemsGen[itemId];
}

export type ItemGenData = {
  id: ItemNumber;
  name: string;
  dispName: string;
  keywords: string[];
  description: Readonly<string>;
  colloq: string;
  active: boolean;
  consumed: boolean;
  consumeOnFull: boolean;
  inStore: boolean;
  hideFromAll: boolean;
  // Some items have invalied ItemNumbers
  from: number[];
  to: number[];
  categories: string[];
  maxStacks: number;
  requiredChampion: '' | 'FiddleSticks' | 'Kalista' | 'Gangplank' | 'Sylas';
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
  // maps: ['SR'] | ['SR', 'HA'] | ['HA'] | [];
  depth: 1 | 2 | 3 | 4;
  limit: string | null;
  requirementDescription: string | null;
  menu: string[];
  stats: Partial<Stats>;
  specialStat: string | null;
  specialStat2: string | null;
  effects: Partial<ItemEffectsList>;
  recipe: string | null;
  builds: string | null;
  availability: {
    classic: false;
    aram: false;
    nexusBlitz: false;
    arena: false;
  };
  type: string;
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

export type ItemEffectsList = {
  consume: ItemEffect;
  act: ItemEffect;
  pass: ItemEffect;
  pass2: ItemEffect;
  pass3: ItemEffect;
  pass4: ItemEffect;
  pass5: ItemEffect;
  mythic: ItemEffect;
};

export type ItemEffect = {
  name: string;
  unique: boolean;
  description: string;
  descriptionHtml: string;
  descriptionParts: string[];
  model: string | null;
  // descriptionRatios: RootRatio[];
  cd: number | string | null;
  recharge: number | string | null;
  charges: number | string | null;
  range: number | string | null;
  radius: number | string | null;
};

export type Stats = {
  abilityPower: number;
  abilityPowerUnique: number;
  abilityHaste: number;
  armor: number;
  armorUnique: number;
  precentArmorPenetration: number;
  lethality: number;
  lethalityunique: number;
  attackDamage: number;
  attackSpeed: number;
  cooldownReduction: number;
  cdrunique: number;
  criticalStrikeChance: number;
  critDamage: number;
  goldPer10: number;
  healAndShieldPower: number;
  healAndShieldPowerUnique: number;
  health: number;
  healthRegenPrecent: number;
  healthRegenFlat: number;
  lifesteal: number;
  magicResistance: number;
  movementSpeedFlat: number;
  movementSpeedPrecent: number;
  msunique: number;
  mana: number;
  manaRegenPrecent: number;
  manaRegenFlat: number;
  magicPenetrationPrecent: number;
  magicPenetrationFlat: number;
  omnivamp: number;
  physicalVamp: number;
  spellVamp: number;
};

// export type ItemGenData = {
//   id: ItemNumber;
//   name: string;
//   description: Readonly<string>;
//   colloq: string;
//   active: boolean;
//   inStore: boolean;
//   // Some items have invalied ItemNumbers
//   from: (ItemNumber | number)[];
//   to: (ItemNumber | number)[];
//   categories?: string[];
//   maxStacks: number;
//   requiredChampion: '' | 'FiddleSticks' | 'Kalista' | 'Gangplank';
//   requiredAlly: '' | 'Ornn';
//   requiredBuffCurrencyName:
//     | ''
//     | 'GangplankBilgewaterToken'
//     | 'S11Support_Quest_Completion_Buff';
//   requiredBuffCurrencyCost: 0 | 500;
//   specialRecipe: number;
//   price: number;
//   priceTotal: number;
//   sellPrice: number;
//   // purchasable: boolean;
//   iconPath: string;
//   spriteStyle: string;
//   image: {
//     full: string;
//     sprite: string;
//     group: string;
//     x: number;
//     y: number;
//     w: number;
//     h: number;
//   };
//   maps: ['SR'] | ['SR', 'HA'] | ['HA'] | [];
//   depth: 1 | 2 | 3 | 4;
//   limit: null | {
//     textContent: string;
//     innerHTML: string;
//   };
//   requirementDescription: {
//     textContent: string;
//     innerHTML: string;
//   } | null;
//   menu: {
//     [key: string]: boolean;
//   };
//   stats: Partial<Stats>;
//   specialStat?: string;
//   specialStat2?: string;
//   effects: Partial<Effects>;
//   type: string[];
//   category:
//     | 'championitems'
//     | 'distributives'
//     | 'starters'
//     | 'consumables'
//     | 'trinkets'
//     | 'boots'
//     | 'basics'
//     | 'epics'
//     | 'legendaries'
//     | 'ornnitems'
//     | 'mythics'
//     | 'minionturretitems'
//     | 'unsorted';
// };

// export type Effects = {
//   consume: Act;
//   act: Act;
//   pass: Act;
//   pass2: Act;
//   pass3: Act;
//   pass4: Act;
//   pass5: Act;
//   mythic: Act;
// };

// export type Act = {
//   name: string;
//   unique: boolean;
//   description: string;
//   descriptionHtml: string;
//   descriptionRatios: RootRatio[];
//   cd?: number | string;
//   recharge?: number | string;
//   charges?: number | string;
//   range?: number | string;
//   radius?: number | string;
// };

// export type Stats = {
//   ah: number;
//   hp: number;
//   mr: number;
//   armor: number;
//   ap: number;
//   mana: number;
//   hsp: number;
//   mp5: number;
//   ms: number;
//   ad: number;
//   lethality: number;
//   attack_speed: number;
//   msflat: number;
//   gp10: number;
//   lifesteal: number;
//   mpen: number;
//   crit: number;
//   hp5: number;
//   omnivamp: number;
//   hp5flat: number;
//   critdamage: number;
//   mpenflat: number;
//   armpen: number;
// };
