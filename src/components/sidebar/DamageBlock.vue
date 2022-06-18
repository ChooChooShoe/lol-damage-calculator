<template>
  <div class="damage-dealt-chart">
    <div
      class="magic-bg"
      :title="d.mRatio + ' Magic'"
      :style="{ left: '0%', width: d.mRatio }"
    >
      {{ d.mRatio }}
    </div>
    <div
      class="physical-bg"
      :title="d.pRatio + ' Physical'"
      :style="{ left: d.mRatio, width: d.pRatio }"
    >
      {{ d.pRatio }}
    </div>
    <div
      class="true-bg"
      :title="d.tRatio + ' True'"
      :style="{ left: d.mpRatio, width: d.tRatio }"
    >
      {{ d.tRatio }}
    </div>
  </div>
  <p>
    {{ d.magicDmg }}
    <span class="magic-damage">Magic Damage</span>
    dealt. {{ d.mRatio }}
    <br />
    {{ d.physicalDmg }}
    <span class="physical-damage">Physical Damage</span>
    dealt. {{ d.pRatio }}
    <br />
    {{ d.trueDmg }}
    <span class="true-damage">True Damage</span>
    dealt. {{ d.tRatio }}
    <br />
    <span class="bold">Total Damage</span>
    dealt: {{ d.totalDmg }}
  </p>
</template>
<script>
import { h, ref, reactive, toRefs, watchEffect, computed } from "vue";

export default {
  name: "DamageBlock",
  props: ["output", "isPre"],
  setup(props) {
    const { output } = toRefs(props);
    const isPre = props.isPre;

    const percentf = (value) => {
      return parseFloat(value < 1 ? value * 100 : value).toFixed(2)+"%";
    };

    const d = computed(() => {
      const totalDmg = isPre ? output.value.preTotalDmg : output.value.totalDmg;
      const magicDmg = isPre ? output.value.preMagicDmg : output.value.magicDmg;
      const physicalDmg = isPre
        ? output.value.prePhysicalDmg
        : output.value.physicalDmg;
      const trueDmg = output.value.trueDmg;

      const mRatio = percentf(magicDmg / totalDmg);
      const pRatio = percentf(physicalDmg / totalDmg);
      const mpRatio = percentf((magicDmg / totalDmg) + (physicalDmg / totalDmg));
      const tRatio = percentf(trueDmg / totalDmg);

      return {
        totalDmg: +totalDmg.toFixed(0),
        magicDmg: +magicDmg.toFixed(0),
        physicalDmg: +physicalDmg.toFixed(0),
        trueDmg: +trueDmg.toFixed(0),
        mRatio,
        pRatio,
        mpRatio,
        tRatio,
      };
    });
    // expose to template
    return { d };
    //   () => [
    //     h("div", { class: "damage-dealt-chart" }, [
    //       h(
    //         "div",
    //         {
    //           class: "magic-bg",
    //           title: mRatio + " Magic",
    //           style: {
    //             left: "0%",
    //             width: mRatio,
    //           },
    //         },
    //         [mRatio]
    //       ),
    //       h(
    //         "div",
    //         {
    //           class: "physical-bg",
    //           title: pRatio + " Physical",
    //           style: {
    //             left: mRatio,
    //             width: pRatio,
    //           },
    //         },
    //         [pRatio]
    //       ),
    //       h(
    //         "div",
    //         {
    //           class: "true-bg",
    //           title: tRatio + " True",
    //           style: {
    //             left: mpRatio,
    //             width: tRatio,
    //           },
    //         },
    //         [tRatio]
    //       ),
    //     ]),
    //     h("p", [
    //       rnd(magicDmg),
    //       h("span", { class: "magic-damage" }, ["Magic Damage"]),
    //       " dealt. ",
    //       mRatio,
    //       h("br"),

    //       rnd(physicalDmg),
    //       h("span", { class: "physical-damage" }, ["Physical Damage"]),
    //       " dealt. ",
    //       pRatio,
    //       h("br"),

    //       rnd(trueDmg),
    //       h("span", { class: "true-damage" }, ["True Damage"]),
    //       " dealt. ",
    //       tRatio,
    //       h("br"),

    //       h("span", { class: "bold" }, ["Total Damage dealt:"]),
    //       rnd(totalDmg),
    //     ]),
    //   ];
  },
};
</script>

<style>
.damage-dealt-chart {
  position: relative;
  height: 34px;
  line-height: 32px;
  border: #24465e 1px solid;
}

.damage-dealt-chart > div {
  position: absolute;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}

.true-bg {
  background-color: #f9966b;
}

.physical-bg {
  background-color: #bc6032;
  color: whitesmoke;
}

.magic-bg {
  background-color: teal;
  color: black;
}
.bold {
  font-weight: bold;
}
</style>