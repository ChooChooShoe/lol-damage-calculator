<template>
  <TabView class="data_holder col-12" v-model:activeIndex="activeTab">
    <TabPanel :header="script.itemData.name + '\'s ' + script.effectData.name">
      <SpellImage class="ds__spellimage" :icon-path="script.icon"></SpellImage>

      <span class="ds__title" :title="script.effectData.name">
        {{ script.effectData.name }} ({{ script.itemData.id }})
      </span>

      <p
        v-html="script.descriptionHTML"
        class="subskill__desciption"
        :class="{ cliptext: !active, shortmode: nonLeveling }"
        @click="active = true"
      ></p>
      <div class="subskill__effects">
        <SpellEffects
          v-for="(value, index) in script.descriptionRatios"
          :key="index"
          :pkey="`${script.effectData.name}: ${index + 1})`"
          :details="{
            name: value.name,
            values: value.pre!,
            valuesHTML: value.pre!,
          }"
          :effect="value"
          :effectindex="index"
        ></SpellEffects>
      </div>
    </TabPanel>
    <TabPanel header="Settings">
      <div class="buttons">
        <p>No setting avalable for this item.</p>
      </div>
      <Button @click="activeTab = 0" class="p-button-text" label="Save" />
    </TabPanel>
  </TabView>
</template>

<script setup lang="ts">
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Button from 'primevue/button';
import {
  ref,
  computed,
  toRefs,
  watchEffect,
  provide,
  reactive,
  type Ref,
} from 'vue';

import type { ItemEffectsScript } from '@/model/items/ItemEffectScripts';
import SpellImage from '@/timeline/SpellImage.vue';
import AbilityInfo from '@/wiki/AbilityInfo.vue';
import SubSkillList from '@/components/spells/SubSkillList.vue';
import SubSkillVue from '@/components/spells/SubSkillVue.vue';
import SpellEffects from '@/components/spells/SpellEffects.vue';

interface ReactSkill {
  rankindex: Ref<number>;
}
const props = defineProps<{
  script: ItemEffectsScript;
}>();

const nonLeveling = computed(() => props.script.descriptionRatios.length === 0);
const active = ref(
  props.script &&
    props.script.descriptionRatios &&
    props.script.descriptionRatios.length > 0,
);

const activeTab = ref(0);

const rankindex = ref(0);
const customEffects = ref([]);
const lastEffectIndex = ref(0);

watchEffect(() => {
  rankindex.value = (props.script.maxrank || 1) - 1;
});
provide('rankindex', rankindex);
provide('skillbase', undefined);
</script>
