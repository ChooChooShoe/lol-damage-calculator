<template>
  <div>
    <div class="runespage">
      <span>obj.runes = {{ obj.runes }}</span>
      <RecursiveRatioDisplay2
        :val="{
          values: 100,
          valuesRanged: 69,
          apply: '%',
          units: 'units',
          pre: 'PRE',
          post: 'post',
          user: 'player',
          stat: 'bonus_armor',
          sub_ratios: [
            {
              values: 452452,
              valuesRanged: 69,
              units: 'units',
              pre: 'PRE',
              post: 'post',
              user: 'player',
              stat: 'bonus_armor',
              sub_ratios: [
                {
                  values: 48282,
                  valuesRanged: 69,
                  apply: '%',
                  units: 'units',
                  pre: 'PRE',
                  post: 'post',
                  user: 'player',
                  stat: 'bonus_armor',
                },
                {
                  values: 4245,
                  valuesRanged: 69,
                  units: 'units',
                  pre: 'PRE',
                  post: 'post',
                  user: 'player',
                  stat: 'bonus_armor',
                },
              ],
            },
            {
              values: 12015,
              valuesRanged: 69,
              apply: '%',
              units: 'units',
              pre: 'PRE',
              post: 'post',
              user: 'player',
              stat: 'bonus_armor',
            },
          ],
        }"
        :recursive="false"
        display="value"
      >
      </RecursiveRatioDisplay2>
    </div>
    <PerkPicker v-model:runes="obj.runes"></PerkPicker>

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
        <CommonRune v-for="p in perks" :p="p"></CommonRune>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, ref, Ref } from 'vue';

import PerkStyle from './PerkStyle.vue';
import PlayerStats from './PlayerStats.vue';
import { StatMod, StatBlock } from './Stats';
import { computed } from 'vue';
import { perkStyle, perk, perks, PerkSelections } from './perks';
import SpellEffects from '../components/spells/SpellEffects.vue';
import { ChampObjModel } from '../model/ChampObj';
import { DamageSource } from '../javascript/league_data';
import PerkPicker from './PerkPicker.vue';
import CommonRune from './perks/CommonRune.vue';
import RecursiveRatioDisplay2 from '../components/spells/typedspelleffects/RecursiveRatioDisplay2.vue';

const obj = reactive(new ChampObjModel('Test', 'Bard'));

provide('player', obj);
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
        perk(obj.runes.statPerks.defense)!.stats!
      )
    );

  if (obj.runes.statPerks.flex)
    r.push(
      new StatMod(
        'perks[String(p.statPerks.flex) as keyof typeof perks].name',
        'Runes::Stats::flex',
        perk(obj.runes.statPerks.flex)!.stats!
      )
    );

  if (obj.runes.statPerks.offense)
    r.push(
      new StatMod(
        'perks[String(p.statPerks.flex) as keyof typeof perks].name',
        'Runes::Stats::offense',
        perk(obj.runes.statPerks.offense)!.stats!
      )
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
