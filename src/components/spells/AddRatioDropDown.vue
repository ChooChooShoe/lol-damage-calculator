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
          <div
            :key="i"
            v-if="!r.extra && $parent.ratios[i] === undefined"
            @click="$parent.addRatio(i)"
            class="dropdown-item"
          >
            <a
              :class="r.color"
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
      isActive: false,
    };
  },
  computed: {
    spell_ratios() {
      return spell_ratios;
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e);
    },
    onClick: function (ev) {
      this.isActive--;
    },
  },
  mounted: function () {
    document.addEventListener("click", this.onClick);
  },
  beforeDestroy: function () {
    document.removeEventListener("click", this.onClick);
  },
};
</script>

<style>
.dropdown {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.dropdown.is-active .dropdown-menu,
.dropdown.is-hoverable:hover .dropdown-menu {
  display: block;
}
.dropdown-menu {
  display: none;
  left: 0;
  min-width: 12rem;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  z-index: 20;
}
.dropdown-content {
  background-color: #282f2f;
  border-radius: 0.4em;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}
.dropdown-item {
  color: #fff;
  display: block;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 0.375rem 1rem;
  position: relative;
  cursor: pointer;
}
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