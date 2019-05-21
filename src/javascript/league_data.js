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
    // downloadStaticItems(version);
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
            // for (const key in json) {
            //     Vue.set(vue.championList, key, json[key])
            // }
            vue.championList = json;
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