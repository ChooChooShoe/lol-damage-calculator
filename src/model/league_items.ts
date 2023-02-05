export function getItemStats(itemId, value) {
  const stats = {};
  const uniques = {};
  try {
    take(itemId, value, stats, uniques, {});
  } catch (e) {
    console.log('Error for item stats', itemId);
    console.log(e);
  }
  return {
    stats,
    uniques,
  };
}

function take(key, value, stats, uniques, metadata) {
  const options = {};
  const parser = new DOMParser();
  const el = parser.parseFromString(
    `<body>${value.description}</body>`,
    'text/html'
  );
  const bodyNode = el.childNodes[0].childNodes[1];

  const active = false;

  let lastKey = 0;
  let lastLine = [];
  for (let child of Array.from(bodyNode.childNodes)) {
    if (child.nodeName === 'MANA') {
      child = child.childNodes[0];
    }

    if (child.nodeName === 'STATS') {
      for (const statChild of Array.from(child.childNodes)) {
        if (statChild.nodeName === 'LEVELLIMIT')
          options.levelLimit = statChild.textContent;
        else if (statChild.textContent) stats.push(statChild.textContent);
      }
    } else if (
      child.nodeName === 'UNIQUE' ||
      child.nodeName === 'PASSIVE' ||
      child.nodeName === 'ACTIVE' ||
      child.nodeName === 'AURA'
    ) {
      const parts1 = child.textContent.split(' - ');
      const parts2 = parts1[0].trim().split(' ', 2);
      const isUnique = parts2.length == 2 ? parts2[0] : undefined; // capture[1] ? capture[1].trim() : capture[1];
      const type = parts2[parts2.length - 1]; // capture[2];
      const name = parts1[1] ? parts1[1].replace(/:/, '').trim() : undefined; // capture[3];
      // console.log('UNIQUE: for capture', child.textContent, '|', isUnique, '|', type, '|', name);

      lastKey = uniques.length;
      uniques[lastKey] = {
        unique: isUnique === 'UNIQUE' ? true : isUnique,
        type: type.toLocaleLowerCase().replace(/:/, '').trim(),
        name,
        description: '',
      };
    } else if (child.nodeName === 'CONSUMABLE' || child.nodeName === 'RULES') {
      lastKey = uniques.length;
      uniques[lastKey] = {
        unique: undefined,
        type: child.nodeName.toLocaleLowerCase(),
        name: child.textContent.replace(/:/, ''),
        description: '',
      };
    } else if (child.nodeName === 'BR') {
      if (lastLine.join('') === '') continue;
      if (!uniques[lastKey]) uniques[lastKey] = { type: 'text' };
      uniques[lastKey].description = lastLine.join('').trim();
      lastLine = [];
    } else if (
      child.nodeName === 'GROUPLIMIT' ||
      child.nodeName === 'LEVELLIMIT'
    ) {
      // TODO
    } else if (child.outerHTML) {
      lastLine.push(child.outerHTML);
    } else if (child.textContent) {
      lastLine.push(child.textContent);
    }
  }
  if (lastLine.length > 0) {
    if (!uniques[lastKey]) uniques[lastKey] = { type: 'text' };
    uniques[lastKey].description = lastLine.join('').trim();
  }

  const newStats = {};
  for (const htmlStat of stats) {
    const capture = htmlStat.match(/([+\d%.-]+) (.*)/);
    if (capture) {
      const val =
        capture[1].indexOf('%') !== -1
          ? parseFloat(capture[1]) / 100
          : parseFloat(capture[1]);
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
    key,
    name: value.name,
    description: value.description,
    image: value.image,
    gold: value.gold,
    tags: value.tags,
    // options: options,
  };
  if (stats.length > 0) window.exportItems[key].stats = newStats;
  if (Object.keys(uniques).length > 0)
    window.exportItems[key].uniques = uniques;

  if (value.colloq && value.colloq !== ';')
    window.exportItems[key].colloq = value.colloq;
  if (active === true) window.exportItems[key].active = true;
  for (const reuseKey of [
    'consumed',
    'consumeOnFull',
    'from',
    'into',
    'stacks',
    'specialRecipe',
    'inStore',
    'hideFromAll',
    'requiredChampion',
    'requiredAlly',
  ]) {
    // if (value.hasOwnProperty(reuseKey)) {
    window.exportItems[key][reuseKey] = value[reuseKey];

    // }
  }
  return stats;
}
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
