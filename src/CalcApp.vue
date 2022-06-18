<template>
  <!-- <SettingsModel ref="settings"></SettingsModel> -->

  <SideBody :damagingEffects="damagingEffects" :player="player" :target="target"></SideBody>

  <div class="flex main">
    <ChampObj @update:obj="player = $event"> <ChampionDiv mode="player" @update:activeChampionModel="(m) => (activeChampionModel = m)"></ChampionDiv></ChampObj>
    <ChampObj @update:obj="target = $event"> <ChampionDiv mode="target"></ChampionDiv></ChampObj>

    <TimelineAddMenu></TimelineAddMenu>
    <AADamageSource class="hidden" :damagingEffects="damagingEffects" :player="player" :target="target"></AADamageSource>
    <ChampionSpellDamageSource
      v-for="spellObj in activeSpells"
      :key="spellObj.skillkey"
      :spell="spellObj"
      :multispells="spellObj.skillkey.length > 1"
      :champion="player.champ"
      :damagingEffects="damagingEffects"
    ></ChampionSpellDamageSource>

    <CustomDamageSource v-for="i in customDamageSources" :key="i" :index="i"></CustomDamageSource>
  </div>
  <!-- <footer>
    <div class="buttons">
      <button class="button is-info" @click="addCustomDamageSource()">Add Custom Damage Source</button>
    </div>
  </footer> -->
</template>

<script setup>
import championList from "/src/api/ChampionList.json";
import TimelineAddMenu from "./timeline/TimelineAddMenu.vue";
import SideBody from "./components/SideBody.vue";
import SettingsModel from "./components/SettingsModel.vue";
import ChampionDiv from "./components/ChampionDiv.vue";
import TargetDiv from "./components/TargetDiv.vue";
import AADamageSource from "./components/spells/AADamageSource.vue";
import ChampionSpellDamageSource from "./components/spells/ChampionSpellDamageSource.vue";
import CustomDamageSource from "./components/spells/CustomDamageSource.vue";

import { ref, reactive, provide, computed } from "vue";
import { onBeforeRouteUpdate } from "vue-router";

import ChampObj from "./components/ChampObj.vue";

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.player !== from.params.player) {
    to.params.player = validateName(to.params.player);
    player.value.champ = to.params.player;
    localStorage.setItem(`sv_champ_player`, to.params.player);
  }
  if (to.params.target !== from.params.target) {
    // target.value = await fetchUser(to.params.target);
    to.params.target = validateName(to.params.target);
    target.value.champ = to.params.target;
    localStorage.setItem(`sv_champ_target`, to.params.target);
  }
});

const validateName = (value) => {
  if (championList[value]) return value;
  for (const el of Object.keys(championList)) {
    if (el.toLowerCase().includes(value.toLowerCase())) {
      return el;
    }
  }
  // Default to Katarina if no match
  return "Katarina";
};

const player = ref({});
const target = ref({});
const activeChampionModel = ref({});
const damagingEffects = ref([]);

provide("player", player);
provide("target", target);
provide("activeChampionModel", activeChampionModel);
provide("damagingEffects", damagingEffects);

provide("RootData", { player, target, damagingEffects });

// expose to template
const lastCustomDamageSourcesIndex = ref(0);
const customDamageSources = ref([]);
const activeSpells = computed(() => Object.values(activeChampionModel?.value?.skills || {}));

const skillpoints_used = () => {
  let sum = 0;
  for (const x in this.data.damagingEffects) {
    sum += (this.data.damagingEffects[x].spellrankindex || 0) + 1;
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