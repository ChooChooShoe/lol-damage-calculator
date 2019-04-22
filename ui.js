import * as item from './league_items.js';
import {
  downloadingChampionFiles,
  onSpellRankInput,
  addSpellEffect
} from './league_data.js';
import * as calc from './calc.js';
import {
  recalc,
  spell_data,
  main_div,
  asNumber
} from './calc.js';

function default_stats() {
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

function default_user(name) {
  return {
    champ: '',
    level: 18,
    partype: 'Mana',
    name: name,
    title: '',

    ap: 0,
    total_ad: 0,
    bonus_ad: 0,
    critdamage: 2,
    lifesteal: 0,
    hasVoidStaff: false,
    flat_magicpen: 0,
    spellvamp: 0,
    lethality: 0,
    flat_armorpen: 0,
    precent_armorpen: 0,


    base_hp: 0,
    base_mana: 0,
    base_movespeed: 0,
    base_armor: 0,
    base_mr: 0,
    base_attackrange: 0,
    base_hpregen: 0,
    base_manaregen: 0,
    base_critchance: 0,
    base_attackspeed: 0,
  }
}

function calcStat(lvl, base, growth) {
  return base + growth * (lvl - 1) * (0.7025 + 0.0175 * (lvl - 1));
}

// Define a new component called button-counter
Vue.component('numeral-input', {
  data: function () {
    return {
      value: 69
    }
  },
  template: `<div><input type="text" v-model:number="value" class="extra input short percent" />
              <div class="numeral-inc inc">+</div><div class="numeral-inc dec">−</div></div>`
})

export const vue = new Vue({
  el: '#main',
  data: {
    currentSpells: [],
    championList: {
      'None': {
        name: '  -- None --  ',
        id: ''
      }
    },
    message: 'Hello Vue!',
    player: default_user('player'),
    target: default_user('target'),

  },
  watch: {
    'player.ap': function (newAP, oldAP) {
      console.log('AP:', oldAP, '=>', newAP);
    },
    'player.total_ad': function (total_ad, old) {
      console.log('total_ad:', old, '=>', total_ad);
      if (total_ad < this.player.base_ad) {
        this.player.total_ad = this.player.base_ad;
        this.player.bonus_ad = 0;
      } else {
        this.player.bonus_ad = total_ad - this.player.base_ad;
      }
    },
    'player.bonus_ad': function (bonus_ad, old) {
      console.log('bonus_ad:', old, '=>', bonus_ad);
      bonus_ad = Math.max(bonus_ad, 0);
      this.player.total_ad = this.player.base_ad + bonus_ad
    },
    target: {
      handler: function (newAP, oldAP) {},
      deep: true
    },
    player: {
      handler: function (newAP, oldAP) {
        console.log('recalc 2.0');
      },
      deep: true
    },
    target: {
      handler: function (newAP, oldAP) {
        console.log('recalc 2.1');

      },
      deep: true
    },
    player_stats: function (stats, old) {
      update_user_stats(stats, this.player, this.player.level);
    },
    'player.level': function (level, _old) {
      update_user_stats(this.player_stats, this.player, level);
    },
    target_stats: function (stats, _old) {
      update_user_stats(stats, this.target, this.target.level);
    },
    'target.level': function (level, _old) {
      update_user_stats(this.target_stats, this.target, level);
    },
    'player.champ': function (champ, old) {
      window.localStorage.setItem('last_used_champ_player', champ);
      // for (let s of document.getElementsByClassName(`owner-${old}`))
      //   s.classList.add('hidden');
      downloadingChampionFiles(champ);
    },
    'target.champ': function (champ, old) {
      window.localStorage.setItem('last_used_champ_target', champ);
    },
  },
  computed: {
    percent_pysical_reduction: {
      get: function () {
        if (this.target.base_armor < 0) // Damage is amplified.
          return -1 + (100.0 / (100.0 - this.target.base_armor));
        else //Normal damage reduction.
          return 1.0 - (100.0 / (100.0 + this.target.base_armor));
      },
      set: function (val) {
        console.log('percent_pysical_reduction =>', val);
      }
    },
    eff_physical_hp: {
      get: function () {
        if (this.target.base_armor < 0)
          return (1 + (this.target.base_armor / 100.0)) * this.target.base_hp;
        else
          return (1 + (this.target.base_armor / 100.0)) * this.target.base_hp;
      },
      set: function (val) {
        console.log('eff_physical_hp =>', val);
      }
    },
    percent_magic_reduction: {
      get: function () {
        if (this.target.base_mr < 0)
          return -1 + (100.0 / (100.0 - this.target.base_mr));
        else
          return 1 - (100.0 / (100.0 + this.target.base_mr));
      },
      set: function (val) {
        console.log('percent_magic_reduction =>', val);
      }
    },
    eff_magic_hp: {
      get: function () {
        if (this.target.base_mr < 0)
          return (1 + (this.target.base_mr / 100.0)) * this.target.base_hp;
        else
          return (1 + (this.target.base_mr / 100.0)) * this.target.base_hp;
      },
      set: function (val) {
        console.log('eff_magic_hp =>', val);
      }
    },

    'ap': {
      get: function () {
        console.log('firstName', this.player.ap);
        return this.player.ap
      },
      set: function (newValue) {
        console.log('newValue', newValue);

        this.player.ap = newValue
      }
    },
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    },
    target_stats: function () {
      if (this.championList[this.target.champ])
        return this.championList[this.target.champ].stats;
      return default_stats();
    },
    player_stats: function () {
      if (this.championList[this.player.champ])
        return this.championList[this.player.champ].stats;
      return default_stats();
    },
    target_info: function () {
      return this.championList[this.target.champ] || {};
    },
    player_info: function () {
      return this.championList[this.player.champ] || {};
    },
    output: function () {
      const p = this.$root.player;
      const t = this.$root.target;
      console.log('Re-calc 4.0 (output computed value)');
      let output = {
        preTotalDmg: 0,
        preMagicDmg: 0,
        prePhysicalDmg: 0,
        totalDmg: 0,
        magicDmg: 0,
        physicalDmg: 0,
        trueDmg : 0,
      };

      for (let child of this.$children) {
        for (let spellEff of child.$children) {
          if (spellEff.$options.name && spellEff.$options.name != 'spell-effects')
            continue;
          switch (spellEff.damagetype) {
            case "physical":
              output.preTotalDmg += spellEff.dmg_premitigation;
              output.prePhysicalDmg += spellEff.dmg_premitigation;
              output.totalDmg += spellEff.dmg_onhit;
              output.physicalDmg += spellEff.dmg_onhit;
              break;
            case "magic":
              output.preTotalDmg += spellEff.dmg_premitigation;
              output.preMagicDmg += spellEff.dmg_premitigation;
              output.totalDmg += spellEff.dmg_onhit;
              output.magicDmg += spellEff.dmg_onhit;
              break;
            case "true":
              output.preTotalDmg += spellEff.dmg_premitigation;

              output.totalDmg += spellEff.dmg_onhit;
              output.trueDmg += spellEff.dmg_onhit;
              break;
            default:
              break;
          }
        }
      }

      const hp_diff = t.base_hp - output.totalDmg;
      if (hp_diff < 0) {
        output.status = "Dead";
        output.overkill = -hp_diff + " damage overkill";
        output.hpRemaining = "0";
        output.hpRemainingPercent = "0%";
      } else if (hp_diff > 1) {
        output.status = "Alive";
        output.overkill = "N/A";
        output.hpRemaining = hp_diff;
        output.hpRemainingPercent = hp_diff / t.base_hp;
      } else {
        output.status = "Dead (Maybe)";
        output.overkill = "N/A";
        output.hpRemaining = hp_diff;
        output.hpRemainingPercent = hp_diff / t.base_hp;
      }
      return output;
    }
  },
  methods: {
    setBaseStats: function (val) {},
    numeral: window.numeral
  }
})


window.sellItem = item.sellItem;
window.onSpellRankInput = onSpellRankInput;
window.addSpellEffect = addSpellEffect;

function update_user_stats(stats, user, lvl) {

  user.base_ad = calcStat(lvl, stats.attackdamage, stats.attackdamageperlevel);
  if (user.bonus_ad < 0) {
    user.total_ad = user.base_ad;
    user.bonus_ad = 0;
  }
  user.base_hp = calcStat(lvl, stats.hp, stats.hpperlevel);
  user.base_mana = calcStat(lvl, stats.mp, stats.mpperlevel);
  user.base_movespeed = stats.movespeed;
  user.base_armor = calcStat(lvl, stats.armor, stats.armorperlevel);
  user.base_mr = calcStat(lvl, stats.spellblock, stats.spellblockperlevel);
  user.base_attackrange = stats.attackrange;
  user.base_hpregen = calcStat(lvl, stats.hpregen, stats.hpregenperlevel);
  user.base_manaregen = calcStat(lvl, stats.mpregen, stats.mpregenperlevel);
  user.base_critchance = calcStat(lvl, stats.crit, stats.critperlevel);
  user.base_attackspeed = stats.attackspeed + stats.attackspeed * stats.attackspeedperlevel * lvl;
}