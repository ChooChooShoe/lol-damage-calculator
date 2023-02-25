import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Morgana';

export default {
  'Soul Siphon': {
    name: 'Soul Siphon',
    display_name: 'Soul Siphon',
    champion: 'Morgana',
    skill: 'I',
    image: {
      full: 'FallenAngel_Empathize.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Morgana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Morgana/LoL" title="Morgana"><img alt="Morgana" src="/wiki/images/Morgana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Morgana/LoL" title="Morgana/LoL">Morgana</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself for a portion of the damage dealt by her abilities against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and medium and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Soul_Siphon.png',
        description:
          'Innate: Morgana  heals herself for 18% of the post-mitigation damage dealt by her abilities against  champions, large  minions, and medium and large  monsters.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Morgana</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself for 18% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt by her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and medium and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: 'Morgana  heals herself for 18% of the post-mitigation damage dealt by her abilities against  champions, large  minions, and medium and large  monsters.',
            healType: 'SelfHeal',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'of the post-mitigation damage dealt by her abilities against  champions, large  minions, and medium and large  monsters. heals herself for 18',
            pre: 'Morgana  heals herself for 18% of the post-mitigation damage dealt by her abilities against  champions, large  minions, and medium and large  monsters.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'Heal',
    notes: '* No additional details.',
    yvideo: 'Morgana Passive Soul Siphon',
  },
  'Dark Binding': {
    name: 'Dark Binding',
    display_name: 'Dark Binding',
    champion: 'Morgana',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'MorganaQ.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '1300',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed: '1200',
    cast_time: '0.<small>25</small>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Morgana</b> throws a sphere of dark magic in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a "short time".',
    ],
    description: [
      {
        icon: '/wiki/images/Dark_Binding.png',
        description:
          'Active: Morgana throws a sphere of dark magic in the target direction that deals magic damage to the first enemy hit and  roots them for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Morgana</b> throws a sphere of dark magic in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 135 / 190 / 245 / 300 (+ 90% AP)',
            valuesHTML:
              '80 / 135 / 190 / 245 / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
          {
            name: 'Root Duration:',
            values: '2 / 2.25 / 2.5 / 2.75 / 3',
            valuesHTML:
              '2 / 2.<small>25</small> / 2.<small>5</small> / 2.<small>75</small> / 3',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 135 / 190 / 245 / 300 (+ 90% AP)',
            damagetype: 'Magic',
            values: [80, 135, 190, 245, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 135 / 190 / 245 / 300',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '2 / 2.25 / 2.5 / 2.75 / 3',
            values: [2, 2.25, 2.5, 2.75, 3],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 2.25 / 2.5 / 2.75 / 3',
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
    yvideo: 'Morgana Q Dark Binding',
  },
  'Tormented Shadow': {
    name: 'Tormented Shadow',
    display_name: 'Tormented Shadow',
    champion: 'Morgana',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'MorganaW.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '900',
    effect_radius: '275',
    cast_time: '0.<small>25</small>',
    cost: '70 / 85 / 100 / 115 / 130',
    costtype: 'Mana',
    cooldown: '12',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <i>Tormented Shadow\'s</i> <b>current</b> cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> whenever <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Morgana" data-ability="Soul Siphon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Morgana/LoL#Soul_Siphon" title="Soul Siphon"><img alt="Soul Siphon" src="/wiki/images/Morgana_Soul_Siphon.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Morgana/LoL#Soul_Siphon" title="Morgana/LoL">Soul Siphon</a></span></span></i> triggers.',
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Morgana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Morgana/LoL" title="Morgana"><img alt="Morgana" src="/wiki/images/Morgana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Morgana/LoL" title="Morgana/LoL">Morgana</a></span></span> desecrates the target area for a few seconds, which continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>.',
    ],
    description: [
      {
        description:
          "Passive: Tormented Shadow's  current cooldown is reduced by 5% of its total cooldown whenever  Soul Siphon triggers. Simultaneous triggers from multiple targets will stack the cooldown reduction.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <i>Tormented Shadow\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 5% of its <b>total</b> cooldown whenever <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Morgana" data-ability="Soul Siphon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Morgana/LoL#Soul_Siphon" title="Soul Siphon"><img alt="Soul Siphon" src="/wiki/images/Morgana_Soul_Siphon.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Morgana/LoL#Soul_Siphon" title="Morgana/LoL">Soul Siphon</a></span></span></i> triggers. Simultaneous triggers from multiple targets will stack the cooldown reduction.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Passive:',
            raw: "Tormented Shadow's  current cooldown is reduced by 5% of its total cooldown whenever  Soul Siphon triggers",
            damagetype: 'None',
            values: 5,
            valuesIsPercent: true,
            units: 'darkHarvestStacks',
            unitsText:
              "of its total cooldown whenever  Soul Siphon triggersShadow's  current cooldown is reduced by 5",
            pre: "Tormented Shadow's  current cooldown is reduced by 5% of its total cooldown whenever  Soul Siphon triggers",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Tormented_Shadow.png',
        description:
          "Active: Morgana torments the soil at the target location, causing the area to become desecrated for 5 seconds. Enemies within take magic damage on-cast and every 0.5 seconds, increased by 0% − 170% (based on target's missing health). Tormented Shadow deals 155% damage against  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Morgana</b> torments the soil at the target location, causing the area to become desecrated for 5 seconds. Enemies within take <span style="color: #00B0F0; white-space:normal">magic damage</span> on-cast and every 0.<small>5</small> seconds, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="1.7% per 1% of target\'s \'\'\'missing\'\'\' health" data-bot_values="0;17;34;51;68;85;102;119;136;153;170" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 170% (based on target\'s <b>missing</b> health)</span></span>. <i>Tormented Shadow</i> deals 155% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Morgana torments the soil at the target location, causing the area to become desecrated for 5 seconds',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'torments the soil at the target location, causing the area to become desecrated for 5 seconds',
            pre: 'Morgana torments the soil at the target location, causing the area to become desecrated for 5 seconds',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'Tormented Shadow deals 155% damage against  monsters.',
            increasedStat: 'total_ad',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText: 'damage against  monsters.Shadow deals 155',
            pre: 'Tormented Shadow deals 155% damage against  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Minimum Damage Per Tick:',
            values: '6 / 11 / 16 / 21 / 26 (+ 7% AP)',
            valuesHTML:
              '6 / 11 / 16 / 21 / 26 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;7% AP)</span>',
          },
          {
            name: 'Minimum Total Damage:',
            values: '60 / 110 / 160 / 210 / 260 (+ 70% AP)',
            valuesHTML:
              '60 / 110 / 160 / 210 / 260 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Damage Per Tick:',
            raw: '6 / 11 / 16 / 21 / 26 (+ 7% AP)',
            damagetype: 'None',
            values: [6, 11, 16, 21, 26],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 11 / 16 / 21 / 26',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 7% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minimum Total Damage:',
            raw: '60 / 110 / 160 / 210 / 260 (+ 70% AP)',
            damagetype: 'None',
            values: [60, 110, 160, 210, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 110 / 160 / 210 / 260',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: false,
    notes: '* Damage from multiple <i>Tormented Shadows</i> does not stack.',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Morgana_Original_W_SpellCastW_2.ogg   "The earth reflects your torment!"',
    yvideo: 'Morgana W Tormented Soil',
  },
  'Black Shield': {
    name: 'Black Shield',
    display_name: 'Black Shield',
    champion: 'Morgana',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'MorganaE.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '800',
    cast_time: 'none',
    cost: '80',
    costtype: 'mana',
    cooldown: '24 / 22 / 20 / 18 / 16',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Morgana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Morgana/LoL" title="Morgana"><img alt="Morgana" src="/wiki/images/Morgana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Morgana/LoL" title="Morgana/LoL">Morgana</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shields"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> the target allied champion or herself for a few seconds, which absorbs <span style="color: #00B0F0; white-space:normal">magic damage</span> and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span> while the shield holds.',
    ],
    description: [
      {
        icon: '/wiki/images/Black_Shield.png',
        description:
          'Active: Morgana grants a  shield to the target allied  champion or herself for 5 seconds, which absorbs incoming magic damage and grants  crowd control immunity while it holds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Morgana</b> grants a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> to the target allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or herself for 5 seconds, which absorbs incoming <span style="color: #00B0F0; white-space:normal">magic damage</span> and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span> while it holds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: 'Morgana grants a  shield to the target allied  champion or herself for 5 seconds, which absorbs incoming magic damage and grants  crowd control immunity while it holds.',
            damagetype: 'Magic',
            shieldType: 'SelfShield',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'grants a  shield to the target allied  champion or herself for 5 seconds, which absorbs incoming magic damage and grants  crowd control immunity while it holds.',
            pre: 'Morgana grants a  shield to the target allied  champion or herself for 5 seconds, which absorbs incoming magic damage and grants  crowd control immunity while it holds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Shield Strength:',
            values: '80 / 135 / 190 / 245 / 300 (+ 70% AP)',
            valuesHTML:
              '80 / 135 / 190 / 245 / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Magic Shield Strength:',
            raw: '80 / 135 / 190 / 245 / 300 (+ 70% AP)',
            damagetype: 'Magic',
            shieldType: 'SelfShield',
            values: [80, 135, 190, 245, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 135 / 190 / 245 / 300',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Allies',
    spelleffects: 'Shield',
    notes:
      '* <i>Black Shield</i> will not resist self nor allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.\n<ul><li><i>Black Shield</i> will not resist <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsight</a></span>.</li>\n<li><i>Black Shield</i> negates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> effects before any magic damage is absorbed, even if the shield is broken by an enemy\'s ability its associated disables will not apply, except for <a href="/wiki/Shield#Shield_destruction" title="Shield">shield-destroying effects</a> such as <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Ruthless Predator" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Ruthless_Predator" title="Ruthless Predator"><img alt="Ruthless Predator" src="/wiki/images/Renekton_Ruthless_Predator.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Ruthless_Predator" title="Renekton/LoL">Ruthless Predator</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Blitzcrank" data-ability="Static Field" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blitzcrank/LoL#Static_Field" title="Static Field"><img alt="Static Field" src="/wiki/images/Blitzcrank_Static_Field.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blitzcrank/LoL#Static_Field" title="Blitzcrank/LoL">Static Field</a></span></span>.</li>\n<li><i>Black Shield</i> will not prevent any other effect other than <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> unless absolutely necessary. As such, an ability that has two different mechanics like <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Nether Grasp" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Nether_Grasp" title="Nether Grasp"><img alt="Nether Grasp" src="/wiki/images/Malzahar_Nether_Grasp.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Nether_Grasp" title="Malzahar/LoL">Nether Grasp</a></span></span> will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppress</a></span> a target protected by <i>Black Shield</i> but the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> still applies.\n<ul><li>Although not considered a <i>crowd control</i> effect, <i>Black Shield</i> may also block <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Illaoi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Illaoi/LoL" title="Illaoi\'s"><img alt="Illaoi\'s" src="/wiki/images/Illaoi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Illaoi/LoL" title="Illaoi/LoL">Illaoi\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Illaoi" data-ability="Test of Spirit" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Illaoi/LoL#Test_of_Spirit" title="Test of Spirit\'s"><img alt="Test of Spirit\'s" src="/wiki/images/Illaoi_Test_of_Spirit.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Illaoi/LoL#Test_of_Spirit" title="Illaoi/LoL">Test of Spirit\'s</a></span></span></span> spirit pull.</li></ul></li>\n<li><i>Black Shield</i> takes precedence over other sources of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span> and those that grant immunity to specific types of crowd control (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">slow immunity</a></span>).\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will take priority over <i>Black Shield</i>.</li></ul></li>\n<li><i>Black Shield</i> will always take priority over regular <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span>. If used in conjunction with <a href="/wiki/Named_item_effect#Lifeline" title="Named item effect">Lifeline</a>, the most recently-applied one will do so however.</li>\n<li><i>Black Shield</i> will not negate self or ally applied crowd control effects such as an allied <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bard" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bard/LoL" title="Bard\'s"><img alt="Bard\'s" src="/wiki/images/Bard_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bard/LoL" title="Bard/LoL">Bard\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bard" data-ability="Tempered Fate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bard/LoL#Tempered_Fate" title="Tempered Fate"><img alt="Tempered Fate" src="/wiki/images/Bard_Tempered_Fate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bard/LoL#Tempered_Fate" title="Bard/LoL">Tempered Fate</a></span></span></span>.</li></ul>',
    yvideo: 'Morgana E Dark Shield',
  },
  'Soul Shackles': {
    name: 'Soul Shackles',
    display_name: 'Soul Shackles',
    champion: 'Morgana',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'MorganaR.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Can only cast if an enemy champion is within this range">575</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Latch-on range">625</span>',
    tether_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 625',
    cast_time: '0.<small>35</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '120 / 115 / 110 / 105 / 100',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Morgana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Morgana/LoL" title="Morgana"><img alt="Morgana" src="/wiki/images/Morgana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Morgana/LoL" title="Morgana/LoL">Morgana</a></span></span> latches chains of energy onto nearby enemy champions, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and forming a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between herself and each target for a short time, during which the targets are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
      '<b>Morgana</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> when moving towards enemies tethered to her.',
      'If a target maintains the tether after its duration, they are dealt the same <span style="color: #00B0F0; white-space:normal">magic damage</span> and become briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Soul_Shackles.png',
        description:
          'Active: Morgana latches chains of energy onto nearby enemy champions over the cast time, dealing magic damage and forming a  tether between herself and each target for 3 seconds, during which the targets are  revealed and  slowed by 20%.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Morgana</b> latches chains of energy onto nearby enemy champions over the cast time, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and forming a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between herself and each target for 3 seconds, during which the targets are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 20%.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Morgana latches chains of energy onto nearby enemy champions over the cast time, dealing magic damage and forming a  tether between herself and each target for 3 seconds, during which the targets are  revealed and  slowed by 20%.',
            damagetype: 'Magic',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              '.latches chains of energy onto nearby enemy champions over the cast time, dealing magic damage and forming a  tether between herself and each target for 3 seconds, during which the targets are  revealed and  slowed by 20',
            pre: 'Morgana latches chains of energy onto nearby enemy champions over the cast time, dealing magic damage and forming a  tether between herself and each target for 3 seconds, during which the targets are  revealed and  slowed by 20%.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 187.5 / 225 / 262.5 / 300 (+ 70% AP)',
            valuesHTML:
              '150 / 187.<small>5</small> / 225 / 262.<small>5</small> / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 187.5 / 225 / 262.5 / 300 (+ 70% AP)',
            damagetype: 'Magic',
            values: [150, 187.5, 225, 262.5, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 187.5 / 225 / 262.5 / 300',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Morgana gains  bonus movement speed while facing enemies tethered to her.',
        descriptionHTML:
          '<b>Morgana</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while facing enemies tethered to her.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '5 / 17.5 / 30 / 42.5 / 55%',
            valuesHTML:
              '5 / 17.<small>5</small> / 30 / 42.<small>5</small> / 55%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '5 / 17.5 / 30 / 42.5 / 55%',
            values: [5, 17.5, 30, 42.5, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 17.5 / 30 / 42.5 / 55%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If a target does not break their tether by the ends of its duration, they are dealt the same magic damage again and become  stunned for 1.5 seconds, during which they are  revealed.',
        descriptionHTML:
          'If a target does not break their tether by the ends of its duration, they are dealt the same <span style="color: #00B0F0; white-space:normal">magic damage</span> again and become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 1.<small>5</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'If a target does not break their tether by the ends of its duration, they are dealt the same magic damage again and become  stunned for 1.5 seconds, during which they are  revealed.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'a target does not break their tether by the ends of its duration, they are dealt the same magic damage again and become  stunned for 1.5 seconds, during which they are  revealed.',
            pre: 'If a target does not break their tether by the ends of its duration, they are dealt the same magic damage again and become  stunned for 1.5 seconds, during which they are  revealed.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'A nearby enemy champion is required to cast this ability. The target does not have to be  visible to be tethered by this ability.',
        descriptionHTML:
          '<i>A nearby enemy champion is required to cast this ability. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be tethered by this ability.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: 'Special',
    projectile: 'False',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the tether\'s application and initial damage but not the aftereffects of one already applied.\n<ul><li><b>Morgana</b> will turn to face southeast upon casting <i>Soul Shackles</i>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Morgana_Original_R_SpellCastR_4.ogg   "I will take on everything!"',
    yvideo: 'Morgana R Soul Shackles',
  },
} satisfies { [skillName in string]: SkillData };
