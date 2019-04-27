import * as item from './league_items.js';
import {
  downloadingChampionFiles,
  onSpellRankInput,
  addSpellEffect
} from './league_data.js';


console.log('ui.js is ready!')

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

// Define a new component to store champion stats
Vue.component('champion-div', {
  props: ['userid', 'isprimary'],
  data: function () {
    return {
      champ: '',
      level: 18,

      flat_mr_reduction: 0,
      precent_mr_reduction: 0,
      precent_magicpen: 0,
      flat_magicpen: 0,

      flat_armor_reduction: 0,
      precent_armor_reduction: 0,
      precent_armorpen: 0,
      lethality: 0,
  
      base_ad: 0,
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

      bonus_ad: 0,
      bonus_hp: 0,
      bonus_mana: 0,
      bonus_movespeed: 0,
      bonus_armor: 0,
      bonus_mr: 0,
      bonus_attackrange: 0,
      bonus_hpregen: 0,
      bonus_manaregen: 0,
      bonus_critchance: 0,
      bonus_attackspeed: 0,
      
      ap: 0,
      critdamage: 2,
      lifesteal: 0,
      spellvamp: 0,
    }
  },
  computed: {
    flat_armorpen: {
      get: function() {
        return this.lethality * (0.6 + 0.4 * this.level / 18);
      }, 
      set: function(flat_armorpen) {
        this.lethality = Math.round(45 * flat_armorpen / ( this.level + 27));
      }
    },
    total_ad: makeTotal('ad'),
    total_hp: makeTotal('hp'),
    total_mana: makeTotal('mana'),
    total_movespeed: makeTotal('movespeed'),
    total_armor: makeTotal('armor'),
    total_mr: makeTotal('mr'),
    total_attackrange: makeTotal('attackrange'),
    total_hpregen: makeTotal('hpregen'),
    total_manaregen: makeTotal('manaregen'),
    total_critchance: makeTotal('critchance'),
    total_attackspeed: makeTotal('attackspeed'),
    stats: function() {
      if (this.$root.championList[this.champ])
        return this.$root.championList[this.champ].stats;
      return default_stats();
    },
    info: function () {
      return this.$root.championList[this.champ] || {};
    },
    percent_pysical_reduction: {
      get: function () {
        if (this.base_armor < 0) // Damage is amplified.
          return -1 + (100.0 / (100.0 - this.base_armor));
        else //Normal damage reduction.
          return 1.0 - (100.0 / (100.0 + this.base_armor));
      },
      set: function (val) {
        console.log('percent_pysical_reduction =>', val);
      }
    },
    eff_physical_hp: {
      get: function () {
        if (this.base_armor < 0)
          return (1 + (this.base_armor / 100.0)) * this.base_hp;
        else
          return (1 + (this.base_armor / 100.0)) * this.base_hp;
      },
      set: function (val) {
        console.log('eff_physical_hp =>', val);
      }
    },
    percent_magic_reduction: {
      get: function () {
        if (this.base_mr < 0)
          return -1 + (100.0 / (100.0 - this.base_mr));
        else
          return 1.0 - (100.0 / (100.0 + this.base_mr));
      },
      set: function (val) {
        console.log('percent_magic_reduction =>', val);
      }
    },
    eff_magic_hp: {
      get: function () {
        if (this.base_mr < 0)
          return (1 + (this.base_mr / 100.0)) * this.sbase_hp;
        else
          return (1 + (this.base_mr / 100.0)) * this.base_hp;
      },
      set: function (val) {
        console.log('eff_magic_hp =>', val);
      }
    },
  },
  watch: {
    champ: function(champ, _old) {
      window.localStorage.setItem('last_used_champ_' + this.userid, champ);
      if(this.isprimary === "true")
        downloadingChampionFiles(champ);
    },
    stats: function(stats, _old) {
      update_user_stats(stats, this, this.level);
    },
    level: function(level, _old) {
      update_user_stats(this.stats, this, level);
    },
  },
  mounted: function() {
    this.$root[this.userid] = this;
    this.champ = window.localStorage.getItem('last_used_champ_' + this.userid) || '';
  }
})

export const vue = new Vue({
  el: '#main',
  data: {
    currentSpells: [],
    spellComponents: [],
    championList: {
      'None': {
        name: '  -- None --  ',
        id: ''
      }
    },
    message: 'Hello Vue!',
    player: null,
    target: null,

  },
  watch: {
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    },
    outputStyle: function() {
      const t = this. output.preTotalDmg
      const p1 = (this.output.preMagicDmg / t);
      const p2 = (this.output.prePhysicalDmg / t);
      const p3 = (this.output.trueDmg / t);

      const t2 = this.output.totalDmg
      const p4 = (this.output.magicDmg / t2);
      const p5 = (this.output.physicalDmg /t2);
      const p6 = (this.output.trueDmg / t2);
      return [
        {
          left: '0%',
          width: this.percentf(p1),
        },
        {
          left: this.percentf(p1),
          width: this.percentf(p2),
        },
        {
          left: this.percentf(p1+p2),
          width: this.percentf(p3),
        },
        {
          left: '0%',
          width: this.percentf(p4),
        },
        {
          left: this.percentf(p4),
          width: this.percentf(p5),
        },
        {
          left: this.percentf(p4+p5),
          width: this.percentf(p6),
        }
      ]
    },
    output: function () {
      const p = this.player;
      const t = this.target;
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
      if(!p || !t) {
        console.log('Re-calc 4.0 failed, missing player and target.');
        return output;
      }

      for (const spellEff of this.spellComponents) {
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
    numeral: window.numeral,
    rnd: function(value) {
      return Math.round(value)
    },
    percentf: function(value) {
      return numeral(value).format('0.00%')
    }
  }
})


window.sellItem = item.sellItem;
window.onSpellRankInput = onSpellRankInput;
window.addSpellEffect = addSpellEffect;

function makeTotal(stat) {
  return {
    get: function () {
      return this['base_' + stat] + this['bonus_' + stat];
    },
    set: function (total_val) {
      this['bonus_' + stat] = total_val - this['base_' + stat];
    }
  };
}

function update_user_stats(stats, user, lvl) {
  console.log('Updating user stats for',user)
  user.base_ad = calcStat(lvl, stats.attackdamage, stats.attackdamageperlevel);
  user.base_hp = calcStat(lvl, stats.hp, stats.hpperlevel);
  user.base_mana = calcStat(lvl, stats.mp, stats.mpperlevel);
  user.base_movespeed = stats.movespeed;
  user.base_armor = calcStat(lvl, stats.armor, stats.armorperlevel);
  user.base_mr = calcStat(lvl, stats.spellblock, stats.spellblockperlevel);
  user.base_attackrange = stats.attackrange;
  user.base_hpregen = calcStat(lvl, stats.hpregen, stats.hpregenperlevel);
  user.base_manaregen = calcStat(lvl, stats.mpregen, stats.mpregenperlevel);
  user.base_critchance = calcStat(lvl, stats.crit, stats.critperlevel);
  user.base_attackspeed = calcStat(lvl, stats.attackspeed, stats.attackspeedperlevel);
}