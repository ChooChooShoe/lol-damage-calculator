<template>
  <div class="data_holder column is-full is-half-desktop">
    <header class="title is-4">
      {{ title }}
      <input
        name="remove_effect"
        class="button is-danger is-pulled-right"
        type="button"
        value="Remove"
        @click="removeSelf()"
      />
    </header>

    <div class="field">
      <span class="field-label">Notes:</span>
      <div class="field-body">
        <textarea class="textarea"></textarea>
      </div>
    </div>
    <hr />
    <CustomSpellEffects
      v-for="i in customEffects"
      :key="'CustomSpellEffects' + i"
      :index="i"
    ></CustomSpellEffects>

    <input
      name="add_effect"
      type="button"
      class="button is-primary"
      value="Add Effect +"
      @click="addEffect()"
    />

  </div>
</template>

<script>
// import MatchReplace from './MatchReplace.vue';
// import SpellEffects from './spells/SpellEffects.vue';
import CustomSpellEffects from './CustomSpellEffects.vue';
// import SimpleTooltip from './SimpleTooltip.vue';
// import SpellNotes from './SpellNotes.vue';
// import SpellSpan from './SpellSpan.vue';
// import {quickMatchReplace} from '../javascript/matchreplace';
// import { spriteBaseUri } from '../javascript/league_data';

export default {
  name: "CustomDamageSource",
  components: {
    // MatchReplace,
    // SpellEffects,
    // SimpleTooltip,
    // SpellNotes,
    // SpellSpan,
    CustomSpellEffects,
  },
  props: ["index"],
  data: function() {
    return {
      title: "Custom Damage Source " + (this.index + 1),
      customEffects: [0],
      lastEffectIndex: 1
    };
  },
  methods: {
    addEffect() {
      this.customEffects.push(this.lastEffectIndex++);
    },
    removeSelf() {
      this.$parent.removeCustomDamageSource(this.index);
    }
  }
};
</script>