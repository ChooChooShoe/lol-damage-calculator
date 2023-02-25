import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Rumble';

export default {
  'Junkyard Titan': {
    name: 'Junkyard Titan',
    display_name: 'Junkyard Titan',
    champion: 'Rumble',
    skill: 'I',
    image: {
      full: 'Rumble_JunkyardTitan1.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL" title="Rumble\'s"><img alt="Rumble\'s" src="/wiki/images/Rumble_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL" title="Rumble/LoL">Rumble\'s</a></span></span> <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a> casts generate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">Heat</a></span>, which gradually expires after a few seconds without generating Heat. Rumble enters the <i>Danger Zone</i> while he has at least <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">50% Heat</a></span>, and becomes <i>Overheated</i> at <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">Max Heat</a></span>.',
      '<span class="template_sbc"><b><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/4e/Rumble_Junkyard_Titan_2.png/revision/latest?cb=20171223034220" class="image"><img alt="Junkyard Titan 2.png" src="/wiki/images/Rumble_Junkyard_Titan_2.png" decoding="async" loading="lazy" width="24" height="24" class="lazyload"></a> Danger Zone:</b></span> <b>Rumble\'s</b> basic abilities are empowered.',
      '<span class="template_sbc"><b><a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/2d/Rumble_Junkyard_Titan_3.png/revision/latest?cb=20171223034233" class="image"><img alt="Junkyard Titan 3.png" src="/wiki/images/Rumble_Junkyard_Titan_3.png" decoding="async" loading="lazy" width="24" height="24" class="lazyload"></a> Overheated:</b></span> <b>Rumble\'s</b> abilities are disabled as his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">Heat</a></span> decays over a few seconds. During this time, his basic attacks gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Junkyard_Titan.png',
        description:
          "Innate: Rumble's basic ability casts generate  Heat, which refreshes on subsequent casts and decays by  10 Heat per second after not using any basic ability within 4 seconds or  The Equalizer within 2 seconds. Rumble's mech enters the Danger Zone when at or above  50 Heat, and becomes Overheated while at  100 Heat.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Rumble\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a> casts generate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">Heat</a></span>, which refreshes on subsequent casts and decays by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">10 Heat</a></span> per second after not using any basic ability within 4 seconds or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="The Equalizer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#The_Equalizer" title="The Equalizer"><img alt="The Equalizer" src="/wiki/images/Rumble_The_Equalizer.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#The_Equalizer" title="Rumble/LoL">The Equalizer</a></span></span></i> within 2 seconds. <b>Rumble\'s</b> mech enters the <i>Danger Zone</i> when at or above <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">50 Heat</a></span>, and becomes <i>Overheated</i> while at <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">100 Heat</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: "Rumble's basic ability casts generate  Heat, which refreshes on subsequent casts and decays by  10 Heat per second after not using any basic ability within 4 seconds or  The Equalizer within 2 seconds",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'basic ability casts generate  Heat, which refreshes on subsequent casts and decays by  10 Heat per second after not using any basic ability within 4 seconds or  The Equalizer within 2 seconds',
            pre: "Rumble's basic ability casts generate  Heat, which refreshes on subsequent casts and decays by  10 Heat per second after not using any basic ability within 4 seconds or  The Equalizer within 2 seconds",
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: "Rumble's mech enters the Danger Zone when at or above  50 Heat, and becomes Overheated while at  100 Heat.",
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'mech enters the Danger Zone when at or above  50 Heat, and becomes Overheated while at  100 Heat.',
            pre: "Rumble's mech enters the Danger Zone when at or above  50 Heat, and becomes Overheated while at  100 Heat.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Junkyard_Titan_2.png',
        description:
          "Danger Zone: Rumble's mech enters the Danger Zone, empowering his basic abilities.",
        descriptionHTML:
          '<span class="template_sbc"><b>Danger Zone:</b></span> <b>Rumble\'s</b> mech enters the <i>Danger Zone</i>, empowering his basic abilities.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Junkyard_Titan_3.png',
        description:
          "Overheated: Rumble's mech becomes Overheated, disabling his abilities as his  Heat decays back down to 0 over 5.25 seconds. During this time, he gains  20% − 80% (based on level) bonus attack speed and empowers his basic attacks to deal 5 − 40 (based on level) (+ 25% AP) (+ 6% of the target's maximum health) bonus magic damage  on-hit. The damage based on the target's health ratio is capped at 80 against  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Overheated:</b></span> <b>Rumble\'s</b> mech becomes <i>Overheated</i>, disabling his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> as his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">Heat</a></span> decays back down to 0 over 5.<small>25</small> seconds. During this time, he gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="80;" data-bot_values="20;23.53;27.06;30.59;34.12;37.65;41.18;44.71;48.24;51.76;55.29;58.82;62.35;65.88;69.41;72.94;76.47;80" data-top_values="" data-bot_key="%">20% − 80% (based on level)</span> <b>bonus</b> attack speed</span></span> and empowers his <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="5;" data-finish="40;" data-bot_values="5;7.06;9.12;11.18;13.24;15.29;17.35;19.41;21.47;23.53;25.59;27.65;29.71;31.76;33.82;35.88;37.94;40" data-top_values="">5 − 40 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;6% of the target\'s <b>maximum</b> health)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>. The damage based on the target\'s health ratio is capped at 80 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "During this time, he gains  20% − 80% (based on level) bonus attack speed and empowers his basic attacks to deal 5 − 40 (based on level) (+ 25% AP) (+ 6% of the target's maximum health) bonus magic damage  on-hit",
            healType: 'OutgoingHeals',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'bonus_ad',
            unitsText:
              'bonus attack speed and empowers his basic attacks to deal 5 − 40',
            pre: 'During this time, he gains  20% − 80%',
            post: 'bonus attack speed and empowers his basic attacks to deal 5 − 40',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
              {
                values: 6,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of the target's maximum health",
                pre: "+ 6% of the target's maximum health",
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Line 3:',
            raw: "The damage based on the target's health ratio is capped at 80 against  monsters.",
            healType: 'OutgoingHeals',
            values: 8,
            units: 'total_ap',
            unitsText:
              "damage based on the target's health ratio is capped at 80 against  monsters.",
            pre: "The damage based on the target's health ratio is capped at 80 against  monsters.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    damagetype: 'Magic',
    spelleffects: 'Proc',
    notes:
      '* While <b>Rumble</b> is <i>overheating</i>, a <a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <i>Silenced</i> icon will appear above him to signify he cannot cast <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>. This is visible to all units.\n<ul><li>The attacks do not deal the <b>bonus</b> damage against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li></ul>',
  },
  Flamespitter: {
    name: 'Flamespitter',
    display_name: 'Flamespitter',
    champion: 'Rumble',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'RumbleFlameThrower.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '600 -50',
    angle:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 64°',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">10 / 9 / 8 / 7 / 6</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL" title="Rumble"><img alt="Rumble" src="/wiki/images/Rumble_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL" title="Rumble/LoL">Rumble</a></span></span> activates a flamethrower for a short time that continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span> in a frontal cone.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="Junkyard Titan 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Danger Zone"><img alt="Danger Zone" src="/wiki/images/Rumble_Junkyard_Titan_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Rumble/LoL">Danger Zone</a></span></span> Bonus:</b></span> <i>Flamespitter\'s</i> damage is increased.',
    ],
    description: [
      {
        icon: '/wiki/images/Flamespitter.png',
        description:
          'Active: Rumble generates  20 Heat to activate his flamethrower for 3 seconds, dealing magic damage every 0.25 seconds to enemies hit in a frontal cone, reduced against  minions.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rumble</b> generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">20 Heat</a></span> to activate his flamethrower for 3 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds to enemies hit in a frontal cone, reduced against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Rumble generates  20 Heat to activate his flamethrower for 3 seconds, dealing magic damage every 0.25 seconds to enemies hit in a frontal cone, reduced against  minions.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'generates  20 Heat to activate his flamethrower for 3 seconds, dealing magic damage every 0.25 seconds to enemies hit in a frontal cone, reduced against  minions.',
            pre: 'Rumble generates  20 Heat to activate his flamethrower for 3 seconds, dealing magic damage every 0.25 seconds to enemies hit in a frontal cone, reduced against  minions.',
          },
        ],
        leveling: [
          {
            name: 'Total Magic Damage:',
            values: '180 / 220 / 260 / 300 / 340 (+ 110% AP)',
            valuesHTML:
              '180 / 220 / 260 / 300 / 340 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;110% AP)</span>',
          },
          {
            name: 'Modified Minion Damage:',
            values: '60 / 65 / 70 / 75 / 80%',
            valuesHTML: '60 / 65 / 70 / 75 / 80%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '180 / 220 / 260 / 300 / 340 (+ 110% AP)',
            damagetype: 'Magic',
            values: [180, 220, 260, 300, 340],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '180 / 220 / 260 / 300 / 340',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 110% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Modified Minion Damage:',
            raw: '60 / 65 / 70 / 75 / 80%',
            damagetype: 'None',
            values: [60, 65, 70, 75, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 65 / 70 / 75 / 80%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Danger Zone Bonus: Flamespitter's damage is increased by 50%.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="Junkyard Titan 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Danger Zone"><img alt="Danger Zone" src="/wiki/images/Rumble_Junkyard_Titan_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Rumble/LoL">Danger Zone</a></span></span> Bonus:</b></span> <i>Flamespitter\'s</i> <a href="/wiki/Damage" title="Damage">damage</a> is increased by 50%.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Danger Zone Bonus:',
            raw: "Flamespitter's damage is increased by 50%.",
            damagetype: 'None',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '.damage is increased by 50',
            pre: "Flamespitter's damage is increased by 50%.",
          },
        ],
        leveling: [
          {
            name: 'Total Enhanced Damage:',
            values: '270 / 330 / 390 / 450 / 510 (+ 165% AP)',
            valuesHTML:
              '270 / 330 / 390 / 450 / 510 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;165% AP)</span>',
          },
          {
            name: 'Total Enhanced Minion Damage:',
            values:
              '162 / 214.5 / 273 / 337.5 / 408 (+ 99 / 107.25 / 115.5 / 123.75 / 132% AP)',
            valuesHTML:
              '162 / 214.<small>5</small> / 273 / 337.<small>5</small> / 408 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;99 / 107.<small>25</small> / 115.<small>5</small> / 123.<small>75</small> / 132% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Enhanced Damage:',
            raw: '270 / 330 / 390 / 450 / 510 (+ 165% AP)',
            damagetype: 'None',
            values: [270, 330, 390, 450, 510],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '270 / 330 / 390 / 450 / 510',
            children: [
              {
                values: 165,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 165% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Total Enhanced Minion Damage:',
            raw: '162 / 214.5 / 273 / 337.5 / 408 (+ 99 / 107.25 / 115.5 / 123.75 / 132% AP)',
            damagetype: 'None',
            values: [162, 214.5, 273, 337.5, 408],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '162 / 214.5 / 273 / 337.5 / 408',
            children: [
              {
                values: [99, 107.25, 115.5, 123.75, 132],
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 99 / 107.25 / 115.5 / 123.75 / 132% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'AoeDoT',
    spellshield: false,
    projectile: 'False',
    notes:
      '* <b>Rumble</b> will instantly turn to face the cursor if he is not moving when <i>Flamespitter</i> is cast.',
  },
  'Scrap Shield': {
    name: 'Scrap Shield',
    display_name: 'Scrap Shield',
    champion: 'Rumble',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'RumbleShield.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown: '6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL" title="Rumble"><img alt="Rumble" src="/wiki/images/Rumble_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL" title="Rumble/LoL">Rumble</a></span></span> briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shields"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> himself and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="Junkyard Titan 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Danger Zone"><img alt="Danger Zone" src="/wiki/images/Rumble_Junkyard_Titan_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Rumble/LoL">Danger Zone</a></span></span> Bonus:</b></span> <i>Scrap Shield\'s</i> effects are increased.',
    ],
    description: [
      {
        icon: '/wiki/images/Scrap_Shield.png',
        description:
          'Active: Rumble generates  20 Heat to grant himself a  shield for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rumble</b> generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">20 Heat</a></span> to grant himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: 'Rumble generates  20 Heat to grant himself a  shield for 1.5 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'generates  20 Heat to grant himself a  shield for 1.5 seconds.',
            pre: 'Rumble generates  20 Heat to grant himself a  shield for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '60 / 90 / 120 / 150 / 180 (+ 45% AP)',
            valuesHTML:
              '60 / 90 / 120 / 150 / 180 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '60 / 90 / 120 / 150 / 180 (+ 45% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [60, 90, 120, 150, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120 / 150 / 180',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Scrap_Shield_2.png',
        description:
          'Rumble also gains  bonus movement speed for 1 to 1.32 seconds.',
        descriptionHTML:
          '<b>Rumble</b> also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">1 to 1.<small>32</small> seconds.</span>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Rumble also gains  bonus movement speed for 1 to 1.32 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'also gains  bonus movement speed for 1 to 1.32 seconds.',
            pre: 'Rumble also gains  bonus movement speed for 1 to 1.32 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '10 / 15 / 20 / 25 / 30%',
            valuesHTML: '10 / 15 / 20 / 25 / 30%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '10 / 15 / 20 / 25 / 30%',
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Danger Zone Bonus: Scrap Shield's shield strength and bonus movement speed are increased in effectiveness by 50%.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="Junkyard Titan 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Danger Zone"><img alt="Danger Zone" src="/wiki/images/Rumble_Junkyard_Titan_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Rumble/LoL">Danger Zone</a></span></span> Bonus:</b></span> <i>Scrap Shield\'s</i> shield strength and <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> are increased in effectiveness by 50%.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Danger Zone Bonus:',
            raw: "Scrap Shield's shield strength and bonus movement speed are increased in effectiveness by 50%.",
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              ".Shield's shield strength and bonus movement speed are increased in effectiveness by 50",
            pre: "Scrap Shield's shield strength and bonus movement speed are increased in effectiveness by 50%.",
          },
        ],
        leveling: [
          {
            name: 'Enhanced Shield Strength:',
            values: '90 / 135 / 180 / 225 / 270 (+ 67.5% AP)',
            valuesHTML:
              '90 / 135 / 180 / 225 / 270 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;67.<small>5</small>% AP)</span>',
          },
          {
            name: 'Enhanced Bonus Movement Speed:',
            values: '15 / 22.5 / 30 / 37.5 / 45%',
            valuesHTML:
              '15 / 22.<small>5</small> / 30 / 37.<small>5</small> / 45%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Enhanced Shield Strength:',
            raw: '90 / 135 / 180 / 225 / 270 (+ 67.5% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [90, 135, 180, 225, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 135 / 180 / 225 / 270',
            children: [
              {
                values: 67.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 67.5% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Enhanced Bonus Movement Speed:',
            raw: '15 / 22.5 / 30 / 37.5 / 45%',
            values: [15, 22.5, 30, 37.5, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 22.5 / 30 / 37.5 / 45%',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    spelleffects: 'Shield',
    notes:
      '* The movement speed buff is supposed to last for 1 second, but due to a bug may last <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> longer.\n<ul><li><ul><li>Like most buffs, the stat bonus is already only gained at the next stat update (every <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span>). Despite this, the duration still inconsistent.</li></ul></li></ul>',
  },
  'Electro Harpoon': {
    name: 'Electro Harpoon',
    display_name: 'Electro Harpoon',
    champion: 'Rumble',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'RumbleGrenade.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '950 /  890',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    speed: '2000',
    cast_time: '0.<small>25</small>',
    cooldown: '0.<small>5</small>',
    recharge: '6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL" title="Rumble"><img alt="Rumble" src="/wiki/images/Rumble_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL" title="Rumble/LoL">Rumble</a></span></span> shoots a harpoon in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> the first enemy hit, reducing their <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resist</span></span> for a few seconds. These effects can stack with multiple harpoons.',
      '<b>Rumble</b> periodically <a href="/wiki/Stocks" class="mw-redirect" title="Stocks">stocks</a> an <i>Electro Harpoon</i>, up to a cap.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="Junkyard Titan 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Danger Zone"><img alt="Danger Zone" src="/wiki/images/Rumble_Junkyard_Titan_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Rumble/LoL">Danger Zone</a></span></span> Bonus:</b></span> <i>Electro Harpoon\'s</i> effects are increased.',
    ],
    description: [
      {
        icon: '/wiki/images/Electro_Harpoon.png',
        description:
          'Active: Rumble generates  10 Heat to shoot a harpoon in the target direction that deals magic damage to the first enemy hit, inflicting them with  10% magic resistance reduction for 4 seconds and  slowing them for 2 seconds. These effects stack additively with multiple harpoons, refreshing their duration and stacking up to 2 times.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rumble</b> generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heat"><a href="/wiki/Heat" title="Heat"><img alt="Heat resource.png" src="/wiki/images/Heat_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Heat" class="mw-redirect" title="Heat">10 Heat</a></span> to shoot a harpoon in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, inflicting them with <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">10% magic resistance reduction</span></span> for 4 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2 seconds. These effects <a href="/wiki/Stack" title="Stack">stack</a> additively with multiple harpoons, refreshing their duration and stacking up to 2 times.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Rumble generates  10 Heat to shoot a harpoon in the target direction that deals magic damage to the first enemy hit, inflicting them with  10% magic resistance reduction for 4 seconds and  slowing them for 2 seconds',
            damagetype: 'Magic',
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_mr',
            unitsText:
              'magic resistance reduction for 4 seconds and  slowing them for 2 secondsgenerates  10 Heat to shoot a harpoon in the target direction that deals magic damage to the first enemy hit, inflicting them with  10',
            pre: 'Rumble generates  10 Heat to shoot a harpoon in the target direction that deals magic damage to the first enemy hit, inflicting them with  10% magic resistance reduction for 4 seconds and  slowing them for 2 seconds',
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'These effects stack additively with multiple harpoons, refreshing their duration and stacking up to 2 times.',
            min: 0,
            max: 2,
            description:
              'These effects stack additively with multiple harpoons, refreshing their duration and stacking up to 2 times.',
            values: 2,
            units: 'genericStacks',
            unitsText:
              'effects stack additively with multiple harpoons, refreshing their duration and stacking up to 2 times.',
            pre: 'These effects stack additively with multiple harpoons, refreshing their duration and stacking up to 2 times.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 85 / 110 / 135 / 160 (+ 40% AP)',
            valuesHTML:
              '60 / 85 / 110 / 135 / 160 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '15 / 20 / 25 / 30 / 35%',
            valuesHTML: '15 / 20 / 25 / 30 / 35%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 40% AP)',
            damagetype: 'Magic',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '15 / 20 / 25 / 30 / 35%',
            values: [15, 20, 25, 30, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Rumble periodically stocks an Electro Harpoon charge, up to a maximum of 2.',
        descriptionHTML:
          '<b>Rumble</b> periodically <a href="/wiki/Stocks" class="mw-redirect" title="Stocks">stocks</a> an <i>Electro Harpoon</i> charge, up to a maximum of 2.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Rumble periodically stocks an Electro Harpoon charge, up to a maximum of 2.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'periodically stocks an Electro Harpoon charge, up to a maximum of 2.',
            pre: 'Rumble periodically stocks an Electro Harpoon charge, up to a maximum of 2.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Danger Zone Bonus: Electro Harpoon's effects are increased by 50%. The magic resistance reduction is increased to 15%.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="Junkyard Titan 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Danger Zone"><img alt="Danger Zone" src="/wiki/images/Rumble_Junkyard_Titan_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Rumble/LoL">Danger Zone</a></span></span> Bonus:</b></span> <i>Electro Harpoon\'s</i> effects are increased by 50%. The <span style="color: #00FFFF; white-space:normal">magic resistance reduction</span> is increased to <span style="color: #00FFFF; white-space:normal">15%</span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Danger Zone Bonus:',
            raw: "Electro Harpoon's effects are increased by 50%",
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: "Harpoon's effects are increased by 50",
            pre: "Electro Harpoon's effects are increased by 50%",
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The magic resistance reduction is increased to 15%.',
            damagetype: 'Magic',
            values: 1,
            valuesIsPercent: true,
            units: 'total_mr',
            unitsText: '.magic resistance reduction is increased to 15',
            pre: 'The magic resistance reduction is increased to 15%.',
          },
        ],
        leveling: [
          {
            name: 'Enhanced Damage:',
            values: '90 / 127.5 / 165 / 202.5 / 240 (+ 60% AP)',
            valuesHTML:
              '90 / 127.<small>5</small> / 165 / 202.<small>5</small> / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
          {
            name: 'Enhanced Slow:',
            values: '22.5 / 30 / 37.5 / 45 / 52.5%',
            valuesHTML:
              '22.<small>5</small> / 30 / 37.<small>5</small> / 45 / 52.<small>5</small>%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Enhanced Damage:',
            raw: '90 / 127.5 / 165 / 202.5 / 240 (+ 60% AP)',
            damagetype: 'None',
            values: [90, 127.5, 165, 202.5, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 127.5 / 165 / 202.5 / 240',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Enhanced Slow:',
            raw: '22.5 / 30 / 37.5 / 45 / 52.5%',
            values: [22.5, 30, 37.5, 45, 52.5],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '22.5 / 30 / 37.5 / 45 / 52.5%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If Rumble casts Electro Harpoon before his mech becomes  Overheated, he may still use another charge within 3 seconds of the initial cast.',
        descriptionHTML:
          '<i>If <b>Rumble</b> casts Electro Harpoon before his mech becomes <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="Junkyard Titan 3" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#Junkyard_Titan_3" title="Overheated"><img alt="Overheated" src="/wiki/images/Rumble_Junkyard_Titan_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#Junkyard_Titan_3" title="Rumble/LoL">Overheated</a></span></span>, he may still use another charge within 3 seconds of the initial cast.</i>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If Rumble casts Electro Harpoon before his mech becomes  Overheated, he may still use another charge within 3 seconds of the initial cast.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'Rumble casts Electro Harpoon before his mech becomes  Overheated, he may still use another charge within 3 seconds of the initial cast.',
            pre: 'If Rumble casts Electro Harpoon before his mech becomes  Overheated, he may still use another charge within 3 seconds of the initial cast.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '* The maximum magic resistance reduction is 20%, increased to 30% while in the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="Junkyard Titan 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Danger Zone"><img alt="Danger Zone" src="/wiki/images/Rumble_Junkyard_Titan_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Rumble/LoL">Danger Zone</a></span></span>.\n<ul><li><ul><li>If <b>Rumble</b> lands a Harpoon on a target that already has one stack of 10% magic resistance reduction while in <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-ability="Junkyard Titan 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Danger Zone"><img alt="Danger Zone" src="/wiki/images/Rumble_Junkyard_Titan_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL#Junkyard_Titan_2" title="Rumble/LoL">Danger Zone</a></span></span>, it will increase the reduction from this first stack to 15%, aswell.</li></ul></li>\n<li>A buff with the magic resistence reduction tooltip is applied to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pets"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">pets</a></span>, but their magic resistance is unaffected by <i>Electro Harpoon</i>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li>Each <i>Electro Harpoon</i> cast triggers <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacks <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.</li>\n<li><i>Electro Harpoon\'s</i> missile will fail to fire if <b>Rumble</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppressed</a></span> during the cast time.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li><b>Rumble</b> stocks an <i>Electro Harpoon</i> charge before the ability is even learned.</li></ul>',
  },
  'The Equalizer': {
    name: 'The Equalizer',
    display_name: 'The Equalizer',
    champion: 'Rumble',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'RumbleCarpetBomb.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '-175 / 1135',
    target_range: '1700',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Widest and thinnest point of the chain of circles, respectively">410 - 368.<small>4</small></span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Vector deployment speed">1600</span>',
    cast_time:
      'None / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after the spell is cast">0.<small>5833</small></span>',
    cooldown: '100 / 92.<small>5</small> / 85 / 77.<small>5</small> / 70',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rumble" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rumble/LoL" title="Rumble"><img alt="Rumble" src="/wiki/images/Rumble_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rumble/LoL" title="Rumble/LoL">Rumble</a></span></span> deploys a barrage of rockets along the target path that create a field which lingers for a few seconds.',
      'Enemies within the area are continually dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/The_Equalizer.png',
        description:
          'Active: Rumble deploys a barrage of rockets along the target path that land in a line over 0.75 seconds, creating a field of fire for 4.5 seconds after the last rocket lands.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rumble</b> deploys a barrage of rockets along the target path that land in a line over 0.<small>75</small> seconds, creating a field of fire for 4.<small>5</small> seconds after the last rocket lands.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemies struck by the impact or within the field are marked as Burning for 1 second, which deals magic damage every 0.5 seconds,  slows by 35%, and refreshes continuously while in the area.',
        descriptionHTML:
          'Enemies struck by the impact or within the field are marked as <i>Burning</i> for 1 second, which deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> by 35%, and refreshes continuously while in the area.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Enemies struck by the impact or within the field are marked as Burning for 1 second, which deals magic damage every 0.5 seconds,  slows by 35%, and refreshes continuously while in the area.',
            damagetype: 'Magic',
            values: 1,
            valuesIsPercent: true,
            units: 'kindredMarks',
            unitsText:
              ', and refreshes continuously while in the area.struck by the impact or within the field are marked as Burning for 1 second, which deals magic damage every 0.5 seconds,  slows by 35',
            pre: 'Enemies struck by the impact or within the field are marked as Burning for 1 second, which deals magic damage every 0.5 seconds,  slows by 35%, and refreshes continuously while in the area.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values: '70 / 87.5 / 105 / 122.5 / 140 (+ 17.5% AP)',
            valuesHTML:
              '70 / 87.<small>5</small> / 105 / 122.<small>5</small> / 140 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;17.<small>5</small>% AP)</span>',
          },
          {
            name: 'Minimum Magic Damage:',
            values: '140 / 175 / 210 / 245 / 280 (+ 35% AP)',
            valuesHTML:
              '140 / 175 / 210 / 245 / 280 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '70 / 87.5 / 105 / 122.5 / 140 (+ 17.5% AP)',
            damagetype: 'Magic',
            values: [70, 87.5, 105, 122.5, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 87.5 / 105 / 122.5 / 140',
            children: [
              {
                values: 17.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 17.5% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '140 / 175 / 210 / 245 / 280 (+ 35% AP)',
            damagetype: 'Magic',
            values: [140, 175, 210, 245, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '140 / 175 / 210 / 245 / 280',
            children: [
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
    ],
    targeting: 'Vector',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: false,
    projectile: 'false',
    notes:
      '* A static target standing where the missiles first impact may take an extra tick of damage (11 ticks), while a static target standing at the end of the trail may take one fewer tick (9 ticks).<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li><i>The Equalizer\'s</i> hitbox consists of a row of rockets with a circular damage hitbox each. The radius of each is 205 units, and rockets drop at a distance of 180 units between one another when <i>The Equalizer</i> is cast.\n<ul><li>The missile that manages the rockets being deployed starts 150 units behind the target vector origin, and thus drops the first rocket at 30 units in front of the cast vector origin after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.1125 seconds, but rounded up to the next game tick.">0.<small>132</small> seconds</span>.</li>\n<li>The rockets are intended to not deal damage for the first 0.<small>25</small> seconds. Due to a bug, this becomes 0.<small>25</small>-0.<small>5</small> seconds \'at random\'.\n<ul><li>If Rumble dies while <i>The Equalizer</i> is just cast, this buff will be removed by death and the area of effect will start dealing damage sooner.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li></ul></li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
