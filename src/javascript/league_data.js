import versionJson from "./../api/version.json"

export const cdn = versionJson.cdn;
export const locale = versionJson.l;
export const version = versionJson.v;
export const displayVersion = versionJson.dv;
export const spriteBaseUri = `${cdn}/${version}/img/sprite/`;

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
    base_damage: { user: '', prefex: "Base", color: "base_damage", sufex: "", extra: true, flat: true, html: "" },
    base_progression: { user: '', prefex: "Unknown", color: "base_damage", sufex: "", extra: true, flat: true, html: "" },
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


const keyword_to_player_stat = {
    ap: "ap",
    ad: "ad",
    attack: "ad",
    armor: "armor",
    mr: "mr",
    'magic resist': "mr",
    health: "hp",
    hp: "hp",
    mana: "mana",
    ability: "ap",
    mark: "mark",
    stack: "stack",
};
const keyword_to_type = {
    total: "total",
    bonus: "bonus",
    base: "base",
};
function table_check(table, text, fallback) {
    for (const key in table) if (text.indexOf(key) > -1) return table[key];
    console.log("Uknown rato", text, "defualting", fallback)
    return fallback;
}

export function ratio_to_player_stat(stat) {
    stat = stat.toLowerCase();
    const player_stat = table_check(keyword_to_player_stat, stat, "default");
    const type = table_check(keyword_to_type, stat, "total");
    return `${type}_${player_stat}`;
}