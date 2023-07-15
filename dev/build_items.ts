import { fetchAndSaveRealms, saveFile } from './fetch_utils.js';
import fs from 'fs/promises';
import { CommunityDragon } from './communitydragon.js';
import { fetchAllWikiItems } from './WikiItem.js';
import { DataDragon } from './datadragon.js';
import { ModelFromJson } from './ItemModelBuilder.js';

const args = process.argv.slice(2);
const DEBUG = true;
main(args);
async function main(args: string[]) {
  console.log('Building data for items.json. Using Args:', args);
  const realms = await fetchAndSaveRealms();
  const dataDragon = new DataDragon({
    version: realms.v,
    lang: 'en_US',
  });
  const bodyCDragon = CommunityDragon.getAllItems();
  const wikiBody = fetchAllWikiItems();

  const spriteBaseUri = `${realms.cdn}/${realms.v}/img/sprite/`;
  const bodyDDragon = dataDragon.getItemsData();

  if (DEBUG) {
    await saveFile('./.debug/Module_ItemData_data.json', await wikiBody);
    await saveFile('./.debug/CommunityDragon_items.json', await bodyCDragon);
    await saveFile('./.debug/Riot_items.json', await bodyDDragon);
  }

  const model = await ModelFromJson(
    await bodyDDragon,
    await bodyCDragon,
    await wikiBody,
    { DEBUG, spriteBaseUri }
  );

  // await fs.mkdir('./src/api/items/', { recursive: true });
  // await saveFile('./src/api/items/items.json', model);

  console.log(`Saving file ./src/model/items/items.gen.ts`);
  await fs.mkdir('./src/model/items/', { recursive: true });

  await fs.writeFile('./src/model/items/items.gen.ts', template(model));
  console.log('Goodbye');
}

function template(model: {}): string {
  const keys = Object.keys(model).join(' | ');
  const body = JSON.stringify(model, null, 2);
  return `// This file is auto-generated
// prettier-ignore
export type ItemNumber = ${keys};

export default ${body} satisfies { [n in ItemNumber]: ItemGenData };

export interface ItemGenData {
  id: ItemNumber;
  name: string;
  description: Readonly<string>;
  colloq: string;
  active: boolean;
  inStore: boolean;
  // Some items have invalied ItemNumbers
  from: (ItemNumber | number)[];
  to: (ItemNumber | number)[];
  categories?: string[];
  maxStacks: number;
  requiredChampion: '' | 'FiddleSticks' | 'Kalista' | 'Gangplank';
  requiredAlly: '' | 'Ornn';
  requiredBuffCurrencyName:
    | ''
    | 'GangplankBilgewaterToken'
    | 'S11Support_Quest_Completion_Buff';
  requiredBuffCurrencyCost: 0 | 500;
  specialRecipe: number;
  // "isEnchantment": check("isEnchantment"),
  price: number;
  priceTotal: number;
  sellPrice: number;
  purchasable: boolean;
  iconPath: string;
  spriteStyle: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  maps: ['SR'] | ['SR', 'HA'] | ['HA'] | [];
  depth: 1 | 2 | 3 | 4;
  limit: '' | string;
  menu: {
    [key: string]: boolean;
  };
  stats: Stats;
  // effects: import("../../dev/WikiItem").Effects;
  effects: Effects;
  type: string[];
  category:
    | 'championitems'
    | 'distributives'
    | 'starters'
    | 'consumables'
    | 'trinkets'
    | 'boots'
    | 'basics'
    | 'epics'
    | 'legendaries'
    | 'ornnitems'
    | 'mythics'
    | 'minionturretitems'
    | 'unsorted';
}

export interface Effects {
  act?: Act;
  act2?: Act;
  aura?: Act;
  pass?: Act;
  pass2?: Act;
  pass3?: Act;
  pass4?: Act;
  pass5?: Act;
  pass6?: Act;
  consume?: string;
  mythic?: Stats | string;
}

export interface Act {
  name: string;
  unique: boolean;
  description: string;
  description2?: string;
  cd?: number | string;
  recharge?: number | string;
  charges?: number | string;
  range?: number | string;
  radius?: number | string;
}

export interface Stats {
  ad?: number;
  ah?: number;
  ap?: number;
  armor?: number;
  armpen?: number;
  as?: number;
  crit?: number;
  gp10?: number;
  hp?: number;
  hp5?: number;
  hp5flat?: number;
  hsp?: number;
  lethality?: number;
  lifesteal?: number;
  mana?: number;
  mp5?: number;
  mpen?: number;
  mpenflat?: number;
  mr?: number;
  ms?: number;
  msflat?: number;
  omnivamp?: number;
  spec?: string;
}

`;
}
