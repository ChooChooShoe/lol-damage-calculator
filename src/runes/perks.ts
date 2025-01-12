import {
  Styles,
  Perks,
  type StyleId,
  type PerkId,
} from '@/generated/perks.gen';
export { Styles as perkstyles, Perks as perks };

export type { StyleId, PerkId };
export type StyleIdOrNone = StyleId | 0;
export type PerkIdOrNone = PerkId | 0;

export interface Perk {
  id: PerkId;
  name: string;
  dispName: string;
  released: string;
  path: '' | 'Precision' | 'Domination' | 'Sorcery' | 'Resolve' | 'Inspiration';
  shardSlots: '';
  slot: '' | 'Keystone' | 1 | 2 | 3;
  majorChangePatchVersion: string;
  recommendationDescriptor: string;
  iconPath: string;
  endOfGameStatDescs: string[];
  recommendationDescriptorAttributes: {};
  cooldown: Object;
  range: string | number;
  tooltip: string;
  shortDesc: string;
  longDesc: string;
  description: string;
  description2: string;
  description3: string;
  description4: string;
  effect: null;
  effect2: null;
  effect3: null;
  effect4: null;
}

export interface PerkStyle {
  id: StyleId;
  name: string;
  tooltip: string;
  iconPath: string;
  assetMap: Object;
  isAdvanced: boolean;
  allowedSubStyles: [StyleId, StyleId, StyleId, StyleId];
  subStyleBonus: {
    styleId: StyleId;
    perkId: PerkId;
  }[];
  slots: [
    { type: 'kKeyStone'; slotLabel: ''; perks: PerkIdsList },
    { type: 'kMixedRegularSplashable'; slotLabel: string; perks: PerkIdsList },
    { type: 'kMixedRegularSplashable'; slotLabel: string; perks: PerkIdsList },
    { type: 'kMixedRegularSplashable'; slotLabel: string; perks: PerkIdsList },
    { type: 'kStatMod'; slotLabel: 'Offense'; perks: [5008, 5005, 5007] },
    { type: 'kStatMod'; slotLabel: 'Flex'; perks: [5008, 5010, 5001] },
    { type: 'kStatMod'; slotLabel: 'Defense'; perks: [5011, 5013, 5001] },
  ];
  defaultPageName: string;
  defaultSubStyle: StyleId;
  defaultPerks: PerkId[];
  defaultPerksWhenSplashed: PerkId[];
  defaultStatModsPerSubStyle: {
    id: `${StyleId}`;
    perks: PerkId[];
  }[];
}

export type PerkIdsList =
  | [PerkId, PerkId, PerkId]
  | [PerkId, PerkId, PerkId, PerkId];

function isPerkKey(
  posibleId: number | string,
): posibleId is keyof typeof Perks {
  return posibleId in Perks;
}
function isStyleKey(
  possibleId: number | string,
): possibleId is keyof typeof Styles {
  return possibleId in Styles;
}

export function getPerk(perk: PerkId): Perk;
export function getPerk(perk: number | undefined | null): Perk | undefined {
  if (perk && isPerkKey(perk)) return Perks[perk] as Perk;
}
export function getPerkStyle(
  style: number | undefined | null,
): PerkStyle | undefined {
  if (style && isStyleKey(style)) return Styles[style];
}

export class PerkSelections {
  statPerks = {
    defense: 0,
    flex: 0,
    offense: 0,
  };
  primaryStyle = 8000;
  primarySelections: [number, number, number, number] = [0, 0, 0, 0];
  subStyle = 8100;
  subSelections: [number, number] = [0, 0];

  constructor() {
    console.log('New PerkSelections');
  }
}
