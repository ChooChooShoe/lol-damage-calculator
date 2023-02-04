<template>
  <div class="data_holder c50">
    <h3>
      {{ title }}
      <input
        name="remove_effect"
        class="button is-danger is-pulled-right"
        type="button"
        value="Remove"
        @click="removeSelf()"
      />
    </h3>
    <label>
      Enabled
      <input type="checkbox" v-model="enabled" />
    </label>
    <div class="field">
      <span class="field-label">Notes:</span>
      <div class="field-body">
        <textarea class="textarea"></textarea>
      </div>
    </div>
    <hr />
    <SpellEffects
      v-for="i in customEffects"
      :key="'SpellEffects' + i"
      :index="i"
    ></SpellEffects>

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
import SpellEffects from './SpellEffects.vue';
// import SimpleTooltip from './SimpleTooltip.vue';
// import SpellNotes from './SpellNotes.vue';
// import SpellSpan from './SpellSpan.vue';
// import { spriteBaseUri } from '../javascript/league_data';

export default {
  name: 'CustomDamageSource',
  components: {
    SpellEffects,
    // SimpleTooltip,
    // SpellNotes,
    // SpellSpan,
  },
  props: ['index'],
  data: function () {
    return {
      title: 'Custom Damage Source ' + (this.index + 1),
      customEffects: [0],
      lastEffectIndex: 1,
      enabled: true,
    };
  },
  methods: {
    addEffect() {
      this.customEffects.push(this.lastEffectIndex++);
    },
    removeSelf() {
      this.$parent.removeCustomDamageSource(this.index);
    },
  },
};
</script>
