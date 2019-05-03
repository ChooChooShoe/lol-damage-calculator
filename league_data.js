import {
    el,
    list,
    mount,
    text
} from 'https://redom.js.org/redom.es.min.js';
import {
    downloadStaticItems
} from './league_items.js';
import {
    recalc,
    main_div,
    asNumber
} from './calc.js';
import {
    vue
} from './ui.js'

export const cdn = 'https://ddragon.leagueoflegends.com/cdn';
export const locale = 'en_US';
export let version = '0.0.0';

export const list_of_colors = ['health', 'hp', 'attack damage', 'ad', 'physical damage', 'ability power', 'ap', 'magic damage', 'true damage', 'attack speed', 'armor', 'lethality', 'magic resist', 'mr', 'mana', 'mana regen', 'energy', 'critical strike chance', 'critical chance', 'critical strike damage', 'critical damage', 'movement speed', 'ms', 'xp', 'gold', 'siphoning strike', 'buzzword', 'buzzword2', 'buzzword3'];

const version_select = document.getElementById('version_select');
const player_champion_select = document.getElementById('player_champion_select');
const target_champion_select = document.getElementById('target_champion_select');

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
    const url = `${cdn}/${version}/data/en_US/champion.json`;
    // const url = `./export/ChampionList.json`;

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
            Object.values(json.data).sort((a, b) => {
                return a.name < b.name ? -1 : 1
            }).forEach(onChampionData);
        });
}

function onChampionData(data) {
    Vue.set(vue.championList, data.id, data)
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

Vue.component('data-input', {
    //id, label_text, classColor, removeable=true, editable=true, fullsize=false
    props: ['dname', 'value', 'ispercent'],
    name: 'data-input',
    computed: {
        displayValue: function () {
            return this.encode(this.value);
        },
    },
    methods: {
        encode(val) {
            if (this.ispercent === true)
                return +(Math.round(val + "e+12") + "e-10");
            return +(Math.round(val + "e+10") + "e-10");
        },
        decode(val) {
            if (this.ispercent === true)
                return parseFloat(val) / 100 || 0;
            return parseFloat(val) || 0;
        },
    },
    template: `<input class="input numinput" type="number" step="1" title=""
  :name="dname" :id="dname" :value="encode(value)" v-on:input="$emit('input', decode($event.target.value))">`
});

export function addSpellEffect(form, damage_type = "magic") {
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
    form.custom_eff_index = form.custom_eff_index + 1;
}
export class Field {
    constructor(id, label_text, classColor, removeable = true, editable = true, fullsize = false) {

        this.delBtn = removeable ? el(`a.del-btn.inline`, {
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

        this.delBtn.addEventListener('click', _e => {
            this.el.classList.add('hidden');
            this.input.value = '';
            recalc();
        });
    }
    get() {
        return this.input.value
    }
    update(_data) {

    }
}
const known_ratios = {
    'base_damage': { prefex: 'Base Damage', color: '', sufex: '', },
    'ap': { color: 'ap', sufex: 'AP', },
    'total_ad': { color: 'ad', sufex: 'AD', },
    'bonus_ad': { color: 'ad', sufex: 'Bonus AD', },
    'total_hp': { color: 'health', sufex: 'Max Health', },
    'bonus_hp': { color: 'health', sufex: 'Bonus Health', },
    'missing_hp': { color: 'health', sufex: 'Missing Health', },
    'target.total_hp': { color: 'health', sufex: "Target's Max Health", },
    'target.bonus_hp': { color: 'health', sufex: "Target's Bonus Health", },
    'target.current_hp': { color: 'health', sufex: "Target's Current Health", },
    'target.missing_hp': { color: 'health', sufex: "Target's Missing Health", },
    'bonus_armor': { color: 'armor', sufex: 'Bonus Armor', },
    'total_armor': { color: 'armor', sufex: 'Armor', },
    'bonus_mr': { color: 'mr', sufex: 'Bonus Magic Resistance', },
    'total_mr': { color: 'mr', sufex: 'Magic Resistance', },
};

Vue.component('spell-field', {
    props: ['value', 'type'],
    data: function () {
        return {
            known_ratios: known_ratios,
        }
    },
    computed: {
        prefex: function () {
            return this.known_ratios[this.type].prefex || '';
        },
        color: function () {
            return this.known_ratios[this.type].color || '';
        },
        sufex: function () {
            return this.known_ratios[this.type].sufex || '';
        },
        displayValue: function () {
            if (this.data === 'base_damage')
                return +(Math.round(this.value + "e+6") + "e-6");
            else {
                const x = +(Math.round(this.value + "e+6") + "e-6");
                return '' + (x < 0 ? x : '+' + x) + '%';
            }
        },
        ispercent: function () {
            return this.type !== 'base_damage';
        },
    },
    methods: {
        encode(val) {
            if (this.ispercent)
                return +(Math.round(val + "e+12") + "e-10");;
            return val;
        },
        decode(val) {
            if (this.ispercent)
                return parseFloat(val) / 100 || 0;
            return parseFloat(val);
        },
    },
    template: `<div class="flex flex-row">
  <span>{{ prefex }}<span :class="color">{{ displayValue }} {{ sufex }}</span></span>
  <input class="input block numinput" type="number" step="1" title=""
   :value="encode(value)" v-on:input="$emit('input', decode($event.target.value))">
  <span class="inline">{{ ispercent ? '%' : ' ' }}</span>
  </div>`
});

Vue.component('spell-tooltip', {
    props: ['spell', 'spellrankindex'],
    template: `<div v-html="calchtml()"></div>`,
    methods: {
        calchtml: function () {
            // console.log(form.spellDao.tooltip.split(/(\W)/));
            const defaultTooltipHtml = '<p>' + this.spell.description.join('</p><p>') + '</p>';
            let ret = matchReplaceSpellEffects(defaultTooltipHtml, null, this.spellrankindex);
            return ret.str;
        },
    }
});

Vue.component('spell-effects', {
    props: ['id', 'spell', 'effect', 'spellrankindex', 'effectindex', 'iscustom'],
    name: 'spell-effects',
    data: function () {
        return {
            damagetype: 'not_detected',
            base_damage: 0,
            showRatiosDropdown: false,
            ratios: {},
            vars: null,
        }
    },
    computed: {
        damagetype_user: function () {
            switch (this.damagetype) {
                case 'no_damage':
                    return '<span class="true">no damage</span>';
                case 'not_detected':
                    return '<span class="mixed">unknown damage</span>';
                case 'physical':
                    return '<span class="ad">physical damage</span>';
                case 'magic':
                    return '<span class="ap">magic damage</span>';
                case 'true':
                    return '<span class="true">true damage</span>';
                default:
                    return '';
            }
        },
        dmg_onhit: function () {
            return this.calc_dmg_onhit(this.$root.player, this.$root.target);
        },
        dmg_premitigation: function () {
            return this.calc_dmg_premitigation(this.$root.player, this.$root.target);
        },
    },
    template: `<div class="container float-clear spell-effect" :id="id" @click="showRatiosDropdown = $event.target.matches('.dropbutton')">
  <form autocomplete="off" :id="id + '-form'" class="flex flex-row flex-wrap flex-top">
    <h4>{{ iscustom ? 'Custom' : '' }} Effect {{ (this.effectindex + 10).toString(36).toUpperCase() }}</h4>
    <input v-if="iscustom" name="remove_effect" class="inline float-right" type="button" value="Remove" @click="removeEffect()">
    <match-replace class="column effect-value" :text="effect" :spellrankindex="spellrankindex" v-model="vars"></match-replace>
    <div class="field column">
      <label :for="id + '-damagetype'">Damage Type</label>
      <select :id="id + '-damagetype'" v-model="damagetype" name="damage_type" class="input" oninput="styleSelect(this)">
        <option value="no_damage" class="mixed">No Damage</option>
        <option value="not_detected" class="mixed">Unknown Damage</option>
        <option value="physical" class="ad">Physical Damage</option>
        <option value="magic" class="ap">Magic Damage</option>
        <option value="true" class="true">True Damage</option>
      </select>
      
    <spell-field v-model="base_damage" type="base_damage"></spell-field>
    <spell-field v-for="(item, key, index) in ratios"
        :key="item.target  + '-' + item.key + '-ratio'"
        :type="item.target === 'target' ? 'target.' + item.key : item.key"
        v-model="item.value">
    </spell-field>
    <input class="inline dropbutton" type="button" value="Add Ratio+">
    <div :class="showRatiosDropdown ? '' : 'hidden'">
    <span v-if="ratios['player-ap'] === undefined" class="simple-link" @click="addRatio('ap')">AP Ratio</span>-
    <span v-if="ratios['player-total_ad'] === undefined" class="simple-link" @click="addRatio('total_ad')">AD Ratio</span>-
    <span v-if="ratios['player-bonus_ad'] === undefined" class="simple-link" @click="addRatio('bonus_ad')">Bonus AD Ratio</span>-
    <span v-if="ratios['player-total_hp'] === undefined" class="simple-link" @click="addRatio('total_hp')">Health Ratio</span>-
    <span v-if="ratios['player-bonus_hp'] === undefined" class="simple-link" @click="addRatio('bonus_hp')">Bonus Health Ratio</span>-
    <span v-if="ratios['player-missing_hp'] === undefined" class="simple-link" @click="addRatio('missing_hp')">Missing Health</span>-
    <span v-if="ratios['target-total_hp'] === undefined" class="simple-link" @click="addRatio('total_hp','target')"> Target's Max Health</span>-
    <span v-if="ratios['target-bonus_hp'] === undefined" class="simple-link" @click="addRatio('bonus_hp','target')"> Target's Bonus Health</span>-
    <span v-if="ratios['target-current_hp'] === undefined" class="simple-link" @click="addRatio('current_hp','target')"> Target's Current Health</span>-
    <span v-if="ratios['target-missing_hp'] === undefined" class="simple-link" @click="addRatio('missing_hp','target')"> Target's Missing Health</span>-
    <span v-if="ratios['player-bonus_armor'] === undefined" class="simple-link" @click="addRatio('bonus_armor')">Bonus Armor Ratio</span>-
    <span v-if="ratios['player-total_armor'] === undefined" class="simple-link" @click="addRatio('total_armor')">Armor Ratio</span>-
    <span v-if="ratios['player-bonus_mr'] === undefined" class="simple-link" @click="addRatio('bonus_mr')">Bonus MR Ratio</span>-
    <span v-if="ratios['player-total_mr'] === undefined" class="simple-link" @click="addRatio('total_mr')">MR Ratio</span>
    </div>
    </div>
    <div style="width: 100%;height: 1.4em;"></div>

    <p>This effect will deal {{Math.round(dmg_premitigation)}} <span v-html="damagetype_user"></span> before resistances.
    <br>This damage will cause the target to <span class="spelleffect">lose {{Math.round(dmg_onhit)}} health</span>.</p>
  </form>
</div>`,
    mounted: function () {
        this.$root.spellComponents.push(this);
        this.calcspell();
    },
    destroyed: function () {
        const self = this;
        this.$root.spellComponents = this.$root.spellComponents.filter(el => el !== self);
    },
    watch: {
        spell: {
            immediate: true,
            handler() {
                if (this.spell.damagetype.includes("agic")) {
                    this.damagetype = "magic";
                } else if (this.spell.damagetype.includes("hysical")) {
                    this.damagetype = "physical";
                } else if (this.spell.damagetype.includes("rue")) {
                    this.damagetype = "true";
                } else if (this.spell.damagetype.includes("no")) {
                    this.damagetype = "no_damage";
                } else {
                    this.damagetype = "not_detected";
                }
            }
        },
        vars: function (vars) {
            this.ratios = {};
            if ('base_damage' in vars) {
                this.base_damage = numeral(vars.base_damage[this.spellrankindex]).value();
            }
            if ('ratio_ad_1' in vars) {
                this.addRatio('total_ad', 'player',vars.ratio_ad_1 );
            }
            if ('ratio_ad_2' in vars) {
                this.addRatio('bonus_ad', 'player',vars.ratio_ad_2 );
            }
            if ('ratio_ap_1' in vars) {
                this.addRatio('ap', 'player',vars.ratio_ap_1 );
            }
            if ('ratio_ap_2' in vars) {
            }
        }
    },
    methods: {
        addRatio: function (ratio, target, value) {
            target = target || 'player'
            value = value || 0
            Vue.set(this.ratios, target + '-' + ratio, {
                target: target,
                key: ratio,
                value: value
            });
        },
        removeEffect: function () {
            if (this.iscustom)
                this.$parent.customEffects = this.$parent.customEffects.filter(i => i !== this.effectindex)
        },
        calc_dmg_premitigation: function (player, target) {
            let damage = this.base_damage;
            for (const r in this.ratios) {
                const ratio = this.ratios[r];
                if (ratio.target === 'target')
                    damage += target[ratio.key] || 0 * ratio.value;
                else
                    damage += player[ratio.key] || 0 * ratio.value;
            }
            return damage;
        },
        calc_dmg_onhit: function (p, t) {
            switch (this.damagetype) {
                case "physical":
                    return calcDamageWithRedection(this.dmg_premitigation, t.base_armor, t.bonus_armor,
                        p.flat_armor_reduction, p.percent_armor_reduction, p.percent_armorpen, p.percent_bonus_armorpen, p.flat_armorpen);
                case "magic":
                    return calcDamageWithRedection(this.dmg_premitigation, t.base_mr, t.bonus_mr,
                        p.flat_mr_reduction, p.percent_mr_reduction, p.percent_magicpen, 0, p.flat_magicpen);
                case "true":
                    return this.dmg_premitigation;
                default:
                    return 0;
            }
        },
        calcspell: function () {
            //TODO test if this works
            // tippy(`#${this.$el.id} [data-tippy-content]`, {
            //     animation: 'fade',
            //     duration: 50,
            //     delay: [0, 0],
            //     followCursor: true,
            // });

            // var inputs = this.$el.getElementsByClassName("input");
            // for (var i = 0; i < inputs.length; i++) {
            //     // inputs[i].addEventListener("input", recalc);
            //     inputs[i].addEventListener("focus", e => e.currentTarget.select());
            // }
        }
    }
});

const clampP = function (num) {
    return Math.max(0, Math.min(num, 1))
}
const calcDamageWithRedection = function (damage, base, bonus, flat_reduction, percent_reduction, percent_pen, percent_bonus_pen, flat_pen) {
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

Vue.component('spell-span', {
    props: ['list', 'spellrankindex'],
    template: `<span v-html="calchtml()"></span>`,
    methods: {
        calchtml: function () {
            let last = undefined;
            let final = [];
            for (let i = 0; i < this.list.length; i++) {
                if (i === this.spellrankindex) {
                    if (last === this.list[i]) {
                        final.pop();
                    }
                    final.push(`<span class="spelleffect">${this.list[i]}</span>`);
                }
                else if (last !== this.list[i]) {
                    final.push(this.list[i]);
                }
                last = this.list[i];
            }
            final = final.join(' / ');
            return matchReplaceSpellEffects(final, null, this.spellrankindex).str;
        }
    }
});

Vue.component('spell-notes', {
    props: ['spell', 'id'],
    data: function () {
        return {
            isopen: false
        }
    },
    template: `<div class="spell-notes float-clear">
    <input v-model="isopen" :id="'collapsible-'+id" class="hidden" type="checkbox">
    <label :for="'collapsible-'+id" class="lbl-toggle">More Info <span class="blue" style="user-select: none;">[{{ isopen ? 'Hide' : 'Show'}}]</span></label>
    <div class="collapsible-content" :style="calcheight">
        <match-replace :text="text"></match-replace>
    </div>
  </div>`,
    computed: {
        text: function () {
            return '<p>' + this.spell.notes.join('</p><p>') + '</p>';
        },
        calcheight: function () {
            const len = this.spell.notes.length;
            return this.isopen ? 'max-height: ' + ((len * 35) + 30) + 'px;' : 'max-height: 0px;'
        },
    }
});

Vue.component('champion-spells', {
    props: ['id', 'spellkey', 'spell', 'champion', 'spriteurl'],
    data: function () {
        return {
            spellrankindex: 0,
            customEffects: [],
            lastEffectIndex: 0,
        }
    },
    methods: {
        addEffect: function () {
            this.customEffects.push(this.lastEffectIndex++);
        },
        matchReplace: function (text) {
            return matchReplaceSpellEffects(text, null, this.spellrankindex).str
        },
    },
    template: `<div class="data_holder column">
    <img class="spell-image"
      :style="{ float: 'right', background: 'url('+spriteurl + ') -' + spell.image.x + 'px -' + spell.image.y + 'px'}"
      :width="spell.image.w" :height="spell.image.h">

    </img>
    <h2>{{ spell.name }} ({{ spellkey }})</h2>
    <form autocomplete="off" method="POST" action="#">
      <match-replace :text="'<p>' + spell.description.join('</p><p>') + '</p>'" :spellrankindex="spellrankindex"></match-replace>

      <div class="float-left" v-if="spell.maxrank > 0">
      Spell Rank ({{ spellrankindex + 1 }})
      <fieldset class="spellrank input" >
        <input v-model.number="spellrankindex" class="spellrank1" type="radio" name="spellrank" value="0" title="Rank 1">
        <input v-if="spell.maxrank > 1" v-model.number="spellrankindex" class="spellrank2" type="radio" name="spellrank" value="1" title="Rank 2">
        <input v-if="spell.maxrank > 2" v-model.number="spellrankindex" class="spellrank3" type="radio" name="spellrank" value="2" title="Rank 3">
        <input v-if="spell.maxrank > 3" v-model.number="spellrankindex" class="spellrank4" type="radio" name="spellrank" value="3" title="Rank 4">
        <input v-if="spell.maxrank > 4" v-model.number="spellrankindex" class="spellrank5" type="radio" name="spellrank" value="4" title="Rank 5">
        <input v-if="spell.maxrank > 5" v-model.number="spellrankindex" class="spellrank6" type="radio" name="spellrank" value="5" title="Rank 6">
      </fieldset>
      </div>
      
    <div class="float-right">
    <div v-if="spell.customlabel"><span v-html="matchReplace(spell.customlabel)"> </span>: <spell-span :list="[spell.custominfo]" :spellrankindex="0"></spell-span></div>
    <div v-if="spell.cooldown">Cooldown: <spell-span :list="spell.cooldown" :spellrankindex="spellrankindex"></spell-span> seconds</div>
    <div v-if="spell.cost">Cost: <spell-span :list="spell.cost" :spellrankindex="spellrankindex"></spell-span> <span v-html="matchReplace(spell.costtype)"></span></div>
    <div v-if="spell.target_range">Target Range: <spell-span :list="[spell.target_range]" :spellrankindex="0"></spell-span></div>
    <div v-if="spell.effect_range">Effect Range: <spell-span :list="[spell.effect_range]" :spellrankindex="0"></spell-span></div>
    <div v-if="spell.targeting">Targeting: <spell-span :list="[spell.targeting]" :spellrankindex="0"></spell-span></div>
    </div>
    
    <spell-effects
      v-for="(item, index) in spell.leveling" 
      :id="id + '-effect-' + index"
      :key="id + '-effect-' + index"
      :spell="spell"
      :effect="item"
      :effectindex="index"
      :spellrankindex="spellrankindex"
      :iscustom="false">
    </spell-effects>

    <spell-effects
      v-for="(item, index) in customEffects" 
      :id="id + '-custom-effect-' + item"
      :key="id + '-custom-effect-' + item"
      :spell="spell"
      effect=""
      :effectindex="item"
      :spellrankindex="spellrankindex"
      :iscustom="true">
    </spell-effects>
    
    <input class="right" name="add_effect" type="button" value="Add Effect +" @click="addEffect()"></input>
    
    <spell-notes :spell="spell" :id="id"></spell-notes>

    </form>
  </div>
  `
})

/// Called when the spell rank radio has changed.
export function onSpellRankInput(_form, _create = false) {
    return;
}

Vue.component('match-replace', {
    props: ['spellrankindex', 'text', 'value'],
    data: function () {
        return {
            templateRender: null,
        }
    },
    computed: {
        template: function () {
            const text = this.text || this.$slots.default || '';
            const replaced = matchReplaceSpellEffects(text.toString(), null, this.spellrankindex || 0);
            this.$emit('input', replaced.vars);
            return `<div>${replaced.str}</div>`;
        },
    },
    watch: {
        // Every time the template prop changes, I recompile it to update the DOM
        template: {
            immediate: true, // makes the watcher fire on first render, too.
            handler() {
                var res = Vue.compile(this.template);

                this.templateRender = res.render;

                // staticRenderFns belong into $options, 
                // appearantly
                this.$options.staticRenderFns = []

                // clean the cache of static elements
                // this is a cache with the results from the staticRenderFns
                this._staticTrees = []

                // Fill it with the new staticRenderFns
                for (var i in res.staticRenderFns) {
                    //staticRenderFns.push(res.staticRenderFns[i]);
                    this.$options.staticRenderFns.push(res.staticRenderFns[i])
                }
            }
        }
    },
    render(h) {
        if (!this.templateRender) {
            return h('div', 'loading...');
        } else { // If there is a template, I'll show it
            return this.templateRender();
        }
    },
})

function define_keyword(word) {
    if (word === 'stun')
        return '<b>Stun</b>'
    else
        return `<b>${word}</b>`
}

function matchReplaceSpellEffects(string, _null, spellrankindex) {
    let retvalues = {}
    string = string.replace(/<!--\n-->/g, '<br>');
    string = string.replace(/\n/g, '<br>');
    for (let i = 0; i < 15; i++) {
        if (string.includes('{{'))
            string = string.replace(/{{([^{}]*)}}/g, function (match, capture) {
                // console.log('match:', match)
                const parms = capture.split('|');
                if (parms[0] in match_lookup) {
                    const inner_fn = match_lookup[parms[0]];
                    try {
                        return inner_fn(capture, parms.slice(1), spellrankindex, retvalues);
                    } catch (e) {
                        console.log(`Error for spell effect '${match}'`);
                        console.log(e);
                        capture = capture.replace(/\|/g, ' ')
                        return `<span class='tooltip red'>${capture}<span class='tooltip-float'>Error for '${capture}'</span></span>`;
                    }
                } else {
                    console.log(`Unknown spell effect '${match}'`);
                    capture = capture.replace(/\|/g, ' ')
                    return `<span class='tooltip capture-unknown'>${capture}<span class='tooltip-float'>Unknown value for '${capture}'</span></span>`;
                }
            });
        else
            break;
    }
    string = string.replace(/'''(.*?)'''+/g, '<b class="chamption-name">$1</b>');
    string = string.replace(/''(.*?)''+/g, '<i class="chamption-name">$1</i>');
    string = string.replace(/\[\[([^\[]*?)\|([^\[]*?)\]\]+/g, '<a class="effect link" title="$1">$2</a>');
    string = string.replace(/\[\[([^\[]*?)\]\]+/g, '<a class="effect link" title="$1">$1</a>');

    return {
        str: string,
        vars: retvalues
    };
}
function numberExpand(numberToNnumber, forceRange) {
    return numberToNnumber.replace(/([\d./*\-+]+) to ([\d./*\-+]+)( [\d./*\-+]+)?/g, (_match, start, end, len) => {
        let range = forceRange || Number(len) || 5;
        start = parseFloat(eval(start));
        end = parseFloat(eval(end));
        if (range === 3) {
            const diff = (end - start) / 2;
            return `${start}/${start + diff}/${end}`;
        }
        const diff = (end - start) / 4;
        return `${start}/${start + diff * 1}/${start + diff * 2}/${start + diff * 3}/${end}`;
    });
}

const match_lookup = {
    // ci (or Champion icon): {{ci|<Champion>|<Custom name>}}
    'ci': function (_capture, parms, _spellrankindex, _retvalues) {
        if (parms.length === 2)
            return `<span class="chamption-name" data-champkey="${parms[0]}">${parms[1]}</span>`;
        return `<span class="chamption-name" data-champkey="${parms[0]}">${parms[0]}</span>`;
    },
    // cis (or Champion icon with possessive apostrophes): {{cis|<Champion>}}
    'cis': function (_capture, parms, _spellrankindex, _retvalues) {
        return `<span class="chamption-name" data-champkey="${parms[0]}">${parms[0]}'s</span>`;
    },

    // cai (or Champion's ability icon): {{cai|<Ability>|<Champion>|<Custom ability name>}}
    'cai': function (_capture, slices, _spellrankindex, _retvalues) {
        let abilty = slices[0];
        let champ = slices[1];
        let display = slices[0];
        if (slices.length == 3)
            display = slices[2];
        return `<span class="champion-ability" data-champkey="${champ}" data-ability="${abilty}">${champ}'s ${display}</span>`;
    },
    // csl (or Champion skin link icon): {{csl|<Champion>|<Skin>}}

    // ai (or Ability icon): {{ai|<Ability>|<Champion>|<Custom ability name>}}
    'ai': function (_capture, slices, _spellrankindex, _retvalues) {
        let abilty = slices[0];
        let champ = slices[1];
        let display = slices[0];
        if (slices.length == 3)
            display = slices[2];
        return `<span class="champion-ability" data-champkey="${champ}" data-ability="${abilty}">${display}</span>`;
    },
    // ais (or Ability icon with possessive apostrophes): {{ais|<Ability>|<Champion>}}
    'ais': function (_capture, slices, _spellrankindex, _retvalues) {
        let abilty = slices[0];
        let champ = slices[1];
        return `<span class="champion-ability" data-champkey="${champ}" data-ability="${abilty}">${abilty}'s</span>`;
    },

    // bi (or Buff icon): {{bi|<Buff>|<Custom name>}}
    'bi': function (_capture, slices, _spellrankindex, _retvalues) {
        return `<span class="title-tooltip blue" title="The Buff '${slices[0]}'">${slices[1] || slices[0]}</span>`;
    },

    // ii (or Item icon): {{ii|<Item>|<Custom name>}}
    'ii': function (_capture, slices, _spellrankindex, _retvalues) {
        return `<span class="title-tooltip blue" title="The item '${slices[0]}'">${slices[1] || slices[0]}</span>`;
    },

    // iis (or Item icon with possessive apostrophes): {{iis|<Item>}}

    // mi6 (or Mastery icon Season 2016): {{mi6|<Mastery>|<Custom name>}}

    // mi7 (or Mastery icon Season 2017): {{mi7|<Mastery>|<Custom name>}}

    // ri (or Rune icon): {{ri|<Rune>|<Custom name

    // si (or Spell icon): {{si|<Spell>|<Custom name>}}

    'si': function (_capture, slices, _spellrankindex, _retvalues) {
        return `<span class="title-tooltip" title="${slices[0]}" data-spellkey="${slices[0]}">${slices[1] || slices[0]}</span>`;
    },

    // sis (or Spell icon with possessive apostrophes): {{sis|<Spell>}}
    'sis': function (_capture, slices, _spellrankindex, _retvalues) {
        return `<span class="title-tooltip" title="${slices[0]}" data-spellkey="${slices[0]}">${slices[1] || slices[0]}'s</span>`;
    },

    // sti (or Stat icon): {{sti|<stat>|<Custom name>}}
    'sti': function (_capture, slices, _spellrankindex, _retvalues) {
        let stat = slices[0].replace(' ', '-');
        let statName = slices[0];
        let name = slices.slice(1).join('|') || stat;
        // return `<span><i title=${statName} class="icon i-${stat}"></i>${name}</span>`;
        return `<span>${name}</span>`;
    },

    // tip (or Tip icon): {{tip|<effect>|<Custom name>}}
    'tip': function (_capture, slices, _spellrankindex, _retvalues) {
        let effect = slices[0];
        let name = slices.slice(1).join('|') || effect;
        // return `<span data-tippy-content="${define_keyword(effect)}" class="blue"><i class="icon i-${effect}"></i>${name}</span>`;
        return `<span data-tippy-content="${define_keyword(effect)}" class="blue">${name}</span>`;
    },

    // ui (or Unit icon): {{ui|<Unit>|<Custom name>}}

    'ui': function (_capture, slices, _spellrankindex, _retvalues) {
        return `<span class="title-tooltip blue" title="The Unit '${slices[0]}'">${slices[1] || slices[0]}</span>`;
    },

    // uis (or Unit icon with possessive apostrophes): {{uis|<Unit>}}
    'uis': function (_capture, slices, _spellrankindex, _retvalues) {
        return `<span class="title-tooltip blue" title="The Unit '${slices[0]}'">${slices[1] || slices[0]}'s</span>`;
    },


    // tt (or Text tooltip): {{tt|<Text>|<Tooltip>}}
    'tt': function (_capture, slices, _spellrankindex, _retvalues) {
        return `<span class="title-tooltip" title="${slices[1]}">${slices[0]}</span>`;
    },

    //pp (or Passive progression): 
    //  {{pp|<Size>|<Value1>|<Value2>|<...>|<ValueN>|<Level1>|<Level2>|<...>|<LevelN>}}
    // or {{pp|Size|type=X|Value1|...|ValueN|Level1|...|LevelN}} 
    // or {{pp|Size|formula=X|Value1|...|ValueN|Level1|...|LevelN}} 
    // or {{pp|Size|color=X|Value1|...|ValueN|Level1|...|LevelN}}
    'pp': function (capture, _parms, _spellrankindex, _retvalues) {
        const slices = capture.slice(3).split('|');
        console.log('Match pp=', capture, '==>', slices);
        if (slices.length === 1) {
            let inner = numberExpand(slices[0]);
            console.log('Match pp=result=', inner);
            return inner;
        }
        else if (slices.length === 4) {
            let range = Number(slices[0]);
            let setting = slices[1];
            let top = numberExpand(slices[2], range);
            let bot = numberExpand(slices[3], range);
            console.log('Match pp=result=', top, bot, 'setting', setting);
            return `<span class="title-tooltip" title="At levels ${bot}">${top} </span>`;
        } else {
            let range = Number(slices[0]);
            return `<span class="title-tooltip" title="${slices.slice(1, range + 1).join(' / ')}">${slices[1]} ‒ ${slices[range]}</span>`;
        }
    },

    // ap (or Ability progression): {{ap|<Value1>|<Value2>|<...>|<Value6>}}
    'ap': function (capture, _parms, spellrankindex, retvalues) {
        var inner = capture.substring(3);
        inner = inner.replace(/([\d./*\-+]+) to ([\d./*\-+]+)( [\d./*\-+]+)?/g, (_match, start, end, len) => {
            start = parseFloat(eval(start));
            end = parseFloat(eval(end));
            if (Number(len) === 3) {
                const diff = (end - start) / 2;
                return `${start}|${start + diff}|${end}`;
            }
            const diff = (end - start) / 4;
            return `${start}|${start + diff * 1}|${start + diff * 2}|${start + diff * 3}|${end}`;

        });
        const list = inner.split('|');

        if (!retvalues.base_damage)
            retvalues.base_damage = list;

        return `<spell-span :list="[${list}]" :spellrankindex="${spellrankindex}"></spell-span>`;
    },
    // as (or Ability scaling): {{as|<(+ X% stat)>}} or {{as|<(+ X% stat)>|<stat>}}
    'as': function (capture, _parms, _spellrankindex, retvalues) {
        const slices = capture.slice(3).split('|');
        // console.log('as Ability scaling =', capture, slices);

        const inner = slices[0];
        const stat = slices.length == 2 ? slices[1] : undefined;
        const inner_lo = inner.toLowerCase();

        let cssClass = stat || list_of_colors.find(c => {
            return inner_lo.includes(c)
        }) || 'ad';
        cssClass = cssClass.replace(' ', '-');

        if (inner.includes('AP')) {
            if (!retvalues.ratio_ap_1)
                retvalues.ratio_ap_1 = numeral(inner.replace(/\(/g, '')).value();
            if (!retvalues.ratio_ap_2)
                retvalues.ratio_ap_2 = numeral(inner.replace(/\(/g, '')).value();
        } else if (inner.includes('AD')) {
            if (inner.includes('bonus')) {
                if (!retvalues.ratio_ad_2)
                    retvalues.ratio_ad_2 = numeral(inner.replace(/\(/g, '')).value();
            } else if (!retvalues.ratio_ad_1)
                retvalues.ratio_ad_1 = numeral(inner.replace(/\(/g, '')).value();
        }
        return `<span class="${cssClass}">${inner}</span>`;
    },
    // sbc (or Small bold capitals): {{sbc|<Text>}}
    'sbc': function (capture, _parms, _spellrankindex, _retvalues) {
        return `<span style="font-weight:bold; font-size:89%; text-transform:uppercase;">${capture.slice(4)}</span>`;
    },

    //pp18 (or Passive progression from level 1 to 18): {{pp18|<Val1>|<Val2>|<...>|<Val17>|<Val18>}}​​​​​​​

    //ft (or Flip text): {{ft|<Element 1>|<Element 2>}}
    'ft': function (capture, slices, _spellrankindex, _retvalues) {
        return `<span>${slices[0]} (${slices[1]})</span>`;
    },

    'g': function (_capture, slices, _spellrankindex, _retvalues) {
        return `<span class="gold"> <img src="/images/Gold.png">${slices[0]}</span>`;
    },

    // format number
    'fd': function (capture, _parms, _spellrankindex, _retvalues) {
        return `<span style="font-variant-numeric: tabular-nums;">${capture.slice(3)}</span>`;
    },

    'st': function (_capture, slices, _spellrankindex, _retvalues) {
        let rets = []
        for (let i = 0; i < slices.length; i += 2) {
            rets.push(`<span class="blue">${slices[i]}</span>: <span>${slices[i + 1]}</span>`);
        }
        return rets.join('<br>');
    },
    // MATH OPERATORS:
    'plus': function (_capture, _parms, _spellrankindex, _retvalues) {
        return '+';
    },
    'minus': function (_capture, _parms, _spellrankindex, _retvalues) {
        return '−';
    },
    'plusminus': function (_capture, _parms, _spellrankindex, _retvalues) {
        return '±';
    },
    'divided by': function (_capture, _parms, _spellrankindex, _retvalues) {
        return '÷';
    },
    'times': function (_capture, _parms, _spellrankindex, _retvalues) {
        return '×';
    },
    'equals': function (_capture, _parms, _spellrankindex, _retvalues) {
        return '=';
    },
    'degree': function (_capture, _parms, _spellrankindex, _retvalues) {
        return '°';
    },
};