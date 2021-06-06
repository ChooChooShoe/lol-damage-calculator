<template>
  <div class="data_holder c50 ChampionSpellDamageSource">
    <img class="spell-image" :style="imageStyle" :width="spell.image.w" :height="spell.image.h" />
    <h3>
      {{ spell.name }} ({{ spell.skillkey }}) -
      <a target="_blank" :href="wikiHref">View on Wiki</a>
    </h3>
    <div v-html="spell.descriptionHtml"></div>
    <hr />
    <div style="float: right" v-if="spell.maxrank > 0">
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
    </div>

    <div>
      <!-- <div v-if="spell.customlabel">
        <span v-html="matchReplace(spell.customlabel)"></span>:
        <span class="blue" v-html="matchReplace(spell.custominfo)"></span>
      </div> -->
      <div v-if="spell.cooldown">
        Cooldown:
        <SpellSpan :list="spell.cooldown"></SpellSpan>
        &nbsp;seconds
      </div>
      <div v-if="spell.cost">
        Cost:
        <SpellSpan :list="spell.cost"></SpellSpan>&nbsp;
        <span v-html="costtype"></span>
      </div>
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
      ></SpellEffects>
    </template>

    <CustomSpellEffects v-for="item in customEffects" :key="'CustomSpellEffects' + item" :index="item"></CustomSpellEffects>

    <input name="add_effect" type="button" class="button is-primary" value="Add Effect +" @click="addEffect()" />

    <!-- <spell-notes :spell="spell" :id="id"></spell-notes> -->
  </div>
</template>

<script>
import { ref, computed, toRefs, watchEffect, provide, reactive } from "vue";
import MatchReplace from ".././MatchReplace.vue";
import SpellEffects from "./SpellEffects.vue";
import CustomSpellEffects from "./CustomSpellEffects.vue";
// import SimpleTooltip from ".././SimpleTooltip.vue";
import SpellNotes from ".././SpellNotes.vue";
import SpellSpan from ".././SpellSpan.vue";
import { quickMatchReplace } from "../../javascript/matchreplace";
import { spriteBaseUri } from "../../javascript/league_data";

export default {
  name: "ChampionSpellDamageSource",
  components: {
    MatchReplace,
    SpellEffects,
    // SimpleTooltip,
    SpellNotes,
    SpellSpan,
    CustomSpellEffects,
  },
  props: {
    spell: Object,
    champion: String,
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

    return {obj,
      costtype: computed(() => quickMatchReplace(spell.value.costtype || "Mana")),
      targeting: computed(() => quickMatchReplace(spell.value.targeting || "")),
      targetRange: computed(() => quickMatchReplace(String(spell.value.target_range || ""))),
      imageStyle: computed(() => {
        const i = spell.value.image;
        return {
          float: "right",
          background: `url("${spriteBaseUri}${i.sprite}") -${i.x}px -${i.y}px`,
        };
      }),
      wikiHref: computed(() => {
        const champName = champion.value.replace(/ /g, "_");
        const spellName = spell.value.name.replace(/ /g, "_");
        return `https://leagueoflegends.fandom.com/wiki/${champName}#${spellName}`;
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
.spellrank {
  border: none;
}

.spellrank input {
  appearance: none;
  display: inline-block;
  position: relative;
  background-color: #aaa700;
  color: #eee;
  height: 24px;
  width: 24px;
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
