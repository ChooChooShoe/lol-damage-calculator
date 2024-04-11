<template>
  <TabView class="data_holder c50" v-model:activeIndex="active">
    <TabPanel header="Stats">
      <!-- <EditBtn v-model="editMode"></EditBtn> -->
      <h2>{{ username }}</h2>
      <ChampSearch :champ="obj.champ" :mode="mode"></ChampSearch>
      <ChampLevelSelect v-model:level="obj.level"></ChampLevelSelect>
      <!-- <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputNumber id="username" type="text" v-model="obj.base_ad" mode="decimal" locale="en-US"
            :minFractionDigits="2" suffix="%" showButtons />
          <label for="username">Username</label>
        </span> -->
      <ChampionStats
        :showDamage="showDamage"
        :showDefence="showDefence"
        :showExtra="showExtra"
      >
      </ChampionStats>

      <input
        class="clear--button button"
        type="button"
        value="Clear"
        @click="obj.clearStats()"
      />
    </TabPanel>
    <TabPanel header="Runes">
      <h2>{{ username }} Runes</h2>
      <!-- <span>obj.runes = {{ obj.runes }}</span> -->
      <PerkPicker></PerkPicker>

      <ChampionStackingBuffs :obj="obj"> </ChampionStackingBuffs>
      <Button @click="active = 0" class="p-button-text" label="Save" />
    </TabPanel>
    <TabPanel header="Settings">
      <div class="buttons">
        <label class="switch button">
          <input type="checkbox" v-model="showDamage" />
          <span class="switch--text">Show Offensive</span>
        </label>
        <label class="switch button">
          <input type="checkbox" v-model="showDefence" />
          <span class="switch--text">Show Defensive</span>
        </label>
        <label class="switch button">
          <input type="checkbox" v-model="showExtra" />
          <span class="switch--text">Show Extras</span>
        </label>
      </div>
      <Button @click="active = 0" class="p-button-text" label="Save" />
    </TabPanel>
  </TabView>
</template>

<script setup lang="ts">
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Button from 'primevue/button';

import ChampSearch from './simple/ChampSearch.vue';
import ChampLevelSelect from './simple/ChampLevelSelect.vue';
import { ref, provide } from 'vue';
import { type ChampObjModel } from '../model/ChampObj';
import ChampionStats from '../itembuilder/components/ChampionStats.vue';
import ChampionStackingBuffs from '../itembuilder/components/ChampionStackingBuffs.vue';
import PerkPicker from '../runes/PerkPicker.vue';
import { target, player } from '@/global/state';

const props = defineProps<{
  mode: 'target' | 'player';
}>();

let obj: ChampObjModel;
if (props.mode === 'target') {
  obj = target;
  provide('obj', target);
  console.log('Providing obj (target) as', target);
} else {
  obj = player;
}

const showDamage = ref(true);
const showDefence = ref(true);
const showExtra = ref(false);
const username = props.mode === 'player' ? 'Attacking Champion' : 'Target Data';

const active = ref(0);
</script>

<style>
table {
  background-color: transparent !important;
}

.data_holder__grid {
  display: grid;
  grid-template-columns: 10% auto 28px 10% auto 28px;
}

.clear--button:hover,
.clear--button:focus {
  background-color: rgb(202, 0, 0) !important;
}

.switch--text {
  margin: 0 0 0 0.5em;
}

input:checked + .switch--text {
  color: #9ebbf0;
}
</style>
