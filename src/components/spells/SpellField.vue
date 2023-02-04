<template>
  <tr :class="data.color">
    <th>
      <span v-html="data.html"></span>
    </th>
    <td>
      <NumInput
        v-model="val.damageValue"
        :format="val.apply"
        :index="rankindex"
      ></NumInput>
    </td>
    <td>
      <NumInput :readonly="true" :modelValue="val.damagePreValue"></NumInput>
    </td>
    <td>
      <NumInput :readonly="true" :modelValue="val.damagePostValue"></NumInput>
    </td>
  </tr>
  <SpellField v-for="x in val.sub_calcs" :val="x" :key="x.stat"></SpellField>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue';
import { SubRatio } from '../../api/DataTypes';
import NumInput from '../simple/NumInput.vue';
import { RatioObjComputed, stat_to_display } from './ratios_info';

const { val } = defineProps<{ val: SubRatio & RatioObjComputed }>();
const data = stat_to_display[val.stat] || {};
const rankindex = inject<Ref<number>>('rankindex')!;
</script>
