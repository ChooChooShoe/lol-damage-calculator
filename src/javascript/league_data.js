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

export const cdn = process.env.VUE_APP_DDRAGON_CDN;
export const locale = process.env.VUE_APP_LANG;
export const version = process.env.VUE_APP_DDRAGON_VERSION;
export const spriteBaseUri = `${cdn}/${version}/img/sprite/`;

export function setupVue(vue) {
    fetchChampionList().then((championList) => {
        vue.$app.championList = championList;
    });
    // fetchStaticItems((data) => {
    //     vue.$app.itemData = data;
    // });
}

async function fetchChampionList() {
    /// Get the latest version from /realms/na.json
    const response = await fetch("./api/ChampionList.json");
    const body = await response.json();
    let championList = { None: { name: "  -- None --  ", id: "" } }
    Object.assign(championList, body);
    return championList;
}

const singleChampFileCache = {};

export async function fetchSingleChampFile(champId) {
    if (!champId)
        return console.log("Can't fetchSingleChampFile() 'champId' is not set", champId);

    // const url = `${cdn}/${version}/data/${lang}/champion/${championName}.json`;
    const url = `./api/champion/${champId}.json`;

    // Check cache first
    if (champId in singleChampFileCache) {
        return singleChampFileCache[champId];
    }

    // TODO error checking
    console.log(`Fetching: ${url}`);
    const response = await fetch(url);
    const model = await response.json();

    console.assert(model.id === champId);
    // Add to Cache
    singleChampFileCache[champId] = model;
    // return model in promise
    return model;
}
const known_event_items = ["3631", "3634", "3635", "3642", "3643", "3645", "3647", "3648",];

export function fetchStaticItems(callback) {
    // const url = `${cdn}/${version}/data/${locale}/item.json`;
    // const url = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json'
    const url = './api/items.json';
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

export const spell_ratios = {
    base_damage: { prefex: "Base Damage", color: "", sufex: "", extra: true, },
    base_progression: { prefex: "Leveling", color: "", sufex: "", extra: true, },
    player_total_ap: { color: "ap", sufex: "AP" },
    player_total_ad: { color: "ad", sufex: "AD" },
    player_bonus_ad: { color: "ad", sufex: "Bonus AD" },
    player_total_hp: { color: "health", sufex: "Max Health" },
    player_bonus_hp: { color: "health", sufex: "Bonus Health" },
    player_missing_hp: { color: "health", sufex: "Missing Health" },
    target_total_hp: { color: "health", sufex: "Target's Max Health" },
    target_bonus_hp: { color: "health", sufex: "Target's Bonus Health" },
    target_current_hp: { color: "health", sufex: "Target's Current Health" },
    target_missing_hp: { color: "health", sufex: "Target's Missing Health" },
    player_bonus_armor: { color: "armor", sufex: "Bonus Armor" },
    player_total_armor: { color: "armor", sufex: "Armor" },
    player_bonus_mr: { color: "mr", sufex: "Bonus Magic Resistance" },
    player_total_mr: { color: "mr", sufex: "Magic Resistance" }
};