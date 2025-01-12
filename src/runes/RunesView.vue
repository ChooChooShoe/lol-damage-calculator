<template>
  <div>
    <div class="runespage">
      <span>Runes: {{ JSON.stringify(obj.runes, null, 2) }}</span>
    </div>
    PerkPicker:
    <PerkPicker v-model:runes="obj.runes"></PerkPicker>


    PerkStyle: 
    <PerkStyle
      :primaryStyle="obj.runes.primarySelections"
      :secondaryStyle="obj.runes.subSelections"
    ></PerkStyle>
    <!-- <SecondaryStyle :pathId="secondaryPathKey" :selections="p.subStyle.selections" :statPerks="p.statPerks"></SecondaryStyle> -->

    <div>
      Results:
      <PlayerStats :statmods="statmods"></PlayerStats>
    </div>
    <div>
      <h1>All Runes as CommonRune</h1>
      <div>
        <CommonRune v-for="p in perks" :p="p" :key="p.id"></CommonRune>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, ref, type Ref } from 'vue';

import PerkStyle from './PerkStyle.vue';
import PlayerStats from './PlayerStats.vue';
import { StatMod } from './Stats';
import { computed } from 'vue';
import { getPerk, perks } from './perks';
// import SpellEffects from '../components/spells/SpellEffects.vue';
// import { ChampObjModel } from '../model/ChampObj';
// import { DamageSource } from '../model/league_data';
import PerkPicker from './PerkPicker.vue';
import CommonRune from './perks/CommonRune.vue';
import { player as obj } from '@/global/state';

provide('obj', obj);

const primaryPathKey: Ref<number> = ref(0);
const secondaryPathKey: Ref<number> = ref(0);

const statmods = computed(() => {
  const r: StatMod[] = [];
  if (obj.runes.statPerks.defense)
    r.push(
      new StatMod(
        'perks[String(p.statPerks.defense) as keyof typeof perks].name',
        'Runes::Stats::defense',
        getPerk(obj.runes.statPerks.defense)!.stats!,
      ),
    );

  if (obj.runes.statPerks.flex)
    r.push(
      new StatMod(
        'perks[String(p.statPerks.flex) as keyof typeof perks].name',
        'Runes::Stats::flex',
        getPerk(obj.runes.statPerks.flex)!.stats!,
      ),
    );

  if (obj.runes.statPerks.offense)
    r.push(
      new StatMod(
        'perks[String(p.statPerks.flex) as keyof typeof perks].name',
        'Runes::Stats::offense',
        getPerk(obj.runes.statPerks.offense)!.stats!,
      ),
    );

  return r;
});

provide('rankindex', ref(0));
provide('skillbase', null);
</script>

<style>
.runespage {
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  /* grid-template: 1fr / 330px 330px; */
  align-items: stretch;
  /* overflow: auto; */
  /* user-select: none; */
}
</style>
