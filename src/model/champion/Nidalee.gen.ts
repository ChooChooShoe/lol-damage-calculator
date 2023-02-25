import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Nidalee';

export default {
  Prowl: {
    name: 'Prowl',
    display_name: 'Prowl',
    champion: 'Nidalee',
    skill: 'I',
    image: {
      full: 'Nidalee_Passive.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate - Prowl:</b></span> While in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL" title="Nidalee"><img alt="Nidalee" src="/wiki/images/Nidalee_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL" title="Nidalee/LoL">Nidalee</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time, increased when facing a nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
      '<span class="template_sbc"><b>Innate - Hunt:</b></span> Hitting nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> or enemy champions with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Javelin Toss" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Javelin_Toss" title="Javelin Toss"><img alt="Javelin Toss" src="/wiki/images/Nidalee_Javelin_Toss.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Javelin_Toss" title="Nidalee/LoL">Javelin Toss</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Bushwhack" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Bushwhack" title="Bushwhack"><img alt="Bushwhack" src="/wiki/images/Nidalee_Bushwhack.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Bushwhack" title="Nidalee/LoL">Bushwhack</a></span></span></i> will apply a <i>Hunted</i> mark and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveal</a></span> them for a few seconds. During this time, <b>Nidalee</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, increased when facing a <i>Hunted</i> target.',
      '<b>Nidalee\'s</b> first use of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Takedown" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Takedown" title="Takedown"><img alt="Takedown" src="/wiki/images/Nidalee_Takedown.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Takedown" title="Nidalee/LoL">Takedown</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Pounce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Pounce" title="Pounce"><img alt="Pounce" src="/wiki/images/Nidalee_Pounce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Pounce" title="Nidalee/LoL">Pounce</a></span></span></i> against <i>Hunted</i> targets are empowered.',
    ],
    description: [
      {
        icon: '/wiki/images/Prowl.png',
        description:
          'Innate - Prowl: While in  brush, Nidalee gains  10% bonus movement speed, increased to 30% when facing a nearby  visible enemy  champion, and persisting for 2 seconds after leaving brush.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Prowl:</b></span> While in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>, <b>Nidalee</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10% <b>bonus</b> movement speed</span></span>, increased to <span style="color: #F5EE99; white-space:normal">30%</span> when facing a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="1400 range">nearby</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, and persisting for 2 seconds after leaving brush.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate - Prowl:',
            raw: ' While in  brush, Nidalee gains  10% bonus movement speed, increased to 30% when facing a nearby  visible enemy  champion, and persisting for 2 seconds after leaving brush.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed, increased to 30in  brush, Nidalee gains  10',
            pre: 'While in  brush, Nidalee gains  10% bonus movement speed, increased to 30% when facing a nearby  visible enemy  champion, and persisting for 2 seconds after leaving brush.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Innate - Hunt: Hitting  monsters or enemy champions with  Javelin Toss, or  Bushwhack while they are nearby, applies a Hunted mark and  reveals them for 4 seconds. During this time, Nidalee gains  10% bonus movement speed, increased to 30% when facing a nearby Hunted target.  Additionally, Nidalee's first use of  Takedown and  Pounce against Hunted targets are empowered.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Hunt:</b></span> Hitting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> or enemy champions with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Javelin Toss" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Javelin_Toss" title="Javelin Toss"><img alt="Javelin Toss" src="/wiki/images/Nidalee_Javelin_Toss.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Javelin_Toss" title="Nidalee/LoL">Javelin Toss</a></span></span></i>, or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Bushwhack" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Bushwhack" title="Bushwhack"><img alt="Bushwhack" src="/wiki/images/Nidalee_Bushwhack.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Bushwhack" title="Nidalee/LoL">Bushwhack</a></span></span></i> while they are <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="3000 range">nearby</span>, applies a <i>Hunted</i> mark and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveals</a></span> them for 4 seconds. During this time, <b>Nidalee</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10% <b>bonus</b> movement speed</span></span>, increased to <span style="color: #F5EE99; white-space:normal">30%</span> when facing a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="5500 range">nearby</span> <i>Hunted</i> target.  Additionally, <b>Nidalee\'s</b> first use of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Takedown" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Takedown" title="Takedown"><img alt="Takedown" src="/wiki/images/Nidalee_Takedown.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Takedown" title="Nidalee/LoL">Takedown</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Pounce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Pounce" title="Pounce"><img alt="Pounce" src="/wiki/images/Nidalee_Pounce.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Pounce" title="Nidalee/LoL">Pounce</a></span></span></i> against <i>Hunted</i> targets are empowered.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate - Hunt:',
            raw: ' Hitting  monsters or enemy champions with  Javelin Toss, or  Bushwhack while they are nearby, applies a Hunted mark and  reveals them for 4 seconds',
            damagetype: 'None',
            values: 4,
            units: 'total_ap',
            unitsText:
              'monsters or enemy champions with  Javelin Toss, or  Bushwhack while they are nearby, applies a Hunted mark and  reveals them for 4 seconds',
            pre: 'Hitting  monsters or enemy champions with  Javelin Toss, or  Bushwhack while they are nearby, applies a Hunted mark and  reveals them for 4 seconds',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'During this time, Nidalee gains  10% bonus movement speed, increased to 30% when facing a nearby Hunted target',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed, increased to 30this time, Nidalee gains  10',
            pre: 'During this time, Nidalee gains  10% bonus movement speed, increased to 30% when facing a nearby Hunted target',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The bonus movement speed from Prowl and Hunt can stack, but cannot exceed 30%.',
        descriptionHTML:
          'The <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> from <i>Prowl</i> and <i>Hunt</i> can stack, but cannot exceed <span style="color: #F5EE99; white-space:normal">30%</span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'The bonus movement speed from Prowl and Hunt can stack, but cannot exceed 30%.',
            min: 0,
            max: 10,
            description:
              'The bonus movement speed from Prowl and Hunt can stack, but cannot exceed 30%.',
            values: 3,
            valuesIsPercent: true,
            units: 'feastStacks',
            unitsText:
              '.bonus movement speed from Prowl and Hunt can stack, but cannot exceed 30',
            pre: 'The bonus movement speed from Prowl and Hunt can stack, but cannot exceed 30%.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies, Self',
    notes:
      '* <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Bushwhack" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Bushwhack" title="Bushwhack"><img alt="Bushwhack" src="/wiki/images/Nidalee_Bushwhack.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Bushwhack" title="Nidalee/LoL">Bushwhack</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveals</a></span> the target for 4 seconds even while <b>Nidalee</b> is not nearby.',
  },
  'Javelin Toss': {
    name: 'Javelin Toss',
    display_name: 'Javelin Toss',
    champion: 'Nidalee',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'JavelinToss.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '1500',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 80',
    speed: '1300',
    cast_time: '0.<small>25</small>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL" title="Nidalee"><img alt="Nidalee" src="/wiki/images/Nidalee_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL" title="Nidalee/LoL">Nidalee</a></span></span> hurls a javelin in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit based on distance travelled.',
    ],
    description: [
      {
        icon: '/wiki/images/Javelin Toss.png',
        description:
          'Active: Nidalee hurls a javelin in the target direction that deals magic damage to the first enemy hit, increased by 0% − 200% (based on distance traveled).',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nidalee</b> hurls a javelin in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-start="0;525" data-finish="200;1300" data-bot_values="0;40;80;120;160;200" data-top_values="525;680;835;990;1145;1300" data-bot_key="%">0% − 200% (based on distance traveled)</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Magic Damage:',
            values: '70 / 90 / 110 / 130 / 150 (+ 50% AP)',
            valuesHTML:
              '70 / 90 / 110 / 130 / 150 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '70 / 90 / 110 / 130 / 150 (+ 50% AP)',
            damagetype: 'Magic',
            values: [70, 90, 110, 130, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 90 / 110 / 130 / 150',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
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
      '* This ability will cast from wherever the caster is at the start of the cast time.\n<ul><li>The damage amplification is based on the distance from <b>Nidalee\'s</b> location at the <i>end</i> of the cast time to the struck target\'s center at the time of collision.\n<ul><li>The damage increase is very slightly higher than the spear\'s travel distance due to edge range behaviour of collisions and the distance being measured as the radius from the picked "origin" location at the end of the cast time, rather than just along the vector of the cast.</li>\n<li>The damage increase does not have distinct thresholds based on the distance the spear travelled.</li>\n<li>Picking Nidalee\'s location at the end of the cast time as the "origin" for the damage calculation may be unintended.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul></li></ul>',
  },
  Takedown: {
    name: 'Takedown',
    display_name: 'Takedown',
    champion: 'Nidalee',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'JavelinToss.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">6</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL" title="Nidalee\'s"><img alt="Nidalee\'s" src="/wiki/images/Nidalee_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL" title="Nidalee/LoL">Nidalee\'s</a></span></span> next basic attack within some time will gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> and deal <span style="color: #00B0F0; white-space:normal">magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>missing</b> health</span>.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Prowl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Prowl" title="Hunted"><img alt="Hunted" src="/wiki/images/Nidalee_Prowl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Prowl" title="Nidalee/LoL">Hunted</a></span></span> Bonus:</b></span> A <i>Hunted</i> target hit will take <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Takedown.png',
        description:
          "Active: Nidalee empowers her next basic attack within 10 seconds to have an  uncancellable windup, gain  75 bonus range and deal modified magic damage that is increased by an amount for every 1% of the target's missing health.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nidalee</b> empowers her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 10 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;75 <b>bonus</b> range</span> and deal <span style="color: #00B0F0; white-space:normal"><b>modified</b> magic damage</span> that is increased by an amount for every <span style="color: #1F995C; white-space:normal">1% of the target\'s <b>missing</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: " Nidalee empowers her next basic attack within 10 seconds to have an  uncancellable windup, gain  75 bonus range and deal modified magic damage that is increased by an amount for every 1% of the target's missing health.",
            healType: 'OutgoingHeals',
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'bonus_ad',
            unitsText:
              "of the target's missing health.empowers her next basic attack within 10 seconds to have an  uncancellable windup, gain  75 bonus range and deal modified magic damage that is increased by an amount for every 1",
            pre: "Nidalee empowers her next basic attack within 10 seconds to have an  uncancellable windup, gain  75 bonus range and deal modified magic damage that is increased by an amount for every 1% of the target's missing health.",
          },
        ],
        leveling: [
          {
            name: 'Minimum Magic Damage:',
            values: '5 / 30 / 55 / 80 (+ 75% AD) (+ 40% AP)',
            valuesHTML:
              '5 / 30 / 55 / 80 <span style="color:orange; white-space:normal">(+&nbsp;75% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
          {
            name: 'Increased Damage Modifier:',
            values: '1 / 1.25 / 1.5 / 1.75%',
            valuesHTML:
              '1 / 1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small>%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '5 / 30 / 55 / 80 (+ 75% AD) (+ 40% AP)',
            damagetype: 'Magic',
            values: [5, 30, 55, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 30 / 55 / 80',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 75% AD',
              },
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
            effectType: 'Damage',
            name: 'Increased Damage Modifier:',
            raw: '1 / 1.25 / 1.5 / 1.75%',
            damagetype: 'None',
            values: [1, 1.25, 1.5, 1.75],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75%',
          },
        ],
      },
      {
        description:
          "Hunt Bonus: Hitting a Hunted target  increases Takedown's damage by 40%.",
        descriptionHTML:
          '<span class="template_sbc"><b><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Prowl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Prowl" title="Hunt"><img alt="Hunt" src="/wiki/images/Nidalee_Prowl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Prowl" title="Nidalee/LoL">Hunt</a></span></span></i> Bonus:</b></span> Hitting a <i>Hunted</i> target <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increases</span> <i>Takedown\'s</i> damage by 40%.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Hunt Bonus:',
            raw: " Hitting a Hunted target  increases Takedown's damage by 40%.",
            damagetype: 'None',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: ".a Hunted target  increases Takedown's damage by 40",
            pre: "Hitting a Hunted target  increases Takedown's damage by 40%.",
          },
        ],
        leveling: [
          {
            name: 'Prowl-Enhanced Minimum Damage:',
            values: '7 / 42 / 77 / 112 (+ 105% AD) (+ 56% AP)',
            valuesHTML:
              '7 / 42 / 77 / 112 <span style="color:orange; white-space:normal">(+&nbsp;105% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;56% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Prowl-Enhanced Minimum Damage:',
            raw: '7 / 42 / 77 / 112 (+ 105% AD) (+ 56% AP)',
            damagetype: 'None',
            values: [7, 42, 77, 112],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7 / 42 / 77 / 112',
            children: [
              {
                values: 105,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 105% AD',
              },
              {
                values: 56,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 56% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          "Takedown  resets Nidalee's basic attack timer. Other damage converted to magic damage by Takedown are not increased by Takedown's respective effects. Nidalee loses Takedown's empowered attack immediately when she switches to  Human Form.",
        descriptionHTML:
          '<i>Takedown <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Nidalee\'s</b> basic attack timer. Other damage converted to <span style="color: #00B0F0; white-space:normal">magic damage</span> by Takedown are not increased by Takedown\'s respective effects. <b>Nidalee</b> loses Takedown\'s empowered attack immediately when she switches to <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Aspect of the Cougar" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Aspect_of_the_Cougar" title="Human Form"><img alt="Human Form" src="/wiki/images/Nidalee_Aspect_of_the_Cougar.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Aspect_of_the_Cougar" title="Nidalee/LoL">Human Form</a></span></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'basic',
    spellshield: true,
    notes:
      '* <i>Takedown\'s</i> attack deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span>, but also triggers spell effects by dealing an additional 0 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>.\n<ul><li>Increased damage to <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Prowl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Prowl" title="Hunted"><img alt="Hunted" src="/wiki/images/Nidalee_Prowl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Prowl" title="Nidalee/LoL">Hunted</a></span></span></i> targets is displayed as a <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike">cosmetic critical strike</a>: Unless <b>Nidalee</b> has critical strike chance and the attack rolled a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> naturally, it is unaffected by critical damage modifiers.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">Basic attacks</a></span> enhanced by <i>Takedown</i> convert <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a> damage from physical to magic, if it was not already magic. Their damage is however not increased by <i>Takedown</i>.</li>\n<li><i>Takedown\'s</i> damage will apply <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.</li>\n<li><a href="/wiki/Structures" class="mw-redirect" title="Structures">Structures</a> always take <i>Takedown\'s</i> minimum damage.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> - Parry interactions (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>).</li></ul>',
  },
  Bushwhack: {
    name: 'Bushwhack',
    display_name: 'Bushwhack',
    champion: 'Nidalee',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'Bushwhack.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '900',
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Detection radius">150</span>',
    cast_time: '0.<small>25</small>',
    cost: '30 / 35 / 40 / 45 / 50',
    costtype: 'Mana',
    cooldown: '13 / 12 / 11 / 10 / 9',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL" title="Nidalee"><img alt="Nidalee" src="/wiki/images/Nidalee_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL" title="Nidalee/LoL">Nidalee</a></span></span> lays a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">stealthed</a></span> that will spring upon contact with an enemy, continually dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> over a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Bushwhack.png',
        description:
          'Active: Nidalee lays a trap at the target location that becomes  stealthed after arming over 1.5 seconds, lasting for up to 120 seconds and granting  sight within its radius. The trap will spring upon contact with an enemy, dealing magic damage every second over 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nidalee</b> lays a trap at the target location that becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">stealthed</a></span> after arming over 1.<small>5</small> seconds, lasting for up to 120 seconds and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> within its radius. The trap will spring upon contact with an enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every second over 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Nidalee lays a trap at the target location that becomes  stealthed after arming over 1.5 seconds, lasting for up to 120 seconds and granting  sight within its radius',
            increasedStat: 'total_ap',
            values: 1,
            units: '',
            unitsText:
              'lays a trap at the target location that becomes  stealthed after arming over 1.5 seconds, lasting for up to 120 seconds and granting  sight within its radius',
            pre: 'Nidalee lays a trap at the target location that becomes  stealthed after arming over 1.5 seconds, lasting for up to 120 seconds and granting  sight within its radius',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The trap will spring upon contact with an enemy, dealing magic damage every second over 4 seconds.',
            damagetype: 'Magic',
            values: 4,
            units: 'total_ap',
            unitsText:
              'trap will spring upon contact with an enemy, dealing magic damage every second over 4 seconds.',
            pre: 'The trap will spring upon contact with an enemy, dealing magic damage every second over 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values: '10 / 20 / 30 / 40 / 50 (+ 5% AP)',
            valuesHTML:
              '10 / 20 / 30 / 40 / 50 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '10 / 20 / 30 / 40 / 50 (+ 5% AP)',
            damagetype: 'Magic',
            values: [10, 20, 30, 40, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 20 / 30 / 40 / 50',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 5% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Traps have  6 maximum health and can only be damaged by champion basic attacks (2 hit points from  ranged and 3 hit points from  melee). Up to a maximum of 4 / 6 / 8 / 10 (based on level) traps may be active at once.',
        descriptionHTML:
          'Traps have <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;6 <b>maximum</b> health</span></span> and can only be damaged by champion <a href="/wiki/Basic_attacks" class="mw-redirect" title="Basic attacks">basic attacks</a> (2 hit points from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> and 3 hit points from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span>). Up to a maximum of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="4;1" data-finish="10;16" data-bot_values="4;6;8;10" data-top_values="1;6;11;16">4 / 6 / 8 / 10 (based on level)</span> traps may be active at once.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Traps have  6 maximum health and can only be damaged by champion basic attacks (2 hit points from  ranged and 3 hit points from  melee)',
            healType: 'BonusHealth',
            values: 6,
            units: 'total_ad',
            unitsText:
              'have  6 maximum health and can only be damaged by champion basic attacks',
            pre: 'Traps have  6 maximum health and can only be damaged by champion basic attacks',
            children: [
              {
                values: 2,
                user: 'none',
                units: '',
                unitsText:
                  'hit points from  ranged and 3 hit points from  melee',
                pre: '2 hit points from  ranged and 3 hit points from  melee',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Up to a maximum of 4 / 6 / 8 / 10 (based on level) traps may be active at once.',
            damagetype: 'None',
            values: [],
            basedOn: 'level',
            units: 'total_ap',
            unitsText: 'traps may be active at once.',
            pre: 'Up to a maximum of 4 / 6 / 8 / 10',
            post: 'traps may be active at once.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'See Pets for more details about traps.',
        descriptionHTML:
          '<i>See <a href="/wiki/Nidalee/LoL#Pets" title="Nidalee/LoL">Pets</a> for more details about traps.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'dot',
    spellshield: true,
    notes: '* No additional notes.',
  },
  Pounce: {
    name: 'Pounce',
    display_name: 'Pounce',
    champion: 'Nidalee',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'Bushwhack.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '375 / 750',
    effect_radius: '200 / 250',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">6</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> Killing an enemy or using <i>Pounce\'s</i> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Prowl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Prowl" title="Hunted"><img alt="Hunted" src="/wiki/images/Nidalee_Prowl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Prowl" title="Nidalee/LoL">Hunted</a></span></span></i> bonus will <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduce</span> <i>Pounce\'s</i> cooldown.',
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL" title="Nidalee"><img alt="Nidalee" src="/wiki/images/Nidalee_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL" title="Nidalee/LoL">Nidalee</a></span></span> dashes in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies upon arrival.',
      '<span class="template_sbc"><b><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Prowl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Prowl" title="Hunted"><img alt="Hunted" src="/wiki/images/Nidalee_Prowl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Prowl" title="Nidalee/LoL">Hunted</a></span></span></i> Bonus:</b></span> <i>Pounce</i> has increased range when cast near <i>Hunted</i> targets.',
    ],
    description: [
      {
        description:
          "Passive: Killing an enemy while in Cougar Form or using Pounce's Hunt bonus reduces Pounce's  current cooldown to a minimum value.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Killing an enemy while in <i>Cougar Form</i> or using <i>Pounce\'s Hunt</i> bonus reduces <i>Pounce\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> to a minimum value.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Reduced Cooldown:',
            values: '3 / 2.5 / 2 / 1.5',
            valuesHTML:
              '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste">3 / 2.<small>5</small> / 2 / 1.<small>5</small></span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Reduced Cooldown:',
            raw: '3 / 2.5 / 2 / 1.5',
            values: [3, 2.5, 2, 1.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 2.5 / 2 / 1.5',
          },
        ],
      },
      {
        icon: '/wiki/images/Pounce.png',
        description:
          'Active: Nidalee  leaps a fixed distance in the target direction. Upon arrival, she deals magic damage to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nidalee</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> a fixed distance in the target direction. Upon arrival, she deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 110 / 160 / 210 (+ 30% AP)',
            valuesHTML:
              '60 / 110 / 160 / 210 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 110 / 160 / 210 (+ 30% AP)',
            damagetype: 'Magic',
            values: [60, 110, 160, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 110 / 160 / 210',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Hunted Bonus: Nidalee can perform Pounce from an increased range on a Hunted enemy closest to the cursor. She can Pounce to a target location near a Hunted enemy if she is close to them.',
        descriptionHTML:
          '<span class="template_sbc"><b><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Prowl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Prowl" title="Hunted"><img alt="Hunted" src="/wiki/images/Nidalee_Prowl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Prowl" title="Nidalee/LoL">Hunted</a></span></span></i> Bonus:</b></span> <b>Nidalee</b> can perform <i>Pounce</i> from an increased range on a <i>Hunted</i> enemy closest to the cursor. She can <i>Pounce</i> to a target location near a <i>Hunted</i> enemy if she is close to them.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Takedown and  Aspect of the Cougar can be cast during the dash. Pounce will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Takedown" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Takedown" title="Takedown"><img alt="Takedown" src="/wiki/images/Nidalee_Takedown.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Takedown" title="Nidalee/LoL">Takedown</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Aspect of the Cougar" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Aspect_of_the_Cougar" title="Aspect of the Cougar"><img alt="Aspect of the Cougar" src="/wiki/images/Nidalee_Aspect_of_the_Cougar.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Aspect_of_the_Cougar" title="Nidalee/LoL">Aspect of the Cougar</a></span></span> can be cast during the dash. Pounce will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a> / <a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a>',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* <b>Pounce</b> will not receive the reduced cooldown if the target becomes <i>Hunted</i> mid-air.\n<ul><li><b>Pounce</b> without a <b>Hunted</b> target will have a fixed distance and use <a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">direction-targeting</a>.</li>\n<li><b>Pounce</b> in the direction of a <b>Hunted</b> target that is inside of normal ability range will use <a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">location-targeting</a> and place <b>Nidalee</b> at the target location.</li>\n<li><b>Pounce</b> on a <b>Hunted</b> target that is out of normal ability range will use <a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">unit-targeting</a> and place <b>Nidalee</b> on the side of the target that the target is facing.</li>\n<li><b>Pounce</b> on a <b>Hunted</b> target will extend the remaining duration of the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Prowl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Prowl" title="Hunted"><img alt="Hunted" src="/wiki/images/Nidalee_Prowl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Prowl" title="Nidalee/LoL">Hunted</a></span></span> debuff on the target by 1.<small>5</small> seconds.</li></ul>',
  },
  'Primal Surge': {
    name: 'Primal Surge',
    display_name: 'Primal Surge',
    champion: 'Nidalee',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'PrimalSurge.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '900',
    cast_time: '0.<small>25</small>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL" title="Nidalee"><img alt="Nidalee" src="/wiki/images/Nidalee_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL" title="Nidalee/LoL">Nidalee</a></span></span> revitalizes herself or the target allied champion, granting <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> the target based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Primal Surge.png',
        description:
          "Active: Nidalee revitalizes herself or the target allied champion, granting the target  bonus attack speed for 7 seconds and  healing them for an amount that is increased by 0% − 100% (based on target's missing health).",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nidalee</b> revitalizes herself or the target allied champion, granting the target <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 7 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> them for an amount that is increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_label="Heal increase" data-top_label="target\'s missing health" data-displayformula="1% per 0.95% of target\'s \'\'\'missing\'\'\' health" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;9.5;19;28.5;38;47.5;57;66.5;76;85.5;95" data-bot_key="%" data-top_key="%">0% − 100% (based on target\'s <b>missing</b> health)</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: " Nidalee revitalizes herself or the target allied champion, granting the target  bonus attack speed for 7 seconds and  healing them for an amount that is increased by 0% − 100% (based on target's missing health).",
            healType: 'OutgoingHeals',
            values: 7,
            valuesIsPercent: true,
            basedOn: "target's missing health",
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'Nidalee revitalizes herself or the target allied champion, granting the target  bonus attack speed for 7 seconds and  healing them for an amount that is increased by 0% − 100%',
            post: '.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '20 / 30 / 40 / 50 / 60%',
            valuesHTML: '20 / 30 / 40 / 50 / 60%',
          },
          {
            name: 'Minimum Heal:',
            values: '35 / 50 / 65 / 80 / 95 (+ 27.5% AP)',
            valuesHTML:
              '35 / 50 / 65 / 80 / 95 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;27.<small>5</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '20 / 30 / 40 / 50 / 60%',
            values: [20, 30, 40, 50, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60%',
          },
          {
            effectType: 'Heal',
            name: 'Minimum Heal:',
            raw: '35 / 50 / 65 / 80 / 95 (+ 27.5% AP)',
            healType: 'DrainEffect',
            values: [35, 50, 65, 80, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 50 / 65 / 80 / 95',
            children: [
              {
                values: 27.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 27.5% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Allies',
    spelleffects: 'Heal',
    notes:
      '* The <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> will persist through <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Aspect of the Cougar 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Aspect_of_the_Cougar_2" title="Cougar Form"><img alt="Cougar Form" src="/wiki/images/Nidalee_Aspect_of_the_Cougar_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Aspect_of_the_Cougar_2" title="Nidalee/LoL">Cougar Form</a></span></span> if <b>Nidalee</b> uses <i>Primal Surge</i> on herself.',
  },
  Swipe: {
    name: 'Swipe',
    display_name: 'Swipe',
    champion: 'Nidalee',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'PrimalSurge.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Center-to-edge, picks its targets at cast start">310</span>',
    angle: '180°',
    cast_time: '0.<small>25</small>',
    cooldown: '6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL" title="Nidalee"><img alt="Nidalee" src="/wiki/images/Nidalee_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL" title="Nidalee/LoL">Nidalee</a></span></span> slashes in an arc in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Swipe.png',
        description:
          'Active: Nidalee slashes in an arc in the target direction, dealing magic damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nidalee</b> slashes in an arc in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 140 / 200 / 260 (+ 45% AP)',
            valuesHTML:
              '80 / 140 / 200 / 260 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 140 / 200 / 260 (+ 45% AP)',
            damagetype: 'Magic',
            values: [80, 140, 200, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 140 / 200 / 260',
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
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.\n<ul><li><ul><li>The visual effects will be seen from her position if she moves however.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li></ul>',
  },
  'Aspect of the Cougar': {
    name: 'Aspect of the Cougar',
    display_name: 'Aspect of the Cougar',
    champion: 'Nidalee',
    skill: 'R',
    maxrank: 4,
    image: {
      full: 'AspectOfTheCougar.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown: '3',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL" title="Nidalee"><img alt="Nidalee" src="/wiki/images/Nidalee_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL" title="Nidalee/LoL">Nidalee</a></span></span> switches between her <b>Human Form</b> and <b>Cougar Form</b>.',
      '<span class="template_sbc"><b><img alt="Aspect of the Cougar.png" src="/wiki/images/Nidalee_Aspect_of_the_Cougar.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> Cougar Form:</b></span> <b>Nidalee</b> transforms into a cougar, gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> attacks and access to her cougar abilities.',
      '<span class="template_sbc"><b><img alt="Aspect of the Cougar 2.png" src="/wiki/images/Nidalee_Aspect_of_the_Cougar_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> Human Form:</b></span> <b>Nidalee</b> transforms into a human, gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> attacks and access to her human abilities. While in <b>Human Form</b>, applying a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Prowl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Prowl" title="Hunted"><img alt="Hunted" src="/wiki/images/Nidalee_Prowl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Prowl" title="Nidalee/LoL">Hunted</a></span></span></i> mark will <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reset</span> <i>Aspect of the Cougar\'s</i> cooldown.',
      "<b>Nidalee</b> begins with one rank in <i>Aspect of the Cougar</i>. <b>Cougar Form's</b> abilities scale based on <i>Aspect of the Cougar's</i> rank.",
    ],
    description: [
      {
        description:
          'Active: Nidalee switches between her Human Form and Cougar Form.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nidalee</b> switches between her <span class="template_sbc"><b>Human Form</b></span> and <span class="template_sbc"><b>Cougar Form</b></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Aspect of the Cougar.png',
        description:
          'Cougar Form: Nidalee transforms into a cougar, gaining  melee attacks with  125 range and access to her cougar abilities.',
        descriptionHTML:
          '<span class="template_sbc"><b>Cougar Form:</b></span> <b>Nidalee</b> transforms into a cougar, gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> attacks with <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;125 range</span> and access to her cougar abilities.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Cougar Form:',
            raw: ' Nidalee transforms into a cougar, gaining  melee attacks with  125 range and access to her cougar abilities.',
            increasedStat: 'total_ad',
            values: 1,
            units: '',
            unitsText:
              'transforms into a cougar, gaining  melee attacks with  125 range and access to her cougar abilities.',
            pre: 'Nidalee transforms into a cougar, gaining  melee attacks with  125 range and access to her cougar abilities.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Aspect of the Cougar 2.png',
        description:
          "Human Form: Nidalee transforms into a human, gaining  ranged attacks with  525 range and access to her human abilities. While in this form, applying a  Hunted mark will reset Aspect of the Cougar's  cooldown.",
        descriptionHTML:
          '<span class="template_sbc"><b>Human Form:</b></span> <b>Nidalee</b> transforms into a human, gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> attacks with <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;525 range</span> and access to her human abilities. While in this form, applying a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Prowl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Prowl" title="Hunted"><img alt="Hunted" src="/wiki/images/Nidalee_Prowl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Prowl" title="Nidalee/LoL">Hunted</a></span></span></i> mark will reset <i>Aspect of the Cougar\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Human Form:',
            raw: ' Nidalee transforms into a human, gaining  ranged attacks with  525 range and access to her human abilities',
            increasedStat: 'total_ad',
            values: 5,
            units: '',
            unitsText:
              'transforms into a human, gaining  ranged attacks with  525 range and access to her human abilities',
            pre: 'Nidalee transforms into a human, gaining  ranged attacks with  525 range and access to her human abilities',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Nidalee begins with one rank in Aspect of the Cougar and can increase it at levels 6, 11, and 16. Cougar Form's abilities scale based on Aspect of the Cougar's rank.",
        descriptionHTML:
          '<b>Nidalee</b> begins with one rank in <i>Aspect of the Cougar</i> and can increase it at levels 6, 11, and 16. <span class="template_sbc"><b>Cougar Form\'s</b></span> abilities scale based on <i>Aspect of the Cougar\'s</i> rank.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Nidalee begins with one rank in Aspect of the Cougar and can increase it at levels 6, 11, and 16',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'begins with one rank in Aspect of the Cougar and can increase it at levels 6, 11, and 16',
            pre: 'Nidalee begins with one rank in Aspect of the Cougar and can increase it at levels 6, 11, and 16',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '*Transformations do not count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.',
  },
} satisfies { [skillName in string]: SkillData };
