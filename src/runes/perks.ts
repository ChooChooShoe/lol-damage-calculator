import { RootRatio, SubRatio, SubSkill } from '../api/DataTypes';
import PerksData from './PerksData';

export type StyleId = keyof typeof PerksData.styles;
export type PerkId = keyof typeof PerksData.perks;
export type StyleIdOrNone = StyleId | 0;
export type PerkIdOrNone = PerkId | 0;

export const perkstyles: typeof PerksData.styles = PerksData.styles;
export const perks = PerksData.perks;

export interface Perk {
  id: PerkId;
  name: string;
  majorChangePatchVersion: string;
  tooltip: string;
  shortDesc: string;
  longDesc: string;
  iconPath: string;
  endOfGameStatDescs?: readonly string[];
  released?: string;
  path?: string;
  slot?: string;
  cooldown?: string;
  range?: string;
  subskills?: Readonly<SubSkill>[];
  stats?: { [key: string]: number };
}

export interface PerkStyle {
  id: StyleId;
  name: string;
  tooltip: string;
  iconPath: string;
  isAdvanced: boolean;
  allowedSubStyles: readonly [StyleId, StyleId, StyleId, StyleId];
  slots: {
    readonly KeyStone: { slotLabel: ''; perks: readonly PerkId[] };
    readonly Mixed1: { slotLabel: string; perks: readonly PerkId[] };
    readonly Mixed2: { slotLabel: string; perks: readonly PerkId[] };
    readonly Mixed3: { slotLabel: string; perks: readonly PerkId[] };
  };
  defaultPageName: string;
  defaultSubStyle: StyleId;
  defaultPerks: readonly PerkId[];
  defaultPerksWhenSplashed: readonly PerkId[];
  defaultStatModsPerSubStyle: readonly {
    id: StyleId;
    perks: readonly PerkId[];
  }[];
}

function isPerkKey(
  posibleId: number
): posibleId is keyof typeof PerksData.perks {
  return posibleId in PerksData.perks;
}
function isStyleKey(
  possibleId: number
): possibleId is keyof typeof PerksData.styles {
  return possibleId in PerksData.styles;
}

export function perk(perk: number | undefined | null): Perk | undefined {
  if (perk && isPerkKey(perk)) return PerksData.perks[perk] as Perk;
}
export function perkStyle(
  style: number | undefined | null
): PerkStyle | undefined {
  if (style && isStyleKey(style)) return PerksData.styles[style];
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
