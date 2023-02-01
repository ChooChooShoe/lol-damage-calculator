<template>
  <div class="float-clear spelleffect__div" >
    <EditBtn class="spelleffect__editbtn" v-model="editMode"></EditBtn>
    <span class="spelleffect__title" :title="effect.raw" v-html="effect.name"></span>
    <span> GAIN EFFECT START
      <RecursiveRatioDisplay2 :val="effect" display="value"> </RecursiveRatioDisplay2>

      <EffectTypeField v-model="effectType"></EffectTypeField>
      <DamageTypeField v-model="damage_type" v-if="effectType === 'Damage' || effectType === 'Shield'">
      </DamageTypeField>
      END
    </span>
    
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import { GainEffect, RootEffect, StacksEffect } from '../../../api/DataTypes';
import { ChampObjModel } from '../../../model/ChampObj';
import EffectTypeField from '../../effects/EffectTypeField.vue';
import BlockStat from '../../simple/BlockStat.vue';
import EditBtn from '../../simple/EditBtn.vue';
import DamageTypeField from '../DamageTypeField.vue';
import { RatioObjComputed } from '../ratios_info';
import RecursiveRatioDisplay2 from './RecursiveRatioDisplay2.vue';


defineProps<{
  effect: GainEffect
}>();
const obj = inject<ChampObjModel>("obj")!;


const repeat = ref(1);
const editMode = ref(false);


</script>