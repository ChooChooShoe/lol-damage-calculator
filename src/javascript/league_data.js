import Vue from 'vue'

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

export const cdn = 'https://ddragon.leagueoflegends.com/cdn';
export const locale = 'en_US';
export let version = '0.0.0';


export function setupVue(vue) {
    const newVersion = '9.10.1';
    console.log(`Data is now sourced from patch ${newVersion}`);
    version = newVersion;
    fetchChampionList(vue);
    fetchStaticItems((basic, data, groups, tree) => {
        vue.$store.state.basicItemData = basic;
        vue.$store.state.itemData = data;
    });
    // vue.player.champ = window.localStorage.getItem('last_used_champ_player') || '';
    // vue.target.champ = window.localStorage.getItem('last_used_champ_target') || '';
}

function fetchChampionList(vue) {
    // const url = `${cdn}/${version}/data/en_US/champion.json`;
    const url = `./api/ChampionList.json`;

    console.log(`Fetching: ${url}`)
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(function (json) {
            let championList = { None: { name: "  -- None --  ", id: "" } }
            Object.assign(championList, json);
            vue.$store.state.championList = championList;
        });
}

export function fetchSingleChampFile(vue, champion) {
    if (!champion || !vue)
        return;
    // const url = `${cdn}/${version}/data/${locale}/champion/${champion}.json`;
    const url = `/api/champion/${champion}.json`;

    console.log(`Fetching: ${url}`)
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(function (dao) {
            // Used for items. TODO change this.
            // window.playerChamption = dao.id;
            // championData caches all the data.
            Vue.set(vue.championData, dao.id, dao);
            // Removes all the last champions spells.
            vue.currentSpells.length = 0;

            let newList = [];
            for (const skillkey in dao.complex_skills) {
                newList.push({
                    key: skillkey,
                    spell: dao.complex_skills[skillkey],
                    champion: champion,
                    sprite: `${cdn}/${version}/img/sprite/`
                });
            }
            vue.currentSpells = newList;
            // sellAllItems();
            //TODO buy default items
        });
}
const known_event_items = ["3631", "3634", "3635", "3642", "3643", "3645", "3647", "3648",];

export function fetchStaticItems(callback) {
    const url = `${cdn}/${version}/data/${locale}/item.json`;
    console.log(`Fetching: ${url}`)
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(function (json) {
            const type = json.type; // "item"
            const version = json.version; // "9.10.1"
            const basic = json.basic;
            const data = json.data;
            const groups = json.groups;
            const tree = json.tree;

            for (const key in data) {
                const item = data[key];
                
                const tags = item.tags.join(' ');
                item.search = [
                    item.name.toLowerCase(),
                    item.colloq.toLowerCase().split(';'),
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
            callback(basic, data, groups, tree);
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