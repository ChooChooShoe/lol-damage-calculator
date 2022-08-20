import { RootRatio, SubRatio } from "../api/DataTypes";
import perksObj from "./perks.json";

export const perkstyles = perksObj.styles;
export type StyleKey = keyof typeof perksObj.styles;
export type Style = typeof perksObj.styles["8400"];
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
  stats?: { [key: string]: any };
  released?: string;
  path?: string;
  slot?: string;
  cooldown?: string;
  root_ratios?: { description: string, leveling?: RootRatio[] }[]
};

export function perk(perk: number): Perk {
  return perksObj.perks[perk.toString() as PerkKey];
}
export function perkStyle(style: number): Style {
  return perksObj.styles[style.toString() as StyleKey];
}
export function tryGetPerk(perk: number): Perk | undefined {
  return perksObj.perks[perk.toString() as PerkKey];
}
export function tryGetPerkStyle(style: number): Style | undefined {
  return perksObj.styles[style.toString() as StyleKey];
}
