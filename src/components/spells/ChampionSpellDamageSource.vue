<template>
  <div class="data_holder col fill ChampionSpellDamageSource">
    <SpellImage class="ds__spellimage" :image="spell.image"></SpellImage>

    <span class="ds__title">{{ spell.name }} ({{ spell.skillkey }})</span>
    <DropdownSelect class="spellrank2" v-if="spell.maxrank > 0" label="Rank" :value="spell.rankindex + 1">
      <input
        v-for="(_, index) in Array(spell.maxrank)"
        :class="{ success: spell.rankindex === index }"
        :key="index"
        @click="() => (spell.rankindex = index)"
        type="button"
        :value="index + 1"
        :title="'Rank ' + (index + 1)"
      />
    </DropdownSelect>
    <span class="ds__data" v-if="spell.cooldown">
      Cooldown:
      <SpellSpan :list="spell.cooldown"></SpellSpan>
    </span>
    <span class="ds__data" v-if="spell.cost">
      Cost:
      <SpellSpan :list="spell.cost"></SpellSpan>&nbsp;
      <span v-html="costtype"></span>
    </span>
    <a class="float-right" target="_blank" :href="wikiHref">↪Wiki&nbsp;</a>

    <div class="ds__description" tabindex="0" v-html="spell.descriptionHtml"></div>

    <!-- <div v-if="spell.maxrank > 0">
      <span>
        Spell Rank (
        <span class="spelleffect">{{ spell.rankindex + 1 }}</span>
        / {{ spell.maxrank }} )
      </span>
      <fieldset class="spellrank">
        <input
          v-for="(_, index) in Array(spell.maxrank)"
          :key="index"
          v-model.number="spell.rankindex"
          type="radio"
          name="spellrank"
          :value="index"
          :title="'Rank ' + (index + 1)"
        />
      </fieldset>
    </div> -->

    <div>
      <!-- <div v-if="spell.customlabel">
        <span v-html="matchReplace(spell.customlabel)"></span>:
        <span class="blue" v-html="matchReplace(spell.custominfo)"></span>
      </div> -->
      <!-- <div v-if="spell.target_range">
        Target Range:
        <span class="blue" v-html="targetRange"></span>
      </div> -->
      <!-- <div v-if="spell.effect_range">Effect Range: <span class="blue" v-html="matchReplace(spell.effect_range)"></span></div> -->
      <!-- <div v-if="spell.targeting">
        Targeting:
        <span class="blue" v-html="targeting"></span>
      </div> -->
    </div>

    <hr />

    <!-- spell.effects and spell.effects[].subeffects are flattened into SpellEffects -->
    <template v-for="(root_effect, root_index) in spell.effects" :key="root_index">
      <SpellEffects
        v-for="(sub_effect, sub_index) in root_effect.subeffects"
        :key="root_index + 'x' + sub_index"
        :effect="sub_effect"
        :effectindex="sub_index"
        :damagingEffects="damagingEffects"
      ></SpellEffects>
    </template>

    <CustomSpellEffects v-for="item in customEffects" :key="'CustomSpellEffects' + item" :index="item" :damagingEffects="damagingEffects"></CustomSpellEffects>

    <input name="add_effect" type="button" class="button is-primary" value="Add Effect +" @click="addEffect()" />

    <!-- <spell-notes :spell="spell" :id="id"></spell-notes> -->
  </div>
</template>

<script>
import { ref, computed, toRefs, watchEffect, provide, reactive } from "vue";
import SpellImage from "../../timeline/SpellImage.vue";
import MatchReplace from ".././MatchReplace.vue";
import SpellEffects from "./SpellEffects.vue";
import CustomSpellEffects from "./CustomSpellEffects.vue";
// import SimpleTooltip from ".././SimpleTooltip.vue";
import SpellNotes from ".././SpellNotes.vue";
import SpellSpan from ".././SpellSpan.vue";
import { quickMatchReplace } from "../../javascript/matchreplace";
import { spriteBaseUri } from "../../javascript/league_data";
import DropdownSelect from "../simple/DropdownSelect.vue";

export default {
  name: "ChampionSpellDamageSource",
  components: {
    MatchReplace,
    SpellEffects,
    // SimpleTooltip,
    SpellNotes,
    SpellSpan,
    CustomSpellEffects,
    DropdownSelect,
    SpellImage,
  },
  props: {
    spell: Object,
    champion: String,
    damagingEffects: Object,
    multispells: Boolean,
  },
  setup(props) {
    const { spell, champion } = toRefs(props);
    let obj = reactive({
      clearStats: false,
      champ: "",
    });

    spell.value.rankindex = ref(0);
    const customEffects = ref([]);
    const lastEffectIndex = ref(0);

    watchEffect(() => {
      spell.value.rankindex = (spell.value.maxrank || 1) - 1;
    });
    provide("rootspell", spell);

    return {
      obj,
      costtype: computed(() => quickMatchReplace(spell.value.costtype || "Mana")),
      targeting: computed(() => quickMatchReplace(spell.value.targeting || "")),
      targetRange: computed(() => quickMatchReplace(String(spell.value.target_range || ""))),
      imageStyle: computed(() => {
        const i = spell.value.image;
        return {
          background: `url("${spriteBaseUri}${i.sprite}") -${i.x}px -${i.y}px`,
        };
      }),
      wikiHref: computed(() => {
        const champName = champion.value?.replace(/ /g, "_");
        const spellName = spell.value?.name.replace(/ /g, "_");
        return `https://leagueoflegends.fandom.com/wiki/${champName}/LoL#${spellName}`;
      }),
      matchReplace: quickMatchReplace,
      customEffects,
      addEffect: () => {
        customEffects.value.push(lastEffectIndex.value);
        lastEffectIndex.value = lastEffectIndex.value + 1;
      },
    };
  },
};
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

.ds__description {
  width: 55vw;
  height: 1.5em;
  white-space: nowrap;
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
.cost-container [data-active="true"] {
  color: #1e8ad6;
}

.cooldown-container [data-active="true"] {
  color: #1e8ad6;
}

.spelleffect {
  color: #8e7dad;
}

.capture-unknown {
  color: #a52323;
}
</style>
