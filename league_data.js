'use strict';

const version_select = document.getElementById('version_select');
const player_champion_select = document.getElementById('player_champion_select');
const target_champion_select = document.getElementById('target_champion_select');

function downloadVersion() {
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

function setPatchVersion(version) {
    console.log(`Data is now sourced from patch ${version}`);
    if (version) {
        downloadingStaticDataFiles(version);
    }
}

downloadVersion();

var league_static_data = {
    isReady: false,
    champion_data: null,
    champion_data_full: {},
};


function downloadingChampionFiles(version, champion) {
    if (league_static_data.champion_data_full[champion]) {
        const children = [...document.getElementsByClassName(`owner-${champion}`)];
        children.forEach(s => {
            s.classList.remove('hidden');
        });
        return;
    }
    const cdn = 'https://ddragon.leagueoflegends.com/cdn';
    const locale = 'en_US';
    const url = `${cdn}/${version}/data/${locale}/champion/${champion}.json`;

    console.log(`Fetching: ${url}`)
    fetch(url)
        .then(function (response) {
            // while (target_champion_select.firstChild) {
            //     target_champion_select.removeChild(target_champion_select.firstChild);
            // }
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(function (myJson) {
            var dao = myJson.data[champion];

            var imgStyle = `url("${cdn}/${version}/img/sprite/${dao.passive.image.sprite}") -${dao.passive.image.x}px -${dao.passive.image.y}px`

            addNewPasiveForm(champion, dao.name, imgStyle, dao.passive.name, dao.passive.description);

            dao.spells.forEach(spellDao => {
                addNewSpellFormWithSpellDao(dao, spellDao, `${cdn}/${version}/img/sprite/`)
            });
            league_static_data.champion_data_full[champion] = {
                passiveImage: imgStyle,
            };
        });
}

/**
Example Dao
{
	id: string
	name: string
	description: string
	tooltip: string
	leveltip: {
		label: string[]
		effect: string[]
	}
	maxrank: number
	cooldown: number[]
	cooldownBurn: string
	cost: number[]
	costBurn: string
	datavalues: any // TODO: typing
	effect: Array<number[]>
	effectBurn: string[]
	vars: Array<{ link: string, coeff: number, key: string }>
	costType: string
	// numeric string
	maxammo: string
	range: number[]
	// numeric string
	rangeBurn: string
    resource: string
*/
function addNewSpellFormWithSpellDao(championDao, spellDao, spriteUrl) {
    const id = `spell_dao_${spellDao.id}`;
    if (document.getElementById(id)) {
        return;
    }

    var cloned = document.getElementById('spell_dao_template').cloneNode(true);

    cloned.classList.remove("hidden");
    cloned.classList.add(`owner-${championDao.id}`);
    cloned.id = id;

    var form = cloned.getElementsByTagName("form")[0];
    form.id = `${id}_form`

    for (var i = 1; i < 7; i++) {
        if (i > spellDao.maxrank) {
            cloned.getElementsByClassName('spellrank' + i)[0].classList.add('hidden');
            form['cooldown' + i].classList.add('hidden');
            form['cooldown' + i].previousElementSibling.classList.add('hidden');
            form['cost' + i].classList.add('hidden');
            form['cost' + i].previousElementSibling.classList.add('hidden');
        }
        else {
            if (i === spellDao.maxrank){
                cloned.getElementsByClassName('spellrank' + i)[0].checked = true;
                form['cooldown' + i].setAttribute('data-active', true);
                form['cost' + i].setAttribute('data-active', true);
            }
            // If i is < 7 and < maxrank
            form['cost' + i].value = spellDao.cost[i-1];
            form['cooldown' + i].value = spellDao.cooldown[i-1];
        }
    }
    form['costType'].value = spellDao.costType;

    const imageStyle = `url(${spriteUrl}${spellDao.image.sprite}) -${spellDao.image.x}px -${spellDao.image.y}px`
    // cloned.getElementsByClassName('champion-name')[0].innerHTML = championDao.name;
    cloned.getElementsByClassName('spell-key')[0].innerHTML = spellDao.id;
    cloned.getElementsByClassName('spell-name')[0].innerHTML = spellDao.name;
    form['tooltip'].innerHTML = spellDao.tooltip;
    cloned.getElementsByClassName('spell-image')[0].style.background = imageStyle;

    // Adds recalc to all the input for cloned section.
    var inputs = cloned.getElementsByClassName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", recalc);
    }
    form.spellDao = spellDao;

    spell_data.push(form);
    main_div.appendChild(cloned);
    onSpellRankInput(form);
    recalc();
}


function addNewPasiveForm(champion, champname, imageStyle, name, description) {
    const id = `passive_dao_${champion}`;
    if (document.getElementById(id)) {
        document.getElementById(id).classList.remove('hidden')
        return;
    }

    var cloned = passive_dao_template.cloneNode(true);
    cloned.classList.remove("hidden");
    cloned.classList.add(`owner-${champion}`);
    cloned.id = id;
    cloned.getElementsByClassName('champion-name')[0].innerHTML = champname;
    cloned.getElementsByClassName('passive-name')[0].innerHTML = name;
    cloned.getElementsByClassName('passive-description')[0].innerHTML = description;
    cloned.getElementsByClassName('passive-image')[0].style.background = imageStyle;
    main_div.appendChild(cloned);
}

function downloadingStaticDataFiles(version) {

    //From https://ddragon.leagueoflegends.com/realms/na.json
    const cdn = 'https://ddragon.leagueoflegends.com/cdn';
    const locale = 'en_US';
    const baseUrl = `${cdn}/${version}/data/${locale}`;

    //Profile Icons
    const profileIconUri = `${baseUrl}/profileicon.json`;
    //Champions: 
    const championUri = `${baseUrl}/champion.json`;
    //Individual Champions: 
    //http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/Aatrox.json 

    //Champion Full: 
    const championFullUri = `${baseUrl}/championFull.json`;
    //Items: 
    const itemUri = `${baseUrl}/item.json`;
    //Summoner Spells: 
    const summonerUri = `${baseUrl}/summoner.json`;
    const languageUri = `${baseUrl}/language.json`;
    const mapUri = `${baseUrl}/map.json`;

    const championImg = `${cdn}/${version}/img/champion/Aatrox.png`;
    const itemImg = `${cdn}/${version}/img/item/1001.png`;
    const spriteImg = `${cdn}/${version}/img/sprite/1001.png`;

    /** removed with 7.24     */
    //const runesUri = `${baseUrl}/rune.json`;
    //const masteriesUri = `${baseUrl}/mastery.json`;

    /** added with 7.24 */
    const runesReforgedUri = `${baseUrl}/runesReforged.json`;

    const [major, minor, patch] = version.match(/\d+/g).map(s => parseInt(s));

    console.log(`Fetching: ${championUri}`)
    fetch(championUri)
        .then(function (response) {
            while (target_champion_select.firstChild) {
                target_champion_select.removeChild(target_champion_select.firstChild);
            }
            while (player_champion_select.firstChild) {
                player_champion_select.removeChild(player_champion_select.firstChild);
            }
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(function (myJson) {
            onChampionData({
                id: '',
                name: '-- None --'
            })
            Object.keys(myJson.data).forEach(key => {
                const element = myJson.data[key];
                element.blurb = "";
                onChampionData(element);
            });
            league_static_data.champion_data = myJson.data;
            league_static_data.isReady = true;
            onReady();
        });
}

function onChampionData(data) {
    var el = document.createElement('option');
    el.setAttribute('value', data.id);
    el.appendChild(document.createTextNode(data.name));
    player_champion_select.appendChild(el.cloneNode(true));
    target_champion_select.appendChild(el);
}