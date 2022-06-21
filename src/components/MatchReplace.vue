<script>
import {matchReplaceSpellEffects} from "../javascript/matchreplace";

import SimpleTooltip from "./SimpleTooltip.vue";
import HtmlTooltip from "./HtmlTooltip.vue";
import SpellSpan from "./SpellSpan.vue";
import NoWiki from "./NoWiki.vue";
import Ref from "./Ref.vue";

export default {
  name: "match-replace",
  components: {
    SimpleTooltip,
    HtmlTooltip,
    SpellSpan,
    NoWiki,
    Ref
  },
  //spellrankindex is need for child spell-spans to bind to.
  // text is what is match replaced.
  props: ["spellrank", "text", "modelValue"],
  data: function() {
    return {
      templateRender: null
    };
  },
  computed: {
    template: function() {
      return null;
      const text = this.text || this.$slots.default || "";
      const replaced = matchReplaceSpellEffects(text.toString());
      this.$emit('update:modelValue', replaced.vars);
      return `<div>${replaced.str}</div>`;
    }
  },
  watch: {
    // Every time the template prop changes, I recompile it to update the DOM
    template: {
      immediate: true, // makes the watcher fire on first render, too.
      handler() {
        return null;
        var res = Vue.compile(this.template);

        this.templateRender = res.render;

        // staticRenderFns belong into $options,
        // appearantly
        this.$options.staticRenderFns = [];

        // clean the cache of static elements
        // this is a cache with the results from the staticRenderFns
        this._staticTrees = [];

        // Fill it with the new staticRenderFns
        for (var i in res.staticRenderFns) {
          //staticRenderFns.push(res.staticRenderFns[i]);
          this.$options.staticRenderFns.push(res.staticRenderFns[i]);
        }
      }
    }
  },
  render(h) {
    return null;
    if (!this.templateRender) {
      return h("div", "loading...");
    } else {
      // If there is a template, I'll show it
      return this.templateRender();
    }
  }
};
</script>
