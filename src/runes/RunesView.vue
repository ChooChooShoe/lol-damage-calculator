<template>
  <div class="runespage">
    <span>Primary Path = {{ primaryPathKey }}</span>
    <span>Secondary Path = {{ secondaryPathKey }}</span>
    <span>primarySelections Path = {{ p.primaryStyle.selections }}</span>
    <span>secondarySelections Path = {{ p.subStyle.selections }}</span>
    <div class="runespage__flex">
      <template v-for="x in perkstyles" :key="x.id">

        <SinglePerk :name="x.name" :icon-path="x.iconPath" :tooltip="x.tooltip" :is-path="true" :data-selected="primaryPathKey === x.id ? 'true' : 'none'" @click="setPrimary(x.id)"></SinglePerk>
      </template>
    </div>
    <div class="runespage__flex">
      <template v-for="x in tryGetPerkStyle(primaryPathKey)?.allowedSubStyles.map(pid => perkStyle(pid)) || []" :key="x.id">
        <SinglePerk :name="x.name" :icon-path="x.iconPath" :tooltip="x.tooltip" :is-path="true" :data-selected="secondaryPathKey === x.id ? 'true' : 'none'" @click="setSecondary(x.id)"></SinglePerk>
      </template>
    </div>
    <PrimaryStyle :pathId="primaryPathKey" :selections="p.primaryStyle.selections"></PrimaryStyle>
    <SecondaryStyle :pathId="secondaryPathKey" :selections="p.subStyle.selections" :statPerks="p.statPerks"></SecondaryStyle>

    <div>
      Results:
      <PlayerStats :statmods="statmods"></PlayerStats>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, ref, Ref } from "vue";

import SinglePerk from "./SinglePerk.vue";
import PrimaryStyle from "./PrimaryStyle.vue";
import SecondaryStyle from "./SecondaryStyle.vue";
import PlayerStats from "./PlayerStats.vue";
import { StatMod, StatBlock } from "./Stats";
import { computed } from "@vue/reactivity";
import { tryGetPerkStyle, perkStyle, perk, perkstyles } from "./perks";
import SpellEffects from "../components/spells/SpellEffects.vue";
import { ChampObjModel } from "../model/ChampObj";
import { DamageSource } from "../javascript/league_data";

class Perks {
  statPerks = { defense: 0, flex: 0, offense: 0, }
  primaryStyle = {
    style: 0,
    selections: [0, 0, 0, 0],
  }
  subStyle = {
    style: 0,
    selections: [0, 0],
  }
}
const p = reactive<Perks>(new Perks());

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

const player = reactive<ChampObjModel>(new ChampObjModel('player', 'Katarina'));
const target = reactive<ChampObjModel>(new ChampObjModel('target', 'Lulu'));

const damageSources: Ref<{ [key: string]: DamageSource }> = ref({});

provide("player", player);
provide("target", target);
provide("damageSources", damageSources);

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
