<template>
  <!-- <SettingsModel ref="settings"></SettingsModel> -->

  <SideBody :damageSources="damageSources" :player="player" :target="target"></SideBody>

  <div class="flex main">
    <ChampionDiv mode="player" :obj="player"></ChampionDiv>
    <ChampionDiv mode="target" :obj="target"></ChampionDiv>

    <TimelineAddMenu :skills="activeChampionModel?.skills"></TimelineAddMenu>
    <AADamageSource :damageSources="damageSources" :player="player" :target="target"></AADamageSource>
    <ChampionSpellDamageSource v-for="spellObj in Object.values(activeChampionModel?.skills || {})" :key="spellObj.name" :spell="spellObj" :champion="player.champ" v-if="player.champ"></ChampionSpellDamageSource>

    <CustomDamageSource v-for="(ds, idx) in customDamageSources" :key="idx" :index="idx"></CustomDamageSource>
  </div>
  <!-- <footer>
    <div class="buttons">
      <button class="button is-info" @click="addCustomDamageSource()">Add Custom Damage Source</button>
    </div>
  </footer> -->
</template>

<script setup lang="ts">
import championList from "./api/ChampionList.json";
import TimelineAddMenu from "./timeline/TimelineAddMenu.vue";
import SideBody from "./components/SideBody.vue";
import ChampionDiv from "./components/ChampionDiv.vue";
import AADamageSource from "./components/spells/AADamageSource.vue";
import ChampionSpellDamageSource from "./components/spells/ChampionSpellDamageSource.vue";
import CustomDamageSource from "./components/spells/CustomDamageSource.vue";

import { ref, reactive, provide, computed, Ref, watchPostEffect, watchEffect } from "vue";
import { onBeforeRouteUpdate, useRouter, useRoute, RouteLocationNormalizedLoaded } from "vue-router";

import { ChampionName, ChampObjModel, FullChampJson, SkillJson } from "./model/ChampObj";
import { DamageSource } from "./javascript/league_data";

// import ChampionListSkills from "./api/ChampionListSkills.json";


const router = useRouter();

function validateName(value: string): ChampionName | null {
  if (value in championList) return value as ChampionName;
  for (const el of Object.keys(championList)) {
    if (el.toLowerCase().includes(value.toLowerCase())) {
      return el as ChampionName;
    }
  }
  console.log("[WARN] validateNames: invalid", value);
  return null;
};
function validateNames(route: RouteLocationNormalizedLoaded) {
  const player = validateName(route.params.player as string) || "Poppy";
  const target = validateName(route.params.target as string) || "Taric";
  if (player !== route.params.player || target !== route.params.target) {
    console.log("validateNames: Route Name Error", player, target);
    router.push({ params: { player, target } })
  } else {
    localStorage.setItem(`sv_champ_player`, player);
    localStorage.setItem(`sv_champ_target`, target);
  }
  return { player, target }
}

onBeforeRouteUpdate(async (to, from) => {
  const ns = validateNames(to);
  player.champ = ns.player;
  target.champ = ns.target;
});

const n = validateNames(useRoute());

const player = reactive<ChampObjModel>(new ChampObjModel('player', n.player));
const target = reactive<ChampObjModel>(new ChampObjModel('target', n.target));

// const activeChampionModel = computed(() => ChampionListSkills[player.champ as keyof typeof ChampionListSkills])
const activeChampionModel = ref<FullChampJson | null>(null);

watchEffect(async () => {
  const champ = player.champ as keyof typeof ChampionListSkills;
  const ChampionListSkills = (await import("./api/ChampionListSkills.json")).default;
  activeChampionModel.value = ChampionListSkills[champ] as FullChampJson || null;
})


const aaDamageSources = ref({});
const champDamageSources = ref({});

const damageSources: Ref<{ [key: string]: DamageSource }> = ref({});

provide("player", player);
provide("target", target);
provide("damageSources", damageSources);

provide("RootData", { player, target, damageSources });

// expose to template
const lastCustomDamageSourcesIndex = ref(0);
const customDamageSources = ref([]);

const skillpoints_used = () => {
  let sum = 0;
  for (const x in damageSources) {
    sum += (damageSources[x].spellrankindex || 0) + 1;
  }
  return sum;
};

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