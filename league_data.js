import { el, list, mount, text } from 'https://redom.js.org/redom.es.min.js';
import { downloadStaticItems } from './league_items.js';
import { recalc, spell_data, main_div , asNumber} from './calc.js';

export const cdn = 'https://ddragon.leagueoflegends.com/cdn';
export let locale = 'en_US';
export let version = '0.0.0';

const version_select = document.getElementById('version_select');
const player_champion_select = document.getElementById('player_champion_select');
const target_champion_select = document.getElementById('target_champion_select');

export function downloadVersion() {
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
    if (version != newVersion) {
        version = newVersion;
        downloadingStaticDataFiles(version);
        downloadStaticItems(version);
    }
}

window.addEventListener('load', downloadVersion);

export let league_static_data = {
    isReady: false,
    champion_data: null,
    champion_data_full: {},
};


export function downloadingChampionFiles(version, champion) {
    if (league_static_data.champion_data_full[champion]) {
        const children = [...document.getElementsByClassName(`owner-${champion}`)];
        children.forEach(s => {
            s.classList.remove('hidden');
        });
        return;
    }
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
            window.playerChamption = dao.id;
            var imgStyle = `url("${cdn}/${version}/img/sprite/${dao.passive.image.sprite}") -${dao.passive.image.x}px -${dao.passive.image.y}px`

            addNewPasiveForm(champion, dao.name, imgStyle, dao.passive.name, dao.passive.description);

            dao.spells.forEach(spellDao => {
                addNewSpellFormWithSpellDao(dao, spellDao, `${cdn}/${version}/img/sprite/`)
            });
            league_static_data.champion_data_full[champion] = {
                passiveImage: imgStyle,
            };
            // sellAllItems();
            //TODO buy default items
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

/// Called to add a new block and form
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
            // form['cooldown' + i].classList.add('hidden');
            // form['cooldown' + i].previousElementSibling.classList.add('hidden');
            // form['cost' + i].classList.add('hidden');
            // form['cost' + i].previousElementSibling.classList.add('hidden');
        } else {
            if (i === spellDao.maxrank) {
                cloned.getElementsByClassName('spellrank' + i)[0].checked = true;
                // form['cooldown' + i].setAttribute('data-active', true);
                // form['cost' + i].setAttribute('data-active', true);
            }
            // If i is < 7 and < maxrank
            // form['cost' + i].value = spellDao.cost[i - 1];
            // form['cooldown' + i].value = spellDao.cooldown[i - 1];
        }
    }
    // form['costType'].value = spellDao.costType;

    if (spellDao.maxammo != '-1') {
        //TODO
    }

    //This is needed for spell costs.
    form.abilityresourcename = championDao.partype;
    form.custom_eff_index = 0;

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
    onSpellRankInput(form, true);
    recalc();
}


export function addSpellEffect(form, damage_type="magic") {
    var cloned = document.getElementById('spell_data_effect_template').cloneNode(true);

    // cloned.classList.add(`owner-${form.spellDao}`);
    cloned.id = `spell_data_effect_${form.spellDao.id}_${form.custom_eff_index}`

    var inner_form = cloned.getElementsByTagName("form")[0];
    inner_form.id = `${cloned.id}_form`

    inner_form.effect_name.value = `Custom Effect ${(form.custom_eff_index + 10).toString(36).toUpperCase()}`;
    inner_form.effect_value.innerHTML = '';

    inner_form.damage_type.value = damage_type;

    var inputs = cloned.getElementsByClassName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", recalc);
    }
    form.getElementsByClassName('spell_data_custom_effect_list')[0].appendChild(cloned);
    form.custom_eff_index =  form.custom_eff_index + 1;
}

/// Called when the spell rank radio has changed.
function onSpellRankInput(form, create = false) {
    const idx = form.spellrank.value;
    const spellrankindex = asNumber(form.spellrank) - 1;
    // for (var i = 1; i < 7; i++) {
    //     form['cooldown' + i].setAttribute('data-active', idx == i);
    //     form['cost' + i].setAttribute('data-active', idx == i);

    // }


    var burn = form.spellDao['cooldownBurn'];
    var exact = form.spellDao['cooldown'][spellrankindex];
    form.cooldown.innerHTML = burn.replace(exact.toString(), `<span class="spelleffect">${exact}</span>`) + ' seconds';

    form.cost.innerHTML = form.spellDao['resource'].replace(/{{ (\w*) }}+/g, matchReplaceSpellEffects(form, spellrankindex));

    var burn = form.spellDao['rangeBurn'];
    var exact = form.spellDao['range'][spellrankindex];
    form.range.innerHTML = burn.replace(exact.toString(), `<span class="spelleffect">${exact}</span>`);

    // console.log(form.spellDao.tooltip.split(/(\W)/));
    const tooltip = form.spellDao.tooltip.replace(/{{ (\w*) }}+/g, matchReplaceSpellEffects(form, spellrankindex));
    form.tooltip.innerHTML = tooltip

    const add_to_node = form.getElementsByClassName('spell_data_effect_list')[0];
    while (add_to_node.firstChild) {
        add_to_node.removeChild(add_to_node.firstChild);
    }

    var eff_index = 0;
    tooltip.replace(/deal(.*?)damage/g, function (match, capture) {
        console.log(match);
        var cloned = document.getElementById('spell_data_effect_template').cloneNode(true);

        // cloned.classList.add(`owner-${form.spellDao}`);
        cloned.id = `spell_data_effect_${form.spellDao.id}_${eff_index}`

        var inner_form = cloned.getElementsByTagName("form")[0];
        inner_form.id = `spell_data_effect_${form.spellDao.id}_${eff_index}_form`

        inner_form.effect_name.value = `Effect ${(eff_index + 10).toString(36).toUpperCase()}: `;
        inner_form.effect_value.innerHTML = '"' + match + '"';

        //data-base="${exact}"
        var base = match.match(/data-base=\"(\S+)\"/);
        if (base) {
            inner_form.base_damage.value = base[1];
        }

        /// takes values from data-ratio to add default ratios. 
        var ratios = match.match(/data-ratio=\"(\w+) ([\d.]+)\"/);
        if (ratios) {
            for (var i = 0; i < ratios.length; i += 3) {
                try {
                    if (ratios[i + 1] === 'special') {
                        var special = /data-ratio-special=\"(\S+)\"/.exec(match);
                        if (special)
                            console.log('Creating special ratio = ' + special[1]);
                    } else {
                        inner_form[ratios[i + 1]].value = ratios[i + 2];
                    }
                } catch (e) {
                    console.log('Unknown ratio ' + ratios);
                }
            }
        }

        if (match.includes("magic")) {
            // form.ap_ratio.value = rnd3p(e.coeff);
            inner_form.damage_type.selectedIndex = 3;
        } else if (match.includes("physical")) {
            // form.ap_ratio.value = rnd3p(e.coeff);
            inner_form.damage_type.selectedIndex = 2;
        } else {
            console.log('Could not detect damage')
            inner_form.damage_type.selectedIndex = 1;
        }

        var inputs = cloned.getElementsByClassName("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", recalc);
        }
        add_to_node.appendChild(cloned);

        eff_index = eff_index + 1;
    });

    // console.log(form['tooltip']);

}


function matchReplaceSpellEffects(form, spellrankindex) {
    return function (match, capture) {
        try {
            const effext_index = parseInt(capture[1]);
            if (capture === 'cost') {
                var exact = form.spellDao['cost'][spellrankindex].toString();
                return form.spellDao['costBurn'].replace(exact, `<span class="spelleffect active" >${exact}</span>`);
            } else if (capture === 'abilityresourcename')
                return form.abilityresourcename;
            else if (capture[0] === 'e') {
                var burn = form.spellDao['effectBurn'][effext_index];
                var exact = form.spellDao['effect'][effext_index][spellrankindex];
                // if (effext_index == 1) {
                //     form.base_damage.value = exact;
                // }
                return burn.replace(exact.toString(), `<span class="spelleffect active" data-base="${exact}">${exact}</span>`);
            } else if (capture[0] === 'a' || capture[0] === 'f') {
                for (let e of form.spellDao['vars']) {
                    if (e.key === capture) {
                        switch (e.link) {
                            case "spelldamage":
                                return `<span class="ap" data-ratio="ap_ratio ${e.coeff}">${e.coeff} AP</span>`;
                            case "attackdamage":
                                return `<span class="ad" data-ratio="total_ad_ratio ${e.coeff}">${e.coeff} AD</span>`;
                            case "bonusattackdamage":
                                return `<span class="ad" data-ratio="bonus_ad_ratio ${e.coeff}">${e.coeff} Bonus AD</span>`;
                            case "health":
                                return `<span class="hp" data-ratio="max_health_ratio ${e.coeff}">${e.coeff} Health</span>`;
                            case "bonushealth":
                                return `<span class="hp" data-ratio="bonushealth_ratio ${e.coeff}">${e.coeff} Bonus Health</span>`;
                            case "bonusarmor":
                                return `<span class="armor" data-ratio="bonusarmor_ratio ${e.coeff}">${e.coeff} Bonus Armor</span>`;
                            case "armor":
                                return `<span class="armor" data-ratio="armor_ratio ${e.coeff}">${e.coeff} Armor</span>`;
                            case "bonusspellblock":
                                return `<span class="mr" data-ratio="bonusspellblock_ratio ${e.coeff}">${e.coeff} Bonus MR</span>`;
                            case "spellblock":
                                return `<span class="mr" data-ratio="spellblock_ratio ${e.coeff}">${e.coeff} MR</span>`;
                            default:
                                console.log(`Unknown vars.link value = ${e.link}`);
                                return `<span class="spelleffect" data-ratio="special ${e.coeff}" data-ratio-special="${e.link}">${e.coeff} ?</span>`;
                        }
                    }
                }
            }
        } catch (e) {
            console.log('Spell effect error:');
            console.log(e);
        }
        console.log(`Unknown spell effect '${match}'`);
        return `<span class='tooltip capture-unknown'>${capture}<span class='tooltip-float'>Unknown value for '${match}'</span></span>`;
    };
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
    document.getElementById("main").appendChild(cloned);
}

function downloadingStaticDataFiles(version) {

    //From https://ddragon.leagueoflegends.com/realms/na.json
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