
<template>
  <div v-html="calchtml()"></div>
</template>

<script>
import matchReplaceSpellEffects from '../javascript/matchreplace';
export default {
  name: 'spell-tooltip',
  props: ['spell', 'spellrankindex'],
  template: `<div v-html="calchtml()"></div>`,
  methods: {
    calchtml: function () {
      // console.log(form.spellDao.tooltip.split(/(\W)/));
      const defaultTooltipHtml = '<p>' + this.spell.description.join('</p><p>') + '</p>';
      let ret = matchReplaceSpellEffects(defaultTooltipHtml, false);
      return ret.str;
    },
  }
};
</script>

<style scoped>
</style>
