<script>
import matchReplaceSpellEffects from '../javascript/matchreplace';
import Vue from 'vue';
import SimpleTooltip from './SimpleTooltip.vue';
import SpellSpan from './SpellSpan.vue';
import NoWiki from './NoWiki.vue';
import Ref from './Ref.vue';

export default {
  name: 'match-replace',
  components: {
    SimpleTooltip,
    SpellSpan,
    NoWiki,
    Ref
  },
  props: ['spellrankindex', 'text', 'value'],
  data: function () {
    return {
      templateRender: null,
    }
  },
  computed: {
    template: function () {
      const text = this.text || this.$slots.default || '';
      const replaced = matchReplaceSpellEffects(text.toString(), this.spellrankindex || 0);
      this.$emit('input', replaced.vars);
      return `<div>${replaced.str}</div>`;
    },
  },
  watch: {
    // Every time the template prop changes, I recompile it to update the DOM
    template: {
      immediate: true, // makes the watcher fire on first render, too.
      handler() {
        var res = Vue.compile(this.template);

        this.templateRender = res.render;

        // staticRenderFns belong into $options, 
        // appearantly
        this.$options.staticRenderFns = []

        // clean the cache of static elements
        // this is a cache with the results from the staticRenderFns
        this._staticTrees = []

        // Fill it with the new staticRenderFns
        for (var i in res.staticRenderFns) {
          //staticRenderFns.push(res.staticRenderFns[i]);
          this.$options.staticRenderFns.push(res.staticRenderFns[i])
        }
      }
    }
  },
  render(h) {
    if (!this.templateRender) {
      return h('div', 'loading...');
    } else { // If there is a template, I'll show it
      return this.templateRender();
    }
  },
};
</script>

<style scoped>
</style>
