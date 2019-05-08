import { vue } from './ui.js'

export const cdn = 'https://ddragon.leagueoflegends.com/cdn';
export const locale = 'en_US';
export let version = '0.0.0';

const version_select = document.getElementById('version_select');

console.log('league_data.js is ready!')

function fetchVersionsFromRiotApi() {
    return;
    const url = 'https://ddragon.leagueoflegends.com/api/versions.json';
    console.log(`Fetching: ${url}`)
    fetch(url)
        .then(function (response) {
            while (version_select.firstChild) {
                version_select.removeChild(version_select.firstChild);
            }
            if (response.ok) {
                return response.json();
            }
            var el = document.createElement('option');
            el.appendChild(document.createTextNode('Error'));
            version_select.appendChild(el);
            throw new Error('Network response was not ok.');
        })
        .then(function (myJson) {
            myJson.forEach(element => {
                if (element.startsWith('lolpatch')) return;
                var el = document.createElement('option');
                el.setAttribute('value', element);

                if (!element.startsWith("9") && !element.startsWith("8")) {
                    el.classList.add('hidden');
                    el.classList.add('extra');
                }

                var text;
                if (element.endsWith('.1')) {
                    text = element.substr(0, element.length - 2);
                } else {
                    text = element;
                }
                el.appendChild(document.createTextNode(text));
                version_select.appendChild(el);

            });
            console.log('Patch versions infomation has been updated.')
            setPatchVersion(version_select.value);
        });
}
export function setPatchVersion(newVersion) {
    console.log(`Data is now sourced from patch ${newVersion} (was ${version})`);
    version = newVersion;
    downloadingStaticDataFiles();
    // downloadStaticItems(version);
    // vue.player.champ = window.localStorage.getItem('last_used_champ_player') || '';
    // vue.target.champ = window.localStorage.getItem('last_used_champ_target') || '';
}

function downloadingStaticDataFiles() {
    // const url = `${cdn}/${version}/data/en_US/champion.json`;
    const url = `./export/ChampionList.json`;

    //see also: https://ddragon.leagueoflegends.com/realms/na.json
    // const baseUrl = `${cdn}/${version}/data/${locale}`;
    //Profile Icons
    // const profileIconUri = `${baseUrl}/profileicon.json`;
    //Champions: 
    // const championUri = `${baseUrl}/champion.json`;
    //Individual Champions: 
    //http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/Aatrox.json 

    //Champion Full: 
    // const championFullUri = `${baseUrl}/championFull.json`;
    //Items: 
    // const itemUri = `${baseUrl}/item.json`;
    //Summoner Spells: 
    // const summonerUri = `${baseUrl}/summoner.json`;
    // const languageUri = `${baseUrl}/language.json`;
    // const mapUri = `${baseUrl}/map.json`;

    // const championImg = `${cdn}/${version}/img/champion/Aatrox.png`;
    // const itemImg = `${cdn}/${version}/img/item/1001.png`;
    // const spriteImg = `${cdn}/${version}/img/sprite/1001.png`;

    // const runesReforgedUri = `${baseUrl}/runesReforged.json`;

    console.log(`Fetching: ${url}`)
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(function (json) {
            for (const key in json) {
                Vue.set(vue.championList, key, json[key])
            }
        });
}
setPatchVersion('9.6.1');

export function downloadingChampionFiles(champion) {
    if (!champion)
        return;
    // const url = `${cdn}/${version}/data/${locale}/champion/${champion}.json`;
    const url = `/export/${champion}.json`;

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
            window.playerChamption = dao.id;
            // championData caches all the data.
            Vue.set(vue.championData, dao.id, dao)
            // Removes all the last champions spells.
            vue.currentSpells.length = 0;

            for (const skillkey in dao.complex_skills) {
                vue.currentSpells.push({
                    key: skillkey,
                    spell: dao.complex_skills[skillkey],
                    champion: champion,
                    sprite: `${cdn}/${version}/img/sprite/`
                });
            }
            // sellAllItems();
            //TODO buy default items
        });
}