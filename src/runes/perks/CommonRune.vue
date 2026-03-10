<template>
  <div class="data_holder col fill commonrune">
    <span class="ds__title">{{ p.name }} ({{ p.id }})</span>


    <p v-html="p.description"></p>
    <p v-html="p.description2"></p>
    <p v-html="p.description3"></p>
    <p v-html="p.description4"></p>

    <SinglePerk :perk="p" :selection="-1"></SinglePerk>

    <span v-if="p.cooldown" class="ds__cooldown"> Cooldown: <span v-html="p.cooldown"></span> seconds</span>
    <span v-if="p.range" class="ds__range"> Range: <span v-html="p.range"></span></span>
    <hr />
    <SubSkillList :subskills="[]" :idx="p.name" />



    {{ p.endOfGameStatDescs }}
  </div>
</template>
<script setup lang="ts">
import SubSkillList from '@/components/spells/SubSkillList.vue';
import type { Perk } from '../perks';
import SinglePerk from '../SinglePerk.vue';
defineProps<{ p: Perk }>();

</script>

<style>
.ds__title {
  font-size: 1.2em;
  font-weight: normal;
  margin-right: 1rem;
}
</style>
