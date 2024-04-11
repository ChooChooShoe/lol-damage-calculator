<template>
  <!-- <SettingsModel ref="settings"></SettingsModel> -->

  <SideBody></SideBody>

  <div class="grid">
    <ChampionDiv mode="player" class="col-6"></ChampionDiv>
    <ChampionDiv mode="target" class="col-6"></ChampionDiv>

    <!-- <TimelineAddMenu :models="activeChampionModel.Skills"></TimelineAddMenu> -->
    <!-- <AADamageSource></AADamageSource> -->
    <ChampionSpellDamageSource
      v-for="skillModel in activeChampionModel.Skills"
      :key="skillModel.name"
      :spell="skillModel"
      :champion="player.champ"
      :idx="skillModel.name"
    ></ChampionSpellDamageSource>

    <CustomDamageSource
      v-for="(_ds, idx) in customDamageSources"
      :key="idx"
      :index="idx"
    ></CustomDamageSource>
  </div>
  <!-- <footer>
    <div class="buttons">
      <button class="button is-info" @click="addCustomDamageSource()">Add Custom Damage Source</button>
    </div>
  </footer> -->
</template>

<script setup lang="ts">
import TimelineAddMenu from './timeline/TimelineAddMenu.vue';
import SideBody from './components/sidebar/SideBody.vue';
import ChampionDiv from './components/ChampionDiv.vue';
import AADamageSource from './components/spells/AADamageSource.vue';
import ChampionSpellDamageSource from './components/spells/ChampionSpellDamageSource.vue';
import CustomDamageSource from './components/spells/CustomDamageSource.vue';

import { ref, provide, watchEffect, Ref } from 'vue';
import { onBeforeRouteUpdate, useRouter, useRoute } from 'vue-router';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { getSkillsModel, validateName } from './model/ChampObj';
import type { ChampionModel, ChampionName } from './model/ChampObj';
import {
  lastChampPlayer,
  lastChampTarget,
  player,
  target,
} from './global/state';

provide('obj', player);
console.log('Providing obj (player) as', player);

const router = useRouter();

function validateNames(route: RouteLocationNormalizedLoaded): {
  player: ChampionName;
  target: ChampionName;
} {
  const player = validateName(route.params.player) || lastChampPlayer;
  const target = validateName(route.params.target) || lastChampTarget;
  if (player !== route.params.player || target !== route.params.target) {
    console.log('validateNames: Route Name Error', player, target);
    router.push({ params: { player, target } });
  } else {
    localStorage.setItem(`sv_champ_player`, player);
    localStorage.setItem(`sv_champ_target`, target);
  }
  return { player, target };
}

onBeforeRouteUpdate(async (to) => {
  const ns = validateNames(to);
  player.champ = ns.player;
  target.champ = ns.target;
});

const n = validateNames(useRoute());
player.champ = n.player;
target.champ = n.target;

watchEffect(async () => {
  const champ = player.champ;
  console.log('Fetching async watchEffect skill model for', champ);
  await getSkillsModel(champ).then((model) => {
    if (model) {
      console.log('Fetching model for', champ, 'complete!');
      activeChampionModel.value = model;
    } else console.warn('Failed to fetch remote model for', champ);
  });
});

const activeChampionModel: Ref<ChampionModel> = ref({ Skills: {} });

provide('player', player);
provide('target', target);

// expose to template
const lastCustomDamageSourcesIndex = ref(0);
const customDamageSources = ref([]);
</script>
