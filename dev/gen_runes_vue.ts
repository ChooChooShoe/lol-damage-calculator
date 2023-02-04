import { writeFile, mkdir } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

const DEBUG = false;
import perks from '../src/runes/perks.json' assert { type: 'json' };

const perkTemplate = (p) => `<template>
    <CommonRune :p="perks[${p}]"></CommonRune>
</template>

<script setup lang="ts">
import { perks } from '../perks.json';
import CommonRune from './template/CommonRune.vue';
</script>
`;

const stylesTemplate = (
  perksLookup: { [key: string]: string },
  Runes: object
) => `<template>
    <PerkStyle :perks="perkComponents[Primary]" mode="Primary"></PerkStyle>
    <PerkStyle :perks="perkComponents[Secondary]" mode="Secondary"></PerkStyle>
</template>

<script setup lang="ts">
import PerkStyle from './PerkStyle.vue';
${Object.values(perksLookup)
  .map((x) => `import ${x} from './perks/${x}.vue'`)
  .join('\n')}
const perkComponents = ${JSON.stringify(Runes).replace(/\"/g, '')};
</script>`;

const stylesTemplate2 = (
  a: string[],
  b: string[],
  c: string[],
  d: string[]
) => `<template>
    <PerkStyle>
        <template #keystone>
${a.map((x) => `            <${x}></${x}>`).join('\n')}
        </template>
        <template #mixed1>
${b.map((x) => `            <${x}></${x}>`).join('\n')}
        </template>
        <template #mixed2>
${c.map((x) => `            <${x}></${x}>`).join('\n')}
        </template>
        <template #mixed3>
${d.map((x) => `            <${x}></${x}>`).join('\n')}
        </template>
    </PerkStyle>
</template>

<script setup lang="ts">
import PerkStyle from './PerkStyle.vue';
${[a, b, c, d]
  .flat()
  .map((x) => `import ${x} from './perks/${x}.vue'`)
  .join('\n')}
</script>`;

readPerks();
async function readPerks() {
  await mkdir(`./src/runes/perks`, { recursive: true });
  const perksLookup = {};
  for (const rune of Object.values(perks.perks)) {
    const key = rune.name.replace(/[^a-z0-9]/gi, '');
    perksLookup[rune.id] = key;
  }
  const Runes = {};
  for (const styles of Object.values(perks.styles)) {
    console.log('Making file', styles.name);
    // Runes[styles.name] = {
    //     keyStone: styles.slots.KeyStone.perks.map(x => perksLookup[x]),
    //     mixed1: styles.slots.Mixed1.perks.map(x => perksLookup[x]),
    //     mixed2: styles.slots.Mixed2.perks.map(x => perksLookup[x]),
    //     mixed3: styles.slots.Mixed3.perks.map(x => perksLookup[x]),
    // }
    for (const rune of [
      styles.slots.KeyStone,
      styles.slots.Mixed1,
      styles.slots.Mixed2,
      styles.slots.Mixed3,
    ].flat()) {
      for (const perk of rune.perks) {
        Runes[perk] = perksLookup[perk];
      }
    }
  }
  // await writeFile(`./src/runes/AllStyles.vue`, stylesTemplate(perksLookup, Runes));
  // await writeFile(`./src/runes/${rune.name.replace(/[^a-z0-9]/gi, '')}.vue`, perkTemplate(rune));

  for (const [id, key] of Object.entries(Runes)) {
    await writeFile(`./src/runes/perks/${key}.vue`, perkTemplate(id));
  }
}
