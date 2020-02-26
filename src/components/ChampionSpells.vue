<template>
  <div class="data_holder column is-full is-half-desktop">
    <img class="spell-image" :style="imageStyle" :width="spell.image.w" :height="spell.image.h" />
    <h2 class="title is-4">{{ spell.name }} ({{ spell.skillkey }})</h2>
    <match-replace :text="'<p>' + spell.description.join('</p><p>') + '</p>'"></match-replace>
    <hr />
    <div class="is-pulled-right" v-if="spell.maxrank > 0">
      <span>Spell Rank ({{ spellrankindex + 1 }})</span>
      <fieldset class="spellrank">
        <input
          v-model.number="spellrankindex"
          type="radio"
          name="spellrank"
          value="0"
          title="Rank 1"
        />
        <input
          v-if="spell.maxrank > 1"
          v-model.number="spellrankindex"
          type="radio"
          name="spellrank"
          value="1"
          title="Rank 2"
        />
        <input
          v-if="spell.maxrank > 2"
          v-model.number="spellrankindex"
          type="radio"
          name="spellrank"
          value="2"
          title="Rank 3"
        />
        <input
          v-if="spell.maxrank > 3"
          v-model.number="spellrankindex"
          type="radio"
          name="spellrank"
          value="3"
          title="Rank 4"
        />
        <input
          v-if="spell.maxrank > 4"
          v-model.number="spellrankindex"
          type="radio"
          name="spellrank"
          value="4"
          title="Rank 5"
        />
        <input
          v-if="spell.maxrank > 5"
          v-model.number="spellrankindex"
          type="radio"
          name="spellrank"
          value="5"
          title="Rank 6"
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
        <spell-span :list="spell.cooldown" :spellrankindex="spellrankindex"></spell-span>seconds
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
import MatchReplace from "./MatchReplace.vue";
import SpellEffects from "./spells/SpellEffects.vue";
import CustomSpellEffects from "./spells/CustomSpellEffects.vue";
import SimpleTooltip from "./SimpleTooltip.vue";
import SpellNotes from "./SpellNotes.vue";
import SpellSpan from "./SpellSpan.vue";
import { quickMatchReplace } from "../javascript/matchreplace";
import { spriteBaseUri } from "../javascript/league_data";

export default {
  name: "champion-spells",
  components: {
    MatchReplace,
    SpellEffects,
    SimpleTooltip,
    SpellNotes,
    SpellSpan,
    CustomSpellEffects
  },
  props: ["id", "spell", "champion"],
  data: function() {
    return {
      spellrankindex: (this.spell.maxrank || 0) - 1,
      customEffects: [],
      lastEffectIndex: 0
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
      return {
        float: "right",
        background:
          "url(" +
          spriteBaseUri +
          this.spell.image.sprite +
          ") -" +
          this.spell.image.x +
          "px -" +
          this.spell.image.y +
          "px"
      };
    }
  },
  methods: {
    addEffect: function() {
      this.customEffects.push(this.lastEffectIndex++);
    },
    matchReplace: function(text) {
      return quickMatchReplace(text);
    }
  }
};
</script>

<style>
.spellrank {
  border: none;
  /* float: left; */
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
  color: #1e8ad6;
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
