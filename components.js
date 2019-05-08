import { calcDamageWithRedection } from './calc.js'
import matchReplaceSpellEffects from './matchreplace.js'

console.log('components.js is ready!')

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
      if (this.type === 'base_damage')
        return +(Math.round(this.value + "e+6") + "e-6");
      else {
        const x = +(Math.round(this.value + "e+12") + "e-10");
        return '' + (x < 0 ? x : '+' + x) + '%';
      }
    },
    ispercent: function () {
      return this.type !== 'base_damage';
    },
    removable: function () {
      return false;
    }
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
  <span v-if="removable" class="inline">✕</span>
  </div>`
});

Vue.component('spell-tooltip', {
  props: ['spell', 'spellrankindex'],
  template: `<div v-html="calchtml()"></div>`,
  methods: {
    calchtml: function () {
      // console.log(form.spellDao.tooltip.split(/(\W)/));
      const defaultTooltipHtml = '<p>' + this.spell.description.join('</p><p>') + '</p>';
      let ret = matchReplaceSpellEffects(defaultTooltipHtml, this.spellrankindex);
      return ret.str;
    },
  }
});

Vue.component('spell-effects', {
  props: ['id', 'spell', 'effect', 'spellrankindex', 'effectindex', 'iscustom'],
  name: 'spell-effects',
  template: '#spell-effects-template',
  data: function () {
    return {
      damagetype: 'not_detected',
      base_damage: 0,
      showRatiosDropdown: false,
      ratios: {},
      vars: null,
      repeat: 1,
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
      return this.calc_dmg_onhit(this.$root.player, this.$root.target, this.dmg_premitigation);
    },
    dmg_premitigation: function () {
      return this.dmg_premitigation_for_one * Math.max(0, this.repeat);
    },
    dmg_onhit_for_one: function () {
      return this.calc_dmg_onhit(this.$root.player, this.$root.target, this.dmg_premitigation_for_one);
    },
    dmg_premitigation_for_one: function () {
      return this.calc_dmg_premitigation(this.$root.player, this.$root.target);
    },
  },
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
      if ('base_damage' in vars) {
        this.base_damage = numeral(vars.base_damage[this.spellrankindex]).value();
      }
      for (const ratio in vars.ratios) {
        const el = vars.ratios[ratio];
        const target = el.target || 'player';
        const key = el.key || ratio;
        const value = el.value || el || 0;
        Vue.set(this.ratios, target + '-' + ratio, {
          target: target,
          key: key,
          value: Math.abs(value)
        });
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
        if (ratio.target === 'target') {
          const stat = target[ratio.key] || 0;
          damage += (stat * ratio.value);
        }
        else {
          const stat = player[ratio.key] || 0;
          damage += (stat * ratio.value);
        }
      }
      return damage;
    },
    calc_dmg_onhit: function (p, t, damage) {
      switch (this.damagetype) {
        case "physical":
          return calcDamageWithRedection(damage, t.base_armor, t.bonus_armor,
            p.flat_armor_reduction, p.percent_armor_reduction, p.percent_armorpen, p.percent_bonus_armorpen, p.flat_armorpen);
        case "magic":
          return calcDamageWithRedection(damage, t.base_mr, t.bonus_mr,
            p.flat_mr_reduction, p.percent_mr_reduction, p.percent_magicpen, 0, p.flat_magicpen);
        case "true":
          return damage;
        default:
          return 0;
      }
    },
    calcspell: function () {
      //TODO test if this works
      // tippy(`#${this.$el.id} [data-tippy-content]`, {
      //   animation: 'fade',
      //   duration: 50,
      //   delay: [0, 0],
      //   followCursor: true,
      // });

      // var inputs = this.$el.getElementsByClassName("input");
      // for (var i = 0; i < inputs.length; i++) {
      //   // inputs[i].addEventListener("input", recalc);
      //   inputs[i].addEventListener("focus", e => e.currentTarget.select());
      // }
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
      return matchReplaceSpellEffects(final, this.spellrankindex).str;
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
      return matchReplaceSpellEffects(text, this.spellrankindex).str
    },
  },
  template: '#champion-spells-template'
})

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
      const replaced = matchReplaceSpellEffects(text.toString(), this.spellrankindex || 0);
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
});

const globalTooltips = {};
Vue.component('simple-tooltip', {
  props: ['dname', 'tipid'],
  data: function () {
    return {
      visable: false,
      clientX: 0,
      clientY: 0,
    }
  },
  methods: {
    addEffect: function () {
      this.customEffects.push(this.lastEffectIndex++);
    },
    matchReplace: function (text) {
      return matchReplaceSpellEffects(text, this.spellrankindex).str
    },
    draw: function (e) {
      const comp = globalTooltips[this.tipid] || this;
      comp.clientX = e.clientX + 10 + 'px';
      comp.clientY = e.clientY + 10 + 'px';
      comp.visable = true;
    },
    hide: function(e) {
      const comp = globalTooltips[this.tipid] || this;
      comp.visable = false;
    },
  },
  template: `<span class="tooltiplink" @mousemove="draw($event)" @mouseout="hide($event)">{{dname}}
  <div class="tooltipcontent" :class="visable ? '' : 'hidden'" :style="{left:clientX,top:clientY}"><slot></slot></div>
</span>`,
});