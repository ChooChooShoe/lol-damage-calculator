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
    // const url = `${cdn}/${version}/data/${locale}/champion/${champion}.json`;
    const url = `/export/${champion}.json`;

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
        .then(function (dao) {
            // var dao = myJson.data[champion];
            window.playerChamption = dao.id;
            const i = dao.simple_skills.i;
            var imgStyle = `url("${cdn}/${version}/img/sprite/${i.image.sprite}") -${i.image.x}px -${i.image.y}px`

            addNewPasiveForm(champion, dao.name, imgStyle, i.name, i.description);

            for(const skill in dao.complex_skills){
                addNewSpellFormWithSpellDao(skill, dao.complex_skills[skill], champion,`${cdn}/${version}/img/sprite/`)
            }

            league_static_data.champion_data_full[champion] = {
                passiveImage: imgStyle,
            };
            // sellAllItems();
            //TODO buy default items
        });
}

/// Called to add a new block and form
function addNewSpellFormWithSpellDao(key, spell, champion, spriteUrl) {
    const spellDao = spell.riot;
    if (spell.skill === 'I')
        return;
    const id = `spell_dao_${spell.champion}_${key}`;
    if (document.getElementById(id)) {
        return;
    }
    spell.id = id;

    var cloned = document.getElementById('spell_dao_template').cloneNode(true);

    cloned.classList.remove("hidden");
    cloned.classList.add(`owner-${champion}`);
    cloned.id = id;

    var form = cloned.getElementsByTagName("form")[0];
    form.id = `${id}_form`

    for (var i = 1; i < 7; i++) {
        if (i > spell.maxrank) {
            cloned.getElementsByClassName('spellrank' + i)[0].classList.add('hidden');
            // form['cooldown' + i].classList.add('hidden');
            // form['cooldown' + i].previousElementSibling.classList.add('hidden');
            // form['cost' + i].classList.add('hidden');
            // form['cost' + i].previousElementSibling.classList.add('hidden');
        } else {
            if (i === spell.maxrank) {
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

    if (spell.maxammo > -1) {
        //TODO
    }

    //This is needed for spell costs.
    form.abilityresourcename = spell.costtype;
    form.custom_eff_index = 0;

    const imageStyle = `url(${spriteUrl}${spell.image.sprite}) -${spell.image.x}px -${spell.image.y}px`
    // cloned.getElementsByClassName('champion-name')[0].innerHTML = championDao.name;
    cloned.getElementsByClassName('spell-key')[0].innerHTML = spell.champion + ' ' + key.toUpperCase();
    cloned.getElementsByClassName('spell-name')[0].innerHTML = spell.name;
    form.defaultTooltipHtml = '<p>' + spell.description.join('</p><p>') + '</p>';
    cloned.getElementsByClassName('spell-image')[0].style.background = imageStyle;

    // Adds recalc to all the input for cloned section.
    var inputs = cloned.getElementsByClassName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", recalc);
    }

    form.spell = spell;
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
export function onSpellRankInput(form, create = false) {
    const idx = form.spellrank.value;
    const spell = form.spell;
    const spellrankindex = asNumber(form.spellrank) - 1;
    // for (var i = 1; i < 7; i++) {
    //     form['cooldown' + i].setAttribute('data-active', idx == i);
    //     form['cost' + i].setAttribute('data-active', idx == i);

    // }


    var burn = form.spell['cooldownBurn'];
    var exact = form.spellDao['cooldown'][spellrankindex];
    form.cooldown.innerHTML = burn.replace(exact.toString(), `<span class="spelleffect">${exact}</span>`) + ' seconds';

    var burn = form.spell['costBurn'];
    var exact = form.spell['cost'][spellrankindex];
    form.cost.innerHTML = burn.replace(exact.toString(), `<span class="spelleffect">${exact}</span>`) + ' ' + form.spell.costtype;

    var burn = form.spellDao['rangeBurn'];
    var exact = form.spellDao['range'][spellrankindex];
    form.range.innerHTML = burn.replace(exact.toString(), `<span class="spelleffect">${exact}</span>`);

    // console.log(form.spellDao.tooltip.split(/(\W)/));
    let ret = matchReplaceSpellEffects(form.defaultTooltipHtml, form, spellrankindex);
    form.tooltip.innerHTML = ret.str;

    const add_to_node = form.getElementsByClassName('spell_data_effect_list')[0];
    while (add_to_node.firstChild) {
        add_to_node.removeChild(add_to_node.firstChild);
    }
    
    for(let eff_index = 0; eff_index < form.spell.leveling.length; eff_index ++) {
        const leveling = matchReplaceSpellEffects(form.spell.leveling[eff_index], form, spellrankindex);
        var cloned = document.getElementById('spell_data_effect_template').cloneNode(true);
        cloned.id = `spell_data_effect_${form.spell.id}_${eff_index}`

        var inner_form = cloned.getElementsByTagName("form")[0];
        inner_form.id = cloned.id + `_form`

        inner_form.effect_name.value = `Effect ${(eff_index + 10).toString(36).toUpperCase()}: `;
        
        inner_form.effect_value.innerHTML = leveling.str;

        if (leveling.vars.base_damage) {
            inner_form.base_damage.value = leveling.vars.base_damage[spellrankindex];
        }
        if (leveling.vars.ratio_ap_1) {
            inner_form.ap_ratio.value = leveling.vars.ratio_ap_1;
        }
        if (leveling.vars.ratio_ad_1) {
            inner_form.ad_ratio.value = leveling.vars.ratio_ad_1;
        }

        if (spell.damagetype.includes("agic")) {
            inner_form.damage_type.selectedIndex = 3;
        } else if (spell.damagetype.includes("hysical")) {
            inner_form.damage_type.selectedIndex = 2;
        }  else if (spell.damagetype.includes("rue")) {
            inner_form.damage_type.selectedIndex = 4;
        } else {
            inner_form.damage_type.selectedIndex = 1;
        }

        var inputs = cloned.getElementsByClassName("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", recalc);
        }
        add_to_node.appendChild(cloned);
    }

    //for riot's data
    // var eff_index = 0;

    // tooltip.replace(/deal(.*?)damage/g, function (match, capture) {
    //     console.log('deal damage',match);
    //     var cloned = document.getElementById('spell_data_effect_template').cloneNode(true);

    //     // cloned.classList.add(`owner-${form.spellDao}`);
    //     cloned.id = `spell_data_effect_${form.spellDao.id}_${eff_index}`

    //     var inner_form = cloned.getElementsByTagName("form")[0];
    //     inner_form.id = `spell_data_effect_${form.spellDao.id}_${eff_index}_form`

    //     inner_form.effect_name.value = `Effect ${(eff_index + 10).toString(36).toUpperCase()}: `;
        
    //     inner_form.effect_value.innerHTML = '"' + form.spell.leveling[eff_index] + '"';

    //     //data-base="${exact}"
    //     var base = match.match(/data-base=\"(\S+)\"/);
    //     if (base) {
    //         inner_form.base_damage.value = base[1];
    //     }

    //     /// takes values from data-ratio to add default ratios. 
    //     var ratios = match.match(/data-ratio=\"(\w+) ([\d.]+)\"/);
    //     if (ratios) {
    //         for (var i = 0; i < ratios.length; i += 3) {
    //             try {
    //                 if (ratios[i + 1] === 'special') {
    //                     var special = /data-ratio-special=\"(\S+)\"/.exec(match);
    //                     if (special)
    //                         console.log('Creating special ratio = ' + special[1]);
    //                 } else {
    //                     inner_form[ratios[i + 1]].value = ratios[i + 2];
    //                 }
    //             } catch (e) {
    //                 console.log('Unknown ratio ' + ratios);
    //             }
    //         }
    //     }

    //     if (match.includes("magic")) {
    //         // form.ap_ratio.value = rnd3p(e.coeff);
    //         inner_form.damage_type.selectedIndex = 3;
    //     } else if (match.includes("physical")) {
    //         // form.ap_ratio.value = rnd3p(e.coeff);
    //         inner_form.damage_type.selectedIndex = 2;
    //     } else {
    //         console.log('Could not detect damage')
    //         inner_form.damage_type.selectedIndex = 1;
    //     }

    //     var inputs = cloned.getElementsByClassName("input");
    //     for (var i = 0; i < inputs.length; i++) {
    //         inputs[i].addEventListener("input", recalc);
    //     }
    //     add_to_node.appendChild(cloned);

    //     eff_index = eff_index + 1;
    // });

    // console.log(form['tooltip']);

}

function define_keyword(word) {
    if(word === 'stun')
        return '<b>Stun</b>'
    else
        return `<span class="keyword">Define "${word}"</span>`
}   

function matchReplaceSpellEffects(string, form, spellrankindex) {
    let retvalues = {}
    string = string.replace(/'''(.*?)'''+/g, '<b class="champname">$1</b>')
    string = string.replace(/''(.*?)''+/g, '<i class="spellname">$1</i>')
    string = string.replace(/\[\[([^\[]*?)\|([^\[]*?)\]\]+/g, '<a class="effect link" title="$1">$2</a>')
    string = string.replace(/\[\[([^\[]*?)\]\]+/g, '<a class="effect link" title="$1">$1</a>')
    for(let i = 0; i < 15; i++) {
        if (string.includes('{{') )
            string = string.replace(/{{([^{}]*)}}/g, matchInner(form, spellrankindex, retvalues));
    }
    return {str: string, vars: retvalues};
}
function matchInner(form, spellrankindex, retvalues) {
    return function (match, capture){
        console.log('match:', match, capture)
        capture = capture.trim()
        try {
            const effext_index = parseInt(capture[1]);
            // for wikia data

            if (capture.startsWith('tip|')){
                var inner = capture.slice(4);
                if (inner.includes('|'))
                    return `<span class='tooltip blue'>${inner.slice(inner.indexOf('|') + 1)}<span class='tooltip-float'>${define_keyword(inner.slice(0, inner.indexOf('|')))}</span></span>`;
                return `<span class='tooltip blue'>${inner}<span class='tooltip-float'>${define_keyword(inner)}</span></span>`;
            }
            if (capture.startsWith('tt|')){
                var inner = capture.slice(3);
                if (inner.includes('|'))
                    return `<span class='tooltip ap'>${inner.slice(0, inner.indexOf('|')) }<span class='tooltip-float'>${inner.slice(inner.indexOf('|') + 1)}</span></span>`;
                return `<span class='tooltip ap'>${inner}<span class='tooltip-float'>${inner}</span></span>`;
            }
            if (capture.startsWith('sbc|')){
                return `<span class="blue">${capture.slice(4)}</span>`;
            }
            if (capture.startsWith('as|')) {
                var inner = capture.slice(3);
                if (inner.includes('AP')) {
                    if (!retvalues.ratio_ap_1 )
                        retvalues.ratio_ap_1 = parseFloat(inner.replace(/\D/g, '')) / 100;
                    if (!retvalues.ratio_ap_2)
                        retvalues.ratio_ap_2 = parseFloat(inner.replace(/\D/g, '')) / 100;
                }
                else if (inner.includes('AD')) {
                    if (!retvalues.ratio_ad_1 )
                        retvalues.ratio_ad_1 = parseFloat(inner.replace(/\D/g, '')) / 100;
                    if (!retvalues.ratio_ad_2)
                        retvalues.ratio_ad_2 = parseFloat(inner.replace(/\D/g, '')) / 100;
                }
                return `<span class="ad">${inner}</span>`;
            }
            if (capture.startsWith('fd|')){
                return `<span class="armor">${capture.slice(3)}</span>`;
            }
            if (capture.startsWith('ai|')){
                return `<span class="mr">${capture.slice(3)}</span>`;
            }
            if (capture.startsWith('sti|')){
                return `<span class="armor">${capture.slice(4)}</span>`;
            }

            if (capture.startsWith('st|')){
                var inner = capture.slice(3);
                var split1 = inner.slice(0, inner.indexOf('|'))
                var split2 = inner.slice(inner.indexOf('|'))
                return `<a>${split1}</a>: <span>${split2}</span>`;
            }

            if (capture.startsWith('ap|')){
                var inner = capture.substring(3);
                inner = inner.replace(/([\d.]+) to ([\d.]+)/g, (match, start, end) => {
                    start = parseFloat(start)
                    end = parseFloat(end)
                    const diff = (end - start) / 4
                    return `${start}/${start + diff * 1}/${start + diff * 2}/${start + diff * 3}/${end}`;
                    
                });
                inner = inner.replace(' ', '/').replace('|', '/');

                if(!retvalues.base_damage)
                    retvalues.base_damage = inner.split('/');
                return `<span style="font-family: 'DejaVu Sans Mono', 'Lucida Console', monospace;">${inner}</span>`;
            }

            //for riot data
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
        return `<span class='tooltip capture-unknown'>${capture}<span class='tooltip-float'>Unknown value for '${capture}'</span></span>`;
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