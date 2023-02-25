import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Ezreal';

export default {
  'Rising Spell Force': {
    name: 'Rising Spell Force',
    display_name: 'Rising Spell Force',
    champion: 'Ezreal',
    skill: 'I',
    image: {
      full: 'Ezreal_RisingSpellForce.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ezreal" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ezreal/LoL" title="Ezreal\'s"><img alt="Ezreal\'s" src="/wiki/images/Ezreal_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ezreal/LoL" title="Ezreal/LoL">Ezreal\'s</a></span></span> abilities generate stacks for each enemy hit, up to a cap.',
      '<span class="template_sbc"><b>Rising Spell Force:</b></span> For each stack, <b>Ezreal</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
    ],
    description: [
      {
        description:
          'Innate: Ezreal generates a stack of Rising Spell Force for each enemy hit by his abilities, lasting for 6 seconds, refreshing on subsequent hits, and stacking up to 5 times.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Ezreal</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Rising Spell Force</i> for each enemy hit by his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, lasting for 6 seconds, refreshing on subsequent hits, and stacking up to 5 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: ' Ezreal generates a stack of Rising Spell Force for each enemy hit by his abilities, lasting for 6 seconds, refreshing on subsequent hits, and stacking up to 5 times.',
            min: 0,
            max: 10,
            description:
              ' Ezreal generates a stack of Rising Spell Force for each enemy hit by his abilities, lasting for 6 seconds, refreshing on subsequent hits, and stacking up to 5 times.',
            values: 6,
            units: 'feastStacks',
            unitsText:
              'generates a stack of Rising Spell Force for each enemy hit by his abilities, lasting for 6 seconds, refreshing on subsequent hits, and stacking up to 5 times.',
            pre: 'Ezreal generates a stack of Rising Spell Force for each enemy hit by his abilities, lasting for 6 seconds, refreshing on subsequent hits, and stacking up to 5 times.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Rising Spell Force.png',
        description:
          'Rising Spell Force: For each stack, Ezreal gains  10% bonus attack speed, up to a maximum of 50%.',
        descriptionHTML:
          '<span class="template_sbc"><b>Rising Spell Force:</b></span> For each stack, <b>Ezreal</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">10% <b>bonus</b> attack speed</span></span>, up to a maximum of <span style="color:orangered; white-space:normal">50%</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Rising Spell Force:',
            raw: ' For each stack, Ezreal gains  10% bonus attack speed, up to a maximum of 50%.',
            increasedStat: 'feastStacks',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'bonus attack speed, up to a maximum of 50each stack, Ezreal gains  10',
            pre: 'For each stack, Ezreal gains  10% bonus attack speed, up to a maximum of 50%.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <i>Rising Spell Force</i> will stack even if the abilities hit were blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shields</a></span>.',
  },
  'Mystic Shot': {
    name: 'Mystic Shot',
    display_name: 'Mystic Shot',
    champion: 'Ezreal',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'EzrealQ.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1200',
    width: '120',
    speed: '2000',
    cast_time: '0.<small>25</small>',
    cost: '28 / 31 / 34 / 37 / 40',
    costtype: 'Mana',
    cooldown:
      '5.<small>5</small> / 5.<small>25</small> / 5 / 4.<small>75</small> / 4.<small>5</small>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ezreal" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ezreal/LoL" title="Ezreal"><img alt="Ezreal" src="/wiki/images/Ezreal_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ezreal/LoL" title="Ezreal/LoL">Ezreal</a></span></span> fires a bolt of energy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit.',
      'If the bolt hits an enemy, all of <b>Ezreal\'s</b> ability cooldowns are <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span>.',
      '<i>Mystic Shot</i> applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects.',
    ],
    description: [
      {
        icon: '/wiki/images/Mystic Shot.png',
        description:
          'Active: Ezreal fires a bolt of energy in the target direction that deals physical damage to the first enemy hit and applies  on-hit and on-attack effects at 100% effectiveness.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ezreal</b> fires a bolt of energy in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Ezreal fires a bolt of energy in the target direction that deals physical damage to the first enemy hit and applies  on-hit and on-attack effects at 100% effectiveness.',
            damagetype: 'Physical',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness.fires a bolt of energy in the target direction that deals physical damage to the first enemy hit and applies  on-hit and on-attack effects at 100',
            pre: 'Ezreal fires a bolt of energy in the target direction that deals physical damage to the first enemy hit and applies  on-hit and on-attack effects at 100% effectiveness.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '20 / 45 / 70 / 95 / 120 (+ 130% AD) (+ 15% AP)',
            valuesHTML:
              '20 / 45 / 70 / 95 / 120 <span style="color:orange; white-space:normal">(+&nbsp;130% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 45 / 70 / 95 / 120 (+ 130% AD) (+ 15% AP)',
            damagetype: 'Physical',
            values: [20, 45, 70, 95, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70 / 95 / 120',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 130% AD',
              },
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          "If Mystic Shot successfully hits an enemy, the  current cooldowns of Ezreal's abilities, including Mystic Shot's, are reduced by 1.5 seconds.",
        descriptionHTML:
          'If <i>Mystic Shot</i> successfully hits an enemy, the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> of <b>Ezreal\'s</b> abilities, including <i>Mystic Shot\'s</i>, are reduced by 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "If Mystic Shot successfully hits an enemy, the  current cooldowns of Ezreal's abilities, including Mystic Shot's, are reduced by 1.5 seconds.",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "Mystic Shot successfully hits an enemy, the  current cooldowns of Ezreal's abilities, including Mystic Shot's, are reduced by 1.5 seconds.",
            pre: "If Mystic Shot successfully hits an enemy, the  current cooldowns of Ezreal's abilities, including Mystic Shot's, are reduced by 1.5 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'special',
    onhiteffects: 'True',
    spellshield: 'Special',
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* <i>Mystic Shot</i> deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span>, but also triggers spell effects by dealing an additional 0 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>.\n<ul><li><i>Mystic Shot</i> benefits from <a href="/wiki/Life_steal" title="Life steal">life steal</a>, <a href="/wiki/Omnivamp" class="mw-redirect" title="Omnivamp">omnivamp</a>, and <a href="/wiki/Physical_vamp" class="mw-redirect" title="Physical vamp">physical vamp</a>, but not <a href="/wiki/Spell_vamp" class="mw-redirect" title="Spell vamp">spell vamp</a>.</li>\n<li>Even if the ability is blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> it will still trigger the cooldown reduction.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li><i>Mystic Shot</i> will be buffered and cast when the cooldown ends if the player attempts to cast it within 0.<small>05</small> seconds of the cooldown ending.</li></ul>',
    video: 'Ezreal QVideo.ogv',
  },
  'Essence Flux': {
    name: 'Essence Flux',
    display_name: 'Essence Flux',
    champion: 'Ezreal',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'EzrealW.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1200',
    width: '160',
    speed: '1700',
    cast_time: '0.<small>25</small>',
    cost: '50',
    costtype: 'Mana',
    cooldown: '12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ezreal" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ezreal/LoL" title="Ezreal"><img alt="Ezreal" src="/wiki/images/Ezreal_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ezreal/LoL" title="Ezreal/LoL">Ezreal</a></span></span> fires an orb that shortly marks the first enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structure</a></span> hit.',
      'His next attack or ability on the target detonates the mark, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>. If the mark was detonated by an ability, <b>Ezreal</b> restores <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Essence Flux.png',
        description:
          'Active: Ezreal fires an orb in the target direction that marks the first enemy  champion, epic  monster, or structure hit for 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ezreal</b> fires an orb in the target direction that marks the first enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, or <a href="/wiki/Structures" class="mw-redirect" title="Structures">structure</a> hit for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Ezreal fires an orb in the target direction that marks the first enemy  champion, epic  monster, or structure hit for 4 seconds.',
            values: 4,
            units: 'kindredMarks',
            unitsText:
              'fires an orb in the target direction that marks the first enemy  champion, epic  monster, or structure hit for 4 seconds.',
            pre: 'Ezreal fires an orb in the target direction that marks the first enemy  champion, epic  monster, or structure hit for 4 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'His next basic attack or ability against the target detonates the mark to deal them bonus magic damage.',
        descriptionHTML:
          'His next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or <a href="/wiki/Champion_ability" title="Champion ability">ability</a> against the target detonates the mark to deal them <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values:
              '80 / 135 / 190 / 245 / 300 (+ 60% bonus AD) (+ 70 / 75 / 80 / 85 / 90% AP)',
            valuesHTML:
              '80 / 135 / 190 / 245 / 300 <span style="color:orange; white-space:normal">(+&nbsp;60% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70 / 75 / 80 / 85 / 90% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '80 / 135 / 190 / 245 / 300 (+ 60% bonus AD) (+ 70 / 75 / 80 / 85 / 90% AP)',
            damagetype: 'Magic',
            values: [80, 135, 190, 245, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 135 / 190 / 245 / 300',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60% bonus AD',
              },
              {
                values: [70, 75, 80, 85, 90],
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70 / 75 / 80 / 85 / 90% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'If the mark was detonated with an ability, Ezreal restores  60 mana plus the mana cost of that ability.',
        descriptionHTML:
          'If the mark was detonated with an ability, <b>Ezreal</b> restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">60 mana</span></span> plus the <span style="color: #0099CC; white-space:normal">mana cost</span> of that ability.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If the mark was detonated with an ability, Ezreal restores  60 mana plus the mana cost of that ability.',
            values: 6,
            units: 'kindredMarks',
            unitsText:
              'the mark was detonated with an ability, Ezreal restores  60 mana plus the mana cost of that ability.',
            pre: 'If the mark was detonated with an ability, Ezreal restores  60 mana plus the mana cost of that ability.',
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
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* The application of <i>Essence Flux</i> deals 0 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span> (<span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: damage type?), triggering <a href="/wiki/Combat_status" title="Combat status">in-combat</a> effects such as drawing turret aggro and <a href="/wiki/Monster#Monster_Behavior" title="Monster">monster aggression</a>, <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Sudden Impact" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sudden_Impact_(Rune)" title="Sudden Impact"><img alt="Sudden Impact" src="/wiki/images/Sudden_Impact_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Sudden_Impact_(Rune)" class="mw-redirect" title="Sudden Impact (Rune)">Sudden Impact</a></span></span> or applying <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Elixir of Sorcery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elixir_of_Sorcery" title="Elixir of Sorcery"><img alt="Elixir of Sorcery" src="/wiki/images/Elixir_of_Sorcery_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elixir_of_Sorcery" title="Elixir of Sorcery">Elixir of Sorcery</a></span></span>.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">Block</a></span> will not prevent the mark from being triggered.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">Dodge</a></span> prevents the mark from being triggered by a basic attack.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> prevents the mark from being triggered by an ability. If the mark is triggered by a basic attack, spell shield will prevent <i>Essence Flux\'s</i> damage.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    video: 'Ezreal WVideo.ogv',
  },
  'Arcane Shift': {
    name: 'Arcane Shift',
    display_name: 'Arcane Shift',
    champion: 'Ezreal',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'EzrealE.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '475',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Homing missile range">750</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Homing missile speed">2000</span>',
    cast_time: '0.<small>25</small>',
    cost: '90',
    costtype: 'Mana',
    cooldown: '26 / 23 / 20 / 17 / 14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ezreal" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ezreal/LoL" title="Ezreal"><img alt="Ezreal" src="/wiki/images/Ezreal_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ezreal/LoL" title="Ezreal/LoL">Ezreal</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target location and fires a bolt that strikes the nearest enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Arcane Shift.png',
        description:
          'Active: Ezreal  blinks from his current location to up to 475 units towards the target location, then fires a homing bolt towards the nearest enemy that deals magic damage and  reveals them for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ezreal</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> from his current location to up to 475 units towards the target location, then fires a homing bolt towards the nearest enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Ezreal  blinks from his current location to up to 475 units towards the target location, then fires a homing bolt towards the nearest enemy that deals magic damage and  reveals them for 1 second.',
            damagetype: 'Magic',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'blinks from his current location to up to 475 units towards the target location, then fires a homing bolt towards the nearest enemy that deals magic damage and  reveals them for 1 second.',
            pre: 'Ezreal  blinks from his current location to up to 475 units towards the target location, then fires a homing bolt towards the nearest enemy that deals magic damage and  reveals them for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 130 / 180 / 230 / 280 (+ 50% bonus AD) (+ 75% AP)',
            valuesHTML:
              '80 / 130 / 180 / 230 / 280 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 130 / 180 / 230 / 280 (+ 50% bonus AD) (+ 75% AP)',
            damagetype: 'Magic',
            values: [80, 130, 180, 230, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 130 / 180 / 230 / 280',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
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
      {
        description:
          'Arcane Shift prioritizes firing at the nearest enemy marked by  Essence Flux.',
        descriptionHTML:
          '<i>Arcane Shift</i> prioritizes firing at the nearest enemy marked by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ezreal" data-ability="Essence Flux" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ezreal/LoL#Essence_Flux" title="Essence Flux"><img alt="Essence Flux" src="/wiki/images/Ezreal_Essence_Flux.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ezreal/LoL#Essence_Flux" title="Ezreal/LoL">Essence Flux</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The target does not have to be  visible to be hit by this ability. Arcane Shift will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be hit by this ability. Arcane Shift will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies, Self',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* If <b>Ezreal</b> is moved during the cast time, his range to blink will update accordingly. This does not exceed the maximum target range.\n<ul><li>The target is revealed as soon as <b>Ezreal</b> fires the missile at them.</li></ul>',
    video: 'Ezreal EVideo.ogv',
  },
  'Trueshot Barrage': {
    name: 'Trueshot Barrage',
    display_name: 'Trueshot Barrage',
    champion: 'Ezreal',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'EzrealR.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: 'Global',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="missile width">320</span>',
    speed: '2000',
    cast_time: '1',
    cost: '100',
    costtype: 'Mana',
    cooldown: '120 / 112.<small>5</small> / 105 / 97.<small>5</small> / 90',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ezreal" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ezreal/LoL" title="Ezreal"><img alt="Ezreal" src="/wiki/images/Ezreal_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ezreal/LoL" title="Ezreal/LoL">Ezreal</a></span></span> winds up to fire a powerful bolt of energy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Trueshot Barrage.png',
        description:
          'Active: Ezreal fires an arc of energy in the target direction that briefly grants  sight of its surroundings and deals magic damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ezreal</b> fires an arc of energy in the target direction that briefly grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '350 / 425 / 500 / 575 / 650 (+ 100% bonus AD) (+ 90% AP)',
            valuesHTML:
              '350 / 425 / 500 / 575 / 650 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '350 / 425 / 500 / 575 / 650 (+ 100% bonus AD) (+ 90% AP)',
            damagetype: 'Magic',
            values: [350, 425, 500, 575, 650],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '350 / 425 / 500 / 575 / 650',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
              {
                values: 90,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
        ],
      },
      {
        description: 'Minions and non-epic  monsters take 50% reduced damage.',
        descriptionHTML:
          '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">Minions</a></span> and non-epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> take 50% reduced damage.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Minions and non-epic  monsters take 50% reduced damage.',
            damagetype: 'None',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'reduced damage.and non-epic  monsters take 50',
            pre: 'Minions and non-epic  monsters take 50% reduced damage.',
          },
        ],
        leveling: [
          {
            name: 'Reduced Damage:',
            values:
              '175 / 212.5 / 250 / 287.5 / 325 (+ 50% bonus AD) (+ 45% AP)',
            valuesHTML:
              '175 / 212.<small>5</small> / 250 / 287.<small>5</small> / 325 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage:',
            raw: '175 / 212.5 / 250 / 287.5 / 325 (+ 50% bonus AD) (+ 45% AP)',
            damagetype: 'None',
            values: [175, 212.5, 250, 287.5, 325],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 212.5 / 250 / 287.5 / 325',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
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
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>Trueshot Barrage\'s</i> projectile has an <img alt="Trueshot Barrage Minimap.png" src="/wiki/images/Trueshot_Barrage_Minimap.png" decoding="async" loading="lazy" width="40" height="40" class="lazyload"> icon on the mini-map while it is in flight. It can be seen by only <b>Ezreal</b> and his allies.\n<ul><li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>',
    video: 'Ezreal RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
