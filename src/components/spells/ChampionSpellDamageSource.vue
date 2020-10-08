<template>
  <div class="data_holder c50">
    <img class="spell-image" :style="imageStyle" :width="spell.image.w" :height="spell.image.h" />
    <h3>{{ spell.name }} ({{ spell.skillkey }})</h3>
    <match-replace :text="'<p>' + spell.description.join('</p><p>') + '</p>'"></match-replace>
    <hr />
    <div style="float: right" v-if="spell.maxrank > 0">
      <span>
        Spell Rank (
        <span class="spelleffect">{{ spellrankindex + 1 }}</span>
        / {{spell.maxrank}} )
      </span>
      <fieldset class="spellrank">
        <input
          v-for="(_, index) in Array(spell.maxrank)"
          :key="index"
          v-model.number="spellrankindex"
          type="radio"
          name="spellrank"
          :value="index"
          :title="'Rank ' + (index+1)"
        />
      </fieldset>
    </div>

    <div>
      <div v-if="spell.customlabel">
        <span v-html="matchReplace(spell.customlabel)"></span>:
        <span class="blue" v-html="matchReplace(spell.custominfo)"></span>
      </div>
      <div v-if="spell.cooldown">
        Cooldown:
        <spell-span :list="spell.cooldown" :spellrankindex="spellrankindex"></spell-span>
        &nbsp;seconds
      </div>
      <div v-if="spell.cost">
        Cost:
        <spell-span :list="spell.cost" :spellrankindex="spellrankindex"></spell-span>&nbsp;
        <span v-html="costtype"></span>
      </div>
      <div v-if="spell.target_range">
        Target Range:
        <span class="blue" v-html="targetRange"></span>
      </div>
      <!-- <div v-if="spell.effect_range">Effect Range: <span class="blue" v-html="matchReplace(spell.effect_range)"></span></div> -->
      <div v-if="spell.targeting">
        Targeting:
        <span class="blue" v-html="targeting"></span>
      </div>
    </div>

    <hr />
    <spell-effects
      v-for="(item, index) in spell.effects"
      :key="'spell-effects-' + index"
      :spell="spell"
      :effect="item"
      :effectindex="index"
      :spellrankindex="spellrankindex"
    ></spell-effects>

    <CustomSpellEffects
      v-for="(item) in customEffects"
      :key="'CustomSpellEffects' + item"
      :index="item"
    ></CustomSpellEffects>

    <input
      name="add_effect"
      type="button"
      class="button is-primary"
      value="Add Effect +"
      @click="addEffect()"
    />

    <spell-notes :spell="spell" :id="id"></spell-notes>
  </div>
</template>

<script>
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
  props: ["id", "spell", "champion"],
  data: function () {
    return {
      spellrankindex: (this.spell.maxrank || 0) - 1,
      customEffects: [],
      lastEffectIndex: 0,
    };
  },
  computed: {
    costtype() {
      return quickMatchReplace(this.spell.costtype || "Mana");
    },
    targeting() {
      return quickMatchReplace(this.spell.targeting || "");
    },
    targetRange() {
      return quickMatchReplace(String(this.spell.target_range || ""));
    },
    imageStyle() {
      const i = this.spell.image;
      return {
        float: "right",
        background: `url("${spriteBaseUri}${i.sprite}") -${i.x}px -${i.y}px`,
      };
    },
  },
  methods: {
    addEffect: function () {
      this.customEffects.push(this.lastEffectIndex++);
    },
    matchReplace: function (text) {
      return quickMatchReplace(text);
    },
  },
};
</script>

<style>
.spellrank {
  border: none;
}

.spellrank input {
  -webkit-appearance: none;
  -moz-appearance: none;
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

.spell-effect {
  border: #1e8ad6 solid 1px;
  margin-bottom: 5px;
  padding: 0;
}
</style>
