
<template>
  <tr>
    <th>
      <span :class="color">{{ prefex }}{{ sufex }}</span>
    </th>
    <td><NumInput v-model="item.value" :format="item.ispercent ? 'percent' : ''" :index="spellrank"></NumInput></td>
    <td><NumInput :readonly="true" :modelValue="item.damagePreValue"></NumInput></td>
    <td><NumInput :readonly="true" :modelValue="item.damagePostValue"></NumInput></td>
  </tr>
</template>

<script>
import { computed, inject, toRefs } from "vue";
import { spell_ratios, calc_dmg_onhit } from "../../javascript/league_data";
import NumInput from "../simple/NumInput.vue";

export default {
  //id, label_text, classColor, removeable=true, editable=true, fullsize=false
  name: "SpellField",
  props: {
    item: Object,
  },
  components: {
    NumInput
},
  setup(props) {
    const { item } = toRefs(props);
    const ratiodata = spell_ratios[props.item.key] || {};
    const rootspell = inject("rootspell");
    return {
      item,
      spellrank: computed(() => rootspell.value.rankindex),
      prefex: ratiodata.prefex || "",
      color: ratiodata.color || "",
      sufex: ratiodata.sufex || "",
      extra: ratiodata.extra || false,
      removable: false,
      displayValue: computed(() => {
        return ratiodata.sufex || false ? ratiodata.prefex : `( ${item.valueNumber < 0 ? "" : "+"}${+(Math.round(item.valueNumber + "e+12") + "e-10")}% ${ratiodata.sufex})`;
      }),
    };
  },
};
</script>
