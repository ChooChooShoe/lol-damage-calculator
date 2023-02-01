import { RootRatio, SubRatio, SubSkill } from "../api/DataTypes";
import perksObj from "./perks.json";

export type StyleKey = keyof typeof perksObj.styles;
export type PerkKey = keyof typeof perksObj.perks;

export const perkstyles = perksObj.styles;
export const perks = perksObj.perks;
// export type Style = typeof perksObj.styles["8400"];
export interface Perk {
  id: number;
  name: string;
  majorChangePatchVersion: string;
  tooltip: string;
  shortDesc: string;
  longDesc: string;
  iconPath: string;
  endOfGameStatDescs: string[];
  released?: string;
  path?: string;
  slot?: string;
  cooldown?: string;
  subskills?: SubSkill[];
  stats?: { [key: string]: any };
};

export interface PerkStyle { id: number; name: string; tooltip: string; iconPath: string; isAdvanced: boolean; allowedSubStyles: number[]; slots: { KeyStone: { slotLabel: string; perks: number[]; }; Mixed1: { slotLabel: string; perks: number[]; }; Mixed2: { slotLabel: string; perks: number[]; }; Mixed3: { slotLabel: string; perks: number[]; }; }; defaultPageName: string; defaultSubStyle: number; defaultPerks: number[]; defaultPerksWhenSplashed: number[]; defaultStatModsPerSubStyle: { id: string; perks: number[]; }[]; }

function isPerkKey(s: string): s is PerkKey { return s in perksObj.perks }
function isStyleKey(s: string): s is StyleKey { return s in perksObj.styles }

export function perk(perk: number) {
  const k = String(perk);
  if (isPerkKey(k)) return perksObj.perks[k];
}
export function perkStyle(style: number): PerkStyle {
  return perksObj.styles[style.toString() as StyleKey];
}
export function tryGetPerk(perk: number) {
  return perksObj.perks[perk.toString() as PerkKey];
}
export function tryGetPerkStyle(style: number) {
  const k = String(style);
  if (isStyleKey(k)) return perksObj.styles[k];
}

export class PerkSelections {
  statPerks = { defense: 0, flex: 0, offense: 0, }
  primaryStyle = 8000
  primarySelections: [number, number, number, number] = [0, 0, 0, 0]
  subStyle = 8100
  subSelections: [number, number] = [0, 0]

  constructor() {
    console.log("New PerkSelections");

  }
}