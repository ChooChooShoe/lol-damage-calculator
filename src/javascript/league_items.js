
export function getItemStats(itemId, value) {
  const stats = {};
  const uniques = {};
  if (itemId in item_lookup) {
    const inner_fn = item_lookup[itemId];
    try {
      inner_fn(value, stats, uniques, {});
    } catch (e) {
      console.log('Error for item stats', itemId, value.name);
      console.log(e);
    }
  }
  return {
    stats: stats,
    uniques: uniques,
  };
}
export function test_item(data) {
  window.exportItems = {};
  const stats = {};
  const uniques = {};
  for (const itemId in item_lookup) {
    const inner_fn = item_lookup[itemId];
    try {
      inner_fn(itemId, data[itemId], stats, uniques, {});
    } catch (e) {
      console.log('Error for item stats', itemId);
      console.log(e);
    }
  }
  console.log(JSON.stringify(window.exportItems))
}
export function defaultItemValues() {
}

function take(key, value) {
  const stats = [];
  const options = {};
  const uniques = [];
  const parser = new DOMParser()
  const el = parser.parseFromString(`<body>${value.description}</body>`, "text/html");
  const bodyNode = el.childNodes[0].childNodes[1];

  let active = false;

  let lastKey = 0;
  let lastLine = [];
  for (let child of Array.from(bodyNode.childNodes)) {
    if (child.nodeName === 'MANA') {
      child = child.childNodes[0];
    }

    if (child.nodeName === 'STATS') {
      for (const statChild of Array.from(child.childNodes)) {
        if (statChild.nodeName === 'LEVELLIMIT')
          options['levelLimit'] = statChild.textContent;
        else if (statChild.textContent)
          stats.push(statChild.textContent);
      }
    } else if (child.nodeName === 'UNIQUE' ||
      child.nodeName === 'PASSIVE' ||
      child.nodeName === 'ACTIVE' ||
      child.nodeName === 'AURA'
    ) {
      const parts1 = child.textContent.split(' - ');
      const parts2 = parts1[0].trim().split(' ', 2);
      const isUnique = parts2.length == 2 ? parts2[0] : undefined; //capture[1] ? capture[1].trim() : capture[1];
      const type = parts2[parts2.length - 1];//capture[2];
      const name = parts1[1] ? parts1[1].replace(/:/,'').trim() : undefined;//capture[3];
      // console.log('UNIQUE: for capture', child.textContent, '|', isUnique, '|', type, '|', name);

      lastKey = uniques.length;
      uniques[lastKey] = {
        unique: isUnique === 'UNIQUE' ? true : isUnique,
        type: type.toLocaleLowerCase().replace(/:/,'').trim(),
        name: name,
        description: '',
      }
    } else if (child.nodeName === 'CONSUMABLE' || child.nodeName === 'RULES') {
      lastKey = uniques.length;
      uniques[lastKey] = {
        unique: undefined,
        type: child.nodeName.toLocaleLowerCase(),
        name: child.textContent.replace(/:/,''),
        description: '',
      }
    }
    else if (child.nodeName === 'BR') {
      if (lastLine.join('') === '') continue;
      if (!uniques[lastKey])
        uniques[lastKey] = { type: 'text', }
      uniques[lastKey].description = lastLine.join('').trim();
      lastLine = [];
    } else if (child.nodeName === 'GROUPLIMIT' || child.nodeName === 'LEVELLIMIT'
    ) {
      //TODO

    } else if (child.outerHTML) {
      lastLine.push(child.outerHTML);
    } else if (child.textContent) {
      lastLine.push(child.textContent);
    }
  }
  if (lastLine.length > 0) {
    if (!uniques[lastKey])
      uniques[lastKey] = { type: 'text',}
    uniques[lastKey].description = lastLine.join('').trim();
  }

  const newStats = {};
  for (const htmlStat of stats) {
    const capture = htmlStat.match(/([+\d%.-]+) (.*)/);
    if (capture) {
      const val = (capture[1].indexOf('%') !== -1) ? parseFloat(capture[1]) / 100 : parseFloat(capture[1]);
      const tag = capture[2].replace(/\s/g, '');
      newStats[tag] = val;
      // console.log('Stat: for tag', tag, translate[tag], 'is', val);
    }
  }
  // const newUniques = {};
  // for (const htmlUnique of uniques) {
  //   if(htmlUnique === '')
  //    continue;
  //   const capture = htmlUnique.match(/<unique>([^/]*)<\/unique>(.*)/);
  //   if (capture) {
  //     const tag = capture[1];
  //     const val = capture[2];
  //     newUniques[tag] = val;
  //     console.log('Stat: for tag "' + tag + '"');
  //   } else {
  //     console.log('Stat: failed for "' + htmlUnique + '"');
  //   }
  // }
  window.exportItems[key] = {
    key: key,
    name: value.name,
    description: value.description,
    image: value.image,
    gold: value.gold,
    tags: value.tags,
    // options: options,
  };
  if (stats.length > 0)
    window.exportItems[key].stats = newStats;
  if (Object.keys(uniques).length > 0)
    window.exportItems[key].uniques = uniques;

  if (value.colloq && value.colloq !== ';')
    window.exportItems[key].colloq = value.colloq;
  if (active === true)
    window.exportItems[key].active = true;
  for (const reuseKey of ['consumed', 'consumeOnFull', 'from', 'into', 'stacks', 'specialRecipe', 'inStore', 'hideFromAll', 'requiredChampion', 'requiredAlly']) {
    if (value.hasOwnProperty(reuseKey)) {
      window.exportItems[key][reuseKey] = value[reuseKey]

    }
  }
  return stats;
}
const item_lookup = {
  //Boots of Speed
  '1001': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed";
    return take(key, value);
  },
  //Faerie Charm
  '1004': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><mana>+25% Base Mana Regen </mana></stats>";
    return take(key, value);
  },
  //Rejuvenation Bead
  '1006': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50% Base Health Regen </stats>";
    return take(key, value);
  },
  //Giant's Belt
  '1011': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+380 Health</stats>";
    return take(key, value);
  },
  //Cloak of Agility
  '1018': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+20% Critical Strike Chance</stats>";
    return take(key, value);
  },
  //Blasting Wand
  '1026': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40 Ability Power</stats>";
    return take(key, value);
  },
  //Sapphire Crystal
  '1027': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><mana>+250 Mana</mana></stats>";
    return take(key, value);
  },
  //Ruby Crystal
  '1028': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+150 Health</stats>";
    return take(key, value);
  },
  //Cloth Armor
  '1029': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+15 Armor</stats>";
    return take(key, value);
  },
  //Chain Vest
  '1031': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40 Armor</stats>";
    return take(key, value);
  },
  //Null-Magic Mantle
  '1033': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+25 Magic Resist</stats>";
    return take(key, value);
  },
  //Long Sword
  '1036': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+10 Attack Damage</stats>";
    return take(key, value);
  },
  //Pickaxe
  '1037': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+25 Attack Damage</stats>";
    return take(key, value);
  },
  //B. F. Sword
  '1038': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40 Attack Damage</stats>";
    return take(key, value);
  },
  //Hunter's Talisman
  '1039': function (key, value, stats, uniques, metadata) {
    // ex. "<br><unique>UNIQUE Passive - Tooth:</unique> Damaging a monster with a spell or attack steals 30 Health over 5 seconds and burns them for 60 magic damage. <mana>While in the jungle or river, regenerate up to 8 Mana per second based on your missing Mana.</mana> This item grants <font color='#99BBBB'><a href='SpecialJungleExperience'>Monster Hunter</a></font>.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Hunter's Machete
  '1041': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+10% Life Steal vs. Monsters</stats><br><br><unique>UNIQUE Passive - Nail:</unique> Basic attacks vs. Monsters deal 35 bonus damage on hit. This item grants <font color='#99BBBB'><a href='SpecialJungleExperience'>Monster Hunter</a></font>.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Dagger
  '1042': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+12% Attack Speed</stats>";
    return take(key, value);
  },
  //Recurve Bow
  '1043': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+25% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal an additional 15 physical damage on hit.";
    return take(key, value);
  },
  //Brawler's Gloves
  '1051': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+10% Critical Strike Chance</stats>";
    return take(key, value);
  },
  //Amplifying Tome
  '1052': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+20 Ability Power</stats>";
    return take(key, value);
  },
  //Vampiric Scepter
  '1053': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+15 Attack Damage<br>+10% Life Steal</stats>";
    return take(key, value);
  },
  //Doran's Shield
  '1054': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+80 Health</stats><br><br><passive>Passive: </passive>Restores 6 Health every 5 seconds.<br><passive>Passive: </passive>Basic attacks deal an additional 5 physical damage to minions on hit.<br><unique>UNIQUE Passive:</unique> Regenerate up to 30 health over 10 seconds after taking damage from an enemy champion, based on percent missing health.";
    return take(key, value);
  },
  //Doran's Blade
  '1055': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+8 Attack Damage<br>+80 Health<br>+3% Life Steal</stats>";
    return take(key, value);
  },
  //Doran's Ring
  '1056': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+60 Health<br>+15 Ability Power<br><mana>+5 Mana per 5 seconds</mana></stats><br><br><passive>Passive: </passive>Basic attacks deal an additional 5 physical damage to minions on hit.";
    return take(key, value);
  },
  //Negatron Cloak
  '1057': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40 Magic Resist</stats>";
    return take(key, value);
  },
  //Needlessly Large Rod
  '1058': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+60 Ability Power</stats>";
    return take(key, value);
  },
  //Space Vampiric Scepter
  '1059': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+15 Attack Damage<br>+2.5% Life Steal</stats>";
    return take(key, value);
  },
  //The Dark Seal
  '1082': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+10 Ability Power<br>+25% Increased Healing from Potions<br><mana>+100 Mana</mana></stats><br><br><unique>UNIQUE Passive - Dread:</unique> Grants +3 Ability Power per Glory. <br><unique>UNIQUE Passive - Do or Die:</unique> Grants 2 Glory for a champion kill or 1 Glory for an assist, up to 10 Glory total. Lose 4 Glory on death.";
    return take(key, value);
  },
  //Cull
  '1083': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+7 Attack Damage<br>+3 Life on Hit</stats><br><br><unique>UNIQUE Passive:</unique> Killing a lane minion grants 1 additional Gold. Killing 100 lane minions grants an additional 350 bonus gold immediately and disables this passive.";
    return take(key, value);
  },
  //Enchantment: Warrior
  '1400': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Enchantment: Cinderhulk
  '1401': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+300 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 11 (+1 per champion level) magic damage a second to nearby enemies while in combat. Deals 300% bonus damage to minions and monsters.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Enchantment: Runic Echoes
  '1402': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+80 Ability Power<br>+10% Cooldown Reduction<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 25% of your missing Mana.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Enchantment: Warrior
  '1412': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Enchantment: Cinderhulk
  '1413': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+300 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 11 (+1 per champion level) magic damage a second to nearby enemies while in combat. Deals 300% bonus damage to minions and monsters.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Enchantment: Runic Echoes
  '1414': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+80 Ability Power<br>+10% Cooldown Reduction<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 25% of your missing Mana.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Enchantment: Bloodrazor
  '1416': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Enchantment: Bloodrazor
  '1419': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Health Potion
  '2003': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 5 at one time. Limited to 1 type of Healing Potion.</groupLimit><br><br><consumable>Click to Consume:</consumable> Restores 150 Health over 15 seconds.";
    return take(key, value);
  },
  //Mana Potion
  '2004': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 5 at one time.</groupLimit><br><br><consumable>Click to Consume:</consumable> <mana>Restores 100 Mana over 15 seconds.</mana>";
    return take(key, value);
  },
  //Total Biscuit of Rejuvenation
  '2009': function (key, value, stats, uniques, metadata) {
    // ex. "<consumable>Click to Consume:</consumable> Restores 80 Health and 50 Mana over 10 seconds.";
    return take(key, value);
  },
  //Total Biscuit of Everlasting Will
  '2010': function (key, value, stats, uniques, metadata) {
    // ex. "<consumable>Click to Consume:</consumable> Restores 15% of missing Health and Mana over 15 seconds.";
    return take(key, value);
  },
  //Elixir Of Skill
  '2011': function (key, value, stats, uniques, metadata) {
    // ex. "<consumable>Click to Consume:</consumable> Grants <font color='#29E3D6'>+1 Skill Point</font>.";
    return take(key, value);
  },
  //Looted Biscuit of Rejuvenation
  '2012': function (key, value, stats, uniques, metadata) {
    // ex. "<consumable>Click to Consume:</consumable> Restores 15% of missing Health and Mana over 15 seconds.";
    return take(key, value);
  },
  //Looted Oracle's Extract
  '2013': function (key, value, stats, uniques, metadata) {
    // ex. "<consumable>Click to Consume:</consumable> Grants detection of nearby invisible or unseen enemy units for 15 to 40 seconds, based on level.";
    return take(key, value);
  },
  //Kircheis Shard
  '2015': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+15% Attack Speed</stats><br><br><unique>UNIQUE Passive - Energized:</unique> Moving and attacking will make an attack <a href='Energized'>Energized</a>. Your Energized attacks deal <magicDamage>50 bonus magic damage</magicDamage> (based on level) on hit.";
    return take(key, value);
  },
  //Refillable Potion
  '2031': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 125 Health over 12 seconds. Holds up to 2 charges and refills upon visiting the shop.";
    return take(key, value);
  },
  //Corrupting Potion
  '2033': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 125 Health and 75 Mana over 12 seconds and grants <font color='#FF8811'><u>Touch of Corruption</u></font> during that time. Holds up to 3 charges that refills upon visiting the shop.<br><br><font color='#FF8811'><u>Touch of Corruption:</u></font> Damaging spells and attacks burn enemy champions for <scaleLevel>15 - 30</scaleLevel> magic damage over 3 seconds. (Half Damage for Area of Effect or Damage over Time spells. Damage increases with champion level.)<br><br><rules>(Corrupting Potion can be used even at full Health and Mana.)</rules>";
    return take(key, value);
  },
  //Oracle's Extract
  '2047': function (key, value, stats, uniques, metadata) {
    // ex. "<consumable>Click to Consume:</consumable> Grants detection of nearby invisible or unseen enemy units for 5 minutes.";
    return take(key, value);
  },
  //Explorer's Ward
  '2050': function (key, value, stats, uniques, metadata) {
    // ex. "<consumable>Click to Consume:</consumable> Places an invisible ward that reveals the surrounding area for 60 seconds.";
    return take(key, value);
  },
  //Guardian's Horn
  '2051': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+150 Health</stats><br><br><passive>Passive: </passive>Restores 20 Health every 5 seconds.<br><unique>UNIQUE Passive:</unique> Blocks 12 damage from attacks and spells from champions (25% effectiveness vs. damage over time abilities).<br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>";
    return take(key, value);
  },
  //Poro-Snax
  '2052': function (key, value, stats, uniques, metadata) {
    // ex. "This savory blend of free-range, grass-fed Avarosan game hens and organic, non-ZMO Freljordian herbs contains the essential nutrients necessary to keep your Poro purring with pleasure.<br><br><i>All proceeds will be donated towards fighting Noxian animal cruelty.</i>";
    return take(key, value);
  },
  //Raptor Cloak
  '2053': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+30 Armor<br>+125% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.";
    return take(key, value);
  },
  //Diet Poro-Snax
  '2054': function (key, value, stats, uniques, metadata) {
    // ex. "All the flavor of regular Poro-Snax, without the calories! Keeps your Poro happy AND healthy.<br><br><consumable>Click to Consume:</consumable> Gives your Poros a delicious healthy treat.";
    return take(key, value);
  },
  //Control Ward
  '2055': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Can only carry 2 Control Wards in inventory.</groupLimit><br><br><consumable>Click to Consume:</consumable> Places a ward that grants vision of the surrounding area. This device will also reveal invisible traps and reveal / disable wards. Control Wards do not disable other Control Wards. Camouflaged units will also be revealed. <br><br>Limit 1 <font color='#BBFFFF'>Control Ward</font> on the map per player.";
    return take(key, value);
  },
  //Pilfered Stealth Ward
  '2056': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Can only carry 3 Stealth Wards in inventory.</groupLimit><br><br><consumable>Click to Consume:</consumable> Place an invisible <font color='#BBFFFF'>Stealth Ward</font> which reveals the surrounding area for <scaleLevel>60 - 120</scaleLevel> seconds.";
    return take(key, value);
  },
  //Peering Farsight Ward
  '2057': function (key, value, stats, uniques, metadata) {
    // ex. "<consumable>Click to Consume:</consumable> Reveals an area and places a visible fragile ward up to 2000 units away. This ward is untargetable by allies.";
    return take(key, value);
  },
  //Travel Size Elixir of Iron
  '2058': function (key, value, stats, uniques, metadata) {
    // ex. "<consumable>Click to Consume:</consumable> Grants +150 Health, 25% Tenacity, increased champion size, and <font color='#FF8811'><u>Path of Iron</u></font> for 45 to 90 seconds, based on level.<br><br><font color='#FF8811'><u>Path of Iron:</u></font> Moving leaves a path behind that boosts allied champion's Movement Speed by 15%.<br><br><rules>(Travel Size Elixirs may stack with one another.)</rules>";
    return take(key, value);
  },
  //Travel Size Elixir of Sorcery
  '2059': function (key, value, stats, uniques, metadata) {
    // ex. "<consumable>Click to Consume:</consumable> Grants +25 Ability Power, 7.5 bonus Mana Regen per 5 seconds and <font color='#FF8811'><u>Sorcery</u></font> for 45 to 90 seconds, based on level. <br><br><font color='#FF8811'><u>Sorcery:</u></font> Damaging a champion or turret deals 15 bonus True Damage. This effect has a 5 second cooldown versus champions but no cooldown versus turrets.<br><br><rules>(Travel Size Elixirs may stack with one another.)</rules><br>";
    return take(key, value);
  },
  //Travel Size Elixir of Wrath
  '2060': function (key, value, stats, uniques, metadata) {
    // ex. "<consumable>Click to Consume:</consumable> Grants +15 Attack Damage and <font color='#FF8811'><u>Bloodlust</u></font> for 45 to 90 seconds, based on level.<br><br><font color='#FF8811'><u>Bloodlust:</u></font> Dealing physical damage to champions heals for 10% of the damage dealt.<br><br><rules>(Travel Size Elixirs may stack with one another.)</rules>";
    return take(key, value);
  },
  //Pilfered Health Potion
  '2061': function (key, value, stats, uniques, metadata) {
    // ex. "<consumable>Click to Consume:</consumable> Restores 50 Health over 5 seconds.";
    return take(key, value);
  },
  //Pilfered Potion of Rouge
  '2062': function (key, value, stats, uniques, metadata) {
    // ex. "<consumable>Click to Consume:</consumable> Grants 10 (+1/Level) Adaptive Force for 45 seconds.";
    return take(key, value);
  },
  //Shurelya's Reverie
  '2065': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40 Ability Power<br>+200 Health<br><mana>+100% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> +5% Movement Speed<br><active>UNIQUE Active:</active> Grants yourself and nearby allies +40% Movement Speed for 3 seconds. (90 second cooldown).";
    return take(key, value);
  },
  //Elixir of Iron
  '2138': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +300 Health, 25% Tenacity, increased champion size, and <font color='#FF8811'><u>Path of Iron</u></font> for 3 minutes.<br><br><font color='#FF8811'><u>Path of Iron:</u></font> Moving leaves a path behind that boosts allied champion's Movement Speed by 15%.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules>";
    return take(key, value);
  },
  //Elixir of Sorcery
  '2139': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +50 Ability Power, 15 bonus Mana Regen per 5 seconds and <font color='#FF8811'><u>Sorcery</u></font> for 3 minutes. <br><br><font color='#FF8811'><u>Sorcery:</u></font> Damaging a champion or turret deals 25 bonus True Damage. This effect has a 5 second cooldown versus champions but no cooldown versus turrets.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules><br>";
    return take(key, value);
  },
  //Elixir of Wrath
  '2140': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +30 Attack Damage and <font color='#FF8811'><u>Bloodlust</u></font> for 3 minutes.<br><br><font color='#FF8811'><u>Bloodlust:</u></font> Dealing physical damage to champions heals for 15% of the damage dealt.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules>";
    return take(key, value);
  },
  //Sly Sack of Gold
  '2319': function (key, value, stats, uniques, metadata) {
    // ex. "<mainText><font color='#FF9900'>Click to Consume:</font> Contains 40-110 gold.<br><br>Can be sold for @Value@ gold.</mainText>";
    return take(key, value);
  },
  //Minion Dematerializer
  '2403': function (key, value, stats, uniques, metadata) {
    // ex. "<consumable>Click to Consume:</consumable> Kill target Lane Minion (550 Range, 10 Second Cooldown).";
    return take(key, value);
  },
  //Commencing Stopwatch
  '2419': function (key, value, stats, uniques, metadata) {
    // ex. "Transforms into a Stopwatch after 10 minutes. That Stopwatch contributes 250 gold for the items it builds into.<br><br><rules>(Stopwatch normally contributes 600 gold)</rules>";
    return take(key, value);
  },
  //Stopwatch
  '2420': function (key, value, stats, uniques, metadata) {
    // ex. "<active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (One time use).";
    return take(key, value);
  },
  //Broken Stopwatch
  '2421': function (key, value, stats, uniques, metadata) {
    // ex. "<unique>UNIQUE Passive:</unique> Is broken, but can still be upgraded.<br><br><rules>After breaking one Stopwatch, the shopkeeper will only sell you Broken Stopwatches.</rules>";
    return take(key, value);
  },
  //Slightly Magical Boots
  '2422': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed<br><br><unique>UNIQUE Passive:</unique> +10 Movement Speed<br><br>Boots that build from Slightly Magical Boots retain the +10 Movement Speed.";
    return take(key, value);
  },
  //Stopwatch
  '2423': function (key, value, stats, uniques, metadata) {
    // ex. "<active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (One time use).";
    return take(key, value);
  },
  //Broken Stopwatch
  '2424': function (key, value, stats, uniques, metadata) {
    // ex. "<unique>UNIQUE Passive:</unique> Is broken, but can still be upgraded.<br><br><rules>After breaking one Stopwatch, the shopkeeper will only sell you Broken Stopwatches.</rules>";
    return take(key, value);
  },
  //Abyssal Mask
  '3001': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+350 Health<br><mana>+300 Mana</mana><br>+55 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.<br><aura>UNIQUE Aura:</aura> Nearby enemy champions take 15% more magic damage.";
    return take(key, value);
  },
  //Archangel's Staff
  '3003': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50 Ability Power<br><mana>+650 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 1% of maximum Mana. Refunds 25% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +8 maximum Mana (max +750 Mana) for each Mana expenditure (occurs up to 3 times every 12 seconds).<br><br>Transforms into Seraph's Embrace at +750 Mana.</mana><br><br><groupLimit>Limited to 1 Tear item.</groupLimit>";
    return take(key, value);
  },
  //Manamune
  '3004': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+35 Attack Damage<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +5 maximum Mana (max +750 Mana) for each basic attack or Mana expenditure (occurs up to 3 times every 12 seconds).<br><br>Transforms into Muramana at +750 Mana.</mana><br><br><groupLimit>Limited to 1 Tear item.</groupLimit>";
    return take(key, value);
  },
  //Atma's Reckoning
  '3005': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+25 Attack Damage<br>+30 Armor<br>+30 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> For each second in combat with enemy champions, turrets, or epic monsters, gain Attack Damage equal to 0.5% of maximum health , up to 2.5% .";
    return take(key, value);
  },
  //Berserker's Greaves
  '3006': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><stats> +35% Attack Speed</stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed";
    return take(key, value);
  },
  //Archangel's Staff (Quick Charge)
  '3007': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50 Ability Power<br><mana>+650 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 1% of maximum Mana. Refunds 25% of Mana spent. <br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +12 maximum Mana (max +750 Mana) for each Mana expenditure (occurs up to 3 times every 12 seconds).<br><br>Transforms into Seraph's Embrace at +750 Mana.</mana>";
    return take(key, value);
  },
  //Manamune (Quick Charge)
  '3008': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+35 Attack Damage<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +6 maximum Mana (max +750 Mana) for each basic attack or Mana expenditure (occurs up to 3 times every 12 seconds).<br><br>Transforms into Muramana at +750 Mana.</mana>";
    return take(key, value);
  },
  //Boots of Swiftness
  '3009': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +55 Movement Speed<br><unique>UNIQUE Passive - Slow Resist:</unique> Movement slowing effects are reduced by 25%.";
    return take(key, value);
  },
  //Catalyst of Aeons
  '3010': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+225 Health<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. <br><br>Spending Mana restores 20% of the cost as Health, up to 15 per spell cast. <br><br><rules>(Toggled Spells heal for a maximum of 15 per second.)</rules>";
    return take(key, value);
  },
  //Sorcerer's Shoes
  '3020': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><stats>+18 <a href='FlatMagicPen'>Magic Penetration</a></stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed";
    return take(key, value);
  },
  //Frozen Mallet
  '3022': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+700 Health<br>+30 Attack Damage</stats><br><br><unique>UNIQUE Passive - Icy:</unique> Basic attacks slow the target's Movement Speed for 1.5 seconds on hit (40% slow for melee attacks, 20% slow for ranged attacks).";
    return take(key, value);
  },
  //Glacial Shroud
  '3024': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+20 Armor<br><mana>+250 Mana</mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction";
    return take(key, value);
  },
  //Iceborn Gauntlet
  '3025': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+65 Armor<br>+20% Cooldown Reduction<br><mana>+500 Mana</mana></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% of base Attack Damage in an area and creates an icy zone for 2 seconds that slows Movement Speed by 30% (1.5 second cooldown).<br><br>Size of zone increases with bonus armor.";
    return take(key, value);
  },
  //Guardian Angel
  '3026': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+45 Attack Damage<br>+40 Armor</stats><br><br><unique>UNIQUE Passive:</unique> Upon taking lethal damage, restores 50% of base Health and 30% of maximum Mana after 4 seconds of stasis (300 second cooldown).";
    return take(key, value);
  },
  //Rod of Ages
  '3027': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+300 Health<br><mana>+300 Mana</mana><br>+60 Ability Power</stats><br><br><passive>Passive:</passive> Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per minute (max 10 stacks).<br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.";
    return take(key, value);
  },
  //Chalice of Harmony
  '3028': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+30 Magic Resist<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Harmony:</unique> Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.";
    return take(key, value);
  },
  //Rod of Ages (Quick Charge)
  '3029': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+300 Health<br><mana>+300 Mana</mana><br>+60 Ability Power</stats><br><br><passive>Passive:</passive> Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per 40 seconds (max 10 stacks).<br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.";
    return take(key, value);
  },
  //Hextech GLP-800
  '3030': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+80 Ability Power<br><mana>+600 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><unique>UNIQUE Active - Frost Bolt:</unique> Fires a spray of icy bolts that explode on first unit hit, dealing <scaleLevel>100 - 200</scaleLevel> (+20% of your Ability Power) magic damage to all enemies hit. (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br> Enemies hit are slowed by 65% decaying over 2 second.";
    return take(key, value);
  },
  //Infinity Edge
  '3031': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+80 Attack Damage<br>+25% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical strikes deal 225% damage instead of 200%.";
    return take(key, value);
  },
  //Mortal Reminder
  '3033': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+45 Attack Damage</stats><br><br><unique>UNIQUE Passive - Last Whisper:</unique> +25% <a href='FlatArmorPen'>Armor Penetration</a><br><unique>UNIQUE Passive - Executioner:</unique> Physical damage inflicts <a href='GrievousWounds'>Grievous Wounds</a> on enemy champions for 5 seconds.";
    return take(key, value);
  },
  //Last Whisper
  '3035': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+20 Attack Damage</stats><br><br><unique>UNIQUE Passive - Last Whisper:</unique> +20% <a href='FlatArmorPen'>Armor Penetration</a>";
    return take(key, value);
  },
  //Lord Dominik's Regards
  '3036': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+45 Attack Damage</stats><br><br><unique>UNIQUE Passive - Last Whisper:</unique> +35% <a href='FlatArmorPen'>Armor Penetration</a>";
    return take(key, value);
  },
  //Seraph's Embrace
  '3040': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50 Ability Power<br><mana>+1400 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.</mana><br><active>UNIQUE Active - Mana Shield:</active> Consumes 15% of current Mana to grant a shield for 2 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).<br><br><groupLimit>Limited to 1 Tear item.</groupLimit>";
    return take(key, value);
  },
  //Mejai's Soulstealer
  '3041': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+20 Ability Power<br><mana>+200 Mana</mana></stats><br><br><unique>UNIQUE Passive - Dread:</unique> Grants +5 Ability Power per Glory. Grants 10% Movement Speed if you have at least 10 Glory.<br><unique>UNIQUE Passive - Do or Die:</unique> Grants 4 Glory for a champion kill or 2 Glory for an assist, up to 25 Glory total. Lose 10 stacks of Glory upon dying.";
    return take(key, value);
  },
  //Muramana
  '3042': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+35 Attack Damage<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.</mana><br><mana><unique>UNIQUE Passive - Shock:</unique> Single target spells and attacks (on hit) on <font color='#FFFFFF'>Champions</font> consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.<br><br>This effect only activates while you have greater than 20% maximum Mana.</mana><br><br><groupLimit>Limited to 1 Tear item.</groupLimit>";
    return take(key, value);
  },
  //Muramana
  '3043': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+35 Attack Damage<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.</mana><br><mana><unique>UNIQUE Passive - Shock:</unique> Single target spells and attacks (on hit) on <font color='#FFFFFF'>Champions</font> consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.<br><br>This effect only activates while you have greater than 20% maximum Mana.</mana><br><br><groupLimit>Limited to 1 Tear item.</groupLimit>";
    return take(key, value);
  },
  //Phage
  '3044': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+200 Health<br>+15 Attack Damage</stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.";
    return take(key, value);
  },
  //Phantom Dancer
  '3046': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+30% Attack Speed<br>+25% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Spectral Waltz:</unique> Basic attacking a champion grants ghosting and 7% Movement Speed for 2 seconds.<br><unique>UNIQUE Passive - Lifeline:</unique> If you would take damage that would reduce your Health below 30%, gain a shield that absorbs up to 240 - 600 damage for 2 seconds. (90 second cooldown)";
    return take(key, value);
  },
  //Ninja Tabi
  '3047': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><stats>+20 Armor</stats><br><br><unique>UNIQUE Passive:</unique> Blocks 12% of the damage from basic attacks.<br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed";
    return take(key, value);
  },
  //Seraph's Embrace
  '3048': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50 Ability Power<br><mana>+1400 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.</mana><br><active>UNIQUE Active - Mana Shield:</active> Consumes 15% of current Mana to grant a shield for 2 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).<br><br><groupLimit>Limited to 1 Tear item.</groupLimit>";
    return take(key, value);
  },
  //Zeke's Convergence
  '3050': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+60 Armor<br>+30 Magic Resist<br><mana>+250 Mana</mana><br>+10% Cooldown Reduction</stats><br><mainText><active>UNIQUE Active - Conduit:</active> Bind to an ally without an existing Conduit.<br><unique>UNIQUE Passive:</unique> Casting your ultimate near your ally surrounds you with a frost storm and ignites your ally's basic attacks for 10 seconds. Enemies inside your frost storm are slowed by 20% and your ally's attacks burn their target for 30% bonus magic damage over 2 seconds (45 second cooldown).<br><br><unlockedPassive>Frostfire Covenant:</unlockedPassive> Your frost storm ignites when it slows a burning enemy, dealing 40 magic damage per second and slowing by 40% instead for 3 seconds.</mainText><br><br><rules>(Champions can only be linked by one Zeke's Convergence at a time.)</rules>";
    return take(key, value);
  },
  //Jaurim's Fist
  '3052': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+15 Attack Damage<br>+200 Health</stats><br><br><unique>UNIQUE Passive:</unique> Killing a unit grants 5 maximum Health. This bonus stacks up to 20 times.";
    return take(key, value);
  },
  //Sterak's Gage
  '3053': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+450 Health</stats><br><br><unique>UNIQUE Passive - Giant Strength:</unique> Gain 50% of your Base Attack Damage as Bonus Attack Damage <br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking at least 400 to 1800 damage (based on level) within 5 seconds, gain a shield for 75% of your bonus Health. After 0.75 seconds, the shield decays over 3 seconds (60 second cooldown).<br><br><unlockedPassive>Sterak's Fury:</unlockedPassive> When <i>Lifeline</i> triggers, grow in size and strength, gaining +30% Tenacity for 8 seconds.";
    return take(key, value);
  },
  //Ohmwrecker
  '3056': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+300 Health<br>+50 Armor<br>+150% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active:</active> Prevents nearby enemy turrets from attacking for 3 seconds (120 second cooldown). This effect cannot be used against the same turret more than once every 8 seconds.<br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets (including fallen turrets) and Void Gates.";
    return take(key, value);
  },
  //Sheen
  '3057': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><mana>+250 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% base Attack Damage on hit (1.5 second cooldown).";
    return take(key, value);
  },
  //Spirit Visage
  '3065': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+450 Health<br>+55 Magic Resist<br>+100% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Increases all healing received by 30%.";
    return take(key, value);
  },
  //Kindlegem
  '3067': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+200 Health </stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction";
    return take(key, value);
  },
  //Sunfire Cape
  '3068': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+425 Health<br>+60 Armor </stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 25 (+1 per champion level) magic damage per second to nearby enemies. Deals 50% bonus damage to minions and monsters.";
    return take(key, value);
  },
  //Remnant of the Ascended
  '3069': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+200 Health<br>+10 Movement Speed<br>+125% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Enemy minions killed by your allies sometimes drop coins that grant <scaleMana>6%</scaleMana> missing mana (minimum 10). If there is an allied Champion nearby, sometimes the coins grant <gold>50</gold> gold instead. Cannon minions always drop coins.<hr><passive>QUEST:</passive> Earn 500 gold using this item.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br><rules><font color='#447777'>''Praise the sun.'' - Historian Shurelya, 22 September, 25 CLE</font></rules>";
    return take(key, value);
  },
  //Tear of the Goddess
  '3070': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Refunds 10% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants 4 maximum Mana on Mana expenditure (up to 3 times per 12 seconds).<br><br>Caps at +750 Mana.</mana><br><br><groupLimit>Limited to 1 Tear item.</groupLimit>";
    return take(key, value);
  },
  //The Black Cleaver
  '3071': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+400 Health<br>+40 Attack Damage<br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Dealing physical damage to an enemy champion Cleaves them, reducing their Armor by 4% for 6 seconds (stacks up to 6 times, up to 24%).<br><unique>UNIQUE Passive - Rage:</unique> Dealing physical damage grants 20 movement speed for 2 seconds. Assists on Cleaved enemy champions or kills on any unit grant 60 movement speed for 2 seconds instead. This Movement Speed is halved for ranged champions.";
    return take(key, value);
  },
  //The Bloodthirster
  '3072': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+80 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +20% Life Steal<br><unique>UNIQUE Passive:</unique> Your basic attacks can now overheal you. Excess life is stored as a shield that can block 50-350 damage, based on champion level.<br><br>This shield decays slowly if you haven't dealt or taken damage in the last 25 seconds.";
    return take(key, value);
  },
  //Tear of the Goddess (Quick Charge)
  '3073': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Refunds 10% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants 6 maximum Mana on Mana expenditure (up to 3 times per 12 seconds).<br><br>Caps at +750 Mana.</mana>";
    return take(key, value);
  },
  //Ravenous Hydra
  '3074': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+80 Attack Damage<br>+100% Base Health Regen <br>+12% Life Steal</stats><br><br><passive>Passive:</passive> 50% of total Life Steal applies to damage dealt by this item.<br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:</active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage) (10 second cooldown).";
    return take(key, value);
  },
  //Thornmail
  '3075': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+250 Health<br>+80 Armor</stats><br><br><unique>UNIQUE Passive - Thorns:</unique> Upon being hit by a basic attack, reflects magic damage equal to 10% of your bonus Armor plus 25, inflicting <a href='GrievousWounds'>Grievous Wounds</a> on the attacker for 3 second(s).<br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 second(s).";
    return take(key, value);
  },
  //Bramble Vest
  '3076': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+35 Armor</stats><br><br><unique>UNIQUE Passive - Thorns:</unique> Upon being hit by a basic attack, reflects magic damage equal to 3 plus 10% of your bonus Armor, inflicting <a href='GrievousWounds'>Grievous Wounds</a> on the attacker for 3 second(s).";
    return take(key, value);
  },
  //Tiamat
  '3077': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+25 Attack Damage<br>+50% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:</active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (enemies closest to the target take the most damage) (10 second cooldown).";
    return take(key, value);
  },
  //Trinity Force
  '3078': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+250 Health<br><mana>+250 Mana</mana><br>+25 Attack Damage<br>+40% Attack Speed<br>+20% Cooldown Reduction<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.<br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 200% of base Attack Damage on hit (1.5 second cooldown).";
    return take(key, value);
  },
  //Space Bloodthirster
  '3080': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+65 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +5% Life Steal<br><unique>UNIQUE Passive:</unique> Your basic attacks can now overheal you. Excess life is stored as a shield that can block 50-350 damage, based on champion level.<br><br>This shield decays slowly if you haven't dealt or taken damage in the last 25 seconds.";
    return take(key, value);
  },
  //Warden's Mail
  '3082': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40 Armor</stats><br><br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 seconds.";
    return take(key, value);
  },
  //Warmog's Armor
  '3083': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+800 Health<br>+200% Base Health Regen </stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Grants <unlockedPassive>Warmog's Heart</unlockedPassive> if you have at least 3000 maximum Health.<br><br><unlockedPassive>Warmog's Heart:</unlockedPassive> Restores 25% of maximum Health every 5 seconds if damage hasn't been taken within 6 seconds (3 seconds for damage from minions and monsters).";
    return take(key, value);
  },
  //Overlord's Bloodmail
  '3084': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+800 Health<br>+100% Base Health Regen </stats><br><br><unique>UNIQUE Passive:</unique> Upon champion kill or assist, restores 300 Health over 5 seconds.";
    return take(key, value);
  },
  //Runaan's Hurricane
  '3085': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40% Attack Speed<br>+25% Critical Strike Chance<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Wind's Fury:</unique> When basic attacking, bolts are fired at up to 2 enemies near the target, each dealing (40% of Attack Damage) physical damage. Bolts can critically strike and apply on hit effects.";
    return take(key, value);
  },
  //Zeal
  '3086': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+15% Attack Speed<br>+15% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> +5% Movement Speed";
    return take(key, value);
  },
  //Statikk Shiv
  '3087': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40% Attack Speed<br>+25% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Energized:</unique> Moving and attacking will make an attack <a href='Energized'>Energized</a>. Your Energized attacks deal <magicDamage>60~140 bonus magic damage</magicDamage> (based on level) on hit.<br><unique>UNIQUE Passive:</unique> Energized damage bounces to 5 targets and can critically strike.";
    return take(key, value);
  },
  //Rabadon's Deathcap
  '3089': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+120 Ability Power </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 40%.";
    return take(key, value);
  },
  //Wooglet's Witchcap
  '3090': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+100 Ability Power<br>+45 Armor </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 25%<br><active>UNIQUE Active:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).";
    return take(key, value);
  },
  //Wit's End
  '3091': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50% Attack Speed<br>+50 Magic Resist<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - At Wit's End:</unique> Deal <scaleLevel>15 - 80</scaleLevel> magic damage on hit. While below half health, heal for 33% of this effect's damage dealt - increased to 100% for Melee Champions.";
    return take(key, value);
  },
  //Remnant of the Watchers
  '3092': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+200 Health<br>+35 Ability Power<br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 18 additional magic damage per unique spell cast. If there is a nearby ally Champion, it also grants <gold>22</gold> Gold. This can occur up to 3 times every 30 seconds. Before quest completion, killing minions and non-epic monsters slows Tribute and gold generation.<hr><passive>QUEST:</passive> Earn 500 gold using this item.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Rapid Firecannon
  '3094': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+30% Attack Speed<br>+25% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Energized:</unique> Moving and attacking will make an attack <a href='Energized'>Energized</a>. Your Energized attacks deal <magicDamage>60~140 bonus magic damage</magicDamage> (based on level) on hit.<br><unique>UNIQUE Passive:</unique> Energized attacks gain 35% bonus Range (+150 range maximum).<br><br>Attacks become Energized 25% faster. Energized attacks function on structures.";
    return take(key, value);
  },
  //Stormrazor
  '3095': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+60 Attack Damage<br>+30% Attack Speed</stats><br><br><unique>UNIQUE Passive - Energized:</unique> Moving and attacking will make an attack <a href='Energized'>Energized</a>. Your Energized attacks deal <magicDamage>50 bonus magic damage</magicDamage> on hit.<br><unique>UNIQUE Passive:</unique> Energized effects have all of their respective effects increased by +35% and also slow for 40% movement speed decaying over 1.5 seconds.";
    return take(key, value);
  },
  //Nomad's Medallion
  '3096': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+10 Movement Speed<br>+50% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Enemy minions killed by your allies sometimes drop coins that grant <scaleMana>6%</scaleMana> missing mana (minimum 10). If there is an allied Champion nearby, sometimes the coins grant <gold>50</gold> gold instead. Cannon minions always drop coins.<hr><passive>QUEST:</passive> Earn 500 gold using this item.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 3 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br><rules><font color='#447777'>''The medallion shines with the glory of a thousand voices when exposed to the sun.'' - Historian Shurelya, 22 June, 24 CLE</font></rules>";
    return take(key, value);
  },
  //Targon's Brace
  '3097': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+125 Health<br>+50% Base Health Regen <br>+1 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 200 (+15 per level) Health. Killing a minion heals the owner and the nearest allied champion for 10 to 60 (based on missing health) and grants them kill Gold. 50% healing if the owner is ranged. These effects require a nearby ally. Recharges every 30 seconds. Max 3 charges.<hr><passive>QUEST:</passive> Earn 500 gold using this item.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 3 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Frostfang
  '3098': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+20 Ability Power<br>+2 Gold per 10 seconds<br><mana>+50% Base Mana Regen </mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 18 additional magic damage per unique spell cast. If there is a nearby ally Champion, it also grants <gold>22</gold> Gold. This can occur up to 3 times every 30 seconds. Before quest completion, killing minions and non-epic monsters slows Tribute and gold generation.<hr><passive>QUEST:</passive> Earn 500 gold using this item.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 3 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Lich Bane
  '3100': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+80 Ability Power<br>+7% Movement Speed<br>+10% Cooldown Reduction<br><mana>+250 Mana</mana></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals 75% Base Attack Damage (+50% of Ability Power) bonus magic damage on hit (1.5 second cooldown).";
    return take(key, value);
  },
  //Stinger
  '3101': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+35% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction";
    return take(key, value);
  },
  //Banshee's Veil
  '3102': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+75 Ability Power<br>+60 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Grants a spell shield that blocks the next enemy ability. This shield refreshes after no damage is taken from enemy champions for 40 seconds.";
    return take(key, value);
  },
  //Lord Van Damm's Pillager
  '3104': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+300 Health<br>+50 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Ashes to Ashes:</unique> Controlling the nearest Altar sets you aflame, dealing 25 (+1 per champion level) magic damage per second to nearby enemies (Deals 50% bonus damage to minions and monsters). Controlling the furthest Altar causes your basic attacks to burn targets for up to 114 true damage (based on champion level) over 3 seconds.";
    return take(key, value);
  },
  //Aegis of the Legion
  '3105': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+30 Armor<br>+30 Magic Resist</stats>";
    return take(key, value);
  },
  //Redemption
  '3107': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+200 Health<br>+50% Base Health Regen <br><mana>+150% Base Mana Regen </mana><br>+10% Cooldown Reduction</stats><br><br><passive>UNIQUE Passive:</passive> +10% Heal and Shield Power<br><active>UNIQUE Active:</active> Target an area within 5500 range. After 2.5 seconds, call down a beam of light to heal allies for 10 (+20 per level of target) Health, burn enemy champions for 10% of their maximum Health as <font color='#FFFFFF'>true</font> damage and deal 250 <font color='#FFFFFF'>true</font> damage to enemy minions (120 second cooldown). Heal and Shield Power is 3 times as effective on Redemption's heal.<br><br>Can be used while dead.<br><br><rules>Half effect if the target has been affected by another Redemption recently.</rules>";
    return take(key, value);
  },
  //Fiendish Codex
  '3108': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+35 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction";
    return take(key, value);
  },
  //Knight's Vow
  '3109': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+250 Health<br>+40 Armor<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active:</active> Designate an allied champion as your <a href='KnightsVowPartner'>Partner</a> (90 second cooldown).<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, gain +20 additional Armor and +15% Movement Speed towards them.<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, heal for 12% of the damage your <a href='KnightsVowPartner'>Partner</a> deals to champions and redirect 12% of the damage your <a href='KnightsVowPartner'>Partner</a> takes from champions to you as <font color='#FFFFFF'>true</font> damage (healing and damage redirection are reduced by 50% if you are ranged).<br><br><rules>(Champions can only be linked by one Knight's Vow at a time.)</rules>";
    return take(key, value);
  },
  //Frozen Heart
  '3110': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+100 Armor<br>+20% Cooldown Reduction<br><mana>+400 Mana</mana></stats><br><br><aura>UNIQUE Aura:</aura> Reduces the Attack Speed of nearby enemies by 15%.";
    return take(key, value);
  },
  //Mercury's Treads
  '3111': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><stats>+25 Magic Resist</stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed<br><unique>UNIQUE Passive - Tenacity:</unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 30%.";
    return take(key, value);
  },
  //Guardian's Orb
  '3112': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+150 Health<br>+35 Ability Power<br><mana>+10 Mana regen per 5 seconds</mana></stats><br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>";
    return take(key, value);
  },
  //Aether Wisp
  '3113': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+30 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +5% Movement Speed";
    return take(key, value);
  },
  //Forbidden Idol
  '3114': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> +5% Heal and Shield Power";
    return take(key, value);
  },
  //Nashor's Tooth
  '3115': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50% Attack Speed<br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +20% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Basic attacks deal 15 (+15% of Ability Power) bonus magic damage on hit.<br>";
    return take(key, value);
  },
  //Rylai's Crystal Scepter
  '3116': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+300 Health<br>+90 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Damaging spells and abilities reduce enemy movement speed by 20% for 1 second.";
    return take(key, value);
  },
  //Boots of Mobility
  '3117': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed. Increases to +115 Movement Speed when out of combat for 5 seconds.";
    return take(key, value);
  },
  //Space Knight's Vow
  '3118': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+250 Health<br>+40 Armor<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active:</active> Designate an allied champion as your <a href='KnightsVowPartner'>Partner</a> (90 second cooldown).<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, gain +20 additional Armor and +15% Movement Speed towards them.<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, heal for 3% of the damage your <a href='KnightsVowPartner'>Partner</a> deals to champions and redirect 12% of the damage your <a href='KnightsVowPartner'>Partner</a> takes from champions to you as <font color='#FFFFFF'>true</font> damage (healing and damage redirection are reduced by 50% if you are ranged).<br><br><rules>(Champions can only be linked by one Knight's Vow at a time.)</rules>";
    return take(key, value);
  },
  //Wicked Hatchet
  '3122': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+20 Attack Damage<br>+10% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical Strikes cause your target to bleed for an additional 60% of your bonus Attack Damage as magic damage over 3 seconds.";
    return take(key, value);
  },
  //Executioner's Calling
  '3123': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+15 Attack Damage</stats><br><br><unique>UNIQUE Passive - Executioner:</unique> Physical damage inflicts <a href='GrievousWounds'>Grievous Wounds</a> on enemy champions for 3 seconds.";
    return take(key, value);
  },
  //Guinsoo's Rageblade
  '3124': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+25 Attack Damage<br>+25 Ability Power<br>+25% Attack Speed</stats><br><br><passive>Passive: </passive>Basic attacks deal 15 magic damage on hit.<br><unique>UNIQUE Passive - Last Whisper:</unique> Gain 15% <a href='FlatArmorPen'>Armor Penetration</a>.<br><unique>UNIQUE Passive - Dissolve:</unique> Gain 15% <a href='TotalMagicPen'>Magic Penetration</a>.<br><unique>UNIQUE Passive:</unique> Basic attacks grant +8% Attack Speed for 5 seconds (up to 6 stacks). At max stacks, gain <unlockedPassive>Guinsoo's Rage</unlockedPassive>.<br><br><unlockedPassive>Guinsoo's Rage:</unlockedPassive> Every 3 basic attacks, trigger on hit effects twice.<br><br><rules><font color='#8c8c8c'>While at half stacks, melee champions' next attack will fully stack Rageblade.</font></rules>";
    return take(key, value);
  },
  //Deathfire Grasp
  '3128': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+120 Ability Power<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active:</active> Deals 15% of target champion's maximum Health in magic damage and increases all subsequent magic damage taken by the target by 20% for 4 seconds (90 second cooldown).";
    return take(key, value);
  },
  //Sword of the Divine
  '3131': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+25 Attack Damage<br>+25% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> +18 <a href='Lethality'>Lethality</a><br><active>UNIQUE Active:</active> Grants +100% Attack Speed and 100% Critical Strike Chance for 3 seconds or 3 critical strikes (90 second cooldown).";
    return take(key, value);
  },
  //Caulfield's Warhammer
  '3133': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+25 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction";
    return take(key, value);
  },
  //Serrated Dirk
  '3134': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+25 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +10 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive - Headhunter:</unique> After killing any enemy, your next damaging spell will deal 40 bonus physical damage (30 second cooldown).";
    return take(key, value);
  },
  //Void Staff
  '3135': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+70 Ability Power</stats><br><br><unique>UNIQUE Passive - Dissolve:</unique> +40% <a href='TotalMagicPen'>Magic Penetration</a>.";
    return take(key, value);
  },
  //Haunting Guise
  '3136': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+35 Ability Power<br>+200 Health</stats><br><br><unique>UNIQUE Passive - Madness:</unique> Deal 2% more damage for each second in combat with champions (10% maximum).";
    return take(key, value);
  },
  //Dervish Blade
  '3137': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50% Attack Speed<br>+45 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all debuffs, and if the champion is melee, also grants +50% bonus Movement Speed for 1 second (90 second cooldown).";
    return take(key, value);
  },
  //Mercurial Scimitar
  '3139': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50 Attack Damage<br>+35 Magic Resist<br>+10% Life Steal</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all crowd control debuffs and also grants +50% bonus Movement Speed for 1 second (90 second cooldown).";
    return take(key, value);
  },
  //Quicksilver Sash
  '3140': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+30 Magic Resist</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all crowd control debuffs (90 second cooldown).";
    return take(key, value);
  },
  //Youmuu's Ghostblade
  '3142': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+55 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> +18 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +40 Movement Speed out of Combat<br><active>UNIQUE Active:</active> Grants +20% Movement Speed for 6 seconds (45 second cooldown).";
    return take(key, value);
  },
  //Randuin's Omen
  '3143': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+400 Health<br>+60 Armor</stats><br><br><unique>UNIQUE Passive:</unique> -20% damage taken from basic attack critical strikes.<br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 second.<br><active>UNIQUE Active:</active> Slows the Movement Speed of nearby enemy units by 55% for 2 seconds (60 second cooldown).";
    return take(key, value);
  },
  //Bilgewater Cutlass
  '3144': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+25 Attack Damage<br>+10% Life Steal</stats><br><br><active>UNIQUE Active:</active> Deals 100 magic damage and slows the target champion's Movement Speed by 25% for 2 seconds (90 second cooldown).";
    return take(key, value);
  },
  //Hextech Revolver
  '3145': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40 Ability Power</stats><br><br><unique>UNIQUE Passive - Magic Bolt:</unique> Damaging an enemy champion with a basic attack shocks them for <scaleLevel>50 - 125</scaleLevel> bonus magic damage (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Magic Bolt's cooldown is reduced by Active Item cooldown reduction.<br><br><rules>(Damage scales based on level. Hextech effects can trigger other item spell effects.)</rules>";
    return take(key, value);
  },
  //Hextech Gunblade
  '3146': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40 Attack Damage<br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Heal for 15% of damage dealt. This is 33% as effective for Area of Effect damage.<br><active>UNIQUE Active - Lightning Bolt:</active> Deals <scaleLevel>175 - 253</scaleLevel> (+30% of Ability Power) magic damage and slows the target champion's Movement Speed by 40% for 2 seconds (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).";
    return take(key, value);
  },
  //Duskblade of Draktharr
  '3147': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+55 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> +21 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive - Blackout:</unique> When spotted by an enemy ward, reveal traps and disable wards around you for 8 seconds. Melee attacks instantly kill these devices. (90 second cooldown).<br><unique>UNIQUE Passive - Nightstalker:</unique> After being unseen for at least 1 second, your next basic attack against an enemy champion deals <scaleLevel>30 - 150</scaleLevel> bonus physical damage and slows them by 99% for 0.25 seconds. Ranged basic attacks do not apply the slow. (Lasts for 5 seconds after being seen by an enemy champion).";
    return take(key, value);
  },
  //Space Hextech Gunblade
  '3148': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40 Attack Damage<br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Heal for 4% of damage dealt. This is 33% as effective for Area of Effect damage.<br><active>UNIQUE Active - Lightning Bolt:</active> Deals <scaleLevel>175 - 253</scaleLevel> (+30% of Ability Power) magic damage and slows the target champion's Movement Speed by 40% for 2 seconds (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).";
    return take(key, value);
  },
  //Space Blade of the Ruined King
  '3149': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40 Attack Damage<br>+25% Attack Speed<br>+3% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 8% of the target's current Health as bonus physical damage on hit.<br><active>UNIQUE Active:</active> Deals 100 magic damage to target champion and steals 25% of their Movement Speed for 3 seconds (90 second cooldown).<br><br><rules>Minimum bonus physical damage dealt is 15.<br>Maximum bonus physical damage dealt to monsters and minions is 60.<br>User's Life Steal is applied to bonus physical damage dealt.</rules>";
    return take(key, value);
  },
  //Liandry's Torment
  '3151': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+75 Ability Power<br>+300 Health</stats><br><br><unique>UNIQUE Passive - Madness:</unique> Deal 2% more damage for each second in combat with champions (10% maximum).<br><unique>UNIQUE Passive - Torment:</unique> Spells burn enemies for 3 seconds, dealing bonus magic damage equal to 1.5% of their maximum Health per second. Burn damage is increased to 2.5% against <a href='MovementImpaired'>movement-impaired</a> units.";
    return take(key, value);
  },
  //Hextech Protobelt-01
  '3152': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+300 Health<br>+60 Ability Power<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Active - Fire Bolt:</unique> Dash forward and unleash a nova of fire bolts that deal <scaleLevel>75 - 150</scaleLevel> (+25% of your Ability Power) as magic damage (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Champions and Monsters hit by multiple fire bolts take 10% damage per additional bolt.<br><br><rules>(This dash cannot pass through terrain.)</rules>";
    return take(key, value);
  },
  //Blade of the Ruined King
  '3153': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40 Attack Damage<br>+25% Attack Speed<br>+12% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 8% of the target's current Health as bonus physical damage on hit.<br><active>UNIQUE Active:</active> Deals 100 magic damage to target champion and steals 25% of their Movement Speed for 3 seconds (90 second cooldown).<br><br><rules>Minimum bonus physical damage dealt is 15.<br>Maximum bonus physical damage dealt to monsters and minions is 60.<br>User's Life Steal is applied to bonus physical damage dealt.</rules>";
    return take(key, value);
  },
  //Hexdrinker
  '3155': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+20 Attack Damage<br>+35 Magic Resist</stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs 110 to 280 (based on level) magic damage for 5 seconds (90 second cooldown).";
    return take(key, value);
  },
  //Maw of Malmortius
  '3156': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50 Attack Damage<br>+50 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs up to 350 magic damage within 5 seconds (90 second cooldown).<br><unlockedPassive>Lifegrip:</unlockedPassive> When <i>Lifeline</i> triggers, gain +20 Attack Damage, +10% Spell Vamp and +10% Life Steal until out of combat.";
    return take(key, value);
  },
  //Zhonya's Hourglass
  '3157': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+75 Ability Power<br>+45 Armor<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).";
    return take(key, value);
  },
  //Ionian Boots of Lucidity
  '3158': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed<br><unique>UNIQUE Passive:</unique> Reduces Summoner Spell cooldowns by 10%<br><br><br><rules><font color='#FDD017'>''This item is dedicated in honor of Ionia's victory over Noxus in the Rematch for the Southern Provinces on 10 December, 20 CLE.''</font></rules>";
    return take(key, value);
  },
  //Spear of Shojin
  '3161': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+60 Attack Damage<br>+250 Health<br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> After you cast your ultimate, your next basic attack within 10 seconds grants <unlockedPassive>Awakened Dragon</unlockedPassive> for 6 seconds (30 second cooldown).<br><br><unlockedPassive>Awakened Dragon:</unlockedPassive> Gain 50% attack speed, and basic attacks refund 20% of your remaining non-ultimate cooldowns.";
    return take(key, value);
  },
  //Space Bilgewater Cutlass
  '3162': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+25 Attack Damage<br>+2.5% Life Steal</stats><br><br><active>UNIQUE Active:</active> Deals 100 magic damage and slows the target champion's Movement Speed by 25% for 2 seconds (90 second cooldown).";
    return take(key, value);
  },
  //Space Maw of Malmortius
  '3163': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50 Attack Damage<br>+50 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs up to 350 magic damage within 5 seconds (90 second cooldown).<br><unlockedPassive>Lifegrip:</unlockedPassive> When <i>Lifeline</i> triggers, gain +20 Attack Damage, +2.5% Spell Vamp and +2.5% Life Steal until out of combat.";
    return take(key, value);
  },
  //Morellonomicon
  '3165': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+70 Ability Power<br>+300 Health</stats><br><br><unique>UNIQUE Passive - Touch of Death:</unique> +15 <a href='FlatMagicPen'>Magic Penetration</a><br><unique>UNIQUE Passive - Cursed Strike:</unique> Magic damage dealt to champions inflicts them with <a href='GrievousWounds'>Grievous Wounds</a> for 3 seconds.";
    return take(key, value);
  },
  //Moonflair Spellblade
  '3170': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50 Ability Power<br>+50 Armor<br>+50 Magic Resist</stats><br><br><unique>UNIQUE Passive - Tenacity:</unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%.";
    return take(key, value);
  },
  //Zephyr
  '3172': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50 Attack Damage<br>+40% Attack Speed<br>+10% Movement Speed</stats><br><br><unique>UNIQUE Passive - Tenacity:</unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%.";
    return take(key, value);
  },
  //Space Boots of Lucidity
  '3173': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed<br><br><rules><font color='#FDD017'>''This item is dedicated to space.''</font></rules>";
    return take(key, value);
  },
  //Athene's Unholy Grail
  '3174': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+30 Ability Power<br>+30 Magic Resist<br>+10% Cooldown Reduction<br><mana>+100% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> Gain 35% of the <a href='premitigation'><font color='#6666FF'><u>premitigation</u></font></a> damage dealt to champions as Blood Charges, up to <scaleLevel>100 - 250</scaleLevel> max. Healing or shielding another ally consumes charges equal to 100% of the heal or shield value, healing the ally for that amount.<br><unique>UNIQUE Passive - Dissonance:</unique> Grants 5 ability power per 25% Base Mana Regen you have. Disables <unique>Harmony</unique> on your other items.<br><br><rules>(Maximum amount of Blood Charges stored is based on level. Healing amplification is applied to the total heal value.)</rules>";
    return take(key, value);
  },
  //Head of Kha'Zix
  '3175': function (key, value, stats, uniques, metadata) {
    // ex. "<unique>UNIQUE Active - Bonetooth Totem:</unique> Places a Stealth Ward that lasts 180 seconds (90 Second cooldown). Limit 3 Stealth Wards on the map per player.<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Rengar gains the movement speed bonus of Thrill of the Hunt while he is stealthed.";
    return take(key, value);
  },
  //Sanguine Blade
  '3181': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+45 Attack Damage<br>+10% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks grant +6 Attack Damage and +1% Life Steal for 8 seconds on hit (effect stacks up to 5 times).";
    return take(key, value);
  },
  //Guardian's Hammer
  '3184': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+150 Health<br>+20 Attack Damage<br>+10% Life Steal</stats><br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>";
    return take(key, value);
  },
  //The Lightbringer
  '3185': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+30 Attack Damage<br>+30% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical Strikes cause enemies to bleed for an additional 90% of bonus Attack Damage as magic damage over 3 seconds and reveal them for the duration.<br><unique>UNIQUE Passive - Trap Detection:</unique> Nearby stealthed enemy traps are revealed.<br><active>UNIQUE Active - Hunter's Sight:</active> A stealth-detecting mist grants vision in the target area for 5 seconds, revealing enemy champions that enter for 3 seconds (60 second cooldown).";
    return take(key, value);
  },
  //Arcane Sweeper
  '3187': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+225 Health<br>+250 Mana<br>+25 Armor<br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Trap Detection:</unique> Grants <font color='#ee91d7'>True Sight</font> of nearby enemy traps.<br><active>UNIQUE Active - Hunter's Sight:</active> An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions in the area for 3 seconds (60 second cooldown).";
    return take(key, value);
  },
  //Locket of the Iron Solari
  '3190': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+30 Armor<br>+60 Magic Resist</stats><br><br><active>UNIQUE Active:</active> Grants a decaying shield to nearby allied champions for 2.5 seconds that absorbs up to 30 (+15 per level) <scaleHealth>(+20% of your bonus health)</scaleHealth> damage (120 second cooldown).<br><br><rules>Shield per level uses the higher of your level or the target's level.<br>Shield ratio scales with your level.<br>Shield amount is reduced to 25% if the target has been affected by another Locket of the Iron Solari in the last 20 seconds.</rules>";
    return take(key, value);
  },
  //Seeker's Armguard
  '3191': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+30 Armor<br>+20 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Killing a unit grants 0.5 bonus Armor and Ability Power. This bonus stacks up to 30 times.";
    return take(key, value);
  },
  //Gargoyle Stoneplate
  '3193': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40 Armor<br>+40 Magic Resist</stats><br><br><unique>UNIQUE Passive - Stone Skin:</unique> If 3+ enemy champions are nearby, grants 40 bonus Armor and Magic Resist.<br><active>UNIQUE Active - Metallicize:</active> Increases Health by 40% and increases champion size, but reduces damage dealt by 60% for 4 seconds (90 second cooldown). If Stone Skin is active, the Health increase becomes 100% instead.";
    return take(key, value);
  },
  //Adaptive Helm
  '3194': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+350 Health<br>+55 Magic Resist<br>+100% Base Health Regeneration <br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Taking magic damage from a spell or effect reduces all subsequent magic damage from that same spell or effect by 20% for 4 seconds.";
    return take(key, value);
  },
  //The Hex Core mk-1
  '3196': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+3 Ability Power per level<br>+15 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> Viktor can upgrade one of his basic spells.";
    return take(key, value);
  },
  //The Hex Core mk-2
  '3197': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+6 Ability Power per level<br>+20 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> Viktor can upgrade one of his basic spells.";
    return take(key, value);
  },
  //Perfect Hex Core
  '3198': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+10 Ability Power per level<br>+25 Mana per level</stats><br><br><unique>UNIQUE Passive - Glorious Evolution:</unique> Viktor has reached the pinnacle of his power, upgrading Chaos Storm in addition to his basic spells.";
    return take(key, value);
  },
  //Prototype Hex Core
  '3200': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+1 Ability Power per level<br>+10 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> This item can be upgraded three times to enhance Viktor's basic abilities.";
    return take(key, value);
  },
  //Spectre's Cowl
  '3211': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+250 Health<br>+25 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> Grants 150% Base Health Regen for up to 10 seconds after taking damage from an enemy champion.";
    return take(key, value);
  },
  //Mikael's Crucible
  '3222': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40 Magic Resist<br>+10% Cooldown Reduction<br><mana>+100% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +20% Heal and Shield Power<br><unique>UNIQUE Passive - Harmony:</unique> Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.<br><active>UNIQUE Active:</active> Cleanses all stuns, roots, taunts, fears, silences, and slows on an allied champion and grants them slow immunity for 2 seconds (120 second cooldown). <br><br>Cleansing an effect grants the ally 40% movement speed for 2 seconds.";
    return take(key, value);
  },
  //Space Ravenous Hydra
  '3230': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+80 Attack Damage<br>+100% Base Health Regen <br>+3% Life Steal</stats><br><br><passive>Passive:</passive> 50% of total Life Steal applies to damage dealt by this item.<br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:</active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage) (10 second cooldown).";
    return take(key, value);
  },
  //Space Mercurial Scimitar
  '3231': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50 Attack Damage<br>+35 Magic Resist<br>+2.5% Life Steal</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all crowd control debuffs and also grants +50% bonus Movement Speed for 1 second (90 second cooldown).";
    return take(key, value);
  },
  //Luden's Echo
  '3285': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+90 Ability Power<br><mana>+600 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 100 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.";
    return take(key, value);
  },
  //Ancient Coin
  '3301': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+5 Movement Speed<br>+5% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Enemy minions killed by your allies sometimes drop coins that grant <scaleMana>6%</scaleMana> missing mana (minimum 10). If there is an allied Champion nearby, sometimes the coins grant <gold>28</gold> gold instead. Cannon minions always drop coins.<hr><passive>QUEST:</passive> Earn 500 gold using this item and upgrade to <font color='#CFBF84'>Nomad's Medallion</font>.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 3 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br><i><font color='#447777'>''Gold dust rises from the desert and clings to the coin.'' - Historian Shurelya, 11 November, 23 CLE</font></i>";
    return take(key, value);
  },
  //Relic Shield
  '3302': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50 Health<br>+1 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 195 (+5 per level) Health. Killing a minion heals the owner and the nearest allied champion for 5 to 30 (based on missing health) and grants them kill Gold. 50% healing if the owner is ranged. These effects require a nearby ally. Recharges every 40 seconds. Max 2 charges.<hr><passive>QUEST:</passive> Earn 500 gold using this item and upgrade to <font color='#CFBF84'>Targon's Brace</font>.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 3 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Spellthief's Edge
  '3303': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+10 Ability Power<br>+2 Gold per 10 seconds<br><mana>+25% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 13 additional magic damage per unique spell cast. If there is a nearby ally Champion, it also grants <gold>11</gold> Gold. This can occur up to 3 times every 30 seconds. Before quest completion, killing minions and non-epic monsters slows Tribute and gold generation.<hr><passive>QUEST:</passive> Earn 500 gold using this item and upgrade to <font color='#CFBF84'>Frostfang</font>.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 3 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Timeworn Ancient Coin
  '3304': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+5 Movement Speed<br>+5% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Enemy minions killed by your allies sometimes drop coins that grant <scaleMana>6%</scaleMana> missing mana (minimum 10). If there is an allied Champion nearby, sometimes the coins grant <gold>28</gold> gold instead. Cannon minions always drop coins.<hr><passive>QUEST:</passive> Earn 750 gold using this item and upgrade to <font color='#CFBF84'>Timeworn Nomad's Medallion</font>.<br><passive>REWARD:</passive> <font color='#CFBF84'>Favor</font> is upgraded to <font color='#CFBF84'><a href='coinlinequestreward'>Emperor's Favor</a></font> and allied champions moving toward you gain 8% movement speed.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br><i><font color='#447777'>''Gold dust rises from the desert and clings to the coin.'' - Historian Shurelya, 11 November, 23 CLE</font></i>";
    return take(key, value);
  },
  //Timeworn Nomad's Medallion
  '3305': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+10 Movement Speed<br>+50% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Enemy minions killed by your allies sometimes drop coins that grant <scaleMana>6%</scaleMana> missing mana (minimum 10). If there is an allied Champion nearby, sometimes the coins grant <gold>50</gold> gold instead. Cannon minions always drop coins.<hr><passive>QUEST:</passive> Earn 750 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Favor</font> is upgraded to <font color='#CFBF84'><a href='coinlinequestreward'>Emperor's Favor</a></font> and allied champions moving toward you gain 8% movement speed.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br><rules><font color='#447777'>''The medallion shines with the glory of a thousand voices when exposed to the sun.'' - Historian Shurelya, 22 June, 24 CLE</font></rules>";
    return take(key, value);
  },
  //Timeworn Talisman of Ascension
  '3306': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+10 Movement Speed<br>+45 Armor<br>+175% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.<br><unique>UNIQUE Passive - Favor:</unique> Enemy minions killed by your allies sometimes drop coins that grant <scaleMana>6%</scaleMana> missing mana (minimum 10). If there is an allied Champion nearby, sometimes the coins grant <gold>50</gold> gold instead. Cannon minions always drop coins.<br><active>UNIQUE Active:</active> Grants nearby allies +@Effect5Amount*100@% Movement Speed for @Effect6Amount@ seconds (60 second cooldown).<hr><passive>QUEST:</passive> Earn 750 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Favor</font> is upgraded to <font color='#CFBF84'><a href='coinlinequestreward'>Emperor's Favor</a></font> and allied champions moving toward you gain 8% movement speed.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br><rules><font color='#447777'>''Praise the sun.'' - Historian Shurelya, 22 September, 25 CLE</font></rules>";
    return take(key, value);
  },
  //Timeworn Relic Shield
  '3307': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50 Health<br>+2 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 195 (+5 per level) Health. Killing a minion heals the owner and the nearest allied champion for 5 to 30 (based on missing health) and grants them kill Gold. Healing is halved if the owner is ranged. These effects require a nearby ally. Recharges every 40 seconds. Max 2 charges.<hr><passive>QUEST:</passive> Earn 750 gold using this item and upgrade to <font color='#CFBF84'>Timeworn Targon's Brace</font>.<br><passive>REWARD:</passive> <font color='#CFBF84'>Shield Battery</font>, a permanent shield that regenerates slowly outside of combat.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Timeworn Targon's Brace
  '3308': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+125 Health<br>+50% Base Health Regen <br>+4 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 200 (+10 per level) Health. Killing a minion heals the owner and the nearest allied champion for 10 to 60 (based on missing health) and grants them kill Gold. Healing is halved if the owner is ranged. These effects require a nearby ally. Recharges every 30 seconds. Max 3 charges.<hr><passive>QUEST:</passive> Earn 750 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Shield Battery</font>, a permanent shield that regenerates slowly outside of combat.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Timeworn Face of the Mountain
  '3309': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+350 Health<br>+100% Base Health Regen <br>+10% Cooldown Reduction<br>+4 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 320 (+20 per level) Health. Killing a minion heals the owner and the nearest allied champion for 15 to 90 (based on missing health) and grants them kill Gold. Healing is halved if the owner is ranged. These effects require a nearby ally. Recharges every 20 seconds. Max 4 charges.<br><unique>UNIQUE Active:</unique> Grant a shield to you and an ally equal to 10% of your maximum Health for 4 seconds. After 4 seconds, the shields explode to slow nearby enemies by 40% for 2 seconds (60 second cooldown). Automatically targets the most wounded ally if cast upon self.<hr><passive>QUEST:</passive> Earn 750 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Shield Battery</font>, a permanent shield that regenerates slowly outside of combat.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Timeworn Spellthief's Edge
  '3310': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+10 Ability Power<br>+2 Gold per 10 seconds<br><mana>+25% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 13 additional magic damage per unique spell cast. If there is a nearby ally Champion, it also grants <gold>11</gold> Gold. This can occur up to 3 times every 30 seconds. Before quest completion, killing minions and non-epic monsters slows Tribute and gold generation.<hr><passive>QUEST:</passive> Earn 750 gold using this item and upgrade to <font color='#CFBF84'>Timeworn Frostfang</font>.<br><passive>REWARD:</passive> <font color='#CFBF84'>Tribute</font> is upgraded into <font color='#CFBF84'><a href='frostqueenslinequestreward'>Queen's Tribute</a></font>.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Timeworn Frostfang
  '3311': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+20 Ability Power<br>+2 Gold per 10 seconds<br><mana>+50% Base Mana Regen </mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 18 additional magic damage per unique spell cast. If there is a nearby ally Champion, it also grants <gold>22</gold> Gold. This can occur up to 3 times every 30 seconds. Before quest completion, killing minions and non-epic monsters slows Tribute and gold generation.<hr><passive>QUEST:</passive> Earn 750 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Tribute</font> is upgraded into <font color='#CFBF84'><a href='frostqueenslinequestreward'>Queen's Tribute</a></font>.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Timeworn Frost Queen's Claim
  '3312': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+60 Ability Power<br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 18 additional magic damage per unique spell cast. If there is a nearby ally Champion, it also grants <gold>22</gold> Gold. This can occur up to 3 times every 30 seconds. Before quest completion, killing minions and non-epic monsters slows Tribute and gold generation.<br><active>UNIQUE Active:</active> Summon 2 icy ghosts for 6 seconds that seek out nearby enemy champions. Ghosts reveal enemies on contact and slow them by 40% for between 2 and 5 seconds based on how far the ghosts have traveled (90 second cooldown).<hr><passive>QUEST:</passive> Earn 750 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Tribute</font> is upgraded into <font color='#CFBF84'><a href='frostqueenslinequestreward'>Queen's Tribute</a></font>.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Warding Totem (Trinket)
  '3340': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Consume a charge to place an invisible <font color='#BBFFFF'>Stealth Ward</font> which reveals the surrounding area for <scaleLevel>90 - 120</scaleLevel> seconds. <br><br>Stores one charge every <scaleLevel>240 - 120</scaleLevel> seconds, up to 2 maximum charges.<br><br>Ward duration and recharge time gradually improve with level.<br><br><rules>(Limit 3 <font color='#BBFFFF'>Stealth Wards</font> on the map per player.)</rules>";
    return take(key, value);
  },
  //Soul Anchor (Trinket)
  '3345': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Consumes a charge to instantly revive at your Summoner Platform and grants 125% Movement Speed that decays over 12 seconds.<br><br><rules>Additional charges are gained at levels 9 and 14.</rules><br><br><font color='#BBFFFF'>(Max: 2 charges)</font><br><br>";
    return take(key, value);
  },
  //Arcane Sweeper
  '3348': function (key, value, stats, uniques, metadata) {
    // ex. "<active>UNIQUE Active - Hunter's Sight:</active> An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions and granting <font color='#ee91d7'>True Sight</font> of traps in the area for 3 seconds (90 second cooldown).";
    return take(key, value);
  },
  //Greater Stealth Totem (Trinket)
  '3361': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 Trinket.</groupLimit><levelLimit> *Level 9+ required to upgrade.</levelLimit><stats></stats><br><br><unique>UNIQUE Active:</unique> Consume a charge to place an invisible ward that reveals the surrounding area for 180 seconds. Stores a charge every 60 seconds, up to 2 total. Limit 3 <font color='#BBFFFF'>Stealth Wards</font> on the map per player.<br><br><rules>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).</rules>";
    return take(key, value);
  },
  //Greater Vision Totem (Trinket)
  '3362': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 Trinket.</groupLimit><levelLimit> *Level 9+ required to upgrade.</levelLimit><stats></stats><br><br><unique>UNIQUE Active:</unique> Places a visible ward that reveals the surrounding area and invisible units in the area until killed (120 second cooldown). Limit 1 <font color='#BBFFFF'>Vision Ward</font> on the map per player.<br><br><rules>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).</rules>";
    return take(key, value);
  },
  //Farsight Alteration
  '3363': function (key, value, stats, uniques, metadata) {
    // TODO Fix stats for this item.
    // ex. "<levelLimit>Level 9+ required to upgrade.</levelLimit><br><groupLimit>Limited to 1 Trinket.</groupLimit><br><br>Alters the <font color='#FFFFFF'>Warding Totem</font> Trinket:<br><br><stats><font color='#00FF00'>+</font> Massively increased cast range (+650%)<br><font color='#00FF00'>+</font> Infinite duration and does not count towards ward limit<br><font color='#FF0000'>-</font> <font color='#FF6600'>10% increased cooldown</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>Ward is visible, fragile, untargetable by allies</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>45% reduced ward vision radius</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>Cannot store charges</font></stats>";
    return take(key, value);
  },
  //Oracle Lens
  '3364': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Scans around you, warning against hidden hostile units, and revealing invisible traps and revealing / disabling nearby wards for 10 seconds (90 to 60 second cooldown).";
    return take(key, value);
  },
  //Molten Edge
  '3371': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><font color='#FFFFFF'>+110 Attack Damage</font><br>+25% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical strikes deal 225% damage instead of 200%.";
    return take(key, value);
  },
  //Forgefire Cape
  '3373': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><font color='#FFFFFF'>+750 Health</font><br><font color='#FFFFFF'>+100 Armor</font></stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 25 (+1 per champion level) magic damage per second to nearby enemies. Deals 50% bonus damage to minions and monsters.";
    return take(key, value);
  },
  //Rabadon's Deathcrown
  '3374': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><font color='#FFFFFF'>+175 Ability Power</font> </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 40%.";
    return take(key, value);
  },
  //Infernal Mask
  '3379': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><font color='#FFFFFF'>+750 Health</font><br><mana>+300 Mana</mana><br><font color='#FFFFFF'>+100 Magic Resist</font><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.<br><aura>UNIQUE Aura:</aura> Nearby enemy champions take 15% more magic damage.";
    return take(key, value);
  },
  //The Obsidian Cleaver
  '3380': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><font color='#FFFFFF'>+550 Health</font><br><font color='#FFFFFF'>+60 Attack Damage</font><br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Dealing physical damage to an enemy champion Cleaves them, reducing their Armor by 4% for 6 seconds (stacks up to 6 times, up to 24%).<br><unique>UNIQUE Passive - Rage:</unique> Dealing physical damage grants 20 movement speed for 2 seconds. Assists on Cleaved enemy champions or kills on any unit grant 60 movement speed for 2 seconds instead. This Movement Speed is halved for ranged champions.";
    return take(key, value);
  },
  //Salvation
  '3382': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><font color='#FFFFFF'>+300 Health</font><br><font color='#FFFFFF'>+150% Base Health Regen </font><br><font color='#FFFFFF'>+200% Base Mana Regen </font><br>+10% Cooldown Reduction</stats><br><br><passive>UNIQUE Passive:</passive> +10% Heal and Shield Power<br><active>UNIQUE Active:</active> Target an area within 5500 range. After 2.5 seconds, call down a beam of light to heal allies for 10 (+20 per level of target) Health, burn enemy champions for 10% of their maximum Health as <font color='#FFFFFF'>true</font> damage and deal 250 <font color='#FFFFFF'>true</font> damage to enemy minions (120 second cooldown). Heal and Shield Power is 3 times as effective on Salvation's heal.<br><br>Can be used while dead.<br><br><rules>Half effect if the target has been affected by Redemption recently.</rules>";
    return take(key, value);
  },
  //Circlet of the Iron Solari
  '3383': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><font color='#FFFFFF'>+45 Armor</font><br><font color='#FFFFFF'>+75 Magic Resist</font></stats><br><br><active>UNIQUE Active:</active> Grants a decaying shield to nearby allied champions for 2.5 seconds that absorbs up to 30 (+15 per level) <scaleHealth>(+20% of your bonus health)</scaleHealth> damage (120 second cooldown).<br><br><rules>Shield per level uses the higher of your level or the target's level.<br>Shield ratio scales with your level.<br>Shield amount is reduced to 25% if the target has been affected by another Locket of the Iron Solari in the last 20 seconds.</rules>";
    return take(key, value);
  },
  //Trinity Fusion
  '3384': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><font color='#FFFFFF'>+350 Health</font><br><font color='#FFFFFF'><mana>+350 Mana</mana></font><br><font color='#FFFFFF'>+35 Attack Damage</font><br><font color='#FFFFFF'>+50% Attack Speed</font><br>+20% Cooldown Reduction<br><font color='#FFFFFF'>+8% Movement Speed</font></stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.<br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 200% of base Attack Damage on hit (1.5 second cooldown).";
    return take(key, value);
  },
  //Wooglet's Witchcrown
  '3385': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><font color='#FFFFFF'>+155 Ability Power</font><br>+45 Armor </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 25%<br><active>UNIQUE Active:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).";
    return take(key, value);
  },
  //Zhonya's Paradox
  '3386': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><font color='#FFFFFF'>+100 Ability Power</font><br><font color='#FFFFFF'>+60 Armor</font><br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).";
    return take(key, value);
  },
  //Frozen Fist
  '3387': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><font color='#FFFFFF'>+125 Armor</font><br>+20% Cooldown Reduction<br><font color='#FFFFFF'>+700 Mana</font></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% of base Attack Damage in an area and creates an icy zone for 2 seconds that slows Movement Speed by 30% (1.5 second cooldown).<br><br>Size of zone increases with bonus armor.";
    return take(key, value);
  },
  //Youmuu's Wraithblade
  '3388': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><font color='#FFFFFF'>+75 Attack Damage</font><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> <font color='#FFFFFF'>+25 <a href='Lethality'>Lethality</a></font><br><unique>UNIQUE Passive:</unique> +40 Movement Speed out of Combat<br><active>UNIQUE Active:</active> Grants +20% Movement Speed for 6 seconds (45 second cooldown).";
    return take(key, value);
  },
  //Might of the Ruined King
  '3389': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><font color='#FFFFFF'>+55 Attack Damage</font><br><font color='#FFFFFF'>+40% Attack Speed</font><br>+12% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 8% of the target's current Health as bonus physical damage on hit.<br><active>UNIQUE Active:</active> Deals 100 magic damage to target champion and steals 25% of their Movement Speed for 3 seconds (90 second cooldown).<br><br><rules>Minimum bonus physical damage dealt is 15.<br>Maximum bonus physical damage dealt to monsters and minions is 60.<br>User's Life Steal is applied to bonus physical damage dealt.</rules>";
    return take(key, value);
  },
  //Luden's Pulse
  '3390': function (key, value, stats, uniques, metadata) {
    // ex. "<stats><font color='#FFFFFF'>+120 Ability Power</font><br><mana><font color='#FFFFFF'>+850 Mana</font></mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Haste:</unique> This item gains an additional 10% Cooldown Reduction.<br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 100 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.";
    return take(key, value);
  },
  //'Your Cut'
  '3400': function (key, value, stats, uniques, metadata) {
    // ex. "<spellPassive>Click to Consume:</spellPassive> Gain <gold>Gold</gold>!";
    return take(key, value);
  },
  //Remnant of the Aspect
  '3401': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+350 Health<br>+200% Base Health Regen <br>+10% Cooldown Reduction<br>+1 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 320 (+30 per level) Health. Killing a minion heals the owner and the nearest allied champion for 15 to 90 (based on missing health) and grants them kill Gold. 50% healing if the owner is ranged. These effects require a nearby ally. Recharges every 20 seconds. Max 4 charges.<hr><passive>QUEST:</passive> Earn 500 gold using this item.<br><passive>REWARD:</passive> Gain <active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit>";
    return take(key, value);
  },
  //Head of Kha'Zix
  '3410': function (key, value, stats, uniques, metadata) {
    // ex. "<unique>UNIQUE Active - Sweeping Lens:</unique> Reveals and disables nearby invisible traps and invisible wards for 6 seconds in a medium radius and grants detection of invisible units for 10 seconds (60 second cooldown).<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.";
    return take(key, value);
  },
  //Head of Kha'Zix
  '3416': function (key, value, stats, uniques, metadata) {
    // ex. "<unique>UNIQUE Active - Scrying:</unique> Reveals a small location within 4000 range for 2 seconds. Enemy champions found will be revealed for 5 seconds (90 second cooldown).<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.";
    return take(key, value);
  },
  //Head of Kha'Zix
  '3422': function (key, value, stats, uniques, metadata) {
    // ex. "<unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.";
    return take(key, value);
  },
  //Head of Kha'Zix
  '3455': function (key, value, stats, uniques, metadata) {
    // ex. "<unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.";
    return take(key, value);
  },
  //Golden Transcendence
  '3460': function (key, value, stats, uniques, metadata) {
    // ex. "<unique>Active:</unique> Use this trinket to teleport to one of the battle platforms. Can only be used from the summoning platform.<br><br><i><font color='#FDD017'>''It is at this magical precipice where a champion is dismantled, reforged, and empowered.''</font></i>";
    return take(key, value);
  },
  //Golden Transcendence (Disabled)
  '3461': function (key, value, stats, uniques, metadata) {
    // ex. "<unique>Active:</unique> Use this trinket to teleport to one of the battle platforms. Can only be used from the summoning platform.<br><br><i><font color='#FDD017'>''It is at this magical precipice where a champion is dismantled, reforged, and empowered.''</font></i>";
    return take(key, value);
  },
  //Seer Stone (Trinket)
  '3462': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Reveals a small area within <font color='#FFFFF'>2500</font> range for 3 seconds. Enemy champions will be revealed for 5 seconds (60 second cooldown)";
    return take(key, value);
  },
  //Ardent Censer
  '3504': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+60 Ability Power<br>+10% Cooldown Reduction<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Heal and Shield Power<br><unique>UNIQUE Passive:</unique> +8% Movement Speed<br><unique>UNIQUE Passive:</unique> Whenever you heal or shield an ally, you and your ally gain 10% - 30% Attack Speed and your attacks deal an additional 5 - 20 on-hit magic damage for 6 seconds. <br><br><rules>This does not include regeneration effects. Bonus effects are based on target's level.</rules>";
    return take(key, value);
  },
  //Essence Reaver
  '3508': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+70 Attack Damage<br>+25% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> +20% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Basic attacks refund 1.5% of your missing mana.";
    return take(key, value);
  },
  //Zz'Rot Portal
  '3512': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+55 Armor<br>+55 Magic Resist<br>+125% Base Health Regen <br></stats><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.<br><active>UNIQUE Active:</active> Spawns a <a href='VoidGate'>Void Gate</a> for 120 seconds (120 second cooldown).<br><br>Every 4 seconds the gate makes a <a href='Voidspawn'>Voidspawn</a>. The first and every fourth Voidspawn gains 15% of maximum Health as damage.";
    return take(key, value);
  },
  //Eye of the Herald
  '3513': function (key, value, stats, uniques, metadata) {
    // ex. "<br><unique>UNIQUE Passive - Glimpse of the Void:</unique> The holder of the Eye of the Herald has Empowered Recall.<br><br><active>UNIQUE Active:</active> Channel for 3.5 seconds to crush the Eye of the Herald, summoning the Rift Herald to siege enemy turrets.<br><br>The Eye of the Herald will be lost to the Void if not used within 240 seconds.";
    return take(key, value);
  },
  //Eye of the Herald
  '3514': function (key, value, stats, uniques, metadata) {
    // ex. "<br><unique>UNIQUE Passive - Glimpse of the Void:</unique> The holder of the Eye of the Herald has Empowered Recall.<br><br><active>UNIQUE Active:</active> Channel for 3.5 seconds to crush the Eye of the Herald, summoning the Rift Herald to siege enemy turrets.<br><br>The Eye of the Herald will be lost to the Void if not used within 240 seconds.";
    return take(key, value);
  },
  //Ghost Poro
  '3520': function (key, value, stats, uniques, metadata) {
    // ex. "<subtitleLeft><font color='#FFFFFF'>(Trinket)</font></subtitleLeft><br><mainText><active>Active:</active> Command your Ghost Poro to stay in a brush. Gain additional stats if you or your Ghost Poro are in enemy territory.</mainText>";
    return take(key, value);
  },
  //The Black Spear
  '3599': function (key, value, stats, uniques, metadata) {
    // ex. "<stats></stats><br><active>Active:</active> Offer to bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.";
    return take(key, value);
  },
  //The Black Spear
  '3600': function (key, value, stats, uniques, metadata) {
    // ex. "<stats></stats><br><active>Active:</active> Offer to bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.";
    return take(key, value);
  },
  //Siege Teleport
  '3630': function (key, value, stats, uniques, metadata) {
    // ex. "<unique>Active:</unique> Use this trinket to teleport to one of your team's port pads. Can only be used from the summoning platform.";
    return take(key, value);
  },
  //Siege Ballista
  '3631': function (key, value, stats, uniques, metadata) {
    // ex. "<br><font color='#FF9900'>Deploys a ballista that shoots the closest turret.</font><br><br>Places a long range ballista if within 2200 range of an enemy turret. After a 5 second delay, it will begin firing at the nearest enemy turret, dealing heavy damage. If the targeted turret expires, the ballista will as well.";
    return take(key, value);
  },
  //Siege Teleport
  '3633': function (key, value, stats, uniques, metadata) {
    // ex. "<unique>Active:</unique> Use this trinket to teleport to one of your team's port pads. Can only be used from the summoning platform.";
    return take(key, value);
  },
  //Tower: Beam of Ruination
  '3634': function (key, value, stats, uniques, metadata) {
    // ex. "<br><font color='#FF9900'>Attach, then recast to fire a damaging beam from a turret to your cursor.</font><br><br><font color='#FF9900'>First Cast:</font> Attach a Slayer Beam to the target turret that can be fired 3 times.<br><br><font color='#FF9900'>Next Three Casts:</font> Fires the attached beam towards your cursor, dealing 30/level + 30% of the hit target's maximum health (20% damage to minions) in magic damage to all targets in a line.<br><br><br><br>Beam will last 15 seconds, or until it has been fired 3 times.";
    return take(key, value);
  },
  //Port Pad
  '3635': function (key, value, stats, uniques, metadata) {
    // ex. "<br><font color='#FF9900'>Deploy an additional teleport target.</font><br><br>Places a Port Pad at target location. After a 4 second delay, it activates, allowing you or your allies to teleport to it from base.";
    return take(key, value);
  },
  //Tower: Storm Bulwark
  '3636': function (key, value, stats, uniques, metadata) {
    // ex. "<br><font color='#FF9900'>Makes a turret go invulnerable, then rain fire.</font><br><br>Makes the target turret invulnerable for 6 seconds. Two seconds before expiry, it unleashes a missile volley, dealing 2600 true damage over the remaining time to all nearby enemies.<br><br>Cannot be used on the same turret more than once in 15 seconds.";
    return take(key, value);
  },
  //Nexus Siege: Siege Weapon Slot
  '3637': function (key, value, stats, uniques, metadata) {
    // ex. "In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!";
    return take(key, value);
  },
  //Flash Zone
  '3640': function (key, value, stats, uniques, metadata) {
    // ex. "<br><font color='#FF9900'>Allows team to cast Flash repeatedly in a limited zone.</font><br><br>Creates a magic zone for your team for 5 seconds. While in this zone, you and your allies have your summoner spells replaced by an instant cast blink that moves you to any location in the zone (1 second cooldown).";
    return take(key, value);
  },
  //Vanguard Banner
  '3641': function (key, value, stats, uniques, metadata) {
    // ex. "<br><font color='#FF9900'>Place a banner that buffs minions.</font><br><br>Place a Vanguard Banner at target location. After a 2 second delay, any nearby minions will be granted a buff, increasing their damage by 50%, and granting them 50 Armor and 100 Magic Resistance while within range.";
    return take(key, value);
  },
  //Siege Refund
  '3642': function (key, value, stats, uniques, metadata) {
    // ex. "Refunds all purchased Siege Weapons for their full price.";
    return take(key, value);
  },
  //Entropy Field
  '3643': function (key, value, stats, uniques, metadata) {
    // ex. "<br><font color='#FF9900'>Stun minions and slow champions in an area.</font><br><br>Places an Entropy Field at target location for 5 seconds. Enemy minions and Siege Ballistas trapped in the field are unable to move or attack while in the field. Enemy champions in the field have their Movement Speed reduced by 25%.";
    return take(key, value);
  },
  //Seer Stone (Trinket)
  '3645': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Reveals a small area within <font color='#FFFFF'>1400</font> range for 3 seconds. Enemy champions will be revealed for 5 seconds (60 second cooldown)";
    return take(key, value);
  },
  //Shield Totem
  '3647': function (key, value, stats, uniques, metadata) {
    // ex. "<br><font color='#FF9900'>Place a totem that shields nearby deployables.</font><br><br>Places a Shield Totem at target location. After a 2 second delay, the totem will activate, granting a 2 (+1 per additional Shield Totem) strength shield to all nearby deployables.";
    return take(key, value);
  },
  //Siege Teleport (Inactive)
  '3648': function (key, value, stats, uniques, metadata) {
    // ex. "";
    return take(key, value);
  },
  //Siege Sight Warder
  '3649': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Places a <font color='#FFFFFF'>Stealth Ward</font> that lasts <font color='#FFFFFF'>30</font> seconds (30 second cooldown).";
    return take(key, value);
  },
  //Enchantment: Warrior
  '3671': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>";
    return take(key, value);
  },
  //Enchantment: Cinderhulk
  '3672': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+325 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters.";
    return take(key, value);
  },
  //Enchantment: Runic Echoes
  '3673': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.";
    return take(key, value);
  },
  //Enchantment: Bloodrazor
  '3675': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.";
    return take(key, value);
  },
  //Frosted Snax
  '3680': function (key, value, stats, uniques, metadata) {
    // ex. "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King lobs many projectiles at far-away enemies, each dealing <scaleLevel>213-775</scaleLevel> magic damage to targets in the center of the impact, scaling down to <scaleLevel>85-310</scaleLevel> on the edge. (120s cooldown)";
    return take(key, value);
  },
  //Super Spicy Snax
  '3681': function (key, value, stats, uniques, metadata) {
    // ex. "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King breathes fire for 4 seconds, dealing <scaleLevel>705-1479</scaleLevel> true damage over the duration to enemies caught in the cone. Deals up to 560 true damage to Turrets. (120s cooldown)";
    return take(key, value);
  },
  //Espresso Snax
  '3682': function (key, value, stats, uniques, metadata) {
    // ex. "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King leaps into the air and crashes down twice, knocking enemies away and dealing <scaleLevel>40-190</scaleLevel> physical damage. He also gains a decaying shield for <font color='#FF3300'>20% of his maximum health</font>, lasting 4 seconds. (30s cooldown)";
    return take(key, value);
  },
  //Rainbow Snax Party Pack!
  '3683': function (key, value, stats, uniques, metadata) {
    // ex. "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King tosses many Snax behind the enemy, attracting Poros which dash back towards him. Enemy champions hit will be knocked forwards and dealt <scaleLevel>230-680</scaleLevel> physical damage. (120s cooldown)";
    return take(key, value);
  },
  //Cosmic Shackle
  '3690': function (key, value, stats, uniques, metadata) {
    // ex. "<passive>Passive - Cosmic Shackle: </passive>Death Sentence pulls much farther (based on the target's Missing Health), and can be ignited by the Dark Star to do more damage.<br><br><flavorText>''A still more glorious dawn awaits.''</flavorText>";
    return take(key, value);
  },
  //Singularity Lantern
  '3691': function (key, value, stats, uniques, metadata) {
    // ex. "<passive>Passive - Singularity Lantern: </passive>Dark Passage automatically saves disabled allies. However, it no longer provides a shield.<br><br><flavorText>''The stars call to us.''</flavorText>";
    return take(key, value);
  },
  //Dark Matter Scythe
  '3692': function (key, value, stats, uniques, metadata) {
    // ex. "<passive>Passive - Dark Matter Scythe: </passive>Flay's on-hit passive charges damage very quickly. Flay will throw enemies much farther (based on their Missing Health).<br><br><flavorText>''If you want to make a Singularity from scratch, you must first destroy the universe.''</flavorText>";
    return take(key, value);
  },
  //Gravity Boots
  '3693': function (key, value, stats, uniques, metadata) {
    // ex. "<passive>Passive - Mass Conversion: </passive>Thresh's Health represents how far enemy pulls and pushes will send him. At lower Health, he will be thrown farther.<br><br><passive>Passive - Terminus Dwellers: </passive>Abyss Scuttlers emerge periodically, and will scurry towards the Dark Star when attacked. Gravitational disturbances will temporarily attract many of them.";
    return take(key, value);
  },
  //Cloak of Stars
  '3694': function (key, value, stats, uniques, metadata) {
    // ex. "<passive>Passive - Stellar Spirit: </passive>Upon spawning, Thresh is invulnerable, untargetable, cannot cast, and is able to travel in open space. This is lost when stepping foot on stable ground.<br><br>Being saved by Dark Passage or using Death Sentence on one of the three <font color='#3091ec'>Gravity Anchors</font> will briefly put you into this invulnerable state and break enemy chains on you.";
    return take(key, value);
  },
  //Dark Star Sigil
  '3695': function (key, value, stats, uniques, metadata) {
    // ex. "<passive>Passive - Stellar Fealty: </passive>Thresh cannot kill units directly - their souls, experience, and gold belong to the Dark Star.<br><br>Pulling or pushing an enemy into the Dark Star will destroy them instantly, scoring points for your team (+5, or +1 for Abyss Scuttlers).<br><br>Winning a round requires 100 points, and the final points must be from a champion kill.";
    return take(key, value);
  },
  //Stalker's Blade
  '3706': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br>+10% Life Steal vs. Monsters<br><br><unique>UNIQUE Passive - Chilling Smite:</unique> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds.<br><unique>UNIQUE Passive - Tooth / Nail:</unique> Basic attacks vs. monsters deal 40 bonus damage. Damaging a monster with a spell or attack steals 30 Health over 5 seconds and burns them for 80 magic damage.<mana> While in the jungle or river, regenerate up to 8 Mana per second based on your missing Mana.</mana> This item grants <font color='#99BBBB'><a href='SpecialJungleExperience'>Monster Hunter</a></font>.";
    return take(key, value);
  },
  //Skirmisher's Sabre
  '3715': function (key, value, stats, uniques, metadata) {
    // ex. "<groupLimit>Limited to 1 Gold Income or Jungle item.</groupLimit><br><br>+10% Life Steal vs. Monsters<br><br><unique>UNIQUE Passive - Challenging Smite:</unique> Smite can be cast on enemy champions, marking them for 4 seconds. While marked your basic attacks deal bonus true damage over 2.5 seconds, and their damage to you is reduced by 20%.<br>Basic attacks vs. monsters deal 40 bonus damage. Damaging a monster with a spell or attack steals 30 Health over 5 seconds and burns them for 80 magic damage. While in the jungle or river, regenerate up to 8 Mana per second based on your missing Mana. This item grants <font color='#99BBBB'><a href='SpecialJungleExperience'>Monster Hunter</a></font>.";
    return take(key, value);
  },
  //Dead Man's Plate
  '3742': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+425 Health<br>+60 Armor</stats><br><br><unique>UNIQUE Passive - Dreadnought:</unique> While moving, build stacks of Momentum, increasing movement speed by up to 60 at 100 stacks. Momentum decays while under the effect of a stun, taunt, fear, polymorph, or immobilize effect.<br><unique>UNIQUE Passive - Crushing Blow:</unique> Basic attacks deal 1 magic damage per stack of Momentum, discharging all stacks. At max stacks, if the attacker is melee, they also slow the target by 50% for 1 second.<br><br><flavorText>''There's only one way you'll get this armor from me...'' - forgotten namesake</flavorText>";
    return take(key, value);
  },
  //Titanic Hydra
  '3748': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+450 Health<br>+40 Attack Damage<br>+100% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 5 + 1% of your maximum health as bonus physical damage to your target and 40 + 2.5% of your maximum health as physical damage to other enemies in a cone on hit.<br><active>UNIQUE Active - Crescent:</active> Cleave damage to all targets is increased to 40 + 10% of your maximum health as bonus physical damage in a larger cone for your next basic attack (20 second cooldown).<br><br><rules>(Unique Passives with the same name don't stack.)</rules>";
    return take(key, value);
  },
  //Bami's Cinder
  '3751': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+200 Health </stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 5 (+1 per champion level) magic damage per second to nearby enemies. Deals 100% bonus damage to minions and monsters.";
    return take(key, value);
  },
  //Righteous Glory
  '3800': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+400 Health<br><mana>+300 Mana</mana><br>+30 Armor<br>+100% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Active:</unique> Grants 75% Movement Speed when moving towards enemies or enemy turrets for 4 seconds. Once near an enemy (or after 4 seconds) a shockwave is emitted, slowing nearby enemy champion Movement Speed by 75% for 2 second(s) (90 second cooldown).";
    return take(key, value);
  },
  //Crystalline Bracer
  '3801': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+200 Health<br>+50% Base Health Regen </stats>";
    return take(key, value);
  },
  //Lost Chapter
  '3802': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+40 Ability Power<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Haste:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Upon levelling up, restores 20% of your maximum Mana over 3 seconds.";
    return take(key, value);
  },
  //Death's Dance
  '3812': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+80 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Heal for 15% of damage dealt. This is 33% as effective for Area of Effect damage.<br><unique>UNIQUE Passive:</unique> 30% of damage taken is dealt as a Bleed effect over 3 seconds instead.";
    return take(key, value);
  },
  //Space Death's Dance
  '3813': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+80 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Heal for 4% of damage dealt. This is 33% as effective for Area of Effect damage.<br><unique>UNIQUE Passive:</unique> 30% of damage taken is dealt as a Bleed effect over 3 seconds instead.";
    return take(key, value);
  },
  //Edge of Night
  '3814': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+250 Health<br>+55 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +18 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Active - Night's Veil:</unique> Channel for 1 second to grant a spell shield that blocks the next enemy ability. Lasts for 7 seconds (40 second cooldown).<br><br><rules>(Can move while channeling, but taking damage breaks the channel.)</rules>";
    return take(key, value);
  },
  //Fire at Will
  '3901': function (key, value, stats, uniques, metadata) {
    // ex. "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Cannon Barrage fires at an increasing rate over time (additional 6 waves over the duration).";
    return take(key, value);
  },
  //Death's Daughter
  '3902': function (key, value, stats, uniques, metadata) {
    // ex. "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Cannon Barrage additionally fires a mega-cannonball at center of the Barrage, dealing 300% true damage and slowing them by 60% for 1.5 seconds.";
    return take(key, value);
  },
  //Raise Morale
  '3903': function (key, value, stats, uniques, metadata) {
    // ex. "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Allies in the Cannon Barrage gain 30% Movement Speed for 2 seconds.";
    return take(key, value);
  },
  //Twin Shadows
  '3905': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+70 Ability Power<br>+7% Movement Speed<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Active - Spectral Pursuit:</unique> Summons 2 spooky ghosts that hunt down nearby champions, revealing and Haunting them on contact. <br><br>Haunted enemies are slowed by 40% for up to 5 seconds based on the distance the ghosts travel. (90 second cooldown).";
    return take(key, value);
  },
  //Spellbinder
  '3907': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+120 Ability Power<br>+10% Movement Speed<br></stats><br><unique>UNIQUE Passive:</unique> Nearby allied and enemy spellcasts charge Spellbinder up to a cap (100 maximum). <br><unique>UNIQUE Active:</unique> Gain a maximum of 80 Ability Power and 50% decaying Movement Speed for 4 seconds. <br><br>Each spellcast stored contributes +0.8 Ability Power and +0.5% Movement Speed to the effect. (60 second cooldown).";
    return take(key, value);
  },
  //Oblivion Orb
  '3916': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+20 Ability Power<br>+200 Health</stats><br><br><unique>UNIQUE Passive - Touch of Death:</unique> +15 <a href='FlatMagicPen'>Magic Penetration</a>";
    return take(key, value);
  },
  //Lifeline
  '4003': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+20 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +8 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Active:</unique> Mark the ground beneath you. After 4 seconds, you will return to the marked location (120 second cooldown).";
    return take(key, value);
  },
  //Spectral Cutlass
  '4004': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+70 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +18 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Active:</unique> Mark your current location. After 4 seconds, you will return to the marked location (60 second cooldown).";
    return take(key, value);
  },
  //Pridestalker's Blade
  '4101': function (key, value, stats, uniques, metadata) {
    // ex. "<unique>UNIQUE Passive - Tooth / Nail:</unique> Basic attacks vs. monsters deal 40 bonus damage. Damaging a monster with a spell or attack steals 30 Health over 5 seconds and burns them for 80 magic damage.<mana> While in the jungle or river, regenerate up to 8 Mana per second based on your missing Mana.</mana><br><br><groupLimit>Limited to 1 Starter item.</groupLimit>";
    return take(key, value);
  },
  //Enchantment: Warrior
  '4102': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+65 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Chilling Smite:</unique> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>";
    return take(key, value);
  },
  //Enchantment: Cinderhulk
  '4103': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+350 Health<br>+10% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 11 (+1 per champion level) magic damage a second to nearby enemies while in combat. Deals 200% bonus damage to minions and monsters.<br><br><unique>UNIQUE Passive - Chilling Smite:</unique> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>";
    return take(key, value);
  },
  //Enchantment: Runic Echoes
  '4104': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+80 Ability Power<br>+10% Cooldown Reduction<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 25% of your missing Mana.<br><br><unique>UNIQUE Passive - Chilling Smite:</unique> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>";
    return take(key, value);
  },
  //Enchantment: Bloodrazor
  '4105': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.<br><br><unique>UNIQUE Passive - Chilling Smite:</unique> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>";
    return take(key, value);
  },
  //Doran's Lost Shield
  '4201': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+100 Health</stats><br><br><passive>Passive: </passive>Restores 15 Health every 5 seconds.<br><passive>Passive: </passive>Basic attacks deal an additional 5 physical damage to minions on hit.<br><unique>UNIQUE Passive:</unique> Regain an additional 20 health over 10 seconds after taking damage from an enemy champion.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>";
    return take(key, value);
  },
  //Doran's Lost Blade
  '4202': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+8 Attack Damage<br>+80 Health<br>+8% Life Steal</stats><br><br><groupLimit>Limited to 1 Starter item.</groupLimit>";
    return take(key, value);
  },
  //Doran's Lost Ring
  '4203': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+60 Health<br>+15 Ability Power<br><mana>+10 Mana per 5 seconds</mana></stats><br><br><passive>Passive: </passive>Basic attacks deal an additional 5 physical damage to minions on hit.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>";
    return take(key, value);
  },
  //Doran's Lost Idol
  '4204': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+10 Ability Power<br><mana>+75% Base Mana Regen </mana><br>+5% Heal and Shield Power</stats><br><br><passive>Passive: </passive>Basic attacks deal an additional 12 physical damage to minions on hit.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>";
    return take(key, value);
  },
  //Philosopher's Medallion
  '4301': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+10% Cooldown Reduction<br>+50% Base Health Regen <br>+5 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Enemy minions killed by your allies sometimes drop coins that grant <scaleMana>10%</scaleMana> missing mana (minimum 20). If there is an allied Champion nearby, sometimes the coins grant <gold>50</gold> gold instead. Cannon minions always drop coins.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>";
    return take(key, value);
  },
  //Heart of Targon
  '4302': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+60 Health<br>+50% Base Health Regen <br>+5 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 200 (+40 per level) Health. Killing a minion heals the owner and the nearest allied champion for 10 to 60 (based on missing health) and grants them kill Gold. 50% healing if the owner is ranged. These effects require a nearby ally. Recharges every 20 seconds. Max 3 charges.<br><br><groupLimit>Limited to 1 Starter item.</groupLimit>";
    return take(key, value);
  },
  //Force of Nature
  '4401': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+90 Magic Resist<br>+200% Base Health Regen <br>+8% Movement Speed</stats><br><br><unique>UNIQUE Passive:</unique> Regenerate 1.5% maximum Health every second.";
    return take(key, value);
  },
  //Innervating Locket
  '4402': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+400 Health<br><mana>+300 Mana</mana><br>+30 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.<br><br><unique>UNIQUE Passive:</unique> After using an ability, restore 8% missing Health and 3% missing Mana over 3 seconds.<br><br><rules><font color='#447777'>''Cast down the Noxians'' - Bobdyr, Temple Guardsman</font></rules>";
    return take(key, value);
  },
  //Stat-Stick of Stoicism
  '4403': function (key, value, stats, uniques, metadata) {
    // ex. "<stats>+250 Health<br><mana>+250 Mana</mana><br>+100% Base Health Regen <br><mana>+100% Base Mana Regen </mana><br>+30 Armor<br>+30 Magic Resist<br>+120 Ability Power<br>+70 Attack Damage<br>+50% Attack Speed<br>+30% Critical Strike Chance<br>+10% Life Steal<br>+10% Movement Speed<br>+20% Cooldown Reduction</stats><br><br><rules><font color='#447777'>''What if we only bought some of the stats?''<br>''Declined, we must have ALL of them.''</font></rules>";
    return take(key, value);
  },
};
// const unique_passives = {
//   // AP Items
//   'Haste': {
//     desc: 'This item gains an additional 10% Cooldown Reduction.'    return take(desc,value);
//   },
//   // Abyssal Mask
//   'Eternity': {
//     desc: '15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.'    return take(desc,value);
//   },
// };