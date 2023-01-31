<template>
    <BlockStat v-model:total="obj.legendStacks" title="Legend stacks" labelClass="lifesteal" suffix=" stacks" :min="0"
        :max="p.id == 9103 ? 15 : 10">
        <template v-slot:default>
            <p v-html="p.subskills && p.subskills[1]?.description"></p>
        </template>
        <template v-slot:footer>
            <p>
                Legend stacks: <b class="total">{{ obj.legendStacks }}</b>.
            </p>
        </template>
    </BlockStat>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import BlockStat from '../../components/simple/BlockStat.vue';
import SubSkillList from '../../components/spells/SubSkillList.vue';
import { ChampObjModel } from '../../model/ChampObj';
import { Perk } from '../perks';
defineProps<{ p: Perk }>();
const obj = inject<ChampObjModel>("obj")!;

</script>