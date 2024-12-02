import type { ChampObjModel } from './ChampObj';
import {
  ItemEffectsScripts,
  type ItemEffectsScript,
} from './items/ItemEffectScripts';
import { fromNumber, type ItemGenData, type ItemNumber } from './items/items';

export class ItemInventory {
  parent: ChampObjModel;
  inner = new Array<HeldItem | null>(6);
  gold = 0;
  goldValue = 0;

  constructor(obj: ChampObjModel) {
    this.parent = obj;
  }

  public sellAll() {
    console.log('Selling all items.');
    // for (const [idx, [item, count]] of this.inner.entries()) {
    //   // Can't sell empty stacks
    //   if (!item) continue;

    //   this.gold += item.priceTotal;
    //   // Set count to 0 and item to undefined.
    //   this.inner[idx] = null;
    // }
  }
  public sell(at: number) {
    console.log('Selling all items.');
    // const [item, count] = this.inner.at(at);
    // Can't sell empty stacks
    // if (!item) return;

    // this.gold += item.priceTotal;
    // Set count to 0 and item to undefined.
    // this.inner[idx][0] = undefined;
    // this.inner[idx][1] = 0;
  }

  public getUniqueItemEffects(): ItemEffectsScript[] {
    return [];
  }
}

export type HeldItem = [ItemGenData, number];
