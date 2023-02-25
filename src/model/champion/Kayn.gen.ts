import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Kayn';

export default {
  'The Darkin Scythe': {
    name: 'The Darkin Scythe',
    display_name: 'The Darkin Scythe',
    champion: 'Kayn',
    skill: 'I',
    image: {
      full: 'Kayn_Passive_Primary.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span>Whenever <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Kayn"><img alt="Kayn" src="/wiki/images/Kayn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Kayn</a></span></span> scores champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedowns</a></span> or deals damage against champions, he earns orbs that unlocks his <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Darkin"><img alt="Darkin" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Darkin</a></span></span> and <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Shadow Assassin"><img alt="Shadow Assassin" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Shadow Assassin</a></span></span> forms. <b>Kayn</b> can return to the <a href="/wiki/Spawn" title="Spawn">summoning platform</a> to transform, permanently empowering his abilities.',
      '<img alt="Shadow Assassin OriginalSquare.png" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Shadow Assassin Bonus:</b></span> If <b>Kayn</b> has been <a href="/wiki/Combat_status" title="Combat status">out of combat</a> for a period, his attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> for a short time upon entering combat. <br><br><img alt="Rhaast OriginalSquare.png" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Darkin Bonus:</b></span> <b>Rhaast</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for a portion of the damage he deals to enemy champions with his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>.',
    ],
    description: [
      {
        icon: '/wiki/images/The_Darkin_Scythe.png',
        description:
          'Innate: Kayn has a secondary experience bar that tracks progress toward his  Darkin and  Shadow Assassin forms. He gathers orbs from champion  takedowns and each instance of damage (excluding damage over time) dealt against champions. Once he has earned enough orbs, he unlocks a form based on whether he earned more from  melee or  ranged champions (for  Darkin and  Shadow Assassin, respectively), with the other form unlocked later.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Kayn</b> has a secondary <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Additional info in the notes below">experience bar</span> that tracks progress toward his <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Darkin"><img alt="Darkin" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Darkin</a></span></span> and <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Shadow Assassin"><img alt="Shadow Assassin" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Shadow Assassin</a></span></span> forms. He gathers orbs from champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedowns</a></span> and each instance of damage (excluding <a href="/wiki/Damage_over_time" title="Damage over time">damage over time</a>) dealt against champions. Once he has earned enough orbs, he unlocks a form based on whether he earned more from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> champions (for <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Darkin"><img alt="Darkin" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Darkin</a></span></span> and <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Shadow Assassin"><img alt="Shadow Assassin" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Shadow Assassin</a></span></span>, respectively), with the other form unlocked later.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'He gathers orbs from champion  takedowns and each instance of damage (excluding damage over time) dealt against champions',
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'dealt against champions',
            pre: 'He gathers orbs from champion  takedowns and each instance of damage',
            post: 'dealt against champions',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'excluding damage over time',
                pre: 'excluding damage over time',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: 'Once he has earned enough orbs, he unlocks a form based on whether he earned more from  melee or  ranged champions (for  Darkin and  Shadow Assassin, respectively), with the other form unlocked later.',
            damagetype: 'None',
            values: 0,
            user: 'none',
            units: '',
            unitsText: ', with the other form unlocked later.',
            pre: 'Once he has earned enough orbs, he unlocks a form based on whether he earned more from  melee or  ranged champions',
            post: ', with the other form unlocked later.',
            children: [
              {
                values: 0,
                units: 'total_ad',
                unitsText: 'for  Darkin and  Shadow Assassin, respectively',
                pre: 'for  Darkin and  Shadow Assassin, respectively',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Kayn_Form_Selection_UI.png',
        description:
          "Kayn can move near the summoning platform to transform over 6 seconds, during which he is  invulnerable,  untargetable, and unable to act. Kayn cannot choose a form if he is unable to cast abilities. The transformation will grant a passive bonus and permanently empower some of Kayn's abilities based on the form chosen. He gains a one-time Homeguard once the transformation is complete.",
        descriptionHTML:
          '<b>Kayn</b> can move near the <a href="/wiki/Spawn" title="Spawn">summoning platform</a> to transform over 6 seconds, during which he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, and unable to act. <b>Kayn</b> cannot choose a form if he is unable to cast abilities. The transformation will grant a passive bonus and permanently empower some of <b>Kayn\'s</b> abilities based on the form chosen. He gains a one-time <a href="/wiki/Homeguard" title="Homeguard">Homeguard</a> once the transformation is complete.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Kayn can move near the summoning platform to transform over 6 seconds, during which he is  invulnerable,  untargetable, and unable to act',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'can move near the summoning platform to transform over 6 seconds, during which he is  invulnerable,  untargetable, and unable to act',
            pre: 'Kayn can move near the summoning platform to transform over 6 seconds, during which he is  invulnerable,  untargetable, and unable to act',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/The_Darkin_Scythe_A.png',
        description:
          'Shadow Assassin Bonus: If Kayn has been out of combat with enemy champions for over 8 seconds, or he casts  Umbral Trespass, he deals 15% − 45% (based on level) of post-mitigation damage dealt against enemy champions as bonus magic damage, lasting for 3 seconds upon entering combat and also applying on the first instance of damage dealt. If this effect is ready, it will not be lost by taking damage.',
        descriptionHTML:
          '<img alt="Shadow Assassin OriginalSquare.png" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Shadow Assassin Bonus:</b></span> If <b>Kayn</b> has been <a href="/wiki/Combat_status" title="Combat status">out of combat</a> with enemy champions for over 8 seconds, or he casts <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-ability="Umbral Trespass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL#Umbral_Trespass" title="Umbral Trespass"><img alt="Umbral Trespass" src="/wiki/images/Kayn_Umbral_Trespass.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL#Umbral_Trespass" title="Kayn/LoL">Umbral Trespass</a></span></span></i>, he deals <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;" data-finish="45;" data-bot_values="15;16.76;18.53;20.29;22.06;23.82;25.59;27.35;29.12;30.88;32.65;34.41;36.18;37.94;39.71;41.47;43.24;45" data-top_values="" data-bot_key="%">15% − 45% (based on level)</span> of <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt against enemy champions as <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, lasting for 3 seconds upon entering combat and also applying on the first instance of damage dealt. If this effect is ready, it will not be lost by taking damage.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Shadow Assassin Bonus:',
            raw: 'If Kayn has been out of combat with enemy champions for over 8 seconds, or he casts  Umbral Trespass, he deals 15% − 45% (based on level) of post-mitigation damage dealt against enemy champions as bonus magic damage, lasting for 3 seconds upon entering combat and also applying on the first instance of damage dealt',
            increasedStat: 'total_ap',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText:
              'of post-mitigation damage dealt against enemy champions as bonus magic damage, lasting for 3 seconds upon entering combat and also applying on the first instance of damage dealt',
            pre: 'If Kayn has been out of combat with enemy champions for over 8 seconds, or he casts  Umbral Trespass, he deals 15% − 45%',
            post: 'of post-mitigation damage dealt against enemy champions as bonus magic damage, lasting for 3 seconds upon entering combat and also applying on the first instance of damage dealt',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/The_Darkin_Scythe_R.png',
        description:
          'Darkin Bonus: Rhaast  heals for 20% − 30% (based on level) of the post-mitigation  physical damage that he deals to enemy champions with his abilities.',
        descriptionHTML:
          '<img alt="Rhaast OriginalSquare.png" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Darkin Bonus:</b></span> <b>Rhaast</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="30;" data-bot_values="20;20.59;21.18;21.76;22.35;22.94;23.53;24.12;24.71;25.29;25.88;26.47;27.06;27.65;28.24;28.82;29.41;30" data-top_values="" data-bot_key="%">20% − 30% (based on level)</span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage"><span style="color: #FF8C34; white-space:normal">physical damage</span></a></span> that he deals to enemy champions with his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Darkin Bonus:',
            raw: 'Rhaast  heals for 20% − 30% (based on level) of the post-mitigation  physical damage that he deals to enemy champions with his abilities.',
            healType: 'PhysicalVamp',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'of the post-mitigation  physical damage that he deals to enemy champions with his abilities.',
            pre: 'Rhaast  heals for 20% − 30%',
            post: 'of the post-mitigation  physical damage that he deals to enemy champions with his abilities.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* Entering transformation will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">destroy</a></span> in-flight <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span>.\n<dl><dt>The Orb System</dt></dl>\n<p>The experience is depicted as orbs that drop upon the ground. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">Melee</a></span> champions drop red orbs that grant progress towards <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Darkin"><img alt="Darkin" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Darkin</a></span></span>, while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> champions drop blue orbs that grant progress for <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Shadow Assassin"><img alt="Shadow Assassin" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Shadow Assassin</a></span></span>. Orbs will remain on the ground until automatically collected by <b>Kayn</b> regardless of range once he leaves <a href="/wiki/Combat_status" title="Combat status">combat</a>. The orbs will be collected even if <b>Kayn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>.\n</p><p>The experience bar above his portrait gauges his current progression, the color reflects the form with greater progress. <b>Kayn</b> can transform by interacting with his portrait, and can wait 4 minutes until the other form becomes available, reduced by 5 seconds for each collected orb of their type after that.\n</p>\n<ul><li><i>Melee</i> orbs grant 2 points per hit and 6 points per takedown.</li>\n<li><i>Ranged</i> orbs grant 3 points per hit and 7 points per takedown.</li>\n<li>The amount of points received per orb is multiplied by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="minutes" data-displayformula="Increases each second after 5 minutes. At 10 minutes it increases by 15% more per second until it caps at 13 minutes." data-bot_values="3;3;3.88;4.75;5.63;6.5;7.38;8.38;9.39;10.39" data-top_values="0;5;6;7;8;9;10;11;12;13">3 − 10.<small>39</small> (based on minutes)</span>.</li>\n<li>The bar gets filled up completely at 500 points.</li>\n<li>If the two forms are within 8% of each other, the last champion range type hit will determine the winner. If both types are hit at the same time, the trasformation will default to <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Darkin"><img alt="Darkin" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Darkin</a></span></span>.</li>\n<li>Each side\'s bar has a bucket system, starting at 60 points.\n<ul><li>Each time an orb is taken the system checks if there\'s an amount of points in the bucket equal to or higher than the amount received from the orb.<br>If there is, <b>Kayn</b> is given an additional orb of the same type he received, while also subtracting that amount of points from the bucket.</li>\n<li>The bucket fills by 0.<small>8</small> points per second if out of champion combat for 70 seconds.</li></ul></li>\n<li>Damage dealt by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">damage over time</a></span> effects and specifically <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="First Strike" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/First_Strike_(Rune)" title="First Strike"><img alt="First Strike" src="/wiki/images/First_Strike_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/First_Strike_(Rune)" class="mw-redirect" title="First Strike (Rune)">First Strike</a></span></span> will not grant orbs.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Shadow_Assassin_Kayn_Transformation_SFX.ogg    https://leagueoflegends.fandom.com/wiki/File:Darkin_Kayn_Transformation_SFX.ogg   Transformation alert.',
    yvideo: 'Kayn - Passive',
  },
  'Reaping Slash': {
    name: 'Reaping Slash',
    display_name: 'Reaping Slash',
    champion: 'Kayn',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KaynQ.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '350',
    cast_time: 'none',
    cost: '50',
    costtype: 'Mana',
    cooldown: '7 / 6.<small>5</small> / 6 / 5.<small>5</small> / 5',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Kayn"><img alt="Kayn" src="/wiki/images/Kayn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Kayn</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through. He then swings his scythe, dealing the same damage to surrounding enemies.',
      '<img alt="Rhaast OriginalSquare.png" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Darkin Bonus:</b></span> <i>Reaping Slash</i> deals damage based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Reaping_Slash.png',
        description:
          'Active: Kayn  dashes in the target direction, dealing physical damage to enemies he passes through. He then swings his scythe, dealing the same damage to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kayn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through. He then swings his scythe, dealing the same damage to nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '75 / 95 / 115 / 135 / 155 (+ 80% bonus AD)',
            valuesHTML:
              '75 / 95 / 115 / 135 / 155 <span style="color:orange; white-space:normal">(+&nbsp;80% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '75 / 95 / 115 / 135 / 155 (+ 80% bonus AD)',
            damagetype: 'Physical',
            values: [75, 95, 115, 135, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 95 / 115 / 135 / 155',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Both instances of Reaping Slash deal 40 bonus physical damage against  minions and  monsters.',
        descriptionHTML:
          'Both instances of <i>Reaping Slash</i> deal <span style="color: #FF8C34; white-space:normal">40 <b>bonus</b> physical damage</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Both instances of Reaping Slash deal 40 bonus physical damage against  minions and  monsters.',
            increasedStat: 'total_ap',
            values: 4,
            units: '',
            unitsText:
              'instances of Reaping Slash deal 40 bonus physical damage against  minions and  monsters.',
            pre: 'Both instances of Reaping Slash deal 40 bonus physical damage against  minions and  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Non-Champion Damage:',
            values: '115 / 135 / 155 / 175 / 195 (+ 80% bonus AD)',
            valuesHTML:
              '115 / 135 / 155 / 175 / 195 <span style="color:orange; white-space:normal">(+&nbsp;80% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Non-Champion Damage:',
            raw: '115 / 135 / 155 / 175 / 195 (+ 80% bonus AD)',
            damagetype: 'None',
            values: [115, 135, 155, 175, 195],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '115 / 135 / 155 / 175 / 195',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Reaping_Slash_R.png',
        description:
          "Darkin Bonus: Reaping Slash's damage is modified to deal 65% AD (+ 5% (+ 3.5% per 100 bonus AD) of the target's maximum health) physical damage for both instances. This damage has a cap against monsters that does not include the bonus damage.",
        descriptionHTML:
          '<img alt="Rhaast OriginalSquare.png" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Darkin Bonus:</b></span> <i>Reaping Slash\'s</i> damage is modified to deal <span style="color:orange; white-space:normal">65% AD</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;5% <span style="color:orange; white-space:normal">(+&nbsp;3.<small>5</small>% per 100 <b>bonus</b> AD)</span> of the target\'s <b>maximum</b> health)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> for both instances. This damage has a cap against monsters that does not include the <b>bonus</b> damage.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Darkin Bonus:',
            raw: "Reaping Slash's damage is modified to deal 65% AD (+ 5% (+ 3.5% per 100 bonus AD) of the target's maximum health) physical damage for both instances",
            healType: 'PhysicalVamp',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'physical damage for both instances',
            pre: "Reaping Slash's damage is modified to deal 65% AD",
            post: 'physical damage for both instances',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of the target's maximum health",
                pre: '+ 5%',
                post: "of the target's maximum health",
                children: [
                  {
                    values: 3.5,
                    valuesIsPercent: true,
                    units: 'bonus_ad',
                    unitsText: 'per 100 bonus AD',
                    pre: '+ 3.5% per 100 bonus AD',
                  },
                ],
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Capped Monster Damage per Hit:',
            values: '200 / 250 / 300 / 350 / 400',
            valuesHTML: '200 / 250 / 300 / 350 / 400',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Capped Monster Damage per Hit:',
            raw: '200 / 250 / 300 / 350 / 400',
            damagetype: 'None',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Reaping Slash's dash speed scales with Kayn's  total movement speed.",
        descriptionHTML:
          '<i>Reaping Slash\'s dash speed scales with <b>Kayn\'s</b> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>total</b> movement speed</span></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: 'Special',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> will block only a single instance of damage - either the dash or the slash.\n<ul><li>If the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>, <b>Kayn</b> will not swing his scythe.</li>\n<li><i>Reaping Slash\'s </i> swing can be performed quicker if the dash stops prematurely upon colliding with terrain.</li>\n<li>As the <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Shadow Assassin"><img alt="Shadow Assassin" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Shadow Assassin</a></span></span>, an alternate icon for <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-ability="Reaping Slash A" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL#Reaping_Slash_A" title="Reaping Slash"><img alt="Reaping Slash" src="/wiki/images/Kayn_Reaping_Slash_A.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL#Reaping_Slash_A" title="Kayn/LoL">Reaping Slash</a></span></span> is used but has no modified effect.</li>\n<li>Other abilities can be queued while casting <i>Reaping Slash</i>.</li>\n<li>All <a href="/wiki/Active_ability_items" title="Active ability items">item actives</a> can be used during <i>Reaping Slash</i>.\n<ul><li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stopwatch" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stopwatch" title="Stopwatch"><img alt="Stopwatch" src="/wiki/images/Stopwatch_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stopwatch" title="Stopwatch">Stopwatch</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Zhonya\'s Hourglass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass"><img alt="Zhonya\'s Hourglass" src="/wiki/images/Zhonya%27s_Hourglass_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass">Zhonya\'s Hourglass</a></span></span> will not stop the dash or the damage from occurring.</li>\n<li>Using an item active that has a dash (e.g. <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce"><img alt="Galeforce" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce</a></span></span>) will override <i>Reaping Slash\'s</i> dash if used before it ends, preventing the slash from happening. If used after <i>Reaping Slash\'s</i> dash ends, <b>Kayn</b> can reposition where the slash happens.</li></ul></li></ul>',
    yvideo: 'Kayn - Q',
  },
  "Blade's Reach": {
    name: "Blade's Reach",
    display_name: "Blade's Reach",
    champion: 'Kayn',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KaynW.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '700 / 900',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Kayn and Rhaast">0.<small>55</small></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Shadow Assassin">None</span>',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'Mana',
    cooldown: '13 / 12 / 11 / 10 / 9',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Kayn"><img alt="Kayn" src="/wiki/images/Kayn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Kayn</a></span></span> swings his scythe in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies hit.',
      '<img alt="Shadow Assassin OriginalSquare.png" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Shadow Assassin Bonus:</b></span> <i>Blade\'s Reach\'s</i> area is extended. <b>Kayn</b> conjures a shadow to perform <i>Blade\'s Reach</i> in his stead, removing the ability\'s cast time. <br><br><img alt="Rhaast OriginalSquare.png" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Darkin Bonus:</b></span> <i>Blade\'s Reach</i> briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks up</a></span> enemies hit.',
    ],
    description: [
      {
        icon: "/wiki/images/Blade's_Reach.png",
        description:
          'Active: Kayn swings his scythe in the target direction, dealing physical damage to enemies hit and  slowing them by 90% decaying over 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kayn</b> swings his scythe in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 90% decaying over 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Kayn swings his scythe in the target direction, dealing physical damage to enemies hit and  slowing them by 90% decaying over 1.5 seconds.',
            damagetype: 'Physical',
            values: 9,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'decaying over 1.5 seconds.swings his scythe in the target direction, dealing physical damage to enemies hit and  slowing them by 90',
            pre: 'Kayn swings his scythe in the target direction, dealing physical damage to enemies hit and  slowing them by 90% decaying over 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '90 / 135 / 180 / 225 / 270 (+ 130% bonus AD)',
            valuesHTML:
              '90 / 135 / 180 / 225 / 270 <span style="color:orange; white-space:normal">(+&nbsp;130% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '90 / 135 / 180 / 225 / 270 (+ 130% bonus AD)',
            damagetype: 'Physical',
            values: [90, 135, 180, 225, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 135 / 180 / 225 / 270',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 130% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: "/wiki/images/Blade's_Reach_A.png",
        description:
          "Shadow Assassin Bonus: Blade's Reach's radius is extended by 200 units. Kayn conjures an  untargetable shadow at the casting position to perform Blade's Reach's sweep over 0.55 seconds in his stead, removing the ability's cast time.",
        descriptionHTML:
          '<img alt="Shadow Assassin OriginalSquare.png" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Shadow Assassin Bonus:</b></span> <i>Blade\'s Reach\'s</i> radius is extended by 200 units. <b>Kayn</b> conjures an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> <i>shadow</i> at the casting position to perform <i>Blade\'s Reach\'s</i> sweep over 0.<small>55</small> seconds in his stead, removing the ability\'s cast time.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Shadow Assassin Bonus:',
            raw: "Blade's Reach's radius is extended by 200 units",
            damagetype: 'None',
            values: 2,
            units: 'total_ad',
            unitsText: "Reach's radius is extended by 200 units",
            pre: "Blade's Reach's radius is extended by 200 units",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/Blade's_Reach_R.png",
        description:
          "Darkin Bonus: Blade's Reach  knocks up enemies hit for 1 second.",
        descriptionHTML:
          '<img alt="Rhaast OriginalSquare.png" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Darkin Bonus:</b></span> <i>Blade\'s Reach</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks up</a></span> enemies hit for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Darkin Bonus:',
            raw: "Blade's Reach  knocks up enemies hit for 1 second.",
            damagetype: 'None',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'Reach  knocks up enemies hit for 1 second.',
            pre: "Blade's Reach  knocks up enemies hit for 1 second.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'False',
    notes:
      '* The hitbox of this ability is determined based on <b>Kayn\'s</b> position on-cast.\n<ul><li><i>Blade\'s Reach\'s</i> indicator is visible to enemies while cast inside terrain and towards enemy champions.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    yvideo: 'Kayn - W',
  },
  'Shadow Step': {
    name: 'Shadow Step',
    display_name: 'Shadow Step',
    champion: 'Kayn',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KaynE.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '90',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">21 / 19 / 17 / 15 / 13</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Kayn"><img alt="Kayn" src="/wiki/images/Kayn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Kayn</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and the ability to enter terrain for a duration. If he has recently been <a href="/wiki/Combat_status" title="Combat status">in combat</a> with enemy champions, the duration is dramatically reduced.',
      '<b>Kayn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself upon entering terrain for the first time from casting <i>Shadow Step</i>. If he receives damage or deals damage against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> during <i>Shadow Step</i>, the duration is dramatically reduced.',
      '<img alt="Shadow Assassin OriginalSquare.png" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Shadow Assassin Bonus:</b></span> <i>Shadow Step</i> has a reduced <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>. <b>Kayn</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span> and more <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while in terrain.',
    ],
    description: [
      {
        icon: '/wiki/images/Shadow_Step.png',
        description:
          'Active: Kayn gains  40% bonus total movement speed,  ghosting and the ability to ignore terrain collision for a duration. If he has been in combat with enemy champions within the last 3 seconds, Shadow Step will instead last 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kayn</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus total</b> movement speed</span></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and the ability to ignore terrain collision for a duration. If he has been <a href="/wiki/Combat_status" title="Combat status">in combat</a> with enemy champions within the last 3 seconds, <i>Shadow Step</i> will instead last 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Kayn gains  40% bonus total movement speed,  ghosting and the ability to ignore terrain collision for a duration',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus total movement speed,  ghosting and the ability to ignore terrain collision for a durationgains  40',
            pre: 'Kayn gains  40% bonus total movement speed,  ghosting and the ability to ignore terrain collision for a duration',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'If he has been in combat with enemy champions within the last 3 seconds, Shadow Step will instead last 1.5 seconds.',
            damagetype: 'None',
            values: 3,
            units: 'total_ad',
            unitsText:
              'he has been in combat with enemy champions within the last 3 seconds, Shadow Step will instead last 1.5 seconds.',
            pre: 'If he has been in combat with enemy champions within the last 3 seconds, Shadow Step will instead last 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Duration:',
            values: '7 / 7.5 / 8 / 8.5 / 9',
            valuesHTML: '7 / 7.<small>5</small> / 8 / 8.<small>5</small> / 9',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Duration:',
            raw: '7 / 7.5 / 8 / 8.5 / 9',
            values: [7, 7.5, 8, 8.5, 9],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7 / 7.5 / 8 / 8.5 / 9',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Kayn  heals himself upon entering terrain for the first time from casting Shadow Step and he gains  unobstructed vision while inside.',
        descriptionHTML:
          '<b>Kayn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself upon entering terrain for the first time from casting <i>Shadow Step</i> and he gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Unobstructed vision"><a href="/wiki/Sight#Unobstructed_vision" title="Sight#Unobstructed vision"><img alt="Stealth Ward icon.png" src="/wiki/images/Stealth_Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Unobstructed_vision" title="Sight">unobstructed vision</a></span> while inside.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Heal:',
            values: '90 / 100 / 110 / 120 / 130 (+ 45% bonus AD)',
            valuesHTML:
              '90 / 100 / 110 / 120 / 130 <span style="color:orange; white-space:normal">(+&nbsp;45% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '90 / 100 / 110 / 120 / 130 (+ 45% bonus AD)',
            healType: 'BonusHealth',
            values: [90, 100, 110, 120, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 100 / 110 / 120 / 130',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 45% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Receiving damage from or dealing damage to an enemy  champion while Shadow Step is active reduces its remaining duration to 1.5 seconds. This effect also cannot remain active out of terrain for longer than 1.5 seconds and will cancel immediately if Kayn performs a basic attack or becomes  immobilized, excluding from  sleep(bug), or  polymorphed.',
        descriptionHTML:
          'Receiving damage from or dealing damage to an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> while <i>Shadow Step</i> is active reduces its remaining duration to 1.<small>5</small> seconds. This effect also cannot remain active out of terrain for longer than 1.<small>5</small> seconds and will cancel immediately if <b>Kayn</b> performs a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, excluding from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphed</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Receiving damage from or dealing damage to an enemy  champion while Shadow Step is active reduces its remaining duration to 1.5 seconds',
            damagetype: 'None',
            values: 1,
            units: 'total_ad',
            unitsText:
              'damage from or dealing damage to an enemy  champion while Shadow Step is active reduces its remaining duration to 1.5 seconds',
            pre: 'Receiving damage from or dealing damage to an enemy  champion while Shadow Step is active reduces its remaining duration to 1.5 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'This effect also cannot remain active out of terrain for longer than 1.5 seconds and will cancel immediately if Kayn performs a basic attack or becomes  immobilized, excluding from  sleep(bug), or  polymorphed.',
            values: 1,
            user: 'none',
            units: '',
            unitsText: ', or  polymorphed.',
            pre: 'This effect also cannot remain active out of terrain for longer than 1.5 seconds and will cancel immediately if Kayn performs a basic attack or becomes  immobilized, excluding from  sleep',
            post: ', or  polymorphed.',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'bug',
                pre: 'bug',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Shadow_Step_A.png',
        description:
          "Shadow Assassin Bonus: Shadow Step's  cooldown is reduced to 8 seconds at all ranks. Kayn gains 100%  slow resist while active and, upon entering terrain, the bonus total movement speed is increased to 80% for the remaining duration.",
        descriptionHTML:
          '<img alt="Shadow Assassin OriginalSquare.png" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Shadow Assassin Bonus:</b></span> <i>Shadow Step\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced to 8 seconds at all ranks. <b>Kayn</b> gains 100% <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span> while active and, upon entering terrain, the <span style="color: #F5EE99; white-space:normal"><b>bonus total</b> movement speed</span> is increased to <span style="color: #F5EE99; white-space:normal">80%</span> for the remaining duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Shadow Assassin Bonus:',
            raw: "Shadow Step's  cooldown is reduced to 8 seconds at all ranks",
            damagetype: 'None',
            values: 8,
            user: 'none',
            units: '',
            unitsText: "Step's  cooldown is reduced to 8 seconds at all ranks",
            pre: "Shadow Step's  cooldown is reduced to 8 seconds at all ranks",
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Kayn gains 100%  slow resist while active and, upon entering terrain, the bonus total movement speed is increased to 80% for the remaining duration.',
            increasedStat: 'slow_resist',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'slow resist while active and, upon entering terrain, the bonus total movement speed is increased to 80gains 100',
            pre: 'Kayn gains 100%  slow resist while active and, upon entering terrain, the bonus total movement speed is increased to 80% for the remaining duration.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    spelleffects: 'Heal',
    notes:
      '* As <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Rhaast"><img alt="Rhaast" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Rhaast</a></span></span>, an alternate icon for <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-ability="Shadow Step R" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL#Shadow_Step_R" title="Shadow Step"><img alt="Shadow Step" src="/wiki/images/Kayn_Shadow_Step_R.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL#Shadow_Step_R" title="Kayn/LoL">Shadow Step</a></span></span> is used but has no modified effect.\n<ul><li>The <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stacks multiplicatively"><a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking#Stacks multiplicatively"><img alt="Multiple stacking icon.png" src="/wiki/images/Multiple_stacking_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking">stacks multiplicatively</a></span> with other sources of movement speed boosts.</li>\n<li>Self <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizations</a></span> such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stopwatch" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stopwatch" title="Stopwatch"><img alt="Stopwatch" src="/wiki/images/Stopwatch_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stopwatch" title="Stopwatch">Stopwatch</a></span></span> / <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Zhonya\'s Hourglass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass"><img alt="Zhonya\'s Hourglass" src="/wiki/images/Zhonya%27s_Hourglass_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass">Zhonya\'s Hourglass</a></span></span> also count for interrupting <i>Shadow Step</i>.</li>\n<li><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> is disabled while <b>Kayn</b> is inside terrain.</li>\n<li>Enemies cannot see <b>Kayn</b> while he is inside of terrain unless they have terrain-piercing vision, such as <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Heightened Senses" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Heightened_Senses" title="Heightened Senses"><img alt="Heightened Senses" src="/wiki/images/Quinn_Heightened_Senses.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Heightened_Senses" title="Quinn/LoL">Heightened Senses</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ashe" data-ability="Hawkshot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ashe/LoL#Hawkshot" title="Hawkshot"><img alt="Hawkshot" src="/wiki/images/Ashe_Hawkshot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ashe/LoL#Hawkshot" title="Ashe/LoL">Hawkshot</a></span></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Unobstructed vision"><a href="/wiki/Sight#Unobstructed_vision" title="Sight#Unobstructed vision"><img alt="Stealth Ward icon.png" src="/wiki/images/Stealth_Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Unobstructed_vision" title="Sight">unobstructed vision</a></span>.\n<ul><li>However, enemies and allies (including <b>Kayn</b>) will be notified when nearby terrain is infested if <b>Kayn</b> is within 1000 units of an enemy champion - with an indicator being placed on the terrain with a direct line between <b>Kayn</b> and the enemy champion. <i>Slightly less than standard sight radius, but more than the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span> detection radius.</i></li></ul></li>\n<li><b>Kayn</b> can move up to 550 units beyond the outer-edge of the battlefield.</li>\n<li><i>Shadow Step</i> can interact with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.</li>\n<li>If <b>Kayn</b> is inside terrain when the effect ends, he will be placed correspondingly to the nearest valid space.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">Sleep</a></span> will not interrupt <i>Shadow Step</i>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
    yvideo: 'Kayn - E',
  },
  'Umbral Trespass': {
    name: 'Umbral Trespass',
    display_name: 'Umbral Trespass',
    champion: 'Kayn',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'KaynR.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '550 / 750',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast range">300</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Shadow Assassin maximum recast range">500</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">120 / 110 / 100 / 90 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Kayn"><img alt="Kayn" src="/wiki/images/Kayn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Kayn</a></span></span> <i>marks</i> enemy champions he damaged for a short time.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Kayn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishes</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to a <i>marked</i> enemy champion. Upon arrival, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for a short time, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attach"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attaching</a></span> to the target and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Kayn</b> deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the target and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> out from their body in the target direction.',
      '<img alt="Shadow Assassin OriginalSquare.png" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Shadow Assassin Bonus:</b></span> <i>Umbral Trespass</i> has increased range. Emerging will <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reset</span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-ability="The Darkin Scythe A" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL#The_Darkin_Scythe_A" title="The Darkin Scythe\'s"><img alt="The Darkin Scythe\'s" src="/wiki/images/Kayn_The_Darkin_Scythe_A.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL#The_Darkin_Scythe_A" title="Kayn/LoL">The Darkin Scythe\'s</a></span></span></i> cooldown. <br><br><img alt="Rhaast OriginalSquare.png" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Darkin Bonus:</b></span> <i>Umbral Trespass</i> deals damage based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> him for a portion of the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
    ],
    description: [
      {
        description:
          'Passive: Kayn marks enemy champions he damaged in the last 3.15 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Kayn</b> <i>marks</i> enemy champions he damaged in the last 3.<small>15</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Passive:',
            raw: 'Kayn marks enemy champions he damaged in the last 3.15 seconds.',
            damagetype: 'None',
            values: 3,
            units: 'kindredMarks',
            unitsText:
              'marks enemy champions he damaged in the last 3.15 seconds.',
            pre: 'Kayn marks enemy champions he damaged in the last 3.15 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Umbral_Trespass.png',
        description:
          'Active: Kayn  vanishes and  dashes to a marked enemy champion. Upon arrival, he  channels for up to 2.5 seconds,  attaching to the target and  revealing them. Umbral Trespass can be recast after 0.75 seconds during the channel, and does so automatically after the duration or if it is  interrupted.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kayn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishes</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to a <i>marked</i> enemy champion. Upon arrival, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 2.<small>5</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attach"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attaching</a></span> to the target and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them. <i>Umbral Trespass</i> can be recast after 0.<small>75</small> seconds during the channel, and does so automatically after the duration or if it is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Upon arrival, he  channels for up to 2.5 seconds,  attaching to the target and  revealing them',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'arrival, he  channels for up to 2.5 seconds,  attaching to the target and  revealing them',
            pre: 'Upon arrival, he  channels for up to 2.5 seconds,  attaching to the target and  revealing them',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Umbral_Trespass_2.png',
        description:
          'Recast: After a 0.75-second delay, Kayn deals physical damage to the target and  dashes out from their body in the target direction while still being  untargetable.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> After a 0.<small>75</small>-second delay, <b>Kayn</b> deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the target and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> out from their body in the target direction while still being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '150 / 200 / 250 / 300 / 350 (+ 175% bonus AD)',
            valuesHTML:
              '150 / 200 / 250 / 300 / 350 <span style="color:orange; white-space:normal">(+&nbsp;175% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 175% bonus AD)',
            damagetype: 'Physical',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
              {
                values: 175,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 175% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Shadow Assassin Bonus: Umbral Trespass gains 200 bonus cast range and emerge range. Additionally, emerging will reset  The Darkin Scythe's  cooldown.",
        descriptionHTML:
          '<img alt="Shadow Assassin OriginalSquare.png" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Shadow Assassin Bonus:</b></span> <i>Umbral Trespass</i> gains 200 <b>bonus</b> cast range and emerge range. Additionally, emerging will reset <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-ability="The Darkin Scythe A" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL#The_Darkin_Scythe_A" title="The Darkin Scythe\'s"><img alt="The Darkin Scythe\'s" src="/wiki/images/Kayn_The_Darkin_Scythe_A.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL#The_Darkin_Scythe_A" title="Kayn/LoL">The Darkin Scythe\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Shadow Assassin Bonus:',
            raw: 'Umbral Trespass gains 200 bonus cast range and emerge range',
            values: 2,
            user: 'none',
            units: '',
            unitsText: 'Trespass gains 200 bonus cast range and emerge range',
            pre: 'Umbral Trespass gains 200 bonus cast range and emerge range',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Umbral_Trespass_2_R.png',
        description:
          "Darkin Bonus: Umbral Trespass is modified to deal physical damage equal to 15% (+ 13% per 100 bonus AD) of the target's maximum health, and  heals him for 9.75% (+ 8.45% per 100 bonus AD) of target's maximum health.",
        descriptionHTML:
          '<img alt="Rhaast OriginalSquare.png" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Darkin Bonus:</b></span> <i>Umbral Trespass</i> is modified to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> equal to <span style="color: #1F995C; white-space:normal">15% <span style="color:orange; white-space:normal">(+&nbsp;13% per 100 <b>bonus</b> AD)</span> of the target\'s <b>maximum</b> health</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> him for <span style="color: #1F995C; white-space:normal">9.<small>75</small>% <span style="color:orange; white-space:normal">(+&nbsp;8.<small>45</small>% per 100 <b>bonus</b> AD)</span> of target\'s <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Darkin Bonus:',
            raw: "Umbral Trespass is modified to deal physical damage equal to 15% (+ 13% per 100 bonus AD) of the target's maximum health, and  heals him for 9.75% (+ 8.45% per 100 bonus AD) of target's maximum health.",
            healType: 'PhysicalVamp',
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText:
              "of the target's maximum health, and  heals him for 9.75%",
            pre: 'Umbral Trespass is modified to deal physical damage equal to 15%',
            post: "of the target's maximum health, and  heals him for 9.75%",
            children: [
              {
                values: 13,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 13% per 100 bonus AD',
              },
              {
                values: 8.45,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 8.45% per 100 bonus AD',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a> / <a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a>',
    affects: 'Enemies, Self',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: 'Special',
    notes:
      '*The initial cast counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span>.\n<ul><li><ul><li>Detonating the ability manually does not.</li>\n<li>The ability activation happens when <b>Kayn</b> is attached to his target and the channel starts.\n<ul><li><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL" title="Kassadin"><img alt="Kassadin" src="/wiki/images/Kassadin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL" title="Kassadin/LoL">Kassadin</a></span></span> cannot gain a stack for <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span> because <b>Kayn</b> is untargetable during the activation.</li></ul></li></ul></li>\n<li>The ability will recast if <b>Kayn</b> is ordered a movement command.</li>\n<li>The amount of time it takes for <b>Kayn</b> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attach"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attach</a></span> to his target is between 0.<small>5</small> seconds (cast from max range, not as <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Shadow Assassin"><img alt="Shadow Assassin" src="/wiki/images/Shadow_AssassinSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Shadow Assassin</a></span></span>) and 0.<small>25</small> seconds (cast from point blank range).\n<ul><li>This duration is fixed, meaning <b>Kayn</b> will attach regardless of how far away the target gets while he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> toward them.</li></ul></li>\n<li>If the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>, or is sent to the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mordekaiser" data-ability="Realm of Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Realm of Death"><img alt="Realm of Death" src="/wiki/images/Mordekaiser_Realm_of_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Mordekaiser/LoL">Realm of Death</a></span></span> while <b>Kayn</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attached"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attached</a></span>, he will instantly detach and reappear on top of the target\'s location. This does not occur if <b>Kayn</b> is in the process of emerging from the target.\n<ul><li>If those same conditions occur before the attachment, <b>Kayn</b> will reappear at the target\'s location after completing the dash.\n<ul><li>In both of these cases, <i>Umbral Trespass</i> will occasionally not go on cooldown.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li><b>Kayn</b> will automatically emerge when attached to a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> that expires.</li></ul></li>\n<li>If <b>Kayn</b> dies while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attached"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attached</a></span> and the recast is available, <i>Umbral Trespass\' </i> damage is dealt immediately. If the recast is not available, <i>Umbral Trespass\' </i> damage is not dealt at all.\n<ul><li>Entering <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attached"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attached</a></span> does not deal <i>Umbral Trespass\' </i> damage regardless of if the recast is available or not.\n<ul><li><b>Kayn</b> will detach immediately in both cases.</li></ul></li></ul></li>\n<li>During <i>Umbral Trespass</i>, <b>Kayn</b> will not take the self-inflicted damage from <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Death\'s Dance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Death%27s_Dance" title="Death\'s Dance\'s"><img alt="Death\'s Dance\'s" src="/wiki/images/Death%27s_Dance_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Death%27s_Dance" title="Death\'s Dance">Death\'s Dance\'s</a></span></span> <a href="/wiki/Named_item_effect#Ignore_Pain" title="Named item effect">Ignore Pain</a> if the damage was sourced from a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>.</li>\n<li>As <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Rhaast"><img alt="Rhaast" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Rhaast</a></span></span>, <i>Umbral Trespass</i> will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> if the target dies during the 0.<small>75</small>-second delay before emerging.</li>\n<li><i>Umbral Trespass\' </i> interactions with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>:\n<ul><li>Being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span> or falling <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Asleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">asleep</a></span> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attach"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attached</a></span> will cause the ability to recast automatically (even during the 0.<small>75</small>-second delay before <b>Kayn</b> is able to recast after attaching).</li>\n<li><i>Umbral Trespass</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> <b>Kayn</b> from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Drowsy"><a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control#Drowsy"><img alt="Drowsy icon.png" src="/wiki/images/Drowsy_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control">drowsiness</a></span>.</li>\n<li><b>Kayn</b> is immune to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flee"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fear</a></span> during <i>Umbral Trespass</i>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">Roots</a></span> will not prevent <b>Kayn</b> from initiating the recast.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">Displacements</a></span> cannot interrupt the initial dash and neither can they apply while <b>Kayn</b> is attached. If the <i>airborne</i> source applies a <a href="/wiki/Debuff" title="Debuff">debuff</a>, <b>Kayn</b> attaches to his target immediately, ending the dash prematurely in the process. The debuff is also removed instantly.</li></ul></li>\n<li>Until the recast or after the duration, the ability will have had no effect on the target for the purposes of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span> or the \'in-combat\' status.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> will prevent <b>Kayn</b> from infesting the target, but will do nothing to mitigate the recast when used once he has already infested them.\n<ul><li>If <b>Kayn</b> targets an enemy that is currently being protected by a <i>spell shield</i>, the ability will simply go on cooldown without making him infest his target.\n<ul><li>This is also true for <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL" title="Fiora\'s"><img alt="Fiora\'s" src="/wiki/images/Fiora_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL" title="Fiora/LoL">Fiora\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Riposte" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Riposte" title="Riposte"><img alt="Riposte" src="/wiki/images/Fiora_Riposte.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Riposte" title="Fiora/LoL">Riposte</a></span></span></span>.</li></ul></li></ul></li>\n<li><i>Umbral Trespass</i> cannot be cast on targetable <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie states</a></span> such as <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sion" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sion/LoL" title="Sion"><img alt="Sion" src="/wiki/images/Sion_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sion/LoL" title="Sion/LoL">Sion</a></span></span> during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sion" data-ability="Glory in Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sion/LoL#Glory_in_Death" title="Glory in Death"><img alt="Glory in Death" src="/wiki/images/Sion_Glory_in_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sion/LoL#Glory_in_Death" title="Sion/LoL">Glory in Death</a></span></span>.</li>\n<li><b>Kayn</b> will draw <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> aggro after the recast\'s dash, despite the damage occurring while he was untargetable.</li>\n<li>The damage is <b>not</b> blocked if the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li><b>Kayn</b> will copy his target\'s total <a href="/wiki/Size" title="Size">size</a> for <i>Umbral Trespass\' </i> duration, even if their size is smaller than his.</li>\n<li>The screen will direct to the target\'s position upon attaching.</li>\n<li>As <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL" title="Rhaast"><img alt="Rhaast" src="/wiki/images/RhaastSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL" title="Kayn/LoL">Rhaast</a></span></span>, an alternate icon is used for the initial activation of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-ability="Umbral Trespass R" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL#Umbral_Trespass_R" title="Umbral Trespass"><img alt="Umbral Trespass" src="/wiki/images/Kayn_Umbral_Trespass_R.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL#Umbral_Trespass_R" title="Kayn/LoL">Umbral Trespass</a></span></span>.</li>\n<li>The following table refers for interactions while <b>Kayn</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span> and dashing out of the victim:\n<ul><li>The dash out is not interrupted by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</li></ul></li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    yvideo: 'Kayn - R',
  },
} satisfies { [skillName in string]: SkillData };
