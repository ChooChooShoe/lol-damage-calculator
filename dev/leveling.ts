import fetch from "node-fetch";
import { JSDOM } from "jsdom";
import parenthesis, { ArrayTree } from "parenthesis";
import {
  ChampionListSkills,
  Image,
  RootRatio,
  ScaleValue,
  SkillModel,
  SubRatio,
} from "../src/api/DataTypes.js";
import { fileExists, saveFile, saveFileBlob } from "./fetch_utils.js";
import { makeRatioObj } from "./skill_ratios_parse.js";

const DEBUG = false;

function levelingToVal(leveling: string): ScaleValue;
function levelingToVal(
  leveling: string | null | undefined
): ScaleValue | undefined;
function levelingToVal(
  leveling: string | null | undefined
): ScaleValue | undefined {
  if (!leveling) return undefined;
  const arr = leveling
    .split("/")
    .map((x: string) => Number(x.trim()) || x.trim());
  if (arr.length === 1) return arr[0];
  return arr;
}
const test1 =
  "<span class=\"template_sbc\"><b>Passive:</b></span> Dealing damage to an enemy <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Champion\"><a href=\"/wiki/Champion\" title=\"Champion\"><img alt=\"Champion icon.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" width=\"20\" height=\"20\" data-image-name=\"Champion icon.png\" data-image-key=\"Champion_icon.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Champion_icon.png/revision/latest/scale-to-width-down/20?cb=20181122022630\" class=\"lazyload\"></a> <a href=\"/wiki/Champion\" title=\"Champion\">champion</a></span> within 4 seconds of using a <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Dash\"><a href=\"/wiki/Dash\" title=\"Dash\"><img alt=\"Dash.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" width=\"20\" height=\"20\" data-image-name=\"Dash.png\" data-image-key=\"Dash.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/5/55/Dash.png/revision/latest/scale-to-width-down/20?cb=20180514002826\" class=\"lazyload\"></a> <a href=\"/wiki/Dash\" title=\"Dash\">dash</a></span> or <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Blink\"><a href=\"/wiki/Blink\" title=\"Blink\"><img alt=\"Flash.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" width=\"20\" height=\"20\" data-image-name=\"Flash.png\" data-image-key=\"Flash.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/7/74/Flash.png/revision/latest/scale-to-width-down/20?cb=20180514003149\" class=\"lazyload\"></a> <a href=\"/wiki/Blink\" title=\"Blink\">blink</a></span>, or exiting from <span class=\"glossary\" style=\"white-space:pre; position:relative;\" data-game=\"lol\" data-tip=\"Stealth\"><a href=\"/wiki/Stealth\" title=\"Stealth\"><img alt=\"Guerrilla Warfare.png\" src=\"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D\" decoding=\"async\" width=\"20\" height=\"20\" data-image-name=\"Teemo Guerrilla Warfare.png\" data-image-key=\"Teemo_Guerrilla_Warfare.png\" data-src=\"https://static.wikia.nocookie.net/leagueoflegends/images/3/3a/Teemo_Guerrilla_Warfare.png/revision/latest/scale-to-width-down/20?cb=20171221034119\" class=\"lazyload\"></a> <a href=\"/wiki/Stealth\" title=\"Stealth\">stealth</a></span>, grants <span style=\"color:tomato; white-space:normal\">9 <a href=\"/wiki/Lethality\" class=\"mw-redirect\" title=\"Lethality\">Lethality</a></span> (<i><span class=\"pp-tooltip\" style=\"position:relative; border-bottom:1px dotted; cursor:help;\" data-bot_label=\"Armor penetration\" data-displayformula=\"Armor penetration = Lethality * (0.6 + 0.4 * Level / 18)\" data-bot_values=\"5.6;5.8;6;6.2;6.4;6.6;6.8;7;7.2;7.4;7.6;7.8;8;8.2;8.4;8.6;8.8;9\" data-top_values=\"\">5.<small>6</small> − 9 (based on level)</span> <a href=\"/wiki/Armor_penetration\" title=\"Armor penetration\">armor penetration</a></i>) and 7 <a href=\"/wiki/Magic_penetration\" title=\"Magic penetration\">magic penetration</a> for the next 5 seconds.";
const res1 = descriptionToLeveling(test1);
console.log(res1);

function descriptionToLeveling(full_text: string): RootRatio {
  let root = parenthesis.parse(full_text);
  let ratio_root = { name: "description", raw: full_text };

  //   for (const idx in dt_list) {
  //     let fulltext = dd_list[idx];
  //     let root = parenthesis.parse(fulltext);
  //     let ratio_root = { name: dt_list[idx], raw: fulltext };
  //     leveling.push();
  //   }
  return Object.assign(ratio_root, makeRatioObj(root));
}

function mutate_damagetype(
  damagetype: string
): ("Physical" | "Magic" | "True")[] {
  const res: ("Physical" | "Magic" | "True")[] = [];
  if (damagetype.includes("Physical")) res.push("Physical");
  if (damagetype.includes("Magic")) res.push("Magic");
  if (damagetype.includes("True")) res.push("True");
  return res;
}
