<template>
  <div class="data_holder column">
    <img class="spell-image"
      :style="{ float: 'right', background: 'url('+spriteurl + ') -' + spell.image.x + 'px -' + spell.image.y + 'px'}"
      :width="spell.image.w" :height="spell.image.h">
    <h2>{{ spell.name }} ({{ spellkey }})</h2>
    <match-replace :text="'<p>' + spell.description.join('</p><p>') + '</p>'" :spellrankindex="spellrankindex"></match-replace>

    <div class="float-left" v-if="spell.maxrank > 0">
      Spell Rank ({{ spellrankindex + 1 }})
      <fieldset class="spellrank input" >
      <input v-model.number="spellrankindex" class="spellrank1" type="radio" name="spellrank" value="0" title="Rank 1">
      <input v-if="spell.maxrank > 1" v-model.number="spellrankindex" class="spellrank2" type="radio" name="spellrank" value="1" title="Rank 2">
      <input v-if="spell.maxrank > 2" v-model.number="spellrankindex" class="spellrank3" type="radio" name="spellrank" value="2" title="Rank 3">
      <input v-if="spell.maxrank > 3" v-model.number="spellrankindex" class="spellrank4" type="radio" name="spellrank" value="3" title="Rank 4">
      <input v-if="spell.maxrank > 4" v-model.number="spellrankindex" class="spellrank5" type="radio" name="spellrank" value="4" title="Rank 5">
      <input v-if="spell.maxrank > 5" v-model.number="spellrankindex" class="spellrank6" type="radio" name="spellrank" value="5" title="Rank 6">
      </fieldset>
    </div>
      
    <div class="float-right">
    <div v-if="spell.customlabel"><span v-html="matchReplace(spell.customlabel)"> </span>: <spell-span :list="[spell.custominfo]" :spellrankindex="0"></spell-span></div>
    <div v-if="spell.cooldown">Cooldown: <spell-span :list="spell.cooldown" :spellrankindex="spellrankindex"></spell-span> seconds</div>
    <div v-if="spell.cost">Cost: <spell-span :list="spell.cost" :spellrankindex="spellrankindex"></spell-span> <span v-html="matchReplace(spell.costtype)"></span></div>
    <div v-if="spell.target_range">Target Range: <spell-span :list="[spell.target_range]" :spellrankindex="0"></spell-span></div>
    <div v-if="spell.effect_range">Effect Range: <spell-span :list="[spell.effect_range]" :spellrankindex="0"></spell-span></div>
    <div v-if="spell.targeting">Targeting: <spell-span :list="[spell.targeting]" :spellrankindex="0"></spell-span></div>
    </div>
    
    <spell-effects
      v-for="(item, index) in spell.leveling" 
      :id="id + '-effect-' + index"
      :key="id + '-effect-' + index"
      :spell="spell"
      :effect="item"
      :effectindex="index"
      :spellrankindex="spellrankindex"
      :iscustom="false">
    </spell-effects>
  
    <spell-effects
      v-for="(item, index) in customEffects" 
      :id="id + '-custom-effect-' + item"
      :key="id + '-custom-effect-' + item"
      :spell="spell"
      effect=""
      :effectindex="item"
      :spellrankindex="spellrankindex"
      :iscustom="true">
    </spell-effects>
    
    <input name="add_effect" type="button" value="Add Effect +" @click="addEffect()"></input>
    
    <spell-notes :spell="spell" :id="id"></spell-notes>
    </div>
</template>

<script>
import MatchReplace from './MatchReplace.vue';
import SpellEffects from './SpellEffects.vue';
import SimpleTooltip from './SimpleTooltip.vue';
import SpellNotes from './SpellNotes.vue';
import SpellSpan from './SpellSpan.vue';
import matchReplaceSpellEffects from '../javascript/matchreplace';

export default {
  name: 'champion-spells',
  components: {
    MatchReplace,
    SpellEffects,
    SimpleTooltip,
    SpellNotes,
    SpellSpan,
  },
  props: ['id', 'spellkey', 'spell', 'champion', 'spriteurl'],
  data: function () {
    return {
      spellrankindex: (this.spell.maxrank || 0) - 1,
      customEffects: [],
      lastEffectIndex: 0,
    }
  },
  methods: {
    addEffect: function () {
      this.customEffects.push(this.lastEffectIndex++);
    },
    matchReplace: function (text) {
      return matchReplaceSpellEffects(text, this.spellrankindex).str
    },
  },
};
</script>

<style scoped>
</style>
