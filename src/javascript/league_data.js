// ITEM TEST
// import { test_item } from './league_items.js';

// see also: https://ddragon.leagueoflegends.com/realms/na.json
// const baseUrl = `${cdn}/${version}/data/${locale}`;
// Profile Icons
// const profileIconUri = `${baseUrl}/profileicon.json`;
// Champions: 
// const championUri = `${baseUrl}/champion.json`;
// Individual Champions: 
// http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/Aatrox.json 

// Champion Full: 
// const championFullUri = `${baseUrl}/championFull.json`;
// Items: 
// const itemUri = `${baseUrl}/item.json`;
// Summoner Spells: 
// const summonerUri = `${baseUrl}/summoner.json`;
// const languageUri = `${baseUrl}/language.json`;
// const mapUri = `${baseUrl}/map.json`;

// const championImg = `${cdn}/${version}/img/champion/Aatrox.png`;
// const itemImg = `${cdn}/${version}/img/item/1001.png`;
// const spriteImg = `${cdn}/${version}/img/sprite/1001.png`;

// const runesReforgedUri = `${baseUrl}/runesReforged.json`;

import versionJson from "/src/api/version.json"
export const cdn = versionJson.cdn;
export const locale = versionJson.l;
export const version = versionJson.v;
export const displayVersion = versionJson.dv;
export const spriteBaseUri = `${cdn}/${version}/img/sprite/`;

export function setupVue(championList, itemData) {
    fetchChampionList().then((ret) => {
        championList.value = ret;
    });
    return;
    fetchStaticItems().then((data) => {
        for (const key in data) {
            //Pre-compute sprite image as spriteStyle.
            const i = data[key].image;
            data[key].spriteStyle = {
                background: `url("${spriteBaseUri}${i.sprite}") -${i.x}px -${i.y}px`,
                width: `${i.w}px`,
                height: `${i.h}px`,
            };
            data[key].spriteStyleSmall = {
                background: `url("${spriteBaseUri}small_${i.sprite}") -${i.x * 0.75}px -${i.y * 0.75}px`,
                width: `${i.w * 0.75}px`,
                height: `${i.h * 0.75}px`,
            };
            data[key].spriteStyleTiny = {
                background: `url("${spriteBaseUri}tiny_${i.sprite}") -${i.x * 0.5}px -${i.y * 0.5}px`,
                width: `${i.w * 0.5}px`,
                height: `${i.h * 0.5}px`,
            };
        }
        itemData.value = data;
    });
}

import ChampionList from "/src/api/ChampionList.json";
async function fetchChampionList() {
    /// Get the latest version from /realms/na.json
    // const response = await fetch("./api/ChampionList.json");
    // const body = await response.json();
    let championList = { None: { name: "  -- None --  ", id: "" } }
    Object.assign(championList, ChampionList);
    return championList;
}

const singleChampFileCache = {};

export async function fetchSingleChampFile(champId) {
    if (!champId)
        return console.log("Can't fetchSingleChampFile() 'champId' is not set", champId);

    // Check cache first
    if (champId in singleChampFileCache) {
        console.log('Returning singleChampFileCache', champId)
        return singleChampFileCache[champId];
    }

    // const url = `${cdn}/${version}/data/${lang}/champion/${championName}.json`;
    const url = `./api/champion/${champId}.json`;

    // TODO error checking
    console.log(`Fetching: ${url}`);
    const response = await fetch(url);
    const model = await response.json();

    // Add to Cache
    singleChampFileCache[champId] = model;
    // return model in promise
    return model;
}
const known_event_items = ["3631", "3634", "3635", "3642", "3643", "3645", "3647", "3648",];

async function fetchStaticItems() {
    const response = await fetch("./api/shop/rift_items.json");
    return await response.json();
}

export function fetchStaticItems22222(callback) {
    // const url = `${cdn}/${version}/data/${locale}/item.json`;
    // const url = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json'
    const url = './api/shop/rift_items.json';
    console.log(`Fetching: ${url}`)
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(function (json) {
            const data = Object.assign({}, json);

            for (const key in data) {
                const item = data[key];
                item.maps = { '11': true };

                const tags = item.tags.join(' ');
                item.search = [
                    item.name.toLowerCase(),
                    (item.colloq || '').toLowerCase().split(';'),
                    // item.description.toLowerCase(),
                ].flat();

                item.nonRift = !item.maps['11'];
                item.searchExact = tags.toLowerCase().split(' ');

                item.isKnownEventItem = known_event_items.includes(key);

                item.imageFull = `${cdn}/${version}/img/item/${item.image.full}`;
                item.spriteStyle = `background: url('${cdn}/${version}/img/sprite/${item.image.sprite}') -${item.image.x}px -${item.image.y}px; width:${item.image.w}px; height:${item.image.h}px;`

                const statsRender = [];
                for (let i in item.stats) {
                    statsRender.push(`<div><a>${i}:</a><a style="color:#8AC88A;">+${item.stats[i]}</a></div>`);
                }
                item.statsRender = statsRender.join('\n');
            }

            // ITEM TEST
            // test_item(data);
            callback(data);
            // console.log(itemData);

            //             let listHtml = "";
            //             let tooltipsHtml = "";

            //             Object.keys(itemJson.data).forEach(key => {

            //                 // For sprite images
            //                 newItem.imgRender = `style="background: url('${cdn}/${version}/img/sprite/${item.image.sprite}') -${item.image.x}px -${item.image.y}px; width:${item.image.w}px; height:${item.image.h}px;" width="${item.image.w}" height="${item.image.h}"`

            //                 // For full images - Eg: <img src="http://ddragon.leagueoflegends.com/cdn/9.4.1/img/item/3092.png" width="64" height="64">
            //                 newItem.imageFull = `${cdn}/${version}/img/item/${item.image.full}`



            //                 let total_cost;
            //                 if (item.gold.purchasable)
            //                     total_cost = `<span class="gold">${item.gold.total == 0 ? 'Free' : item.gold.total}</span>`;
            //                 else
            //                     total_cost = '<span class="red">Not In Shop</span>';


            //                 newItem.intoRender = intoRender;

            //                 let tooltipContent = `
            // <div class="tooltipcontent" id="tooltipcontent_item_${key}">
            //     <div class="item-tooltip-container">
            //         <div class="item-header">
            //             <img class="item-img-left" ${newItem.imgRender}/>
            //             <span class="item-title">${item.name}</span> 
            //             <div style="float: right">
            //             <span class="gold"><img src="../../assets/Gold.png" />${total_cost}</span>
            //             </div>
            //         </div>
            //         <div class="item-underline"></div>
            //         <div class="item-stats-table table">
            //             ${statsRender.join('\n')}
            //         </div>
            //         <div class="item-description">
            //             ${item.description}
            //         </div>
            //         <div class="item-underline"></div>
            //         ${fromRender}
            //         ${intoRenderSmall}
            //         <div class="item-tags">Tags: 
            //         ${item.tags.join(' ')}
            //         </div>
            //     </div>
            // </div>`;


            //                 let render = `
            // <div class="item tooltiplink item-container" id="shop_item_${key}" data-key="${key}">
            //     <div class="item-img-left " ${newItem.imgRender}></div>
            //     <span class="item-name">${item.name}</span>
            //     <span class="gold"><img src="../../assets/Gold.png" />${total_cost}</span>
            // </div>`
            //                 // newItem.preRendered = render.trim();
            //                 listHtml += render.trim();
            //                 tooltipsHtml += tooltipContent.trim();
            //                 itemData[key] = newItem;
            //             });
            //             items_dump.innerHTML = listHtml;
            //             item_tooltips_div.innerHTML = tooltipsHtml;
            //             addEvents();
        });
}

function clampP(num) {
    return Math.max(0, Math.min(num, 1))
}
/// Takes in the damage and all reisstance of it's type.
/// retuens the mingated damage delt.
export function calcDamageWithRedection(damage, base, bonus, flat_reduction, percent_reduction, percent_pen, percent_bonus_pen, flat_pen) {
    // Flat Reduction is distuputed between base and bonus armor.
    const base_ratio = base / (base + bonus);
    const bonus_ratio = bonus / (base + bonus);
    // Flat Reduction
    let ebase = base - (flat_reduction * base_ratio);
    if (ebase > 0) {
        // % Reduction
        ebase *= clampP(1 - percent_reduction);
        if (ebase > 0) {
            // % Pen
            ebase *= clampP(1 - percent_pen);
        }
    }
    // Flat Reduction
    let ebonus = bonus - (flat_reduction * bonus_ratio);
    if (ebonus > 0) {
        // % Reduction
        ebonus *= clampP(1 - percent_reduction);
        if (ebonus > 0) {
            // % Pen and % Bonus Pen
            ebonus *= clampP(1 - percent_pen) * clampP(1 - percent_bonus_pen);
        }
    }
    let defence = ebase + ebonus;
    if (defence > 0) {
        // Flat pen only for positive armor
        defence = Math.max(0, defence - flat_pen);
        return damage * (100 / (100 + defence));
    }
    else
        return damage * (2 - (100 / (100 - defence)));
}
export function calc_dmg_onhit(player, target, dmg_premitigation, damage_type) {
    switch (damage_type) {
        case DamageType.NONE:
        case DamageType.UNKNOWN:
            return 0;
        case DamageType.PHYSICAL:
            return calcDamageWithRedection(
                dmg_premitigation,
                target.base_armor,
                target.bonus_armor,
                player.flat_armor_reduction,
                player.percent_armor_reduction,
                player.percent_armorpen,
                player.percent_bonus_armorpen,
                player.flat_armorpen
            );
        case DamageType.MAGIC:
            return calcDamageWithRedection(
                dmg_premitigation,
                target.base_mr,
                target.bonus_mr,
                player.flat_mr_reduction,
                player.percent_mr_reduction,
                player.percent_magicpen,
                0,
                player.flat_magicpen
            );
        case DamageType.TRUE:
            return dmg_premitigation;
        default:
            console.log('Unkown Damage Type', damage_type)
            return 0;
    }
}
export function default_stats() {
    return {
        hp: 0,
        hpperlevel: 0,
        mp: 0,
        mpperlevel: 0,
        movespeed: 0,
        armor: 0,
        armorperlevel: 0,
        spellblock: 0,
        spellblockperlevel: 0,
        attackrange: 0,
        hpregen: 0,
        hpregenperlevel: 0,
        mpregen: 0,
        mpregenperlevel: 0,
        crit: 0,
        critperlevel: 0,
        attackdamage: 0,
        attackdamageperlevel: 0,
        attackspeedperlevel: 0,
        attackspeed: 0,
    }
}

export const CORE_STATS = [
    "ad",
    "hp",
    "mana",
    "movespeed",
    "armor",
    "mr",
    "attackrange",
    "hpregen",
    "manaregen",
    "critchance",
    //non-riot
    "critdamage",
];

export const
    default_spell_ratios = { user: '', stat: 'default', prefex: 'Default', color: "ap", sufex: "Default", html: "Default" };
export const spell_ratios = {
    base_damage: { user: '', prefex: "Base", color: "", sufex: "", extra: true, flat: true, html: "" },
    base_progression: { user: '', prefex: "Unknown", color: "", sufex: "", extra: true, flat: true, html: "" },
    player_total_ap: { user: 'player', stat: 'total_ap', prefex: '', color: "ap", sufex: "AP", html: "AP" },
    player_total_ad: { user: 'player', stat: 'total_ad', prefex: '', color: "ad", sufex: "AD", html: "AD" },
    player_bonus_ad: { user: 'player', stat: 'bonus_ad', prefex: '', color: "ad", sufex: "Bonus AD", html: "<b>bonus</b> AD" },
    player_total_hp: { user: 'player', stat: 'total_hp', prefex: '', color: "health", sufex: "Max Health", html: "<b>max</b> health" },
    player_bonus_hp: { user: 'player', stat: 'bonus_hp', prefex: '', color: "health", sufex: "Bonus Health", html: "<b>bonus</b> health" },
    player_missing_hp: { user: 'player', stat: 'missing_hp', prefex: '', color: "health", sufex: "Missing Health", html: "of champ's <b>missing</b> health" },
    target_total_hp: { user: 'target', stat: 'total_hp', prefex: '', color: "health", sufex: "Target's Max Health", html: "of target's <b>max</b> health" },
    target_bonus_hp: { user: 'target', stat: 'bonus_hp', prefex: '', color: "health", sufex: "Target's Bonus Health", html: "of target's <b>bonus</b> health" },
    target_current_hp: { user: 'target', stat: 'current_hp', prefex: '', color: "health", sufex: "Target's Current Health", html: "of target's <b>current</b> health" },
    target_missing_hp: { user: 'target', stat: 'missing_hp', prefex: '', color: "health", sufex: "Target's Missing Health", html: "of target's <b>missing</b> health" },
    player_bonus_armor: { user: 'player', stat: 'bonus_armor', prefex: '', color: "armor", sufex: "Bonus Armor", html: "<b>bonus</b> Armor" },
    player_total_armor: { user: 'player', stat: 'total_armor', prefex: '', color: "armor", sufex: "Armor", html: "<b>total</b> Armor" },
    player_bonus_mr: { user: 'player', stat: 'bonus_mr', prefex: '', color: "mr", sufex: "Bonus Magic Resistance", html: "<b>bonus</b> MR" },
    player_total_mr: { user: 'player', stat: 'total_mr', prefex: '', color: "mr", sufex: "Magic Resistance", html: "<b>total</b> MR" },

    // Note these ratios should not exist....
    target_total_ap: { user: 'target', stat: 'total_ap', prefex: '', color: "true", sufex: "Total ???", html: "<b>total</b> ???" },
};

export const DamageType = {
    PHYSICAL: 'physical',
    MAGIC: 'magic',
    TRUE: 'true',
    NONE: 'none',
    UNKNOWN: 'unknown'
}
/**
 * A Single instance of damage.
 */
export class DamageSource {
    /** See DamageType */
    damage_type = DamageType.MAGIC
    dmg_premitigation = -1
    dmg_postmitigation = -1
    repeat = 1
    postIsManual = true

    /**
     * @param {string} damage_type One of 'physical', 'magic', 'true', or 'none'
     * @param {number} amount The amount of preminigation damage delt.
     */
    constructor(damage_type, amount) {
        this.damage_type = damage_type;
        this.dmg_premitigation = amount;
    }
    calc_dmg_onhit(player, target) {
        return this.dmg_postmitigation
    }
}

// import { computed } from "vue";

// export const ChampObj = {
//     id: "",
//     name: "",
//     level: 18,
//     flat_mr_reduction:0,
//     percent_mr_reduction : 0,
//     percent_magicpen : 0,
//     flat_magicpen : 0,
//     flat_armor_reduction : 0,
//     percent_armor_reduction : 0,
//     percent_armorpen : 0,
//     percent_bonus_armorpen :0,
//     lethality: 0,

//     flat_armorpen: computed({
//       get: () => this.lethality * (0.6 + (0.4 * this.level) / 18),
//       set: val => {
//           this.lethality = Math.round((45 * flat_armorpen) / (this.level + 27));
//       }
//     })

//     get_current_hp: () => { return this.total_hp - this.missing_hp },
//     set_current_hp: (current_hp) => {
//         if (current_hp > this.total_hp) this.total_hp = current_hp;
//         this.missing_hp = this.total_hp - current_hp;
//     },

//     lifesteal : 0,
//     spellvamp : 0,
//     missing_hp : 0,
//     total_shield : 0,

//     total_ap : 0,

//     base_ad : 0,
//     bonus_ad : 0,
//     get_total_ad: () => { return this.base_ad + this.bonus_ad; },
//     set_total_ad: (total) => { this.bonus_ad = total - this.base_ad; },

//     base_hp : 0,
//     bonus_hp : 0,
//     get_total_hp: () => { return this.base_hp + this.bonus_hp; },
//     set_total_hp: (total) => { this.bonus_hp = total - this.base_hp; },
//     base_mana : 0,
//     bonus_mana : 0,
//     get_total_mana: () => { return this.base_mana + this.bonus_mana; },
//     set_total_mana: (total) => { this.bonus_mana = total - this.base_mana; },
//     base_movespeed : 0,
//     bonus_movespeed : 0,
//     get_total_movespeed: () => { return this.base_movespeed + this.bonus_movespeed; },
//     set_total_movespeed: (total) => { this.bonus_movespeed = total - this.base_movespeed; },
//     base_armor : 0,
//     bonus_armor : 0,
//     get_total_armor: () => { return this.base_armor + this.bonus_armor; },
//     set_total_armor: (total) => { this.bonus_armor = total - this.base_armor; },
//     base_mr : 0,
//     bonus_mr : 0,
//     get_total_mr: () => { return this.base_mr + this.bonus_mr; },
//     set_total_mr: (total) => { this.bonus_mr = total - this.base_mr; },
//     base_attackrange : 0,
//     bonus_attackrange : 0,
//     get_total_attackrange: () => { return this.base_attackrange + this.bonus_attackrange; },
//     set_total_attackrange: (total) => { this.bonus_attackrange = total - this.base_attackrange; },
//     base_hpregen : 0,
//     bonus_hpregen : 0,
//     get_total_hpregen: () => { return this.base_hpregen + this.bonus_hpregen; },
//     set_total_hpregen: (total) => { this.bonus_hpregen = total - this.base_hpregen; },
//     base_manaregen : 0,
//     bonus_manaregen : 0,
//     get_total_manaregen: () => { return this.base_manaregen + this.bonus_manaregen; },
//     set_total_manaregen: (total) => { this.bonus_manaregen = total - this.base_manaregen; },
//     base_critchance : 0,
//     bonus_critchance : 0,
//     get_total_critchance: () => { return this.base_critchance + this.bonus_critchance; },
//     set_total_critchance: (total) => { this.bonus_critchance = total - this.base_critchance; },

//     base_attackspeed : 0,
//     bonus_attackspeed : 0,
//     get_total_attackspeed: () => { return this.base_attackspeed * (1 +  (this.bonus_attackspeed / 100.0)); },
//     set_total_attackspeed: (total) => { this.bonus_attackspeed = ((total / this.base_attackspeed) - 1) * 100.0; },


//     update_base_stats: (obj, stats, lvl) => {
//         console.log("update_base_stats")
//         obj.level = Math.max(Math.min(lvl, 18), 0);
//         obj.base_ad = stats.attackdamage + growth(stats.attackdamageperlevel) || 0;
//         obj.base_hp = stats.hp + growth(stats.hpperlevel) || 0;
//         obj.base_mana = stats.mp + growth(stats.mpperlevel) || 0;
//         obj.base_movespeed = stats.movespeed || 0;
//         obj.base_armor = stats.armor + growth(stats.armorperlevel) || 0;
//         obj.base_mr = stats.spellblock + growth(stats.spellblockperlevel) || 0;
//         obj.base_attackrange = stats.attackrange || 0;
//         obj.base_hpregen = stats.hpregen + growth(stats.hpregenperlevel) || 0;
//         obj.base_manaregen = stats.mpregen + growth(stats.mpregenperlevel) || 0;
//         obj.base_critchance = stats.crit + growth(stats.critperlevel) || 0;

//         obj.base_attackspeed = stats.attackspeed || 0;
//         obj.bonus_attackspeed = growth(stats.attackspeedperlevel) || 0;
//     },
// }

// function growth(perlevel) {
//     const level = 14;
//     return perlevel * (level - 1) * (0.7025 + 0.0175 * (level - 1));
// }

// function _make_champ_data_class() {
//     let str = "";
//     for (const basic_stat of ['ad', 'ap', 'hp', 'mana', 'movespeed', 'armor', 'mr', 'attackrange', 'hpregen', 'manaregen', 'critchance', 'attackspeed']) {
//         str += `    base_${basic_stat} = 0,\n`;
//         str += `    bonus_${basic_stat} = 0,\n`;
//         str += `    get_total_${basic_stat}() { return this.base_${basic_stat} + this.bonus_${basic_stat}; },\n`;
//         str += `    set_total_${basic_stat}(total) { this.bonus_${basic_stat} = total - this.base_${basic_stat}; },\n`;
//     }
//     console.log("_make_champ_data_class\n\n" + str);
// }