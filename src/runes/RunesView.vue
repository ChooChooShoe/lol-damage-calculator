<template>
  <div>
    <div class="runespage">
      <span>Primary Path = {{ primaryPathKey }}</span>
      <span>Secondary Path = {{ secondaryPathKey }}</span>
      <span>primarySelections Path = {{ p.primaryStyle.selections }}</span>
      <span>secondarySelections Path = {{ p.subStyle.selections }}</span>
    </div>
    <PerkPicker v-model="p"></PerkPicker>

    <PerkStyle :primaryStyle="p.primaryStyle.selections" :secondaryStyle="p.subStyle.selections"></PerkStyle>
    <!-- <PrimaryStyle :pathId="primaryPathKey" :selections="p.primaryStyle.selections"></PrimaryStyle> -->
    <!-- <SecondaryStyle :pathId="secondaryPathKey" :selections="p.subStyle.selections" :statPerks="p.statPerks"></SecondaryStyle> -->

    <div>
      Results:
      <PlayerStats :statmods="statmods"></PlayerStats>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, ref, Ref } from "vue";

import SinglePerk from "./SinglePerk.vue";
import PerkStyle from "./PerkStyle.vue";
import PlayerStats from "./PlayerStats.vue";
import { StatMod, StatBlock } from "./Stats";
import { computed } from "@vue/reactivity";
import { tryGetPerkStyle, perkStyle, perk, perkstyles, PerkSelections } from "./perks";
import SpellEffects from "../components/spells/SpellEffects.vue";
import { ChampObjModel } from "../model/ChampObj";
import { DamageSource } from "../javascript/league_data";
import PerkPicker from "./PerkPicker.vue";

const p = reactive<PerkSelections>(new PerkSelections());

const primaryPathKey: Ref<number> = ref(0);
const secondaryPathKey: Ref<number> = ref(0);

const statmods = computed(() => {
  const r: StatMod[] = [];
  if (p.statPerks.defense)
    r.push(
      new StatMod(
        "perks[String(p.statPerks.defense) as keyof typeof perks].name",
        "Runes::Stats::defense",
        perk(p.statPerks.defense).stats
      )
    );

  if (p.statPerks.flex)
    r.push(
      new StatMod(
        "perks[String(p.statPerks.flex) as keyof typeof perks].name",
        "Runes::Stats::flex",
        perk(p.statPerks.flex).stats
      )
    );

  if (p.statPerks.offense)
    r.push(
      new StatMod(
        "perks[String(p.statPerks.flex) as keyof typeof perks].name",
        "Runes::Stats::offense",
        perk(p.statPerks.offense).stats
      )
    );

  return r;
});

function setPrimary(id: number) {
  if (id !== primaryPathKey.value) p.primaryStyle.selections = [0, 0, 0, 0];
  primaryPathKey.value = id;
  if (secondaryPathKey.value === id) {
    secondaryPathKey.value = 0;
    p.subStyle.selections = [0, 0];
  }
}
function setSecondary(id: number) {
  if (id !== secondaryPathKey.value) p.subStyle.selections = [0, 0];
  secondaryPathKey.value = id;
}

provide("rankindex", ref(0));
provide("skillbase", null);
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

.runespage__flex {
  display: flex;
  justify-content: space-evenly;
}
</style>
