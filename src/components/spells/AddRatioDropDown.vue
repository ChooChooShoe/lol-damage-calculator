<template>
  <div class="dropdown" :class="{ 'is-active': isActive > 0 }">
    <div class="dropdown-trigger">
      <button class="button" @click="isActive = 2">
        <span>Add Ratio</span>
        <span class="icon is-small">
          <i :class="{ 'my-angle-up': isActive > 0, 'my-angle-down': isActive < 1 }"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <template v-for="(r,i) in spell_ratios">
          <div :key="i" v-if="!r.extra && $parent.ratios[i] === undefined" class="dropdown-item">
            <a
              class="link"
              :class="r.color"
              @click="$parent.addRatio(i)"
            >{{ r.prefex }} {{ r.sufex }} {{ r.ispercent == false ? 'Ratio' : ''}}</a>
          </div>
          <!-- <hr :key="'hr'+i" class="dropdown-divider" /> -->
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { spell_ratios } from "../../javascript/league_data";

export default {
  name: "AddRatioDropDown",
  props: ["value"],
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    spell_ratios() {
      return spell_ratios;
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e);
    },
    onClick: function(ev) {
      this.isActive--;
    }
  },
  mounted: function() {
    document.addEventListener("click", this.onClick);
  },
  beforeDestroy: function() {
    document.removeEventListener("click", this.onClick);
  }
};
</script>

<style>
i.my-angle-down {
  border: solid seashell;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: translate(0, -2px) rotate(45deg);
}
i.my-angle-up {
  border: solid seashell;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: translate(0, 2px) rotate(-135deg);
}
</style>