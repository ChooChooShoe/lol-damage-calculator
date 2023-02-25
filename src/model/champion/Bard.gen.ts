import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Bard';

export default {
  "Traveler's Call": {
    name: "Traveler's Call",
    display_name: "Traveler's Call",
    champion: 'Bard',
    skill: 'I',
    image: {
      full: 'Bard_Passive.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate - Ancient Chimes:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bard" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bard/LoL" title="Bard\'s"><img alt="Bard\'s" src="/wiki/images/Bard_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bard/LoL" title="Bard/LoL">Bard\'s</a></span></span> presence causes magical <img alt="Traveler\'s Call Minimap.png" src="/wiki/images/Traveler%27s_Call_Minimap.png" decoding="async" loading="lazy" width="16" height="16" class="lazyload"> <span style="color: #56C456; white-space:normal">chimes</span> to appear across the map. Collecting a <span style="color: #56C456; white-space:normal">chime</span> grants him <span style="white-space:nowrap"><a href="/wiki/Experience_(champion)" title="Experience (champion)"><img alt="Experience icon.png" src="/wiki/images/Experience_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #883FD1; white-space:normal">experience</span></span>, <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>, and burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span>.',
      '<span class="template_sbc"><b>Meeps:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bard" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bard/LoL" title="Bard"><img alt="Bard" src="/wiki/images/Bard_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bard/LoL" title="Bard/LoL">Bard</a></span></span> generates <span style="color: #E34D4C; white-space:normal">meeps</span> that are each consumed in his basic attacks, dealing <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. Collecting <span style="color: #56C456; white-space:normal">chimes</span> causes these <span style="color: #E34D4C; white-space:normal">meeps</span> to ready more often and gain new effects.',
      '<p class="mw-empty-elt">\n</p><ul><li>At <span style="color: #56C456; white-space:normal">5 chimes</span>, <span style="color: #E34D4C; white-space:normal">Meeps</span> apply a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> to enemies.</li>\n<li>At <span style="color: #56C456; white-space:normal">15 chimes</span>, <span style="color: #E34D4C; white-space:normal">Meeps</span> deal damage to nearby enemies and in a cone behind the target.</li>\n<li>At <span style="color: #56C456; white-space:normal">35 chimes</span>, the cone\'s radius increases.<p class="mw-empty-elt"></p></li></ul>',
    ],
    description: [
      {
        icon: "/wiki/images/Traveler's_Call.png",
        description:
          "Innate - Ancient Chimes: Bard's presence causes sacred  Chimes to appear at random locations on the map, lingering for up to 10 minutes. Collecting a Chime grants Bard  24% bonus movement speed out of combat for 7 seconds, stacking up to 5 times, with every other Chime collected beyond the first granting an additional 14% bonus movement speed, up to a total of 80% bonus movement speed,  20 + (1 per minute after 5 minutes) experience, and  12% maximum mana. Bard empowers his Meeps each time he collects 5 Chimes.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Ancient Chimes:</b></span> <b>Bard\'s</b> presence causes sacred <img alt="Traveler\'s Call Minimap.png" src="/wiki/images/Traveler%27s_Call_Minimap.png" decoding="async" loading="lazy" width="16" height="16" class="lazyload"> <span style="color: #56C456; white-space:normal">Chimes</span> to appear at random locations on the map, lingering for up to 10 minutes. Collecting a <span style="color: #56C456; white-space:normal">Chime</span> grants <b>Bard</b> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">24% <b>bonus</b> movement speed</span></span> <a href="/wiki/Combat_status" title="Combat status">out of combat</a> for 7 seconds, stacking up to 5 times, with every other <span style="color: #56C456; white-space:normal">Chime</span> collected beyond the first granting an additional <span style="color: #F5EE99; white-space:normal">14% <b>bonus</b> movement speed</span>, up to a total of <span style="color: #F5EE99; white-space:normal">80% <b>bonus</b> movement speed</span>, <span style="white-space:nowrap"><a href="/wiki/Experience_(champion)" title="Experience (champion)"><img alt="Experience icon.png" src="/wiki/images/Experience_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #883FD1; white-space:normal">20 +&nbsp;(<i>1 per minute after 5 minutes</i>) experience</span></span>, and <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">12% <b>maximum</b> mana</span></span>. <b>Bard</b> empowers his <span style="color: #E34D4C; white-space:normal">Meeps</span> each time he collects <span style="color: #56C456; white-space:normal">5 Chimes</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate - Ancient Chimes:',
            raw: "Bard's presence causes sacred  Chimes to appear at random locations on the map, lingering for up to 10 minutes",
            damagetype: 'None',
            values: 1,
            units: 'total_ap',
            unitsText:
              'presence causes sacred  Chimes to appear at random locations on the map, lingering for up to 10 minutes',
            pre: "Bard's presence causes sacred  Chimes to appear at random locations on the map, lingering for up to 10 minutes",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'Collecting a Chime grants Bard  24% bonus movement speed out of combat for 7 seconds, stacking up to 5 times, with every other Chime collected beyond the first granting an additional 14% bonus movement speed, up to a total of 80% bonus movement speed,  20 + (1 per minute after 5 minutes) experience, and  12% maximum mana',
            min: 0,
            max: 5,
            description:
              'Collecting a Chime grants Bard  24% bonus movement speed out of combat for 7 seconds, stacking up to 5 times, with every other Chime collected beyond the first granting an additional 14% bonus movement speed, up to a total of 80% bonus movement speed,  20 + (1 per minute after 5 minutes) experience, and  12% maximum mana',
            values: 2,
            valuesIsPercent: true,
            units: 'total_mana',
            unitsText: 'experience, and  12% maximum mana',
            pre: 'Collecting a Chime grants Bard  24% bonus movement speed out of combat for 7 seconds, stacking up to 5 times, with every other Chime collected beyond the first granting an additional 14% bonus movement speed, up to a total of 80% bonus movement speed,  20 +',
            post: 'experience, and  12% maximum mana',
            children: [
              {
                values: 1,
                user: 'none',
                units: '',
                unitsText: 'per minute after 5 minutes',
                pre: '1 per minute after 5 minutes',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Bard empowers his Meeps each time he collects 5 Chimes.',
            values: 5,
            user: 'none',
            units: '',
            unitsText: 'empowers his Meeps each time he collects 5 Chimes.',
            pre: 'Bard empowers his Meeps each time he collects 5 Chimes.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/Traveler's_Call_2.png",
        description:
          "Innate - Meeps: Bard's presence attracts Meeps, which are small spirits that come to his side. While he has Meeps, his basic attacks are empowered to each consume a Meep on-attack to deal 35 (+ 14 per 5 Chimes collected) (+ 30% AP) bonus magic damage.\nAt 5 Chimes, Meeps  slow damaged enemies by 25% − 75% (based on number of Chimes) for 1 second.\nAt 15 Chimes, Meeps deal the damage to enemies within 150 units of the primary target as well as those in a cone behind them.\nAt 35 Chimes, the cone's radius increases.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Meeps:</b></span> <b>Bard\'s</b> presence attracts <span style="color: #E34D4C; white-space:normal">Meeps</span>, which are small spirits that come to his side. While he has <span style="color: #E34D4C; white-space:normal">Meeps</span>, his basic attacks are empowered to each consume a <span style="color: #E34D4C; white-space:normal">Meep</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> to deal <span style="color: #00B0F0; white-space:normal">35</span> (<i>+ <span style="color: #00B0F0; white-space:normal">14</span> per 5 <span style="color: #56C456; white-space:normal">Chimes</span> collected</i>) <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.\n<ul><li>At <span style="color: #56C456; white-space:normal">5 Chimes</span>, <span style="color: #E34D4C; white-space:normal">Meeps</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> damaged enemies by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="number of Chimes" data-bot_values="25;35;45;55;65;75" data-top_values="5;25;45;60;75;85" data-bot_key="%">25% − 75% (based on number of <i>Chimes</i>)</span> for 1 second.</li>\n<li>At <span style="color: #56C456; white-space:normal">15 Chimes</span>, <span style="color: #E34D4C; white-space:normal">Meeps</span> deal the damage to enemies within 150 units of the primary target as well as those in a cone behind them.</li>\n<li>At <span style="color: #56C456; white-space:normal">35 Chimes</span>, the cone\'s radius increases.</li></ul>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "While he has Meeps, his basic attacks are empowered to each consume a Meep on-attack to deal 35 (+ 14 per 5 Chimes collected) (+ 30% AP) bonus magic damage.\nAt 5 Chimes, Meeps  slow damaged enemies by 25% − 75% (based on number of Chimes) for 1 second.\nAt 15 Chimes, Meeps deal the damage to enemies within 150 units of the primary target as well as those in a cone behind them.\nAt 35 Chimes, the cone's radius increases.",
            damagetype: 'Magic',
            values: 3,
            basedOn: 'number of Chimes',
            user: 'none',
            units: '',
            unitsText:
              'bonus magic damage.\nAt 5 Chimes, Meeps  slow damaged enemies by 25% − 75%',
            pre: 'While he has Meeps, his basic attacks are empowered to each consume a Meep on-attack to deal 35',
            post: 'bonus magic damage.\nAt 5 Chimes, Meeps  slow damaged enemies by 25% − 75%',
            children: [
              {
                values: 14,
                user: 'none',
                units: '',
                unitsText: 'per 5 Chimes collected',
                pre: '+ 14 per 5 Chimes collected',
              },
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
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Meeps spawn every 8 − 4 (based on number of Chimes) seconds and Bard can have up to 1 − 9 (based on number of Chimes) of them at a time.',
        descriptionHTML:
          '<span style="color: #E34D4C; white-space:normal">Meeps</span> spawn every <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="number of Chimes" data-bot_values="8;7;6;5;4" data-top_values="0;20;40;55;70">8 − 4 (based on number of Chimes)</span> seconds and <b>Bard</b> can have up to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="number of Chimes" data-bot_values="1;2;3;4;5;6;7;8;9" data-top_values="0;10;30;50;65;80;90;95;100">1 − 9 (based on number of Chimes)</span> of them at a time.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Meeps spawn every 8 − 4 (based on number of Chimes) seconds and Bard can have up to 1 − 9 (based on number of Chimes) of them at a time.',
            values: [8, 4],
            basedOn: 'number of Chimes',
            user: 'none',
            units: '',
            unitsText: 'seconds and Bard can have up to 1 − 9',
            pre: 'Meeps spawn every 8 − 4',
            post: 'seconds and Bard can have up to 1 − 9',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'mixed',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* Primary target takes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>, while secondary ones take <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span>.\n<ul><li><span style="color: #E34D4C; white-space:normal">Meeps</span> grant additional stacks of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span>, <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Phase Rush" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Phase_Rush_(Rune)" title="Phase Rush"><img alt="Phase Rush" src="/wiki/images/Phase_Rush_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Phase_Rush_(Rune)" class="mw-redirect" title="Phase Rush (Rune)">Phase Rush</a></span></span> and <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span>.</li>\n<li><span style="color:inherit; white-space:normal">Chime</span> spawns are weighted towards the areas of the map that <b>Bard</b> is currently present in, and spawn every 50 seconds in pairs, with the only exception being the second and third spawns on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Summoner\'s rift"><a href="/wiki/Summoner%27s_Rift_(League_of_Legends)" title="Summoner\'s Rift (League of Legends)"><img alt="Summoner\'s Rift icon.png" src="/wiki/images/Summoner%27s_Rift_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Summoner%27s_Rift_(League_of_Legends)" title="Summoner\'s Rift (League of Legends)">Summoner\'s Rift</a></span>, which spawn only one.\n<ul><li><span style="color: #56C456; white-space:normal">Chimes</span> will not spawn in either team\'s base and will not spawn in the enemy team\'s jungle before the 5 minute mark.</li></ul></li>\n<li>Only <b>Bard</b> can see a <span style="color: #56C456; white-space:normal">chime</span> that is in the <a href="/wiki/Fog_of_war" class="mw-redirect" title="Fog of war">fog of war</a>. All other players must have <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of a <span style="color: #56C456; white-space:normal">chime</span> for it to be visible to them.\n<ul><li>Only <b>Bard</b> can see a minimap icon for an uncollected <span style="color: #56C456; white-space:normal">chime</span>, regardless of whether other players have vision on it or not. The minimap icon will turn red when the <span style="color: #56C456; white-space:normal">chime</span> is one minute away from expiration.</li>\n<li><b>Bard</b> cannot see <span style="color: #56C456; white-space:normal">chimes</span> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsighted</a></span>.</li></ul></li>\n<li>Only <span style="color: #E34D4C; white-space:normal">Meep</span> cone attacks are absorbed by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shields</a></span>. Those that deal damage together with the basic attack don\'t.</li>\n<li>If a <span style="color: #E34D4C; white-space:normal">Meep</span> empowered auto attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> or when <b>Bard</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>, the basic attack itself will deal no damage, but the <span style="color: #E34D4C; white-space:normal">Meep</span> damage will still be applied.</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>\n<table class="article-table">\n<tbody><tr>\n<th>Minimum Time\n</th>\n<th>Chimes\n</th>\n<th>Effects\n</th>\n<th>Base Damage\n</th></tr>\n<tr>\n<td>3:20</td>\n<td>5</td>\n<td><span><img alt="New" src="/wiki/images/New.svg" decoding="async" loading="lazy" title="New" width="41" height="20" class="lazyload"></span> Meeps now <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">Slow</a></span> by 25%.</td>\n<td>49\n</td></tr>\n<tr>\n<td>5:00</td>\n<td>10</td>\n<td>Meep limit increased to 2.</td>\n<td>63\n</td></tr>\n<tr>\n<td>7:30</td>\n<td>15</td>\n<td><span><img alt="New" src="/wiki/images/New.svg" decoding="async" loading="lazy" title="New" width="41" height="20" class="lazyload"></span> Meeps now deal splash damage.</td>\n<td>77\n</td></tr>\n<tr>\n<td>9:10</td>\n<td>20</td>\n<td>Recharge time reduced to 7 seconds.</td>\n<td>91\n</td></tr>\n<tr>\n<td>11:40</td>\n<td>25</td>\n<td><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">Slow</a></span> increased to 35%.</td>\n<td>105\n</td></tr>\n<tr>\n<td>13:20</td>\n<td>30</td>\n<td>Meep limit increased to 3.</td>\n<td>119\n</td></tr>\n<tr>\n<td>15:50</td>\n<td>35</td>\n<td>Splash damage area increased.</td>\n<td>133\n</td></tr>\n<tr>\n<td>17:30</td>\n<td>40</td>\n<td>Recharge time reduced to 6 seconds.</td>\n<td>147\n</td></tr>\n<tr>\n<td>20:00</td>\n<td>45</td>\n<td><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">Slow</a></span> increased to 45%.</td>\n<td>161\n</td></tr>\n<tr>\n<td>21:40</td>\n<td>50</td>\n<td>Meep limit increased to 4.</td>\n<td>175\n</td></tr>\n<tr>\n<td>24:10</td>\n<td>55</td>\n<td>Recharge time reduced to 5 seconds.</td>\n<td>189\n</td></tr>\n<tr>\n<td>25:50</td>\n<td>60</td>\n<td><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">Slow</a></span> increased to 55%.</td>\n<td>203\n</td></tr>\n<tr>\n<td>28:20</td>\n<td>65</td>\n<td>Meep limit increased to 5.</td>\n<td>217\n</td></tr>\n<tr>\n<td>30:00</td>\n<td>70</td>\n<td>Recharge time reduced to 4 seconds.</td>\n<td>231\n</td></tr>\n<tr>\n<td>32:30</td>\n<td>75</td>\n<td><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">Slow</a></span> increased to 65%.</td>\n<td>245\n</td></tr>\n<tr>\n<td>34:10</td>\n<td>80</td>\n<td>Meep limit increased to 6.</td>\n<td>259\n</td></tr>\n<tr>\n<td>36:40</td>\n<td>85</td>\n<td><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">Slow</a></span> increased to 75%.</td>\n<td>273\n</td></tr>\n<tr>\n<td>38:20</td>\n<td>90</td>\n<td>Meep limit increased to 7.</td>\n<td>287\n</td></tr>\n<tr>\n<td>40:50</td>\n<td>95</td>\n<td>Meep limit increased to 8.</td>\n<td>301\n</td></tr>\n<tr>\n<td>42:30</td>\n<td>100</td>\n<td>Meep limit increased to 9.</td>\n<td>315\n</td></tr>\n<tr>\n<td colspan="4">Every 5 thereafter only grants 14 bonus damage.\n</td></tr></tbody></table>',
    video: 'Bard IVideo.ogv',
  },
  'Cosmic Binding': {
    name: 'Cosmic Binding',
    display_name: 'Cosmic Binding',
    champion: 'Bard',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'BardQ.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '850',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 60',
    speed: '1500',
    cast_time: '0.<small>25</small>',
    cost: '60',
    costtype: 'Mana',
    cooldown: '11 / 10 / 9 / 8 / 7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bard" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bard/LoL" title="Bard"><img alt="Bard" src="/wiki/images/Bard_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bard/LoL" title="Bard/LoL">Bard</a></span></span> fires an energy bolt in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> the first enemy hit.',
      'After the bolt hits an enemy, it continues onward. If it hits <a href="/wiki/Terrain" title="Terrain">terrain</a> or another enemy, it will deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to them and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> both targets.',
    ],
    description: [
      {
        icon: '/wiki/images/Cosmic_Binding.png',
        description:
          'Active: Bard fires an energy bolt in the target direction that deals magic damage to the first enemy hit and  slows them by 60% for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Bard</b> fires an energy bolt in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 60% for a duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Bard fires an energy bolt in the target direction that deals magic damage to the first enemy hit and  slows them by 60% for a duration.',
            damagetype: 'Magic',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for a duration.fires an energy bolt in the target direction that deals magic damage to the first enemy hit and  slows them by 60',
            pre: 'Bard fires an energy bolt in the target direction that deals magic damage to the first enemy hit and  slows them by 60% for a duration.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 125 / 170 / 215 / 260 (+ 65% AP)',
            valuesHTML:
              '80 / 125 / 170 / 215 / 260 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;65% AP)</span>',
          },
          {
            name: 'Disable Duration:',
            values: '1 / 1.2 / 1.4 / 1.6 / 1.8',
            valuesHTML:
              '1 / 1.<small>2</small> / 1.<small>4</small> / 1.<small>6</small> / 1.<small>8</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 65% AP)',
            damagetype: 'Magic',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Disable Duration:',
            raw: '1 / 1.2 / 1.4 / 1.6 / 1.8',
            values: [1, 1.2, 1.4, 1.6, 1.8],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.2 / 1.4 / 1.6 / 1.8',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'After Cosmic Binding hits an enemy, the bolt continues behind them for 300 units. If the bolt hits terrain or a second enemy, it  stuns both targets for the same duration, dealing the same damage to the secondary target.',
        descriptionHTML:
          'After <i>Cosmic Binding</i> hits an enemy, the bolt continues behind them for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">300 units</span>. If the bolt hits terrain or a second enemy, it <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> both targets for the same duration, dealing the same damage to the secondary target.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'After Cosmic Binding hits an enemy, the bolt continues behind them for 300 units',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'Cosmic Binding hits an enemy, the bolt continues behind them for 300 units',
            pre: 'After Cosmic Binding hits an enemy, the bolt continues behind them for 300 units',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* <i>Cosmic Binding\'s</i> interaction with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shields</a></span>:\n<ul><li><ul><li>If the first target has a spell shield, they will block the damage but the bolt will still pass through them.\n<ul><li>If the bolt hits a second target, only they will be stunned.</li>\n<li>If the bolt hits terrain, the first target will be stunned.</li></ul></li>\n<li>If the second target has a spell shield, they will block the stun and damage.\n<ul><li>The first target will still be stunned.</li></ul></li>\n<li>If the first target gains a spell shield after being hit, the stun will not be blocked.</li></ul></li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> will apply even if the first target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li><i>Cosmic Binding</i> can interact with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> is still applied even if the first or second target dies to the ability itself or before the projectile can bind them.</li>\n<li><i>Cosmic Binding</i> does not grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of enemies hit, but a hit can be seen and heard to indicate that at least one enemy is there.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    video: 'Bard QVideo.ogv',
  },
  "Caretaker's Shrine": {
    name: "Caretaker's Shrine",
    display_name: "Caretaker's Shrine",
    champion: 'Bard',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'BardW.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '800',
    cast_time: '0.<small>25</small>',
    cost: '70',
    costtype: 'Mana',
    cooldown: '14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bard" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bard/LoL" title="Bard"><img alt="Bard" src="/wiki/images/Bard_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bard/LoL" title="Bard/LoL">Bard</a></span></span> conjures a shrine which powers up over a period, disappearing when a champion steps on it.',
      'If an ally champion steps on the shrine, they gain a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span> based on the shrine\'s power.',
    ],
    description: [
      {
        icon: "/wiki/images/Caretaker's_Shrine.png",
        description:
          'Active: Bard conjures a shrine at the target location that gathers power over 10 seconds, granting  sight of its surroundings for 1.8 seconds. Shrines last until they are consumed by champions moving over them. Up to 3 shrines may be active at a time.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Bard</b> conjures a shrine at the target location that gathers power over 10 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">1.<small>8</small> seconds</span>. Shrines last until they are consumed by champions moving over them. Up to 3 shrines may be active at a time.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Bard conjures a shrine at the target location that gathers power over 10 seconds, granting  sight of its surroundings for 1.8 seconds',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'conjures a shrine at the target location that gathers power over 10 seconds, granting  sight of its surroundings for 1.8 seconds',
            pre: 'Bard conjures a shrine at the target location that gathers power over 10 seconds, granting  sight of its surroundings for 1.8 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Up to 3 shrines may be active at a time.',
            values: 3,
            user: 'none',
            units: '',
            unitsText: 'to 3 shrines may be active at a time.',
            pre: 'Up to 3 shrines may be active at a time.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "If the champion was an ally or Bard himself, they are  healed for an amount based on the shrine's power and gain  30% bonus movement speed that decays over 1.5 seconds.",
        descriptionHTML:
          'If the champion was an ally or <b>Bard</b> himself, they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span> for an amount based on the shrine\'s power and gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">30% <b>bonus</b> movement speed</span></span> that decays over 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "If the champion was an ally or Bard himself, they are  healed for an amount based on the shrine's power and gain  30% bonus movement speed that decays over 1.5 seconds.",
            healType: 'BonusHealth',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "bonus movement speed that decays over 1.5 seconds.the champion was an ally or Bard himself, they are  healed for an amount based on the shrine's power and gain  30",
            pre: "If the champion was an ally or Bard himself, they are  healed for an amount based on the shrine's power and gain  30% bonus movement speed that decays over 1.5 seconds.",
          },
        ],
        leveling: [
          {
            name: 'Minimum Heal:',
            values: '25 / 50 / 75 / 100 / 125 (+ 30% AP)',
            valuesHTML:
              '25 / 50 / 75 / 100 / 125 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Minimum Heal:',
            raw: '25 / 50 / 75 / 100 / 125 (+ 30% AP)',
            healType: 'DrainEffect',
            values: [25, 50, 75, 100, 125],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 50 / 75 / 100 / 125',
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
    ],
    targeting:
      '<a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a> / <a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a>',
    affects: 'Allies',
    spelleffects: 'Heal',
    notes:
      '* <i>Caretaker\'s Shrine</i> can be cast directly on an ally and it will be treated as a <a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">unit-targeted</a> ability for effects such as <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Guardian" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guardian_(Rune)" title="Guardian"><img alt="Guardian" src="/wiki/images/Guardian_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Guardian_(Rune)" class="mw-redirect" title="Guardian (Rune)">Guardian</a></span></span>.\n<ul><li><ul><li>If <b>Bard</b> has 3 <i>shrines</i> on the map and creates a new one that is cast directly on himself or an ally, the oldest shrine will not be destroyed. This is because the <i>shrine</i> is used as an actual targeted heal on himself or someone else, and not a permanent shrine, so the other 3 may stay.</li>\n<li>The <a href="/wiki/Spell_indicator" title="Spell indicator">spell indicator</a> of <i>Caretaker\'s Shrine</i> shows the area in which it can be used as a targeted heal. After a shrine has been placed on the ground its activation area becomes smaller: allies or enemies have to step directly on the shrine to use it or destroy it.</li></ul></li>\n<li>Leveling up <i>Caretaker\'s Shrine</i> will update the healing of existing shrines.</li></ul>',
    video: 'Bard WVideo.ogv',
  },
  'Magical Journey': {
    name: 'Magical Journey',
    display_name: 'Magical Journey',
    champion: 'Bard',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'BardE.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '900',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Enemy travel speed">900</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bard and ally travel speed">1197</span>',
    cast_time: '0.<small>25</small>',
    cost: '30',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">22 / 20.<small>5</small> / 19 / 17.<small>5</small> / 16</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bard" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bard/LoL" title="Bard"><img alt="Bard" src="/wiki/images/Bard_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bard/LoL" title="Bard/LoL">Bard</a></span></span> opens a one-way portal through nearby <a href="/wiki/Terrain" title="Terrain">terrain</a>. Champions can enter by moving into the portal, however allies will be faster.',
    ],
    description: [
      {
        icon: '/wiki/images/Magical_Journey.png',
        description:
          'Active: Bard opens a one-way magical corridor through a piece of terrain in the target direction for 10 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Bard</b> opens a one-way magical corridor through a piece of <a href="/wiki/Terrain" title="Terrain">terrain</a> in the target direction for 10 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Bard opens a one-way magical corridor through a piece of terrain in the target direction for 10 seconds.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'opens a one-way magical corridor through a piece of terrain in the target direction for 10 seconds.',
            pre: 'Bard opens a one-way magical corridor through a piece of terrain in the target direction for 10 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'A champion can  pass through the corridor by selecting it, becoming  revealed during the travel. Bard and allies travel through the portal at 33% increased speed.',
        descriptionHTML:
          'A champion can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pass</a></span> through the corridor by selecting it, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> during the travel. <b>Bard</b> and allies travel through the portal at 33% increased speed.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Bard and allies travel through the portal at 33% increased speed.',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'increased speed.and allies travel through the portal at 33',
            pre: 'Bard and allies travel through the portal at 33% increased speed.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'A nearby valid piece of terrain is required to cast this ability. Magical Journey cannot be taken while  immobilized or  grounded.',
        descriptionHTML:
          '<i>A nearby valid piece of terrain is required to cast this ability. Magical Journey cannot be taken while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Allies, Enemies',
    projectile: 'False',
    notes:
      '* Terrain also includes <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.\n<ul><li><i>Magical Journey\'s</i> tunnel has a max range of 2600 units (about two screens long)<sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[3]</a></sup>.</li>\n<li><i>Magical Journey</i> will score assists for <b>Bard</b> if an ally that uses it scores a <a href="/wiki/Kill" title="Kill">kill</a> or <a href="/wiki/Assist" title="Assist">assist</a> shortly after.</li>\n<li><b>Bard</b> can cast <i>Magical Journey</i> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.</li>\n<li>There is no limit to how many times a given instance of <i>Magical Journey</i> may be used.</li>\n<li><i>Magical Journey</i> cannot interact with player-created terrain due to its short lifespan.<sup id="cite_ref-4" class="reference"><a href="#cite_note-4">[4]</a></sup></li>\n<li>Any abilities that continue during normal movement, such as <a href="/wiki/Area_of_effect" title="Area of effect">point blank area of effects</a> and various forms of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealth"><a href="/wiki/Stealth" title="Stealth"><img alt="Guerrilla Warfare.png" src="/wiki/images/Teemo_Guerrilla_Warfare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth" title="Stealth">stealth</a></span>, will continue during the travel within <i>Magical Journey</i>.</li>\n<li>If a champion\'s <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> while inside terrain using <i>Magical Journey</i>, they will be immediately displaced out to the nearest open space, but are not rendered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>.</li>\n<li>Taking <i>Magical Journey</i> is considered a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span>, and so will interact with effects such as <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Sudden Impact" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sudden_Impact_(Rune)" title="Sudden Impact"><img alt="Sudden Impact" src="/wiki/images/Sudden_Impact_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Sudden_Impact_(Rune)" class="mw-redirect" title="Sudden Impact (Rune)">Sudden Impact</a></span></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knockdown</a></span>.</li></ul>',
    video: 'Bard EVideo.ogv',
  },
  'Tempered Fate': {
    name: 'Tempered Fate',
    display_name: 'Tempered Fate',
    champion: 'Bard',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'BardR.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '3400',
    effect_radius: '350',
    cast_time: '0.<small>5</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '110 / 95 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Bard" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bard/LoL" title="Bard"><img alt="Bard" src="/wiki/images/Bard_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bard/LoL" title="Bard/LoL">Bard</a></span></span> sends spirit energy arcing to a location, putting all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> hit into <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span> for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Tempered_Fate.png',
        description:
          'Active: Bard sends magical energy arcing to the target location, granting  sight of the area during travel. Upon impact, it puts all units within into  stasis for 2.5 seconds, as well as  stunning all enemy  champions,  minions, and  turrets struck for the same duration. Enemies hit are  revealed for the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Bard</b> sends magical energy arcing to the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area during travel. Upon impact, it puts all units within into <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span> for 2.<small>5</small> seconds, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> all enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> struck for the same duration. Enemies hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> for the duration.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Upon impact, it puts all units within into  stasis for 2.5 seconds, as well as  stunning all enemy  champions,  minions, and  turrets struck for the same duration',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'impact, it puts all units within into  stasis for 2.5 seconds, as well as  stunning all enemy  champions,  minions, and  turrets struck for the same duration',
            pre: 'Upon impact, it puts all units within into  stasis for 2.5 seconds, as well as  stunning all enemy  champions,  minions, and  turrets struck for the same duration',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Epic  monsters and  turrets are affected by Tempered Fate despite being  immune to crowd control.',
        descriptionHTML:
          '<i>Epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> are affected by Tempered Fate despite being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: '',
    spellshield: true,
    projectile: 'False',
    notes:
      '* <i>Tempered Fate\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tenacity"><a href="/wiki/Tenacity" title="Tenacity"><img alt="Tenacity icon.png" src="/wiki/images/Tenacity_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tenacity" title="Tenacity">Tenacity</a></span>.\n<ul><li><ul><li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span> is unaffected.</li></ul></li>\n<li><i>Tempered Fate</i> will affect all <i>targetable</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>, and <a href="/wiki/Jungle_plants" title="Jungle plants">jungle plants</a>.</li>\n<li><i>Tempered Fate</i> has no effect on enemies that have <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">total crowd control immunity</a></span>, and allies that are immune from using an ability that preloads <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Unstoppableforcemarker"><a href="/wiki/Crowd_control#UnstoppableForceMarker" title="Crowd control">UnstoppableForceMarker</a></span>.\n<ul><li>The only exceptions are the crowd control immunity that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> and epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> have.</li></ul></li>\n<li>All <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> (including allies) during the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span> are prohibited from activating <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> effects for its duration.\n<ul><li>It will not disable <img alt="Quicksilver Sash item.png" src="/wiki/images/Quicksilver_Sash_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <a href="/wiki/Named_item_effect#Quicksilver" title="Named item effect">Quicksilver</a> and instead put it on a 3-second <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.</li></ul></li>\n<li><i>Tempered Fate</i> deals 0 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">true damage</a></span>, which triggers <a href="/wiki/Combat_status" title="Combat status">in-combat</a> effects such as drawing turret and <a href="/wiki/Monster#Monster_Behavior" title="Monster">monster aggression</a>, <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Sudden Impact" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sudden_Impact_(Rune)" title="Sudden Impact"><img alt="Sudden Impact" src="/wiki/images/Sudden_Impact_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Sudden_Impact_(Rune)" class="mw-redirect" title="Sudden Impact (Rune)">Sudden Impact</a></span></span> or applying <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Night Harvester" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Night_Harvester" title="Night Harvester"><img alt="Night Harvester" src="/wiki/images/Night_Harvester_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Night_Harvester" title="Night Harvester">Night Harvester</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Elixir of Sorcery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elixir_of_Sorcery" title="Elixir of Sorcery"><img alt="Elixir of Sorcery" src="/wiki/images/Elixir_of_Sorcery_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elixir_of_Sorcery" title="Elixir of Sorcery">Elixir of Sorcery</a></span></span>.\n<ul><li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Elixir of Sorcery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elixir_of_Sorcery" title="Elixir of Sorcery"><img alt="Elixir of Sorcery" src="/wiki/images/Elixir_of_Sorcery_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elixir_of_Sorcery" title="Elixir of Sorcery">Elixir of Sorcery</a></span></span> deals damage before the target is put into stasis.</li></ul></li>\n<li><i>Tempered Fate\'s</i> travel time varies between ~0.<small>65</small> at point blank and ~1.<small>8</small> at max range, resulting in an overall delay of ~1.<small>15</small>-2.<small>3</small> seconds including the cast time depending on distance covered.</li></ul>',
    video: 'Bard RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
