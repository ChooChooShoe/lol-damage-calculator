import { el, list, mount, text } from 'https://redom.js.org/redom.es.min.js';
import { downloadStaticItems } from './league_items.js';
import { recalc, spell_data, main_div , asNumber} from './calc.js';

export const cdn = 'https://ddragon.leagueoflegends.com/cdn';
export let locale = 'en_US';
export let version = '0.0.0';

export const list_of_colors = ['health', 'hp', 'attack damage', 'ad', 'physical damage', 'ability power', 'ap', 'magic damage', 'true damage', 'attack speed', 'armor', 'lethality', 'magic resist', 'mr', 'mana', 'mana regen', 'energy', 'critical strike chance', 'critical chance', 'critical strike damage', 'critical damage', 'movement speed', 'ms', 'xp', 'gold', 'siphoning strike', 'buzzword', 'buzzword2', 'buzzword3'];

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

            // addNewPasiveForm(champion, dao.name, imgStyle, i.name, i.description);

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
    const is_passive = spell.skill === 'I';
    const id = `spell_dao_${champion}_${key}`;
    if (document.getElementById(id)) {
        return;
    }
    spell.id = id;

    var cloned = new SpellEffect(id, champion, spell, key, spriteUrl);

    // form['costType'].value = spellDao.costType;

    if (spell.maxammo > -1) {
        //TODO
    }

    //This is needed for spell costs.
    cloned.form.abilityresourcename = spell.costtype;
    cloned.form.custom_eff_index = 0;

    cloned.form.spell = spell;
    cloned.form.spellDao = spell.riot;
    spell_data.push(cloned.form);
    mount(main_div, cloned)
    cloned.update(spell);
    recalc();
}


export function addSpellEffect(form, damage_type="magic") {
    var cloned = document.getElementById('spell_data_effect_template').cloneNode(true);
    const add_to_node = form.getElementsByClassName('spell_data_custom_effect_list')[0];

    // cloned.classList.add(`owner-${form.spellDao}`);
    cloned.id = `spell_data_effect_${form.spellDao.id}_cutom_${form.custom_eff_index}`

    var inner_form = cloned.getElementsByTagName("form")[0];
    inner_form.id = `${cloned.id}_form`

    inner_form.effect_name.value = `Custom Effect ${(form.custom_eff_index + 10).toString(36).toUpperCase()}`;
    inner_form.effect_value.innerHTML = '';

    inner_form.damage_type.value = damage_type;

    mount(inner_form, new Field('dmg_premitigation', 'Premitigation Damage', '', false, false, true));
    mount(inner_form, new Field('dmg_onhit', 'Damage after Resistances', '', false, false, true));

    mount(inner_form, new Field('base_damage', 'Base Damage', '.base'));
    mount(inner_form, new Field('ap_ratio', 'AP Ratio', '.ap'));
    mount(inner_form, new Field('total_ad_ratio', 'AD Ratio', '.ad'));
    mount(inner_form, new Field('bonus_ad_ratio', 'Bonus AD Ratio', '.ad'));
    mount(inner_form, new Field('total_health_ratio', '% Health Ratio', '.health'));

    mount(add_to_node, cloned)

    var inputs = cloned.getElementsByClassName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", recalc);
        inputs[i].addEventListener("focus", e => e.currentTarget.select());
    }
    add_to_node.appendChild(cloned);
    form.custom_eff_index =  form.custom_eff_index + 1;
}
export class Field {
    constructor(id, label_text, classColor, removeable=true, editable=true, fullsize=false) {
        
        this.delBtn = removeable ?  el(`a.del-btn.inline`, {
            title: 'Remove Field'
        }, text('\u2715')) : el('a.inline');

        this.input = editable ? el(`input.input.block`, {
            type: 'text',
            name: id,
            enabled: true,
        }) : el('input.input.block', {
            name: id,
            enabled: false
        });

        this.el = el(`div.field.inline${fullsize ? '.full' : ''}`,
            el('div.flex.flex-row', {
                style: ''
            },
            this.label = el(`span.block${classColor}`, text(label_text)),
            this.input,
            this.delBtn,
        ));

        this.delBtn.addEventListener('click', e => {
            this.el.classList.add('hidden');
            this.input.value = '';
            recalc();
        });
    }
    get() {
        return this.input.value
    }
    update(data) {

    }
}
export class SpellEffect {
    constructor(id, champion, spell, key, spriteUrl) {
        this.spell = spell;
        const is_passive = this.spell.skill === 'I';
        this.el = el(`div#${id}.data_holder.block.owner-${champion}`,
            this.form = el(`form#${id}_form`, {
                autocomplete: 'off',
                method: 'POST',
                action: '#'
            },
                this.img = el('img.spell-image', {
                    style: `float: right; background: url(${spriteUrl}${spell.image.sprite}) -${spell.image.x}px -${spell.image.y}px;`,
                    width: "48",
                    height: "48",
                }),
                this.key = el('h4.spell-key', text(spell.champion + ' ' + key.toUpperCase() + ': ' + spell.name)),
                this.tooltip = el('div.spell-tooltip'),
                el('div.table.fill',
                    is_passive ? text('') : el('div',
                        text('Spell Rank'),
                        this.spellrank = el('fieldset.spellrank.input',
                        el('input.spellrank1', {type: 'radio', name: 'spellrank', value: '1', title: 'Rank 1'}),
                        el('input.spellrank2', {type: 'radio', name: 'spellrank', value: '2', title: 'Rank 2'}),
                        el('input.spellrank3', {type: 'radio', name: 'spellrank', value: '3', title: 'Rank 3'}),
                        el('input.spellrank4', {type: 'radio', name: 'spellrank', value: '4', title: 'Rank 4'}),
                        el('input.spellrank5', {type: 'radio', name: 'spellrank', value: '5', title: 'Rank 5'}),
                        el('input.spellrank6', {type: 'radio', name: 'spellrank', value: '6', title: 'Rank 6'}),
                        
                        )
                    ),
                    el('.cooldown-container', 
                        el('label', text('Cooldown')), 
                        this.cooldown = el('span')
                    ),
                    el('.cost-container', 
                        el('label.cost-title', text('Cost')), 
                        this.cost = el('span')
                    ),
                    el('.range-container', 
                        el('label.tange-title', text('Range')), 
                        this.range = el('span')
                    ),
                ),
                this.effect_list = el('div.spell_data_effect_list'),
                this.custom_effect_list = el('div.spell_data_custom_effect_list'),
                el('div',
                    // el('input', {
                    //     name: 'reset',
                    //     type: 'reset',
                    //     value: 'Zero Above'
                    // }),
                    // el('input', {
                    //     name: 'expand',
                    //     type: 'button',
                    //     value: 'Expand'
                    // }),
                    // el('input.hidden', {
                    //     name: 'reset',
                    //     type: 'button',
                    //     value: 'Collapse'
                    // }),
                    this.adeffect = el('input.right', {
                        name: 'add_effect',
                        type: 'button',
                        value: 'Add Effect +'
                    })
                ),
            )
        );
        this.form.defaultTooltipHtml = '<p>' + spell.description.join('</p><p>') + '</p>';
        var inputs = this.el.getElementsByClassName("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", recalc);
            inputs[i].addEventListener("focus", e => e.currentTarget.select());
        }
        if (!is_passive) {
            for(let x of this.form.spellrank) {
                if (parseInt(x.value) > spell.maxrank) {
                    x.classList.add('hidden');
                } else {
                    x.addEventListener('input', e => this.update());
                    if (parseInt(x.value) === spell.maxrank) {
                        x.checked = true;
                    }
                }
            }
        }
        this.adeffect.addEventListener('click', e => addSpellEffect(this.form));
    }

    update(x) {
        const is_passive = this.spell.skill === 'I';

        // const idx = this.form.spellrank.value;
        const spellrankindex = is_passive ? 0 : asNumber(this.form.spellrank) - 1;
        // for (var i = 1; i < 7; i++) {
        //     form['cooldown' + i].setAttribute('data-active', idx == i);
        //     form['cost' + i].setAttribute('data-active', idx == i);
    
        // }
    
        if (!is_passive) {
            var burn = this.spell['cooldownBurn'];
            var exact = this.spell.riot['cooldown'][spellrankindex];
            this.cooldown.innerHTML = burn.replace(exact.toString(), `<span class="spelleffect">${exact}</span>`) + ' seconds';
        
            var burn = this.spell.riot['costBurn'];
            var exact = this.spell.riot['cost'][spellrankindex];
            this.cost.innerHTML = burn.replace(exact.toString(), `<span class="spelleffect">${exact}</span>`) + ' ' + this.spell.costtype;
        
            var burn = this.spell.riot['rangeBurn'];
            var exact = this.spell.riot['range'][spellrankindex];
            this.range.innerHTML = burn.replace(exact.toString(), `<span class="spelleffect">${exact}</span>`);
        
        }
        // console.log(form.spellDao.tooltip.split(/(\W)/));
        let ret = matchReplaceSpellEffects(this.form.defaultTooltipHtml, this.form, spellrankindex);
        this.tooltip.innerHTML = ret.str;
    
        const add_to_node = this.form.getElementsByClassName('spell_data_effect_list')[0];
        while (add_to_node.firstChild) {
            add_to_node.removeChild(add_to_node.firstChild);
        }
        
        for(let eff_index = 0; eff_index < this.spell.leveling.length; eff_index ++) {
            const leveling = matchReplaceSpellEffects(this.spell.leveling[eff_index], this.form, spellrankindex);
            var cloned = document.getElementById('spell_data_effect_template').cloneNode(true);
            cloned.id = `spell_data_effect_${this.spell.id}_${eff_index}`

            var inner_form = cloned.getElementsByTagName("form")[0];
            inner_form.id = cloned.id + `_form`
            // inner_form.effect_name.value = `Effect ${(eff_index + 10).toString(36).toUpperCase()}: `;
            inner_form.removeChild(inner_form.effect_name);
            // inner_form.removeChild(inner_form.remove_effect);
            inner_form.effect_value.innerHTML = leveling.str;


            mount(inner_form, new Field('dmg_premitigation', 'Pre-Mitigation Damage', '', false, false));
            mount(inner_form, new Field('dmg_onhit', 'After Resistances', '', false, false));
            mount(add_to_node, cloned)
            // add_to_node.appendChild(cloned);
    
            const before = cloned.querySelector('.insert-before');
            if (leveling.vars.base_damage) {
                mount(inner_form, new Field('base_damage', 'Base Damage', '.base', false), before);
                inner_form.base_damage.value = leveling.vars.base_damage[spellrankindex];
            }
            if (leveling.vars.ratio_ap_1) {
                mount(inner_form, new Field('ap_ratio', 'AP Ratio', '.ap', false), before);
                inner_form.ap_ratio.value = leveling.vars.ratio_ap_1;
            }
            // if (leveling.vars.ratio_ap_1) {
            //     inner_form.ap_ratio.value = leveling.vars.ratio_ap_2;
            // }
            if (leveling.vars.ratio_ad_1) {
                mount(inner_form, new Field('total_ad_ratio', 'AD Ratio', '.ad', false), before);
                inner_form.total_ad_ratio.value = leveling.vars.ratio_ad_1;
            }
            if (leveling.vars.ratio_ad_2) {
                mount(inner_form, new Field('bonus_ad_ratio', 'Bonus AD Ratio', '.ad', false), before);
                inner_form.bonus_ad_ratio.value = leveling.vars.ratio_ad_2;
            }
    
            // mount(inner_form, new Field('max_health_ratio', '% Max Health Ratio', '.health'));

            if (this.spell.damagetype.includes("agic")) {
                inner_form.damage_type.selectedIndex = 3;
            } else if (this.spell.damagetype.includes("hysical")) {
                inner_form.damage_type.selectedIndex = 2;
            }  else if (this.spell.damagetype.includes("rue")) {
                inner_form.damage_type.selectedIndex = 4;
            } else {
                inner_form.damage_type.selectedIndex = 1;
            }
    
            var inputs = cloned.getElementsByClassName("input");
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].addEventListener("input", recalc);
                inputs[i].addEventListener("focus", e => e.currentTarget.select());
            }
        }
        tippy(`#${this.el.id} [data-tippy-content]`,{
            animation: 'fade',
            duration: 50,
            delay: [0, 0],
            followCursor: true,
        });
    }
}
/// Called when the spell rank radio has changed.
export function onSpellRankInput(form, create = false) {
    return;
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
        return `<b>${word}</b>`
}   

function matchReplaceSpellEffects(string, form, spellrankindex) {
    let retvalues = {}
    string = string.replace('<!--\n-->', '<br/>');
    for(let i = 0; i < 15; i++) {
        if (string.includes('{{') )
            string = string.replace(/{{([^{}]*)}}/g, matchInner(form, spellrankindex, retvalues));
    }
    string = string.replace(/'''(.*?)'''+/g, '<b class="chamption-name">$1</b>');
    string = string.replace(/''(.*?)''+/g, '<i class="chamption-name">$1</i>');
    string = string.replace(/\[\[([^\[]*?)\|([^\[]*?)\]\]+/g, '<a class="effect link" title="$1">$2</a>');
    string = string.replace(/\[\[([^\[]*?)\]\]+/g, '<a class="effect link" title="$1">$1</a>');
    
    return {str: string, vars: retvalues};
}
function matchInner(form, spellrankindex, retvalues) {
    return function (match, capture){
        console.log('match:', match)
        capture = capture.trim()
        try {
            const effext_index = parseInt(capture[1]);

            // ci (or Champion icon): {{ci|<Champion>|<Custom name>}}
            if (capture.startsWith('ci|')){
                const slices = capture.slice(3).split('|')
                if (slices.length == 2)
                    return `<span class="chamption-name" data-champkey="${slices[0]}">${slices[1]}</span>`;
                return `<span class="chamption-name" data-champkey="${slices[0]}">${slices[0]}</span>`;
            }
            // cis (or Champion icon with possessive apostrophes): {{cis|<Champion>}}
            if (capture.startsWith('cis|')){
                const slices = capture.slice(4).split('|')
                return `<span class="chamption-name" data-champkey="${slices[0]}">${slices[0]}'s</span>`;
            }

            // cai (or Champion's ability icon): {{cai|<Ability>|<Champion>|<Custom ability name>}}
            if (capture.startsWith('cai|')){
                const slices = capture.slice(4).split('|');
                let abilty = slices[0];
                let champ = slices[1];
                let display = slices[0];
                if (slices.length == 3)
                    display = slices[2];
                return `<span class="champion-ability" data-champkey="${champ}" data-ability="${abilty}">${champ}'s ${display}</span>`;
            }
            // csl (or Champion skin link icon): {{csl|<Champion>|<Skin>}}

            // ai (or Ability icon): {{ai|<Ability>|<Champion>|<Custom ability name>}}
            if (capture.startsWith('ai|')){
                const slices = capture.slice(3).split('|');
                let abilty = slices[0];
                let champ = slices[1];
                let display = slices[0];
                if (slices.length == 3)
                    display = slices[2];
                return `<span class="champion-ability" data-champkey="${champ}" data-ability="${abilty}">${display}</span>`;
            }
            // ais (or Ability icon with possessive apostrophes): {{ais|<Ability>|<Champion>}}
            if (capture.startsWith('ais|')){
                const slices = capture.slice(4).split('|');
                let abilty = slices[0];
                let champ = slices[1];
                return `<span class="champion-ability" data-champkey="${champ}" data-ability="${abilty}">${abilty}'s</span>`;
            }

            // bi (or Buff icon): {{bi|<Buff>|<Custom name>}}

            // ii (or Item icon): {{ii|<Item>|<Custom name>}}

            // iis (or Item icon with possessive apostrophes): {{iis|<Item>}}

            // mi6 (or Mastery icon Season 2016): {{mi6|<Mastery>|<Custom name>}}

            // mi7 (or Mastery icon Season 2017): {{mi7|<Mastery>|<Custom name>}}

            // ri (or Rune icon): {{ri|<Rune>|<Custom name

            // si (or Spell icon): {{si|<Spell>|<Custom name>}}
            
            if (capture.startsWith('si|')){
                const slices = capture.slice(3).split('|')
                return  `<span class="title-tooltip" title="${slices[0]}" data-spellkey="${slices[0]}">${slices[1]}</span>`;
            }

            // sis (or Spell icon with possessive apostrophes): {{sis|<Spell>}}

            // sti (or Stat icon): {{sti|<stat>|<Custom name>}}
            if (capture.startsWith('sti|')){
                const slices = capture.slice(4).split('|');
                let stat = slices[0].replace(' ','-');
                let statName = slices[0];
                let name = slices.slice(1).join('|') || stat;
                return `<span><i title=${statName} class="icon i-${stat}"></i>${name}</span>`;
            }

            // tip (or Tip icon): {{tip|<effect>|<Custom name>}}
            if (capture.startsWith('tip|')) {
                const slices = capture.slice(4).split('|');
                let effect = slices[0];
                let name = slices.slice(1).join('|') || effect;
                return `<span data-tippy-content="${define_keyword(effect)}" class="blue"><i class="icon i-${effect}"></i>${name}</span>`;
            }

            // ui (or Unit icon): {{ui|<Unit>|<Custom name>}}
            // uis (or Unit icon with possessive apostrophes): {{uis|<Unit>}}


            // tt (or Text tooltip): {{tt|<Text>|<Tooltip>}}
            if (capture.startsWith('tt|')){
                const slices = capture.slice(3).split('|');
                return  `<span class="title-tooltip" title="${slices[1]}">${slices[0]}</span>`;
            }
            
            //pp (or Passive progression): 
            //    {{pp|<Size>|<Value1>|<Value2>|<...>|<ValueN>|<Level1>|<Level2>|<...>|<LevelN>}}
            // or {{pp|Size|type=X|Value1|...|ValueN|Level1|...|LevelN}} 
            // or {{pp|Size|formula=X|Value1|...|ValueN|Level1|...|LevelN}} 
            // or {{pp|Size|color=X|Value1|...|ValueN|Level1|...|LevelN}}
            if (capture.startsWith('pp|')) {
                return `<span class="red">progression</span>`
            }
            // ap (or Ability progression): {{ap|<Value1>|<Value2>|<...>|<Value6>}}
            if (capture.startsWith('ap|')) {
                var inner = capture.substring(3);
                inner = inner.replace(/([\d./*\-+]+) to ([\d./*\-+]+)/g, (match, start, end) => {
                    start = parseFloat(eval(start))
                    end = parseFloat(eval(end))
                    const diff = (end - start) / 4
                    return `${start}/${start + diff * 1}/${start + diff * 2}/${start + diff * 3}/${end}`;
                    
                });
                inner = inner.replace(/[| ]/g, '/');

                if(!retvalues.base_damage)
                    retvalues.base_damage = inner.split('/');
                return `<span style="font-family: 'DejaVu Sans Mono', 'Lucida Console', monospace;">${inner}</span>`;
            }
            // as (or Ability scaling): {{as|<(+ X% stat)>}} or {{as|<(+ X% stat)>|<stat>}}
            if (capture.startsWith('as|')) {
                console.log('as Ability scaling =',capture);
                
                var inner = capture.slice(3);
                const inner_lo = inner.toLowerCase();

                let cssClass = list_of_colors.find( c => {
                    return inner_lo.includes(c)
                }) || 'ad';
                cssClass = cssClass.replace(' ', '-');
                
                console.log('as Ability scaling = calss=',cssClass);
                if (inner.includes('AP')) {
                    if (!retvalues.ratio_ap_1 )
                        retvalues.ratio_ap_1 = inner.replace(/\D/g, '') + "%";
                    if (!retvalues.ratio_ap_2)
                        retvalues.ratio_ap_2 = inner.replace(/\D/g, '') + "%";
                }
                else if (inner.includes('AD')) {
                    if(inner.includes('bonus')) {
                        if (!retvalues.ratio_ad_2)
                            retvalues.ratio_ad_2 = inner.replace(/\D/g, '') + "%";
                    }
                    else if (!retvalues.ratio_ad_1 )
                        retvalues.ratio_ad_1 = inner.replace(/\D/g, '') + "%";
                }
                return `<span class="${cssClass}">${inner}</span>`;
            }
            // sbc (or Small bold capitals): {{sbc|<Text>}}
            if (capture.startsWith('sbc|')){
                return `<span style="font-weight:bold; font-size:89%; text-transform:uppercase;">${capture.slice(4)}</span>`;
            }

            //pp18 (or Passive progression from level 1 to 18): {{pp18|<Val1>|<Val2>|<...>|<Val17>|<Val18>}}​​​​​​​

            //ft (or Flip text): {{ft|<Element 1>|<Element 2>}}

            // format number
            if (capture.startsWith('fd|')){
                return `<span style="font-variant-numeric: tabular-nums;">${capture.slice(3)}</span>`;
            }

            if (capture.startsWith('st|')){
                const slices = capture.slice(3).split('|')
                let rets = []
                for(let i = 0; i < slices.length; i += 2) {
                    rets.push(`<a>${slices[i]}</a>: <span>${slices[i+1]}</span>`);
                }
                return rets.join('<br/>');
            }
            // MATH OPERATORS:
            if(capture == 'plus')
                return '+';
            if (capture == 'minus')
                return '−';
            if (capture == 'plusminus')
                return '±';
            if (capture == 'divided by')
                return '÷';
            if (capture == 'times')
                return '×';
            if (capture == 'equals')
                return '=';
            if (capture == 'degree')
                return '°';

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