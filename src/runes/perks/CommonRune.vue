<template>
    <div class="data_holder col fill">
        <span class="ds__title">{{ p.name }} ({{ p.id }})</span>
        <hr />
        <SubSkillList :subskills="makeSubskills" idx="rune_8008" :custom="false"></SubSkillList>
    </div>
</template>

<script setup lang="ts">
import { perks } from '../perks.json';
import SubSkillList from '../../components/spells/SubSkillList.vue';
import { Perk } from '../perks';
import { computed } from '@vue/reactivity';
import { SubSkill } from '../../api/DataTypes';

const props = defineProps<{ p: Perk, subskills?: SubSkill[] }>();
const makeSubskills = computed(() => {
    const x: SubSkill[] | undefined = props.subskills || props.p.root_ratios || [];
    if (x && x[0]) {
        x[0].img = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${props.p.iconPath.slice(22).toLowerCase()}`
    }
    return x;
});
</script>