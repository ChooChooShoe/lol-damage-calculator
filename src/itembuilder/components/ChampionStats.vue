
<template>
  <div class="data_holder c50">
    <!-- <EditBtn v-model="editMode"></EditBtn> -->
    <h2>{{ username }}</h2>
      <span v-if="showDamage" class="ap">AP</span>
      <!-- <BlockStat v-if="showDamage" stat="ap" v-model:total="obj.total_ap" title="Ability Power"> Increases the amount of damage you deal with AP scaling Spells. </BlockStat> -->

  </div>
</template>

<script setup>
import BlockStat from "../../components/simple/BlockStat.vue";

import { toRefs, inject, ref, computed, watchEffect } from "vue";

const props = defineProps({ value: String });


const showDamage = ref(props.value === "player");
const showDefence = ref(props.value === "target");
const showExtra = ref(false);
const showBreakdown = ref(true);
const readonly_base_values = true;
const editMode = ref(true);
const username = props.value === "player" ? "Attacking Champion" : "Target Data";

function load(json) {
  console.log("load(json)");
};
function save () {
  console.log("save(json)");
};
function clear () {
  this.obj.clearStats();
};
function rnd(n) {
  return Math.round(n);
};
</script>

<style>
</style>
