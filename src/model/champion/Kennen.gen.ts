import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Kennen';

export default {
  'Mark of the Storm': {
    name: 'Mark of the Storm',
    display_name: 'Mark of the Storm',
    champion: 'Kennen',
    skill: 'I',
    image: {
      full: 'Kennen_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL" title="Kennen\'s"><img alt="Kennen\'s" src="/wiki/images/Kennen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL" title="Kennen/LoL">Kennen\'s</a></span></span> abilities apply a stack of <i>Mark of the Storm</i> to enemies hit.',
      'The third stack consumes them all to briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> the target and restore <span style="color:yellow; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;energy</span></span>. The duration is dramatically reduced if this occurs on the same target again within a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Mark of the Storm.png',
        description:
          "Innate: Kennen's abilities apply a stack of Mark of the Storm to enemies hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Kennen\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Mark of the Storm</i> to enemies hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: " Kennen's abilities apply a stack of Mark of the Storm to enemies hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times.",
            min: 0,
            max: 10,
            description:
              " Kennen's abilities apply a stack of Mark of the Storm to enemies hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times.",
            values: 6,
            units: 'total_ap',
            unitsText:
              'abilities apply a stack of Mark of the Storm to enemies hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times.',
            pre: "Kennen's abilities apply a stack of Mark of the Storm to enemies hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The third stack against a target consumes them all to  stun them for 1.25 seconds and restore  25 energy. The stun duration is reduced to 0.5 seconds if this occurs on the same target again within 6 seconds.',
        descriptionHTML:
          'The third stack against a target consumes them all to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them for 1.<small>25</small> seconds and restore <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">25 energy</span></span>. The stun duration is reduced to 0.<small>5</small> seconds if this occurs on the same target again within 6 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'The third stack against a target consumes them all to  stun them for 1.25 seconds and restore  25 energy',
            increasedStat: 'feastStacks',
            values: 1,
            units: '',
            unitsText:
              'third stack against a target consumes them all to  stun them for 1.25 seconds and restore  25 energy',
            pre: 'The third stack against a target consumes them all to  stun them for 1.25 seconds and restore  25 energy',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Slicing Maelstrom can apply only up to 3 stacks on a target.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Slicing Maelstrom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Slicing Maelstrom"><img alt="Slicing Maelstrom" src="/wiki/images/Kennen_Slicing_Maelstrom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Kennen/LoL">Slicing Maelstrom</a></span></span> can apply only up to 3 stacks on a target.</i>',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'Slicing Maelstrom can apply only up to 3 stacks on a target.',
            min: 0,
            max: 10,
            description:
              'Slicing Maelstrom can apply only up to 3 stacks on a target.',
            values: 3,
            units: 'total_ap',
            unitsText: 'Maelstrom can apply only up to 3 stacks on a target.',
            pre: 'Slicing Maelstrom can apply only up to 3 stacks on a target.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    spellshield: true,
    notes:
      '* <b>Kennen</b> will still restore energy if the target dies from the third stack of <i>Mark of the Storm</i>.\n<ul><li>After <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Slicing Maelstrom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Slicing Maelstrom"><img alt="Slicing Maelstrom" src="/wiki/images/Kennen_Slicing_Maelstrom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Kennen/LoL">Slicing Maelstrom</a></span></span> applies its third stack, the target gains a 6-second stack immunity against <i>Slicing Maelstrom</i> that refreshes on subsequent hits.</li></ul>',
  },
  'Thundering Shuriken': {
    name: 'Thundering Shuriken',
    display_name: 'Thundering Shuriken',
    champion: 'Kennen',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KennenShurikenHurlMissile1.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1050',
    width: '100',
    speed: '1700',
    cast_time: '0.<small>175</small>',
    cost: '60 / 55 / 50 / 45 / 40',
    costtype: 'Energy',
    cooldown: '8 / 7 / 6 / 5 / 4',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL" title="Kennen"><img alt="Kennen" src="/wiki/images/Kennen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL" title="Kennen/LoL">Kennen</a></span></span> throws a shuriken in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Thundering Shuriken.png',
        description:
          'Active: Kennen throws a shuriken in the target direction that deals magic damage to the first enemy hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kennen</b> throws a shuriken in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '75 / 120 / 165 / 210 / 255 (+ 75% AP)',
            valuesHTML:
              '75 / 120 / 165 / 210 / 255 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 120 / 165 / 210 / 255 (+ 75% AP)',
            damagetype: 'Magic',
            values: [75, 120, 165, 210, 255],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 120 / 165 / 210 / 255',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.',
  },
  'Electrical Surge': {
    name: 'Electrical Surge',
    display_name: 'Electrical Surge',
    champion: 'Kennen',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KennenBringTheLight.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Pending for test; targets acquired at cast start or end">775</span>',
    cast_time: '0.<small>25</small>',
    cost: '40',
    costtype: 'Energy',
    cooldown:
      '13 / 11.<small>25</small> / 9.<small>5</small> / 7.<small>75</small> / 6',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL" title="Kennen\'s"><img alt="Kennen\'s" src="/wiki/images/Kennen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL" title="Kennen/LoL">Kennen\'s</a></span></span> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> generate a stack of <i>Electrical Surge</i>, which stacks up to a cap. At max stacks, his next basic attack consumes them all to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and apply a stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Mark of the Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Mark of the Storm"><img alt="Mark of the Storm" src="/wiki/images/Kennen_Mark_of_the_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Kennen/LoL">Mark of the Storm</a></span></span></i>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Kennen</b> sends out a surge of electricity that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies afflicted by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Mark of the Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Mark of the Storm"><img alt="Mark of the Storm" src="/wiki/images/Kennen_Mark_of_the_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Kennen/LoL">Mark of the Storm</a></span></span></i> or within <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Slicing Maelstrom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Slicing Maelstrom"><img alt="Slicing Maelstrom" src="/wiki/images/Kennen_Slicing_Maelstrom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Kennen/LoL">Slicing Maelstrom</a></span></span></i>.',
    ],
    description: [
      {
        description:
          "Passive: Kennen's basic attacks on-attack generate a stack of Electrical Surge, stacking up to 4 times. At 4 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage and apply a stack of  Mark of the Storm.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Kennen\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> generate a stack of <i>Electrical Surge</i>, stacking up to 4 times. At 4 stacks, his next basic attack is empowered to consume them all to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and apply a stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Mark of the Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Mark of the Storm"><img alt="Mark of the Storm" src="/wiki/images/Kennen_Mark_of_the_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Kennen/LoL">Mark of the Storm</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: " Kennen's basic attacks on-attack generate a stack of Electrical Surge, stacking up to 4 times",
            min: 0,
            max: 10,
            description:
              " Kennen's basic attacks on-attack generate a stack of Electrical Surge, stacking up to 4 times",
            values: 4,
            units: 'feastStacks',
            unitsText:
              'basic attacks on-attack generate a stack of Electrical Surge, stacking up to 4 times',
            pre: "Kennen's basic attacks on-attack generate a stack of Electrical Surge, stacking up to 4 times",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'At 4 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage and apply a stack of  Mark of the Storm.',
            min: 0,
            max: 10,
            description:
              'At 4 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage and apply a stack of  Mark of the Storm.',
            values: 4,
            units: 'total_ap',
            unitsText:
              '4 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage and apply a stack of  Mark of the Storm.',
            pre: 'At 4 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage and apply a stack of  Mark of the Storm.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values:
              '35 / 45 / 55 / 65 / 75 (+ 80 / 90 / 100 / 110 / 120% bonus AD) (+ 35% AP)',
            valuesHTML:
              '35 / 45 / 55 / 65 / 75 <span style="color:orange; white-space:normal">(+&nbsp;80 / 90 / 100 / 110 / 120% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '35 / 45 / 55 / 65 / 75 (+ 80 / 90 / 100 / 110 / 120% bonus AD) (+ 35% AP)',
            damagetype: 'Magic',
            values: [35, 45, 55, 65, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 45 / 55 / 65 / 75',
            children: [
              {
                values: [80, 90, 100, 110, 120],
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80 / 90 / 100 / 110 / 120% bonus AD',
              },
              {
                values: 35,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 35% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Electrical Surge.png',
        description:
          'Active: Kennen sends out a surge of electricity that deals magic damage to all nearby enemies afflicted by  Mark of the Storm or within  Slicing Maelstrom.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kennen</b> sends out a surge of electricity that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies afflicted by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Mark of the Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Mark of the Storm"><img alt="Mark of the Storm" src="/wiki/images/Kennen_Mark_of_the_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Kennen/LoL">Mark of the Storm</a></span></span></i> or within <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Slicing Maelstrom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Slicing Maelstrom"><img alt="Slicing Maelstrom" src="/wiki/images/Kennen_Slicing_Maelstrom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Kennen/LoL">Slicing Maelstrom</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 95 / 120 / 145 / 170 (+ 80% AP)',
            valuesHTML:
              '70 / 95 / 120 / 145 / 170 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 95 / 120 / 145 / 170 (+ 80% AP)',
            damagetype: 'Magic',
            values: [70, 95, 120, 145, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 95 / 120 / 145 / 170',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 80% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'An enemy within  775 units with  Mark of the Storm or inside  Slicing Maelstrom is required to cast this ability. The target does not have to be  visible to be targeted by this ability.',
        descriptionHTML:
          '<i>An enemy within <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 775 units with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Mark of the Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Mark of the Storm"><img alt="Mark of the Storm" src="/wiki/images/Kennen_Mark_of_the_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Mark_of_the_Storm" title="Kennen/LoL">Mark of the Storm</a></span></span> or inside <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-ability="Slicing Maelstrom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Slicing Maelstrom"><img alt="Slicing Maelstrom" src="/wiki/images/Kennen_Slicing_Maelstrom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL#Slicing_Maelstrom" title="Kennen/LoL">Slicing Maelstrom</a></span></span> is required to cast this ability. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be targeted by this ability.</i>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'An enemy within  775 units with  Mark of the Storm or inside  Slicing Maelstrom is required to cast this ability',
            values: 7,
            units: 'kindredMarks',
            unitsText:
              'enemy within  775 units with  Mark of the Storm or inside  Slicing Maelstrom is required to cast this ability',
            pre: 'An enemy within  775 units with  Mark of the Storm or inside  Slicing Maelstrom is required to cast this ability',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'special',
    onhiteffects: 'Special',
    spellshield: true,
    projectile: 'False',
    notes:
      '* The empowered basic attack applies bonus <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>, while the electrical surge deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span>.\n<ul><li><i>Electrical Surge\'s</i> enhanced attack will be consumed and the bonus damage will not be applied if <b>Kennen</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.\n<ul><li><i>Electrical Surge\'s</i> enhanced attack cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>.</li></ul></li>\n<li>The empowered attack will trigger but not be consumed nor apply its effects against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
  },
  'Lightning Rush': {
    name: 'Lightning Rush',
    display_name: 'Lightning Rush',
    champion: 'Kennen',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KennenLightningRush.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '100 / 95 / 90 / 85 / 80',
    costtype: 'Energy',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">10 / 9 / 8 / 7 / 6</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL" title="Kennen"><img alt="Kennen" src="/wiki/images/Kennen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL" title="Kennen/LoL">Kennen</a></span></span> becomes lightning, a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> form that gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time. He deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies he passes through and restores <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">energy</span></span> if he damaged an enemy at all.',
    ],
    description: [
      {
        icon: '/wiki/images/Lightning Rush.png',
        description:
          'Active: Kennen turns into lightning for 2 seconds, becoming unable to declare basic attacks but gaining  ghosting and  100% bonus movement speed. He deals magic damage to enemies he passes through, halved against non-champions, and restores  40 energy upon damaging at least one enemy.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kennen</b> turns into lightning for 2 seconds, becoming unable to declare basic attacks but gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">100% <b>bonus</b> movement speed</span></span>. He deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies he passes through, halved against non-champions, and restores <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">40 energy</span></span> upon damaging at least one enemy.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Kennen turns into lightning for 2 seconds, becoming unable to declare basic attacks but gaining  ghosting and  100% bonus movement speed',
            increasedStat: 'bonus_ad',
            values: 2,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'bonus movement speedturns into lightning for 2 seconds, becoming unable to declare basic attacks but gaining  ghosting and  100',
            pre: 'Kennen turns into lightning for 2 seconds, becoming unable to declare basic attacks but gaining  ghosting and  100% bonus movement speed',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'He deals magic damage to enemies he passes through, halved against non-champions, and restores  40 energy upon damaging at least one enemy.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'deals magic damage to enemies he passes through, halved against non-champions, and restores  40 energy upon damaging at least one enemy.',
            pre: 'He deals magic damage to enemies he passes through, halved against non-champions, and restores  40 energy upon damaging at least one enemy.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 120 / 160 / 200 / 240 (+ 80% AP)',
            valuesHTML:
              '80 / 120 / 160 / 200 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 80% AP)',
            damagetype: 'Magic',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 80% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Lightning Rush can be recast after 0.5 seconds, and does so automatically after the duration.',
        descriptionHTML:
          '<i>Lightning Rush</i> can be recast after 0.<small>5</small> seconds, and does so automatically after the duration.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Recast: Kennen ends Lightning Rush to gain  bonus attack speed and be allowed to exceed the attack speed cap for 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Kennen</b> ends <i>Lightning Rush</i> to gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and be allowed to exceed the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="normally 2.5 attacks per second">attack speed cap</span> for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Recast:',
            raw: ' Kennen ends Lightning Rush to gain  bonus attack speed and be allowed to exceed the attack speed cap for 4 seconds.',
            increasedStat: 'total_ap',
            values: 4,
            units: '',
            unitsText:
              'ends Lightning Rush to gain  bonus attack speed and be allowed to exceed the attack speed cap for 4 seconds.',
            pre: 'Kennen ends Lightning Rush to gain  bonus attack speed and be allowed to exceed the attack speed cap for 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '40 / 50 / 60 / 70 / 80%',
            valuesHTML: '40 / 50 / 60 / 70 / 80%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '40 / 50 / 60 / 70 / 80%',
            values: [40, 50, 60, 70, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80%',
          },
        ],
      },
      {
        description:
          "Lightning Rush's recast can be used while affected by  cast-inhibiting crowd control.",
        descriptionHTML:
          '<i>Lightning Rush\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <i>Lightning Rush</i> will only damage any particular enemy once per cast.\n<ul><li>For the purpose of aim-assist, <b>Kennen\'s</b> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Range" title="Range">attack range</a></span> is reduced<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;by 575&nbsp;」</span><span class="flipText2">「&nbsp;to -25&nbsp;」</span></span>during <i>Lightning Rush</i>, further reduced to -33.<small>75</small> with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon"><img alt="Rapid Firecannon" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon</a></span></span>.</li></ul>',
  },
  'Slicing Maelstrom': {
    name: 'Slicing Maelstrom',
    display_name: 'Slicing Maelstrom',
    champion: 'Kennen',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'KennenShurikenStorm.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius: '550',
    cast_time: '0.<small>25</small>',
    cooldown: '120',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kennen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kennen/LoL" title="Kennen"><img alt="Kennen" src="/wiki/images/Kennen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kennen/LoL" title="Kennen/LoL">Kennen</a></span></span> summons a storm that strikes at nearby enemy champions, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>. Enemies take increased damage from each successive strike.',
    ],
    description: [
      {
        icon: '/wiki/images/Slicing Maelstrom.png',
        description:
          'Active: Kennen summons a storm around himself for 3 seconds, gaining  bonus armor and  bonus magic resistance for the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kennen</b> summons a storm around himself for 3 seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> for the duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Kennen summons a storm around himself for 3 seconds, gaining  bonus armor and  bonus magic resistance for the duration.',
            increasedStat: 'bonus_armor',
            values: 3,
            units: '',
            unitsText:
              'summons a storm around himself for 3 seconds, gaining  bonus armor and  bonus magic resistance for the duration.',
            pre: 'Kennen summons a storm around himself for 3 seconds, gaining  bonus armor and  bonus magic resistance for the duration.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Resistances:',
            values: '20 / 30 / 40 / 50 / 60',
            valuesHTML: '20 / 30 / 40 / 50 / 60',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Resistances:',
            raw: '20 / 30 / 40 / 50 / 60',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
          },
        ],
      },
      {
        description:
          'The storm strikes lightning bolts down on nearby enemies every 0.5 seconds, each one dealing magic damage.',
        descriptionHTML:
          'The storm strikes lightning bolts down on nearby enemies every 0.<small>5</small> seconds, each one dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage Per Bolt:',
            values: '40 / 57.5 / 75 / 92.5 / 110 (+ 22.5% AP)',
            valuesHTML:
              '40 / 57.<small>5</small> / 75 / 92.<small>5</small> / 110 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;22.<small>5</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Bolt:',
            raw: '40 / 57.5 / 75 / 92.5 / 110 (+ 22.5% AP)',
            damagetype: 'Magic',
            values: [40, 57.5, 75, 92.5, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 57.5 / 75 / 92.5 / 110',
            children: [
              {
                values: 22.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 22.5% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Slicing Maelstrom deals 10% increased damage against a target with each successive strike, up to a maximum of 150% damage with one strike.',
        descriptionHTML:
          '<i>Slicing Maelstrom</i> deals 10% increased damage against a target with each successive strike, up to a maximum of 150% damage with one strike.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Slicing Maelstrom deals 10% increased damage against a target with each successive strike, up to a maximum of 150% damage with one strike.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'increased damage against a target with each successive strike, up to a maximum of 150Maelstrom deals 10',
            pre: 'Slicing Maelstrom deals 10% increased damage against a target with each successive strike, up to a maximum of 150% damage with one strike.',
          },
        ],
        leveling: [
          {
            name: 'Total Single-Target Damage:',
            values: '300 / 431.25 / 562.5 / 693.75 / 825 (+ 168.75% AP)',
            valuesHTML:
              '300 / 431.<small>25</small> / 562.<small>5</small> / 693.<small>75</small> / 825 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;168.<small>75</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Single-Target Damage:',
            raw: '300 / 431.25 / 562.5 / 693.75 / 825 (+ 168.75% AP)',
            damagetype: 'None',
            values: [300, 431.25, 562.5, 693.75, 825],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 431.25 / 562.5 / 693.75 / 825',
            children: [
              {
                values: 168.75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 168.75% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: true,
    notes: '* No additional notes.',
  },
} satisfies { [skillName in string]: SkillData };
