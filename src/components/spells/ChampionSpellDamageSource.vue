<template>
  <TabView class="data_holder col-12" v-model:activeIndex="activeTab">
    <TabPanel :header="spell.display_name || spell.name">
      <SpellImage class="ds__spellimage" :image="spell.image"></SpellImage>

      <span class="ds__title" :title="spell.name">
        {{ spell.display_name || spell.name }} ({{ spell.skill }})
      </span>
      <DropdownSelect
        class="spellrank2"
        v-if="spell.maxrank && spell.maxrank > 0"
        label="Rank"
        :value="String(rankindex + 1)"
      >
        <input
          v-for="(_, index) in Array(spell.maxrank || 5)"
          :class="{ success: rankindex === index }"
          :key="index"
          @click="rankindex = index"
          type="button"
          :value="index + 1"
          :title="'Rank ' + (index + 1)"
        />
      </DropdownSelect>

      <AbilityInfo :skill="spell" />

      <a class="float-right" target="_blank" :href="wikiHref">↪Wiki&nbsp;</a>

      <!-- <div class="ds__description" tabindex="0">
        <p
          v-for="(x, i) in spell.description"
          v-html="x.descriptionHTML"
          :key="i"
        ></p>
      </div> -->

      <hr />

      <SubSkillList
        :subskills="spell.description"
        :skill-model="skillModel"
        :idx="idx"
      />
      <div class="subskills__grid">
        <SubSkillVue
          v-for="(sub_skill, index) in customEffects"
          :key="`${idx}_${index}`"
          :skill="sub_skill"
          :sub-skills="skillModel.effects[index]"
          :idx="`Custom: ${idx}_${index}`"
        ></SubSkillVue>
      </div>

      <!-- <input
          name="add_effect"
          type="button"
          class="button is-primary"
          value="Add Effect +"
          @click="addEffect()"
        /> -->

      <!-- <spell-notes :spell="spell" :id="id"></spell-notes> -->
    </TabPanel>
    <TabPanel header="Simple">
      <p v-for="x in spell.blurb" v-html="x" :key="x"></p>
    </TabPanel>
    <TabPanel header="Details">
      <p
        v-for="(x, i) in spell.description"
        v-html="x.descriptionHTML"
        :key="i"
      ></p>
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
import SpellImage from '../../timeline/SpellImage.vue';
import SpellEffects from './SpellEffects.vue';
// import SimpleTooltip from ".././SimpleTooltip.vue";
import SpellNotes from '.././SpellNotes.vue';
import SpellSpan from '.././SpellSpan.vue';
import { spriteBaseUri } from '../../model/league_data';
import DropdownSelect from '../simple/DropdownSelect.vue';
import type { SkillData, SkillModel } from '../../api/DataTypes';
import SubSkillList from './SubSkillList.vue';
import { getSkillModel, type ChampionName } from '@/model/ChampObj';
import AbilityInfo from '@/wiki/AbilityInfo.vue';
import SubSkillVue from './SubSkillVue.vue';

interface ReactSkill {
  rankindex: Ref<number>;
}
const props = defineProps<{
  spell: SkillData;
  champion: ChampionName;
  idx: string;
}>();

const activeTab = ref(0);

const skillModel = getSkillModel(props.champion, props.spell.name);
const rankindex = ref(0);
const customEffects = ref([]);
const lastEffectIndex = ref(0);

watchEffect(() => {
  rankindex.value = (props.spell.maxrank || 1) - 1;
});
provide('rankindex', rankindex);
provide('skillbase', props.spell);

const imageStyle = computed(() => {
  const i = props.spell.image!;
  return {
    background: `url("${spriteBaseUri}${i.sprite}") -${i.x}px -${i.y}px`,
  };
});

const wikiHref = computed(() => {
  const champName = props.champion?.replace(/ /g, '_');
  const spellName = props.spell?.name.replace(/ /g, '_');
  return `https://leagueoflegends.fandom.com/wiki/${champName}/LoL#${spellName}`;
});

const addEffect = () => {
  // customEffects.value.push({
  //   index: 0,
  //   title: "Custom Damage " + (customEffects.value.length + 10).toString(36).toUpperCase(),
  //   damage_type: "Magic",
  //   ratios: {
  //     base_damage: [70, 90, 110, 130, 150],
  //     player_total_ap: 1,
  //     player_total_ad: 1,
  //     player_bonus_ad: 0.5,
  //   },
  // });
};

function load(event: any) {
  console.log('load', event);
}
</script>

<style>
.ChampionSpellDamageSource {
}

.ds__spellimage {
  margin: 0.2rem 1rem 0.2rem 0.2rem;
  float: left;
}

.ds__title {
  font-size: 1.2em;
  font-weight: normal;
  margin-right: 1rem;
}

.ds__data {
  margin-right: 1em;
}

.ds__description p {
  margin: 0;
}

.ds__description {
  height: 1.8em;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #00000000;
}

.ds__description:hover {
  border: 1px solid #1e8ad6;
  cursor: pointer;
}

.ds__description:focus {
  cursor: auto;
  width: auto;
  height: auto;
  white-space: normal;
  text-overflow: clip;
  line-break: auto;
}

.spellrank {
  display: inline-block;
  border: none;
}

.spellrank input {
  appearance: none;
  display: inline-block;
  position: relative;
  background-color: #aaa700;
  color: #eee;
  height: 18px;
  width: 18px;
  margin: 0.1rem;
  border: 0;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
}

.spellrank input:checked {
  background: #fff700;
}

.spellrank input:checked ~ input {
  background: #f1f1f1;
}

.dd-content:hover input {
  background-color: #9c9700 !important;
  color: #eee;
}

.dd-content input:hover ~ input {
  background-color: #282f2f !important;
  color: #eee;
}

.cost-container [data-active='true'] {
  color: #1e8ad6;
}

.cooldown-container [data-active='true'] {
  color: #1e8ad6;
}

.spelleffect {
  color: #8e7dad;
}

.capture-unknown {
  color: #a52323;
}
</style>
