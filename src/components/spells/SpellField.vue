<template>
  <tr :class="data.color">
    <th>
      <span v-html="data.html"></span>
    </th>
    <td>
      <NumInput
        v-model="val.baseValue"
        :format="val.apply"
        :index="rankindex"
      ></NumInput>
    </td>
    <td>
      <NumInput :readonly="true" :modelValue="val.scaledValue"></NumInput>
    </td>
    <td>
      <NumInput :readonly="true" :modelValue="val.damagePostValue"></NumInput>
    </td>
  </tr>
  <SpellField v-for="x in val.children" :val="x" :key="x.stat"></SpellField>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue';
import type { SubRatio } from '../../api/DataTypes';
import NumInput from '../simple/NumInput.vue';
import { type SubRatioComputed, stat_to_display } from './ratios_info';

const props = defineProps<{ val: SubRatio & SubRatioComputed }>();
const data = stat_to_display[props.val.units] || {};
const rankindex = inject<Ref<number>>('rankindex')!;
</script>
