import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Zac';

export default {
  'Cell Division': {
    name: 'Cell Division',
    display_name: 'Cell Division',
    champion: 'Zac',
    skill: 'I',
    image: {
      full: 'ZacPassive.png',
      sprite: 'passive5.png',
      group: 'passive',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    static: '300',
    blurb: [
      '<span class="template_sbc"><b>Innate - Goo:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL" title="Zac\'s"><img alt="Zac\'s" src="/wiki/images/Zac_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL" title="Zac/LoL">Zac\'s</a></span></span> abilities have a <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;health cost</span></span>. Whenever <b>Zac\'s</b> abilities damage an enemy, he sheds a number of chunks on the ground that remain for a few seconds. <b>Zac</b> and enemy champions can collect the chunks; an enemy will destroy it, while <b>Zac</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> a portion of <span style="color: #1F995C; white-space:normal">his <b>maximum</b> health</span>.',
      '<span class="template_sbc"><b>Innate:</b></span> Periodically when <b>Zac</b> would die, he instead enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> for a period, splitting into four <i>bloblets</i> that can be attacked by enemies. <b>Zac</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">die</a></span> once all <i>bloblets</i> are killed.',
    ],
    description: [
      {
        description:
          "Innate - The Secret Weapon: Zac gains increased percentage size equal to 1.5% of his bonus health, capped at 35% increased size at 2333.33 bonus health. Zac's size also reduces based on his missing health, down to 70% total size while at 0% health.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - The Secret Weapon:</b></span> <b>Zac</b> gains increased percentage <a href="/wiki/Size" title="Size">size</a> equal to <span style="color: #1F995C; white-space:normal">1.<small>5</small>% of his <b>bonus</b> health</span>, capped at 35% increased size at <span style="color: #1F995C; white-space:normal">2333.<small>3<span style="text-decoration: overline;">3</span></small> <b>bonus</b> health</span>. <b>Zac\'s</b> size also reduces based on his <span style="color: #1F995C; white-space:normal"><b>missing</b> health</span>, down to 70% <b>total</b> size while at <span style="color: #1F995C; white-space:normal">0% health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate - The Secret Weapon:',
            raw: 'Zac gains increased percentage size equal to 1.5% of his bonus health, capped at 35% increased size at 2333.33 bonus health',
            healType: 'BonusHealth',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'of his bonus health, capped at 35gains increased percentage size equal to 1.5',
            pre: 'Zac gains increased percentage size equal to 1.5% of his bonus health, capped at 35% increased size at 2333.33 bonus health',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "Zac's size also reduces based on his missing health, down to 70% total size while at 0% health.",
            healType: 'BonusHealth',
            values: 7,
            valuesIsPercent: true,
            units: 'missing_hp',
            unitsText:
              'total size while at 0size also reduces based on his missing health, down to 70',
            pre: "Zac's size also reduces based on his missing health, down to 70% total size while at 0% health.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Innate - Goo: Whenever Zac damages at least one enemy with an ability, he sheds a number of chunks of himself to a nearby location, landing towards nearby  visible enemy  champions and lasting for 6 seconds.\n Stretching Strikes: 1 chunk for each strike hit (excluding the collision) on different targets, up to 2\n Unstable Matter: 1 chunk if it hits at least one target\n Elastic Slingshot: 1 chunk for each enemy champion hit\n Let's Bounce!: 1 chunk for each bounce that hits an enemy champion, up to 4",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Goo:</b></span> Whenever <b>Zac</b> damages at least one enemy with an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, he sheds a number of chunks of himself to a nearby location, landing towards nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and lasting for 6 seconds.\n<ul><li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Stretching Strikes" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Stretching_Strikes" title="Stretching Strikes"><img alt="Stretching Strikes" src="/wiki/images/Zac_Stretching_Strikes.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Stretching_Strikes" title="Zac/LoL">Stretching Strikes</a></span></span></i>: 1 chunk for each strike hit (excluding the collision) on different targets, up to 2</li>\n<li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Unstable Matter" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Unstable_Matter" title="Unstable Matter"><img alt="Unstable Matter" src="/wiki/images/Zac_Unstable_Matter.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Unstable_Matter" title="Zac/LoL">Unstable Matter</a></span></span></i>: 1 chunk if it hits at least one target</li>\n<li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Elastic Slingshot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Elastic_Slingshot" title="Elastic Slingshot"><img alt="Elastic Slingshot" src="/wiki/images/Zac_Elastic_Slingshot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Elastic_Slingshot" title="Zac/LoL">Elastic Slingshot</a></span></span></i>: 1 chunk for each enemy champion hit</li>\n<li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Let\'s Bounce!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Let\'s_Bounce!" title="Let\'s Bounce!"><img alt="Let\'s Bounce!" src="/wiki/images/Zac_Let%27s_Bounce%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Let\'s_Bounce!" title="Zac/LoL">Let\'s Bounce!</a></span></span></i>: 1 chunk for each bounce that hits an enemy champion, up to 4</li></ul>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate - Goo:',
            raw: "Whenever Zac damages at least one enemy with an ability, he sheds a number of chunks of himself to a nearby location, landing towards nearby  visible enemy  champions and lasting for 6 seconds.\n Stretching Strikes: 1 chunk for each strike hit (excluding the collision) on different targets, up to 2\n Unstable Matter: 1 chunk if it hits at least one target\n Elastic Slingshot: 1 chunk for each enemy champion hit\n Let's Bounce!: 1 chunk for each bounce that hits an enemy champion, up to 4",
            damagetype: 'None',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              "on different targets, up to 2\n Unstable Matter: 1 chunk if it hits at least one target\n Elastic Slingshot: 1 chunk for each enemy champion hit\n Let's Bounce!: 1 chunk for each bounce that hits an enemy champion, up to 4",
            pre: 'Whenever Zac damages at least one enemy with an ability, he sheds a number of chunks of himself to a nearby location, landing towards nearby  visible enemy  champions and lasting for 6 seconds.\n Stretching Strikes: 1 chunk for each strike hit',
            post: "on different targets, up to 2\n Unstable Matter: 1 chunk if it hits at least one target\n Elastic Slingshot: 1 chunk for each enemy champion hit\n Let's Bounce!: 1 chunk for each bounce that hits an enemy champion, up to 4",
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'excluding the collision',
                pre: 'excluding the collision',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Both Zac and enemy champions can interact with a chunk by being within 50 units of it: an enemy will destroy it, while Zac will consume it to  heal for 4 / 5 / 6 / 7% (based on  Let's Bounce!'s Rank) of his maximum health.",
        descriptionHTML:
          'Both <b>Zac</b> and enemy champions can interact with a chunk by being within 50 units of it: an enemy will destroy it, while <b>Zac</b> will consume it to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Let\'s Bounce!.png|20px|border]] Let\'s Bounce!\'s Rank" data-start="4;0" data-finish="7;3" data-bot_values="4;5;6;7" data-top_values="0;1;2;3" data-bot_key="%">4 / 5 / 6 / 7% (based on <a href="https://static.wikia.nocookie.net/leagueoflegends/images/6/63/Zac_Let%27s_Bounce%21.png/revision/latest?cb=20170818200420" class="image"><img alt="Let\'s Bounce!.png" src="/wiki/images/Zac_Let%27s_Bounce%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Let\'s Bounce!\'s</i> Rank)</span> of his <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Both Zac and enemy champions can interact with a chunk by being within 50 units of it:',
            raw: "an enemy will destroy it, while Zac will consume it to  heal for 4 / 5 / 6 / 7% (based on  Let's Bounce!'s Rank) of his maximum health.",
            healType: 'BonusHealth',
            values: [4, 5, 6, 7],
            valuesIsPercent: true,
            basedOn: " Let's Bounce!'s Rank",
            units: 'maximum_hp',
            unitsText: 'of his maximum health.',
            pre: 'an enemy will destroy it, while Zac will consume it to  heal for 4 / 5 / 6 / 7%',
            post: 'of his maximum health.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Cell_Division.png',
        description:
          "Innate: Periodically, upon taking  fatal damage, Zac enters  resurrection for 8 / 7 / 6 / 5 / 4 (based on level) seconds and restores 50% of his maximum health, splitting into 4 uncontrollable  Bloblets. Each bloblet has 12% of his maximum health and moves towards Zac's location over the duration. Any damage the bloblets receive, excluding damage dealt in excess of their total health, is also redirected to Zac in  true damage. While in resurrection, Zac is  untargetable and  unable to act, and cannot take damage from sources other than the redirected damage from his bloblets.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, upon taking <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">fatal damage</a></span>, <b>Zac</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="8;7;6;5;4" data-top_values="1;6;10;13;17">8 / 7 / 6 / 5 / 4 (based on level)</span> seconds and restores <span style="color: #1F995C; white-space:normal">50% of his <b>maximum</b> health</span>, splitting into 4 uncontrollable <a href="/wiki/Zac#Pets" title="Zac#Pets"><img alt="Cell Division.png" src="/wiki/images/Zac_Cell_Division.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <i><a href="/wiki/Zac#Pets" title="Zac">Bloblets</a></i>. Each <i>bloblet</i> has <span style="color: #1F995C; white-space:normal"><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Plus an additional 1 health">12%</span> of his <b>maximum</b> health</span> and moves towards <b>Zac\'s</b> location over the duration. Any damage the <i>bloblets</i> receive, excluding damage dealt in excess of their <span style="color: #1F995C; white-space:normal"><b>total</b> health</span>, is also redirected to <b>Zac</b> in <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>. While in resurrection, <b>Zac</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span>, and cannot take damage from sources other than the redirected damage from his <i>bloblets</i>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: 'Periodically, upon taking  fatal damage, Zac enters  resurrection for 8 / 7 / 6 / 5 / 4 (based on level) seconds and restores 50% of his maximum health, splitting into 4 uncontrollable  Bloblets',
            healType: 'BonusHealth',
            values: [],
            basedOn: 'level',
            units: 'maximum_hp',
            unitsText:
              'seconds and restores 50% of his maximum health, splitting into 4 uncontrollable  Bloblets',
            pre: 'Periodically, upon taking  fatal damage, Zac enters  resurrection for 8 / 7 / 6 / 5 / 4',
            post: 'seconds and restores 50% of his maximum health, splitting into 4 uncontrollable  Bloblets',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "Each bloblet has 12% of his maximum health and moves towards Zac's location over the duration",
            healType: 'BonusHealth',
            values: 1,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText:
              "of his maximum health and moves towards Zac's location over the durationbloblet has 12",
            pre: "Each bloblet has 12% of his maximum health and moves towards Zac's location over the duration",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'After the duration, Zac is revived with 10 - 50% maximum health. Zac will die once all bloblets are killed.',
        descriptionHTML:
          'After the duration, <b>Zac</b> is revived with <span style="color: #1F995C; white-space:normal"><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Based on his bloblets\' total remaining health. Reaches the maximum amount at full health on all bloblets">10 - 50%</span> <b>maximum</b> health</span>. <b>Zac</b> will die once all bloblets are killed.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'After the duration, Zac is revived with 10 - 50% maximum health',
            healType: 'BonusHealth',
            values: 1,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText:
              'maximum healththe duration, Zac is revived with 10 - 50',
            pre: 'After the duration, Zac is revived with 10 - 50% maximum health',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'Heal',
    notes:
      '* The damage directed to <b>Zac</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Raw damage"><a href="/wiki/Damage" title="Damage"><img alt="Fear Beyond Death 2.png" src="/wiki/images/Urgot_Fear_Beyond_Death_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">internal raw damage</a></span>.\n<ul><li>The <i>bloblets</i> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> while splitting, and will not split over terrain.</li>\n<li><b>Zac\'s</b> increased size does not consider his base stats.</li>\n<li><i>Cell Division\'s</i> chunks spawn in two versions:\n<ul><li><span class="template_sbc"><b>Contestable:</b></span> They will fall to the ground at a point which is roughly equidistant from <b>Zac</b> and the nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visble</a></span> enemy champion within 1000 range of him (dropping slightly in <b>Zac\'s</b> favor). The location at which they fall to the ground is influenced by the direction in which <b>Zac</b> is currently facing. Cannot be interacted with for the first 0.<small>25</small> seconds (except during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Let\'s Bounce!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Let\'s_Bounce!" title="Let\'s Bounce!"><img alt="Let\'s Bounce!" src="/wiki/images/Zac_Let%27s_Bounce%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Let\'s_Bounce!" title="Zac/LoL">Let\'s Bounce!</a></span></span>).</li>\n<li><span class="template_sbc"><b>Uncontestable:</b></span> They will fall to the ground near <b>Zac</b> and can be picked up immediately (version used by default).</li></ul></li>\n<li><b>Zac\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetability"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetability</a></span> upon triggering <i>Cell Division</i> does not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">destroy</a></span> in-flight <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectiles"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span>.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zilean" data-ability="Chronoshift" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zilean/LoL#Chronoshift" title="Chronoshift"><img alt="Chronoshift" src="/wiki/images/Zilean_Chronoshift.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zilean/LoL#Chronoshift" title="Zilean/LoL">Chronoshift</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guardian Angel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guardian_Angel" title="Guardian Angel"><img alt="Guardian Angel" src="/wiki/images/Guardian_Angel_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guardian_Angel" title="Guardian Angel">Guardian Angel</a></span></span> will take priority over <i>Cell Division</i>.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Spirit Visage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Spirit_Visage" title="Spirit Visage"><img alt="Spirit Visage" src="/wiki/images/Spirit_Visage_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Spirit_Visage" title="Spirit Visage">Spirit Visage</a></span></span> and <span style="white-space:nowrap"><a href="/wiki/Heal_and_shield_power" title="Heal and shield power"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Heal_and_shield_power" title="Heal and shield power">Heal Power</a></span> increases the healing of both <i>chunks</i> and <i>bloblets</i>.</li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ryze" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ryze/LoL" title="Ryze\'s"><img alt="Ryze\'s" src="/wiki/images/Ryze_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ryze/LoL" title="Ryze/LoL">Ryze\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ryze" data-ability="Realm Warp" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ryze/LoL#Realm_Warp" title="Realm Warp"><img alt="Realm Warp" src="/wiki/images/Ryze_Realm_Warp.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ryze/LoL#Realm_Warp" title="Ryze/LoL">Realm Warp</a></span></span></span> is able to individually teleport <b>Zac</b> or his <i>bloblets</i> during <i>Cell Division</i>.\n<ul><li>If <b>Zac</b> is transported to a new location before the <i>bloblets</i> landed, they will travel to form at his new position, adjusting their speed accordingly. If <i>Cell Division\'s</i> duration permits during this time, <b>Zac</b> will be revived even if the <i>bloblets</i> fail to recombine.</li></ul></li>\n<li><i>Cell Division\'s</i> <i>bloblets</i> can be targeted by <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> and <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL" title="Syndra\'s"><img alt="Syndra\'s" src="/wiki/images/Syndra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL" title="Syndra/LoL">Syndra\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Force of Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Force_of_Will" title="Force of Will"><img alt="Force of Will" src="/wiki/images/Syndra_Force_of_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Force_of_Will" title="Syndra/LoL">Force of Will</a></span></span></span>.\n<ul><li>Other <i>bloblets</i> are not interrupted by the conditions above and will continue to recombine instinctively.</li></ul></li>\n<li><b>Zac\'s</b> health when the <i>bloblets</i> are sent out is set to what it would be if all <i>bloblets</i> recombined, and is actively updated when the <i>bloblets</i> take damage.</li>\n<li>If <b>Zac\'s</b> health is higher than it is supposed to be when the <i>bloblets</i> converge on him, his health will be set to the correct value.</li>\n<li>The following table refers for interactions while <b>Zac</b> is in resurrection:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
  },
  'Stretching Strikes': {
    name: 'Stretching Strikes',
    display_name: 'Stretching Strikes',
    champion: 'Zac',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'ZacQ.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '951',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial stretch missile width">160</span>',
    tether_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 1000',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial stretch missile speed">2800</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cast time for the activation">0.<small>25</small></span>',
    cost: '<span style="color: #1F995C; white-space:normal">8%</span>',
    costtype:
      '<span style="color: #1F995C; white-space:normal"><b>Current</b> Health</span>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">14 / 12.<small>5</small> / 11 / 9.<small>5</small> / 8</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL" title="Zac"><img alt="Zac" src="/wiki/images/Zac_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL" title="Zac/LoL">Zac</a></span></span> stretches his arm in the target direction that briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit based on <span style="color: #1F995C; white-space:normal">his <b>maximum</b> health</span>. He also forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> with the target for a short time, during which his next basic attack is replaced with a second <i>Stretching Strike</i>.',
      'If the two <i>Stretching Strikes</i> hit different enemies, <b>Zac</b> will fling them together to briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all surrounding enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Stretching_Strikes.png',
        description:
          'Active: Zac stretches his left arm in the target direction that catches the first enemy hit, dealing magic damage,  slowing them by 40% for 0.5 seconds, and forming a  tether between Zac and the target for 2 seconds, during which they are  revealed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zac</b> stretches his left arm in the target direction that catches the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 40% for 0.<small>5</small> seconds, and forming a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between <b>Zac</b> and the target for 2 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Zac stretches his left arm in the target direction that catches the first enemy hit, dealing magic damage,  slowing them by 40% for 0.5 seconds, and forming a  tether between Zac and the target for 2 seconds, during which they are  revealed.',
            damagetype: 'Magic',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 0.5 seconds, and forming a  tether between Zac and the target for 2 seconds, during which they are  revealed.stretches his left arm in the target direction that catches the first enemy hit, dealing magic damage,  slowing them by 40',
            pre: 'Zac stretches his left arm in the target direction that catches the first enemy hit, dealing magic damage,  slowing them by 40% for 0.5 seconds, and forming a  tether between Zac and the target for 2 seconds, during which they are  revealed.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              "40 / 55 / 70 / 85 / 100 (+ 30% AP) (+ 4% of Zac's maximum health)",
            valuesHTML:
              '40 / 55 / 70 / 85 / 100 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;4% of <b>Zac\'s</b> <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "40 / 55 / 70 / 85 / 100 (+ 30% AP) (+ 4% of Zac's maximum health)",
            healType: 'BonusHealth',
            values: [40, 55, 70, 85, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
              {
                values: 4,
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: "of Zac's maximum health",
                pre: "+ 4% of Zac's maximum health",
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "While the tether persists, Zac's next basic attack is replaced by a second Stretching Strike, empowering it to have a 0.25-second cast time and gain  25 bonus attack range. This attack cannot  critically strike.",
        descriptionHTML:
          'While the tether persists, <b>Zac\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> is replaced by a second <i>Stretching Strike</i>, empowering it to have a 0.<small>25</small>-second cast time and gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> attack range</span>. This attack cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If the two Stretching Strikes affect different targets, both are  rooted for 0.5 seconds and receive the same  slow. After a 0.4-second delay, Zac displaces them toward each other over 300-units, though not through terrain.',
        descriptionHTML:
          'If the two <i>Stretching Strikes</i> affect different targets, both are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>5</small></span> seconds and receive the same <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>. After a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="After the attack\'s cast time">0.<small>4</small>-second delay</span>, <b>Zac</b> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Only move block, does not stun the target\'s actions (disables attacking and movement only)">displaces</span> them toward each other over 300-units, though not through terrain.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If the two targets are near each other, they are instead slammed together through the displacement, dealing the initial magic damage and  knocking them up and  stunning them for 0.25 seconds upon impact. Surrounding enemies are also dealt the initial magic damage.',
        descriptionHTML:
          'If the two targets are <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="700 range">near</span> each other, they are instead slammed together through the displacement, dealing the initial <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>25</small> seconds upon impact. Surrounding enemies are also dealt the initial <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Both Stretching Strikes (the cast and the empowered attack)  reset Zac's basic attack timer. Zac is unable to move or attack while his left arm is in flight.",
        descriptionHTML:
          '<i>Both Stretching Strikes (the cast and the empowered attack) <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">reset</a></span> <b>Zac\'s</b> basic attack timer. <b>Zac</b> is unable to move or attack while his left arm is in flight.</i>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Both Stretching Strikes (the cast and the empowered attack)  reset Zac's basic attack timer",
            values: 0,
            units: 'total_ad',
            unitsText: "reset Zac's basic attack timer",
            pre: 'Both Stretching Strikes',
            post: "reset Zac's basic attack timer",
            children: [
              {
                values: 0,
                units: 'total_ad',
                unitsText: 'the cast and the empowered attack',
                pre: 'the cast and the empowered attack',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    projectile: 'True',
    notes:
      '* The following features were added in patch <a href="/wiki/V7.10" title="V7.10">V7.10</a> to increase <i>Stretching Strikes\'</i> reliability and usability:\n<ul><li><ul><li>If the first attack\'s target is a minion, would die from the damage, and is above a certain amount of health, the minion is instead left at 1 health. The health threshold increases with <i>Stretching Strikes\'</i> damage.</li>\n<li>If the second attack\'s target would die from the damage, it won\'t be dealt until they are slammed to the first target.</li>\n<li>Non-champion units that are affected by <i>Stretching Strikes\'</i> displacement are prevented from taking any damage until they are slammed together. Note that this often confuses players who are trying to secure <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> via <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> while <b>Zac</b> is slamming the wanted target, resulting in <i>Smite</i> dealing no damage to it. It is currently unknown whatever the side effects of this feature are intentional or not.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> will block a single instance of damage only.</li>\n<li>If the tethered target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> during the second <i>Stretching Strike</i> via basic attack, they are completely unaffected by the ability.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will also resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away during the empowered attack\'s cast time, it is cancelled but not consumed.</li>\n<li>The following refers for interactions during the activation\'s cast time:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
  },
  'Unstable Matter': {
    name: 'Unstable Matter',
    display_name: 'Unstable Matter',
    champion: 'Zac',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'ZacW.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '350',
    cast_time: 'none',
    cost: '<span style="color: #1F995C; white-space:normal">4%</span>',
    costtype:
      '<span style="color: #1F995C; white-space:normal"><b>current</b> Health</span>',
    cooldown: '5',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL" title="Zac"><img alt="Zac" src="/wiki/images/Zac_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL" title="Zac/LoL">Zac</a></span></span> explodes to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies hit based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
      '<i>Unstable Matter\'s</i> cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> whenever <b>Zac</b> collects a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Cell Division" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Cell_Division" title="Cell Division"><img alt="Cell Division" src="/wiki/images/Zac_Cell_Division.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Cell_Division" title="Zac/LoL">Cell Division</a></span></span></i> chunk.',
    ],
    description: [
      {
        icon: '/wiki/images/Unstable_Matter.png',
        description:
          'Active: Zac explodes to deal magic damage to nearby enemies, capped against  minions and  monsters.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zac</b> explodes to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              "35 / 50 / 65 / 80 / 95 (+ 4 / 5 / 6 / 7 / 8% (+ 3% per 100 AP) of target's maximum health)",
            valuesHTML:
              '35 / 50 / 65 / 80 / 95 <span style="color: #1F995C; white-space:normal">(+&nbsp;4 / 5 / 6 / 7 / 8% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3% per 100 AP)</span> of target\'s <b>maximum</b> health)</span>',
          },
          {
            name: 'Capped Non-Champion Damage:',
            values: '235 / 250 / 265 / 280 / 295',
            valuesHTML: '235 / 250 / 265 / 280 / 295',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "35 / 50 / 65 / 80 / 95 (+ 4 / 5 / 6 / 7 / 8% (+ 3% per 100 AP) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [35, 50, 65, 80, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 50 / 65 / 80 / 95',
            children: [
              {
                values: [4, 5, 6, 7, 8],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 4 / 5 / 6 / 7 / 8%',
                post: "of target's maximum health",
                children: [
                  {
                    values: 3,
                    valuesIsPercent: true,
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 3% per 100 AP',
                  },
                ],
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Capped Non-Champion Damage:',
            raw: '235 / 250 / 265 / 280 / 295',
            damagetype: 'None',
            values: [235, 250, 265, 280, 295],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '235 / 250 / 265 / 280 / 295',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Zac grants  ghosting to monsters hit for 5 seconds.',
        descriptionHTML:
          '<b>Zac</b> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghost"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> to monsters hit for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Zac grants  ghosting to monsters hit for 5 seconds.',
            values: 5,
            user: 'none',
            units: '',
            unitsText: 'grants  ghosting to monsters hit for 5 seconds.',
            pre: 'Zac grants  ghosting to monsters hit for 5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Unstable Matter's  current cooldown is reduced by 1 second whenever Zac collects a  Cell Division chunk.",
        descriptionHTML:
          '<i>Unstable Matter\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 1 second whenever <b>Zac</b> collects a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Cell Division" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Cell_Division" title="Cell Division"><img alt="Cell Division" src="/wiki/images/Zac_Cell_Division.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Cell_Division" title="Zac/LoL">Cell Division</a></span></span></i> chunk.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Unstable Matter's  current cooldown is reduced by 1 second whenever Zac collects a  Cell Division chunk.",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "Matter's  current cooldown is reduced by 1 second whenever Zac collects a  Cell Division chunk.",
            pre: "Unstable Matter's  current cooldown is reduced by 1 second whenever Zac collects a  Cell Division chunk.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes: '* No additional details.',
  },
  'Elastic Slingshot': {
    name: 'Elastic Slingshot',
    display_name: 'Elastic Slingshot',
    champion: 'Zac',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'ZacE.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1200 / 1350 / 1500 / 1650 / 1800',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 250',
    cast_time: 'none',
    cost: '<span style="color: #1F995C; white-space:normal">4%</span>',
    costtype:
      '<span style="color: #1F995C; white-space:normal"><b>Current</b> Health</span>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">24 / 21 / 18 / 15 / 12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL" title="Zac"><img alt="Zac" src="/wiki/images/Zac_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL" title="Zac/LoL">Zac</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> up to a few seconds, increasing the <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> of his launch over a cone in the target direction.',
      '<i>Elastic Slingshot</i> can be recast within the duration and automatically does so afterwards, refunding half of the <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health cost</span></span> and <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Zac</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit on impact and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Elastic_Slingshot.png',
        description:
          "Active: Zac  charges for up to 4.5 seconds to increase Elastic Slingshot's  range over a cone in the target direction.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zac</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> for up to 4.<small>5</small> seconds to increase <i>Elastic Slingshot\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> over a cone in the target direction.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: "Zac  charges for up to 4.5 seconds to increase Elastic Slingshot's  range over a cone in the target direction.",
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              "charges for up to 4.5 seconds to increase Elastic Slingshot's  range over a cone in the target direction.",
            pre: "Zac  charges for up to 4.5 seconds to increase Elastic Slingshot's  range over a cone in the target direction.",
          },
        ],
        leveling: [
          {
            name: 'Maximum Range Channel Duration:',
            values: '0.9 / 1 / 1.1 / 1.2 / 1.3',
            valuesHTML:
              '0.<small>9</small> / 1 / 1.<small>1</small> / 1.<small>2</small> / 1.<small>3</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Maximum Range Channel Duration:',
            raw: '0.9 / 1 / 1.1 / 1.2 / 1.3',
            values: [0.9, 1, 1.1, 1.2, 1.3],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0.9 / 1 / 1.1 / 1.2 / 1.3',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Elastic Slingshot can be recast within the duration. If Zac cancels the channel himself, or the charge completes without reactivation, 50% of Elastic Slingshot's  health cost and  cooldown are refunded.",
        descriptionHTML:
          '<i>Elastic Slingshot</i> can be recast within the duration. If <b>Zac</b> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">cancels</span> the channel himself, or the charge completes without reactivation, 50% of <i>Elastic Slingshot\'s</i> <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health cost</span></span> and <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> are refunded.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "If Zac cancels the channel himself, or the charge completes without reactivation, 50% of Elastic Slingshot's  health cost and  cooldown are refunded.",
            healType: 'BonusHealth',
            values: 5,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText:
              "of Elastic Slingshot's  health cost and  cooldown are refunded.Zac cancels the channel himself, or the charge completes without reactivation, 50",
            pre: "If Zac cancels the channel himself, or the charge completes without reactivation, 50% of Elastic Slingshot's  health cost and  cooldown are refunded.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Zac  leaps to the target location. Upon landing, he deals magic damage to nearby enemies and  knocks them up and  stuns them for 0.5 seconds, increased to 1 second if Elastic Slingshot was charged for more than 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Zac</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location. Upon landing, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 0.<small>5</small> seconds, increased to 1 second if <i>Elastic Slingshot</i> was charged for more than 1 second.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 105 / 150 / 195 / 240 (+ 80% AP)',
            valuesHTML:
              '60 / 105 / 150 / 195 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 105 / 150 / 195 / 240 (+ 80% AP)',
            damagetype: 'Magic',
            values: [60, 105, 150, 195, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 105 / 150 / 195 / 240',
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
        icon: '/wiki/images/undefined',
        description:
          'Elastic Slingshot will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Elastic Slingshot will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a>',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* <span class="template_sbc"><b><a href="/wiki/Quick_cast" title="Quick cast">Quick casting</a>:</b></span> <i>Elastic Slingshot\'s</i> channel begins when the key is pressed and held, launching <b>Zac</b> towards the cursor when released.\n<ul><li><i>Elastic Slingshot</i> will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> if the targeted location was directly on top of <b>Zac</b> (in which case he will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> at all).<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup>\n<ul><li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> will occasionally end early if the targeted location was slightly away from <b>Zac</b>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will also resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li>\n<li>The following table refers for interactions while <b>Zac</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Charge channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Stretching Strikes" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Stretching_Strikes" title="Stretching Strikes"><img alt="Stretching Strikes" src="/wiki/images/Zac_Stretching_Strikes.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Stretching_Strikes" title="Zac/LoL">Stretching Strikes</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Unstable Matter" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Unstable_Matter" title="Unstable Matter"><img alt="Unstable Matter" src="/wiki/images/Zac_Unstable_Matter.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Unstable_Matter" title="Zac/LoL">Unstable Matter</a></span></span> interrupt. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Let\'s Bounce!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Let\'s_Bounce!" title="Let\'s Bounce!"><img alt="Let\'s Bounce!" src="/wiki/images/Zac_Let%27s_Bounce%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Let\'s_Bounce!" title="Zac/LoL">Let\'s Bounce!</a></span></span> initiates the recast.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled for the first 0.<small>9</small> seconds, otherwise, interrupts.\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> (Recasts)\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Grounded_icon.png/revision/latest?cb=20160509000039" class="image"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Grounding effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest?cb=20171201223940" class="image"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Immobilizing effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
  "Let's Bounce!": {
    name: "Let's Bounce!",
    display_name: "Let's Bounce!",
    champion: 'Zac',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'ZacR.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage radius">300</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Displacement distance from where target is hit">250</span>',
    cast_time: '0.<small>3</small>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">130 / 122.<small>5</small> / 115 / 107.<small>5</small> / 100</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> Healing from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Cell Division" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Cell_Division" title="Cell Division"><img alt="Cell Division" src="/wiki/images/Zac_Cell_Division.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Cell_Division" title="Zac/LoL">Cell Division</a></span></span></i> chunks is increased.',
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL" title="Zac"><img alt="Zac" src="/wiki/images/Zac_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL" title="Zac/LoL">Zac</a></span></span> bounces four times, each impact deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them.',
      "<b>Zac</b> can move during <i>Let's Bounce</i>.",
    ],
    description: [
      {
        description:
          'Passive: Healing from  Cell Division chunks is increased.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Healing from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Cell Division" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Cell_Division" title="Cell Division"><img alt="Cell Division" src="/wiki/images/Zac_Cell_Division.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Cell_Division" title="Zac/LoL">Cell Division</a></span></span></i> chunks is increased.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Chunk Healing:',
            values: '5 / 5.5 / 6 / 6.5 / 7% of his maximum health',
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">5 / 5.<small>5</small> / 6 / 6.<small>5</small> / 7% of his <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Chunk Healing:',
            raw: '5 / 5.5 / 6 / 6.5 / 7% of his maximum health',
            healType: 'BonusHealth',
            values: [5, 5.5, 6, 6.5, 7],
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText: 'of his maximum health',
            pre: '5 / 5.5 / 6 / 6.5 / 7% of his maximum health',
          },
        ],
      },
      {
        icon: "/wiki/images/Let's_Bounce!.png",
        description:
          'Active: Zac bounces after the cast time, then bounces 3 additional times each second over 3 seconds, during which he also gains  20% − 50% (based on duration) bonus movement speed but becomes unable to declare basic attacks and cast  Stretching Strikes and  Elastic Slingshot.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zac</b> bounces after the cast time, then bounces 3 additional times each second over 3 seconds, during which he also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="duration" data-start="20;0" data-finish="50;3" data-bot_values="20;25;30;35;40;45;50" data-top_values="0;0.5;1;1.5;2;2.5;3" data-bot_key="%">20% − 50% (based on duration)</span> <b>bonus</b> movement speed</span></span> but becomes unable to declare basic attacks and cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Stretching Strikes" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Stretching_Strikes" title="Stretching Strikes"><img alt="Stretching Strikes" src="/wiki/images/Zac_Stretching_Strikes.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Stretching_Strikes" title="Zac/LoL">Stretching Strikes</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Elastic Slingshot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Elastic_Slingshot" title="Elastic Slingshot"><img alt="Elastic Slingshot" src="/wiki/images/Zac_Elastic_Slingshot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Elastic_Slingshot" title="Zac/LoL">Elastic Slingshot</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Zac bounces after the cast time, then bounces 3 additional times each second over 3 seconds, during which he also gains  20% − 50% (based on duration) bonus movement speed but becomes unable to declare basic attacks and cast  Stretching Strikes and  Elastic Slingshot.',
            increasedStat: 'bonus_ad',
            values: 3,
            valuesIsPercent: true,
            basedOn: 'duration',
            units: '',
            unitsText:
              'bonus movement speed but becomes unable to declare basic attacks and cast  Stretching Strikes and  Elastic Slingshot.',
            pre: 'Zac bounces after the cast time, then bounces 3 additional times each second over 3 seconds, during which he also gains  20% − 50%',
            post: 'bonus movement speed but becomes unable to declare basic attacks and cast  Stretching Strikes and  Elastic Slingshot.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Each bounce deals magic damage to enemies hit,  knocks them back over 1 second, and  slows them by 20% for the same duration.',
        descriptionHTML:
          'Each bounce deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them back</a></span> over 1 second, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 20% for the same duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Each bounce deals magic damage to enemies hit,  knocks them back over 1 second, and  slows them by 20% for the same duration.',
            damagetype: 'Magic',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for the same duration.bounce deals magic damage to enemies hit,  knocks them back over 1 second, and  slows them by 20',
            pre: 'Each bounce deals magic damage to enemies hit,  knocks them back over 1 second, and  slows them by 20% for the same duration.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '140 / 175 / 210 / 245 / 280 (+ 40% AP)',
            valuesHTML:
              '140 / 175 / 210 / 245 / 280 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '140 / 175 / 210 / 245 / 280 (+ 40% AP)',
            damagetype: 'Magic',
            values: [140, 175, 210, 245, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '140 / 175 / 210 / 245 / 280',
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
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'An enemy can be hit by multiple bounces, but ones beyond the first deal 50% damage to them and do not apply the  knock back.',
        descriptionHTML:
          'An enemy can be hit by multiple bounces, but ones beyond the first deal 50% damage to them and do not apply the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'An enemy can be hit by multiple bounces, but ones beyond the first deal 50% damage to them and do not apply the  knock back.',
            damagetype: 'None',
            values: 5,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'damage to them and do not apply the  knock back.enemy can be hit by multiple bounces, but ones beyond the first deal 50',
            pre: 'An enemy can be hit by multiple bounces, but ones beyond the first deal 50% damage to them and do not apply the  knock back.',
          },
        ],
        leveling: [
          {
            name: 'Reduced Damage:',
            values: '70 / 87.5 / 105 / 122.5 / 140 (+ 20% AP)',
            valuesHTML:
              '70 / 87.<small>5</small> / 105 / 122.<small>5</small> / 140 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage:',
            raw: '70 / 87.5 / 105 / 122.5 / 140 (+ 20% AP)',
            damagetype: 'None',
            values: [70, 87.5, 105, 122.5, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 87.5 / 105 / 122.5 / 140',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies, Self',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: 'Special',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> only blocks a single instance of damage.\n<ul><li>Entering <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span> will end <i>Let\'s Bounce!</i> prematurely.</li>\n<li>While <i>Let\'s Bounce!</i> is active <b>Zac</b> consumes <i>Chunks</i> within <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 300 range.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
