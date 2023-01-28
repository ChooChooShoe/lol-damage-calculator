import { RootRatio, SubRatio } from "../api/DataTypes";
import perksObj from "./perks.json";

export const perkstyles = perksObj.styles;
export type StyleKey = keyof typeof perksObj.styles;
// export type Style = typeof perksObj.styles["8400"];
export type PerkKey = keyof typeof perksObj.perks;
export type Perk = {
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
  subskills?: { description: string, leveling: RootRatio[] }[];
  stats?: { [key: string]: any };
};

function isPerkKey(s: string): s is PerkKey { return s in perksObj.perks }
function isStyleKey(s: string): s is StyleKey { return s in perksObj.styles }

export function perk(perk: number): Perk | undefined {
  const k = String(perk);
  if (isPerkKey(k)) return perksObj.perks[k] as Perk;
}
export function perkStyle(style: number) {
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
  primaryStyle = {
      style: 0,
      selections: [0, 0, 0, 0],
  }
  subStyle = {
      style: 0,
      selections: [0, 0],
  }
}