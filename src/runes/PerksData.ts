export default {
  styles: {
    8000: {
      id: 8000,
      name: "Precision",
      tooltip: "Improved attacks and sustained damage",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/7201_Precision.png",
      isAdvanced: false,
      allowedSubStyles: [8200, 8400, 8300, 8100],
      slots: {
        KeyStone: {
          slotLabel: "",
          perks: [8005, 8008, 8021, 8010],
        },
        Mixed1: {
          slotLabel: "Heroism",
          perks: [9101, 9111, 8009],
        },
        Mixed2: {
          slotLabel: "Legend",
          perks: [9104, 9105, 9103],
        },
        Mixed3: {
          slotLabel: "Combat",
          perks: [8014, 8017, 8299],
        },
      },
      defaultPageName: "Precision: The Perfect",
      defaultSubStyle: 8200,
      defaultPerks: [8005, 9111, 9104, 8014, 8233, 8236, 5005, 5008, 5001],
      defaultPerksWhenSplashed: [9111, 8014],
      defaultStatModsPerSubStyle: [
        {
          id: 8100,
          perks: [5005, 5008, 5001],
        },
        {
          id: 8200,
          perks: [5005, 5008, 5001],
        },
        {
          id: 8300,
          perks: [5005, 5008, 5001],
        },
        {
          id: 8400,
          perks: [5005, 5002, 5001],
        },
      ],
    },
    8100: {
      id: 8100,
      name: "Domination",
      tooltip: "Burst damage and target access ",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/7200_Domination.png",
      isAdvanced: false,
      allowedSubStyles: [8300, 8400, 8200, 8000],
      slots: {
        KeyStone: {
          slotLabel: "",
          perks: [8112, 8124, 8128, 9923],
        },
        Mixed1: {
          slotLabel: "Malice",
          perks: [8126, 8139, 8143],
        },
        Mixed2: {
          slotLabel: "Tracking",
          perks: [8136, 8120, 8138],
        },
        Mixed3: {
          slotLabel: "Hunter",
          perks: [8135, 8134, 8105, 8106],
        },
      },
      defaultPageName: "Domination: The Executioner",
      defaultSubStyle: 8000,
      defaultPerks: [8112, 8139, 8138, 8135, 9111, 8014, 5005, 5008, 5002],
      defaultPerksWhenSplashed: [8139, 8105],
      defaultStatModsPerSubStyle: [
        {
          id: 8000,
          perks: [5005, 5008, 5002],
        },
        {
          id: 8200,
          perks: [5008, 5008, 5001],
        },
        {
          id: 8300,
          perks: [5008, 5008, 5001],
        },
        {
          id: 8400,
          perks: [5008, 5002, 5001],
        },
      ],
    },
    8200: {
      id: 8200,
      name: "Sorcery",
      tooltip: "Empowered abilities and resource manipulation",
      iconPath: "/lol-game-data/assets/v1/perk-images/Styles/7202_Sorcery.png",
      isAdvanced: false,
      allowedSubStyles: [8000, 8300, 8400, 8100],
      slots: {
        KeyStone: {
          slotLabel: "",
          perks: [8214, 8229, 8230],
        },
        Mixed1: {
          slotLabel: "Artifact",
          perks: [8224, 8226, 8275],
        },
        Mixed2: {
          slotLabel: "Excellence",
          perks: [8210, 8234, 8233],
        },
        Mixed3: {
          slotLabel: "Power",
          perks: [8237, 8232, 8236],
        },
      },
      defaultPageName: "Sorcery: The Calamity",
      defaultSubStyle: 8100,
      defaultPerks: [8229, 8226, 8210, 8236, 8138, 8105, 5008, 5008, 5001],
      defaultPerksWhenSplashed: [8233, 8236],
      defaultStatModsPerSubStyle: [
        {
          id: 8000,
          perks: [5005, 5008, 5001],
        },
        {
          id: 8100,
          perks: [5008, 5008, 5001],
        },
        {
          id: 8300,
          perks: [5008, 5008, 5001],
        },
        {
          id: 8400,
          perks: [5008, 5008, 5001],
        },
      ],
    },
    8300: {
      id: 8300,
      name: "Inspiration",
      tooltip: "Creative tools and rule bending ",
      iconPath: "/lol-game-data/assets/v1/perk-images/Styles/7203_Whimsy.png",
      isAdvanced: true,
      allowedSubStyles: [8100, 8200, 8400, 8000],
      slots: {
        KeyStone: {
          slotLabel: "",
          perks: [8351, 8360, 8369],
        },
        Mixed1: {
          slotLabel: "Contraptions",
          perks: [8306, 8304, 8313],
        },
        Mixed2: {
          slotLabel: "Tomorrow",
          perks: [8321, 8316, 8345],
        },
        Mixed3: {
          slotLabel: "Beyond",
          perks: [8347, 8410, 8352],
        },
      },
      defaultPageName: "Inspiration: The Timeless",
      defaultSubStyle: 8400,
      defaultPerks: [8351, 8313, 8345, 8347, 8451, 8444, 5007, 5002, 5001],
      defaultPerksWhenSplashed: [8345, 8347],
      defaultStatModsPerSubStyle: [
        {
          id: 8000,
          perks: [5005, 5008, 5001],
        },
        {
          id: 8100,
          perks: [5008, 5008, 5001],
        },
        {
          id: 8200,
          perks: [5008, 5008, 5001],
        },
        {
          id: 8400,
          perks: [5007, 5002, 5001],
        },
      ],
    },
    8400: {
      id: 8400,
      name: "Resolve",
      tooltip: "Durability and crowd control",
      iconPath: "/lol-game-data/assets/v1/perk-images/Styles/7204_Resolve.png",
      isAdvanced: false,
      allowedSubStyles: [8000, 8100, 8200, 8300],
      slots: {
        KeyStone: {
          slotLabel: "",
          perks: [8437, 8439, 8465],
        },
        Mixed1: {
          slotLabel: "Strength",
          perks: [8446, 8463, 8401],
        },
        Mixed2: {
          slotLabel: "Resistance",
          perks: [8429, 8444, 8473],
        },
        Mixed3: {
          slotLabel: "Vitality",
          perks: [8451, 8453, 8242],
        },
      },
      defaultPageName: "Resolve: The Colossus",
      defaultSubStyle: 8200,
      defaultPerks: [8437, 8446, 8444, 8451, 8224, 8237, 5008, 5002, 5001],
      defaultPerksWhenSplashed: [8444, 8446],
      defaultStatModsPerSubStyle: [
        {
          id: 8000,
          perks: [5005, 5002, 5001],
        },
        {
          id: 8100,
          perks: [5008, 5002, 5001],
        },
        {
          id: 8200,
          perks: [5008, 5002, 5001],
        },
        {
          id: 8300,
          perks: [5007, 5002, 5001],
        },
      ],
    },
  },
  perks: {
    5001: {
      id: 5001,
      name: "Health Scaling",
      majorChangePatchVersion: "",
      tooltip: "+@f1@ Health (based on level)",
      shortDesc: "+15-140 Health (based on level)",
      longDesc: "+15-140 Health (based on level)",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/StatMods/StatModsHealthScalingIcon.png",
      endOfGameStatDescs: [],
      recommendationDescriptorAttributes: {},
      stats: {
        HealthScaling: [15, 140],
      },
    },
    5002: {
      id: 5002,
      name: "Armor",
      majorChangePatchVersion: "",
      tooltip: "+6 Armor",
      shortDesc: "+6 Armor",
      longDesc: "+6 Armor",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/StatMods/StatModsArmorIcon.png",
      endOfGameStatDescs: [],
      recommendationDescriptorAttributes: {},
      stats: {
        armor: 6,
      },
    },
    5003: {
      id: 5003,
      name: "Magic Resist",
      majorChangePatchVersion: "",
      tooltip: "+8 Magic Resist",
      shortDesc: "+8 Magic Resist",
      longDesc: "+8 Magic Resist",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/StatMods/StatModsMagicResIcon.MagicResist_Fix.png",
      endOfGameStatDescs: [],
      recommendationDescriptorAttributes: {},
      stats: {
        mr: 8,
      },
    },
    5005: {
      id: 5005,
      name: "Attack Speed",
      majorChangePatchVersion: "",
      tooltip: "+10% Attack Speed",
      shortDesc: "+10% Attack Speed",
      longDesc: "+10% Attack Speed",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/StatMods/StatModsAttackSpeedIcon.png",
      endOfGameStatDescs: [],
      recommendationDescriptorAttributes: {},
      stats: {
        as: 10,
      },
    },
    5007: {
      id: 5007,
      name: "Ability Haste",
      majorChangePatchVersion: "",
      tooltip: "+@f1@ Ability Haste",
      shortDesc:
        "+8 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> ",
      longDesc:
        "+8 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> ",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/StatMods/StatModsCDRScalingIcon.png",
      endOfGameStatDescs: [],
      recommendationDescriptorAttributes: {},
      stats: {
        ah: 8,
      },
    },
    5008: {
      id: 5008,
      name: "Adaptive Force",
      majorChangePatchVersion: "",
      tooltip: "<scaleAD>+@f2@ Attack Damage</scaleAD>",
      shortDesc:
        "+9 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive Force</font></lol-uikit-tooltipped-keyword>",
      longDesc:
        "+9 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive Force</font></lol-uikit-tooltipped-keyword>",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/StatMods/StatModsAdaptiveForceIcon.png",
      endOfGameStatDescs: [],
      recommendationDescriptorAttributes: {},
      stats: {
        Adaptive: 9,
      },
    },
    8005: {
      id: 8005,
      name: "Press the Attack",
      majorChangePatchVersion: "",
      tooltip:
        "Hitting an enemy champion with 3 consecutive basic attacks deals <scaleLevel>@f4@</scaleLevel> bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword> (based on level) and makes them vulnerable, increasing the damage they take by <scaleLevel>@f7@%</scaleLevel> from all sources for 6s.<br><hr><br>Bonus Damage Dealt: <scaleAD>@f2@</scaleAD><br>Total Exposure Damage: <scaleAD>@f3@</scaleAD>",
      shortDesc:
        "Hitting an enemy champion 3 consecutive times makes them vulnerable, dealing bonus damage and causing them to take more damage from all sources for 6s.",
      longDesc:
        "Hitting an enemy champion with 3 consecutive basic attacks deals 40 - 180 bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword> (based on level) and makes them vulnerable, increasing the damage they take by 8 - 12% from all sources for 6s.",
      recommendationDescriptor: "Single Target Damage",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png",
      endOfGameStatDescs: [
        "Total Damage: @eogvar1@",
        "Bonus Damage: @eogvar2@",
        "Expose Damage: @eogvar3@",
      ],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Precision",
      slot: "Keystone",
      cooldown:
        '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect (after consuming a target\'s stacks)">6</span>',
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> <a href="/wiki/Basic_attack" title="Basic attack">Basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> apply a <a href="/wiki/Stack" title="Stack">stack</a> for 4 seconds, refreshing on subsequent applications, expiring upon attacking a new champion, and stacking up to 3 times. The third stack consumes all stacks to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="180;" data-bot_values="40;48.24;56.47;64.71;72.94;81.18;89.41;97.65;105.88;114.12;122.35;130.59;138.82;147.06;155.29;163.53;171.76;180" data-top_values="">40 − 180 (based on level)</span> <b>bonus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Adaptive damage"><a href="/wiki/Adaptive_force#Adaptive_damage" title="Adaptive force#Adaptive damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a><a href="/wiki/Adaptive_force#Adaptive_damage" title="Adaptive force#Adaptive damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Adaptive_force#Adaptive_damage" title="Adaptive force">Adaptive damage</a></span> and render the target <i>Exposed</i> for 6 seconds, causing them to take <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8;" data-finish="12;" data-bot_values="8;8.24;8.47;8.71;8.94;9.18;9.41;9.65;9.88;10.12;10.35;10.59;10.82;11.06;11.29;11.53;11.76;12" data-top_values="" data-bot_key="%">8% − 12% (based on level)</span> increased damage (except <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">true damage</a></span>) from <b>all</b> sources for the duration.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Basic attacks  on-hit against enemy  champions apply a stack for 4 seconds, refreshing on subsequent applications, expiring upon attacking a new champion, and stacking up to 3 times",
              damagetype: "None",
              effectType: "Gain",
              values: 4,
              user: "player",
              units: "total_ap",
              pre: "Basic attacks  on-hit against enemy  champions apply a stack for 4 seconds, refreshing on subsequent applications, expiring upon attacking a new champion, and stacking up to 3 times",
            },
            {
              name: "The third stack consumes all stacks to deal 40 − 180 (based on level) bonus  Adaptive damage and render the target Exposed for 6 seconds, causing them to take 8% − 12% (based on level) increased damage (except  true damage) from all sources for the duration.:",
              raw: "The third stack consumes all stacks to deal 40 − 180 (based on level) bonus  Adaptive damage and render the target Exposed for 6 seconds, causing them to take 8% − 12% (based on level) increased damage (except  true damage) from all sources for the duration.",
              damagetype: "True",
              effectType: "Damage",
              values: [4, 180],
              user: "player",
              units: "total_ap",
              pre: "The third stack consumes all stacks to deal 40 − 180",
              post: "bonus  Adaptive damage and render the target Exposed for 6 seconds, causing them to take 8% − 12%",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_except  true damage",
                  pre: "except  true damage",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/presstheattack/presstheattack.png",
        },
        {
          description:
            '<span class="template_sbc"><b>Adaptive Damage:</b></span> This effect deals either physical or magic damage depending on the damage contribution from your <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;attack damage</span></span> and <span style="color: #7A6DFF; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;ability power</span></span> to the effect\'s damage formula.\n<ul><li>Greater <b>bonus damage</b> from the <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;AD ratio</span></span> → <span style="color: #FF8C34; white-space:normal">Physical damage</span></li>\n<li>Greater <b>bonus damage</b> from the <span style="color: #7A6DFF; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;AP ratio</span></span> → <span style="color: #00B0F0; white-space:normal">Magic damage</span></li></ul>\n<p>If the damage contribution of <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;AD</span></span> and <span style="color: #7A6DFF; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;AP</span></span> are zero or otherwise equal, the damage type depends on the effect\'s particular default.\n</p>',
          leveling: [
            {
              name: "Name 01:",
              raw: " This effect deals either physical or magic damage depending on the damage contribution from your  attack damage and  ability power to the effect's damage formula.\nGreater bonus damage from the  AD ratio → Physical damage\nGreater bonus damage from the  AP ratio → Magic damage\nIf the damage contribution of  AD and  AP are zero or otherwise equal, the damage type depends on the effect's particular default.",
              damagetype: "Physical",
              effectType: "Damage",
              values: 0,
              user: "player",
              units: "total_ap",
              pre: "This effect deals either physical or magic damage depending on the damage contribution from your  attack damage and  ability power to the effect's damage formula.\nGreater bonus damage from the  AD ratio → Physical damage\nGreater bonus damage from the  AP ratio → Magic damage\nIf the damage contribution of  AD and  AP are zero or otherwise equal, the damage type depends on the effect's particular default.",
            },
          ],
          locked: true,
        },
      ],
    },
    8008: {
      id: 8008,
      name: "Lethal Tempo",
      majorChangePatchVersion: "",
      tooltip:
        "Gain %i:scaleAS% (%i:meleeActive% @ASMelee@ || %i:rangedActive% @ASRanged@) Attack Speed for 6 seconds when you attack an enemy champion. This effect stacks up to 6 times.<br><br>While this effect is fully stacked, your Attack Speed can exceed 2.5 and you also gain 50 Attack Range.<br><hr><br>Capstone Uptime: @f1@s",
      shortDesc:
        "Gain Attack Speed when attacking an enemy champion, stacking up to 6 times. At max stacks, gain Attack Range and remove your Attack Speed limit.",
      longDesc:
        "Gain [60% - 90%] (Melee) or [30% - 54%] (Ranged) Attack Speed for 6 seconds when you attack an enemy champion. This effect stacks up to 6 times.<br><br>While this effect fully stacked, your Attack Speed can exceed 2.5 and you gain 50 Attack Range.",
      recommendationDescriptor: "Ramping Attack Speed",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png",
      endOfGameStatDescs: ["Max Attack Speed Uptime: @eogvar1@:@eogvar2@"],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Precision",
      slot: "Keystone",
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> <a href="/wiki/Basic_attack" title="Basic attack">Basic attacks</a> <a href="/wiki/On-attack" class="mw-redirect" title="On-attack">on-attack</a> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> grant a <a href="/wiki/Stack" title="Stack">stack</a> for 6 seconds, refreshing on subsequent attacks and stacking up to 6 times. Gain <span style="color:orangered; white-space:normal"><span style="white-space:pre;">(<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a></span> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:inherit;" data-top_label="level" data-displayformula="" data-bot_values="10;11;12;13;14;15" data-top_values="1;3;6;9;12;15" data-bot_key="%">10% − 15%</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a></span> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:inherit;" data-top_label="level" data-displayformula="" data-bot_values="5;6;7;8;9;9" data-top_values="1;3;6;9;12;15" data-bot_key="%">5% − 9%</span>)</span> (based on level) <b>bonus</b> attack speed</span> for each stack, up to <span style="color:orangered; white-space:normal"><span style="white-space:pre;">(<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a></span> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:inherit;" data-top_label="level" data-displayformula="" data-bot_values="60;66;72;78;84;90" data-top_values="1;3;6;9;12;15" data-bot_key="%">60% − 90%</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a></span> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:inherit;" data-top_label="level" data-displayformula="" data-bot_values="30;36;42;48;54;54" data-top_values="1;3;6;9;12;15" data-bot_key="%">30% − 54%</span>)</span> (based on level)</span> at maximum stacks, at which you also gain 50 <b>bonus</b> attack range and increase the attack speed cap to 10.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Basic attacks on-attack against enemy  champions grant a stack for 6 seconds, refreshing on subsequent attacks and stacking up to 6 times",
              damagetype: "None",
              effectType: "Gain",
              values: 6,
              user: "player",
              units: "total_ad",
              pre: "Basic attacks on-attack against enemy  champions grant a stack for 6 seconds, refreshing on subsequent attacks and stacking up to 6 times",
            },
            {
              name: "Gain ( 10% − 15% /  5% − 9%) (based on level) bonus attack speed for each stack, up to ( 60% − 90% /  30% − 54%) (based on level) at maximum stacks, at which you also gain 50 bonus attack range and increase the attack speed cap to 10.:",
              raw: "Gain ( 10% − 15% /  5% − 9%) (based on level) bonus attack speed for each stack, up to ( 60% − 90% /  30% − 54%) (based on level) at maximum stacks, at which you also gain 50 bonus attack range and increase the attack speed cap to 10.",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "bonus_ad",
              pre: "Gain",
              post: "bonus attack speed for each stack, up to",
              children: [
                {
                  values: 10,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_− 15",
                  pre: "10% − 15% /  5% − 9%",
                },
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 60,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_− 90",
                  pre: "60% − 90% /  30% − 54%",
                },
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/lethaltempo/lethaltempotemp.png",
        },
        {
          description:
            "Stacks expire by one every 0.<small>5</small> seconds when the duration ends.",
          leveling: [
            {
              name: "Stacks expire by one every 0.5 seconds when the duration ends.:",
              raw: "Stacks expire by one every 0.5 seconds when the duration ends.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units:
                "total_expire by one every 0.5 seconds when the duration ends.",
              pre: "Stacks expire by one every 0.5 seconds when the duration ends.",
            },
          ],
          locked: true,
        },
      ],
    },
    8009: {
      id: 8009,
      name: "Presence of Mind",
      majorChangePatchVersion: "8.7",
      tooltip:
        "Damaging an enemy champion increases your mana regeneration by @RegenAmount@ (80% for ranged) mana per second for 4 seconds. All energy users gain 1.5 energy per second, instead.<br><br>Takedowns restore 15% of your maximum mana or energy. <br><hr><br>Resource Restored: @f1@<br>",
      shortDesc:
        "Increase your mana or energy regeneration when damaging an enemy champion. Takedowns restore mana or energy.",
      longDesc:
        "Damaging an enemy champion increases your mana regeneration by 1.5-11 (80% for ranged) mana per second for 4 seconds. All energy users gain 1.5 energy per second, instead.<br><br>Takedowns restore 15% of your maximum mana or energy. ",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png",
      endOfGameStatDescs: ["Resource Restored: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kMana: 15,
      },
      released: "2018",
      path: "Precision",
      slot: 1,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion restores <span style="color: #0099CC; white-space:normal">15% of your <b>maximum</b> mana</span> or <span style="color:yellow; white-space:normal">15% of your <b>maximum</b> energy</span> after a 1-second delay.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Scoring a  takedown against an enemy champion restores 15% of your maximum mana or 15% of your maximum energy after a 1-second delay.",
              damagetype: "None",
              effectType: "Gain",
              values: 1,
              valuesIsPercent: true,
              user: "player",
              units: "total_mana",
              pre: "Scoring a  takedown against an enemy champion restores 15% of your maximum mana or 15% of your maximum energy after a 1-second delay.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/presenceofmind/presenceofmind.png",
        },
        {
          description:
            'Damaging an enemy champion increases your <span style="color: #0099CC; white-space:normal">mana regeneration</span> by <span style="white-space:pre;">(<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a></span> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#0099CC;" data-top_label="level" data-displayformula="" data-bot_values="1.5;1.7;1.9;2.1;2.3;2.5;3;3.5;4;4.5;5;5.8;6.6;7.4;8.2;9;10;11" data-top_values="">1.<small>5</small> − 11</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a></span> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#0099CC;" data-top_label="level" data-displayformula="" data-bot_values="1.2;1.36;1.52;1.68;1.84;2;2.4;2.8;3.2;3.6;4;4.64;5.28;5.92;6.56;7.2;8;8.8" data-top_values="">1.<small>2</small> − 8.<small>8</small></span>)</span> <span style="color: #0099CC; white-space:normal">(based on level)</span> <span style="color: #0099CC; white-space:normal">mana per second</span> for 4 seconds. When triggering this effect, energy users regenerate <span style="color:yellow; white-space:normal">1.<small>5</small> energy per second</span> instead.',
          leveling: [
            {
              name: "Damaging an enemy champion increases your mana regeneration by ( 1.5 − 11 /  1.2 − 8.8) (based on level) mana per second for 4 seconds:",
              raw: "Damaging an enemy champion increases your mana regeneration by ( 1.5 − 11 /  1.2 − 8.8) (based on level) mana per second for 4 seconds",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_per second for 4 seconds",
              pre: "Damaging an enemy champion increases your mana regeneration by",
              post: "mana per second for 4 seconds",
              children: [
                {
                  values: [1.5, 11, 1.2, 8.8],
                  user: "none",
                  units: "",
                  pre: "1.5 − 11 /  1.2 − 8.8",
                },
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
              ],
            },
            {
              name: "When triggering this effect, energy users regenerate 1.5 energy per second instead.:",
              raw: "When triggering this effect, energy users regenerate 1.5 energy per second instead.",
              damagetype: "None",
              effectType: "Gain",
              values: 1,
              user: "player",
              units: "total_ad",
              pre: "When triggering this effect, energy users regenerate 1.5 energy per second instead.",
            },
          ],
          locked: true,
        },
      ],
    },
    8010: {
      id: 8010,
      name: "Conqueror",
      majorChangePatchVersion: "9.4",
      tooltip:
        "Basic attacks or spells that deal damage to an enemy champion grant 2 stacks of Conqueror for 5s, gaining <scaleLevel>@f5.1@</scaleLevel> <scaleAD>Attack Damage</scaleAD> per stack. Stacks up to 12 times. Ranged champions gain only 1 stack per basic attack.<br><br>When fully stacked, heal for 8% of the damage you deal to champions (5% for ranged champions).<br><br>Total Healing: @f1@",
      shortDesc:
        "Gain stacks of adaptive force when attacking enemy champions. After reaching 12 stacks, heal for a portion of damage you deal to champions.",
      longDesc:
        "Basic attacks or spells that deal damage to an enemy champion grant 2 stacks of Conqueror for 5s, gaining 2-4.5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive Force</font></lol-uikit-tooltipped-keyword> per stack. Stacks up to 12 times. Ranged champions gain only 1 stack per basic attack.<br><br>When fully stacked, heal for 8% of the damage you deal to champions (5% for ranged champions).",
      recommendationDescriptor: "Bonus Damage, Sustain",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Precision/Conqueror/Conqueror.png",
      endOfGameStatDescs: ["Total healing: @eogvar1@"],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Precision",
      slot: "Keystone",
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Dealing damage to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> grants <a href="/wiki/Stack" title="Stack">stacks</a> of <i>Conqueror</i>, lasting for 5 seconds, refreshing on subsequent damage against champions, and stacking up to 12 times. Gain <span style="white-space:pre;">(<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a> 2</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a> 1</span>)</span> stacks from <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and 2 stacks from <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, <a href="/wiki/Summoner_spell" title="Summoner spell">spells</a>, and <a href="/wiki/Active_ability_items" title="Active ability items">item actives</a>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Dealing damage to enemy  champions grants stacks of Conqueror, lasting for 5 seconds, refreshing on subsequent damage against champions, and stacking up to 12 times",
              damagetype: "None",
              effectType: "Damage",
              values: 5,
              user: "player",
              units: "total_feast_stack",
              pre: "Dealing damage to enemy  champions grants stacks of Conqueror, lasting for 5 seconds, refreshing on subsequent damage against champions, and stacking up to 12 times",
            },
            {
              name: "Gain ( 2 /  1) stacks from basic attacks and 2 stacks from abilities, spells, and item actives.:",
              raw: "Gain ( 2 /  1) stacks from basic attacks and 2 stacks from abilities, spells, and item actives.",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "total_ad",
              pre: "Gain",
              post: "stacks from basic attacks and 2 stacks from abilities, spells, and item actives.",
              children: [
                {
                  values: [2, 1],
                  user: "none",
                  units: "",
                  pre: "2 /  1",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/conqueror/conqueror.png",
        },
        {
          description:
            'Each stack of <i>Conqueror</i> grants <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1.2;" data-finish="2.7;" data-bot_values="1.2;1.29;1.38;1.46;1.55;1.64;1.73;1.82;1.91;1.99;2.08;2.17;2.26;2.35;2.44;2.52;2.61;2.7" data-top_values="">1.<small>2</small> − 2.<small>7</small> (based on level)</span> <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="2;" data-finish="4.5;" data-bot_values="2;2.15;2.29;2.44;2.59;2.74;2.88;3.03;3.18;3.32;3.47;3.62;3.76;3.91;4.06;4.21;4.35;4.5" data-top_values="">2 − 4.<small>5</small> (based on level)</span> Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>), up to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="14.4;" data-finish="32.4;" data-bot_values="14.4;15.46;16.52;17.58;18.64;19.69;20.75;21.81;22.87;23.93;24.99;26.05;27.11;28.16;29.22;30.28;31.34;32.4" data-top_values="">14.<small>4</small> − 32.<small>4</small> (based on level)</span> <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="24;" data-finish="54;" data-bot_values="24;25.76;27.53;29.29;31.06;32.82;34.59;36.35;38.12;39.88;41.65;43.41;45.18;46.94;48.71;50.47;52.24;54" data-top_values="">24 − 54 (based on level)</span> Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>) at maximum stacks, at which you also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for <span style="white-space:pre;">(<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a> 8%</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a> 5%</span>)</span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt against enemy champions.',
          leveling: [
            {
              name: "Each stack of Conqueror grants 1.2 − 2.7 (based on level) bonus Attack Damage or 2 − 4.5 (based on level) Ability Power (Adaptive), up to 14.4 − 32.4 (based on level) bonus Attack Damage or 24 − 54 (based on level) Ability Power (Adaptive) at maximum stacks, at which you also  heal for ( 8% /  5%) of the post-mitigation damage dealt against enemy champions.:",
              raw: "Each stack of Conqueror grants 1.2 − 2.7 (based on level) bonus Attack Damage or 2 − 4.5 (based on level) Ability Power (Adaptive), up to 14.4 − 32.4 (based on level) bonus Attack Damage or 24 − 54 (based on level) Ability Power (Adaptive) at maximum stacks, at which you also  heal for ( 8% /  5%) of the post-mitigation damage dealt against enemy champions.",
              damagetype: "None",
              effectType: "Damage",
              values: [1, 2.7],
              user: "player",
              units: "total_ad",
              pre: "Each stack of Conqueror grants 1.2 − 2.7",
              post: "bonus Attack Damage or 2 − 4.5",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
                {
                  values: 8,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_/  5",
                  pre: "8% /  5%",
                },
              ],
            },
          ],
          locked: true,
        },
        {
          description:
            '<a href="/wiki/Damage_over_time" title="Damage over time">Damage over time</a> effects and ongoing sources of damage grant stacks only once every 5 seconds.',
          leveling: [
            {
              name: "Damage over time effects and ongoing sources of damage grant stacks only once every 5 seconds.:",
              raw: "Damage over time effects and ongoing sources of damage grant stacks only once every 5 seconds.",
              damagetype: "None",
              effectType: "Damage",
              values: 5,
              user: "player",
              units: "total_feast_stack",
              pre: "Damage over time effects and ongoing sources of damage grant stacks only once every 5 seconds.",
            },
          ],
          locked: true,
        },
      ],
    },
    8014: {
      id: 8014,
      name: "Coup de Grace",
      majorChangePatchVersion: "",
      tooltip:
        "Deal 8% more damage to champions who have less than 40% health.<br><hr><br>Total bonus damage dealt: <scaleAD>@f1@</scaleAD>",
      shortDesc: "Deal more damage to low health enemy champions.",
      longDesc:
        "Deal 8% more damage to champions who have less than 40% health.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png",
      endOfGameStatDescs: ["Total Bonus Damage: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kBurstDamage: 8,
        kDamagePerSecond: 2,
      },
      released: "2018",
      path: "Precision",
      slot: 3,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Deal 8% increased damage (except <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">true damage</a></span>) to champions below <span style="color: #1F995C; white-space:normal">40% <b>maximum</b> health</span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Deal 8% increased damage (except  true damage) to champions below 40% maximum health.",
              damagetype: "True",
              effectType: "Damage",
              values: 8,
              valuesIsPercent: true,
              user: "player",
              units: "maximum_hp",
              pre: "Deal 8% increased damage",
              post: "to champions below 40% maximum health.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_except  true damage",
                  pre: "except  true damage",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/coupdegrace/coupdegrace.png",
        },
      ],
    },
    8017: {
      id: 8017,
      name: "Cut Down",
      majorChangePatchVersion: "",
      tooltip:
        "Deal 5% to 15% more damage to champions, based on how much more max health they have than you.<br><br><rules>Bonus damage scales up linearly against enemies with 10% to 100% more max health than you.</rules><br><hr><br>Total bonus damage: <scaleAD>@f1@</scaleAD>",
      shortDesc: "Deal more damage to champions with more max health than you.",
      longDesc:
        "Deal 5% to 15% more damage to champions, based on how much more max health they have than you.<br><br><rules>Bonus damage scales up linearly against enemies with 10% to 100% more max health than you.</rules>",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Precision/CutDown/CutDown.png",
      endOfGameStatDescs: ["Total Bonus Damage: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kBurstDamage: 1,
        kDamagePerSecond: 9,
      },
      released: "2018",
      path: "Precision",
      slot: 3,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Deal 5% to 15% increased damage (except <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">true damage</a></span>) to champions, based on how much more <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span> they have than you. <b>Bonus</b> damage scales up linearly against enemies with <span style="color: #1F995C; white-space:normal">10% to 100% more <b>maximum</b> health</span> than you.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Deal 5% to 15% increased damage (except  true damage) to champions, based on how much more maximum health they have than you",
              damagetype: "True",
              effectType: "Damage",
              values: 5,
              valuesIsPercent: true,
              user: "player",
              units: "maximum_hp",
              pre: "Deal 5% to 15% increased damage",
              post: "to champions, based on how much more maximum health they have than you",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_except  true damage",
                  pre: "except  true damage",
                },
              ],
            },
            {
              name: "Bonus damage scales up linearly against enemies with 10% to 100% more maximum health than you.:",
              raw: "Bonus damage scales up linearly against enemies with 10% to 100% more maximum health than you.",
              damagetype: "None",
              effectType: "Damage",
              values: 1,
              valuesIsPercent: true,
              user: "player",
              units:
                "total_to 100damage scales up linearly against enemies with 10",
              pre: "Bonus damage scales up linearly against enemies with 10% to 100% more maximum health than you.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/cutdown/cutdown.png",
        },
      ],
    },
    8021: {
      id: 8021,
      name: "Fleet Footwork",
      majorChangePatchVersion: "",
      tooltip:
        "Attacking and moving builds Energy stacks. At 100 stacks, your next attack is Energized.<br><br>Energized attacks heal you for <font color='#ffffff'>@f2@</font> <scaleAD>(+@f3@)</scaleAD> <scaleAP>(+@f4@)</scaleAP> and grant <speed>@f5*100@% Move Speed</speed> for 1 second.<br><rules><br>Healing from minions is 10% effective for Ranged Champions, and 20% effective for Melee Champions.<br></rules><hr><br>Total Healing: @f1@",
      shortDesc:
        "Attacking and moving builds Energy stacks. At 100 stacks, your next attack heals you and grants increased <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword>.",
      longDesc:
        "Attacking and moving builds Energy stacks. At 100 stacks, your next attack is Energized<br><br>Energized attacks heal you for 10 - 100 (+0.3 Bonus AD, +0.2 AP) and grant <speed>20% Move Speed</speed> for 1s.<br><br>Healing from minions is 10% effective for Ranged Champions, and 20% effective for Melee Champions.",
      recommendationDescriptor: "Movement, Health Recovery",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png",
      endOfGameStatDescs: ["Total Healing: @eogvar1@"],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Precision",
      slot: "Keystone",
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Unique – <a href="/wiki/Named_item_effect#Energized" title="Named item effect">Energized</a>:</b></span> Moving and basic attacking generates <i>Charges</i>, up to 100.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Moving and basic attacking generates Charges, up to 100.",
              damagetype: "None",
              effectType: "Unique",
              values: 1,
              user: "player",
              units: "total_ad",
              pre: "Moving and basic attacking generates Charges, up to 100.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/fleetfootwork/fleetfootwork.png",
        },
        {
          description:
            'At 100 <i>Charges</i>, become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Energized"><a href="/wiki/Named_item_effect#Energized" title="Named item effect#Energized"><img alt="Kircheis Shard item.png" src="/wiki/images/Kircheis_Shard_item.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Named_item_effect#Energized" title="Named item effect">Energized</a></span>, empowering your next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> you for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;" data-finish="100;" data-bot_values="10;15.29;20.59;25.88;31.18;36.47;41.76;47.06;52.35;57.65;62.94;68.24;73.53;78.82;84.12;89.41;94.71;100" data-top_values="">10 − 100 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;30% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> and grant <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20%</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 1 second. Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, the healing is <span style="white-space:pre;">(<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a> 20%</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a> 10%</span>)</span> effective.',
          leveling: [
            {
              name: "At 100 Charges, become  Energized, empowering your next basic attack to  heal you for 10 − 100 (based on level) (+ 30% bonus AD) (+ 20% AP) and grant  20% bonus movement speed for 1 second:",
              raw: "At 100 Charges, become  Energized, empowering your next basic attack to  heal you for 10 − 100 (based on level) (+ 30% bonus AD) (+ 20% AP) and grant  20% bonus movement speed for 1 second",
              damagetype: "None",
              effectType: "Heal",
              values: [1, 100],
              user: "player",
              units: "bonus_bonus movement speed for 1 secondgrant  20",
              pre: "At 100 Charges, become  Energized, empowering your next basic attack to  heal you for 10 − 100",
              post: "and grant  20% bonus movement speed for 1 second",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 30,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_ad",
                  pre: "+ 30% bonus AD",
                },
                {
                  values: 20,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_ap",
                  pre: "+ 20% AP",
                },
              ],
            },
            {
              name: "Against  minions, the healing is ( 20% /  10%) effective.:",
              raw: "Against  minions, the healing is ( 20% /  10%) effective.",
              damagetype: "None",
              effectType: "Heal",
              values: 0,
              user: "player",
              units: "total_effective.",
              pre: "Against  minions, the healing is",
              post: "effective.",
              children: [
                {
                  values: 20,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_/  10",
                  pre: "20% /  10%",
                },
              ],
            },
          ],
          locked: true,
        },
      ],
    },
    8105: {
      id: 8105,
      name: "Relentless Hunter",
      majorChangePatchVersion: "9.9",
      tooltip:
        "Gain <speed>5 Move Speed</speed> out of combat plus <speed>8</speed> per <i>Bounty Hunter</i> stack.<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.<br><br>Current Relentless Hunter increase: <speed>@f3.2@% Move Speed</speed><br><hr><br><u>No Claimable Bounties</u>",
      shortDesc:
        "<b>Unique</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedowns</lol-uikit-tooltipped-keyword> grant permanent <b>out of combat <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword></b>. ",
      longDesc:
        "Gain <speed>5 Move Speed</speed> out of combat plus <speed>8</speed> per <i>Bounty Hunter</i> stack.<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png",
      endOfGameStatDescs: [
        "Total Stacks: @eogvar2@",
        "<speed>@eogvar1@% Move Speed</speed> increase",
      ],
      recommendationDescriptorAttributes: {
        kMoveSpeed: 10,
      },
      released: "2018",
      path: "Domination",
      slot: 3,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">5</span> (+ <span style="color: #F5EE99; white-space:normal">8</span> per <i>Bounty Hunter</i> stack) <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while <a href="/wiki/Combat_status" title="Combat status">out of combat</a>, up to <span style="color: #F5EE99; white-space:normal">45</span> at 5 stacks.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain  5 (+ 8 per Bounty Hunter stack) bonus movement speed while out of combat, up to 45 at 5 stacks.",
              damagetype: "None",
              effectType: "Gain",
              values: 5,
              user: "player",
              units: "total_feast_stack",
              pre: "Gain  5",
              post: "bonus movement speed while out of combat, up to 45 at 5 stacks.",
              children: [
                {
                  values: 8,
                  user: "player",
                  units: "bountyHunterStacks",
                  pre: "+ 8 per Bounty Hunter stack",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/relentlesshunter/relentlesshunter.png",
        },
        {
          description:
            'Earn a <i>Bounty Hunter</i> <a href="/wiki/Stack" title="Stack">stack</a> whenever scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion, up to one per unique champion.',
          leveling: [
            {
              name: "Earn a Bounty Hunter stack whenever scoring a  takedown against an enemy champion, up to one per unique champion.:",
              raw: "Earn a Bounty Hunter stack whenever scoring a  takedown against an enemy champion, up to one per unique champion.",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "bountyHunterStacks",
              pre: "Earn a Bounty Hunter stack whenever scoring a  takedown against an enemy champion, up to one per unique champion.",
            },
          ],
          locked: true,
        },
      ],
    },
    8106: {
      id: 8106,
      name: "Ultimate Hunter",
      majorChangePatchVersion: "9.9",
      tooltip:
        "Your ultimate gains <attention>6</attention> Ability Haste, plus an additional <attention>5</attention> Ability Haste per <i>Bounty Hunter</i> stack.<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.<br><hr><br><u>No Claimable Bounties</u>",
      shortDesc:
        "<b>Unique</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedowns</lol-uikit-tooltipped-keyword> grant permanent cooldown reduction on your Ultimate. ",
      longDesc:
        "Your ultimate gains <attention>6</attention> Ability Haste, plus an additional <attention>5</attention> Ability Haste per <i>Bounty Hunter</i> stack.<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png",
      endOfGameStatDescs: ["Total Stacks: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kCooldown: 10,
      },
      released: "2018",
      path: "Domination",
      slot: 3,
      subskills: [
        {
          description:
            'Gain 6 (+ 5 per <i>Bounty Hunter</i> stack) <a href="/wiki/Ultimate_haste" class="mw-redirect" title="Ultimate haste">ultimate haste</a>, up to 31 at 5 stacks.',
          leveling: [
            {
              name: "Gain 6 (+ 5 per Bounty Hunter stack) ultimate haste, up to 31 at 5 stacks.:",
              raw: "Gain 6 (+ 5 per Bounty Hunter stack) ultimate haste, up to 31 at 5 stacks.",
              damagetype: "None",
              effectType: "Gain",
              values: 6,
              user: "player",
              units: "total_feast_stack",
              pre: "Gain 6",
              post: "ultimate haste, up to 31 at 5 stacks.",
              children: [
                {
                  values: 5,
                  user: "player",
                  units: "bountyHunterStacks",
                  pre: "+ 5 per Bounty Hunter stack",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/ultimatehunter/ultimatehunter.png",
        },
        {
          description:
            'Earn a <i>Bounty Hunter</i> <a href="/wiki/Stack" title="Stack">stack</a> whenever scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion, up to one per unique champion.',
          leveling: [
            {
              name: "Earn a Bounty Hunter stack whenever scoring a  takedown against an enemy champion, up to one per unique champion.:",
              raw: "Earn a Bounty Hunter stack whenever scoring a  takedown against an enemy champion, up to one per unique champion.",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "bountyHunterStacks",
              pre: "Earn a Bounty Hunter stack whenever scoring a  takedown against an enemy champion, up to one per unique champion.",
            },
          ],
          locked: true,
        },
      ],
    },
    8109: {
      id: 8109,
      name: "The Wicked Maestro ",
      majorChangePatchVersion: "",
      tooltip:
        "<pathDomination>Domination</pathDomination> + <pathInspiration>Inspiration</pathInspiration><br>+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>",
      shortDesc:
        "<pathBonus><pathDomination>Domination</pathDomination> + <pathInspiration>Inspiration</pathInspiration> Set Bonus</pathBonus>",
      longDesc:
        "+0 Attack Damage or +0 Ability Power, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>Adaptive</font></lol-uikit-tooltipped-keyword>",
      recommendationDescriptor: "",
      iconPath: "/lol-game-data/assets/v1/perk-images/Styles/RunesIcon.png",
      endOfGameStatDescs: [],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Domination",
      slot: "Trait",
      subskills: [
        {
          description:
            '<table style="margin-bottom: 0.5em;">\n<tbody><tr><td style="margin-right:1em;"> <a href="/wiki/Precision" title="Precision"><img alt="Trait- Precision rune.png" src="/wiki/images/Precision_icon.png" decoding="async" loading="lazy" width=46 height=46 class="lazyload"></a></td><td>The Twisted Surgeon<br><span class="announcement-link" style="font-size: 85%;">Grants <span style="color:orangered; white-space:normal">5.<small>5</small>% <b>bonus</b> Attack Speed</span> as well as <span style="color:orange; white-space:normal">8.<small>4</small> <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal">14 Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>).</span></td></tr>\n</tbody></table>\n<table style="margin-bottom: 0.5em;">\n<tbody><tr><td style="margin-right:1em;"> <a href="/wiki/Sorcery" title="Sorcery"><img alt="Trait- Sorcery rune.png" src="/wiki/images/Sorcery_icon.png" decoding="async" loading="lazy" width=46 height=46 class="lazyload"></a></td><td>The Aether Blade<br><span class="announcement-link" style="font-size: 85%;">Grants <span style="color:orange; white-space:normal">12 <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal">20 Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>).</span></td></tr>\n</tbody></table>\n<table style="margin-bottom: 0.5em;">\n<tbody><tr><td style="margin-right:1em;"> <a href="/wiki/Resolve" title="Resolve"><img alt="Trait- Resolve rune.png" src="/wiki/images/Resolve_icon.png" decoding="async" loading="lazy" width=46 height=46 class="lazyload"></a></td><td>The Immortal Butcher<br><span class="announcement-link" style="font-size: 85%;">Grants <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;" data-finish="135;" data-bot_values="15;22.06;29.12;36.18;43.24;50.29;57.35;64.41;71.47;78.53;85.59;92.65;99.71;106.76;113.82;120.88;127.94;135" data-top_values="">15 − 135 (based on level)</span> <b>bonus</b> Health</span> as well as <span style="color:orange; white-space:normal">6 <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal">10 Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>).</span></td></tr>\n</tbody></table>\n<table style="margin-bottom: 0.5em;">\n<tbody><tr><td style="margin-right:1em;"> <a href="/wiki/Inspiration" title="Inspiration"><img alt="Trait- Inspiration rune.png" src="/wiki/images/Inspiration_icon.png" decoding="async" loading="lazy" width=46 height=46 class="lazyload"></a></td><td>The Wicked Maestro<br><span class="announcement-link" style="font-size: 85%;">Grants <span style="color:orange; white-space:normal">12 <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal">20 Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>).</span></td></tr>\n</tbody></table>',
          leveling: [
            {
              name: "The Twisted SurgeonGrants 5.5% bonus Attack Speed as well as 8.4 bonus Attack Damage or 14 Ability Power (Adaptive).\n\n\n The Aether BladeGrants 12 bonus Attack Damage or 20 Ability Power (Adaptive).\n\n\n The Immortal ButcherGrants 15 − 135 (based on level) bonus Health as well as 6 bonus Attack Damage or 10 Ability Power (Adaptive).\n\n\n The Wicked MaestroGrants 12 bonus Attack Damage or 20 Ability Power (Adaptive).:",
              raw: "The Twisted SurgeonGrants 5.5% bonus Attack Speed as well as 8.4 bonus Attack Damage or 14 Ability Power (Adaptive).\n\n\n The Aether BladeGrants 12 bonus Attack Damage or 20 Ability Power (Adaptive).\n\n\n The Immortal ButcherGrants 15 − 135 (based on level) bonus Health as well as 6 bonus Attack Damage or 10 Ability Power (Adaptive).\n\n\n The Wicked MaestroGrants 12 bonus Attack Damage or 20 Ability Power (Adaptive).",
              damagetype: "None",
              effectType: "Damage",
              values: 5,
              valuesIsPercent: true,
              user: "player",
              units: "bonus_ad",
              pre: "The Twisted SurgeonGrants 5.5% bonus Attack Speed as well as 8.4 bonus Attack Damage or 14 Ability Power",
              post: ".\n\n\n The Aether BladeGrants 12 bonus Attack Damage or 20 Ability Power",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/runesicon.png",
        },
        {
          description:
            '<span class="template_sbc"><b>Adaptive:</b></span> Grants bonuses based on which stat you already have the most bonuses for. <i>Defaults to the first listed.</i>',
          leveling: [
            {
              name: "Name 01:",
              raw: " Grants bonuses based on which stat you already have the most bonuses for",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "bonus_ad",
              pre: "Grants bonuses based on which stat you already have the most bonuses for",
            },
            {
              name: "Defaults to the first listed.:",
              raw: "Defaults to the first listed.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_defaults to the first listed.",
              pre: "Defaults to the first listed.",
            },
          ],
          locked: true,
        },
      ],
    },
    8112: {
      id: 8112,
      name: "Electrocute",
      majorChangePatchVersion: "",
      tooltip:
        "Hitting a champion with 3 <b>separate</b> attacks or abilities within 3s deals bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword>.<br>Cooldown: 25 - 20s<br><hr><br>Current damage: @f2@ (<scaleAP>+@f3@</scaleAP>) (<scaleAD>+@f4@</scaleAD>)<br>Total Damage Dealt: <scaleAD>@f1@</scaleAD>",
      shortDesc:
        "Hitting a champion with 3 <b>separate</b> attacks or abilities in 3s deals bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>adaptive damage</lol-uikit-tooltipped-keyword>.",
      longDesc:
        "Hitting a champion with 3 <b>separate</b> attacks or abilities within 3s deals bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword>.<br><br>Damage: 30 - 180 (+0.4 bonus AD, +0.25 AP) damage.<br><br>Cooldown: 25 - 20s<br><br><hr><i>'We called them the Thunderlords, for to speak of their lightning was to invite disaster.'</i>",
      recommendationDescriptor: "Combo Damage",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Domination/Electrocute/Electrocute.png",
      endOfGameStatDescs: ["Total Damage Dealt: @eogvar1@"],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Domination",
      slot: "Keystone",
      cooldown:
        '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;" data-finish="20;" data-bot_values="25;24.71;24.41;24.12;23.82;23.53;23.24;22.94;22.65;22.35;22.06;21.76;21.47;21.18;20.88;20.59;20.29;20" data-top_values="">25 − 20 (based on level)</span>',
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Damaging <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, <a href="/wiki/Named_item_effect" title="Named item effect">item effects</a>, and <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a>, as well as the application of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> and <a href="/wiki/Damage_over_time" title="Damage over time">damage over time</a> effects, generate <a href="/wiki/Stack" title="Stack">stacks</a> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, up to one per attack or cast per champion. Applying 3 stacks to a target within a 3 second period causes them to be struck by lightning after a 0.<small>25</small>-second delay, dealing them <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;" data-finish="180;" data-bot_values="30;38.82;47.65;56.47;65.29;74.12;82.94;91.76;100.59;109.41;118.24;127.06;135.88;144.71;153.53;162.35;171.18;180" data-top_values="">30 − 180 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;40% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span> <span style="color: #FF8C34; white-space:normal">physical</span> or <span style="color: #00B0F0; white-space:normal">magic</span> damage.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Damaging basic attacks, abilities, item effects, and summoner spells, as well as the application of  crowd control and damage over time effects, generate stacks against enemy  champions, up to one per attack or cast per champion",
              damagetype: "None",
              effectType: "Damage",
              values: 0,
              user: "player",
              units: "total_ap",
              pre: "Damaging basic attacks, abilities, item effects, and summoner spells, as well as the application of  crowd control and damage over time effects, generate stacks against enemy  champions, up to one per attack or cast per champion",
            },
            {
              name: "Applying 3 stacks to a target within a 3 second period causes them to be struck by lightning after a 0.25-second delay, dealing them 30 − 180 (based on level) (+ 40% bonus AD) (+ 25% AP) physical or magic damage.:",
              raw: "Applying 3 stacks to a target within a 3 second period causes them to be struck by lightning after a 0.25-second delay, dealing them 30 − 180 (based on level) (+ 40% bonus AD) (+ 25% AP) physical or magic damage.",
              damagetype: "Physical",
              effectType: "Damage",
              values: [3, 180],
              user: "player",
              units: "total_physical or magic damage.",
              pre: "Applying 3 stacks to a target within a 3 second period causes them to be struck by lightning after a 0.25-second delay, dealing them 30 − 180",
              post: "physical or magic damage.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 40,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_ad",
                  pre: "+ 40% bonus AD",
                },
                {
                  values: 25,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_ap",
                  pre: "+ 25% AP",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/electrocute/electrocute.png",
        },
        {
          description:
            'If<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">40% <b>bonus</b> AD</span> ≥ <span style="color: #7A6DFF; white-space:normal">25% AP</span>,&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> AD</span> ≥ <span style="color: #7A6DFF; white-space:normal">62.<small>5</small>% AP</span>,&nbsp;」</span></span>deals <span style="color: #FF8C34; white-space:normal">physical damage</span>. If otherwise, deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
          leveling: [
            {
              name: "If「 40% bonus AD ≥ 25% AP, 」「 bonus AD ≥ 62.5% AP, 」deals physical damage:",
              raw: "If「 40% bonus AD ≥ 25% AP, 」「 bonus AD ≥ 62.5% AP, 」deals physical damage",
              damagetype: "Physical",
              effectType: "Damage",
              values: 4,
              valuesIsPercent: true,
              user: "player",
              units: "bonus_ad",
              pre: "If「 40% bonus AD ≥ 25% AP, 」「 bonus AD ≥ 62.5% AP, 」deals physical damage",
            },
            {
              name: "If otherwise, deals magic damage.:",
              raw: "If otherwise, deals magic damage.",
              damagetype: "Magic",
              effectType: "Damage",
              values: 0,
              user: "player",
              units: "total_if otherwise, deals magic damage.",
              pre: "If otherwise, deals magic damage.",
            },
          ],
          locked: true,
        },
      ],
    },
    8120: {
      id: 8120,
      name: "Ghost Poro",
      majorChangePatchVersion: "9.9",
      tooltip:
        "When your wards expire, they leave behind a Ghost Poro, which grants vision for 90s. Nearby enemy champions scare the Ghost Poro away.<br><br>Gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 1.2 Attack Damage or 2 Ability Power for every Ghost Poro spawned and when your Ghost Poro spots an enemy champion up to 10 stacks. <br><br>After gaining 10 stacks, additionally gain 10 adaptive force.<br><hr><br>Stats Gained: <scaleAD>+@f2@ Attack Damage</scaleAD><br>Poros Spawned: @f3@<br>Enemies Spotted: @f5@",
      shortDesc:
        "When your wards expire, they leave behind a Ghost Poro. The Ghost Poro grants vision until discovered. Gain permanent AD or AP, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword> for each Ghost Poro and when your Ghost Poro spots an enemy champion, plus bonus upon completion.",
      longDesc:
        "When your wards expire, they leave behind a Ghost Poro, which grants vision for 90s. Nearby enemy champions scare the Ghost Poro away.<br><br>Gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 1.2 Attack Damage or 2 Ability Power for every Ghost Poro spawned and when your Ghost Poro spots an enemy champion up to 10 stacks. <br><br>After gaining 10 stacks, additionally gain 10 adaptive force.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Domination/GhostPoro/GhostPoro.png",
      endOfGameStatDescs: [
        "Ghost Poros Spawned: @eogvar3@",
        "Enemies Spotted: @eogvar1@",
      ],
      recommendationDescriptorAttributes: {
        kUtility: 10,
      },
      released: "2018",
      path: "Domination",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> When your <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span> expire, they leave behind a <b>Ghost Poro</b>, which is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> over the surrounding 450 units for 90 seconds. Wards destroyed by enemies or replacement do not spawn <i>Ghost Poros</i>. You can have multiple <i>Ghost Poros</i> at once.',
          leveling: [
            {
              name: "Name 01:",
              raw: " When your  wards expire, they leave behind a Ghost Poro, which is  untargetable and grants  sight over the surrounding 450 units for 90 seconds",
              damagetype: "None",
              effectType: "Unique",
              values: 4,
              user: "target",
              units:
                "total_your  wards expire, they leave behind a ghost poro, which is  untargetable and grants  sight over the surrounding 450 units for 90 seconds",
              pre: "When your  wards expire, they leave behind a Ghost Poro, which is  untargetable and grants  sight over the surrounding 450 units for 90 seconds",
            },
            {
              name: "Wards destroyed by enemies or replacement do not spawn Ghost Poros:",
              raw: "Wards destroyed by enemies or replacement do not spawn Ghost Poros",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units:
                "total_wards destroyed by enemies or replacement do not spawn ghost poros",
              pre: "Wards destroyed by enemies or replacement do not spawn Ghost Poros",
            },
            {
              name: "You can have multiple Ghost Poros at once.:",
              raw: "You can have multiple Ghost Poros at once.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_you can have multiple ghost poros at once.",
              pre: "You can have multiple Ghost Poros at once.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/ghostporo/ghostporo.png",
        },
        {
          description:
            'Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that approach a <i>Ghost Poro</i> (within <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a></span> 400 center-to-edge radius) will cause it to disappear, alert its team, and grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of a 150 radius around the triggering champion for 6 seconds.',
          leveling: [
            {
              name: "Enemy  champions that approach a Ghost Poro (within  400 center-to-edge radius) will cause it to disappear, alert its team, and grant  sight of a 150 radius around the triggering champion for 6 seconds.:",
              raw: "Enemy  champions that approach a Ghost Poro (within  400 center-to-edge radius) will cause it to disappear, alert its team, and grant  sight of a 150 radius around the triggering champion for 6 seconds.",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "total_ap",
              pre: "Enemy  champions that approach a Ghost Poro",
              post: "will cause it to disappear, alert its team, and grant  sight of a 150 radius around the triggering champion for 6 seconds.",
              children: [
                {
                  values: 4,
                  user: "player",
                  units: "total_ad",
                  pre: "within  400 center-to-edge radius",
                },
              ],
            },
          ],
          locked: true,
        },
        {
          description:
            'Gain <span style="color:orange; white-space:normal">1.<small>2</small> <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal">2 Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>) for every <i>Ghost Poro</i> spawned and whenever your <i>Ghost Poro</i> spots an enemy champion, up to 10 stacks, for a maximum of <span style="color:orange; white-space:normal">12 <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal">20 Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>). After reaching 10 stacks, additionally gain <span style="color:orange; white-space:normal">6 <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal">10 Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>).',
          leveling: [
            {
              name: "Gain 1.2 bonus Attack Damage or 2 Ability Power (Adaptive) for every Ghost Poro spawned and whenever your Ghost Poro spots an enemy champion, up to 10 stacks, for a maximum of 12 bonus Attack Damage or 20 Ability Power (Adaptive):",
              raw: "Gain 1.2 bonus Attack Damage or 2 Ability Power (Adaptive) for every Ghost Poro spawned and whenever your Ghost Poro spots an enemy champion, up to 10 stacks, for a maximum of 12 bonus Attack Damage or 20 Ability Power (Adaptive)",
              damagetype: "None",
              effectType: "Damage",
              values: 1,
              user: "player",
              units: "bonus_ad",
              pre: "Gain 1.2 bonus Attack Damage or 2 Ability Power",
              post: "for every Ghost Poro spawned and whenever your Ghost Poro spots an enemy champion, up to 10 stacks, for a maximum of 12 bonus Attack Damage or 20 Ability Power",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
              ],
            },
            {
              name: "After reaching 10 stacks, additionally gain 6 bonus Attack Damage or 10 Ability Power (Adaptive).:",
              raw: "After reaching 10 stacks, additionally gain 6 bonus Attack Damage or 10 Ability Power (Adaptive).",
              damagetype: "None",
              effectType: "Damage",
              values: 1,
              user: "player",
              units: "total_.",
              pre: "After reaching 10 stacks, additionally gain 6 bonus Attack Damage or 10 Ability Power",
              post: ".",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
              ],
            },
          ],
          locked: true,
        },
        {
          description:
            '<span class="template_sbc"><b>Adaptive:</b></span> Grants bonuses in the stat you already have the most bonuses in. <i>Defaults to the first listed.</i>',
          leveling: [
            {
              name: "Name 01:",
              raw: " Grants bonuses in the stat you already have the most bonuses in",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "bonus_ad",
              pre: "Grants bonuses in the stat you already have the most bonuses in",
            },
            {
              name: "Defaults to the first listed.:",
              raw: "Defaults to the first listed.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_defaults to the first listed.",
              pre: "Defaults to the first listed.",
            },
          ],
          locked: true,
        },
      ],
    },
    8124: {
      id: 8124,
      name: "Predator",
      majorChangePatchVersion: "",
      tooltip:
        "Enchants your boots with the active effect <font color='#c60300'>Predator</font>.<br><br>Gain increased <speed>Move Speed</speed>, ramping up to <speed>@MaxMSLevelCalc@ Move Speed</speed> over 1.5 seconds, while chasing enemy champions. Damaging attacks or abilities to champions end this effect, dealing <scaleLevel>@f3@</scaleLevel> <scaleAP>(+@f5@)</scaleAP> <scaleAD>(+@f4@)</scaleAD> bonus damage. <br><br>Cooldown: <scaleLevel>@f7@</scaleLevel>s<br><hr><br>Damage Dealt To Champions: @f1@",
      shortDesc:
        "Add an active effect to your boots that grants a large boost of <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword> and causes your next attack or ability to deal bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>adaptive damage</lol-uikit-tooltipped-keyword>.",
      longDesc:
        "Enchants your boots with the active effect '<font color='#c60300'>Predator</font>.'<br><br>Gain increased Move Speed, ramping up to 25-50% Move Speed over 1 second, while chasing enemy champions. After ramping up, damaging attacks or abilities to champions end this effect, dealing 20-180 (+<scaleAD>0.25</scaleAD> bonus AD)(+<scaleAP>0.15</scaleAP> AP) bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword>.<br><br>Cooldown: 120s-60s.",
      recommendationDescriptor: "Out of Combat Movement",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Domination/Predator/Predator.png",
      endOfGameStatDescs: ["Total Damage to Champions: @eogvar1@"],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Domination",
      slot: "Keystone",
      cooldown:
        '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="120;" data-finish="60;" data-bot_values="120;116.47;112.94;109.41;105.88;102.35;98.82;95.29;91.76;88.24;84.71;81.18;77.65;74.12;70.59;67.06;63.53;60" data-top_values="">120 − 60 (based on level)</span>',
      range: 3000,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> <a href="/wiki/Boots" title="Boots">Boots</a> gain the <a href="/wiki/Active_ability_items" title="Active ability items">active effect</a> <span class="template_sbc"><b>Predator</b></span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Boots gain the active effect Predator.",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "total_boots gain the active effect predator.",
              pre: "Boots gain the active effect Predator.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/predator/predator.png",
        },
        {
          description:
            '<span class="template_sbc"><b>Active - Predator:</b></span> After a 0.<small>25</small>-second <a href="/wiki/Channel#Casting_Times" title="Channel">cast time</a>, gain <i>Predator</i> for 10 seconds, which grants you <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while facing enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> within 3000 units, ramping up to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-bot_values="25;27.3;29.6;31.9;34.2;36.5;38.8;41.1;43.4;45.7;48;50.3" data-top_values="1;8;9;10;11;12;13;14;15;16;17;18" data-bot_key="%">25% − 50.<small>3</small>% (based on level)</span> over the first 1.<small>5</small> seconds.',
          leveling: [
            {
              name: "Name 01:",
              raw: " After a 0.25-second cast time, gain Predator for 10 seconds, which grants you  bonus movement speed while facing enemy  champions within 3000 units, ramping up to 25% − 50.3% (based on level) over the first 1.5 seconds.",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              valuesIsPercent: true,
              user: "player",
              units: "total_the first 1.5 seconds.",
              pre: "After a 0.25-second cast time, gain Predator for 10 seconds, which grants you  bonus movement speed while facing enemy  champions within 3000 units, ramping up to 25% − 50.3%",
              post: "over the first 1.5 seconds.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
              ],
            },
          ],
          locked: true,
        },
        {
          description:
            'After ramping up, your next damaging <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or instance of <a href="/wiki/Ability_damage" title="Ability damage">ability damage</a> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> ends <i>Predator</i> to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="180;" data-bot_values="20;29.41;38.82;48.24;57.65;67.06;76.47;85.88;95.29;104.71;114.12;123.53;132.94;142.35;151.76;161.18;170.59;180" data-top_values="">20 − 180 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;25% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span> <b>bonus</b> <span style="color: #FF8C34; white-space:normal">physical</span> or <span style="color: #00B0F0; white-space:normal">magic</span> damage after a 0.<small>25</small>-second delay.',
          leveling: [
            {
              name: "After ramping up, your next damaging basic attack or instance of ability damage against an enemy  champion ends Predator to deal 20 − 180 (based on level) (+ 25% bonus AD) (+ 15% AP) bonus physical or magic damage after a 0.25-second delay.:",
              raw: "After ramping up, your next damaging basic attack or instance of ability damage against an enemy  champion ends Predator to deal 20 − 180 (based on level) (+ 25% bonus AD) (+ 15% AP) bonus physical or magic damage after a 0.25-second delay.",
              damagetype: "Physical",
              effectType: "Damage",
              values: [2, 180],
              user: "player",
              units:
                "total_physical or magic damage after a 0.25-second delay.",
              pre: "After ramping up, your next damaging basic attack or instance of ability damage against an enemy  champion ends Predator to deal 20 − 180",
              post: "bonus physical or magic damage after a 0.25-second delay.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 25,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_ad",
                  pre: "+ 25% bonus AD",
                },
                {
                  values: 15,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_ap",
                  pre: "+ 15% AP",
                },
              ],
            },
          ],
          locked: true,
        },
        {
          description:
            'If<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">25% <b>bonus</b> AD</span> ≥ <span style="color: #7A6DFF; white-space:normal">15% AP</span>,&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> AD</span> ≥ <span style="color: #7A6DFF; white-space:normal">60% AP</span>,&nbsp;」</span></span>deals <span style="color: #FF8C34; white-space:normal">physical damage</span>. If otherwise, deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
          leveling: [
            {
              name: "If「 25% bonus AD ≥ 15% AP, 」「 bonus AD ≥ 60% AP, 」deals physical damage:",
              raw: "If「 25% bonus AD ≥ 15% AP, 」「 bonus AD ≥ 60% AP, 」deals physical damage",
              damagetype: "Physical",
              effectType: "Damage",
              values: 2,
              valuesIsPercent: true,
              user: "player",
              units: "bonus_ad",
              pre: "If「 25% bonus AD ≥ 15% AP, 」「 bonus AD ≥ 60% AP, 」deals physical damage",
            },
            {
              name: "If otherwise, deals magic damage.:",
              raw: "If otherwise, deals magic damage.",
              damagetype: "Magic",
              effectType: "Damage",
              values: 0,
              user: "player",
              units: "total_if otherwise, deals magic damage.",
              pre: "If otherwise, deals magic damage.",
            },
          ],
          locked: true,
        },
      ],
    },
    8126: {
      id: 8126,
      name: "Cheap Shot",
      majorChangePatchVersion: "9.9",
      tooltip:
        "Damaging champions with <b>impaired movement or actions</b> deals 10 - 45 bonus true damage (based on level).<br><br>Cooldown: 4s<br><rules>Activates on damage occurring after the impairment.</rules><br><hr><br>Current Damage: @f2@<br>Total bonus damage dealt: @f1@",
      shortDesc:
        "Deal bonus true damage to enemy champions with <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_ImpairAct'>impaired movement or actions</lol-uikit-tooltipped-keyword>. ",
      longDesc:
        "Damaging champions with <b>impaired movement or actions</b> deals 10 - 45 bonus true damage (based on level).<br><br>Cooldown: 4s<br><rules>Activates on damage occurring after the impairment.</rules>",
      recommendationDescriptor:
        "Earned by winning ranked games in Season 2020 - Split 1.",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Domination/CheapShot/CheapShot.png",
      endOfGameStatDescs: ["Total damage: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kBurstDamage: 5,
        kDamagePerSecond: 5,
      },
      released: "2018",
      path: "Domination",
      slot: 1,
      cooldown: 4,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Damaging <a href="/wiki/Basic_attacks" class="mw-redirect" title="Basic attacks">basic attacks</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ability damage"><a href="/wiki/Ability_damage" title="Ability damage">ability damage</a></span> deal <span style="color: #F9966B; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;" data-finish="45;" data-bot_values="10;12.06;14.12;16.18;18.24;20.29;22.35;24.41;26.47;28.53;30.59;32.65;34.71;36.76;38.82;40.88;42.94;45" data-top_values="">10 − 45 (based on level)</span></span> <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span> to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> affected by certain <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a> effects.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Damaging basic attacks and ability damage deal 10 − 45 (based on level) bonus true damage to enemy  champions affected by certain crowd control effects.",
              damagetype: "True",
              effectType: "Damage",
              values: [1, 45],
              user: "player",
              units:
                "bonus_bonus true damage to enemy  champions affected by certain crowd control effects.",
              pre: "Damaging basic attacks and ability damage deal 10 − 45",
              post: "bonus true damage to enemy  champions affected by certain crowd control effects.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/cheapshot/cheapshot.png",
        },
        {
          description:
            '<span class="template_sbc"><b>Valid Crowd Control:</b></span>\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">Immobilizes</a></span></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">Blind</a></span></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disarm"><a href="/wiki/Disarm" title="Disarm"><img alt="Disarm icon.png" src="/wiki/images/Disarm_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Disarm" class="mw-redirect" title="Disarm">Disarm</a></span></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">Ground</a></span></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">Nearsight</a></span></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">Polymorph</a></span></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">Silence</a></span></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">Slow</a></span></li></ul>',
          leveling: [
            {
              name: "Name 01:",
              raw: "\n Immobilizes\n Blind\n Disarm\n Ground\n Nearsight\n Polymorph\n Silence\n Slow",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units:
                "total_immobilizes\n blind\n disarm\n ground\n nearsight\n polymorph\n silence\n slow",
              pre: "Immobilizes\n Blind\n Disarm\n Ground\n Nearsight\n Polymorph\n Silence\n Slow",
            },
          ],
          locked: true,
        },
        {
          description:
            "The target must already be impaired prior to the damaging attack or spell in order to trigger the <b>bonus</b> damage.",
          leveling: [
            {
              name: "The target must already be impaired prior to the damaging attack or spell in order to trigger the bonus damage.:",
              raw: "The target must already be impaired prior to the damaging attack or spell in order to trigger the bonus damage.",
              damagetype: "None",
              effectType: "Damage",
              values: 0,
              user: "target",
              units: "bonus_ad",
              pre: "The target must already be impaired prior to the damaging attack or spell in order to trigger the bonus damage.",
            },
          ],
          locked: true,
        },
      ],
    },
    8128: {
      id: 8128,
      name: "Dark Harvest",
      majorChangePatchVersion: "8.23",
      tooltip:
        "Damaging a champion below 50% health deals <scaleAD>@f8@ physical damage</scaleAD> and harvests their soul, permanently increasing Dark Harvest's damage by <font color='#fc314e'>@f12@</font>.<br><br>Cooldown: 45s (resets to 1.5s on takedown)<br><hr><br>Souls harvested: <font color='#fc314e'>@f5@</font><br>Current damage: <scaleLevel>@f7@</scaleLevel> <font color='#fc314e'>(+@f6@)</font> <scaleAD>(+@f10@)</scaleAD> <scaleAP>(+@f11@)</scaleAP> <br>Total damage dealt: @f9@",
      shortDesc:
        "Damaging a low health champion inflicts <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>adaptive damage</lol-uikit-tooltipped-keyword> and harvests a soul from the victim.",
      longDesc:
        "Damaging a Champion below 50% health deals <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>adaptive damage</lol-uikit-tooltipped-keyword> and harvests their soul, permanently increasing Dark Harvest's damage by 5.<br><br>Dark Harvest damage: 20-60 (based on level) (+5 damage per soul) (+0.25 bonus AD) (+0.15 AP)<br>Cooldown: 45s (resets to 1.5s on takedown)",
      recommendationDescriptor: "Execute Enemies",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png",
      endOfGameStatDescs: [
        "Total Damage Dealt: @eogvar1@",
        "Total Souls Harvested: @eogvar2@",
      ],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Domination",
      slot: "Keystone",
      cooldown: 45,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Damaging <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ability damage"><a href="/wiki/Ability_damage" title="Ability damage">ability damage</a></span> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> below <span style="color: #1F995C; white-space:normal">50% of their <b>maximum</b> health</span> deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="60;" data-bot_values="20;22.35;24.71;27.06;29.41;31.76;34.12;36.47;38.82;41.18;43.53;45.88;48.24;50.59;52.94;55.29;57.65;60" data-top_values="">20 − 60 (based on level)</span> <span style="color: #5C58C9; white-space:normal">(+&nbsp;5 per Soul)</span> <span style="color:orange; white-space:normal">(+&nbsp;25% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span> <b>bonus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Adaptive damage"><a href="/wiki/Adaptive_force#Adaptive_damage" title="Adaptive force#Adaptive damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a><a href="/wiki/Adaptive_force#Adaptive_damage" title="Adaptive force#Adaptive damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Adaptive_force#Adaptive_damage" title="Adaptive force">Adaptive damage</a></span> and, after a 1.<small>75</small>-second delay, reap <span style="color: #5C58C9; white-space:normal">1 Soul</span>. This cannot occur again for 45 seconds, resetting to 1.<small>5</small> seconds upon scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Damaging basic attacks and ability damage against enemy  champions below 50% of their maximum health deal 20 − 60 (based on level) (+ 5 per Soul) (+ 25% bonus AD) (+ 15% AP) bonus  Adaptive damage and, after a 1.75-second delay, reap 1 Soul",
              damagetype: "None",
              effectType: "Damage",
              values: 5,
              valuesIsPercent: true,
              user: "player",
              units: "darkHarvestStacks",
              pre: "Damaging basic attacks and ability damage against enemy  champions below 50% of their maximum health deal 20 − 60",
              post: "bonus  Adaptive damage and, after a 1.75-second delay, reap 1 Soul",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 5,
                  user: "player",
                  units: "darkHarvestStacks",
                  pre: "+ 5 per Soul",
                },
                {
                  values: 25,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_ad",
                  pre: "+ 25% bonus AD",
                },
                {
                  values: 15,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_ap",
                  pre: "+ 15% AP",
                },
              ],
            },
            {
              name: "This cannot occur again for 45 seconds, resetting to 1.5 seconds upon scoring a  takedown against an enemy champion.:",
              raw: "This cannot occur again for 45 seconds, resetting to 1.5 seconds upon scoring a  takedown against an enemy champion.",
              damagetype: "None",
              effectType: "Gain",
              values: 4,
              user: "player",
              units:
                "total_cannot occur again for 45 seconds, resetting to 1.5 seconds upon scoring a  takedown against an enemy champion.",
              pre: "This cannot occur again for 45 seconds, resetting to 1.5 seconds upon scoring a  takedown against an enemy champion.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/darkharvest/darkharvest.png",
        },
        {
          description:
            'While not on cooldown, also reap <span style="color: #5C58C9; white-space:normal">1 Soul</span> from receiving the kill credit of a champion killed by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>.',
          leveling: [
            {
              name: "While not on cooldown, also reap 1 Soul from receiving the kill credit of a champion killed by a  minion,  monster, or  turret.:",
              raw: "While not on cooldown, also reap 1 Soul from receiving the kill credit of a champion killed by a  minion,  monster, or  turret.",
              damagetype: "None",
              effectType: "Unique",
              values: 1,
              user: "player",
              units: "darkHarvestStacks",
              pre: "While not on cooldown, also reap 1 Soul from receiving the kill credit of a champion killed by a  minion,  monster, or  turret.",
            },
          ],
          locked: true,
        },
        {
          description:
            '<span class="template_sbc"><b>Adaptive Damage:</b></span> This effect deals either physical or magic damage depending on the damage contribution from your <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;attack damage</span></span> and <span style="color: #7A6DFF; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;ability power</span></span> to the effect\'s damage formula.\n<ul><li>Greater <b>bonus damage</b> from the <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;AD ratio</span></span> → <span style="color: #FF8C34; white-space:normal">Physical damage</span></li>\n<li>Greater <b>bonus damage</b> from the <span style="color: #7A6DFF; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;AP ratio</span></span> → <span style="color: #00B0F0; white-space:normal">Magic damage</span></li></ul>\n<p>If the damage contribution of <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;AD</span></span> and <span style="color: #7A6DFF; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;AP</span></span> are zero or otherwise equal, the damage type depends on the effect\'s particular default.\n</p>',
          leveling: [
            {
              name: "Name 01:",
              raw: " This effect deals either physical or magic damage depending on the damage contribution from your  attack damage and  ability power to the effect's damage formula.\nGreater bonus damage from the  AD ratio → Physical damage\nGreater bonus damage from the  AP ratio → Magic damage\nIf the damage contribution of  AD and  AP are zero or otherwise equal, the damage type depends on the effect's particular default.",
              damagetype: "Physical",
              effectType: "Damage",
              values: 0,
              user: "player",
              units: "total_ap",
              pre: "This effect deals either physical or magic damage depending on the damage contribution from your  attack damage and  ability power to the effect's damage formula.\nGreater bonus damage from the  AD ratio → Physical damage\nGreater bonus damage from the  AP ratio → Magic damage\nIf the damage contribution of  AD and  AP are zero or otherwise equal, the damage type depends on the effect's particular default.",
            },
          ],
          locked: true,
        },
      ],
    },
    8134: {
      id: 8134,
      name: "Ingenious Hunter",
      majorChangePatchVersion: "",
      tooltip:
        "Gain <attention>20</attention> <b>Item Haste</b> plus an additional <attention>6</attention> <b>Item Haste</b> per <i>Bounty Hunter</i> stack (includes Trinkets).<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.<br><br><rules>Item Haste affects all items with cooldowns. </rules><br><br>Total item activations (including Trinkets): @f3@<br><hr><br><u>No Claimable Bounties</u>",
      shortDesc:
        "<b>Unique</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedowns</lol-uikit-tooltipped-keyword> grant permanent Item <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Haste</lol-uikit-tooltipped-keyword> (includes Trinkets).",
      longDesc:
        "Gain <attention>20</attention> <b>Item Haste</b> plus an additional <attention>6</attention> <b>Item Haste</b> per <i>Bounty Hunter</i> stack (includes Trinkets).<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.<br><br><rules>Item Haste affects all items with cooldowns. </rules>",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png",
      endOfGameStatDescs: [
        "Total Stacks: @eogvar2@",
        "Total Item Activations (Including Trinkets): @eogvar1@",
      ],
      recommendationDescriptorAttributes: {
        kCooldown: 8,
        kUtility: 2,
      },
      released: "2018",
      path: "Domination",
      slot: 3,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain 20 (+ 6 per <i>Bounty Hunter</i> stack) <a href="/wiki/Ability_haste#Increasing_item_haste" class="mw-redirect" title="Ability haste">item haste</a>, up to 50 at 5 stacks.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain 20 (+ 6 per Bounty Hunter stack) item haste, up to 50 at 5 stacks.",
              damagetype: "None",
              effectType: "Gain",
              values: 2,
              user: "player",
              units: "total_feast_stack",
              pre: "Gain 20",
              post: "item haste, up to 50 at 5 stacks.",
              children: [
                {
                  values: 6,
                  user: "player",
                  units: "bountyHunterStacks",
                  pre: "+ 6 per Bounty Hunter stack",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/ingenioushunter/ingenioushunter.png",
        },
        {
          description:
            'Earn a <i>Bounty Hunter</i> <a href="/wiki/Stack" title="Stack">stack</a> whenever scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion, up to one per unique champion.',
          leveling: [
            {
              name: "Earn a Bounty Hunter stack whenever scoring a  takedown against an enemy champion, up to one per unique champion.:",
              raw: "Earn a Bounty Hunter stack whenever scoring a  takedown against an enemy champion, up to one per unique champion.",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "bountyHunterStacks",
              pre: "Earn a Bounty Hunter stack whenever scoring a  takedown against an enemy champion, up to one per unique champion.",
            },
          ],
          locked: true,
        },
      ],
    },
    8135: {
      id: 8135,
      name: "Treasure Hunter",
      majorChangePatchVersion: "",
      tooltip:
        "Gain an additional <gold>70 gold</gold> the next time you collect a <i>Bounty Hunter</i> stack. Increase the gold gained by <gold>20 gold</gold> for each <i>Bounty Hunter</i> stack, up to <gold>150 gold</gold>.<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.<br><br>Current Bounty Available: <gold>@f15@ gold</gold><br>Bonus Gold Collected: <gold>@f3@ gold</gold><br><hr><br><u>No Claimable Bounties</u>",
      shortDesc:
        "<b>Unique</b> <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedowns</lol-uikit-tooltipped-keyword> grant additional gold the first time they are collected. ",
      longDesc:
        "Gain an additional <gold>70 gold</gold> the next time you collect a <i>Bounty Hunter</i> stack. Increase the gold gained by <gold>20 gold</gold> for each <i>Bounty Hunter</i> stack, up to <gold>150 gold</gold>.<br><br><i>Bounty Hunter</i> stacks are earned the first time you get a takedown on each enemy champion.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png",
      endOfGameStatDescs: [
        "Gold Collected: @eogvar1@",
        "Total Stacks: @eogvar2@",
      ],
      recommendationDescriptorAttributes: {
        kGold: 15,
      },
      released: 2022,
      path: "Domination",
      slot: 3,
      subskills: [
        {
          description:
            'Gain <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="70 Gold"><img alt="70 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">70</span></span> (+ <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="20 Gold"><img alt="20 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">20</span></span> per <i>Bounty Hunter</i> stack) per unique takedown, up to <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="550 Gold"><img alt="550 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">550</span></span> at 5 unique takedowns.',
          leveling: [
            {
              name: "Gain  70 (+  20 per Bounty Hunter stack) per unique takedown, up to  550 at 5 unique takedowns.:",
              raw: "Gain  70 (+  20 per Bounty Hunter stack) per unique takedown, up to  550 at 5 unique takedowns.",
              damagetype: "None",
              effectType: "Gain",
              values: 7,
              user: "player",
              units: "total_unique takedown, up to  550 at 5 unique takedowns.",
              pre: "Gain  70",
              post: "per unique takedown, up to  550 at 5 unique takedowns.",
              children: [
                {
                  values: 20,
                  user: "player",
                  units: "bountyHunterStacks",
                  pre: "+  20 per Bounty Hunter stack",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/treasurehunter/treasurehunter.png",
        },
        {
          description:
            '1st unique takedown: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="70 Gold"><img alt="70 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">70</span></span>, 2nd: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="90 Gold"><img alt="90 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">90</span></span>, 3rd: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="110 Gold"><img alt="110 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">110</span></span>, 4th: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="130 Gold"><img alt="130 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">130</span></span>, 5th: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="150 Gold"><img alt="150 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">150</span></span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: "  70, 2nd:  90, 3rd:  110, 4th:  130, 5th:  150.",
              damagetype: "None",
              effectType: "Unique",
              values: 7,
              user: "player",
              units: "total_2nd:  90, 3rd:  110, 4th:  130, 5th:  150.",
              pre: "70, 2nd:  90, 3rd:  110, 4th:  130, 5th:  150.",
            },
          ],
          locked: true,
        },
        {
          description:
            'Earn a <i>Bounty Hunter</i> <a href="/wiki/Stack" title="Stack">stack</a> whenever scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion, up to one per unique champion.',
          leveling: [
            {
              name: "Earn a Bounty Hunter stack whenever scoring a  takedown against an enemy champion, up to one per unique champion.:",
              raw: "Earn a Bounty Hunter stack whenever scoring a  takedown against an enemy champion, up to one per unique champion.",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "bountyHunterStacks",
              pre: "Earn a Bounty Hunter stack whenever scoring a  takedown against an enemy champion, up to one per unique champion.",
            },
          ],
          locked: true,
        },
      ],
    },
    8136: {
      id: 8136,
      name: "Zombie Ward",
      majorChangePatchVersion: "8.14",
      tooltip:
        "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemy Wards cause friendly Zombie Wards to sprout from their corpses.<br><br>Gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 1.2 Attack Damage or 2 Ability Power for every Zombie Ward spawned, up to 10. <br><br>After spawning 10 Zombie Wards, additionally gain 10 adaptive force.<br><br>Zombie Wards are visible, last for 120s and do not count towards your ward limit.<br><hr><br>Stats Gained: <scaleAD>+@f2@ Attack Damage</scaleAD><br>Zombie Wards raised: @f1@",
      shortDesc:
        "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemy Wards cause friendly Zombie Wards to sprout from their corpses. Gain permanent AD or AP, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword> for each Zombie Ward spawned plus bonus upon completion.",
      longDesc:
        "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemy Wards cause friendly Zombie Wards to sprout from their corpses.<br><br>Gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 1.2 Attack Damage or 2 Ability Power for every Zombie Ward spawned, up to 10. <br><br>After spawning 10 Zombie Wards, additionally gain 10 adaptive force.<br><br>Zombie Wards are visible, last for 120s and do not count towards your ward limit.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Domination/ZombieWard/ZombieWard.png",
      endOfGameStatDescs: [
        "Wards spawned: @eogvar1@",
        "Adaptive Force Gained: @eogvar2@",
      ],
      recommendationDescriptorAttributes: {
        kUtility: 10,
      },
      released: "2018",
      path: "Domination",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Ward" title="Ward">ward</a></span> (excluding <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie ward"><a href="/wiki/Ward#Zombie_Ward" title="Ward#Zombie Ward"><img alt="Zombie Ward icon.png" src="/wiki/images/Farsight_Ward_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Ward#Zombie_Ward" title="Ward">Zombie Wards</a></span>) within 10 seconds of damaging it summons an allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie ward"><a href="/wiki/Ward#Zombie_Ward" title="Ward#Zombie Ward"><img alt="Zombie Ward icon.png" src="/wiki/images/Farsight_Ward_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Ward#Zombie_Ward" title="Ward">Zombie Ward</a></span> in its place.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Scoring a  takedown against an enemy  ward (excluding  Zombie Wards) within 10 seconds of damaging it summons an allied  Zombie Ward in its place.",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units:
                "total_10 seconds of damaging it summons an allied  zombie ward in its place.",
              pre: "Scoring a  takedown against an enemy  ward",
              post: "within 10 seconds of damaging it summons an allied  Zombie Ward in its place.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_excluding  zombie wards",
                  pre: "excluding  Zombie Wards",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/zombieward/zombieward.png",
        },
        {
          description:
            'Gain <span style="color:orange; white-space:normal">1.<small>2</small> <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal">2 Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>) for every <i>Zombie Ward</i> spawned, up to 10, for a maximum of <span style="color:orange; white-space:normal">12 <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal">20 Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>). After spawning 10 <i>Zombie Wards</i>, gain an additional <span style="color:orange; white-space:normal">6 <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal">10 Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>).',
          leveling: [
            {
              name: "Gain 1.2 bonus Attack Damage or 2 Ability Power (Adaptive) for every Zombie Ward spawned, up to 10, for a maximum of 12 bonus Attack Damage or 20 Ability Power (Adaptive):",
              raw: "Gain 1.2 bonus Attack Damage or 2 Ability Power (Adaptive) for every Zombie Ward spawned, up to 10, for a maximum of 12 bonus Attack Damage or 20 Ability Power (Adaptive)",
              damagetype: "None",
              effectType: "Damage",
              values: 1,
              user: "player",
              units: "bonus_ad",
              pre: "Gain 1.2 bonus Attack Damage or 2 Ability Power",
              post: "for every Zombie Ward spawned, up to 10, for a maximum of 12 bonus Attack Damage or 20 Ability Power",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
              ],
            },
            {
              name: "After spawning 10 Zombie Wards, gain an additional 6 bonus Attack Damage or 10 Ability Power (Adaptive).:",
              raw: "After spawning 10 Zombie Wards, gain an additional 6 bonus Attack Damage or 10 Ability Power (Adaptive).",
              damagetype: "None",
              effectType: "Damage",
              values: 1,
              user: "player",
              units: "total_.",
              pre: "After spawning 10 Zombie Wards, gain an additional 6 bonus Attack Damage or 10 Ability Power",
              post: ".",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
              ],
            },
          ],
          locked: true,
        },
        {
          description:
            '<i>Zombie Wards</i> grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> over the surrounding 900 units, are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> to your team, are visible to the enemy team, have <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">1 health</span></span>, last for 120 seconds and don\'t count towards your ward limit.',
          leveling: [
            {
              name: "Zombie Wards grant  sight over the surrounding 900 units, are  untargetable to your team, are visible to the enemy team, have  1 health, last for 120 seconds and don't count towards your ward limit.:",
              raw: "Zombie Wards grant  sight over the surrounding 900 units, are  untargetable to your team, are visible to the enemy team, have  1 health, last for 120 seconds and don't count towards your ward limit.",
              damagetype: "None",
              effectType: "Heal",
              values: 9,
              user: "target",
              units: "total_hp",
              pre: "Zombie Wards grant  sight over the surrounding 900 units, are  untargetable to your team, are visible to the enemy team, have  1 health, last for 120 seconds and don't count towards your ward limit.",
            },
          ],
          locked: true,
        },
        {
          description:
            'Destroying a <i>Zombie Ward</i> will grant <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="1 Gold"><img alt="1 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">1</span></span>.',
          leveling: [
            {
              name: "Destroying a Zombie Ward will grant  1.:",
              raw: "Destroying a Zombie Ward will grant  1.",
              damagetype: "None",
              effectType: "Unique",
              values: 1,
              user: "player",
              units: "total_a zombie ward will grant  1.",
              pre: "Destroying a Zombie Ward will grant  1.",
            },
          ],
          locked: true,
        },
      ],
    },
    8138: {
      id: 8138,
      name: "Eyeball Collection",
      majorChangePatchVersion: "",
      tooltip:
        "Collect eyeballs for champion takedowns. Gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 1.2 Attack Damage or 2 Ability Power, per eyeball collected. <br><br>Upon completing your collection at 10 eyeballs, additionally gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 6 Attack Damage, or 10 Ability Power.<br><br>Collect 1 eyeball per champion takedown.<br><hr><br>Stats Gained: <scaleAD>+@f2@ Attack Damage</scaleAD><br>Eyeballs Collected: @f3@/10",
      shortDesc:
        "Collect eyeballs for champion <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedowns</lol-uikit-tooltipped-keyword>. Gain permanent AD or AP, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword> for each eyeball plus bonus upon collection completion.",
      longDesc:
        "Collect eyeballs for champion takedowns. Gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 1.2 Attack Damage or 2 Ability Power, per eyeball collected. <br><br>Upon completing your collection at 10 eyeballs, additionally gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 6 Attack Damage, or 10 Ability Power.<br><br>Collect 1 eyeball per champion takedown.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png",
      endOfGameStatDescs: ["Total Bonus AD/AP: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kBurstDamage: 5,
        kDamagePerSecond: 5,
      },
      released: "2018",
      path: "Domination",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Collect 1 <i>Eyeball</i> whenever scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion, up to 10.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Collect 1 Eyeball whenever scoring a  takedown against an enemy champion, up to 10.",
              damagetype: "None",
              effectType: "Gain",
              values: 1,
              user: "player",
              units:
                "total_1 eyeball whenever scoring a  takedown against an enemy champion, up to 10.",
              pre: "Collect 1 Eyeball whenever scoring a  takedown against an enemy champion, up to 10.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/eyeballcollection/eyeballcollection.png",
        },
        {
          description:
            'Gain <span style="color:orange; white-space:normal">1.<small>2</small> <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal">2 Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>) per <i>Eyeball</i> collected, up to <span style="color:orange; white-space:normal">12 <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal">20 Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>). Completing your collection awards an additional <span style="color:orange; white-space:normal">6 <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal">10 Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>).',
          leveling: [
            {
              name: "Gain 1.2 bonus Attack Damage or 2 Ability Power (Adaptive) per Eyeball collected, up to 12 bonus Attack Damage or 20 Ability Power (Adaptive):",
              raw: "Gain 1.2 bonus Attack Damage or 2 Ability Power (Adaptive) per Eyeball collected, up to 12 bonus Attack Damage or 20 Ability Power (Adaptive)",
              damagetype: "None",
              effectType: "Damage",
              values: 1,
              user: "player",
              units: "bonus_ad",
              pre: "Gain 1.2 bonus Attack Damage or 2 Ability Power",
              post: "per Eyeball collected, up to 12 bonus Attack Damage or 20 Ability Power",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
              ],
            },
            {
              name: "Completing your collection awards an additional 6 bonus Attack Damage or 10 Ability Power (Adaptive).:",
              raw: "Completing your collection awards an additional 6 bonus Attack Damage or 10 Ability Power (Adaptive).",
              damagetype: "None",
              effectType: "Damage",
              values: 6,
              user: "player",
              units: "total_.",
              pre: "Completing your collection awards an additional 6 bonus Attack Damage or 10 Ability Power",
              post: ".",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
              ],
            },
          ],
          locked: true,
        },
        {
          description:
            '<span class="template_sbc"><b>Adaptive:</b></span> Grants bonuses based on which stat you already have the most bonuses for. <i>Defaults to the first listed.</i>',
          leveling: [
            {
              name: "Name 01:",
              raw: " Grants bonuses based on which stat you already have the most bonuses for",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "bonus_ad",
              pre: "Grants bonuses based on which stat you already have the most bonuses for",
            },
            {
              name: "Defaults to the first listed.:",
              raw: "Defaults to the first listed.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_defaults to the first listed.",
              pre: "Defaults to the first listed.",
            },
          ],
          locked: true,
        },
      ],
    },
    8139: {
      id: 8139,
      name: "Taste of Blood",
      majorChangePatchVersion: "",
      tooltip:
        "Heal when you damage an enemy champion.<br><br>Healing: <font color='#ffffff'>@f2@</font> (+<scaleAD>@f3@</scaleAD>) (+<scaleAP>@f4@</scaleAP>)<br><br>Cooldown: 20s<br><hr><br>Total Healing: @f1@",
      shortDesc: "Heal when you damage an enemy champion.",
      longDesc:
        "Heal when you damage an enemy champion.<br><br>Healing: 16-30 (+0.15 bonus AD, +0.08 AP) health (based on level)<br><br>Cooldown: 20s",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png",
      endOfGameStatDescs: ["Total Healing: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kHealing: 10,
      },
      released: "2018",
      path: "Domination",
      slot: 1,
      cooldown: 20,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Damaging an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> you for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="16;" data-finish="30;" data-bot_values="16;16.82;17.65;18.47;19.29;20.12;20.94;21.76;22.59;23.41;24.24;25.06;25.88;26.71;27.53;28.35;29.18;30" data-top_values="">16 − 30 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;15% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;8% AP)</span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Damaging an enemy  champion  heals you for 16 − 30 (based on level) (+ 15% bonus AD) (+ 8% AP).",
              damagetype: "None",
              effectType: "Heal",
              values: [1, 30],
              user: "player",
              units: "total_.",
              pre: "Damaging an enemy  champion  heals you for 16 − 30",
              post: ".",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 15,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_ad",
                  pre: "+ 15% bonus AD",
                },
                {
                  values: 8,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_ap",
                  pre: "+ 8% AP",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/tasteofblood/greenterror_tasteofblood.png",
        },
        {
          description: "Does not trigger at full health.",
          leveling: [
            {
              name: "Does not trigger at full health.:",
              raw: "Does not trigger at full health.",
              damagetype: "None",
              effectType: "Heal",
              values: 0,
              user: "player",
              units: "total_hp",
              pre: "Does not trigger at full health.",
            },
          ],
          locked: true,
        },
      ],
    },
    8143: {
      id: 8143,
      name: "Sudden Impact",
      majorChangePatchVersion: "",
      tooltip:
        "After exiting stealth or using a dash, leap, blink, or teleport, dealing any damage to a champion grants you 9 Lethality and 7 Magic Penetration for 5s.<br><br>Cooldown: 4s<br><hr><br>Bonus champion damage: @f1@",
      shortDesc:
        "Gain a burst of Lethality and Magic Penetration after using a dash, leap, blink, teleport, or when leaving stealth.",
      longDesc:
        "After exiting stealth or using a dash, leap, blink, or teleport, dealing any damage to a champion grants you 9 Lethality and 7 Magic Penetration for 5s.<br><br>Cooldown: 4s",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png",
      endOfGameStatDescs: ["Bonus Damage: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kBurstDamage: 8,
        kDamagePerSecond: 2,
      },
      released: "2018",
      path: "Domination",
      slot: 1,
      cooldown:
        '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">4</span>',
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Dealing damage to an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 4 seconds of using a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span>, or exiting from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealth"><a href="/wiki/Stealth" title="Stealth"><img alt="Guerrilla Warfare.png" src="/wiki/images/Teemo_Guerrilla_Warfare.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Stealth" title="Stealth">stealth</a></span>, grants <span style="color:tomato; white-space:normal">9 <a href="/wiki/Lethality" class="mw-redirect" title="Lethality">Lethality</a></span> (<i><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_label="Armor penetration" data-displayformula="Armor penetration = Lethality * (0.6 + 0.4 * Level / 18)" data-bot_values="5.6;5.8;6;6.2;6.4;6.6;6.8;7;7.2;7.4;7.6;7.8;8;8.2;8.4;8.6;8.8;9" data-top_values="">5.<small>6</small> − 9 (based on level)</span> <a href="/wiki/Armor_penetration" title="Armor penetration">armor penetration</a></i>) and 7 <a href="/wiki/Magic_penetration" title="Magic penetration">magic penetration</a> for the next 5 seconds.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Dealing damage to an enemy  champion within 4 seconds of using a  dash or  blink, or exiting from  stealth, grants 9 Lethality (5.6 − 9 (based on level) armor penetration) and 7 magic penetration for the next 5 seconds.",
              damagetype: "Magic",
              effectType: "Damage",
              values: 4,
              user: "player",
              units: "total_7 magic penetration for the next 5 seconds.",
              pre: "Dealing damage to an enemy  champion within 4 seconds of using a  dash or  blink, or exiting from  stealth, grants 9 Lethality",
              post: "and 7 magic penetration for the next 5 seconds.",
              children: [
                {
                  values: [5.6, 9],
                  user: "player",
                  units: "total_armor",
                  pre: "5.6 − 9",
                  post: "armor penetration",
                  children: [
                    {
                      values: 0,
                      user: "player",
                      units: "base_based on level",
                      pre: "based on level",
                    },
                  ],
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/suddenimpact/suddenimpact.png",
        },
        {
          description:
            "The triggering damage will benefit from the penetration. This effect will trigger as soon as the conditions are met.",
          leveling: [
            {
              name: "The triggering damage will benefit from the penetration:",
              raw: "The triggering damage will benefit from the penetration",
              damagetype: "None",
              effectType: "Damage",
              values: 0,
              user: "player",
              units:
                "total_the triggering damage will benefit from the penetration",
              pre: "The triggering damage will benefit from the penetration",
            },
            {
              name: "This effect will trigger as soon as the conditions are met.:",
              raw: "This effect will trigger as soon as the conditions are met.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units:
                "total_this effect will trigger as soon as the conditions are met.",
              pre: "This effect will trigger as soon as the conditions are met.",
            },
          ],
          locked: true,
        },
      ],
    },
    8210: {
      id: 8210,
      name: "Transcendence",
      majorChangePatchVersion: "",
      tooltip:
        "Gain bonuses upon reaching the following levels:<br>Level 5: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> <br>Level 8: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> <br>Level 11: On Champion takedown, reduce the remaining cooldown of basic abilities by 20%.<br><br><hr><br>Bonus Ability Haste: +@f4*100@<br>Seconds Refunded: @f3@",
      shortDesc:
        "Gain bonuses upon reaching the following levels:<br>Level 5: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> <br>Level 8: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> <br>Level 11: On Champion takedown, reduce the remaining cooldown of basic abilities by 20%.",
      longDesc:
        "Gain bonuses upon reaching the following levels:<br>Level 5: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> <br>Level 8: +5 <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>Ability Haste</lol-uikit-tooltipped-keyword> <br>Level 11: On Champion takedown, reduce the remaining cooldown of basic abilities by 20%.<br>",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/Transcendence/Transcendence.png",
      endOfGameStatDescs: ["Seconds refunded: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kCooldown: 10,
      },
      released: "2018",
      path: "Sorcery",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain <b>bonuses</b> upon reaching the following levels:\n<ul><li>Level 5: + 5 ability haste.</li>\n<li>Level 8: + 5 ability haste.</li>\n<li>Level 11: Scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> reduces the <b>current</b> cooldowns of your basic <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> by 20%.</li></ul>',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain bonuses upon reaching the following levels:\nLevel 5: + 5 ability haste.\nLevel 8: + 5 ability haste.\nLevel 11: Scoring a  takedown against an enemy  champion reduces the current cooldowns of your basic abilities by 20%.",
              damagetype: "None",
              effectType: "Gain",
              values: 5,
              valuesIsPercent: true,
              user: "player",
              units: "bonus_.bonuses upon reaching the following levels:",
              pre: "Gain bonuses upon reaching the following levels:\nLevel 5: + 5 ability haste.\nLevel 8: + 5 ability haste.\nLevel 11: Scoring a  takedown against an enemy  champion reduces the current cooldowns of your basic abilities by 20%.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/transcendence/transcendence.png",
        },
      ],
    },
    8214: {
      id: 8214,
      name: "Summon Aery",
      majorChangePatchVersion: "",
      tooltip:
        "Damaging enemy champions with basic attacks or abilities sends Aery to them, dealing <font color='#FFFFFF'>@f5@</font> (+<scaleAP>@f6@</scaleAP>) (+<scaleAD>@f7@</scaleAD>).<br><br>Empower or protecting allies with abilities sends Aery to them, shielding them for <font color='#FFFFFF'>@f8@</font> (+<scaleAP>@f9@</scaleAP>) (+<scaleAD>@f10@</scaleAD>).<br><br>Aery cannot be sent out again until she returns to you.<br><br><hr><br>Aery has attacked enemies <font color='#FFFFFF'>@f1@</font> times for a total of <font color='#FFFFFF'>@f3@</font> damage.<br>Aery has helped allies <font color='#FFFFFF'>@f2@</font> times, shielding a total of <font color='#FFFFFF'>@f4@</font> damage.",
      shortDesc:
        "Your attacks and abilities send Aery to a target, damaging enemies or shielding allies.",
      longDesc:
        "Damaging enemy champions with basic attacks or abilities sends Aery to them, dealing 10 - 40 based on level (+<scaleAP>0.1 AP</scaleAP>) (+<scaleAD>0.15 bonus AD</scaleAD>).<br><br>Empower or protecting allies with abilities sends Aery to them, shielding them for 30 - 75 based on level (+<scaleAP>0.22 AP</scaleAP>) (+<scaleAD>0.35 bonus AD</scaleAD>).<br><br>Aery cannot be sent out again until she returns to you.",
      recommendationDescriptor: "Poke Damage",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/SummonAery/SummonAery.png",
      endOfGameStatDescs: [
        "Damage Dealt: @eogvar1@",
        "Damage Shielded: @eogvar2@",
      ],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Sorcery",
      slot: "Keystone",
      range: "Global",
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Damaging <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, <a href="/wiki/Named_item_effect" title="Named item effect">item effects</a>, and <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> signal <i>Aery</i> to pounce at them over 0.<small>45</small> seconds, dealing <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;" data-finish="40;" data-bot_values="10;11.76;13.53;15.29;17.06;18.82;20.59;22.35;24.12;25.88;27.65;29.41;31.18;32.94;34.71;36.47;38.24;40" data-top_values="">10 − 40 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;15% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> <span style="color: #FF8C34; white-space:normal">physical</span> or <span style="color: #00B0F0; white-space:normal">magic</span> damage. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Healing" title="Healing">Healing</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielding</a></span>, or <a href="/wiki/Buff" title="Buff">buffing</a> an allied champion signals <i>Aery</i> to leap to their side over 0.<small>35</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielding</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;" data-finish="75;" data-bot_values="30;32.65;35.29;37.94;40.59;43.24;45.88;48.53;51.18;53.82;56.47;59.12;61.76;64.41;67.06;69.71;72.35;75" data-top_values="">30 − 75 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;35% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;22.<small>5</small>% AP)</span> for 2 seconds.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Damaging basic attacks, abilities, item effects, and summoner spells against an enemy  champion signal Aery to pounce at them over 0.45 seconds, dealing 10 − 40 (based on level) (+ 15% bonus AD) (+ 10% AP) physical or magic damage",
              damagetype: "Physical",
              effectType: "Damage",
              values: [0, 40],
              user: "player",
              units: "total_physical or magic damage",
              pre: "Damaging basic attacks, abilities, item effects, and summoner spells against an enemy  champion signal Aery to pounce at them over 0.45 seconds, dealing 10 − 40",
              post: "physical or magic damage",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 15,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_ad",
                  pre: "+ 15% bonus AD",
                },
                {
                  values: 10,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_ap",
                  pre: "+ 10% AP",
                },
              ],
            },
            {
              name: " Healing,  shielding, or buffing an allied champion signals Aery to leap to their side over 0.35 seconds,  shielding them for 30 − 75 (based on level) (+ 35% bonus AD) (+ 22.5% AP) for 2 seconds.:",
              raw: " Healing,  shielding, or buffing an allied champion signals Aery to leap to their side over 0.35 seconds,  shielding them for 30 − 75 (based on level) (+ 35% bonus AD) (+ 22.5% AP) for 2 seconds.",
              damagetype: "None",
              effectType: "Heal",
              values: [0, 75],
              user: "player",
              units: "total_2 seconds.",
              pre: "Healing,  shielding, or buffing an allied champion signals Aery to leap to their side over 0.35 seconds,  shielding them for 30 − 75",
              post: "for 2 seconds.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 35,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_ad",
                  pre: "+ 35% bonus AD",
                },
                {
                  values: 22.5,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_ap",
                  pre: "+ 22.5% AP",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/summonaery/summonaery.png",
        },
        {
          description:
            '<i>Aery</i> applies her effects to the affected champion upon arrival. She then lingers on the target for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Slightly less than this duration">2 seconds</span> before flying back to the user, and cannot be sent out again until she returns. While on her way back, she is <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="200 initial return speed">initially very slow</span>, but <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="+10 speed per 51 units she travels">gradually accelerates</span>, and <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="+2000 speed per 51 units traveled after coming within 200 units of the user">can be picked up by moving near her</span>.',
          leveling: [
            {
              name: "Aery applies her effects to the affected champion upon arrival:",
              raw: "Aery applies her effects to the affected champion upon arrival",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_ap",
              pre: "Aery applies her effects to the affected champion upon arrival",
            },
            {
              name: "She then lingers on the target for 2 seconds before flying back to the user, and cannot be sent out again until she returns:",
              raw: "She then lingers on the target for 2 seconds before flying back to the user, and cannot be sent out again until she returns",
              damagetype: "None",
              effectType: "Gain",
              values: 2,
              user: "target",
              units:
                "total_then lingers on the target for 2 seconds before flying back to the user, and cannot be sent out again until she returns",
              pre: "She then lingers on the target for 2 seconds before flying back to the user, and cannot be sent out again until she returns",
            },
            {
              name: "While on her way back, she is initially very slow, but gradually accelerates, and can be picked up by moving near her.:",
              raw: "While on her way back, she is initially very slow, but gradually accelerates, and can be picked up by moving near her.",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "total_ad",
              pre: "While on her way back, she is initially very slow, but gradually accelerates, and can be picked up by moving near her.",
            },
          ],
          locked: true,
        },
        {
          description:
            'If<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">15% <b>bonus</b> AD</span> ≥ <span style="color: #7A6DFF; white-space:normal">10% AP</span>,&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> AD</span> ≥ <span style="color: #7A6DFF; white-space:normal">66.<small><span style="text-decoration: overline;">6</span></small>% AP</span>,&nbsp;」</span></span>deals <span style="color: #FF8C34; white-space:normal">physical damage</span>. If otherwise, deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
          leveling: [
            {
              name: "If「 15% bonus AD ≥ 10% AP, 」「 bonus AD ≥ 66.6% AP, 」deals physical damage:",
              raw: "If「 15% bonus AD ≥ 10% AP, 」「 bonus AD ≥ 66.6% AP, 」deals physical damage",
              damagetype: "Physical",
              effectType: "Damage",
              values: 1,
              valuesIsPercent: true,
              user: "player",
              units: "bonus_ad",
              pre: "If「 15% bonus AD ≥ 10% AP, 」「 bonus AD ≥ 66.6% AP, 」deals physical damage",
            },
            {
              name: "If otherwise, deals magic damage.:",
              raw: "If otherwise, deals magic damage.",
              damagetype: "Magic",
              effectType: "Damage",
              values: 0,
              user: "player",
              units: "total_if otherwise, deals magic damage.",
              pre: "If otherwise, deals magic damage.",
            },
          ],
          locked: true,
        },
      ],
    },
    8224: {
      id: 8224,
      name: "Nullifying Orb",
      majorChangePatchVersion: "",
      tooltip:
        "When you take magic damage that would reduce your Health below 30%, gain a shield that absorbs <font color='#ffffff'>@f2@</font> (+<scaleAD>@f3@</scaleAD>) (+<scaleAP>@f4@</scaleAP>) magic damage for 4s.<br><br>Cooldown: 60s<br><hr><br>Total Magic Damage Blocked: @f1@",
      shortDesc:
        "Gain a magic damage shield when taken to low health by magic damage.",
      longDesc:
        "When you take magic damage that would reduce your Health below 30%, gain a shield that absorbs 35 - 110 magic damage based on level (<scaleAP>+0.09 AP</scaleAP> and <scaleAD>+0.14 bonus AD</scaleAD>) for 4s.<br><br>Cooldown: 60s",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/NullifyingOrb/Pokeshield.png",
      endOfGameStatDescs: ["Total shield granted: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kDurability: 10,
      },
      released: "2018",
      path: "Sorcery",
      slot: 1,
      cooldown:
        '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-trigger">60</span>',
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> If you would take <span style="color: #00B0F0; white-space:normal">magic damage</span> that would reduce you below <span style="color: #1F995C; white-space:normal">30% of your <b>maximum</b> health</span>, you first gain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that absorbs <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="35;" data-finish="110;" data-bot_values="35;39.41;43.82;48.24;52.65;57.06;61.47;65.88;70.29;74.71;79.12;83.53;87.94;92.35;96.76;101.18;105.59;110" data-top_values="">35 − 110 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;14% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;9% AP)</span> magic damage</span> for 4 seconds.',
          leveling: [
            {
              name: "Name 01:",
              raw: " If you would take magic damage that would reduce you below 30% of your maximum health, you first gain a  shield that absorbs 35 − 110 (based on level) (+ 14% bonus AD) (+ 9% AP) magic damage for 4 seconds.",
              damagetype: "Magic",
              effectType: "Damage",
              values: 3,
              valuesIsPercent: true,
              user: "player",
              units: "total_damage for 4 seconds.",
              pre: "If you would take magic damage that would reduce you below 30% of your maximum health, you first gain a  shield that absorbs 35 − 110",
              post: "magic damage for 4 seconds.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 14,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_ad",
                  pre: "+ 14% bonus AD",
                },
                {
                  values: 9,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_ap",
                  pre: "+ 9% AP",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/nullifyingorb/pokeshield.png",
        },
      ],
    },
    8226: {
      id: 8226,
      name: "Manaflow Band",
      majorChangePatchVersion: "8.7",
      tooltip:
        "Hitting an enemy champion with an ability permanently increases your maximum mana by 25, up to 250 mana.<br><br>After reaching 250 bonus mana, restore 1% of your missing mana every 5 seconds.<br><br>Cooldown: 15 seconds<br><hr><br>Total bonus mana: @f1@<br>Total mana restored: @f2@",
      shortDesc:
        "Hitting an enemy champion with an ability permanently increases your maximum mana by 25, up to 250 mana.<br><br>After reaching 250 bonus mana, restore 1% of your missing mana every 5 seconds.",
      longDesc:
        "Hitting an enemy champion with an ability permanently increases your maximum mana by 25, up to 250 mana.<br><br>After reaching 250 bonus mana, restore 1% of your missing mana every 5 seconds.<br><br>Cooldown: 15 seconds",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png",
      endOfGameStatDescs: [
        "Total bonus mana: @eogvar1@",
        "Total mana restored: @eogvar2@",
      ],
      recommendationDescriptorAttributes: {
        kMana: 15,
      },
      released: "2018",
      path: "Sorcery",
      slot: 1,
      cooldown: 15,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">Affecting</span> an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> with an <a href="/wiki/Champion_ability" title="Champion ability">ability</a> permanently increases your <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><b>maximum</b> mana by 25</span></span>, up to <span style="color: #0099CC; white-space:normal">250&nbsp;mana</span>. <span style="color: #0099CC; white-space:normal">Mana</span> gained from this effect preserves your <span style="color: #0099CC; white-space:normal"><b>current</b> mana</span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Affecting an enemy  champion with an ability permanently increases your  maximum mana by 25, up to 250 mana",
              damagetype: "None",
              effectType: "Unique",
              values: 2,
              user: "player",
              units: "total_mana",
              pre: "Affecting an enemy  champion with an ability permanently increases your  maximum mana by 25, up to 250 mana",
            },
            {
              name: "Mana gained from this effect preserves your current mana.:",
              raw: "Mana gained from this effect preserves your current mana.",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "total_mana",
              pre: "Mana gained from this effect preserves your current mana.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/manaflowband/manaflowband.png",
        },
        {
          description:
            'After reaching <span style="color: #0099CC; white-space:normal">250 <b>bonus</b> mana</span>, permanently restore <span style="color: #0099CC; white-space:normal">1% of your <b>missing</b> mana</span> every 5&nbsp;seconds.',
          leveling: [
            {
              name: "After reaching 250 bonus mana, permanently restore 1% of your missing mana every 5 seconds.:",
              raw: "After reaching 250 bonus mana, permanently restore 1% of your missing mana every 5 seconds.",
              damagetype: "None",
              effectType: "Gain",
              values: 2,
              valuesIsPercent: true,
              user: "player",
              units: "bonus_mana",
              pre: "After reaching 250 bonus mana, permanently restore 1% of your missing mana every 5 seconds.",
            },
          ],
          locked: true,
        },
      ],
    },
    8229: {
      id: 8229,
      name: "Arcane Comet",
      majorChangePatchVersion: "",
      tooltip:
        "Damaging a champion with an ability hurls a comet at their location, or, if Arcane Comet is on cooldown, reduces its remaining cooldown.<br><rules><br>Cooldown Reduction:<br>Single Target: 20%.<br>Area of Effect: 10%.<br>Damage over Time: 5%.<br></rules><br>Damage: <font color='#FFFFFF'>@f5@</font> (+<scaleAP>@f6@</scaleAP>) (+<scaleAD>@f7@</scaleAD>)<br>Cooldown: @f2@s<br><hr><br>You have hit with @f3@% of comets fired, for a total of @f1@ damage to champions.",
      shortDesc:
        "Damaging a champion with an ability hurls a damaging comet at their location.",
      longDesc:
        "Damaging a champion with an ability hurls a comet at their location, or, if Arcane Comet is on cooldown, reduces its remaining cooldown.<br><br><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>Adaptive Damage</font></lol-uikit-tooltipped-keyword>: 30 - 100 based on level (<scaleAP>+0.2 AP</scaleAP> and <scaleAD>+0.35 bonus AD</scaleAD>)<br>Cooldown: 20 - 8s<br><rules><br>Cooldown Reduction:<br>Single Target: 20%.<br>Area of Effect: 10%.<br>Damage over Time: 5%.<br></rules>",
      recommendationDescriptor: "Ability Damage",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png",
      endOfGameStatDescs: ["Total Damage Dealt: @eogvar1@"],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Sorcery",
      slot: "Keystone",
      cooldown:
        '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="8;" data-bot_values="20;19.29;18.59;17.88;17.18;16.47;15.76;15.06;14.35;13.65;12.94;12.24;11.53;10.82;10.12;9.41;8.71;8" data-top_values="">20 − 8 (based on level)</span>',
      range: "Global",
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Dealing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ability damage"><a href="/wiki/Ability_damage" title="Ability damage">ability damage</a></span> to an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hurls an <i>Arcane Comet</i> at their current location that lands after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.8 seconds, but rounded up to the next game tick.">0.<small>825</small> seconds</span>, dealing <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;" data-finish="100;" data-bot_values="30;34.12;38.24;42.35;46.47;50.59;54.71;58.82;62.94;67.06;71.18;75.29;79.41;83.53;87.65;91.76;95.88;100" data-top_values="">30 − 100 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;35% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #FF8C34; white-space:normal">physical</span> or <span style="color: #00B0F0; white-space:normal">magic</span> damage to enemies within a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a></span> 140 radius upon impact.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Dealing ability damage to an enemy  champion hurls an Arcane Comet at their current location that lands after 0.825 seconds, dealing 30 − 100 (based on level) (+ 35% bonus AD) (+ 20% AP) physical or magic damage to enemies within a  140 radius upon impact.",
              damagetype: "Physical",
              effectType: "Damage",
              values: [0, 100],
              user: "player",
              units: "total_ad",
              pre: "Dealing ability damage to an enemy  champion hurls an Arcane Comet at their current location that lands after 0.825 seconds, dealing 30 − 100",
              post: "physical or magic damage to enemies within a  140 radius upon impact.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 35,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_ad",
                  pre: "+ 35% bonus AD",
                },
                {
                  values: 20,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_ap",
                  pre: "+ 20% AP",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/arcanecomet/arcanecomet.png",
        },
        {
          description:
            'Dealing forms of ability damage reduces the <b>remaining</b> cooldown.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Damage" title="Damage">Spell damage</a></span>: 20%</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Damage" title="Damage">Area damage</a></span>: 10% per enemy hit</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Damage" title="Damage">Persistent damage</a></span>: 5%</li></ul>',
          leveling: [
            {
              name: "Name 01:",
              raw: " 20%\n Area damage: 10% per enemy hit\n Persistent damage: 5%",
              damagetype: "None",
              effectType: "Damage",
              values: 20,
              valuesIsPercent: true,
              user: "player",
              units: "total_area damage: 10",
              pre: "20%\n Area damage: 10% per enemy hit\n Persistent damage: 5%",
            },
          ],
          locked: true,
        },
        {
          description:
            'If<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">35% <b>bonus</b> AD</span> ≥ <span style="color: #7A6DFF; white-space:normal">20% AP</span>,&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> AD</span> ≥ <span style="color: #7A6DFF; white-space:normal">57% AP</span>,&nbsp;」</span></span>deals <span style="color: #FF8C34; white-space:normal">physical damage</span>. If otherwise, deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
          leveling: [
            {
              name: "If「 35% bonus AD ≥ 20% AP, 」「 bonus AD ≥ 57% AP, 」deals physical damage:",
              raw: "If「 35% bonus AD ≥ 20% AP, 」「 bonus AD ≥ 57% AP, 」deals physical damage",
              damagetype: "Physical",
              effectType: "Damage",
              values: 3,
              valuesIsPercent: true,
              user: "player",
              units: "bonus_ad",
              pre: "If「 35% bonus AD ≥ 20% AP, 」「 bonus AD ≥ 57% AP, 」deals physical damage",
            },
            {
              name: "If otherwise, deals magic damage.:",
              raw: "If otherwise, deals magic damage.",
              damagetype: "Magic",
              effectType: "Damage",
              values: 0,
              user: "player",
              units: "total_if otherwise, deals magic damage.",
              pre: "If otherwise, deals magic damage.",
            },
          ],
          locked: true,
        },
      ],
    },
    8230: {
      id: 8230,
      name: "Phase Rush",
      majorChangePatchVersion: "",
      tooltip:
        "Hitting an enemy champion with 3 attacks or <b>separate</b> abilities within 4s grants <speed>15 - 40% Move Speed</speed> based on level and 75% Slow Resistance. <hr>This is increased to <speed>30 - 60% Move Speed</speed> for Melee champions.<hr>Duration: 3s<br>Cooldown: @f4@s<br>Haste Bonus: @f2@%",
      shortDesc:
        "Hitting an enemy champion with 3 <b>separate</b> attacks or abilities grants a burst of <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword>. ",
      longDesc:
        "Hitting an enemy champion with 3 attacks or <b>separate</b> abilities within 4s grants <speed>15 - 40% Move Speed</speed> based on level and 75% Slow Resistance. <hr>This is increased to <speed>30 - 60% Move Speed</speed> for Melee champions.<hr>Duration: 3s<br>Cooldown: 30s - 10s",
      recommendationDescriptor: "Rush of Movement",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png",
      endOfGameStatDescs: ["Total activations: @eogvar1@"],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Sorcery",
      slot: "Keystone",
      cooldown:
        '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;" data-finish="10;" data-bot_values="30;28.82;27.65;26.47;25.29;24.12;22.94;21.76;20.59;19.41;18.24;17.06;15.88;14.71;13.53;12.35;11.18;10" data-top_values="">30 − 10 (based on level)</span>',
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Damaging <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, <a href="/wiki/Named_item_effect" title="Named item effect">item effects</a>, and <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a>, as well as the application of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> and <a href="/wiki/Damage_over_time" title="Damage over time">damage over time</a> effects, generate <a href="/wiki/Stack" title="Stack">stacks</a> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, up to one per attack or cast per champion. Applying 3 stacks to a target within a 4 second period grants you <span style="white-space:pre;">(<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a></span> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-top_label="level" data-displayformula="" data-bot_values="30;31.76;33.53;35.29;37.06;38.82;40.59;42.35;44.12;45.88;47.65;49.41;51.18;52.94;54.71;56.47;58.24;60" data-top_values="" data-bot_key="%">30% − 60%</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a></span> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-top_label="level" data-displayformula="" data-bot_values="15;16.47;17.94;19.41;20.88;22.35;23.82;25.29;26.76;28.24;29.71;31.18;32.65;34.12;35.59;37.06;38.53;40" data-top_values="" data-bot_key="%">15% − 40%</span>)</span> <span style="color: #F5EE99; white-space:normal">(based on level)</span> <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<b>bonus</b> movement speed</span></span> and 75% <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span> for 3 seconds.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Damaging basic attacks, abilities, item effects, and summoner spells, as well as the application of  crowd control and damage over time effects, generate stacks against enemy  champions, up to one per attack or cast per champion",
              damagetype: "None",
              effectType: "Damage",
              values: 0,
              user: "player",
              units: "total_ap",
              pre: "Damaging basic attacks, abilities, item effects, and summoner spells, as well as the application of  crowd control and damage over time effects, generate stacks against enemy  champions, up to one per attack or cast per champion",
            },
            {
              name: "Applying 3 stacks to a target within a 4 second period grants you ( 30% − 60% /  15% − 40%) (based on level)  bonus movement speed and 75%  slow resist for 3 seconds.:",
              raw: "Applying 3 stacks to a target within a 4 second period grants you ( 30% − 60% /  15% − 40%) (based on level)  bonus movement speed and 75%  slow resist for 3 seconds.",
              damagetype: "None",
              effectType: "Gain",
              values: 3,
              user: "player",
              units: "slow_resist",
              pre: "Applying 3 stacks to a target within a 4 second period grants you",
              post: "bonus movement speed and 75%  slow resist for 3 seconds.",
              children: [
                {
                  values: 30,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_− 60",
                  pre: "30% − 60% /  15% − 40%",
                },
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/phaserush/phaserush.png",
        },
      ],
    },
    8232: {
      id: 8232,
      name: "Waterwalking",
      majorChangePatchVersion: "",
      tooltip:
        "Gain <speed>25 Move Speed</speed> and an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of up to 18 Attack Damage or 30 Ability Power (based on level) when in the river.",
      shortDesc:
        "Gain <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword> and AP or AD, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword> in the river.",
      longDesc:
        "Gain <speed>25 Move Speed</speed> and an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of up to 18 Attack Damage or 30 Ability Power (based on level) when in the river.<br><br><hr><br><i>May you be as swift as the rushing river and agile as a startled Rift Scuttler.</i><br>",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png",
      endOfGameStatDescs: ["Total time active: @eogvar1@:@eogvar2@"],
      recommendationDescriptorAttributes: {
        kBurstDamage: 2,
        kDamagePerSecond: 2,
        kMoveSpeed: 6,
      },
      released: "2018",
      path: "Sorcery",
      slot: 3,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> While in the <a href="/wiki/Summoner%27s_Rift" title="Summoner\'s Rift">river</a>, you gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">25</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="3;" data-finish="18;" data-bot_values="3;3.88;4.76;5.65;6.53;7.41;8.29;9.18;10.06;10.94;11.82;12.71;13.59;14.47;15.35;16.24;17.12;18" data-top_values="">3 − 18 (based on level)</span> <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;" data-finish="30;" data-bot_values="5;6.47;7.94;9.41;10.88;12.35;13.82;15.29;16.76;18.24;19.71;21.18;22.65;24.12;25.59;27.06;28.53;30" data-top_values="">5 − 30 (based on level)</span> Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>).',
          leveling: [
            {
              name: "Name 01:",
              raw: " While in the river, you gain  25 bonus movement speed and 3 − 18 (based on level) bonus Attack Damage or 5 − 30 (based on level) Ability Power (Adaptive).",
              damagetype: "None",
              effectType: "Damage",
              values: [2, 18],
              user: "player",
              units: "total_ad",
              pre: "While in the river, you gain  25 bonus movement speed and 3 − 18",
              post: "bonus Attack Damage or 5 − 30",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/waterwalking/waterwalking.png",
        },
        {
          description:
            '<span class="template_sbc"><b>Adaptive:</b></span> Grants bonuses based on which stat you already have the most bonuses for. <i>Defaults to the first listed.</i>',
          leveling: [
            {
              name: "Name 01:",
              raw: " Grants bonuses based on which stat you already have the most bonuses for",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "bonus_ad",
              pre: "Grants bonuses based on which stat you already have the most bonuses for",
            },
            {
              name: "Defaults to the first listed.:",
              raw: "Defaults to the first listed.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_defaults to the first listed.",
              pre: "Defaults to the first listed.",
            },
          ],
          locked: true,
        },
      ],
    },
    8233: {
      id: 8233,
      name: "Absolute Focus",
      majorChangePatchVersion: "",
      tooltip:
        "While above 70% health, gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of up to 18 Attack Damage or 30 Ability Power (based on level). <br><br>Grants 1.8 Attack Damage or 3 Ability Power at level 1. <br><hr><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>",
      shortDesc:
        "While above 70% health, gain extra <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>adaptive damage</lol-uikit-tooltipped-keyword>.",
      longDesc:
        "While above 70% health, gain an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of up to 18 Attack Damage or 30 Ability Power (based on level). <br><br>Grants 1.8 Attack Damage or 3 Ability Power at level 1. ",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png",
      endOfGameStatDescs: ["Total time active: @eogvar1@:@eogvar2@"],
      recommendationDescriptorAttributes: {
        kBurstDamage: 5,
        kDamagePerSecond: 5,
      },
      released: "2018",
      path: "Sorcery",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1.8;" data-finish="18;" data-bot_values="1.8;2.75;3.71;4.66;5.61;6.56;7.52;8.47;9.42;10.38;11.33;12.28;13.24;14.19;15.14;16.09;17.05;18" data-top_values="">1.<small>8</small> − 18 (based on level)</span> <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="3;" data-finish="30;" data-bot_values="3;4.59;6.18;7.76;9.35;10.94;12.53;14.12;15.71;17.29;18.88;20.47;22.06;23.65;25.24;26.82;28.41;30" data-top_values="">3 − 30 (based on level)</span> Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>) while above <span style="color: #1F995C; white-space:normal">70% of your <b>maximum</b> health</span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain 1.8 − 18 (based on level) bonus Attack Damage or 3 − 30 (based on level) Ability Power (Adaptive) while above 70% of your maximum health.",
              damagetype: "None",
              effectType: "Damage",
              values: [1, 18],
              user: "player",
              units: "total_ad",
              pre: "Gain 1.8 − 18",
              post: "bonus Attack Damage or 3 − 30",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/absolutefocus/absolutefocus.png",
        },
        {
          description:
            '<span class="template_sbc"><b>Adaptive:</b></span> Grants bonuses based on which stat you already have the most bonuses for. <i>Defaults to the first listed.</i>',
          leveling: [
            {
              name: "Name 01:",
              raw: " Grants bonuses based on which stat you already have the most bonuses for",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "bonus_ad",
              pre: "Grants bonuses based on which stat you already have the most bonuses for",
            },
            {
              name: "Defaults to the first listed.:",
              raw: "Defaults to the first listed.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_defaults to the first listed.",
              pre: "Defaults to the first listed.",
            },
          ],
          locked: true,
        },
      ],
    },
    8234: {
      id: 8234,
      name: "Celerity",
      majorChangePatchVersion: "9.9",
      tooltip:
        "All movement bonuses are 7% more effective on you and gain <speed>1% Move Speed</speed>.<br><br>Currently Granted: <speed>@f1@ Move Speed</speed><br>Extra Distance Traveled: @f2@",
      shortDesc:
        "All <speed>Move Speed</speed> bonuses are 7% more effective on you and gain <speed>1% Move Speed</speed>.",
      longDesc:
        "All movement bonuses are 7% more effective on you and gain <speed>1% Move Speed</speed>.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/Celerity/CelerityTemp.png",
      endOfGameStatDescs: ["Extra Distance Travelled: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kMoveSpeed: 10,
      },
      released: "2018",
      path: "Sorcery",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> All <a href="/wiki/Movement_speed" title="Movement speed">movement speed</a> <b>bonuses</b> increase in effectiveness by 7%.',
          leveling: [
            {
              name: "Name 01:",
              raw: " All movement speed bonuses increase in effectiveness by 7%.",
              damagetype: "None",
              effectType: "Gain",
              values: 7,
              valuesIsPercent: true,
              user: "player",
              units:
                "bonus_.movement speed bonuses increase in effectiveness by 7",
              pre: "All movement speed bonuses increase in effectiveness by 7%.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/celerity/celeritytemp.png",
        },
        {
          description:
            'Additionally, you gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">1% <b>bonus</b> movement speed</span></span>.',
          leveling: [
            {
              name: "Additionally, you gain  1% bonus movement speed.:",
              raw: "Additionally, you gain  1% bonus movement speed.",
              damagetype: "None",
              effectType: "Gain",
              values: 1,
              valuesIsPercent: true,
              user: "player",
              units: "bonus_bonus movement speed.you gain  1",
              pre: "Additionally, you gain  1% bonus movement speed.",
            },
          ],
          locked: true,
        },
      ],
    },
    8236: {
      id: 8236,
      name: "Gathering Storm",
      majorChangePatchVersion: "",
      tooltip:
        "Every 10 min gain AP or AD, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword>.<br><br><i>10 min</i>: + 8 AP or 5 AD <br><i>20 min</i>: + 24 AP or 14 AD<br><i>30 min</i>: + 48 AP or 29 AD<br><i>40 min</i>: + 80 AP or 48 AD<br><i>50 min</i>: + 120 AP or 72 AD<br><i>60 min</i>: + 168 AP or 101 AD<br>etc...<br><hr><br>Current Bonus: <scaleAD>+@f1@ <scaleAD>Attack Damage</scaleAD></scaleAD>",
      shortDesc:
        "Gain increasing amounts of AD or AP, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>adaptive</lol-uikit-tooltipped-keyword> over the course of the game.",
      longDesc:
        "Every 10 min gain AP or AD, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword>.<br><br><i>10 min</i>: + 8 AP or 5 AD <br><i>20 min</i>: + 24 AP or 14 AD<br><i>30 min</i>: + 48 AP or 29 AD<br><i>40 min</i>: + 80 AP or 48 AD<br><i>50 min</i>: + 120 AP or 72 AD<br><i>60 min</i>: + 168 AP or 101 AD<br>etc...",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png",
      endOfGameStatDescs: ["Total Bonus AD/AP: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kBurstDamage: 5,
        kDamagePerSecond: 5,
      },
      released: "2018",
      path: "Sorcery",
      slot: 3,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain increasing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Adaptive force"><a href="/wiki/Adaptive_force" title="Adaptive force"><img alt="Adaptive Force icon.png" src="/wiki/images/Adaptive_Force_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive Force</a></span> every 10 minutes that grants a total of <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="minutes" data-displayformula="2.4x(x-1 where x = 1+(1 per every 10 minutes passed)" data-bot_values="0;4.8;14.4;28.8;48;∞" data-top_values="0;10;20;30;40;∞">0 / 4.<small>8</small> / 14.<small>4</small> / 28.<small>8</small> / 48 / ∞ (based on minutes)</span> <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="minutes" data-displayformula="4x(x-1) where x = 1+(1 per every 10 minutes passed)" data-bot_values="0;8;24;48;80;∞" data-top_values="0;10;20;30;40;∞">0 / 8 / 24 / 48 / 80 / ∞ (based on minutes)</span> Ability Power</span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain increasing  Adaptive Force every 10 minutes that grants a total of 0 / 4.8 / 14.4 / 28.8 / 48 / ∞ (based on minutes) bonus Attack Damage or 0 / 8 / 24 / 48 / 80 / ∞ (based on minutes) Ability Power.",
              damagetype: "None",
              effectType: "Damage",
              values: [1, 4.8, 14.4, 28.8, 48, 0],
              user: "player",
              units: "bonus_ad",
              pre: "Gain increasing  Adaptive Force every 10 minutes that grants a total of 0 / 4.8 / 14.4 / 28.8 / 48 / ∞",
              post: "bonus Attack Damage or 0 / 8 / 24 / 48 / 80 / ∞",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on minutes",
                  pre: "based on minutes",
                },
                {
                  values: 0,
                  user: "player",
                  units: "base_based on minutes",
                  pre: "based on minutes",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/gatheringstorm/gatheringstorm.png",
        },
        {
          description:
            '<span class="template_sbc"><b>Adaptive:</b></span> Grants bonuses based on which stat you already have the most bonuses for. <i>Defaults to the first listed.</i>',
          leveling: [
            {
              name: "Name 01:",
              raw: " Grants bonuses based on which stat you already have the most bonuses for",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "bonus_ad",
              pre: "Grants bonuses based on which stat you already have the most bonuses for",
            },
            {
              name: "Defaults to the first listed.:",
              raw: "Defaults to the first listed.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_defaults to the first listed.",
              pre: "Defaults to the first listed.",
            },
          ],
          locked: true,
        },
      ],
    },
    8237: {
      id: 8237,
      name: "Scorch",
      majorChangePatchVersion: "9.9",
      tooltip:
        "Your next damaging ability hit sets champions on fire dealing 20 - 40 bonus magic damage based on level after 1s.<br><br>Cooldown: 10s<br><hr><br>Current Damage: @f2@<br>Total Damage Dealt: @f1@",
      shortDesc: "Your first damaging ability hit every 10s burns champions.",
      longDesc:
        "Your next damaging ability hit sets champions on fire dealing 20 - 40 bonus magic damage based on level after 1s.<br><br>Cooldown: 10s",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/Scorch/Scorch.png",
      endOfGameStatDescs: ["Total Bonus Damage: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kBurstDamage: 7,
        kDamagePerSecond: 3,
      },
      released: "2018",
      path: "Sorcery",
      slot: 3,
      cooldown: 10,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Dealing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ability damage"><a href="/wiki/Ability_damage" title="Ability damage">ability damage</a></span> to an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> sets them on fire, dealing them <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="40;" data-bot_values="20;21.18;22.35;23.53;24.71;25.88;27.06;28.24;29.41;30.59;31.76;32.94;34.12;35.29;36.47;37.65;38.82;40" data-top_values="">20 − 40 (based on level)</span></span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> after 1 second.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Dealing ability damage to an enemy  champion sets them on fire, dealing them 20 − 40 (based on level) bonus magic damage after 1 second.",
              damagetype: "Magic",
              effectType: "Damage",
              values: [2, 40],
              user: "player",
              units: "total_magic damage after 1 second.",
              pre: "Dealing ability damage to an enemy  champion sets them on fire, dealing them 20 − 40",
              post: "bonus magic damage after 1 second.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/scorch/scorch.png",
        },
      ],
    },
    8242: {
      id: 8242,
      name: "Unflinching",
      majorChangePatchVersion: "",
      tooltip:
        "Gain 5% Tenacity and 5% Slow Resist. These values increase by up to an additional 20% Tenacity and 20% Slow Resist based on missing health. Maximum value achieved at 30% health. <br>Current Bonus Tenacity: @f1@%<br>Current Bonus Slow Resist: @f2@%<br><br>Total combat time with increased resistances: @f6@ seconds.",
      shortDesc:
        "Gain a small amount of tenacity that increases with missing health. ",
      longDesc:
        "Gain 5% Tenacity and 5% Slow Resist. These values increase by up to an additional 20% Tenacity and 20% Slow Resist based on missing health. Maximum value achieved at 30% health. ",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/Unflinching/Unflinching.png",
      endOfGameStatDescs: [
        "Seconds in combat at max tenacity granted: @eogvar1@",
      ],
      recommendationDescriptorAttributes: {
        kDurability: 4,
        kUtility: 6,
      },
      released: "2018",
      path: "Resolve",
      slot: 3,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="missing health" data-displayformula="2% per 7% of \'\'\'missing\'\'\' health" data-bot_values="5;7;9;11;13;15;17;19;21;23;25" data-top_values="0;7;14;21;28;35;42;49;56;63;70" data-bot_key="%" data-top_key="%">5% − 25% (based on <b>missing</b> health)</span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tenacity"><a href="/wiki/Tenacity" title="Tenacity"><img alt="Tenacity icon.png" src="/wiki/images/Tenacity_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Tenacity" title="Tenacity">tenacity</a></span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain 5% − 25% (based on missing health)  slow resist and  tenacity.",
              damagetype: "None",
              effectType: "Heal",
              values: 5,
              valuesIsPercent: true,
              user: "player",
              units: "tenacity",
              pre: "Gain 5% − 25%",
              post: "slow resist and  tenacity.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "missing_hp",
                  pre: "based on missing health",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/unflinching/unflinching.png",
        },
      ],
    },
    8275: {
      id: 8275,
      name: "Nimbus Cloak",
      majorChangePatchVersion: "8.11",
      tooltip:
        "After casting a Summoner Spell, gain a <speed>Move Speed</speed> increase that lasts for 2s and allows you to pass through units.<br><hr><br>Increase: <speed>5% - 25% Move Speed</speed> based on the Summoner Spell's cooldown. (Higher cooldown Summoner Spells grant more <speed>Move Speed</speed>). <br><hr><br>Times activated: @f1@",
      shortDesc:
        "After casting a Summoner Spell, gain a short <speed>Move Speed</speed> increase that allows you to pass through units.",
      longDesc:
        "After casting a Summoner Spell, gain a <speed>Move Speed</speed> increase that lasts for 2s and allows you to pass through units.<br><br>Increase: <speed>5% - 25% Move Speed</speed> based on the Summoner Spell's cooldown. (Higher cooldown Summoner Spells grant more <speed>Move Speed</speed>). ",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/NimbusCloak/6361.png",
      endOfGameStatDescs: ["Times activated: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kMoveSpeed: 10,
      },
      released: "2018",
      path: "Sorcery",
      slot: 1,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Using a <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spell</a> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-top_label="summoner spell cooldown" data-bot_values="5;20;25" data-top_values="0;100;250" data-bot_key="%">5% − 25% (based on summoner spell cooldown)</span></span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> for 2 seconds.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Using a summoner spell grants  ghosting and  5% − 25% (based on summoner spell cooldown) bonus movement speed for 2 seconds.",
              damagetype: "None",
              effectType: "Gain",
              values: 5,
              valuesIsPercent: true,
              user: "player",
              units: "total_movement speed for 2 seconds.",
              pre: "Using a summoner spell grants  ghosting and  5% − 25%",
              post: "bonus movement speed for 2 seconds.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on summoner spell cooldown",
                  pre: "based on summoner spell cooldown",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/nimbuscloak/6361.png",
        },
      ],
    },
    8299: {
      id: 8299,
      name: "Last Stand",
      majorChangePatchVersion: "",
      tooltip:
        "Deal 5% - 11% increased damage to champions while you are below 60% health. Max damage gained at 30% health.<br><br><rules>Minimum bonus is 5%.<br>Maximum bonus is granted while below 30% health.</rules><br><hr><br>Total bonus damage: <scaleAD>@f1@</scaleAD>",
      shortDesc: "Deal more damage to champions while you are low on health.",
      longDesc:
        "Deal 5% - 11% increased damage to champions while you are below 60% health. Max damage gained at 30% health.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Sorcery/LastStand/LastStand.png",
      endOfGameStatDescs: ["Total Bonus Damage: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kBurstDamage: 1,
        kDamagePerSecond: 9,
      },
      released: "2018",
      path: "Precision",
      slot: 3,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Deal 5% increased damage (except <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">true damage</a></span>) to champions while below <span style="color: #1F995C; white-space:normal">60% <b>maximum</b> health</span>. This increases further based on your <span style="color: #1F995C; white-space:normal"><b>missing</b> health</span>, up to 11% increased damage while below <span style="color: #1F995C; white-space:normal">30% <b>maximum</b> health</span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Deal 5% increased damage (except  true damage) to champions while below 60% maximum health",
              damagetype: "True",
              effectType: "Damage",
              values: 5,
              valuesIsPercent: true,
              user: "player",
              units: "maximum_hp",
              pre: "Deal 5% increased damage",
              post: "to champions while below 60% maximum health",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_except  true damage",
                  pre: "except  true damage",
                },
              ],
            },
            {
              name: "This increases further based on your missing health, up to 11% increased damage while below 30% maximum health.:",
              raw: "This increases further based on your missing health, up to 11% increased damage while below 30% maximum health.",
              damagetype: "None",
              effectType: "Damage",
              values: 1,
              valuesIsPercent: true,
              user: "player",
              units: "missing_hp",
              pre: "This increases further based on your missing health, up to 11% increased damage while below 30% maximum health.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/laststand/laststand.png",
        },
      ],
    },
    8304: {
      id: 8304,
      name: "Magical Footwear",
      majorChangePatchVersion: "9.9",
      tooltip:
        "You get free Slightly Magical Footwear at 12 min, but you cannot buy boots before then. For each takedown you acquire the boots 45s sooner.<br><br>Slightly Magical Footwear grants you an additional <speed>10 Move Speed</speed>.<br><hr><br><scaleAD>Boots arrival time:</scaleAD> @f1@:@f2@@f3@",
      shortDesc:
        "You get free boots at 12 min but you cannot buy boots before then. Each <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedown</lol-uikit-tooltipped-keyword> you get makes your boots come 45s sooner.",
      longDesc:
        "You get free Slightly Magical Footwear at 12 min, but you cannot buy boots before then. For each takedown you acquire the boots 45s sooner.<br><br>Slightly Magical Footwear grants you an additional <speed>10 Move Speed</speed>.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png",
      endOfGameStatDescs: ["Boots Arrival Time: @eogvar1@:@eogvar2@@eogvar3@"],
      recommendationDescriptorAttributes: {
        kGold: 10,
        kMoveSpeed: 3,
      },
      released: "2018",
      path: "Inspiration",
      slot: 1,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> After 12 minutes (reduced by 45 seconds whenever scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion), you gain <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Slightly Magical Boots" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Slightly_Magical_Boots" title="Slightly Magical Boots"><img alt="Slightly Magical Boots" src="/wiki/images/Slightly_Magical_Boots_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Slightly_Magical_Boots" title="Slightly Magical Boots">Slightly Magical Boots</a></span></span> for <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="free Gold"><img alt="free Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">free</span></span>. <i>Slightly Magical Boots</i> are identical and can be upgraded as if they were <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Boots" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Boots" title="Boots"><img alt="Boots" src="/wiki/images/Boots_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Boots" title="Boots">Boots</a></span></span>. If the inventory is full while receiving the boots, they will appear as soon as a slot in the inventory is available.',
          leveling: [
            {
              name: "Name 01:",
              raw: " After 12 minutes (reduced by 45 seconds whenever scoring a  takedown against an enemy champion), you gain  Slightly Magical Boots for  free",
              damagetype: "Magic",
              effectType: "Gain",
              values: 1,
              user: "player",
              units: "total_, you gain  slightly magical boots for  free",
              pre: "After 12 minutes",
              post: ", you gain  Slightly Magical Boots for  free",
              children: [
                {
                  values: 4,
                  user: "player",
                  units:
                    "total_by 45 seconds whenever scoring a  takedown against an enemy champion",
                  pre: "reduced by 45 seconds whenever scoring a  takedown against an enemy champion",
                },
              ],
            },
            {
              name: "Slightly Magical Boots are identical and can be upgraded as if they were  Boots:",
              raw: "Slightly Magical Boots are identical and can be upgraded as if they were  Boots",
              damagetype: "Magic",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "total_ad",
              pre: "Slightly Magical Boots are identical and can be upgraded as if they were  Boots",
            },
            {
              name: "If the inventory is full while receiving the boots, they will appear as soon as a slot in the inventory is available.:",
              raw: "If the inventory is full while receiving the boots, they will appear as soon as a slot in the inventory is available.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_ap",
              pre: "If the inventory is full while receiving the boots, they will appear as soon as a slot in the inventory is available.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/magicalfootwear/magicalfootwear.png",
        },
        {
          description:
            'Additionally, your boots grant an additional <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10 <b>bonus</b> movement speed</span></span>.',
          leveling: [
            {
              name: "Additionally, your boots grant an additional  10 bonus movement speed.:",
              raw: "Additionally, your boots grant an additional  10 bonus movement speed.",
              damagetype: "None",
              effectType: "Gain",
              values: 1,
              user: "player",
              units: "bonus_ad",
              pre: "Additionally, your boots grant an additional  10 bonus movement speed.",
            },
          ],
          locked: true,
        },
        {
          description:
            'You cannot purchase <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Boots" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Boots" title="Boots"><img alt="Boots" src="/wiki/images/Boots_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Boots" title="Boots">Boots</a></span></span> nor any Tier-2 <a href="/wiki/Boots" title="Boots">boots</a> prior to obtaining <i>Slightly Magical Boots</i>.',
          leveling: [
            {
              name: "You cannot purchase  Boots nor any Tier-2 boots prior to obtaining Slightly Magical Boots.:",
              raw: "You cannot purchase  Boots nor any Tier-2 boots prior to obtaining Slightly Magical Boots.",
              damagetype: "Magic",
              effectType: "Unique",
              values: 2,
              user: "player",
              units:
                "total_cannot purchase  boots nor any tier-2 boots prior to obtaining slightly magical boots.",
              pre: "You cannot purchase  Boots nor any Tier-2 boots prior to obtaining Slightly Magical Boots.",
            },
          ],
          locked: true,
        },
      ],
    },
    8306: {
      id: 8306,
      name: "Hextech Flashtraption",
      majorChangePatchVersion: "",
      tooltip:
        "While Flash is on cooldown it is replaced by <i>Hexflash</i>.<br><br><i>Hexflash</i>: Channel for 2s to blink to a new location.<br><br>Cooldown: 20s. Goes on a 10s cooldown when you enter champion combat.",
      shortDesc:
        "While Flash is on cooldown it is replaced by <i>Hexflash</i>.<br><br><i>Hexflash</i>: Channel, then blink to a new location.",
      longDesc:
        "While Flash is on cooldown it is replaced by <i>Hexflash</i>.<br><br><i>Hexflash</i>: Channel for 2s to blink to a new location.<br><br>Cooldown: 20s. Goes on a 10s cooldown when you enter champion combat.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png",
      endOfGameStatDescs: ["Times Hexflashed: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kUtility: 10,
      },
      released: "2018",
      path: "Inspiration",
      slot: 1,
      cooldown:
        '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after channel\'s completion">20</span>',
      range:
        '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="200 + 40 every 0.3 seconds" data-bot_values="200;240;280;320;360;400" data-top_values="1;1.3;1.6;1.9;2.2;2.5">200 − 400 (based on channel time)</span>',
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> While <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> has a remaining cooldown greater than 2 seconds, it is replaced by <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " While  Flash has a remaining cooldown greater than 2 seconds, it is replaced by  Hexflash.",
              damagetype: "None",
              effectType: "Unique",
              values: 2,
              user: "player",
              units:
                "total_flash has a remaining cooldown greater than 2 seconds, it is replaced by  hexflash.",
              pre: "While  Flash has a remaining cooldown greater than 2 seconds, it is replaced by  Hexflash.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/hextechflashtraption/hextechflashtraption.png",
        },
        {
          description:
            '<span class="template_sbc"><b>Active:</b></span> You begin <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charging</a></span> for up to 2.<small>5</small> seconds, increasing <i>Hexflash\'s</i> range over the duration. After at least 1 second, you can reactivate the spell, which is automatically done so when the charge completes without reactivation. Releasing the charge earlier than 1 second or entering combat with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> will put <i>Hexflash</i> on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;cooldown</span> for 10 seconds.',
          leveling: [
            {
              name: "Name 01:",
              raw: " You begin  charging for up to 2.5 seconds, increasing Hexflash's range over the duration",
              damagetype: "None",
              effectType: "Unique",
              values: 2,
              user: "player",
              units:
                "total_begin  charging for up to 2.5 seconds, increasing hexflash's range over the duration",
              pre: "You begin  charging for up to 2.5 seconds, increasing Hexflash's range over the duration",
            },
            {
              name: "After at least 1 second, you can reactivate the spell, which is automatically done so when the charge completes without reactivation:",
              raw: "After at least 1 second, you can reactivate the spell, which is automatically done so when the charge completes without reactivation",
              damagetype: "None",
              effectType: "Unique",
              values: 1,
              user: "player",
              units:
                "total_at least 1 second, you can reactivate the spell, which is automatically done so when the charge completes without reactivation",
              pre: "After at least 1 second, you can reactivate the spell, which is automatically done so when the charge completes without reactivation",
            },
            {
              name: "Releasing the charge earlier than 1 second or entering combat with an enemy  champion will put Hexflash on  cooldown for 10 seconds.:",
              raw: "Releasing the charge earlier than 1 second or entering combat with an enemy  champion will put Hexflash on  cooldown for 10 seconds.",
              damagetype: "None",
              effectType: "Unique",
              values: 1,
              user: "player",
              units:
                "total_the charge earlier than 1 second or entering combat with an enemy  champion will put hexflash on  cooldown for 10 seconds.",
              pre: "Releasing the charge earlier than 1 second or entering combat with an enemy  champion will put Hexflash on  cooldown for 10 seconds.",
            },
          ],
          locked: true,
        },
        {
          description:
            '<span class="template_sbc"><b>Recast:</b></span> You <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to the target location within range.',
          leveling: [
            {
              name: "Name 01:",
              raw: " You  blink to the target location within range.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "target",
              units: "total_you  blink to the target location within range.",
              pre: "You  blink to the target location within range.",
            },
          ],
          locked: true,
        },
        {
          description:
            "<i>Uses Quick Casting by default, which requires the Active to be held and the Recast to occur on release.</i>",
          leveling: [
            {
              name: "Uses Quick Casting by default, which requires the Active to be held and the Recast to occur on release.:",
              raw: "Uses Quick Casting by default, which requires the Active to be held and the Recast to occur on release.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units:
                "total_uses quick casting by default, which requires the active to be held and the recast to occur on release.",
              pre: "Uses Quick Casting by default, which requires the Active to be held and the Recast to occur on release.",
            },
          ],
          locked: true,
        },
      ],
    },
    8313: {
      id: 8313,
      name: "Perfect Timing",
      majorChangePatchVersion: "",
      tooltip:
        "Begin the game with a Commencing Stopwatch that transforms into a Stopwatch after 14 minutes. Each takedown you acquire reduces this timer by 120 seconds.<br><br>Stopwatch can be used for a one time 2.5 second Stasis effect.",
      shortDesc:
        "Gain a free Commencing Stopwatch. After 14 minutes, it can be used for a one time <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Stasis'>Stasis</lol-uikit-tooltipped-keyword> effect. <br><br>Each <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>takedown</lol-uikit-tooltipped-keyword> you get shortens this timer by 120 seconds.",
      longDesc:
        "Begin the game with a Commencing Stopwatch that transforms into a Stopwatch after 14 minutes. Each takedown you acquire reduces this timer by 120 seconds.<br><br>Stopwatch can be used for a one time 2.5 second Stasis effect.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png",
      endOfGameStatDescs: ["Timing: Perfect"],
      recommendationDescriptorAttributes: {
        kUtility: 10,
      },
      released: "2018",
      path: "Inspiration",
      slot: 1,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> After 14 minutes (reduced by 2 minutes whenever scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion), you receive a <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Perfectly Timed Stopwatch" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Perfectly_Timed_Stopwatch" title="Perfectly Timed Stopwatch"><img alt="Perfectly Timed Stopwatch" src="/wiki/images/Stopwatch_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Perfectly_Timed_Stopwatch" class="mw-redirect" title="Perfectly Timed Stopwatch">Perfectly Timed Stopwatch</a></span></span>. The <i>Perfectly Timed Stopwatch</i> is identical to the <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stopwatch" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Stopwatch" title="Stopwatch"><img alt="Stopwatch" src="/wiki/images/Stopwatch_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stopwatch" title="Stopwatch">Stopwatch</a></span></span>, except it only contributes for a value of <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="250 Gold"><img alt="250 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">250</span></span>. <i>A <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="free Gold"><img alt="free Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">free</span></span> cosmetic, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Commencing Stopwatch" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Commencing_Stopwatch" title="Commencing Stopwatch"><img alt="Commencing Stopwatch" src="/wiki/images/Stopwatch_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Commencing_Stopwatch" class="mw-redirect" title="Commencing Stopwatch">Commencing Stopwatch</a></span></span> occupies one of your item slots before obtaining a Perfectly Timed Stopwatch.</i>',
          leveling: [
            {
              name: "Name 01:",
              raw: " After 14 minutes (reduced by 2 minutes whenever scoring a  takedown against an enemy champion), you receive a  Perfectly Timed Stopwatch",
              damagetype: "None",
              effectType: "Gain",
              values: 1,
              user: "player",
              units: "total_, you receive a  perfectly timed stopwatch",
              pre: "After 14 minutes",
              post: ", you receive a  Perfectly Timed Stopwatch",
              children: [
                {
                  values: 2,
                  user: "player",
                  units:
                    "total_by 2 minutes whenever scoring a  takedown against an enemy champion",
                  pre: "reduced by 2 minutes whenever scoring a  takedown against an enemy champion",
                },
              ],
            },
            {
              name: "The Perfectly Timed Stopwatch is identical to the  Stopwatch, except it only contributes for a value of  250:",
              raw: "The Perfectly Timed Stopwatch is identical to the  Stopwatch, except it only contributes for a value of  250",
              damagetype: "None",
              effectType: "Unique",
              values: 2,
              user: "player",
              units:
                "total_perfectly timed stopwatch is identical to the  stopwatch, except it only contributes for a value of  250",
              pre: "The Perfectly Timed Stopwatch is identical to the  Stopwatch, except it only contributes for a value of  250",
            },
            {
              name: "A  free cosmetic,  Commencing Stopwatch occupies one of your item slots before obtaining a Perfectly Timed Stopwatch.:",
              raw: "A  free cosmetic,  Commencing Stopwatch occupies one of your item slots before obtaining a Perfectly Timed Stopwatch.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units:
                "total_a  free cosmetic,  commencing stopwatch occupies one of your item slots before obtaining a perfectly timed stopwatch.",
              pre: "A  free cosmetic,  Commencing Stopwatch occupies one of your item slots before obtaining a Perfectly Timed Stopwatch.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/perfecttiming/perfecttiming.png",
        },
      ],
    },
    8316: {
      id: 8316,
      name: "Minion Dematerializer",
      majorChangePatchVersion: "9.6",
      tooltip:
        "Start the game with 3 Minion Dematerializers that kill and absorb lane minions instantly. Minion Dematerializers are on cooldown for the first 180s of the game.<br><br>Absorbing a minion increases your damage by +6% against that type of minion permanently, and an extra +3% for each additional minion of that type absorbed.<br><br><hr><br>Melee Bonus Damage: +@f1@%<br>Caster Bonus Damage: +@f2@%<br>Siege Bonus Damage: +@f3@%",
      shortDesc:
        "Start the game with 3 Minion Dematerializers. Killing minions with the item gives permanent bonus damage vs. that minion type.",
      longDesc:
        "Start the game with 3 Minion Dematerializers that kill and absorb lane minions instantly. Minion Dematerializers are on cooldown for the first 180s of the game.<br><br>Absorbing a minion increases your damage by +6% against that type of minion permanently, and an extra +3% for each additional minion of that type absorbed.<br>",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png",
      endOfGameStatDescs: ["Bonus Minion Damage Dealt: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kUtility: 10,
      },
      released: "2018",
      path: "Inspiration",
      slot: 2,
      cooldown: 10,
      range: 550,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Start the game with 3&nbsp;×&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Minion Dematerializer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Minion_Dematerializer" title="Minion Dematerializers"><img alt="Minion Dematerializers" src="/wiki/images/Minion_Dematerializer_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Minion_Dematerializer" title="Minion Dematerializer">Minion Dematerializers</a></span></span>, which can be activated to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">execute</a></span> the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> after a 1-second delay. <i>Dematerializers</i> are placed on a 180-second <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;cooldown</span> at the start of the game.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Start the game with 3 ×  Minion Dematerializers, which can be activated to  execute the target enemy  minion after a 1-second delay",
              damagetype: "None",
              effectType: "Unique",
              values: 3,
              user: "target",
              units:
                "total_the game with 3 ×  minion dematerializers, which can be activated to  execute the target enemy  minion after a 1-second delay",
              pre: "Start the game with 3 ×  Minion Dematerializers, which can be activated to  execute the target enemy  minion after a 1-second delay",
            },
            {
              name: "Dematerializers are placed on a 180-second  cooldown at the start of the game.:",
              raw: "Dematerializers are placed on a 180-second  cooldown at the start of the game.",
              damagetype: "None",
              effectType: "Unique",
              values: 1,
              user: "player",
              units:
                "total_are placed on a 180-second  cooldown at the start of the game.",
              pre: "Dematerializers are placed on a 180-second  cooldown at the start of the game.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/miniondematerializer/miniondematerializer.png",
        },
        {
          description:
            'In addition to the <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="gold Gold"><img alt="gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">gold</span></span> and <span style="white-space:nowrap"><a href="/wiki/Experience_(champion)" title="Experience (champion)"><img alt="Experience icon.png" src="/wiki/images/Experience_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color: #883FD1; white-space:normal">experience</span></span> obtained from <a href="/wiki/Kill" title="Kill">killing</a> the minion, you also gain 6% increased damage to that type of minion for the remainder of the game. <i>Dematerializers</i> beyond the first used on the same type of minion increases this bonus by 3%, up to a maximum of 12% if all three are used on the same minion type.',
          leveling: [
            {
              name: "In addition to the  gold and  experience obtained from killing the minion, you also gain 6% increased damage to that type of minion for the remainder of the game:",
              raw: "In addition to the  gold and  experience obtained from killing the minion, you also gain 6% increased damage to that type of minion for the remainder of the game",
              damagetype: "None",
              effectType: "Damage",
              values: 6,
              valuesIsPercent: true,
              user: "player",
              units: "gold",
              pre: "In addition to the  gold and  experience obtained from killing the minion, you also gain 6% increased damage to that type of minion for the remainder of the game",
            },
            {
              name: "Dematerializers beyond the first used on the same type of minion increases this bonus by 3%, up to a maximum of 12% if all three are used on the same minion type.:",
              raw: "Dematerializers beyond the first used on the same type of minion increases this bonus by 3%, up to a maximum of 12% if all three are used on the same minion type.",
              damagetype: "None",
              effectType: "Gain",
              values: 3,
              valuesIsPercent: true,
              user: "player",
              units:
                "bonus_, up to a maximum of 12beyond the first used on the same type of minion increases this bonus by 3",
              pre: "Dematerializers beyond the first used on the same type of minion increases this bonus by 3%, up to a maximum of 12% if all three are used on the same minion type.",
            },
          ],
          locked: true,
        },
      ],
    },
    8321: {
      id: 8321,
      name: "Future's Market",
      majorChangePatchVersion: "",
      tooltip:
        "You can enter debt to buy items. The amount you can borrow increases over time.<br><br>Lending Fee: 50 gold<br><hr><br>Debt limit: Available at 2 minutes<br>Future Purchases: @f3@",
      shortDesc: "You can enter debt to buy items.",
      longDesc:
        "You can enter debt to buy items. The amount you can borrow increases over time.<br><br>Lending Fee: 50 gold<br>Debt limit: 150 + 5/min<br>(Debt doesn't become available until 2 minutes)",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png",
      endOfGameStatDescs: ["Future Purchases: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kGold: 15,
      },
      released: "2018",
      path: "Inspiration",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> You can enter debt to buy <a href="/wiki/Item" class="mw-redirect" title="Item">items</a>, up to <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="145 Gold"><img alt="145 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">145</span></span> (+ <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="5 Gold"><img alt="5 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">5</span></span> per minute), which is displayed as negative gold in your treasury.',
          leveling: [
            {
              name: "Name 01:",
              raw: " You can enter debt to buy items, up to  145 (+  5 per minute), which is displayed as negative gold in your treasury.",
              damagetype: "None",
              effectType: "Unique",
              values: 1,
              user: "player",
              units: "gold",
              pre: "You can enter debt to buy items, up to  145",
              post: ", which is displayed as negative gold in your treasury.",
              children: [
                {
                  values: 5,
                  user: "player",
                  units: "total_per minute",
                  pre: "+  5 per minute",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/futuresmarket/futuresmarket.png",
        },
        {
          description:
            'A <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="50 Gold"><img alt="50 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">50</span></span> lending fee is added onto the amount of gold you owe after leaving the <a href="/wiki/Shop" title="Shop">shop</a>.',
          leveling: [
            {
              name: "A  50 lending fee is added onto the amount of gold you owe after leaving the shop.:",
              raw: "A  50 lending fee is added onto the amount of gold you owe after leaving the shop.",
              damagetype: "None",
              effectType: "Gain",
              values: 5,
              user: "player",
              units: "gold",
              pre: "A  50 lending fee is added onto the amount of gold you owe after leaving the shop.",
            },
          ],
          locked: true,
        },
        {
          description: "<i>Future's Market</i> activates after 2 minutes.",
          leveling: [
            {
              name: "Future's Market activates after 2 minutes.:",
              raw: "Future's Market activates after 2 minutes.",
              damagetype: "None",
              effectType: "Unique",
              values: 2,
              user: "player",
              units: "total_kindred_mark",
              pre: "Future's Market activates after 2 minutes.",
            },
          ],
          locked: true,
        },
      ],
    },
    8339: {
      id: 8339,
      name: "Celestial Body",
      majorChangePatchVersion: "",
      tooltip:
        "+100 Health permanently<br>-10% damage to champions and monsters until 10 min",
      shortDesc:
        "+100 Health permanently<br>-10% damage to champions and monsters until 10 min",
      longDesc:
        "+100 Health permanently<br>-10% damage to champions and monsters until 10 min<br><br><hr><br><i>'The greatest legends live on in the stars.' <br>—Daphna the Dreamer</i>",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/CelestialBody/CelestialBody.png",
      endOfGameStatDescs: ["--"],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Inspiration",
      slot: 3,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain <span style="color: #1F995C; white-space:normal">100 <b>bonus</b> health</span> permanently.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain 100 bonus health permanently.",
              damagetype: "None",
              effectType: "Heal",
              values: 1,
              user: "player",
              units: "bonus_hp",
              pre: "Gain 100 bonus health permanently.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/celestialbody/celestialbody.png",
        },
        {
          description:
            "Deal 10% reduced damage to enemy champions and monsters for the first 10 minutes.",
          leveling: [
            {
              name: "Deal 10% reduced damage to enemy champions and monsters for the first 10 minutes.:",
              raw: "Deal 10% reduced damage to enemy champions and monsters for the first 10 minutes.",
              damagetype: "None",
              effectType: "Damage",
              values: 1,
              valuesIsPercent: true,
              user: "player",
              units:
                "total_reduced damage to enemy champions and monsters for the first 10 minutes.10",
              pre: "Deal 10% reduced damage to enemy champions and monsters for the first 10 minutes.",
            },
          ],
          locked: true,
        },
      ],
    },
    8345: {
      id: 8345,
      name: "Biscuit Delivery",
      majorChangePatchVersion: "",
      tooltip:
        "Biscuit Delivery: Gain a Total Biscuit of Everlasting Will every 2 mins, until 6 min.<br><br>Biscuits restore 8% of your missing health and mana. Consuming or selling a Biscuit permanently increases your mana cap by 40. <br><br><i>Manaless:</i> Champions without mana restore 12% missing health instead.<br><hr><br>Biscuits Gained: @f1@/@f2@",
      shortDesc:
        "Gain a free Biscuit every 2 min, until 6 min. Consuming or selling a Biscuit permanently increases your max mana and restores health and mana.",
      longDesc:
        "Biscuit Delivery: Gain a Total Biscuit of Everlasting Will every 2 mins, until 6 min.<br><br>Biscuits restore 8% of your missing health and mana. Consuming or selling a Biscuit permanently increases your mana cap by 40. <br><br><i>Manaless:</i> Champions without mana restore 12% missing health instead.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png",
      endOfGameStatDescs: ["Biscuits Received: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kHealing: 5,
        kMana: 10,
      },
      released: "2018",
      path: "Inspiration",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Receive a <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Total Biscuit of Everlasting Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Total_Biscuit_of_Everlasting_Will" title="Total Biscuit of Everlasting Will"><img alt="Total Biscuit of Everlasting Will" src="/wiki/images/Total_Biscuit_of_Everlasting_Will_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Total_Biscuit_of_Everlasting_Will" title="Total Biscuit of Everlasting Will">Total Biscuit of Everlasting Will</a></span></span> at <span class="template_sbc"><b>2:00</b></span>, <span class="template_sbc"><b>4:00</b></span>, and <span class="template_sbc"><b>6:00</b></span>. If the inventory is full while receiving a biscuit, the biscuit(s) will appear as soon as a slot in the inventory is available.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Receive a  Total Biscuit of Everlasting Will at 2:00, 4:00, and 6:00",
              damagetype: "None",
              effectType: "Unique",
              values: 2,
              user: "player",
              units:
                "total_a  total biscuit of everlasting will at 2:00, 4:00, and 6:00",
              pre: "Receive a  Total Biscuit of Everlasting Will at 2:00, 4:00, and 6:00",
            },
            {
              name: "If the inventory is full while receiving a biscuit, the biscuit(s) will appear as soon as a slot in the inventory is available.:",
              raw: "If the inventory is full while receiving a biscuit, the biscuit(s) will appear as soon as a slot in the inventory is available.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_ap",
              pre: "If the inventory is full while receiving a biscuit, the biscuit",
              post: "will appear as soon as a slot in the inventory is available.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_s",
                  pre: "s",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/biscuitdelivery/biscuitdelivery.png",
        },
        {
          description:
            'Consuming a <i>Biscuit</i> will instantly restore <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">40 mana</span></span> and permanently increase your <span style="color: #0099CC; white-space:normal"><b>maximum</b> mana</span> by the same amount, in addition to its effects. You will also gain the increased mana if you sell the biscuit for <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="5 Gold"><img alt="5 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">5</span></span>.',
          leveling: [
            {
              name: "Consuming a Biscuit will instantly restore  40 mana and permanently increase your maximum mana by the same amount, in addition to its effects:",
              raw: "Consuming a Biscuit will instantly restore  40 mana and permanently increase your maximum mana by the same amount, in addition to its effects",
              damagetype: "None",
              effectType: "Gain",
              values: 4,
              user: "player",
              units: "total_ad",
              pre: "Consuming a Biscuit will instantly restore  40 mana and permanently increase your maximum mana by the same amount, in addition to its effects",
            },
            {
              name: "You will also gain the increased mana if you sell the biscuit for  5.:",
              raw: "You will also gain the increased mana if you sell the biscuit for  5.",
              damagetype: "None",
              effectType: "Gain",
              values: 5,
              user: "player",
              units: "total_mana",
              pre: "You will also gain the increased mana if you sell the biscuit for  5.",
            },
          ],
          locked: true,
        },
      ],
    },
    8347: {
      id: 8347,
      name: "Cosmic Insight",
      majorChangePatchVersion: "",
      tooltip:
        "+<attention>18</attention> Summoner Spell Haste<br>+<attention>10</attention> Item Haste",
      shortDesc:
        "+<attention>18</attention> Summoner Spell Haste<br>+<attention>10</attention> Item Haste",
      longDesc:
        "+<attention>18</attention> Summoner Spell Haste<br>+<attention>10</attention> Item Haste",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png",
      endOfGameStatDescs: ["--"],
      recommendationDescriptorAttributes: {
        kCooldown: 10,
      },
      released: "2018",
      path: "Inspiration",
      slot: 3,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain 18 <a href="/wiki/Ability_haste#Increasing_summoner_spell_haste" class="mw-redirect" title="Ability haste">summoner spell haste</a> and 10 <a href="/wiki/Ability_haste#Increasing_item_haste" class="mw-redirect" title="Ability haste">item haste</a>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain 18 summoner spell haste and 10 item haste.",
              damagetype: "None",
              effectType: "Gain",
              values: 1,
              user: "player",
              units: "total_18 summoner spell haste and 10 item haste.",
              pre: "Gain 18 summoner spell haste and 10 item haste.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/cosmicinsight/cosmicinsight.png",
        },
      ],
    },
    8351: {
      id: 8351,
      name: "Glacial Augment",
      majorChangePatchVersion: "",
      tooltip:
        "Immobilizing an enemy champion will cause 3 glacial rays to emanate from them towards you and other nearby champions, creating frozen zones for 3 (+ 100% of the immobilizing effect's duration) seconds that slow enemies and reduce their damage by 15% against your allies (not including yourself). <br><br>Cooldown: 25s<br>Slow Amount: @f3@% = 30% <healing>+@f4@% (%i:scaleHealShield%)</healing> <scaleAP>+@f5@% (%i:scaleAP%)</scaleAP> <scaleAD>+@f6@% (%i:scaleAD%)</scaleAD> <br>Duration Enemy Champs Slowed: @f1@s<br>Damage Reduced: @f2@",
      shortDesc:
        "Immobilizing an enemy champion will cause 3 glacial rays that slow nearby enemies and reduce their damage to your allies.",
      longDesc:
        "Immobilizing an enemy champion will cause 3 glacial rays to emanate from them towards you and other nearby champions, creating frozen zones for 3 (+ 100% of the immobilizing effect's duration) seconds that slow enemies for 30% (+9% per 10% Heal and Shield Power) (+3% per 100 Ability Power) (+4% per 100 bonus Attack Damage) and reduce their damage by 15% against your allies (not including yourself). <br><br>Cooldown: 25s",
      recommendationDescriptor: "Slow Enemies",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png",
      endOfGameStatDescs: [
        "Duration Enemy Champs Slowed: @eogvar1@s",
        "Damage Reduced: @eogvar2@",
      ],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Inspiration",
      slot: "Keystone",
      cooldown: 25,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">Immobilizing</a></span> an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> will cause 3 glacial rays to emanate from them towards you and other nearby enemy champions, creating icy zones that last for 3 (+ 100% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Duration after being modified by tenacity">immobilizing effect\'s duration</span>) seconds.',
          leveling: [
            {
              name: "Name 01:",
              raw: "  Immobilizing an enemy  champion will cause 3 glacial rays to emanate from them towards you and other nearby enemy champions, creating icy zones that last for 3 (+ 100% of the immobilizing effect's duration) seconds.",
              damagetype: "None",
              effectType: "Unique",
              values: 3,
              user: "player",
              units: "total_seconds.",
              pre: "Immobilizing an enemy  champion will cause 3 glacial rays to emanate from them towards you and other nearby enemy champions, creating icy zones that last for 3",
              post: "seconds.",
              children: [
                {
                  values: 100,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_of the immobilizing effect's duration",
                  pre: "+ 100% of the immobilizing effect's duration",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/glacialaugment/glacialaugment.png",
        },
        {
          description:
            'Enemies within the icy zones are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 30% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3% per 100 AP)</span> <span style="color:orange; white-space:normal">(+&nbsp;4% per 100 <b>bonus</b> AD)</span> (+ 9% per 10% heal and shield power) and have their damage reduced by 15% against your allies, excluding yourself.',
          leveling: [
            {
              name: "Enemies within the icy zones are  slowed by 30% (+ 3% per 100 AP) (+ 4% per 100 bonus AD) (+ 9% per 10% heal and shield power) and have their damage reduced by 15% against your allies, excluding yourself.:",
              raw: "Enemies within the icy zones are  slowed by 30% (+ 3% per 100 AP) (+ 4% per 100 bonus AD) (+ 9% per 10% heal and shield power) and have their damage reduced by 15% against your allies, excluding yourself.",
              damagetype: "None",
              effectType: "Damage",
              values: 3,
              valuesIsPercent: true,
              user: "player",
              units:
                "total_against your allies, excluding yourself.have their damage reduced by 15",
              pre: "Enemies within the icy zones are  slowed by 30%",
              post: "and have their damage reduced by 15% against your allies, excluding yourself.",
              children: [
                {
                  values: 3,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_ap",
                  pre: "+ 3% per 100 AP",
                },
                {
                  values: 4,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_ad",
                  pre: "+ 4% per 100 bonus AD",
                },
                {
                  values: 9,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_per 10",
                  pre: "+ 9% per 10% heal and shield power",
                },
              ],
            },
          ],
          locked: true,
        },
      ],
    },
    8352: {
      id: 8352,
      name: "Time Warp Tonic",
      majorChangePatchVersion: "8.22",
      tooltip:
        "Consuming a potion or biscuit grants 30% of its health or mana restoration immediately. In addition, gain <speed>2% Move Speed</speed> while under their effects.<br><br><br><hr><br>Time Spent hasted: @f1@s<br>Total health instantly restored: @f2@<br>Total mana instantly restored: @f3@",
      shortDesc:
        "Potions and biscuits grant some restoration immediately. Gain <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword>  while under their effects.",
      longDesc:
        "Consuming a potion or biscuit grants 30% of its health or mana restoration immediately. In addition, gain <speed>2% Move Speed</speed> while under their effects.<br><br>",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png",
      endOfGameStatDescs: [
        "Time Spent Hasted: @eogvar1@",
        "Total Immediate Health Restored: @eogvar2@",
        "Total Immediate Mana Restored: @eogvar3@",
      ],
      recommendationDescriptorAttributes: {
        kHealing: 5,
        kMoveSpeed: 5,
      },
      released: "2018",
      path: "Inspiration",
      slot: 3,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Consuming a potion or <a href="/wiki/Total_Biscuit_of_Everlasting_Will" title="Total Biscuit of Everlasting Will">biscuit</a> immediately restores 30% of the <a href="/wiki/Health" title="Health">health</a> and <a href="/wiki/Mana" title="Mana">mana</a> (if applicable) it would restore. Health/mana per tick is then reduced by 30% for the effect\'s regular duration. If consumables are stacked, the instant restoration is applied after the duration of the initial consumable ends.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Consuming a potion or biscuit immediately restores 30% of the health and mana (if applicable) it would restore",
              damagetype: "None",
              effectType: "Heal",
              values: 3,
              valuesIsPercent: true,
              user: "player",
              units: "total_it would restore",
              pre: "Consuming a potion or biscuit immediately restores 30% of the health and mana",
              post: "it would restore",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "if applicable",
                },
              ],
            },
            {
              name: "Health/mana per tick is then reduced by 30% for the effect's regular duration:",
              raw: "Health/mana per tick is then reduced by 30% for the effect's regular duration",
              damagetype: "None",
              effectType: "Heal",
              values: [0, 3],
              valuesIsPercent: true,
              user: "player",
              units: "total_hp",
              pre: "Health/mana per tick is then reduced by 30% for the effect's regular duration",
            },
            {
              name: "If consumables are stacked, the instant restoration is applied after the duration of the initial consumable ends.:",
              raw: "If consumables are stacked, the instant restoration is applied after the duration of the initial consumable ends.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_ap",
              pre: "If consumables are stacked, the instant restoration is applied after the duration of the initial consumable ends.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/timewarptonic/timewarptonic.png",
        },
        {
          description:
            'Additionally, you gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">2% <b>bonus total</b> movement speed</span></span> while under the effect of a potion or biscuit.',
          leveling: [
            {
              name: "Additionally, you gain  2% bonus total movement speed while under the effect of a potion or biscuit.:",
              raw: "Additionally, you gain  2% bonus total movement speed while under the effect of a potion or biscuit.",
              damagetype: "None",
              effectType: "Gain",
              values: 2,
              valuesIsPercent: true,
              user: "player",
              units:
                "total_bonus total movement speed while under the effect of a potion or biscuit.you gain  2",
              pre: "Additionally, you gain  2% bonus total movement speed while under the effect of a potion or biscuit.",
            },
          ],
          locked: true,
        },
      ],
    },
    8359: {
      id: 8359,
      name: "Kleptomancy",
      majorChangePatchVersion: "8.23",
      tooltip:
        "After using an ability, each of your next 2 attacks can grant 5 gold... or something nicer.<br><br>Only attacks against champions grant you a reward.<br><hr><br>Gold Gained: @f1@<br>Items Looted: @f3@",
      shortDesc:
        "Loot gold and items from enemy champions by casting spells and auto attacking them.",
      longDesc:
        "After using an ability, each of your next 2 attacks can grant 5 gold... or something nicer.<br><br>Only attacks against champions grant you a reward.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/Kleptomancy/Kleptomancy.png",
      endOfGameStatDescs: [
        "Gold Granted: @eogvar1@",
        "Items Looted: @eogvar2@",
      ],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Inspiration",
      slot: "Keystone",
      cooldown: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> After using an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, your next two basic attacks <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> within 10 seconds are empowered. Each attack used against a champion grants <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="5 Gold"><img alt="5 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">5</span></span>, and also has a chance to instead grant a <a href="/wiki/Consumable_item" title="Consumable item">consumable item</a>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " After using an ability, your next two basic attacks on-hit within 10 seconds are empowered",
              damagetype: "None",
              effectType: "Unique",
              values: 1,
              user: "player",
              units: "total_ad",
              pre: "After using an ability, your next two basic attacks on-hit within 10 seconds are empowered",
            },
            {
              name: "Each attack used against a champion grants  5, and also has a chance to instead grant a consumable item.:",
              raw: "Each attack used against a champion grants  5, and also has a chance to instead grant a consumable item.",
              damagetype: "None",
              effectType: "Gain",
              values: 5,
              user: "player",
              units: "total_ad",
              pre: "Each attack used against a champion grants  5, and also has a chance to instead grant a consumable item.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/kleptomancy/kleptomancy.png",
        },
        {
          description:
            '<span class="template_sbc"><b>Applicable Consumables:</b></span>\n<ul><li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Mana Potion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Mana_Potion" title="Mana Potion"><img alt="Mana Potion" src="/wiki/images/Mana_Potion_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mana_Potion" title="Mana Potion">Mana Potion</a></span></span> (Sell: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="12 Gold"><img alt="12 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">12</span></span>)</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Pilfered Health Potion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Pilfered_Health_Potion" title="Pilfered Health Potion"><img alt="Pilfered Health Potion" src="/wiki/images/Pilfered_Health_Potion_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pilfered_Health_Potion" title="Pilfered Health Potion">Pilfered Health Potion</a></span></span> (Sell: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="16 Gold"><img alt="16 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">16</span></span>)</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Sly Sack of Gold" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Sly_Sack_of_Gold" title="Sly Sack of Gold"><img alt="Sly Sack of Gold" src="/wiki/images/Sly_Sack_of_Gold_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sly_Sack_of_Gold" title="Sly Sack of Gold">Sly Sack of Gold</a></span></span> (Sell: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="65 Gold"><img alt="65 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">65</span></span>)</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Pilfered Stealth Ward" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Pilfered_Stealth_Ward" title="Pilfered Stealth Ward"><img alt="Pilfered Stealth Ward" src="/wiki/images/Stealth_Ward_%28Item%29_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pilfered_Stealth_Ward" title="Pilfered Stealth Ward">Pilfered Stealth Ward</a></span></span> (Sell: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="24 Gold"><img alt="24 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">24</span></span>)</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Pilfered Potion of Rouge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Pilfered_Potion_of_Rouge" title="Pilfered Potion of Rouge"><img alt="Pilfered Potion of Rouge" src="/wiki/images/Elixir_of_Fortitude_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pilfered_Potion_of_Rouge" title="Pilfered Potion of Rouge">Pilfered Potion of Rouge</a></span></span> (Sell: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="32 Gold"><img alt="32 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">32</span></span>)</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Total Biscuit of Everlasting Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Total_Biscuit_of_Everlasting_Will" title="Total Biscuit of Everlasting Will"><img alt="Total Biscuit of Everlasting Will" src="/wiki/images/Total_Biscuit_of_Everlasting_Will_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Total_Biscuit_of_Everlasting_Will" title="Total Biscuit of Everlasting Will">Total Biscuit of Everlasting Will</a></span></span> (Sell: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="5 Gold"><img alt="5 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">5</span></span>)</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Peering Farsight Ward" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Peering_Farsight_Ward" title="Peering Farsight Ward"><img alt="Peering Farsight Ward" src="/wiki/images/Farsight_Alteration_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Peering_Farsight_Ward" title="Peering Farsight Ward">Peering Farsight Ward</a></span></span> (Sell: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="24 Gold"><img alt="24 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">24</span></span>)</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Looted Oracle\'s Extract" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Looted_Oracle%27s_Extract" title="Looted Oracle\'s Extract"><img alt="Looted Oracle\'s Extract" src="/wiki/images/Looted_Oracle%27s_Extract_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Looted_Oracle%27s_Extract" title="Looted Oracle\'s Extract">Looted Oracle\'s Extract</a></span></span> (Sell: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="24 Gold"><img alt="24 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">24</span></span>)</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Control Ward" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Control_Ward" title="Control Ward"><img alt="Control Ward" src="/wiki/images/Control_Ward_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Control_Ward" title="Control Ward">Control Ward</a></span></span> (Sell: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="30 Gold"><img alt="30 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">30</span></span>)</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Travel Size Elixir of Iron" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Travel_Size_Elixir_of_Iron" title="Travel Size Elixir of Iron"><img alt="Travel Size Elixir of Iron" src="/wiki/images/Travel_Size_Elixir_of_Iron_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Travel_Size_Elixir_of_Iron" title="Travel Size Elixir of Iron">Travel Size Elixir of Iron</a></span></span> (Sell: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="32 Gold"><img alt="32 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">32</span></span>)</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Travel Size Elixir of Sorcery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Travel_Size_Elixir_of_Sorcery" title="Travel Size Elixir of Sorcery"><img alt="Travel Size Elixir of Sorcery" src="/wiki/images/Travel_Size_Elixir_of_Sorcery_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Travel_Size_Elixir_of_Sorcery" title="Travel Size Elixir of Sorcery">Travel Size Elixir of Sorcery</a></span></span> (Sell: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="32 Gold"><img alt="32 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">32</span></span>)</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Travel Size Elixir of Wrath" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Travel_Size_Elixir_of_Wrath" title="Travel Size Elixir of Wrath"><img alt="Travel Size Elixir of Wrath" src="/wiki/images/Travel_Size_Elixir_of_Wrath_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Travel_Size_Elixir_of_Wrath" title="Travel Size Elixir of Wrath">Travel Size Elixir of Wrath</a></span></span> (Sell: <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="32 Gold"><img alt="32 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">32</span></span>)</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Elixir of Skill" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Elixir_of_Skill" title="Elixir of Skill"><img alt="Elixir of Skill" src="/wiki/images/Ichor_of_Illumination_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elixir_of_Skill" title="Elixir of Skill">Elixir of Skill</a></span></span> (Cannot be sold)</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Poro-Snax" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Poro-Snax" title="Poro-Snax"><img alt="Poro-Snax" src="/wiki/images/Poro-Snax_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Poro-Snax" title="Poro-Snax">Poro-Snax</a></span></span> (ARAM only) (Cannot be sold)</li></ul>',
          leveling: [
            {
              name: "Name 01:",
              raw: "\n Mana Potion (Sell:  12)\n Pilfered Health Potion (Sell:  16)\n Sly Sack of Gold (Sell:  65)\n Pilfered Stealth Ward (Sell:  24)\n Pilfered Potion of Rouge (Sell:  32)\n Total Biscuit of Everlasting Will (Sell:  5)\n Peering Farsight Ward (Sell:  24)\n Looted Oracle's Extract (Sell:  24)\n Control Ward (Sell:  30)\n Travel Size Elixir of Iron (Sell:  32)\n Travel Size Elixir of Sorcery (Sell:  32)\n Travel Size Elixir of Wrath (Sell:  32)\n Elixir of Skill (Cannot be sold)\n Poro-Snax (ARAM only) (Cannot be sold)",
              damagetype: "None",
              effectType: "Heal",
              values: 0,
              user: "player",
              units: "total_hp",
              pre: "Mana Potion",
              post: "Pilfered Health Potion",
              children: [
                {
                  values: 1,
                  user: "player",
                  units: "total_12",
                  pre: "Sell:  12",
                },
                {
                  values: 1,
                  user: "player",
                  units: "total_16",
                  pre: "Sell:  16",
                },
                {
                  values: 6,
                  user: "player",
                  units: "total_65",
                  pre: "Sell:  65",
                },
                {
                  values: 2,
                  user: "player",
                  units: "total_24",
                  pre: "Sell:  24",
                },
                {
                  values: 3,
                  user: "player",
                  units: "total_32",
                  pre: "Sell:  32",
                },
                {
                  values: 5,
                  user: "player",
                  units: "total_5",
                  pre: "Sell:  5",
                },
                {
                  values: 2,
                  user: "player",
                  units: "total_24",
                  pre: "Sell:  24",
                },
                {
                  values: 2,
                  user: "player",
                  units: "total_24",
                  pre: "Sell:  24",
                },
                {
                  values: 3,
                  user: "player",
                  units: "total_30",
                  pre: "Sell:  30",
                },
                {
                  values: 3,
                  user: "player",
                  units: "total_32",
                  pre: "Sell:  32",
                },
                {
                  values: 3,
                  user: "player",
                  units: "total_32",
                  pre: "Sell:  32",
                },
                {
                  values: 3,
                  user: "player",
                  units: "total_32",
                  pre: "Sell:  32",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_cannot be sold",
                  pre: "Cannot be sold",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_aram only",
                  pre: "ARAM only",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_cannot be sold",
                  pre: "Cannot be sold",
                },
              ],
            },
          ],
          locked: true,
        },
        {
          description:
            'If the inventory is full while receiving a consumable item, it will be consumed immediately. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Manaless"><a href="/wiki/Manaless" title="Manaless"><img alt="Manaless resource.png" src="/wiki/images/Manaless_resource.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Manaless" title="Manaless">Manaless</a></span> champions will not receive <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Mana Potion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Mana_Potion" title="Mana Potions"><img alt="Mana Potions" src="/wiki/images/Mana_Potion_item.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mana_Potion" title="Mana Potion">Mana Potions</a></span></span>. Wards cannot be obtained outside a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Classic 5v5"><a href="/wiki/Classic" title="Classic"><img alt="Red Nexus icon.png" src="/wiki/images/Red_Nexus_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Classic" title="Classic">Classic 5v5</a></span> mode.',
          leveling: [
            {
              name: "If the inventory is full while receiving a consumable item, it will be consumed immediately:",
              raw: "If the inventory is full while receiving a consumable item, it will be consumed immediately",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units:
                "total_if the inventory is full while receiving a consumable item, it will be consumed immediately",
              pre: "If the inventory is full while receiving a consumable item, it will be consumed immediately",
            },
            {
              name: " Manaless champions will not receive  Mana Potions:",
              raw: " Manaless champions will not receive  Mana Potions",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_mana",
              pre: "Manaless champions will not receive  Mana Potions",
            },
            {
              name: "Wards cannot be obtained outside a  Classic 5v5 mode.:",
              raw: "Wards cannot be obtained outside a  Classic 5v5 mode.",
              damagetype: "None",
              effectType: "Unique",
              values: 5,
              user: "player",
              units: "total_cannot be obtained outside a  classic 5v5 mode.",
              pre: "Wards cannot be obtained outside a  Classic 5v5 mode.",
            },
          ],
          locked: true,
        },
      ],
    },
    8360: {
      id: 8360,
      name: "Unsealed Spellbook",
      majorChangePatchVersion: "8.9",
      tooltip:
        "Swap one of your equipped Summoner Spells to a new, single use Summoner Spell. Each unique Summoner Spell you swap to permanently decreases your swap cooldown by 25s (initial swap cooldown is at 5 mins). <br><br>Your first swap becomes available at 6 mins. <br><rules><br>Summoner Spells can only be swapped while out of combat. <br>After using a swapped Summoner Spell you must swap 3 more times before the first can be selected again.<br>Smite damage increases after two Summoner Spell swaps. </rules><hr><br>Unique Summoner Spells Used: @f4@/@f8@<br>Current Swap Cooldown: @f3@ seconds",
      shortDesc:
        "Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.",
      longDesc:
        "Swap one of your equipped Summoner Spells to a new, single use Summoner Spell. Each unique Summoner Spell you swap to permanently decreases your swap cooldown by 25s (initial swap cooldown is at 5 mins). <br><br>Your first swap becomes available at 6 mins. <br><rules><br>Summoner Spells can only be swapped while out of combat. <br>After using a swapped Summoner Spell you must swap 3 more times before the first can be selected again.<br>Smite damage increases after two Summoner Spell swaps. </rules>",
      recommendationDescriptor: "Cast more Summoners",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png",
      endOfGameStatDescs: ["Summoner Spells swapped: @eogvar1@"],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Inspiration",
      slot: "Keystone",
      cooldown:
        '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="unique swaps" data-displayformula="300-25 per unique swap. \'\'This is capped at 150 seconds at 6 swaps.\'\'" data-bot_values="300;275;250;225;200;175;150" data-top_values="0;1;2;3;4;5;6">300 − 150 (based on unique swaps)</span>',
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> While not channeling <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width=20 height=20 class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> and being <a href="/wiki/Combat_status" title="Combat status">out-of-combat</a> for 5 seconds, you can swap one of your equipped <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a> to a new, single use summoner spell. You cannot select a summoner spell you have already equipped.',
          leveling: [
            {
              name: "Name 01:",
              raw: " While not channeling  Teleport and being out-of-combat for 5 seconds, you can swap one of your equipped summoner spells to a new, single use summoner spell",
              damagetype: "None",
              effectType: "Unique",
              values: 5,
              user: "player",
              units: "total_ap",
              pre: "While not channeling  Teleport and being out-of-combat for 5 seconds, you can swap one of your equipped summoner spells to a new, single use summoner spell",
            },
            {
              name: "You cannot select a summoner spell you have already equipped.:",
              raw: "You cannot select a summoner spell you have already equipped.",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "total_ad",
              pre: "You cannot select a summoner spell you have already equipped.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/unsealedspellbook/unsealedspellbook.png",
        },
        {
          description:
            "Your first swap becomes available after 6 minutes, with an initial 300 second cooldown. Selecting a unique summoner spell reduces the swap cooldown by 25 seconds. You must swap to 3 different summoner spells before returning to one you've already used.",
          leveling: [
            {
              name: "Your first swap becomes available after 6 minutes, with an initial 300 second cooldown:",
              raw: "Your first swap becomes available after 6 minutes, with an initial 300 second cooldown",
              damagetype: "None",
              effectType: "Unique",
              values: 6,
              user: "player",
              units: "total_ap",
              pre: "Your first swap becomes available after 6 minutes, with an initial 300 second cooldown",
            },
            {
              name: "Selecting a unique summoner spell reduces the swap cooldown by 25 seconds:",
              raw: "Selecting a unique summoner spell reduces the swap cooldown by 25 seconds",
              damagetype: "None",
              effectType: "Unique",
              values: 2,
              user: "player",
              units: "total_ap",
              pre: "Selecting a unique summoner spell reduces the swap cooldown by 25 seconds",
            },
            {
              name: "You must swap to 3 different summoner spells before returning to one you've already used.:",
              raw: "You must swap to 3 different summoner spells before returning to one you've already used.",
              damagetype: "None",
              effectType: "Gain",
              values: 3,
              user: "player",
              units: "total_ap",
              pre: "You must swap to 3 different summoner spells before returning to one you've already used.",
            },
          ],
          locked: true,
        },
        {
          description:
            "Selecting a summoner spell puts it on a 5 second cooldown.",
          leveling: [
            {
              name: "Selecting a summoner spell puts it on a 5 second cooldown.:",
              raw: "Selecting a summoner spell puts it on a 5 second cooldown.",
              damagetype: "None",
              effectType: "Unique",
              values: 5,
              user: "player",
              units: "total_a summoner spell puts it on a 5 second cooldown.",
              pre: "Selecting a summoner spell puts it on a 5 second cooldown.",
            },
          ],
          locked: true,
        },
        {
          description:
            "Using a selected summoner spell puts the summoner spell in the same slot on a 10 second cooldown.",
          leveling: [
            {
              name: "Using a selected summoner spell puts the summoner spell in the same slot on a 10 second cooldown.:",
              raw: "Using a selected summoner spell puts the summoner spell in the same slot on a 10 second cooldown.",
              damagetype: "None",
              effectType: "Unique",
              values: 1,
              user: "player",
              units:
                "total_a selected summoner spell puts the summoner spell in the same slot on a 10 second cooldown.",
              pre: "Using a selected summoner spell puts the summoner spell in the same slot on a 10 second cooldown.",
            },
          ],
          locked: true,
        },
      ],
    },
    8369: {
      id: 8369,
      name: "First Strike",
      majorChangePatchVersion: "11.23",
      tooltip:
        "Attacks or abilities against an enemy champion within @GraceWindow.2@s of entering champion combat grants @GoldProcBonus@ gold and <b>First Strike</b> for @Duration@ seconds, causing you to deal <truedamage>@DamageAmp*100@%</truedamage> extra <truedamage>damage</truedamage> against champions, and granting <gold>{{ Item_Melee_Ranged_Split }}</gold> of that damage dealt as <gold>gold</gold>.<br><br>Cooldown: <scaleLevel>@Cooldown@</scaleLevel>s<br><hr><br>Damage Dealt: @f1@<br>Gold Gained: @f2@",
      shortDesc:
        "When you initiate champion combat, deal 9% extra damage for 3 seconds and gain gold based on damage dealt.",
      longDesc:
        "Attacks or abilities against an enemy champion within 0.25s of entering champion combat grants 5 gold and <b>First Strike</b> for 3 seconds, causing you to deal <truedamage>9%</truedamage> extra <truedamage> damage</truedamage> against champions, and granting <gold>100% (70% for ranged champions)</gold> of bonus damage dealt as <gold>gold</gold>.<br><br>Cooldown: <scaleLevel>25 - 15</scaleLevel>s",
      recommendationDescriptor: "True Damage, Income",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png",
      endOfGameStatDescs: ["Damage Dealt: @eogvar1@", "Gold Gained: @eogvar2@"],
      recommendationDescriptorAttributes: {},
      released: 2022,
      path: "Inspiration",
      slot: "Keystone",
      cooldown:
        '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;" data-finish="15;" data-bot_values="25;24.41;23.82;23.24;22.65;22.06;21.47;20.88;20.29;19.71;19.12;18.53;17.94;17.35;16.76;16.18;15.59;15" data-top_values="">25 − 15 (based on level)</span>',
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Dealing damage or applying a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> effect to an enemy champion within the first 0.<small>25</small> seconds of champion combat, grants <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="5 Gold"><img alt="5 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">5</span></span> and <i>First Strike</i> for 3 seconds, causing all of your <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt against champions to deal <span style="color: #F9966B; white-space:normal">9% <b>bonus</b> true damage</span>. Afterwards, you are granted <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="gold Gold"><img alt="gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">gold</span></span> equal to <span style="white-space:pre;">(<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a> 100%</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a> 70%</span>)</span> of all <b>bonus</b> damage dealt within the duration.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Dealing damage or applying a  crowd control effect to an enemy champion within the first 0.25 seconds of champion combat, grants  5 and First Strike for 3 seconds, causing all of your post-mitigation damage dealt against champions to deal 9% bonus true damage",
              damagetype: "True",
              effectType: "Damage",
              values: 0,
              valuesIsPercent: true,
              user: "player",
              units: "total_ap",
              pre: "Dealing damage or applying a  crowd control effect to an enemy champion within the first 0.25 seconds of champion combat, grants  5 and First Strike for 3 seconds, causing all of your post-mitigation damage dealt against champions to deal 9% bonus true damage",
            },
            {
              name: "Afterwards, you are granted  gold equal to ( 100% /  70%) of all bonus damage dealt within the duration.:",
              raw: "Afterwards, you are granted  gold equal to ( 100% /  70%) of all bonus damage dealt within the duration.",
              damagetype: "None",
              effectType: "Damage",
              values: 0,
              user: "player",
              units: "bonus_of all bonus damage dealt within the duration.",
              pre: "Afterwards, you are granted  gold equal to",
              post: "of all bonus damage dealt within the duration.",
              children: [
                {
                  values: 100,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_/  70",
                  pre: "100% /  70%",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/firststrike/firststrike.png",
        },
        {
          description:
            "<i>First Strike</i> will be placed on full cooldown after being struck by an enemy champion before you strike them.",
          leveling: [
            {
              name: "First Strike will be placed on full cooldown after being struck by an enemy champion before you strike them.:",
              raw: "First Strike will be placed on full cooldown after being struck by an enemy champion before you strike them.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units:
                "total_first strike will be placed on full cooldown after being struck by an enemy champion before you strike them.",
              pre: "First Strike will be placed on full cooldown after being struck by an enemy champion before you strike them.",
            },
          ],
          locked: true,
        },
      ],
    },
    8401: {
      id: 8401,
      name: "Shield Bash",
      majorChangePatchVersion: "8.23",
      tooltip:
        "While shielded, gain <scaleLevel>@f6@</scaleLevel> bonus Armor and Magic Resist.<br><br>Whenever you gain a new shield, your next basic attack against a champion deals <scaleLevel>@f4@</scaleLevel> <scaleHealth>(+@f2@)</scaleHealth> <scaleMana>(+8.5% New Shield Amount)</scaleMana> bonus magic damage.<br><br>You have up to 2s after the shield expires to use this effect.<br><hr><br>Total Damage Dealt: @f1@",
      shortDesc:
        "Whenever you gain a shield, your next basic attack against a champion deals bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> damage.",
      longDesc:
        "While shielded, gain <scaleLevel>1 - 10</scaleLevel> Armor and Magic Resist based on Level.<br><br>Whenever you gain a new shield,  your next basic attack against a champion deals <scaleLevel>5 - 30</scaleLevel> <scaleHealth>(+1.5% Bonus Health)</scaleHealth> <scaleMana>(+8.5% New Shield Amount)</scaleMana> bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> damage.<br><br>You have up to 2s after the shield expires to use this effect.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/MirrorShell/MirrorShell.png",
      endOfGameStatDescs: ["Total Damage: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kBurstDamage: 5,
        kDurability: 5,
      },
      released: 2019,
      path: "Resolve",
      slot: 1,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> While you have a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span>, gain <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1;" data-finish="10;" data-bot_values="1;1.53;2.06;2.59;3.12;3.65;4.18;4.71;5.24;5.76;6.29;6.82;7.35;7.88;8.41;8.94;9.47;10" data-top_values="">1 − 10 (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " While you have a  shield, gain 1 − 10 (based on level)  bonus armor and  bonus magic resistance.",
              damagetype: "Magic",
              effectType: "Shield",
              values: [1, 10],
              user: "player",
              units: "bonus_armor",
              pre: "While you have a  shield, gain 1 − 10",
              post: "bonus armor and  bonus magic resistance.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/mirrorshell/mirrorshell.png",
        },
        {
          description:
            'Whenever you gain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span>, your next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> is empowered to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;" data-finish="30;" data-bot_values="5;6.47;7.94;9.41;10.88;12.35;13.82;15.29;16.76;18.24;19.71;21.18;22.65;24.12;25.59;27.06;28.53;30" data-top_values="">5 − 30 (based on level)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;1.<small>5</small>% <b>bonus</b> health)</span> <span style="color:inherit; white-space:normal">(+&nbsp;8.<small>5</small>% shield amount)</span> <b>bonus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Adaptive damage"><a href="/wiki/Adaptive_force#Adaptive_damage" title="Adaptive force#Adaptive damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a><a href="/wiki/Adaptive_force#Adaptive_damage" title="Adaptive force#Adaptive damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Adaptive_force#Adaptive_damage" title="Adaptive force">Adaptive damage</a></span>. The empowered attack lasts for up to 2 seconds after the shield expires.',
          leveling: [
            {
              name: "Whenever you gain a  shield, your next basic attack against an enemy  champion is empowered to deal 5 − 30 (based on level) (+ 1.5% bonus health) (+ 8.5% shield amount) bonus  Adaptive damage:",
              raw: "Whenever you gain a  shield, your next basic attack against an enemy  champion is empowered to deal 5 − 30 (based on level) (+ 1.5% bonus health) (+ 8.5% shield amount) bonus  Adaptive damage",
              damagetype: "None",
              effectType: "Damage",
              values: [5, 30],
              user: "player",
              units: "total_ap",
              pre: "Whenever you gain a  shield, your next basic attack against an enemy  champion is empowered to deal 5 − 30",
              post: "bonus  Adaptive damage",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 1.5,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_hp",
                  pre: "+ 1.5% bonus health",
                },
                {
                  values: 8.5,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_shield amount",
                  pre: "+ 8.5% shield amount",
                },
              ],
            },
            {
              name: "The empowered attack lasts for up to 2 seconds after the shield expires.:",
              raw: "The empowered attack lasts for up to 2 seconds after the shield expires.",
              damagetype: "None",
              effectType: "Shield",
              values: 2,
              user: "player",
              units: "total_ad",
              pre: "The empowered attack lasts for up to 2 seconds after the shield expires.",
            },
          ],
          locked: true,
        },
        {
          description:
            '<span class="template_sbc"><b>Adaptive Damage:</b></span> This effect deals either physical or magic damage depending on the damage contribution from your <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;attack damage</span></span> and <span style="color: #7A6DFF; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;ability power</span></span> to the effect\'s damage formula.\n<ul><li>Greater <b>bonus damage</b> from the <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;AD ratio</span></span> → <span style="color: #FF8C34; white-space:normal">Physical damage</span></li>\n<li>Greater <b>bonus damage</b> from the <span style="color: #7A6DFF; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;AP ratio</span></span> → <span style="color: #00B0F0; white-space:normal">Magic damage</span></li></ul>\n<p>If the damage contribution of <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;AD</span></span> and <span style="color: #7A6DFF; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;AP</span></span> are zero or otherwise equal, the damage type depends on the effect\'s particular default.\n</p>',
          leveling: [
            {
              name: "Name 01:",
              raw: " This effect deals either physical or magic damage depending on the damage contribution from your  attack damage and  ability power to the effect's damage formula.\nGreater bonus damage from the  AD ratio → Physical damage\nGreater bonus damage from the  AP ratio → Magic damage\nIf the damage contribution of  AD and  AP are zero or otherwise equal, the damage type depends on the effect's particular default.",
              damagetype: "Physical",
              effectType: "Damage",
              values: 0,
              user: "player",
              units: "total_ap",
              pre: "This effect deals either physical or magic damage depending on the damage contribution from your  attack damage and  ability power to the effect's damage formula.\nGreater bonus damage from the  AD ratio → Physical damage\nGreater bonus damage from the  AP ratio → Magic damage\nIf the damage contribution of  AD and  AP are zero or otherwise equal, the damage type depends on the effect's particular default.",
            },
          ],
          locked: true,
        },
      ],
    },
    8410: {
      id: 8410,
      name: "Approach Velocity",
      majorChangePatchVersion: "",
      tooltip:
        "Gain <speed>7.5% Move Speed</speed> towards nearby enemy champions that are movement impaired. This bonus is increased to <speed>15% Move Speed</speed> for any enemy champion that you impair. <br><br>Activation Range for CC from allies: 1000<br><hr><br>Time Spent Hasted: @f1@s",
      shortDesc:
        "Bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>MS</lol-uikit-tooltipped-keyword> towards nearby enemy champions that are <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_ImpairMov'>movement impaired</lol-uikit-tooltipped-keyword>, increased for enemy champions that you impair.",
      longDesc:
        "Gain <speed>7.5% Move Speed</speed> towards nearby enemy champions that are movement impaired. This bonus is increased to <speed>15% Move Speed</speed> for any enemy champion that you impair. <br><br>Activation Range for CC from allies: 1000",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png",
      endOfGameStatDescs: ["Time Spent Hasted: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kMoveSpeed: 10,
      },
      released: "2018",
      path: "Inspiration",
      slot: 3,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">7.<small>5</small>% <b>bonus total</b> movement speed</span></span> while facing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> within <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a></span> 1000 range.<br><br>This bonus is doubled to <span style="color: #F5EE99; white-space:normal">15%</span> and does not have a range cap nor require <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Sight" title="Sight">vision</a></span> toward enemy champions whose movement you impaired when they were <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span>.<sup><span style="border-bottom:1px dotted gray; cursor:help;" title="This may not be intended.">(bug)</span></sup>',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain  7.5% bonus total movement speed while facing  visible enemy  champions that are  immobilized,  grounded, or  slowed within  1000 range.This bonus is doubled to 15% and does not have a range cap nor require  vision toward enemy champions whose movement you impaired when they were  visible.(bug)",
              damagetype: "None",
              effectType: "Gain",
              values: 7,
              valuesIsPercent: true,
              user: "player",
              units:
                "total_bonus total movement speed while facing  visible enemy  champions that are  immobilized,  grounded, or  slowed within  1000 range.this bonus is doubled to 15 7.5",
              pre: "Gain  7.5% bonus total movement speed while facing  visible enemy  champions that are  immobilized,  grounded, or  slowed within  1000 range.This bonus is doubled to 15% and does not have a range cap nor require  vision toward enemy champions whose movement you impaired when they were  visible.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_bug",
                  pre: "bug",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/approachvelocity/approachvelocity.png",
        },
      ],
    },
    8429: {
      id: 8429,
      name: "Conditioning",
      majorChangePatchVersion: "9.9",
      tooltip:
        "After 12 min gain +8 Armor and +8 Magic Resist and increase your bonus Armor and Magic Resist by 3%.<br><br>Armor Gained: @f3@ <scaleArmor>(+@f4@)</scaleArmor><br>Resist Gained: @f5@ <scaleMR>(+@f6@)</scaleMR>",
      shortDesc:
        "After 12 min gain +8 Armor and +8 Magic Resist and increase your bonus Armor and Magic Resist by 3%.",
      longDesc:
        "After 12 min gain +8 Armor and +8 Magic Resist and increase your bonus Armor and Magic Resist by 3%.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/Conditioning/Conditioning.png",
      endOfGameStatDescs: [
        "Percent of game active: @eogvar1@%",
        "Total Bonus Armor: @eogvar2@",
        "Total Bonus Magic Resist: @eogvar3@",
      ],
      recommendationDescriptorAttributes: {
        kDurability: 10,
      },
      released: "2018",
      path: "Resolve",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> After 12 minutes, gain <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">8 <b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">8 <b>bonus</b> magic resistance</span></span> and your <span style="color:yellow; white-space:normal"><b>total</b> armor</span> and <span style="color: #00FFFF; white-space:normal"><b>total</b> magic resistance</span> are increased by 3%.',
          leveling: [
            {
              name: "Name 01:",
              raw: " After 12 minutes, gain  8 bonus armor and  8 bonus magic resistance and your total armor and total magic resistance are increased by 3%.",
              damagetype: "Magic",
              effectType: "Gain",
              values: 1,
              valuesIsPercent: true,
              user: "player",
              units: "total_armor",
              pre: "After 12 minutes, gain  8 bonus armor and  8 bonus magic resistance and your total armor and total magic resistance are increased by 3%.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/conditioning/conditioning.png",
        },
      ],
    },
    8430: {
      id: 8430,
      name: "Iron Skin",
      majorChangePatchVersion: "",
      tooltip:
        "Gain +5 Armor. <br><br>Heal effects from consumables, heals for at least 20 health and shields increase your Armor by 5% for 3s.",
      shortDesc:
        "Gain +5 Armor. <br>Heals, including consumables, increase your Armor by 5% temporarily.",
      longDesc:
        "Gain +5 Armor. <br><br>Heal effects from consumables, heals for at least 20 health and shields increase your Armor by 5% for 3s.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/IronSkin/IronSkin.png",
      endOfGameStatDescs: ["Percent of game active: @eogvar1@%"],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Resolve",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain <span style="color:yellow; white-space:normal">5 <b>bonus</b> armor</span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain 5 bonus armor.",
              damagetype: "None",
              effectType: "Gain",
              values: 5,
              user: "player",
              units: "bonus_armor",
              pre: "Gain 5 bonus armor.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/ironskin/ironskin.png",
        },
        {
          description:
            'Additionally, increase your <span style="color:yellow; white-space:normal"><b>total</b> armor by 5%</span> for 3 seconds whenever you <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for at least 20, consume a <a href="/wiki/Potion" class="mw-disambig" title="Potion">potion</a> or <a href="/wiki/Total_Biscuit_of_Everlasting_Will" title="Total Biscuit of Everlasting Will">biscuit</a>, or gain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span>. Subsequent triggers will only refresh the duration.',
          leveling: [
            {
              name: "Additionally, increase your total armor by 5% for 3 seconds whenever you  heal for at least 20, consume a potion or biscuit, or gain a  shield:",
              raw: "Additionally, increase your total armor by 5% for 3 seconds whenever you  heal for at least 20, consume a potion or biscuit, or gain a  shield",
              damagetype: "None",
              effectType: "Heal",
              values: 5,
              valuesIsPercent: true,
              user: "player",
              units: "total_armor",
              pre: "Additionally, increase your total armor by 5% for 3 seconds whenever you  heal for at least 20, consume a potion or biscuit, or gain a  shield",
            },
            {
              name: "Subsequent triggers will only refresh the duration.:",
              raw: "Subsequent triggers will only refresh the duration.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units:
                "total_subsequent triggers will only refresh the duration.",
              pre: "Subsequent triggers will only refresh the duration.",
            },
          ],
          locked: true,
        },
      ],
    },
    8435: {
      id: 8435,
      name: "Mirror Shell",
      majorChangePatchVersion: "",
      tooltip:
        "Gain +6 Magic Resist. <br><br>Heal effects from consumables, heals for at least 20 health and shields increase your Magic Resist by 5% for 3s.",
      shortDesc:
        "Gain +6 Magic Resist. <br>Heals, including consumables, increase your Magic Resist by 5% temporarily.<br>",
      longDesc:
        "Gain +6 Magic Resist. <br><br>Heal effects from consumables, heals for at least 20 health and shields increase your Magic Resist by 5% for 3s.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/MirrorShell/MirrorShell.png",
      endOfGameStatDescs: ["Bonus Magic Resist: @eogvar1@"],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Resolve",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain <span style="color: #00FFFF; white-space:normal">6 <b>bonus</b> magic resistance</span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain 6 bonus magic resistance.",
              damagetype: "Magic",
              effectType: "Gain",
              values: 6,
              user: "player",
              units: "bonus_mr",
              pre: "Gain 6 bonus magic resistance.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/mirrorshell/mirrorshell.png",
        },
        {
          description:
            'Additionally, increase your <span style="color: #00FFFF; white-space:normal"><b>total</b> magic resistance by 5%</span> for 3 seconds whenever you <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for at least 20, consume a <a href="/wiki/Potion" class="mw-disambig" title="Potion">potion</a> or <a href="/wiki/Total_Biscuit_of_Everlasting_Will" title="Total Biscuit of Everlasting Will">biscuit</a>, or gain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span>. Subsequent triggers will only refresh the duration.',
          leveling: [
            {
              name: "Additionally, increase your total magic resistance by 5% for 3 seconds whenever you  heal for at least 20, consume a potion or biscuit, or gain a  shield:",
              raw: "Additionally, increase your total magic resistance by 5% for 3 seconds whenever you  heal for at least 20, consume a potion or biscuit, or gain a  shield",
              damagetype: "Magic",
              effectType: "Heal",
              values: 5,
              valuesIsPercent: true,
              user: "player",
              units: "total_mr",
              pre: "Additionally, increase your total magic resistance by 5% for 3 seconds whenever you  heal for at least 20, consume a potion or biscuit, or gain a  shield",
            },
            {
              name: "Subsequent triggers will only refresh the duration.:",
              raw: "Subsequent triggers will only refresh the duration.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units:
                "total_subsequent triggers will only refresh the duration.",
              pre: "Subsequent triggers will only refresh the duration.",
            },
          ],
          locked: true,
        },
      ],
    },
    8437: {
      id: 8437,
      name: "Grasp of the Undying",
      majorChangePatchVersion: "",
      tooltip:
        "Every 4s in combat, your next basic attack on a champion will:<li>Deal bonus magic damage equal to 3.5% of your max health</li><li>Heals you for 1.7% of your max health</li><li>Permanently increase your health by 5</li><br><rules><i>Ranged Champions:</i> Damage, healing, and permanent health gained reduced by 40%.</rules><br><br>Damage to Champions: <scaleHealth>@f1@</scaleHealth><br>Total Healing: <scaleHealth>@f2@</scaleHealth><br>Times Used: @f3@",
      shortDesc:
        "Every 4s your next attack on a champion deals bonus magic damage, heals you, and permanently increases your health.",
      longDesc:
        "Every 4s in combat, your next basic attack on a champion will:<li>Deal bonus magic damage equal to 3.5% of your max health</li><li>Heals you for 1.7% of your max health</li><li>Permanently increase your health by 5</li><br><rules><i>Ranged Champions:</i> Damage, healing, and permanent health gained reduced by 40%.</rules><br>",
      recommendationDescriptor: "Drain Opponents",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png",
      endOfGameStatDescs: [
        "Total damage: @eogvar1@",
        "Total Healing: @eogvar2@",
      ],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Resolve",
      slot: "Keystone",
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Entering <a href="/wiki/Combat_status" title="Combat status">combat</a> generates 1 <a href="/wiki/Stack" title="Stack">stack</a> every second for the next 3 seconds. Additional stacks may be generated by entering combat again after 2 seconds, refreshing the duration with each instance of combat and stacking the effect up to 4 times. At maximum stacks, your next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> within 6 seconds against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> consumes all stacks to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to <span style="color: #1F995C; white-space:normal"><span style="white-space:pre;">(<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a> 3.<small>5</small>%</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a> 2.<small>1</small>%</span>)</span> of your <b>maximum</b> health</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> you for <span style="color: #1F995C; white-space:normal"><span style="white-space:pre;">(<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a> 1.<small>7</small>%</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a> 1.<small>02</small>%</span>)</span> of your <b>maximum</b> health</span>, and permanently grant <span style="color: #1F995C; white-space:normal"><span style="white-space:pre;">(<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a> 5</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width=16 height=16 class="lazyload"></a> 3</span>)</span> <b>bonus</b> health</span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Entering combat generates 1 stack every second for the next 3 seconds",
              damagetype: "None",
              effectType: "Unique",
              values: 1,
              user: "player",
              units: "total_feast_stack",
              pre: "Entering combat generates 1 stack every second for the next 3 seconds",
            },
            {
              name: "Additional stacks may be generated by entering combat again after 2 seconds, refreshing the duration with each instance of combat and stacking the effect up to 4 times:",
              raw: "Additional stacks may be generated by entering combat again after 2 seconds, refreshing the duration with each instance of combat and stacking the effect up to 4 times",
              damagetype: "None",
              effectType: "Gain",
              values: 2,
              user: "player",
              units: "total_feast_stack",
              pre: "Additional stacks may be generated by entering combat again after 2 seconds, refreshing the duration with each instance of combat and stacking the effect up to 4 times",
            },
            {
              name: "At maximum stacks, your next basic attack  on-hit within 6 seconds against an enemy  champion consumes all stacks to deal bonus magic damage equal to ( 3.5% /  2.1%) of your maximum health,  heal you for ( 1.7% /  1.02%) of your maximum health, and permanently grant ( 5 /  3) bonus health.:",
              raw: "At maximum stacks, your next basic attack  on-hit within 6 seconds against an enemy  champion consumes all stacks to deal bonus magic damage equal to ( 3.5% /  2.1%) of your maximum health,  heal you for ( 1.7% /  1.02%) of your maximum health, and permanently grant ( 5 /  3) bonus health.",
              damagetype: "Magic",
              effectType: "Damage",
              values: 6,
              user: "player",
              units: "maximum_hp",
              pre: "At maximum stacks, your next basic attack  on-hit within 6 seconds against an enemy  champion consumes all stacks to deal bonus magic damage equal to",
              post: "of your maximum health,  heal you for",
              children: [
                {
                  values: 3.5,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_/  2.1",
                  pre: "3.5% /  2.1%",
                },
                {
                  values: 1.7,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_/  1.02",
                  pre: "1.7% /  1.02%",
                },
                {
                  values: [5, 3],
                  user: "none",
                  units: "",
                  pre: "5 /  3",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/graspoftheundying/graspoftheundying.png",
        },
      ],
    },
    8439: {
      id: 8439,
      name: "Aftershock",
      majorChangePatchVersion: "9.9",
      tooltip:
        "After immobilizing an enemy champion, increase your Armor and Magic Resist for 2.5s. Then explode, dealing magic damage to nearby enemies.<br><br>Damage: <scaleLevel>@f4@</scaleLevel> <scaleHealth>(+@f5@)</scaleHealth> <br>Armor buff: @f8@<scaleArmor> (+@f2@)</scaleArmor><br>Magic Resist buff: @f8@<scaleMR> (+@f3@)</scaleMR><br>Cooldown: 20s<br><hr><br>Total damage dealt: <scaleAD>@f1@</scaleAD><br>Total damage mitigated: <scaleHealth>@f9@</scaleHealth>",
      shortDesc:
        "After <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Immobilize'>immobilizing</lol-uikit-tooltipped-keyword> an enemy champion gain defenses and later deal a burst of magic damage around you.",
      longDesc:
        "After immobilizing an enemy champion, increase your Armor and Magic Resist by 35 + 80% of your Bonus Resists for 2.5s. Then explode, dealing magic damage to nearby enemies.<br><br>Damage: 25 - 120 (+8% of your bonus health)<br>Cooldown: 20s<br><br>Resistance bonus from Aftershock capped at: 80-150 (based on level)<br>",
      recommendationDescriptor: "Burst Defenses",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png",
      endOfGameStatDescs: [
        "Total Damage Dealt: @eogvar1@",
        "Total Damage Mitigated: @eogvar2@",
      ],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Resolve",
      slot: "Keystone",
      cooldown: 20,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">Immobilizing</a></span> an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> grants you a static <span style="color:yellow; white-space:normal">35</span> <span style="color:yellow; white-space:normal">(+&nbsp;80% <b>bonus</b> armor)</span> <span style="color:yellow; white-space:normal"><b>bonus</b> armor</span> and <span style="color: #00FFFF; white-space:normal">35</span> <span style="color: #00FFFF; white-space:normal">(+&nbsp;80% <b>bonus</b> magic resistance)</span> <span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span> for 2.<small>5</small> seconds. The <b>bonus</b> resistances are capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="80;" data-finish="150;" data-bot_values="80;84.12;88.24;92.35;96.47;100.59;104.71;108.82;112.94;117.06;121.18;125.29;129.41;133.53;137.65;141.76;145.88;150" data-top_values="">80 − 150 (based on level)</span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: "  Immobilizing an enemy  champion grants you a static 35 (+ 80% bonus armor) bonus armor and 35 (+ 80% bonus magic resistance) bonus magic resistance for 2.5 seconds",
              damagetype: "Magic",
              effectType: "Gain",
              values: 3,
              user: "player",
              units: "total_armor",
              pre: "Immobilizing an enemy  champion grants you a static 35",
              post: "bonus armor and 35",
              children: [
                {
                  values: 80,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_armor",
                  pre: "+ 80% bonus armor",
                },
                {
                  values: 80,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_mr",
                  pre: "+ 80% bonus magic resistance",
                },
              ],
            },
            {
              name: "The bonus resistances are capped at 80 − 150 (based on level).:",
              raw: "The bonus resistances are capped at 80 − 150 (based on level).",
              damagetype: "None",
              effectType: "Gain",
              values: [8, 150],
              user: "player",
              units: "total_.",
              pre: "The bonus resistances are capped at 80 − 150",
              post: ".",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/veteranaftershock/veteranaftershock.png",
        },
        {
          description:
            'After the duration, you release a shockwave that deals <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;" data-finish="120;" data-bot_values="25;30.59;36.18;41.76;47.35;52.94;58.53;64.12;69.71;75.29;80.88;86.47;92.06;97.65;103.24;108.82;114.41;120" data-top_values="">25 − 120 (based on level)</span></span> <span style="color: #1F995C; white-space:normal">(+&nbsp;8% of your <b>bonus</b> health)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemy champions and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> within a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a></span> 350 radius.',
          leveling: [
            {
              name: "After the duration, you release a shockwave that deals 25 − 120 (based on level) (+ 8% of your bonus health) magic damage to enemy champions and  monsters within a  350 radius.:",
              raw: "After the duration, you release a shockwave that deals 25 − 120 (based on level) (+ 8% of your bonus health) magic damage to enemy champions and  monsters within a  350 radius.",
              damagetype: "Magic",
              effectType: "Damage",
              values: [2, 120],
              user: "player",
              units: "total_ad",
              pre: "After the duration, you release a shockwave that deals 25 − 120",
              post: "magic damage to enemy champions and  monsters within a  350 radius.",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 8,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_hp",
                  pre: "+ 8% of your bonus health",
                },
              ],
            },
          ],
          locked: true,
        },
      ],
    },
    8444: {
      id: 8444,
      name: "Second Wind",
      majorChangePatchVersion: "",
      tooltip:
        "After taking damage from an enemy champion, heal for 4% of your missing health +3 over 10s.<br><hr><br><scaleAD>Total healing: @f1@</scaleAD>",
      shortDesc:
        "After taking damage from an enemy champion heal back some missing health over time. ",
      longDesc:
        "After taking damage from an enemy champion, heal for 4% of your missing health +3 over 10s.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/SecondWind/SecondWind.png",
      endOfGameStatDescs: ["Total Healing: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kHealing: 10,
      },
      released: "2018",
      path: "Resolve",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> After taking damage from an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">regenerate</a></span> 3 <span style="color: #1F995C; white-space:normal">(+&nbsp;4% of your <b>missing</b> health)</span> health over 10 seconds.',
          leveling: [
            {
              name: "Name 01:",
              raw: " After taking damage from an enemy  champion,  regenerate 3 (+ 4% of your missing health) health over 10 seconds.",
              damagetype: "None",
              effectType: "Damage",
              values: 3,
              user: "player",
              units: "total_over 10 seconds.",
              pre: "After taking damage from an enemy  champion,  regenerate 3",
              post: "health over 10 seconds.",
              children: [
                {
                  values: 4,
                  valuesIsPercent: true,
                  user: "player",
                  units: "missing_hp",
                  pre: "+ 4% of your missing health",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/secondwind/secondwind.png",
        },
      ],
    },
    8446: {
      id: 8446,
      name: "Demolish",
      majorChangePatchVersion: "",
      tooltip:
        "Charge up a powerful attack against a tower over 3s, while within 600 range of it. The charged attack deals <scaleAD>@f6@</scaleAD> bonus physical damage. <br><hr><br>Cooldown remaining: @f2@<br>Total bonus damage: <scaleAD>@f1@</scaleAD><br>Current Damage: 100 + 35% of your max health",
      shortDesc: "Charge up a powerful attack against a tower while near it.",
      longDesc:
        "Charge up a powerful attack against a tower over 3s, while within 600 range of it. The charged attack deals 100 (+35% of your max health) bonus physical damage. <br><br>Cooldown: 45s",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/Demolish/Demolish.png",
      endOfGameStatDescs: ["Total Bonus Damage: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kUtility: 10,
      },
      released: "2018",
      path: "Resolve",
      slot: 1,
      cooldown:
        '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after using the empowered attack">45</span>',
      range: 600,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Generate <a href="/wiki/Stack" title="Stack">stacks</a> every 0.<small>5</small> seconds on enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> within 600 units, up to 6 after 3 seconds. Your next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against a turret with 6 stacks is empowered to consume all stacks to deal <span style="color: #FF8C34; white-space:normal">100 <span style="color: #1F995C; white-space:normal">(+&nbsp;35% of your <b>maximum</b> health)</span> <b>bonus</b> physical damage</span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Generate stacks every 0.5 seconds on enemy  turrets within 600 units, up to 6 after 3 seconds",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_feast_stack",
              pre: "Generate stacks every 0.5 seconds on enemy  turrets within 600 units, up to 6 after 3 seconds",
            },
            {
              name: "Your next basic attack against a turret with 6 stacks is empowered to consume all stacks to deal 100 (+ 35% of your maximum health) bonus physical damage.:",
              raw: "Your next basic attack against a turret with 6 stacks is empowered to consume all stacks to deal 100 (+ 35% of your maximum health) bonus physical damage.",
              damagetype: "Physical",
              effectType: "Damage",
              values: 6,
              user: "player",
              units: "bonus_bonus physical damage.",
              pre: "Your next basic attack against a turret with 6 stacks is empowered to consume all stacks to deal 100",
              post: "bonus physical damage.",
              children: [
                {
                  values: 35,
                  valuesIsPercent: true,
                  user: "player",
                  units: "maximum_hp",
                  pre: "+ 35% of your maximum health",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/demolish/demolish.png",
        },
        {
          description:
            "<i>Demolish</i> cannot be triggered against the same turret again by anyone for 3.<small>5</small> seconds. Stacks expire by one every 1 second if you move out of range.",
          leveling: [
            {
              name: "Demolish cannot be triggered against the same turret again by anyone for 3.5 seconds:",
              raw: "Demolish cannot be triggered against the same turret again by anyone for 3.5 seconds",
              damagetype: "None",
              effectType: "Gain",
              values: 3,
              user: "player",
              units:
                "total_cannot be triggered against the same turret again by anyone for 3.5 seconds",
              pre: "Demolish cannot be triggered against the same turret again by anyone for 3.5 seconds",
            },
            {
              name: "Stacks expire by one every 1 second if you move out of range.:",
              raw: "Stacks expire by one every 1 second if you move out of range.",
              damagetype: "None",
              effectType: "Unique",
              values: 1,
              user: "player",
              units:
                "total_expire by one every 1 second if you move out of range.",
              pre: "Stacks expire by one every 1 second if you move out of range.",
            },
          ],
          locked: true,
        },
        {
          description:
            "<i>Demolish</i> activates after 45 seconds of game time.",
          leveling: [
            {
              name: "Demolish activates after 45 seconds of game time.:",
              raw: "Demolish activates after 45 seconds of game time.",
              damagetype: "None",
              effectType: "Unique",
              values: 4,
              user: "player",
              units: "total_activates after 45 seconds of game time.",
              pre: "Demolish activates after 45 seconds of game time.",
            },
          ],
          locked: true,
        },
      ],
    },
    8451: {
      id: 8451,
      name: "Overgrowth",
      majorChangePatchVersion: "8.23",
      tooltip:
        "Absorb life essence from monsters or enemy minions that die near you, permanently gaining 3 maximum health for every 8.<br><br>When you've absorbed 120 monsters or enemy minions, gain an additional 3.5% maximum health.<br><hr><br>Total Max Health Earned: <scaleHealth>@f1@</scaleHealth><br>Enemies Absorbed: <passiveText>@f2@</passiveText>",
      shortDesc:
        "Gain permanent max health when minions or monsters die near you.",
      longDesc:
        "Absorb life essence from monsters or enemy minions that die near you, permanently gaining 3 maximum health for every 8.<br><br>When you've absorbed 120 monsters or enemy minions, gain an additional 3.5% maximum health.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/Overgrowth/Overgrowth.png",
      endOfGameStatDescs: ["Total Bonus Max Health: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kDurability: 10,
      },
      released: "2018",
      path: "Resolve",
      slot: 3,
      range: 1400,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Every 8 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> or enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> that die near you permanently generates a <a href="/wiki/Stack" title="Stack">stack</a>. Each stack grants <span style="color: #1F995C; white-space:normal">3 <b>bonus</b> health</span>. This effect can stack indefinitely.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Every 8  monsters or enemy  minions that die near you permanently generates a stack",
              damagetype: "None",
              effectType: "Unique",
              values: 8,
              user: "player",
              units: "total_feast_stack",
              pre: "Every 8  monsters or enemy  minions that die near you permanently generates a stack",
            },
            {
              name: "Each stack grants 3 bonus health:",
              raw: "Each stack grants 3 bonus health",
              damagetype: "None",
              effectType: "Heal",
              values: 3,
              user: "player",
              units: "bonus_hp",
              pre: "Each stack grants 3 bonus health",
            },
            {
              name: "This effect can stack indefinitely.:",
              raw: "This effect can stack indefinitely.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_feast_stack",
              pre: "This effect can stack indefinitely.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/overgrowth/overgrowth.png",
        },
        {
          description:
            'After gaining 15 stacks (120 monsters or minions), you gain additional <span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span> equal to <span style="color: #1F995C; white-space:normal">3.<small>5</small>% <b>maximum</b> health</span>.',
          leveling: [
            {
              name: "After gaining 15 stacks (120 monsters or minions), you gain additional bonus health equal to 3.5% maximum health.:",
              raw: "After gaining 15 stacks (120 monsters or minions), you gain additional bonus health equal to 3.5% maximum health.",
              damagetype: "None",
              effectType: "Heal",
              values: 1,
              user: "player",
              units: "bonus_ad",
              pre: "After gaining 15 stacks",
              post: ", you gain additional bonus health equal to 3.5% maximum health.",
              children: [
                {
                  values: 120,
                  user: "player",
                  units: "total_monsters or minions",
                  pre: "120 monsters or minions",
                },
              ],
            },
          ],
          locked: true,
        },
      ],
    },
    8453: {
      id: 8453,
      name: "Revitalize",
      majorChangePatchVersion: "",
      tooltip:
        "Gain 5% Heal and Shield Power.<br><br>Heals and shields you cast or receive are 10% stronger on targets below 40% health.<br><hr><br><scaleAD>Bonus healing</scaleAD>: @f1@<br><scaleAD>Bonus shielding</scaleAD>: @f2@<br><scaleAD>Total Heal and Shield power</scaleAD>: @f4@%",
      shortDesc:
        "Gain 5% Heal and Shield Power.<br><br>Heals and shields you cast or receive are 10% stronger on targets below 40% health.",
      longDesc:
        "Gain 5% Heal and Shield Power.<br><br>Heals and shields you cast or receive are 10% stronger on targets below 40% health.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/Revitalize/Revitalize.png",
      endOfGameStatDescs: [
        "Bonus Healing: @eogvar1@",
        "Bonus Shielding: @eogvar2@",
      ],
      recommendationDescriptorAttributes: {
        kHealing: 10,
      },
      released: "2018",
      path: "Resolve",
      slot: 3,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Grants <span style="white-space:nowrap"><a href="/wiki/Heal_and_shield_power" title="Heal and shield power"><img alt="Heal and shield power icon.png" src="/wiki/images/Heal_and_shield_power_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;5% <a href="/wiki/Heal_and_shield_power" title="Heal and shield power">Heal and shield power</a></span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Grants  5% Heal and shield power.",
              damagetype: "None",
              effectType: "Heal",
              values: 5,
              valuesIsPercent: true,
              user: "player",
              units: "total_heal and shield power. 5",
              pre: "Grants  5% Heal and shield power.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/revitalize/revitalize.png",
        },
        {
          description:
            'Outgoing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> and outgoing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielding</a></span> are increased by 10% on targets <span style="color: #1F995C; white-space:normal">below 40% of their <b>maximum</b> health</span>.',
          leveling: [
            {
              name: "Outgoing  healing and outgoing  shielding are increased by 10% on targets below 40% of their maximum health.:",
              raw: "Outgoing  healing and outgoing  shielding are increased by 10% on targets below 40% of their maximum health.",
              damagetype: "None",
              effectType: "Heal",
              values: 1,
              valuesIsPercent: true,
              user: "target",
              units:
                "total_on targets below 40 healing and outgoing  shielding are increased by 10",
              pre: "Outgoing  healing and outgoing  shielding are increased by 10% on targets below 40% of their maximum health.",
            },
          ],
          locked: true,
        },
        {
          description:
            'Incoming healing, incoming shielding, self-healing and self-shielding are increased by 10% while <b>you</b> are <span style="color: #1F995C; white-space:normal">below 40% of your <b>maximum</b> health</span>.',
          leveling: [
            {
              name: "Incoming healing, incoming shielding, self-healing and self-shielding are increased by 10% while you are below 40% of your maximum health.:",
              raw: "Incoming healing, incoming shielding, self-healing and self-shielding are increased by 10% while you are below 40% of your maximum health.",
              damagetype: "None",
              effectType: "Heal",
              values: 1,
              valuesIsPercent: true,
              user: "player",
              units:
                "total_while you are below 40healing, incoming shielding, self-healing and self-shielding are increased by 10",
              pre: "Incoming healing, incoming shielding, self-healing and self-shielding are increased by 10% while you are below 40% of your maximum health.",
            },
          ],
          locked: true,
        },
      ],
    },
    8463: {
      id: 8463,
      name: "Font of Life",
      majorChangePatchVersion: "",
      tooltip:
        "Impairing the movement of an enemy champion marks them for 4s.<br><br>Ally champions who attack marked enemies heal for 5 + 0.9% of your max health over 2s. ",
      shortDesc:
        "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_ImpairMov'>Impairing</lol-uikit-tooltipped-keyword> the movement of an enemy champion marks them. Your allies heal when attacking champions you've marked. ",
      longDesc:
        "Impairing the movement of an enemy champion marks them for 4s.<br><br>Ally champions who attack marked enemies heal for 5 + 0.9% of your max health over 2s. ",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/FontOfLife/FontOfLife.png",
      endOfGameStatDescs: ["Total Ally Healing: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kHealing: 5,
        kUtility: 5,
      },
      released: "2018",
      path: "Resolve",
      slot: 1,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">Slowing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> marks them for 4 seconds.',
          leveling: [
            {
              name: "Name 01:",
              raw: "  Slowing or  immobilizing an enemy  champion marks them for 4 seconds.",
              damagetype: "None",
              effectType: "Unique",
              values: 4,
              user: "player",
              units: "total_kindred_mark",
              pre: "Slowing or  immobilizing an enemy  champion marks them for 4 seconds.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/fontoflife/fontoflife.png",
        },
        {
          description:
            'Allied champions <i>(excluding you)</i> that use a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against marked enemies are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span> for 5 <span style="color: #1F995C; white-space:normal">(+&nbsp;0.<small>9</small>% of your <b>maximum</b> health)</span> over 1.<small>75</small> seconds.',
          leveling: [
            {
              name: "Allied champions (excluding you) that use a basic attack against marked enemies are  healed for 5 (+ 0.9% of your maximum health) over 1.75 seconds.:",
              raw: "Allied champions (excluding you) that use a basic attack against marked enemies are  healed for 5 (+ 0.9% of your maximum health) over 1.75 seconds.",
              damagetype: "None",
              effectType: "Heal",
              values: 0,
              user: "player",
              units: "total_ad",
              pre: "Allied champions",
              post: "that use a basic attack against marked enemies are  healed for 5",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_excluding you",
                  pre: "excluding you",
                },
                {
                  values: 0.9,
                  valuesIsPercent: true,
                  user: "player",
                  units: "maximum_hp",
                  pre: "+ 0.9% of your maximum health",
                },
              ],
            },
          ],
          locked: true,
        },
      ],
    },
    8465: {
      id: 8465,
      name: "Guardian",
      majorChangePatchVersion: "",
      tooltip:
        "<i>Guard</i> allies within 350 units of you, and allies you target with spells for 2.5s. While <i>Guarding</i>, if you or the ally take more than a small amount of damage over the duration of the <i>Guard</i>, both of you gain a shield for 1.5s.<br><hr><br>Cooldown: <scaleLevel>@f5@</scaleLevel> seconds<br>Current shield strength: <scaleLevel>@f2@</scaleLevel> <scaleAP>(+@f3@)</scaleAP> <scaleHealth>(+@f4@)</scaleHealth>.",
      shortDesc:
        "Guard allies you cast spells on and those that are very nearby. If you or a guarded ally would take damage based on level, you're both granted a shield.",
      longDesc:
        "<i>Guard</i> allies within 350 units of you, and allies you target with spells for 2.5s. While <i>Guarding</i>, if you or the ally take more than a small amount of damage over the duration of the <i>Guard</i>, both of you gain a shield for 1.5s.<br><br>Cooldown: <scaleLevel>90 - 40</scaleLevel> seconds<br>Shield: <scaleLevel>45 - 120</scaleLevel> + <scaleAP>12.5%</scaleAP> of your ability power + <scalehealth>8%</scalehealth> of your bonus health<br>Proc Threshold: <scaleLevel>90 - 250</scaleLevel> postmitigation damage",
      recommendationDescriptor: "Shield Allies",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/Guardian/Guardian.png",
      endOfGameStatDescs: ["Total Shield Strength: @eogvar1@"],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Resolve",
      slot: "Keystone",
      cooldown:
        '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="90;" data-finish="40;" data-bot_values="90;87.06;84.12;81.18;78.24;75.29;72.35;69.41;66.47;63.53;60.59;57.65;54.71;51.76;48.82;45.88;42.94;40" data-top_values="">90 − 40 (based on level)</span>',
      range:
        '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Targeted Guard">Global</span>',
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> While within 350 units of an allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, you raise your <i>Guard</i>. Allied champions you affect with <a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">unit-targeted</a> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> are also <i>Guarded</i> for 3 seconds, regardless of distance.',
          leveling: [
            {
              name: "Name 01:",
              raw: " While within 350 units of an allied  champion, you raise your Guard",
              damagetype: "None",
              effectType: "Unique",
              values: 3,
              user: "player",
              units:
                "total_within 350 units of an allied  champion, you raise your guard",
              pre: "While within 350 units of an allied  champion, you raise your Guard",
            },
            {
              name: "Allied champions you affect with unit-targeted abilities are also Guarded for 3 seconds, regardless of distance.:",
              raw: "Allied champions you affect with unit-targeted abilities are also Guarded for 3 seconds, regardless of distance.",
              damagetype: "None",
              effectType: "Unique",
              values: 3,
              user: "target",
              units:
                "total_champions you affect with unit-targeted abilities are also guarded for 3 seconds, regardless of distance.",
              pre: "Allied champions you affect with unit-targeted abilities are also Guarded for 3 seconds, regardless of distance.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/guardian/guardian.png",
        },
        {
          description:
            'If you or a <i>Guarded</i> ally would take <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="90;" data-finish="250;" data-bot_values="90;99.41;108.82;118.24;127.65;137.06;146.47;155.88;165.29;174.71;184.12;193.53;202.94;212.35;221.76;231.18;240.59;250" data-top_values="">90 − 250 (based on level)</span> damage within 2.<small>5</small> seconds or lethal damage from an enemy champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>, you both gain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="45;" data-finish="120;" data-bot_values="45;49.41;53.82;58.24;62.65;67.06;71.47;75.88;80.29;84.71;89.12;93.53;97.94;102.35;106.76;111.18;115.59;120" data-top_values="">45 − 120 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;12.<small>5</small>% of Guardian\'s AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;8% of Guardian\'s <b>bonus</b> health)</span> for 2 seconds.',
          leveling: [
            {
              name: "If you or a Guarded ally would take 90 − 250 (based on level) damage within 2.5 seconds or lethal damage from an enemy champion,  monster or  turret, you both gain a  shield for 45 − 120 (based on level) (+ 12.5% of Guardian's AP) (+ 8% of Guardian's bonus health) for 2 seconds.:",
              raw: "If you or a Guarded ally would take 90 − 250 (based on level) damage within 2.5 seconds or lethal damage from an enemy champion,  monster or  turret, you both gain a  shield for 45 − 120 (based on level) (+ 12.5% of Guardian's AP) (+ 8% of Guardian's bonus health) for 2 seconds.",
              damagetype: "None",
              effectType: "Damage",
              values: [9, 250],
              user: "player",
              units:
                "total_within 2.5 seconds or lethal damage from an enemy champion,  monster or  turret, you both gain a  shield for 45",
              pre: "If you or a Guarded ally would take 90 − 250",
              post: "damage within 2.5 seconds or lethal damage from an enemy champion,  monster or  turret, you both gain a  shield for 45 − 120",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 12.5,
                  valuesIsPercent: true,
                  user: "player",
                  units: "total_ap",
                  pre: "+ 12.5% of Guardian's AP",
                },
                {
                  values: 8,
                  valuesIsPercent: true,
                  user: "player",
                  units: "bonus_hp",
                  pre: "+ 8% of Guardian's bonus health",
                },
              ],
            },
          ],
          locked: true,
        },
        {
          description:
            '<i>Guardian</i> only goes on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;cooldown</span> when the shield is triggered.',
          leveling: [
            {
              name: "Guardian only goes on  cooldown when the shield is triggered.:",
              raw: "Guardian only goes on  cooldown when the shield is triggered.",
              damagetype: "None",
              effectType: "Shield",
              values: 0,
              user: "player",
              units:
                "total_guardian only goes on  cooldown when the shield is triggered.",
              pre: "Guardian only goes on  cooldown when the shield is triggered.",
            },
          ],
          locked: true,
        },
      ],
    },
    8472: {
      id: 8472,
      name: "Chrysalis",
      majorChangePatchVersion: "8.6",
      tooltip:
        "Start the game with 40 bonus health. When you get 4 takedowns, convert that health for an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 6 Attack Damage or 10 Ability Power.<br><hr><br>Takedowns: @f1@/@f2@<br>Health Given: @f3@<br>Bonus <scaleAD>Attack Damage</scaleAD> Given: @f4@",
      shortDesc:
        "Start the game with 40 bonus health. When you get 4 takedowns, convert that health for an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 6 Attack Damage or 10 Ability Power.",
      longDesc:
        "Start the game with 40 bonus health. When you get 4 takedowns, convert that health for an <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword> bonus of 6 Attack Damage or 10 Ability Power.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/Chrysalis/Chrysalis.png",
      endOfGameStatDescs: [],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Resolve",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain <span style="color: #1F995C; white-space:normal">50 <b>bonus</b> health</span>. Upon scoring 4 champions <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedowns</a></span>, and if not in combat with champions, convert the <span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span> into <span style="color:orange; white-space:normal">9 <b>bonus</b> Attack Damage</span> or <span style="color: #7A6DFF; white-space:normal">15 Ability Power</span> (<a href="/wiki/Adaptive_force" title="Adaptive force">Adaptive</a>).',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain 50 bonus health",
              damagetype: "None",
              effectType: "Heal",
              values: 5,
              user: "player",
              units: "bonus_hp",
              pre: "Gain 50 bonus health",
            },
            {
              name: "Upon scoring 4 champions  takedowns, and if not in combat with champions, convert the bonus health into 9 bonus Attack Damage or 15 Ability Power (Adaptive).:",
              raw: "Upon scoring 4 champions  takedowns, and if not in combat with champions, convert the bonus health into 9 bonus Attack Damage or 15 Ability Power (Adaptive).",
              damagetype: "None",
              effectType: "Damage",
              values: 4,
              user: "player",
              units: "total_.",
              pre: "Upon scoring 4 champions  takedowns, and if not in combat with champions, convert the bonus health into 9 bonus Attack Damage or 15 Ability Power",
              post: ".",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "total_ap",
                  pre: "Adaptive",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/chrysalis/chrysalis.png",
        },
        {
          description:
            '<span class="template_sbc"><b>Adaptive:</b></span> Grants bonuses based on which stat you already have the most bonuses for. <i>Defaults to the first listed.</i>',
          leveling: [
            {
              name: "Name 01:",
              raw: " Grants bonuses based on which stat you already have the most bonuses for",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "bonus_ad",
              pre: "Grants bonuses based on which stat you already have the most bonuses for",
            },
            {
              name: "Defaults to the first listed.:",
              raw: "Defaults to the first listed.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_defaults to the first listed.",
              pre: "Defaults to the first listed.",
            },
          ],
          locked: true,
        },
      ],
    },
    8473: {
      id: 8473,
      name: "Bone Plating",
      majorChangePatchVersion: "9.9",
      tooltip:
        "After taking damage from an enemy champion, the next 3 spells or attacks you receive from them deal <scaleLevel>@f2@</scaleLevel> less damage.<br><br>Duration: 1.5s<br>Cooldown: 55s<br><hr><br>Total Damage Reduced: <scaleLevel>@f1@</scaleLevel>",
      shortDesc:
        "After taking damage from an enemy champion, the next 3 spells or attacks you receive from them deal 30-60 less damage.<br><br><br>Duration: 1.5s<br>Cooldown: 55s",
      longDesc:
        "After taking damage from an enemy champion, the next 3 spells or attacks you receive from them deal 30-60 less damage.<br><br><br>Duration: 1.5s<br>Cooldown: 55s",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Resolve/BonePlating/BonePlating.png",
      endOfGameStatDescs: ["Total Damage Blocked: @eogvar1@"],
      recommendationDescriptorAttributes: {
        kDurability: 10,
      },
      released: "2018",
      path: "Resolve",
      slot: 2,
      cooldown: 55,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> After taking damage from an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, for 1.<small>5</small> seconds, the next 3 spells or attacks you receive from the same enemy champion deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;" data-finish="60;" data-bot_values="30;31.76;33.53;35.29;37.06;38.82;40.59;42.35;44.12;45.88;47.65;49.41;51.18;52.94;54.71;56.47;58.24;60" data-top_values="">30 − 60 (based on level)</span> less damage (including <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">true damage</a></span>).',
          leveling: [
            {
              name: "Name 01:",
              raw: " After taking damage from an enemy  champion, for 1.5 seconds, the next 3 spells or attacks you receive from the same enemy champion deal 30 − 60 (based on level) less damage (including  true damage).",
              damagetype: "True",
              effectType: "Damage",
              values: [1, 60],
              user: "player",
              units: "total_less damage",
              pre: "After taking damage from an enemy  champion, for 1.5 seconds, the next 3 spells or attacks you receive from the same enemy champion deal 30 − 60",
              post: "less damage",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 0,
                  user: "player",
                  units: "total_including  true damage",
                  pre: "including  true damage",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/boneplating/boneplating.png",
        },
      ],
    },
    9101: {
      id: 9101,
      name: "Overheal",
      majorChangePatchVersion: "",
      tooltip:
        "Excess healing on you becomes a shield, for up to <scaleHealth>@f7@ Max Health</scaleHealth>.<br><br>Shield is built up from <scaleLevel>@f6@%</scaleLevel> of excess healing from yourself or any ally.<br><hr><br><b>Total damage blocked: <scaleAD>@f1@</scaleAD></b>",
      shortDesc: "Excess healing on you becomes a shield.",
      longDesc:
        "Excess healing on you becomes a shield, for up to 10 <scaleHealth>(+9% Max Health)</scaleHealth>.<br><br>Shield is built up from 20 to 100% of excess healing from yourself or any ally.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Precision/Overheal.png",
      endOfGameStatDescs: ["Total Shielding: @eogvar2@"],
      recommendationDescriptorAttributes: {
        kDurability: 7,
        kHealing: 3,
      },
      released: "2018",
      path: "Precision",
      slot: 1,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Converts <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="100;" data-bot_values="20;24.71;29.41;34.12;38.82;43.53;48.24;52.94;57.65;62.35;67.06;71.76;76.47;81.18;85.88;90.59;95.29;100" data-top_values="" data-bot_key="%">20% − 100% (based on level)</span> of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> in excess of your <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span> into a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for an amount of up to 10 <span style="color: #1F995C; white-space:normal">(+&nbsp;9% of <b>maximum</b> health)</span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Converts 20% − 100% (based on level) of the  healing in excess of your maximum health into a  shield for an amount of up to 10 (+ 9% of maximum health).",
              damagetype: "None",
              effectType: "Heal",
              values: 2,
              valuesIsPercent: true,
              user: "player",
              units: "maximum_hp",
              pre: "Converts 20% − 100%",
              post: "of the  healing in excess of your maximum health into a  shield for an amount of up to 10",
              children: [
                {
                  values: 0,
                  user: "player",
                  units: "base_based on level",
                  pre: "based on level",
                },
                {
                  values: 9,
                  valuesIsPercent: true,
                  user: "player",
                  units: "maximum_hp",
                  pre: "+ 9% of maximum health",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/overheal.png",
        },
        {
          description:
            "After 6 seconds, the shield decays by 1% of its maximum value every 0.<small>25</small> seconds. Receiving healing or dealing or taking damage will refresh the shield duration to 6 seconds.",
          leveling: [
            {
              name: "After 6 seconds, the shield decays by 1% of its maximum value every 0.25 seconds:",
              raw: "After 6 seconds, the shield decays by 1% of its maximum value every 0.25 seconds",
              damagetype: "None",
              effectType: "Shield",
              values: 6,
              valuesIsPercent: true,
              user: "player",
              units:
                "total_of its maximum value every 0.25 seconds6 seconds, the shield decays by 1",
              pre: "After 6 seconds, the shield decays by 1% of its maximum value every 0.25 seconds",
            },
            {
              name: "Receiving healing or dealing or taking damage will refresh the shield duration to 6 seconds.:",
              raw: "Receiving healing or dealing or taking damage will refresh the shield duration to 6 seconds.",
              damagetype: "None",
              effectType: "Damage",
              values: 6,
              user: "player",
              units:
                "total_healing or dealing or taking damage will refresh the shield duration to 6 seconds.",
              pre: "Receiving healing or dealing or taking damage will refresh the shield duration to 6 seconds.",
            },
          ],
          locked: true,
        },
      ],
    },
    9103: {
      id: 9103,
      name: "Legend: Bloodline",
      majorChangePatchVersion: "",
      tooltip:
        "Gain 0.4% Life Steal for every <i>Legend</i> stack (<statGood>max 15 stacks</statGood>). At maximum <i>Legend</i> stacks, gain 100 max health.<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.<br><hr><br>Total Life Steal Granted: <scaleAD>@f1*100@%</scaleAD> (<statGood>@f3@ of 15</statGood>)<br>Progress Towards Next Stack: @f2@%<br>",
      shortDesc:
        "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemies grant permanent<b> Life Steal</b>, up to a cap. Once the cap is reached, increase your max health. Weaker earlier but stronger later game than other Legend Runes.",
      longDesc:
        "Gain 0.4% Life Steal for every <i>Legend</i> stack (<statGood>max 15 stacks</statGood>). At maximum <i>Legend</i> stacks, gain 100 max health.<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png",
      endOfGameStatDescs: ["Time Completed: @eogvar1@:@eogvar2@"],
      recommendationDescriptorAttributes: {
        kHealing: 10,
      },
      released: "2018",
      path: "Precision",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain 0.<small>4</small>% <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> per <i>Legend</i> <a href="/wiki/Stack" title="Stack">stack</a>, up to 6% at maximum stacks, at which you also gain <span style="color: #1F995C; white-space:normal">100 <b>bonus</b> health</span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain 0.4%  life steal per Legend stack, up to 6% at maximum stacks, at which you also gain 100 bonus health.",
              damagetype: "None",
              effectType: "Heal",
              values: 0,
              valuesIsPercent: true,
              user: "player",
              units: "legendStacks",
              pre: "Gain 0.4%  life steal per Legend stack, up to 6% at maximum stacks, at which you also gain 100 bonus health.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/legendbloodline/legendbloodline.png",
        },
        {
          description:
            '<span class="template_sbc"><b>Legend:</b></span> Gain <i>Legend</i> stacks for every 100 points earned, up to 15:\n<ul><li>100 points for champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedowns</a></span></li>\n<li>100 points for epic monster <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedowns</a></span></li>\n<li>25 points for large monster kills</li>\n<li>4 points for minion kills</li></ul>',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain Legend stacks for every 100 points earned, up to 15:\n100 points for champion  takedowns\n100 points for epic monster  takedowns\n25 points for large monster kills\n4 points for minion kills",
              damagetype: "None",
              effectType: "Gain",
              values: 1,
              user: "player",
              units: "legendStacks",
              pre: "Gain Legend stacks for every 100 points earned, up to 15:\n100 points for champion  takedowns\n100 points for epic monster  takedowns\n25 points for large monster kills\n4 points for minion kills",
            },
          ],
          locked: true,
        },
      ],
    },
    9104: {
      id: 9104,
      name: "Legend: Alacrity",
      majorChangePatchVersion: "",
      tooltip:
        "Gain 3% attack speed plus an additional 1.5% for every <i>Legend</i> stack (<statGood>max 10 stacks</statGood>).<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.<br><hr><br>Total Attack Speed added: <scaleAD>@f1*100@%</scaleAD> (<statGood>@f3@ of 10</statGood>)<br>Progress Towards Next Stack: @f2@%",
      shortDesc:
        "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemies grant permanent <b>Attack Speed</b>. ",
      longDesc:
        "Gain 3% attack speed plus an additional 1.5% for every <i>Legend</i> stack (<statGood>max 10 stacks</statGood>).<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png",
      endOfGameStatDescs: ["Time Completed: @eogvar1@:@eogvar2@"],
      recommendationDescriptorAttributes: {
        kDamagePerSecond: 10,
      },
      released: "2018",
      path: "Precision",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">3%</span> (+ <span style="color:orangered; white-space:normal">1.<small>5</small>%</span> per <i>Legend</i> <a href="/wiki/Stack" title="Stack">stack</a>) <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, up to <span style="color:orangered; white-space:normal">18%</span> at maximum stacks.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain  3% (+ 1.5% per Legend stack) bonus attack speed, up to 18% at maximum stacks.",
              damagetype: "None",
              effectType: "Gain",
              values: 3,
              valuesIsPercent: true,
              user: "player",
              units: "total_ad",
              pre: "Gain  3%",
              post: "bonus attack speed, up to 18% at maximum stacks.",
              children: [
                {
                  values: 1.5,
                  valuesIsPercent: true,
                  user: "player",
                  units: "legendStacks",
                  pre: "+ 1.5% per Legend stack",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/legendalacrity/legendalacrity.png",
        },
        {
          description:
            '<span class="template_sbc"><b>Legend:</b></span> Gain <i>Legend</i> stacks for every 100 points earned, up to 10:\n<ul><li>100 points for champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedowns</a></span></li>\n<li>100 points for epic monster <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedowns</a></span></li>\n<li>25 points for large monster kills</li>\n<li>4 points for minion kills</li></ul>',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain Legend stacks for every 100 points earned, up to 10:\n100 points for champion  takedowns\n100 points for epic monster  takedowns\n25 points for large monster kills\n4 points for minion kills",
              damagetype: "None",
              effectType: "Gain",
              values: 1,
              user: "player",
              units: "legendStacks",
              pre: "Gain Legend stacks for every 100 points earned, up to 10:\n100 points for champion  takedowns\n100 points for epic monster  takedowns\n25 points for large monster kills\n4 points for minion kills",
            },
          ],
          locked: true,
        },
      ],
    },
    9105: {
      id: 9105,
      name: "Legend: Tenacity",
      majorChangePatchVersion: "",
      tooltip:
        "Gain 5% tenacity plus an additional 1.5% for every <i>Legend</i> stack (<statGood>max 10 stacks</statGood>).<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.<br><hr><br>Total tenacity granted: <scaleAD>@f1*100@%</scaleAD> (<statGood>@f3@ of 10</statGood>)<br>Progress Towards Next Stack: @f2@%",
      shortDesc:
        "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> on enemies grant permanent <b>Tenacity</b>. ",
      longDesc:
        "Gain 5% tenacity plus an additional 1.5% for every <i>Legend</i> stack (<statGood>max 10 stacks</statGood>).<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png",
      endOfGameStatDescs: ["Time Completed: @eogvar1@:@eogvar2@"],
      recommendationDescriptorAttributes: {
        kDurability: 4,
        kUtility: 6,
      },
      released: "2018",
      path: "Precision",
      slot: 2,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Gain 5% (+ 1.<small>5</small>% per <i>Legend</i> <a href="/wiki/Stack" title="Stack">stack</a>) <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tenacity"><a href="/wiki/Tenacity" title="Tenacity"><img alt="Tenacity icon.png" src="/wiki/images/Tenacity_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Tenacity" title="Tenacity">tenacity</a></span>, up to 20% at maximum stacks.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain 5% (+ 1.5% per Legend stack)  tenacity, up to 20% at maximum stacks.",
              damagetype: "None",
              effectType: "Gain",
              values: 5,
              valuesIsPercent: true,
              user: "player",
              units: "total_feast_stack",
              pre: "Gain 5%",
              post: "tenacity, up to 20% at maximum stacks.",
              children: [
                {
                  values: 1.5,
                  valuesIsPercent: true,
                  user: "player",
                  units: "legendStacks",
                  pre: "+ 1.5% per Legend stack",
                },
              ],
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/legendtenacity/legendtenacity.png",
        },
        {
          description:
            '<span class="template_sbc"><b>Legend:</b></span> Gain <i>Legend</i> stacks for every 100 points earned, up to 10:\n<ul><li>100 points for champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedowns</a></span></li>\n<li>100 points for epic monster <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedowns</a></span></li>\n<li>25 points for large monster kills</li>\n<li>4 points for minion kills</li></ul>',
          leveling: [
            {
              name: "Name 01:",
              raw: " Gain Legend stacks for every 100 points earned, up to 10:\n100 points for champion  takedowns\n100 points for epic monster  takedowns\n25 points for large monster kills\n4 points for minion kills",
              damagetype: "None",
              effectType: "Gain",
              values: 1,
              user: "player",
              units: "legendStacks",
              pre: "Gain Legend stacks for every 100 points earned, up to 10:\n100 points for champion  takedowns\n100 points for epic monster  takedowns\n25 points for large monster kills\n4 points for minion kills",
            },
          ],
          locked: true,
        },
      ],
    },
    9111: {
      id: 9111,
      name: "Triumph",
      majorChangePatchVersion: "",
      tooltip:
        "Takedowns restore 10% of your missing health and grant an additional 20 gold. <br><hr><br>Total health restored: <scaleAD>@f1@</scaleAD><br>Total bonus gold granted: <scaleAD>@f2@</scaleAD>",
      shortDesc:
        "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>Takedowns</lol-uikit-tooltipped-keyword> restore 10% of your missing health and grant an additional 20 gold. ",
      longDesc:
        "Takedowns restore 10% of your missing health and grant an additional 20 gold. <br><br><hr><br><i>'The most dangerous game brings the greatest glory.' <br>—Noxian Reckoner</i>",
      recommendationDescriptor: "",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Precision/Triumph.png",
      endOfGameStatDescs: [
        "Total Health Restored: @eogvar1@",
        "Total bonus gold granted: @eogvar2@",
      ],
      recommendationDescriptorAttributes: {
        kDurability: 2,
        kHealing: 8,
      },
      released: "2018",
      path: "Precision",
      slot: 1,
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> you for <span style="color: #1F995C; white-space:normal">10% of your <b>missing</b> health</span> and grants you an additional <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width=20><a href="/wiki/Gold" title="20 Gold"><img alt="20 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width=20 height=15 class="lazyload"></a></span> <span style="white-space:normal;">20</span></span> after a 1-second delay.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Scoring a  takedown against an enemy champion  heals you for 10% of your missing health and grants you an additional  20 after a 1-second delay.",
              damagetype: "None",
              effectType: "Heal",
              values: 1,
              valuesIsPercent: true,
              user: "player",
              units: "total_ad",
              pre: "Scoring a  takedown against an enemy champion  heals you for 10% of your missing health and grants you an additional  20 after a 1-second delay.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/triumph.png",
        },
      ],
    },
    9923: {
      id: 9923,
      name: "Hail of Blades",
      majorChangePatchVersion: "8.11",
      tooltip:
        "Gain @f3@% Attack Speed when you attack an enemy champion for up to 3 attacks. <br><br>Cooldown: 12s.<br><hr><br>Hail of Blades attacks: @f1@<br>Percentage of Hail attacks landed: @f2@%<br><br><rules>Basic Attack resets increase the attack limit by 1.<br>Allows you to temporarily exceed the attack speed limit.</rules>",
      shortDesc:
        "Gain a large amount of Attack Speed for the first 3 attacks made against enemy champions.",
      longDesc:
        "Gain 110% Attack Speed when you attack an enemy champion for up to 3 attacks.<br><br>No more than 3s can elapse between attacks or this effect will end.<br><br>Cooldown: 12s.<br><br><rules>Attack resets increase the attack limit by 1.<br>Allows you to temporarily exceed the attack speed limit.</rules>",
      recommendationDescriptor: "Flurry of Attacks",
      iconPath:
        "/lol-game-data/assets/v1/perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png",
      endOfGameStatDescs: [
        "Attacks made with extra attack speed: @eogvar1@",
        "Percentage of Hail attacks landed: @eogvar2@%",
      ],
      recommendationDescriptorAttributes: {},
      released: "2018",
      path: "Domination",
      slot: "Keystone",
      cooldown:
        '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after the effect ends.">12</span>',
      subskills: [
        {
          description:
            '<span class="template_sbc"><b>Passive:</b></span> Starting an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">attack windup</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> triggers <i>Hail of Blades</i>, and if the windup completes, you gain 2 stacks of the effect for 3 seconds, with the duration refreshing on basic attacks against enemy champions until all stacks are consumed. Stacks are consumed per basic attack <a href="/wiki/On-attack" class="mw-redirect" title="On-attack">on-attack</a> and the current stack refreshes on-attack whenever your basic attack timer is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width=20 height=20 class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">reset</a></span>.',
          leveling: [
            {
              name: "Name 01:",
              raw: " Starting an attack windup against an enemy  champion triggers Hail of Blades, and if the windup completes, you gain 2 stacks of the effect for 3 seconds, with the duration refreshing on basic attacks against enemy champions until all stacks are consumed",
              damagetype: "None",
              effectType: "Gain",
              values: 2,
              user: "player",
              units: "total_ad",
              pre: "Starting an attack windup against an enemy  champion triggers Hail of Blades, and if the windup completes, you gain 2 stacks of the effect for 3 seconds, with the duration refreshing on basic attacks against enemy champions until all stacks are consumed",
            },
            {
              name: "Stacks are consumed per basic attack on-attack and the current stack refreshes on-attack whenever your basic attack timer is  reset.:",
              raw: "Stacks are consumed per basic attack on-attack and the current stack refreshes on-attack whenever your basic attack timer is  reset.",
              damagetype: "None",
              effectType: "Unique",
              values: 0,
              user: "player",
              units: "total_ad",
              pre: "Stacks are consumed per basic attack on-attack and the current stack refreshes on-attack whenever your basic attack timer is  reset.",
            },
          ],
          locked: true,
          img: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/hailofblades/hailofblades.png",
        },
        {
          description:
            'While <i>Hail of Blades</i> is active, you gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width=15 height=15 class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">110% <b>bonus</b> attack speed</span></span> and your <span style="color:orangered; white-space:normal">attack speed cap</span> is increased. <i>The triggering attack benefits from Hail of Blades.</i>',
          leveling: [
            {
              name: "While Hail of Blades is active, you gain  110% bonus attack speed and your attack speed cap is increased:",
              raw: "While Hail of Blades is active, you gain  110% bonus attack speed and your attack speed cap is increased",
              damagetype: "None",
              effectType: "Gain",
              values: 1,
              valuesIsPercent: true,
              user: "player",
              units: "total_ap",
              pre: "While Hail of Blades is active, you gain  110% bonus attack speed and your attack speed cap is increased",
            },
            {
              name: "The triggering attack benefits from Hail of Blades.:",
              raw: "The triggering attack benefits from Hail of Blades.",
              damagetype: "None",
              effectType: "Gain",
              values: 0,
              user: "player",
              units: "total_ad",
              pre: "The triggering attack benefits from Hail of Blades.",
            },
          ],
          locked: true,
        },
      ],
    },
  },
} as const;
