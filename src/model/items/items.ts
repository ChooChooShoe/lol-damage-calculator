import itemsGen from './items.gen';

import type { ItemNumber, ItemGenData, Effects, Act, Stats } from './items.gen';
export type { ItemNumber, ItemGenData, Effects, Act, Stats };

console.log(Object.keys(itemsGen));

export default itemsGen;

export function fromNumber(id: number): ItemGenData | undefined {
  return itemsGen[id as ItemNumber];
}

export function modelForPassive(passiveName: string): ItemGenData | undefined {
  return itemsGen[passiveName as unknown as ItemNumber];
}
