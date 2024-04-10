import { Image } from '@/api/DataTypes';
import fetch from 'node-fetch';

export type Version = string;
export type Key = string;
export type Id = string;

export type Language =
  | 'cs_CZ' //Czech (Czech Republic)'
  | 'el_GR' //Greek (Greece)'
  | 'pl_PL' //Polish (Poland)'
  | 'ro_RO' //Romanian (Romania)'
  | 'hu_HU' //Hungarian (Hungary)'
  | 'en_GB' //English (United Kingdom)'
  | 'de_DE' //German (Germany)'
  | 'es_ES' //Spanish (Spain)'
  | 'it_IT' //Italian (Italy)'
  | 'fr_FR' //French (France)'
  | 'ja_JP' //Japanese (Japan)'
  | 'ko_KR' //Korean (Korea)'
  | 'es_MX' //Spanish (Mexico)'
  | 'es_AR' //Spanish (Argentina)'
  | 'pt_BR' //Portuguese (Brazil)'
  | 'en_US' //English (United States)'
  | 'en_AU' //English (Australia)'
  | 'ru_RU' //Russian (Russia)'
  | 'tr_TR' //Turkish (Turkey)'
  | 'ms_MY' //Malay (Malaysia)'
  | 'en_PH' //English (Republic of the Philippines)'
  | 'en_SG' //English (Singapore)'
  | 'th_TH' //Thai (Thailand)'
  | 'vn_VN' //Vietnamese (Viet Nam)'
  | 'id_ID' //Indonesian (Indonesia)'
  | 'zh_MY' //Chinese (Malaysia)'
  | 'zh_CN' //Chinese (China)'
  | 'zh_TW'; //Chinese (Taiwan)'
export class DataDragon {
  version: string;
  lang: Language;
  baseDataUri: string;

  /**
   * DataDragon class
   * @param {object} options options for DataDragon.
   * @param {string} [options.version="11.1.1"] version
   * @param {string} [options.lang="en_US"] language
   */

  constructor(options: { version?: Version; lang?: Language }) {
    this.version = options.version || '11.1.1';
    this.lang = options.lang || 'en_US';
    this.baseDataUri = `http://ddragon.leagueoflegends.com/cdn/${this.version}/data/${this.lang}`;
  }

  static async fromLatestVersion(): Promise<DataDragon> {
    const realms = await DataDragon.getRealms();
    return new DataDragon({ version: realms.v, lang: 'en_US' });
  }

  /**
   * Gets all availible versions
   * @returns {Promise<Version[]>} List of versions
   * @static
   */
  static async getVersions(): Promise<Version[]> {
    return fetch(`https://ddragon.leagueoflegends.com/api/versions.json`).then(
      (res) => res.json() as Promise<Version[]>,
    );
  }
  static async getLatestVersion(): Promise<Version> {
    return DataDragon.getVersions().then((x) => x[0]);
  }

  static async getRealms(): Promise<Realms> {
    return fetch(`https://ddragon.leagueoflegends.com/realms/na.json`).then(
      (res) => res.json() as Promise<Realms>,
    );
  }

  /**
   * Finds a champion
   * @param {string} champion champion name as a key AurelionSol.
   * @returns {Promise<ChampionComplex>}
   */

  // Ex. https://ddragon.leagueoflegends.com/cdn/10.12.1/data/en_US/champion/Aatrox.json
  async findChampion(champion: string): Promise<ChampionComplex> {
    const key = DataDragon.fixChampionKey(champion);
    return fetch(`${this.baseDataUri}/champion/${key}.json`)
      .then((res) => res.json() as Promise<NamedChampionJson>)
      .then((x) => x.data[key]);
  }

  static fixChampionKey(apiname: string): string {
    if (apiname === 'Wukong') return 'MonkeyKing';
    if (apiname === 'GnarBig') return 'Gnar';
    return apiname.replaceAll(/[' .]/g, '');
  }
  async getAllChampions(): Promise<ChampionBasicJson> {
    return fetch(`${this.baseDataUri}/champion.json`).then(
      (res) => res.json() as Promise<ChampionBasicJson>,
    );
  }
  async getAllChampionsFull(): Promise<ChampionFullJson> {
    return fetch(`${this.baseDataUri}/championFull.json`).then(
      (res) => res.json() as Promise<ChampionFullJson>,
    );
  }
  async getChallenges(): Promise<Record<string, any>[]> {
    return fetch(`${this.baseDataUri}/challenges.json`).then(
      (res) => res.json() as Promise<Record<string, any>[]>,
    );
  }
  // The Raw Json File
  async getItemsJson(): Promise<ItemJson> {
    return fetch(`${this.baseDataUri}/item.json`).then(
      (res) => res.json() as Promise<ItemJson>,
    );
  }
  // Mergeed with basic data to have all fields filled.
  async getItemsData(): Promise<Record<string, Item>> {
    const json = await this.getItemsJson();

    return json.data;
  }
}

export interface NamedChampionJson {
  type: 'champion';
  format: 'standAloneComplex';
  version: Version;
  data: Record<string, ChampionComplex>;
}

export interface ChampionFullJson {
  type: 'champion';
  format: 'full';
  version: Version;
  data: Record<string, ChampionComplex>;
  keys: Record<Key, Id>;
}

export interface ChampionBasicJson {
  type: 'champion';
  format: 'standAloneComplex';
  version: Version;
  data: Record<string, ChampionBasic>;
}

export interface ItemJson {
  type: 'item';
  version: Version;
  basic: Item;
  data: Record<string, Item>;
  groups: Record<string, any>[];
  tree: Record<string, any>[];
}
export interface Item {
  name: string;
  //rune: any;
  description: string;
  colloq: string;
  plaintext: string;
  specialRecipe?: number; // undefined defaults to 0
  consumed?: true; // undefined defaults to false
  consumeOnFull?: true; // undefined defaults to false
  stacks?: number; // undefined defaults to 1
  inStore?: false; // defaults to true
  hideFromAll?: true; // defaults to false
  requiredChampion?: 'FiddleSticks' | 'Kalista' | 'Sylas' | 'Gangplank'; //defaults to ""
  requiredAlly?: 'Ornn'; //defaults to ""
  from?: string[];
  into?: string[];
  image: Image;
  gold: { base: number; purchasable: boolean; total: number; sell: number };
  tags: string[];
  maps: { '11': boolean; '12': boolean; '21': boolean; '22': boolean };
  stats?: Record<string, number>;
  depth: number | undefined; // undefined defaults to 1
  effect?: any;
}

type RiotStatName =
  | 'FlatHPPoolMod'
  | 'rFlatHPModPerLevel'
  | 'FlatMPPoolMod'
  | 'rFlatMPModPerLevel'
  | 'PercentHPPoolMod'
  | 'PercentMPPoolMod'
  | 'FlatHPRegenMod'
  | 'rFlatHPRegenModPerLevel'
  | 'PercentHPRegenMod'
  | 'FlatMPRegenMod'
  | 'rFlatMPRegenModPerLevel'
  | 'PercentMPRegenMod'
  | 'FlatArmorMod'
  | 'rFlatArmorModPerLevel'
  | 'PercentArmorMod'
  | 'rFlatArmorPenetrationMod'
  | 'rFlatArmorPenetrationModPerLevel'
  | 'rPercentArmorPenetrationMod'
  | 'rPercentArmorPenetrationModPerLevel'
  | 'FlatPhysicalDamageMod'
  | 'rFlatPhysicalDamageModPerLevel'
  | 'PercentPhysicalDamageMod'
  | 'FlatMagicDamageMod'
  | 'rFlatMagicDamageModPerLevel'
  | 'PercentMagicDamageMod'
  | 'FlatMovementSpeedMod'
  | 'rFlatMovementSpeedModPerLevel'
  | 'PercentMovementSpeedMod'
  | 'rPercentMovementSpeedModPerLevel'
  | 'FlatAttackSpeedMod'
  | 'PercentAttackSpeedMod'
  | 'rPercentAttackSpeedModPerLevel'
  | 'rFlatDodgeMod'
  | 'rFlatDodgeModPerLevel'
  | 'PercentDodgeMod'
  | 'FlatCritChanceMod'
  | 'rFlatCritChanceModPerLevel'
  | 'PercentCritChanceMod'
  | 'FlatCritDamageMod'
  | 'rFlatCritDamageModPerLevel'
  | 'PercentCritDamageMod'
  | 'FlatBlockMod'
  | 'PercentBlockMod'
  | 'FlatSpellBlockMod'
  | 'rFlatSpellBlockModPerLevel'
  | 'PercentSpellBlockMod'
  | 'FlatEXPBonus'
  | 'PercentEXPBonus'
  | 'rPercentCooldownMod'
  | 'rPercentCooldownModPerLevel'
  | 'rFlatTimeDeadMod'
  | 'rFlatTimeDeadModPerLevel'
  | 'rPercentTimeDeadMod'
  | 'rPercentTimeDeadModPerLevel'
  | 'rFlatGoldPer10Mod'
  | 'rFlatMagicPenetrationMod'
  | 'rFlatMagicPenetrationModPerLevel'
  | 'rPercentMagicPenetrationMod'
  | 'rPercentMagicPenetrationModPerLevel'
  | 'FlatEnergyRegenMod'
  | 'rFlatEnergyRegenModPerLevel'
  | 'FlatEnergyPoolMod'
  | 'rFlatEnergyModPerLevel'
  | 'PercentLifeStealMod'
  | 'PercentSpellVampMod';

export interface ChampionBasic {
  version: Version;
  id: Id;
  key: Key;
  name: string;
  title: string;
  blurb: string;
  info: { attack: number; defense: number; magic: number; difficulty: number };
  image: Image;
  tags: string[];
  partype: string;
  stats: ChampionComplexStats;
}
export interface ChampionComplex {
  id: Id;
  key: Key;
  name: string;
  title: string;
  image: Image;
  skins: { id: string; num: number; name: string; chromas: boolean }[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  info: { attack: number; defense: number; magic: number; difficulty: number };
  stats: ChampionComplexStats;
  spells: ChampionComplexSpell[];
  passive: ChampionComplexPassive;
  recommended: [];
}

export interface ChampionComplexStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}
export interface ChampionComplexPassive {
  name: string;
  description: string;
  image: Image;
}
export interface ChampionComplexSpell {
  id: string; // 'AatroxQ';
  name: string; // 'The Darkin Blade';
  description: string; // 'Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.';
  tooltip: string; // 'Aatrox slams his greatsword, dealing <physicalDamage>{{ qdamage }} physical damage</physicalDamage>. If they are hit on the edge, they are briefly <status>Knocked Up</status> and they take <physicalDamage>{{ qedgedamage }}</physicalDamage> instead. This Ability can be <recast>Recast</recast> twice, each one changing shape and dealing 25% more damage than the previous one.{{ spellmodifierdescriptionappend }}';
  leveltip: {
    label: string[];
    effect: string[];
  };
  maxrank: number; // 5;
  cooldown: number[]; // [14, 12, 10, 8, 6];
  cooldownBurn: string; // '14/12/10/8/6';
  cost: number[]; // [0, 0, 0, 0, 0];
  costBurn: string; // '0';
  datavalues: {};
  effect: [
    null,
    [number, number, number, number, number],
    [number, number, number, number, number],
    [number, number, number, number, number],
    [number, number, number, number, number],
    [number, number, number, number, number],
    [number, number, number, number, number],
    [number, number, number, number, number],
    [number, number, number, number, number],
    [number, number, number, number, number],
    [number, number, number, number, number],
  ];
  effectBurn: [
    null,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ];
  vars: never[];
  costType: string; // " {{ abilityresourcename }}",
  maxammo: string; //'-1';
  range: [number, number, number, number, number];
  rangeBurn: string; // '25000';
  image: Image;
  resource: string; // "{{ cost }} {{ abilityresourcename }}";
}

export interface Realms {
  n: {
    item: Version;
    rune: Version;
    mastery: Version;
    summoner: Version;
    champion: Version;
    profileicon: Version;
    map: Version;
    language: Version;
    sticker: Version;
  };
  v: Version;
  l: Language;
  cdn: 'https://ddragon.leagueoflegends.com/cdn';
  dd: Version;
  lg: Version;
  css: Version;
  profileiconmax: number;
  store: null;
}
