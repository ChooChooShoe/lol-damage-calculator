<template>
  <template v-if="effect.effectType === 'Shield'">
    <span class="ad spelleffect__title">Shield Strength: </span>
    <span>
      <RecursiveRatioDisplay
        :val="effect"
        :computed-vals="computedRatioValues"
        display="value"
      >
      </RecursiveRatioDisplay>

      <!-- <EffectTypeField v-model="effectType"></EffectTypeField> -->
      <DamageTypeField
        v-model="damage_type"
        v-if="effectType === 'Damage' || effectType === 'Shield'"
      >
      </DamageTypeField>
    </span>
  </template>
  <template v-else>
    <span class="ad spelleffect__title">Heal: </span>
    <span>
      <RecursiveRatioDisplay
        :val="effect"
        :computed-vals="computedRatioValues"
        display="value"
      >
      </RecursiveRatioDisplay>

      <!-- <EffectTypeField v-model="effectType"></EffectTypeField> -->
      <DamageTypeField
        v-model="damage_type"
        v-if="effectType === 'Damage' || effectType === 'Shield'"
      >
      </DamageTypeField>
    </span>
  </template>
</template>

<script setup lang="ts">
import type {
  DamageType,
  EffectType,
  HealEffect,
  ShieldEffect,
  SkillModel,
} from '@/api/DataTypes';
import RecursiveRatioDisplay from '../RecursiveRatioDisplay.vue';
import { makeRootRatio } from '../ratios_info';
import { type Ref, inject, ref } from 'vue';
import type { ChampObjModel } from '@/model/ChampObj';
import { DamageSource } from '@/model/league_data';

const rankindex = inject<Ref<number>>('rankindex');
const obj = inject<ChampObjModel>('obj');
const damage_type = ref<DamageType>('Magic');
const effectType = ref<EffectType>('Damage');
const damageSource = new DamageSource('Magic', 65);

const skillbase = inject<SkillModel>('skillbase');

const props = defineProps<{
  effect: HealEffect | ShieldEffect;
  pkey: string;
}>();

const computedRatioValues = makeRootRatio(props.effect, rankindex!, obj!);
</script>
