import { RootRatio } from '@/api/DataTypes';
import itemsGen, { ItemNumber } from './items.gen';

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
  description: Readonly<string>;
  colloq: string;
  active: boolean;
  inStore: boolean;
  // Some items have invalied ItemNumbers
  from: number[];
  to: number[];
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
  // maps: ['SR'] | ['SR', 'HA'] | ['HA'] | [];
  depth: 1 | 2 | 3 | 4;
  limit: string | null;
  requirementDescription: string | null;
  menu: string[];
  stats: Partial<Stats>;
  specialStat: string | null;
  specialStat2: string | null;
  effects: Partial<Effects>;
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
  descriptionHtml: string;
  descriptionRatios: RootRatio[];
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
