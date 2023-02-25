import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Draven';

export default {
  'League of Draven': {
    name: 'League of Draven',
    display_name: 'League of Draven',
    champion: 'Draven',
    skill: 'I',
    image: {
      full: 'Draven_passive.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL" title="Draven"><img alt="Draven" src="/wiki/images/Draven_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL" title="Draven/LoL">Draven</a></span></span> gains an <i>Adoration</i> stack when he catches a <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-ability="Spinning Axe" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Spinning Axe"><img alt="Spinning Axe" src="/wiki/images/Draven_Spinning_Axe.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Draven/LoL">Spinning Axe</a></span></span> or kills a minion, monster, or tower. He loses <i>Adoration</i> stacks when he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>.',
      'When <b>Draven</b> kills an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, he consumes all <i>Adoration</i> stacks to gain <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="bonus gold Gold"><img alt="bonus gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;"><b>bonus</b> gold</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/League_of_Draven.png',
        description:
          'Innate: When Draven catches a  Spinning Axe, kills a non-champion, or destroys a  turret, he gains a stack of Adoration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> When <b>Draven</b> catches a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-ability="Spinning Axe" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Spinning Axe"><img alt="Spinning Axe" src="/wiki/images/Draven_Spinning_Axe.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Draven/LoL">Spinning Axe</a></span></span></i>, kills a non-champion, or destroys a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>, he gains a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Adoration</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Additionally, whenever Draven kills a  minion or destroys a  ward or  trap, he generates a  Strike stack for 10 seconds, refreshing on subsequent kills and stacking up to 6 times. All Strike stacks are lost if he drops an  axe or a nearby  minion dies without him killing it. The sixth stack consumes all stacks to grant him 2 Adoration stacks.',
        descriptionHTML:
          'Additionally, whenever <b>Draven</b> kills a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> or destroys a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">ward</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">trap</a></span>, he generates a <a href="https://static.wikia.nocookie.net/leagueoflegends/images/e/ee/Draven_Whirling_Death.png/revision/latest?cb=20130929122743" class="image"><img alt="Strike.png" src="/wiki/images/Draven_Whirling_Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <i>Strike</i> stack for 10 seconds, refreshing on subsequent kills and stacking up to 6 times. All <i>Strike</i> stacks are lost if he drops an <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-ability="Spinning Axe" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL#Spinning_Axe" title="axe"><img alt="axe" src="/wiki/images/Draven_Spinning_Axe.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Draven/LoL">axe</a></span></span></i> or a nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> dies without him killing it. The sixth stack consumes all stacks to grant him 2 <i>Adoration</i> stacks.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'Additionally, whenever Draven kills a  minion or destroys a  ward or  trap, he generates a  Strike stack for 10 seconds, refreshing on subsequent kills and stacking up to 6 times',
            min: 0,
            max: 6,
            description:
              'Additionally, whenever Draven kills a  minion or destroys a  ward or  trap, he generates a  Strike stack for 10 seconds, refreshing on subsequent kills and stacking up to 6 times',
            values: 1,
            units: 'total_ap',
            unitsText:
              'whenever Draven kills a  minion or destroys a  ward or  trap, he generates a  Strike stack for 10 seconds, refreshing on subsequent kills and stacking up to 6 times',
            pre: 'Additionally, whenever Draven kills a  minion or destroys a  ward or  trap, he generates a  Strike stack for 10 seconds, refreshing on subsequent kills and stacking up to 6 times',
          },
          {
            effectType: 'Stacks',
            name: 'Line 3:',
            raw: 'The sixth stack consumes all stacks to grant him 2 Adoration stacks.',
            min: 0,
            max: 10,
            description:
              'The sixth stack consumes all stacks to grant him 2 Adoration stacks.',
            values: 2,
            units: 'genericStacks',
            unitsText:
              'sixth stack consumes all stacks to grant him 2 Adoration stacks.',
            pre: 'The sixth stack consumes all stacks to grant him 2 Adoration stacks.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'When Draven kills an enemy  champion, he consumes all of his Adoration stacks and gains  40 + (2.5 × stacks) bonus gold.',
        descriptionHTML:
          'When <b>Draven</b> kills an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, he consumes all of his <i>Adoration</i> stacks and gains <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="40 + (2.5&nbsp;×&nbsp;stacks) bonus gold Gold"><img alt="40 + (2.5&nbsp;×&nbsp;stacks) bonus gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">40 + (2.<small></small><small>5</small>&nbsp;×&nbsp;stacks) <b>bonus</b> gold</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'When Draven kills an enemy  champion, he consumes all of his Adoration stacks and gains  40 + (2.5 × stacks) bonus gold.',
            min: 0,
            max: 10,
            description:
              'When Draven kills an enemy  champion, he consumes all of his Adoration stacks and gains  40 + (2.5 × stacks) bonus gold.',
            values: 4,
            units: 'gold',
            unitsText: 'bonus gold.',
            pre: 'When Draven kills an enemy  champion, he consumes all of his Adoration stacks and gains  40 +',
            post: 'bonus gold.',
            children: [
              {
                values: 2,
                user: 'none',
                units: '',
                unitsText: 'undefined',
                pre: '2.5 × stacks',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Draven loses 75% of his Adoration stacks upon death.',
        descriptionHTML:
          '<b>Draven</b> loses 75% of his <i>Adoration</i> stacks upon <a href="/wiki/Death" title="Death">death</a>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'Draven loses 75% of his Adoration stacks upon death.',
            min: 0,
            max: 10,
            description: 'Draven loses 75% of his Adoration stacks upon death.',
            values: 7,
            valuesIsPercent: true,
            units: 'genericStacks',
            unitsText: 'of his Adoration stacks upon death.loses 75',
            pre: 'Draven loses 75% of his Adoration stacks upon death.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <a href="/wiki/Assist" title="Assist">Assists</a> from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pyke" data-ability="Death from Below" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pyke/LoL#Death_from_Below" title="Death from Below"><img alt="Death from Below" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pyke/LoL#Death_from_Below" title="Pyke/LoL">Death from Below</a></span></span> will trigger <i>League of Draven</i>.\n<ul><li>Upon reaching 150 <i>Adoration</i> stacks, and every 100 stacks thereafter, as well as when he cashes at least 150 stacks in, <b>Draven</b> automatically sends a chat message notifying all players.</li>\n<li>A chat message will display to all players whenever:\n<ul><li><i>League of Draven</i> grants over <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="300 gold Gold"><img alt="300 gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">300 gold</span></span>.</li>\n<li><i>League of Draven</i> gets reduced.</li></ul></li>\n<li>None of the parts of <i>League of Draven</i> require actually using a <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-ability="Spinning Axe" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Spinning Axe"><img alt="Spinning Axe" src="/wiki/images/Draven_Spinning_Axe.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Draven/LoL">Spinning Axe</a></span></span> for a kill to get <i>Strike</i> or <i>Adoration</i> stacks, as well as to cash <i>Adoration</i> stacks.</li>\n<li><i>League of Draven</i> will trigger upon receiving an assist on an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executed</a></span> by <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL" title="Aurelion Sol\'s"><img alt="Aurelion Sol\'s" src="/wiki/images/Aurelion_Sol_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL" title="Aurelion Sol/LoL">Aurelion Sol\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aurelion Sol" data-ability="Singularity" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aurelion_Sol/LoL#Singularity" title="Singularity"><img alt="Singularity" src="/wiki/images/Aurelion_Sol_Singularity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aurelion_Sol/LoL#Singularity" title="Aurelion Sol/LoL">Singularity</a></span></span></span>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
    video: 'Draven IVideo.ogv',
  },
  'Spinning Axe': {
    name: 'Spinning Axe',
    display_name: 'Spinning Axe',
    champion: 'Draven',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'DravenSpinning.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '45',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">12 / 11 / 10 / 9 / 8</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL" title="Draven\'s"><img alt="Draven\'s" src="/wiki/images/Draven_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL" title="Draven/LoL">Draven\'s</a></span></span> next basic attack will throw an axe, dealing <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
      'This axe will ricochet off the target high up into the air. If <b>Draven</b> catches it, he automatically readies another <i>Spinning Axe</i>. <b>Draven</b> can have two <i>Spinning Axes</i> at once.',
    ],
    description: [
      {
        icon: '/wiki/images/Spinning_Axe.png',
        description:
          'Active: Draven starts spinning his axe, empowering his next basic attack within 5.8 seconds to deal bonus physical damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Draven</b> starts spinning his axe, empowering his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 5.<small>8</small> seconds to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Draven starts spinning his axe, empowering his next basic attack within 5.8 seconds to deal bonus physical damage.',
            damagetype: 'Physical',
            values: 5,
            units: 'bonus_ad',
            unitsText:
              'starts spinning his axe, empowering his next basic attack within 5.8 seconds to deal bonus physical damage.',
            pre: 'Draven starts spinning his axe, empowering his next basic attack within 5.8 seconds to deal bonus physical damage.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values:
              '40 / 45 / 50 / 55 / 60 (+ 75 / 85 / 95 / 105 / 115% bonus AD)',
            valuesHTML:
              '40 / 45 / 50 / 55 / 60 <span style="color:orange; white-space:normal">(+&nbsp;75 / 85 / 95 / 105 / 115% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '40 / 45 / 50 / 55 / 60 (+ 75 / 85 / 95 / 105 / 115% bonus AD)',
            damagetype: 'Physical',
            values: [40, 45, 50, 55, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60',
            children: [
              {
                values: [75, 85, 95, 105, 115],
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 75 / 85 / 95 / 105 / 115% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Draven_Axe_Indicator.png',
        description:
          "Upon hitting the target, the axe then ricochets off of them to land after 2 seconds, with the location being determined by Draven's current movement. If Draven catches the axe, he gains Spinning Axe's empowered attack again.",
        descriptionHTML:
          'Upon hitting the target, the axe then ricochets off of them to land after 2 seconds, with the location being determined by <b>Draven\'s</b> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">current movement</span>. If <b>Draven</b> catches the axe, he gains <i>Spinning Axe\'s</i> empowered attack again.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Upon hitting the target, the axe then ricochets off of them to land after 2 seconds, with the location being determined by Draven's current movement",
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              "hitting the target, the axe then ricochets off of them to land after 2 seconds, with the location being determined by Draven's current movement",
            pre: "Upon hitting the target, the axe then ricochets off of them to land after 2 seconds, with the location being determined by Draven's current movement",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Draven can hold up to two Spinning Axes at once.',
        descriptionHTML:
          '<b>Draven</b> can hold up to two <i>Spinning Axes</i> at once.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'Physical',
    spelleffects: 'basic',
    onhiteffects: 'Special',
    projectile: 'Special',
    notes:
      '* The landing location is determined by <b>Draven\'s</b> <a href="/wiki/Movement_speed" title="Movement speed">movement speed</a> and direction at the time <i>Spinning Axe</i> hits the target. If <b>Draven</b> is actually moving, it will bounce directly into his path. Otherwise, it will bounce back towards his current location, either landing directly onto him or to his sides.\n<ul><li><i>Spinning Axe</i> will place a visual cue on the ground where it will land. This visual cue is visible to both teams, although <b>Draven</b> himself will see a more prominent marker.</li>\n<li>Recasting <i>Spinning Axe</i> will refresh the <a href="/wiki/Buff" title="Buff">buff</a> and add another axe if possible.\n<ul><li>There is no limit to how many axes can be juggled at once, just the limit of 2 of them at a time in <b>Draven\'s</b> hands.</li></ul></li>\n<li><b>Draven</b> can catch (steal) an enemy\'s axes. This event also prompts one of a few unique voice lines.</li>\n<li><i>Spinning Axes</i> may optically bypass <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span> but they will be destroyed upon collision. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span> will not prevent the axe from bouncing off when <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL" title="Braum"><img alt="Braum" src="/wiki/images/Braum_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL" title="Braum/LoL">Braum</a></span></span> is the target.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span> will not prevent the axe from bouncing off when <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL" title="Braum"><img alt="Braum" src="/wiki/images/Braum_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL" title="Braum/LoL">Braum</a></span></span> is not the target.</li>\n<li>The axe will still bounce against parrying effects.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane\'s"><img alt="Runaan\'s Hurricane\'s" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane\'s</a></span></span> <a href="/wiki/Named_item_effect#Wind\'s_Fury" title="Named item effect">Wind\'s Fury</a> does not interact with the effects of the axes.</li>\n<li>If a <i>Spinning Axe</i> is readied during a basic attack wind-up, the effects will be applied to the fired attack.</li>\n<li><i>Spinning Axe</i> attacks deal their total increased damage in a single instance of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span>.</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.\n<ul><li>The duration will refresh on-attack against them.</li></ul></li></ul>',
    video: 'Draven QVideo.ogv',
  },
  'Blood Rush': {
    name: 'Blood Rush',
    display_name: 'Blood Rush',
    champion: 'Draven',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'DravenFury.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '40 / 35 / 30 / 25 / 20',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL" title="Draven"><img alt="Draven" src="/wiki/images/Draven_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL" title="Draven/LoL">Draven</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and a burst of <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;movement speed</span></span>. Whenever a <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-ability="Spinning Axe" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Spinning Axe"><img alt="Spinning Axe" src="/wiki/images/Draven_Spinning_Axe.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Draven/LoL">Spinning Axe</a></span></span> is caught, <i>Blood Rush\'s</i> cooldown will <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reset</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Blood_Rush.png',
        description:
          'Active: Draven enters an adrenaline rush, gaining  bonus attack speed for 3 seconds as well as decaying  bonus movement speed and  ghosting for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Draven</b> enters an adrenaline rush, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 3 seconds as well as decaying <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Draven enters an adrenaline rush, gaining  bonus attack speed for 3 seconds as well as decaying  bonus movement speed and  ghosting for 1.5 seconds.',
            increasedStat: 'bonus_ad',
            values: 3,
            units: '',
            unitsText:
              'enters an adrenaline rush, gaining  bonus attack speed for 3 seconds as well as decaying  bonus movement speed and  ghosting for 1.5 seconds.',
            pre: 'Draven enters an adrenaline rush, gaining  bonus attack speed for 3 seconds as well as decaying  bonus movement speed and  ghosting for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '20 / 25 / 30 / 35 / 40%',
            valuesHTML: '20 / 25 / 30 / 35 / 40%',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '50 / 55 / 60 / 65 / 70%',
            valuesHTML: '50 / 55 / 60 / 65 / 70%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '50 / 55 / 60 / 65 / 70%',
            values: [50, 55, 60, 65, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 55 / 60 / 65 / 70%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: "Catching a  Spinning Axe resets Blood Rush's  cooldown.",
        descriptionHTML:
          'Catching a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-ability="Spinning Axe" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Spinning Axe"><img alt="Spinning Axe" src="/wiki/images/Draven_Spinning_Axe.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Draven/LoL">Spinning Axe</a></span></span></i> resets <i>Blood Rush\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* Activating <i>Blood Rush</i> while the effect is already active will refresh the duration.',
    video: 'Draven WVideo.ogv',
  },
  'Stand Aside': {
    name: 'Stand Aside',
    display_name: 'Stand Aside',
    champion: 'Draven',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'DravenDoubleShot.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1100',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 260',
    speed: '1400',
    cast_time: '0.<small>25</small>',
    cost: '70',
    costtype: 'Mana',
    cooldown: '18 / 17 / 16 / 15 / 14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL" title="Draven"><img alt="Draven" src="/wiki/images/Draven_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL" title="Draven/LoL">Draven</a></span></span> throws a fan of axes in a line in the target direction that deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them aside</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Stand_Aside.png',
        description:
          'Active: Draven throws a fan of axes in a line in the target direction, dealing physical damage to enemies hit,  knocking them aside, though not through terrain, and  slowing them for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Draven</b> throws a fan of axes in a line in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them aside</a></span>, though not through terrain, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Draven throws a fan of axes in a line in the target direction, dealing physical damage to enemies hit,  knocking them aside, though not through terrain, and  slowing them for 2 seconds.',
            damagetype: 'Physical',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'throws a fan of axes in a line in the target direction, dealing physical damage to enemies hit,  knocking them aside, though not through terrain, and  slowing them for 2 seconds.',
            pre: 'Draven throws a fan of axes in a line in the target direction, dealing physical damage to enemies hit,  knocking them aside, though not through terrain, and  slowing them for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '75 / 110 / 145 / 180 / 215 (+ 50% bonus AD)',
            valuesHTML:
              '75 / 110 / 145 / 180 / 215 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Slow:',
            values: '20 / 25 / 30 / 35 / 40%',
            valuesHTML: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '75 / 110 / 145 / 180 / 215 (+ 50% bonus AD)',
            damagetype: 'Physical',
            values: [75, 110, 145, 180, 215],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 110 / 145 / 180 / 215',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'true',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.',
    video: 'Draven EVideo.ogv',
  },
  'Whirling Death': {
    name: 'Whirling Death',
    display_name: 'Whirling Death',
    champion: 'Draven',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'DravenRCast.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: 'Global',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="missile width">320</span>',
    speed: '2000',
    cast_time: '0.<small>5</small>',
    cost: '100',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">100 / 95 / 90 / 85 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL" title="Draven"><img alt="Draven" src="/wiki/images/Draven_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL" title="Draven/LoL">Draven</a></span></span> hurls forth two massive axes that deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. This <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executes</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> with <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span> that would be left within the current number of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-ability="League of Draven" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL#League_of_Draven" title="League of Draven"><img alt="League of Draven" src="/wiki/images/Draven_League_of_Draven.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL#League_of_Draven" title="Draven/LoL">League of Draven</a></span></span></i> stacks.',
      '<i>Whirling Death</i> can be recast while the axes are active, and does so automatically upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or the edge of the map.',
      '<span class="template_sbc"><b>Recast:</b></span> <i>Whirling Death</i> slowly reverses direction and homes back to <b>Draven</b>, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Whirling_Death.png',
        description:
          'Active: Draven hurls two massive axes in the target direction that briefly grant  sight of their surroundings and deal physical damage to enemies hit. Enemy  champions that would have  health left within the current number of  League of Draven stacks are  executed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Draven</b> hurls two massive axes in the target direction that briefly grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of their surroundings and deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that would have <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span> left within the current number of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-ability="League of Draven" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL#League_of_Draven" title="League of Draven"><img alt="League of Draven" src="/wiki/images/Draven_League_of_Draven.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL#League_of_Draven" title="Draven/LoL">League of Draven</a></span></span></i> stacks are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executed</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              '175 / 225 / 275 / 325 / 375 (+ 110 / 120 / 130 / 140 / 150% bonus AD)',
            valuesHTML:
              '175 / 225 / 275 / 325 / 375 <span style="color:orange; white-space:normal">(+&nbsp;110 / 120 / 130 / 140 / 150% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '175 / 225 / 275 / 325 / 375 (+ 110 / 120 / 130 / 140 / 150% bonus AD)',
            damagetype: 'Physical',
            values: [175, 225, 275, 325, 375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 225 / 275 / 325 / 375',
            children: [
              {
                values: [110, 120, 130, 140, 150],
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 110 / 120 / 130 / 140 / 150% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Whirling Death can be recast after 1 second while the axes are traveling, and does so automatically after the axes hit an enemy  champion or the edge of the map.',
        descriptionHTML:
          '<i>Whirling Death</i> can be recast after 1 second while the axes are traveling, and does so automatically after the axes hit an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or the edge of the <a href="/wiki/Map_(League_of_Legends)" title="Map (League of Legends)">map</a>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Whirling Death can be recast after 1 second while the axes are traveling, and does so automatically after the axes hit an enemy  champion or the edge of the map.',
            damagetype: 'None',
            values: 1,
            units: 'total_ap',
            unitsText:
              'Death can be recast after 1 second while the axes are traveling, and does so automatically after the axes hit an enemy  champion or the edge of the map.',
            pre: 'Whirling Death can be recast after 1 second while the axes are traveling, and does so automatically after the axes hit an enemy  champion or the edge of the map.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Whirling_Death_2.png',
        description:
          'Recast: Draven forces the axes to reverse direction, slowly coming to a stop before homing back to him, dealing the same damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Draven</b> forces the axes to reverse direction, slowly coming to a stop before homing back to him, dealing the same damage to enemies hit.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Whirling Death deals 100% − 40% (based on enemies hit) damage, resetting upon reversing direction.',
        descriptionHTML:
          '<i>Whirling Death</i> deals <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="enemies hit" data-displayformula="(100%-8%)^(1 per enemy hit). \'\'This is capped at 40% damage.\'\'" data-bot_values="100;92;84.64;77.87;71.64;65.91;60.64;55.78;51.32;47.22;43.44;40" data-top_values="0;1;2;3;4;5;6;7;8;9;10;11" data-bot_key="%">100% − 40% (based on enemies hit)</span> damage, resetting upon reversing direction.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Whirling Death deals 100% − 40% (based on enemies hit) damage, resetting upon reversing direction.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            basedOn: 'enemies hit',
            user: 'none',
            units: '',
            unitsText: 'damage, resetting upon reversing direction.',
            pre: 'Whirling Death deals 100% − 40%',
            post: 'damage, resetting upon reversing direction.',
          },
        ],
        leveling: [
          {
            name: 'Minimum Physical Damage:',
            values:
              '70 / 90 / 110 / 130 / 150 (+ 44 / 48 / 52 / 56 / 60% bonus AD)',
            valuesHTML:
              '70 / 90 / 110 / 130 / 150 <span style="color:orange; white-space:normal">(+&nbsp;44 / 48 / 52 / 56 / 60% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage:',
            raw: '70 / 90 / 110 / 130 / 150 (+ 44 / 48 / 52 / 56 / 60% bonus AD)',
            damagetype: 'Physical',
            values: [70, 90, 110, 130, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 90 / 110 / 130 / 150',
            children: [
              {
                values: [44, 48, 52, 56, 60],
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 44 / 48 / 52 / 56 / 60% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Enemies can be hit only once per pass.',
        descriptionHTML: '<i>Enemies can be hit only once per pass.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'true',
    notes:
      '* If <b>Draven</b> <a href="/wiki/Death" title="Death">dies</a> while the axes are cast, they will immediately fizzle.\n<ul><li><i>Whirling Death\'s</i> projectile has an <img alt="Whirling Death Minimap.png" src="/wiki/images/Whirling_Death_Minimap.png" decoding="async" loading="lazy" width="40" height="40" class="lazyload"> icon on the mini-map while it is in flight. It can be seen by only <b>Draven</b> and his allies.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block one instance of damage.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    video: 'Draven RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
