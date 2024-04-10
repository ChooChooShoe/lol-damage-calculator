import type { RootRatio, SubRatio, SubSkill } from '../api/DataTypes';
import { styles, perks } from './PerksData';

export { styles as perkstyles } from './PerksData';
export { perks } from './PerksData';

export type StyleId = keyof typeof styles;
export type PerkId = keyof typeof perks;
export type StyleIdOrNone = StyleId | 0;
export type PerkIdOrNone = PerkId | 0;

export interface Perk {
  id: PerkId;
  name: string;
  majorChangePatchVersion: string;
  tooltip: string;
  shortDesc: string;
  longDesc: string;
  recommendationDescriptor: string;
  iconPath: string;
  endOfGameStatDescs?: string[];
  recommendationDescriptorAttributes: {};
  released?: string;
  path?: 'Precision' | 'Domination' | 'Sorcery' | 'Resolve' | 'Inspiration';
  slot?: 'Keystone' | 1 | 2 | 3;
  cooldown?: string | number;
  range?: string | number;
  subskills?: SubSkill[];
  stats?: { [key: string]: number | number[] };
}

export interface PerkStyle {
  id: StyleId;
  name: string;
  tooltip: string;
  iconPath: string;
  isAdvanced: boolean;
  allowedSubStyles: [StyleId, StyleId, StyleId, StyleId];
  slots: {
    KeyStone: { slotLabel: ''; perks: PerkId[] };
    Mixed1: { slotLabel: string; perks: PerkId[] };
    Mixed2: { slotLabel: string; perks: PerkId[] };
    Mixed3: { slotLabel: string; perks: PerkId[] };
  };
  defaultPageName: string;
  defaultSubStyle: StyleId;
  defaultPerks: PerkId[];
  defaultPerksWhenSplashed: PerkId[];
  defaultStatModsPerSubStyle: {
    id: StyleId;
    perks: PerkId[];
  }[];
}

function isPerkKey(posibleId: number): posibleId is keyof typeof perks {
  return posibleId in perks;
}
function isStyleKey(possibleId: number): possibleId is keyof typeof styles {
  return possibleId in styles;
}

export function perk(perk: number | undefined | null): Perk | undefined {
  if (perk && isPerkKey(perk)) return perks[perk] as Perk;
}
export function perkStyle(
  style: number | undefined | null,
): PerkStyle | undefined {
  if (style && isStyleKey(style)) return styles[style];
}

export class PerkSelections {
  statPerks: {
    defense: PerkIdOrNone;
    flex: PerkIdOrNone;
    offense: PerkIdOrNone;
  } = {
    defense: 0,
    flex: 0,
    offense: 0,
  };
  primaryStyle: StyleIdOrNone = 8000;
  primarySelections: [PerkIdOrNone, PerkIdOrNone, PerkIdOrNone, PerkIdOrNone] =
    [0, 0, 0, 0];
  subStyle: StyleIdOrNone = 8100;
  subSelections: [PerkIdOrNone, PerkIdOrNone] = [0, 0];

  constructor() {
    console.log('New PerkSelections');
  }
}
