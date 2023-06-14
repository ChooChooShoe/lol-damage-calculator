import fetch from 'node-fetch';

export type Version = string;
export type Key = string;
export type Id = string;

export class CommunityDragon {
  static async getAllItems(): Promise<Array<CDragonItem>> {
    return fetch(
      `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json`
    ).then((res) => res.json() as Promise<Array<CDragonItem>>);
  }
}

export interface CDragonItem {
  id: number;
  name: string;
  description: string;
  active: boolean;
  inStore: boolean;
  from: number[];
  to: number[];
  categories: string[];
  maxStacks: number;
  requiredChampion: '' | 'FiddleSticks' | 'Kalista' | 'Sylas' | 'Gangplank';
  requiredAlly: '' | 'Ornn';
  requiredBuffCurrencyName:
    | ''
    | 'GangplankBilgewaterToken'
    | 'S11Support_Quest_Completion_Buff';
  requiredBuffCurrencyCost: number; // 0 | 1 | 500
  specialRecipe: number;
  isEnchantment: false;
  price: number;
  priceTotal: number;
  iconPath: `/lol-game-data/assets/ASSETS/Items/Icons2D/${string}`;
}
