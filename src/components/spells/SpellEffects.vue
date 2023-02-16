<template>
  <StacksEffectsVue
    class="float-clear spelleffect__div"
    v-if="effect.effectType === 'Stacks'"
    :effect="effect"
  />

  <GainEffectsVue v-else-if="effect.effectType === 'Gain'" :effect="effect" />
  <DamageSpellEffectsVue
    v-else-if="effect.effectType === 'Damage'"
    :effect="effect"
    :pkey="pkey"
  />
  <HealShieldSpellEffectsVue
    v-else-if="effect.effectType === 'Heal' || effect.effectType === 'Shield'"
    :pkey="pkey"
    :effect="effect"
  />
  <CrowdControlEffectsVue
    v-else-if="effect.effectType === 'CrowdControl'"
    :pkey="pkey"
    :effect="effect"
  />

  <div v-else>Unique Effect...</div>
</template>

<script setup lang="ts">
import { DamageSource } from '@/model/league_data';
import { onMounted, onUnmounted } from 'vue';
import type { RootRatio, SkillLevelingData } from '@/api/DataTypes';
import { damageSources } from '@/global/state';
import StacksEffectsVue from './typedspelleffects/StacksEffectsVue.vue';
import GainEffectsVue from './typedspelleffects/GainEffectsVue.vue';
import DamageSpellEffectsVue from './typedspelleffects/DamageSpellEffectsVue.vue';
import HealShieldSpellEffectsVue from './typedspelleffects/HealShieldSpellEffectsVue.vue';
import CrowdControlEffectsVue from './typedspelleffects/CrowdControlEffectsVue.vue';

const props = defineProps<{
  details: SkillLevelingData;
  effect: RootRatio;
  effectindex: number;
  pkey: string;
  custom: boolean;
}>();

const damageSource = new DamageSource('Magic', 8);

onMounted(() => {
  if (damageSources) damageSources[props.pkey] = [damageSource];
});
onUnmounted(() => {
  if (damageSources) delete damageSources[props.pkey];
});

// const dmg_premitigation = computedRatioValues.damagePreTotal;
// const dmg_postmitigation = computedRatioValues.damagePostValue;

// damageSource.repeat = repeat;
// damageSource.postIsManual = false;
// damageSource.damage_type = damage_type;
// damageSource.dmg_premitigation = dmg_premitigation;
// damageSource.dmg_postmitigation = dmg_postmitigation;
</script>

<style>
input[type='number'].simple-input {
  width: 6em;
}

input[type='button'].repeat {
  border-width: 1px;
  margin-bottom: 0;
  height: 2em;
  font-size: 0.9em;
  padding: 0 0.5em;
  margin: 0 0.2em;
}

.spelleff--totals {
  border-top: aqua 1px solid;
}

.spelleffect__div {
  border-bottom: #282f2f solid 1px;
  margin-bottom: 0.4em;
  display: grid;
  justify-content: left;
  align-items: baseline;
  grid-template-columns: fit-content(0) 1fr auto;
  column-gap: 0.5rem;
}

.spelleffect__title {
  color: white;
  white-space: nowrap;
  justify-self: end;
  font-weight: bold;
  font-size: 80%;
  text-transform: uppercase;
}

.spelleffect__editbtn {
  grid-row: 1 / 4;
  grid-column: 3;
}

.spelleffect__total {
  font-weight: bold;
  font-size: 110%;
}

.spelleffect__repeat {
  font-weight: bold;
  font-style: italic;
  font-size: 110%;
  color: yellow;
}

.spelleff--edit:before {
  content: '\25bc';
  color: #ddd;
}

.spelleff--edit.active:before {
  content: '\25b2';
  color: #ddd;
}

.spelleff--content.active {
  max-height: 1000px !important;
  overflow: hidden !important;
  transition: max-height 0.2s ease-in;
}

.spelleff--content {
  max-height: 0;
  overflow: hidden;
  color: unset;
  margin: 0;
  padding: 0;
  transition: max-height 0.2s ease-out;
  grid-column: span 3;
}
</style>
