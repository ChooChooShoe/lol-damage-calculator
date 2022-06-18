<template>
  <div class="blockstat" :class="[totalClass, bonusClass]">
    <NumInput ref="input" class="blockstat__-input total" :mode="mode" :modelValue="total" @update:modelValue="x => $emit('update:total', x)"> </NumInput>

    <div ref="local" class="blockstat__tooltipcontent simplebg">
      <p v-html="title"></p>
      <hr />
      <p><slot name="default"></slot></p>
      <hr />
      <p v-if="!hideBase">
        Current {{ title }}: <b class="total">{{ input?.displayValue }}</b
        >{{ suffix }}
        <span v-if="hasBase">
          (<b class="base">{{ rnd(base) }}</b
          >{{ suffix }} base + <b class="bonus">{{ rnd(bonus) }}</b
          >{{ suffix }} bonus)
        </span>
      </p>
      <slot name="footer"></slot>
    </div>
  </div>
  <i class="backspace-icon" :class="[totalClass]" @click="clearStat()">
    <svg viewBox="0 0 24 24">
      <path
        d="M19,5H9.83a3,3,0,0,0-2.12.88L2.29,11.29a1,1,0,0,0,0,1.42l5.42,5.41A3,3,0,0,0,9.83,19H19a3,3,0,0,0,3-3V8A3,3,0,0,0,19,5Zm1,11a1,1,0,0,1-1,1H9.83a1.05,1.05,0,0,1-.71-.29L4.41,12,9.12,7.29A1.05,1.05,0,0,1,9.83,7H19a1,1,0,0,1,1,1ZM16.71,9.29a1,1,0,0,0-1.42,0L14,10.59l-1.29-1.3a1,1,0,0,0-1.42,1.42L12.59,12l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L14,13.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L15.41,12l1.3-1.29A1,1,0,0,0,16.71,9.29Z"
      />
    </svg>
  </i>
</template>

<script>
import { computed, inject, onMounted, ref, toRefs } from "vue";
import NumInput from "./NumInput.vue";
export default {
  props: {
    base: Number,
    bonus: Number,
    total: Number,
    title: String,
    stat: String,
    mode: String,
    readonly: Boolean,
    suffix: String,
    hideBase: Boolean,
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: Infinity,
    },
  },
  setup(props) {
    const { base, bonus, total, suffix } = toRefs(props);
    const local = ref(null);
    const input = ref(null);
    const hasBase = base.value;
    let statname = `Attack Damage`;
    return {
      local,
      input,
      validity: true,
      validationMessage: "",
      subtitle: `Basic attacks deal <span class="physical-damage">physical damage sources</span>`,
      body: ``,
      statname,
      rnd: (val) => Math.round(val),
      hasBase,
      totalClass: computed(() => {
        if (hasBase) return bonus.value < -0.005 ? "total-lowerd" : total.value > base.value + 0.005 ? "total-bonus" : "";
        else return total.value < -0.005 ? "total-lowerd" : total.value > 0.005 ? "total-bonus" : "";
      }),
      bonusClass: computed(() => {
        return hasBase && bonus.value < -0.5 ? "bonus-lowerd" : "";
      }),
    };
  },
  methods: {
    clearStat() {
      if (this.hasBase) {
        this.$emit("update:bonus", 0);
      } else {
        this.$emit("update:total", 0);
      }
    },
  },
  components: { NumInput },
};
</script>

<style>
.backspace-icon {
  /* background-image: url("./src/assets/icons/Backspace.svg"); */
  background-size: 24px 24px;
  width: 24px;
  height: 24px;
  margin: 0 2px;
  fill: transparent;
}

.backspace-icon.total-lowerd,
.backspace-icon.total-bonus {
  fill: #94989c;
}

.backspace-icon:hover,
.backspace-icon:focus {
  fill: #db2525;
}
.backspace-icon:active {
  fill: #77cf24;
}

.blockstat {
  display: block;
}
.blockstat .total,
.blockstat .base {
  color: #bdb2fa;
}
.blockstat.total-bonus .total,
.blockstat .bonus {
  color: #56b952;
}
.blockstat.total-lowerd .total,
.blockstat.bonus-lowerd .bonus {
  color: #c02b2b;
}

.blockstat__-input:focus-within+ 
.blockstat__tooltipcontent{
  display: block;

}
.blockstat__tooltipcontent {
  display: none;
  position: absolute;
  top: unset;
  left: unset;
  max-width: 550px;
  z-index: 500;
}
.blockstat__tooltipcontent.simplebg {
  background: #121a1b;
  padding: 3px;
  border: #9797fc solid 1px;
  color: #eee;
}

input[type="number"].blockstat__-input,
input[type="text"].blockstat__-input {
  background-color: #282b2c;
  width: 100%;
  display: block;
}
</style>