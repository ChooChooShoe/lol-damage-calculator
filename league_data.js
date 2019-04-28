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
    data: function () {
        return {
            fieldvals: fieldvals,
        }
    },
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

const fieldvals = [
    ['dmg_premitigation', 'Pre-Mitigation Damage', '', ''],
    ['dmg_onhit', 'After Resistances', '', ''],
    ['base_damage', 'Base Damage', 'spelleffect', ''],
    ['ap_ratio', '', 'ap', 'AP'],
    ['total_ad_ratio', '', 'ad', 'AD'],
    ['bonus_ad_ratio', '', 'ad', 'Bonus AD']
];

Vue.component('spell-field', {
    //id, label_text, classColor, removeable=true, editable=true, fullsize=false
    props: ['fieldtype', 'value'],
    data: function () {
        return {
            fieldvals: fieldvals,
        }
    },
    computed: {
        displayValue: function () {
            return this.encode(this.value);
        },
        ispercent: function () {
            return this.fieldtype > 2;
        },
    },
    methods: {
        rnd: function (val) {
            return +(Math.round(val + "e+6") + "e-6");
        },
        rnd2: function (val) {
            const x = +(Math.round(val + "e+6") + "e-6");
            return x < 0 ? x : '+' + x;
        },
        encode(val) {
            if (this.fieldtype > 2)
                return +(Math.round(val + "e+12") + "e-10");;
            return val;
        },
        decode(val) {
            if (this.fieldtype > 2)
                return parseFloat(val) / 100 || 0;
            return parseFloat(val);
        },
    },
    template: `<div class="flex flex-row">
  <span>{{ fieldvals[fieldtype][1] }} 
  <span :class="fieldvals[fieldtype][2]" v-if="ispercent">{{ rnd2(displayValue) + '%' }} {{fieldvals[fieldtype][3]}}
  </span>
  <span :class="fieldvals[fieldtype][2]" v-if="fieldtype === 2">
  {{ rnd(displayValue) }} {{fieldvals[fieldtype][3]}}
  </span>
  </span>
  <input class="input block numinput" type="number" step="1" title=""
   :name="fieldvals[fieldtype][0]" :value="encode(value)" v-on:input="$emit('input', decode($event.target.value))">
  <span class="inline">{{ ispercent ? '%' : '' }}</span>
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
    props: ['id', 'spell', 'effect', 'spellrankindex', 'effectindex', 'custom'],
    name: 'spell-effects',
    data: function () {
        return {
            damagetype: 'not_detected',
            base_damage: 0,
            ap_ratio: 0,
            total_ad_ratio: 0,
            bonus_ad_ratio: 0,
        }
    },
    computed: {
        iscustom: function() {
            return this.custom === "true";
        },
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
            return this.calc_dmg_onhit();
        },
        dmg_premitigation: function () {
            return this.calc_dmg_premitigation();
        },
    },
    template: `<div class="container float-clear spell-effect" :id="id">
  <form autocomplete="off" :id="id + '-form'" class="flex flex-row flex-wrap flex-top">
    <output name="effect_name" class="inline" style="font-size: 2.2rem;line-height: 1.35"> {{ iscustom ? 'Custom' : '' }} Effect {{ effectindex + 1}}</output>
    <input v-if="iscustom" name="remove_effect" class="inline float-right" type="button" value="Remove" onclick="remSpellEffect(this)" @click="removeEffect()">
    <output id="effect_value" class="column"></output>
    <div class="field inline">
      <label :for="id + '-damagetype'">Damage Type</label>
      <select :id="id + '-damagetype'" v-model="damagetype" name="damage_type" class="input" oninput="styleSelect(this)">
        <option value="no_damage" class="mixed">No Damage</option>
        <option value="not_detected" class="mixed">Unknown Damage</option>
        <option value="physical" class="ad">Physical Damage</option>
        <option value="magic" class="ap">Magic Damage</option>
        <option value="true" class="true">True Damage</option>
        <!-- <option value="mixed" class="mixed">Mixed Damage</option> -->
      </select>
      <spell-field :fieldtype="2" v-model="base_damage"></spell-field>
      <spell-field :fieldtype="3" v-model="ap_ratio"></spell-field>
      <spell-field :fieldtype="4" v-model="total_ad_ratio"></spell-field>
      <spell-field :fieldtype="5" v-model="bonus_ad_ratio"></spell-field>
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
        'spell': function () {
            this.calcspell();
        },
        'spellrankindex': function () {
            this.calcspell();
        },
    },
    methods: {
        removeEffect: function() {
            if (this.iscustom)
                this.$parent.customEffects = this.$parent.customEffects.filter(i => i !== this.effectindex)
        },
        calc_dmg_premitigation: function (player, _target) {
            const p = player || this.$root.player;
            return (this.base_damage + (p.ap * this.ap_ratio) + (p.total_ad * this.total_ad_ratio) + (p.bonus_ad * this.bonus_ad_ratio));
        },
        calc_dmg_onhit: function (player, target) {
            const p = player || this.$root.player;
            const t = target || this.$root.target;
            switch (this.damagetype) {
                case "physical":
                    const eff_armor = t.base_armor * (1.0 - p.precent_armorpen / 100) - p.flat_armorpen;
                    if (eff_armor > 0)
                        return this.dmg_premitigation * (100 / (100 + eff_armor));
                    else
                        return 2 - (100 / (100 - eff_armor));
                case "magic":
                    const percent_magicpen = p.percent_magicpen / 100 || p.hasVoidStaff ? 0.4 : 0.0;
                    const eff_mr = t.base_mr * (1.0 - percent_magicpen) - p.flat_magicpen;
                    if (eff_mr > 0)
                        return this.dmg_premitigation * (100 / (100 + eff_mr));
                    else
                        return 2 - (100 / (100 - eff_mr));
                case "true":
                    return this.dmg_premitigation;
                default:
                    return 0;
            }
        },
        calcspell: function () {
            //TODO test if this works
            tippy(`#${this.$el.id} [data-tippy-content]`, {
                animation: 'fade',
                duration: 50,
                delay: [0, 0],
                followCursor: true,
            });

            const leveling = matchReplaceSpellEffects(this.effect, null, this.spellrankindex);
            var cloned = this.$el;

            var inner_form = cloned.getElementsByTagName("form")[0];

            // inner_form.effect_name.value = `Effect ${(this.effectindex + 10).toString(36).toUpperCase()}: `;
            // inner_form.removeChild(inner_form.effect_name);
            // inner_form.removeChild(inner_form.remove_effect);
            if(!this.iscustom)
                inner_form.effect_value.innerHTML = leveling.str;

            if (leveling.vars.base_damage) {
                this.base_damage = numeral(leveling.vars.base_damage[this.spellrankindex]).value()
            }
            if (leveling.vars.ratio_ap_1) {
                this.ap_ratio = leveling.vars.ratio_ap_1;
            }
            // if (leveling.vars.ratio_ap_2) {
            //   this.ap_ratio = leveling.vars.ratio_ap_2;
            // }
            if (leveling.vars.ratio_ad_1) {
                this.total_ad_ratio = leveling.vars.ratio_ad_1;
            }
            if (leveling.vars.ratio_ad_2) {
                this.bonus_ad_ratio = leveling.vars.ratio_ad_2;
            }

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

            var inputs = cloned.getElementsByClassName("input");
            for (var i = 0; i < inputs.length; i++) {
                // inputs[i].addEventListener("input", recalc);
                inputs[i].addEventListener("focus", e => e.currentTarget.select());
            }
        }
    }
});

Vue.component('spell-span', {
    props: ['list', 'spellrankindex'],
    template: `<span v-html="calchtml()"></span>`,
    methods: {
        calchtml: function () {
            let last = undefined;
            let final = [];
            for(let i = 0; i < this.list.length; i++){
                if(i === this.spellrankindex) {
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
            return final.join(' / ');
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
    <div class="collapsible-content" v-html="calchtml()" :style="calcheight()"></div>
  </div>`,
    methods: {
        calchtml: function () {
            const notesHtml = '<p>' + this.spell.notes.join('</p><p>') + '</p>';
            let ret = matchReplaceSpellEffects(notesHtml, null, 0);
            return ret.str;
        },
        calcheight: function () {
            console.log(this);

            return this.isopen ? 'max-height: ' + ((this.spell.notes.length * 35) + 30) + 'px;' : 'max-height: 0px;'
        }
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
        }
    },
    template: `<div class="data_holder column">
    <img class="spell-image"
      :style="{ float: 'right', background: 'url('+spriteurl + ') -' + spell.image.x + 'px -' + spell.image.y + 'px'}"
      :width="spell.image.w" :height="spell.image.h">

    </img>
    <h2>{{ spell.name }} ({{ spellkey }})</h2>
    <form autocomplete="off" method="POST" action="#">
      <spell-tooltip :spell="spell" :spellrankindex="spellrankindex"></spell-tooltip>

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
    <div v-if="spell.cooldown">Cooldown: <spell-span :list="spell.cooldown" :spellrankindex="spellrankindex"></spell-span> seconds</div>
    <div v-if="spell.cost">Cost: <spell-span :list="spell.cost" :spellrankindex="spellrankindex"></spell-span> {{spell.costtype}}</div>
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
      :spellrankindex="spellrankindex">
    </spell-effects>

    <spell-effects
      v-for="(item, index) in customEffects" 
      :id="id + '-custom-effect-' + item"
      :key="id + '-custom-effect-' + item"
      :spell="spell"
      effect=""
      :effectindex="item"
      :spellrankindex="spellrankindex"
      custom="true">
    </spell-effects>
    
    <input class="right" name="add_effect" type="button" value="Add Effect +" @click="addEffect()"></input>
    
    <spell-notes :spell="spell" :id="id"></spell-notes>

    </form>
  </div>
  `,
    other: `
  this.form = el(form#$ {id}_form, {
    
  },
    this.tooltip = el('div.spell-tooltip'),
    this.effect_list = el('div.spell_data_effect_list'),
    this.custom_effect_list = el('div.spell_data_custom_effect_list'),
    el('div',
      // el('input', {
      //   name: 'reset',
      //   type: 'reset',
      //   value: 'Zero Above'
      // }),
      // el('input', {
      //   name: 'expand',
      //   type: 'button',
      //   value: 'Expand'
      // }),
      // el('input.hidden', {
      //   name: 'reset',
      //   type: 'button',
      //   value: 'Collapse'
      // }),
      this.adeffect = el('input.right', {
        name: 'add_effect',
        type: 'button',
        value: 'Add Effect +'
      })
    ),
  )
);`
})

export class SpellEffect {
    constructor(id, champion, spell, key, spriteUrl) {
        this.spell = spell;
        const is_passive = this.spell.skill === 'I';
        this.e
        this.form.defaultTooltipHtml = '<p>' + spell.description.join('</p><p>') + '</p>';
        var inputs = this.el.getElementsByClassName("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", recalc);
            inputs[i].addEventListener("focus", e => e.currentTarget.select());
        }
        if (!is_passive) {
            for (let x of this.form.spellrank) {
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
        //   form['cooldown' + i].setAttribute('data-active', idx == i);
        //   form['cost' + i].setAttribute('data-active', idx == i);

        // }

    }
}
/// Called when the spell rank radio has changed.
export function onSpellRankInput(form, create = false) {
    return;
    //for riot's data
    // var eff_index = 0;

    // tooltip.replace(/deal(.*?)damage/g, function (match, capture) {
    //   console.log('deal damage',match);
    //   var cloned = document.getElementById('spell_data_effect_template').cloneNode(true);

    //   // cloned.classList.add(`owner-${form.spellDao}`);
    //   cloned.id = `spell_data_effect_${form.spellDao.id}_${eff_index}`

    //   var inner_form = cloned.getElementsByTagName("form")[0];
    //   inner_form.id = `spell_data_effect_${form.spellDao.id}_${eff_index}_form`

    //   inner_form.effect_name.value = `Effect ${(eff_index + 10).toString(36).toUpperCase()}: `;

    //   inner_form.effect_value.innerHTML = '"' + form.spell.leveling[eff_index] + '"';

    //   //data-base="${exact}"
    //   var base = match.match(/data-base=\"(\S+)\"/);
    //   if (base) {
    //     inner_form.base_damage.value = base[1];
    //   }

    //   /// takes values from data-ratio to add default ratios. 
    //   var ratios = match.match(/data-ratio=\"(\w+) ([\d.]+)\"/);
    //   if (ratios) {
    //     for (var i = 0; i < ratios.length; i += 3) {
    //       try {
    //         if (ratios[i + 1] === 'special') {
    //           var special = /data-ratio-special=\"(\S+)\"/.exec(match);
    //           if (special)
    //             console.log('Creating special ratio = ' + special[1]);
    //         } else {
    //           inner_form[ratios[i + 1]].value = ratios[i + 2];
    //         }
    //       } catch (e) {
    //         console.log('Unknown ratio ' + ratios);
    //       }
    //     }
    //   }

    //   if (match.includes("magic")) {
    //     // form.ap_ratio.value = rnd3p(e.coeff);
    //     inner_form.damage_type.selectedIndex = 3;
    //   } else if (match.includes("physical")) {
    //     // form.ap_ratio.value = rnd3p(e.coeff);
    //     inner_form.damage_type.selectedIndex = 2;
    //   } else {
    //     console.log('Could not detect damage')
    //     inner_form.damage_type.selectedIndex = 1;
    //   }

    //   var inputs = cloned.getElementsByClassName("input");
    //   for (var i = 0; i < inputs.length; i++) {
    //     inputs[i].addEventListener("input", recalc);
    //   }
    //   add_to_node.appendChild(cloned);

    //   eff_index = eff_index + 1;
    // });

    // console.log(form['tooltip']);

}

function define_keyword(word) {
    if (word === 'stun')
        return '<b>Stun</b>'
    else
        return `<b>${word}</b>`
}

function matchReplaceSpellEffects(string, form, spellrankindex) {
    let retvalues = {}
    string = string.replace(/<!--\n-->/g, '<br/>');
    string = string.replace(/\n/g, '<br/>');
    for (let i = 0; i < 15; i++) {
        if (string.includes('{{'))
            string = string.replace(/{{([^{}]*)}}/g, matchInner(form, spellrankindex, retvalues));
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

function matchInner(form, spellrankindex, retvalues) {
    return function (match, capture) {
        // console.log('match:', match)
        capture = capture.trim()
        try {
            const effext_index = parseInt(capture[1]);

            // ci (or Champion icon): {{ci|<Champion>|<Custom name>}}
            if (capture.startsWith('ci|')) {
                const slices = capture.slice(3).split('|')
                if (slices.length == 2)
                    return `<span class="chamption-name" data-champkey="${slices[0]}">${slices[1]}</span>`;
                return `<span class="chamption-name" data-champkey="${slices[0]}">${slices[0]}</span>`;
            }
            // cis (or Champion icon with possessive apostrophes): {{cis|<Champion>}}
            if (capture.startsWith('cis|')) {
                const slices = capture.slice(4).split('|')
                return `<span class="chamption-name" data-champkey="${slices[0]}">${slices[0]}'s</span>`;
            }

            // cai (or Champion's ability icon): {{cai|<Ability>|<Champion>|<Custom ability name>}}
            if (capture.startsWith('cai|')) {
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
            if (capture.startsWith('ai|')) {
                const slices = capture.slice(3).split('|');
                let abilty = slices[0];
                let champ = slices[1];
                let display = slices[0];
                if (slices.length == 3)
                    display = slices[2];
                return `<span class="champion-ability" data-champkey="${champ}" data-ability="${abilty}">${display}</span>`;
            }
            // ais (or Ability icon with possessive apostrophes): {{ais|<Ability>|<Champion>}}
            if (capture.startsWith('ais|')) {
                const slices = capture.slice(4).split('|');
                let abilty = slices[0];
                let champ = slices[1];
                return `<span class="champion-ability" data-champkey="${champ}" data-ability="${abilty}">${abilty}'s</span>`;
            }

            // bi (or Buff icon): {{bi|<Buff>|<Custom name>}}

            // ii (or Item icon): {{ii|<Item>|<Custom name>}}
            if (capture.startsWith('ii|')) {
                const slices = capture.slice(3).split('|');
                return `<span class="title-tooltip blue" title="The iem '${slices[0]}'">${slices[0]}</span>`;
            }

            // iis (or Item icon with possessive apostrophes): {{iis|<Item>}}

            // mi6 (or Mastery icon Season 2016): {{mi6|<Mastery>|<Custom name>}}

            // mi7 (or Mastery icon Season 2017): {{mi7|<Mastery>|<Custom name>}}

            // ri (or Rune icon): {{ri|<Rune>|<Custom name

            // si (or Spell icon): {{si|<Spell>|<Custom name>}}

            if (capture.startsWith('si|')) {
                const slices = capture.slice(3).split('|')
                return `<span class="title-tooltip" title="${slices[0]}" data-spellkey="${slices[0]}">${slices[1]}</span>`;
            }

            // sis (or Spell icon with possessive apostrophes): {{sis|<Spell>}}

            // sti (or Stat icon): {{sti|<stat>|<Custom name>}}
            if (capture.startsWith('sti|')) {
                const slices = capture.slice(4).split('|');
                let stat = slices[0].replace(' ', '-');
                let statName = slices[0];
                let name = slices.slice(1).join('|') || stat;
                // return `<span><i title=${statName} class="icon i-${stat}"></i>${name}</span>`;
                return `<span>${name}</span>`;
            }

            // tip (or Tip icon): {{tip|<effect>|<Custom name>}}
            if (capture.startsWith('tip|')) {
                const slices = capture.slice(4).split('|');
                let effect = slices[0];
                let name = slices.slice(1).join('|') || effect;
                // return `<span data-tippy-content="${define_keyword(effect)}" class="blue"><i class="icon i-${effect}"></i>${name}</span>`;
                return `<span data-tippy-content="${define_keyword(effect)}" class="blue">${name}</span>`;
            }

            // ui (or Unit icon): {{ui|<Unit>|<Custom name>}}
            // uis (or Unit icon with possessive apostrophes): {{uis|<Unit>}}


            // tt (or Text tooltip): {{tt|<Text>|<Tooltip>}}
            if (capture.startsWith('tt|')) {
                const slices = capture.slice(3).split('|');
                return `<span class="title-tooltip" title="${slices[1]}">${slices[0]}</span>`;
            }

            //pp (or Passive progression): 
            //  {{pp|<Size>|<Value1>|<Value2>|<...>|<ValueN>|<Level1>|<Level2>|<...>|<LevelN>}}
            // or {{pp|Size|type=X|Value1|...|ValueN|Level1|...|LevelN}} 
            // or {{pp|Size|formula=X|Value1|...|ValueN|Level1|...|LevelN}} 
            // or {{pp|Size|color=X|Value1|...|ValueN|Level1|...|LevelN}}

            // ap (or Ability progression): {{ap|<Value1>|<Value2>|<...>|<Value6>}}
            if (capture.startsWith('pp|') || capture.startsWith('ap|')) {
                var inner = capture.substring(3);
                inner = inner.replace(/([\d./*\-+]+) to ([\d./*\-+]+)( [\d./*\-+]+)?/g, (match, start, end, len) => {
                    start = parseFloat(eval(start));
                    end = parseFloat(eval(end));
                    if (Number(len) === 3) {
                        const diff = (end - start) / 2;
                        return `${start}/${start + diff}/${end}`;
                    }
                    const diff = (end - start) / 4;
                    return `${start}/${start + diff * 1}/${start + diff * 2}/${start + diff * 3}/${end}`;

                });
                inner = inner.replace(/[| ]/g, '/');

                if (!retvalues.base_damage)
                    retvalues.base_damage = inner.split('/');
                return `<span style="font-family: 'DejaVu Sans Mono', 'Lucida Console', monospace;">${inner}</span>`;
            }
            // as (or Ability scaling): {{as|<(+ X% stat)>}} or {{as|<(+ X% stat)>|<stat>}}
            if (capture.startsWith('as|')) {
                console.log('as Ability scaling =', capture);

                var inner = capture.slice(3);
                const inner_lo = inner.toLowerCase();

                let cssClass = list_of_colors.find(c => {
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
            }
            // sbc (or Small bold capitals): {{sbc|<Text>}}
            if (capture.startsWith('sbc|')) {
                return `<span style="font-weight:bold; font-size:89%; text-transform:uppercase;">${capture.slice(4)}</span>`;
            }

            //pp18 (or Passive progression from level 1 to 18): {{pp18|<Val1>|<Val2>|<...>|<Val17>|<Val18>}}​​​​​​​

            //ft (or Flip text): {{ft|<Element 1>|<Element 2>}}

            if (capture.startsWith('g|')) {
                const slices = capture.slice(2).split('|');
                return `<span class="gold"> <img src="/images/Gold.png">${slices[0]}</span>`;
            }

            // format number
            if (capture.startsWith('fd|')) {
                return `<span style="font-variant-numeric: tabular-nums;">${capture.slice(3)}</span>`;
            }

            if (capture.startsWith('st|')) {
                const slices = capture.slice(3).split('|')
                let rets = []
                for (let i = 0; i < slices.length; i += 2) {
                    rets.push(`<a>${slices[i]}</a>: <span>${slices[i + 1]}</span>`);
                }
                return rets.join('<br/>');
            }
            // MATH OPERATORS:
            if (capture == 'plus')
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
            // if (capture === 'cost') {
            //   var exact = form.spellDao['cost'][spellrankindex].toString();
            //   return form.spellDao['costBurn'].replace(exact, `<span class="spelleffect active" >${exact}</span>`);
            // } else if (capture === 'abilityresourcename')
            //   return form.abilityresourcename;
            // else if (capture[0] === 'e') {
            //   var burn = form.spellDao['effectBurn'][effext_index];
            //   var exact = form.spellDao['effect'][effext_index][spellrankindex];
            //   // if (effext_index == 1) {
            //   //   form.base_damage.value = exact;
            //   // }
            //   return burn.replace(exact.toString(), `<span class="spelleffect active" data-base="${exact}">${exact}</span>`);
            // } else if (capture[0] === 'a' || capture[0] === 'f') {
            //   for (let e of form.spellDao['vars']) {
            //     if (e.key === capture) {
            //       switch (e.link) {
            //         case "spelldamage":
            //           return `<span class="ap" data-ratio="ap_ratio ${e.coeff}">${e.coeff} AP</span>`;
            //         case "attackdamage":
            //           return `<span class="ad" data-ratio="total_ad_ratio ${e.coeff}">${e.coeff} AD</span>`;
            //         case "bonusattackdamage":
            //           return `<span class="ad" data-ratio="bonus_ad_ratio ${e.coeff}">${e.coeff} Bonus AD</span>`;
            //         case "health":
            //           return `<span class="hp" data-ratio="max_health_ratio ${e.coeff}">${e.coeff} Health</span>`;
            //         case "bonushealth":
            //           return `<span class="hp" data-ratio="bonushealth_ratio ${e.coeff}">${e.coeff} Bonus Health</span>`;
            //         case "bonusarmor":
            //           return `<span class="armor" data-ratio="bonusarmor_ratio ${e.coeff}">${e.coeff} Bonus Armor</span>`;
            //         case "armor":
            //           return `<span class="armor" data-ratio="armor_ratio ${e.coeff}">${e.coeff} Armor</span>`;
            //         case "bonusspellblock":
            //           return `<span class="mr" data-ratio="bonusspellblock_ratio ${e.coeff}">${e.coeff} Bonus MR</span>`;
            //         case "spellblock":
            //           return `<span class="mr" data-ratio="spellblock_ratio ${e.coeff}">${e.coeff} MR</span>`;
            //         default:
            //           console.log(`Unknown vars.link value = ${e.link}`);
            //           return `<span class="spelleffect" data-ratio="special ${e.coeff}" data-ratio-special="${e.link}">${e.coeff} ?</span>`;
            //       }
            //     }
            //   }
            // }
        } catch (e) {
            console.log('Spell effect error:');
            console.log(e);
        }
        console.log(`Unknown spell effect '${match}'`);
        capture = capture.replace(/\|/g, ' ')
        return `<span class='tooltip capture-unknown'>${capture}<span class='tooltip-float'>Unknown value for '${capture}'</span></span>`;
    };
}