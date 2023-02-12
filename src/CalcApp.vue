<template>
  <!-- <SettingsModel ref="settings"></SettingsModel> -->

  <SideBody></SideBody>

  <div class="grid">
    <ChampionDiv mode="player" class="col-6"></ChampionDiv>
    <ChampionDiv mode="target" class="col-6"></ChampionDiv>

    <TimelineAddMenu :models="activeChampionModel.skills"></TimelineAddMenu>
    <!-- <AADamageSource></AADamageSource> -->
    <ChampionSpellDamageSource
      v-for="(spellObj, idx) in activeChampionModel.skills"
      :key="spellObj.name"
      :spell="spellObj"
      :champion="player.champ"
      :idx="`skill_${idx}`"
    ></ChampionSpellDamageSource>

    <CustomDamageSource
      v-for="(ds, idx) in customDamageSources"
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
import SideBody from './components/SideBody.vue';
import ChampionDiv from './components/ChampionDiv.vue';
import AADamageSource from './components/spells/AADamageSource.vue';
import ChampionSpellDamageSource from './components/spells/ChampionSpellDamageSource.vue';
import CustomDamageSource from './components/spells/CustomDamageSource.vue';

import { ref, reactive, provide, watchEffect } from 'vue';
import {
  onBeforeRouteUpdate,
  useRouter,
  useRoute,
  type RouteLocationNormalizedLoaded,
} from 'vue-router';

import { validateName, type ChampionName } from './model/ChampObj';
import type { ChampionListSkills } from './api/DataTypes';
import { player, target } from './global/state';

provide('obj', player);
console.log('Providing obj (player) as', player);

const router = useRouter();

function validateNames(route: RouteLocationNormalizedLoaded): {
  player: ChampionName;
  target: ChampionName;
} {
  const player = validateName(route.params.player.toString()) || 'Poppy';
  const target = validateName(route.params.target.toString()) || 'Taric';
  if (player !== route.params.player || target !== route.params.target) {
    console.log('validateNames: Route Name Error', player, target);
    router.push({ params: { player, target } });
  } else {
    localStorage.setItem(`sv_champ_player`, player);
    localStorage.setItem(`sv_champ_target`, target);
  }
  return { player, target };
}

onBeforeRouteUpdate(async (to, _from) => {
  const ns = validateNames(to);
  player.champ = ns.player;
  target.champ = ns.target;
});

const n = validateNames(useRoute());
player.champ = n.player;
target.champ = n.target;

// const activeChampionModel = computed(() => ChampionListSkills[player.champ as keyof typeof ChampionListSkills])
const activeChampionModel = reactive<ChampionListSkills>({ skills: {} });

watchEffect(async () => {
  const champ = player.champ;
  const ChampionListSkills = (await import('@/model/ChampionSkillsData'))
    .default;
  if (champ in ChampionListSkills) {
    activeChampionModel.skills = ChampionListSkills[champ].skills;
  } else {
    activeChampionModel.skills = {};
  }
});

provide('player', player);
provide('target', target);

// expose to template
const lastCustomDamageSourcesIndex = ref(0);
const customDamageSources = ref([]);

// mounted: function () {
//   console.log("process.env", process.env);
//   this.load(
//     window.localStorage.getItem("last_used_customDamageSources") || "{}"
//   );
//   this.lastCustomDamageSourcesIndex =
//     window.localStorage.getItem("last_used_lastCustomDamageSourcesIndex") ||
//     0;
//   // },
//   watch: {
//     config: {
//       handler(val, oldVal) {
//         saveLocalConfig(val);
//       },
//       deep: true,
//     },
//     customDamageSources: {
//       handler: function (val, oldVal) {
//         window.localStorage.setItem("last_used_customDamageSources", JSON.stringify(val));
//         window.localStorage.setItem("last_used_lastCustomDamageSourcesIndex", this.lastCustomDamageSourcesIndex);
//       },
//       deep: true,
//     },
//   },
//   computed: {
//   },
//   methods: {
//     load: function (json) {
//       const data = JSON.parse(json);
//       for (let key in data) {
//         this.customDamageSources[key] = data[key];
//       }
//     },
//     addCustomDamageSource() {
//       this.customDamageSources.push(this.lastCustomDamageSourcesIndex++);
//     },
//     removeCustomDamageSource(index) {
//       this.customDamageSources = this.customDamageSources.filter((i) => i !== index);
//     },
//   },
// };
</script>
