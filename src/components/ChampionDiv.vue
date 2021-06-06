
<template>
  <div class="data_holder c50">
    <!-- <EditBtn v-model="editMode"></EditBtn> -->
    <h2>{{ username }}</h2>
    <ChampSearch v-model:champ="obj.champ"></ChampSearch>
    <ChampLevelSelect v-model:level="obj.level"></ChampLevelSelect>
    <div class="data_holder__grid">
      <span v-if="showDamage" class="attack-damage">AD</span>
      <BlockStat v-if="showDamage" stat="ad" v-model:base="obj.base_ad" v-model:bonus="obj.bonus_ad" v-model:total="obj.total_ad" title="Attack Damage">
        Increases the amount of damage you deal with Attacks and AD scaling Spells.
      </BlockStat>
      <span v-if="showDamage" class="ap">AP</span>
      <BlockStat v-if="showDamage" stat="ap" v-model:total="obj.total_ap" title="Ability Power"> Increases the amount of damage you deal with AP scaling Spells. </BlockStat>

      <span v-if="showDefence" class="armor">Armor</span>
      <BlockStat v-if="showDefence" stat="armor" v-model:base="obj.base_armor" v-model:bonus="obj.bonus_armor" v-model:total="obj.total_armor" title="Armor">
        <template v-slot:default>Reduces the amount of damage taken from <span class="physical-damage">physical damage sources</span> </template>
        <template v-slot:footer>
          <p>
            You take <span class="total">{{ rnd(obj.percent_pysical_reduction * 100) }}</span
            >% reduced <span class="pysical-damage">pysical damage</span>
          </p>
        </template>
      </BlockStat>

      <span v-if="showDefence" class="mr">MR</span>
      <BlockStat v-if="showDefence" stat="mr" v-model:base="obj.base_mr" v-model:bonus="obj.bonus_mr" v-model:total="obj.total_mr" title="Magic Resist">
        <template v-slot:default> Reduces the amount of damage taken from <span class="magic-damage">magical damage sources</span> </template>
        <template v-slot:footer>
          <p>
            You take <span class="total">{{ rnd(obj.percent_magic_reduction * 100) }}</span
            >% reduced <span class="magic-damage">magic damage</span>
          </p>
        </template>
      </BlockStat>

      <span v-if="showExtra" class="attack-speed">AS</span>
      <BlockStat v-if="showExtra" :hideBase="true" v-model:total="obj.bonus_attackspeed" title="Attack Speed">
        <template v-slot:default> Attack Speed does not affect calculations</template>
        <template v-slot:footer>
          <p>
            Bonus Attack Speed: <b class="total">{{ rnd(obj.bonus_attackspeed) }}</b
            >%
          </p>
          <p>
            Current attacks per second: <b class="bonus">{{ rnd(obj.total_attackspeed * 1000) / 1000 }}</b>
          </p>
          <p>
            Ratio: <b class="base">{{ obj.base_attackspeed }}</b>
          </p>
        </template>
      </BlockStat>

      <span v-if="showExtra" class="mana">Haste</span>
      <BlockStat v-if="showExtra" stat="ability_haste" v-model:total="obj.ability_haste" title="Ability Haste">
        <template v-slot:default> Ability Haste does not affect calculations</template>
        <template v-slot:footer>
          <p>
            Equivalent to having <b class="total">{{ rnd(obj.cdr * 100) }}</b
            >% cooldown reduction.
          </p>
        </template>
      </BlockStat>

      <span v-if="showExtra" class="crit-chance">Crit</span>
      <BlockStat v-if="showExtra" :hideBase="true" v-model:total="obj.total_critchance" title="Crit Strike Chance">
        <template v-slot:default> Crit Strike Chance does not affect calculations</template>
        <template v-slot:footer>
          <p>
            Current Crit Strike Chance: <b class="total">{{ obj.total_critchance }}</b
            >% (<b class="base">{{ obj.base_critchance }}</b
            >% base + <b class="bonus">{{ obj.bonus_critchance }}</b
            >% bonus)
          </p>
          <p>
            Current Crit Strike Damage: <b class="total">{{ obj.total_critdamage }}</b
            >% (<b class="base">{{ obj.base_critdamage }}</b
            >% base + <b class="bonus">{{ obj.bonus_critdamage }}</b
            >% bonus)
          </p>
        </template>
      </BlockStat>

      <span v-if="showExtra" class="ms">Speed</span>
      <BlockStat v-if="showExtra" :hideBase="true" v-model:base="obj.base_movespeed" v-model:bonus="obj.bonus_movespeed" v-model:total="obj.total_movespeed" title="Move Speed">
        <template v-slot:default> Movespeed does not affect calculations</template>
        <template v-slot:footer>
          <p>
            Current Move Speed: <b class="total">{{ obj.total_movespeed }}</b> (<b class="base">{{ obj.base_movespeed }}</b> base +
            <b class="bonus">{{ obj.bonus_movespeed }}</b> bonus) units per second.
          </p>
        </template>
      </BlockStat>

      <span v-if="showDamage" class="magic-damage">MPen</span>
      <BlockStat v-if="showDamage" v-model:total="obj.flat_magicpen" title="Flat Magic Penetration">
        Flat Magic Penetration is from Sorcerer Shoes, Luden's Tempest, etc.
      </BlockStat>
      <span v-if="showDamage" class="magic-damage">%MPen</span>
      <BlockStat suffix="%" v-if="showDamage" v-model:total="obj.percent_magicpen" title="Percent Magic Penetration"> Percent Magic Penetration is from Void Staff. </BlockStat>

      <span v-if="showDamage" class="lethality">Lethality</span>
      <BlockStat v-if="showDamage" v-model:total="obj.lethality" title="Lethality">
        <template v-slot:default> Lethality is from all the assassin items.<br />Lethality sacales based on champion level.</template>
        <template v-slot:footer>
          <p>
            Equivalent to having <b class="total">{{ rnd(obj.flat_armorpen) }}</b> Flat Armor Penetration at level {{ obj.level }}.
          </p>
        </template>
      </BlockStat>
      <span v-if="showDamage" class="physical-damage">%Pen</span>
      <BlockStat suffix="%" v-if="showDamage" v-model:total="obj.percent_armorpen" title="Percent Armor Penetration">
        Percent Armor Penetration is from Lord Dominik's Regards.
      </BlockStat>

      <span v-if="showExtra" class="mana" title="Mana per 5 seconds"><span class="title--underline">MP5</span></span>
      <BlockStat v-if="showExtra" v-model:base="obj.base_manaregen" v-model:bonus="obj.bonus_manaregen" v-model:total="obj.total_manaregen" title="Mana Regeneration">
        MP5 does not affect calculations
      </BlockStat>
      <span v-if="showExtra" class="health" title="Health Regen per 5 seconds"><span class="title--underline">HP5</span></span>
      <BlockStat v-if="showExtra" v-model:base="obj.base_hpregen" v-model:bonus="obj.bonus_hpregen" v-model:total="obj.total_hpregen" title="Health Regeneration">
        HP5 does not affect calculations
      </BlockStat>
    </div>
    <div class="buttons">
      <input class="clear--button button" type="button" value="Clear" @click="clear()" />

      <label class="switch button">
        <input type="checkbox" v-model="showDamage" />
        <span class="switch--text">Show Offensive</span>
      </label>
      <label class="switch button">
        <input type="checkbox" v-model="showDefence" />
        <span class="switch--text">Show Defensive</span>
      </label>
      <label class="switch button">
        <input type="checkbox" v-model="showExtra" />
        <span class="switch--text">Show Extras</span>
      </label>
    </div>
    <!-- <ItemInventory
      v-if="$root.config.shopEnabled"
      ref="inventory"
      userid="player"
    ></ItemInventory> -->
  </div>
</template>

<script>
import DataInput from "./DataInput.vue";
// import InlineInput from "./InlineInput.vue";
// import SimpleTooltip from "./SimpleTooltip.vue";
import Editable from "./simple/Editable.vue";
import EditableCollapse from "./simple/EditableCollapse.vue";
import ChampSearch from "./simple/ChampSearch.vue";
import ChampLevelSelect from "./simple/ChampLevelSelect.vue";
import { fetchSingleChampFile, default_stats } from "../javascript/league_data";
import BlockStat from "./simple/BlockStat.vue";
import EditBtn from "./simple/EditBtn.vue";
import { toRefs, inject, ref, computed, watchEffect } from "vue";

export default {
  name: "ChampionDiv",
  components: {
    DataInput,
    // InlineInput,
    // SimpleTooltip,
    ItemInventory: () => import("./ItemInventory.vue"),
    Editable,
    EditableCollapse,
    ChampSearch,
    ChampLevelSelect,
    EditBtn,
    BlockStat,
  },
  props: {
    mode: String,
  },
  setup(props) {
    const { mode } = toRefs(props);
    const rootData = inject("RootData");
    const obj = inject("ChampObj");
    // const vue = this.$root;
    if(!obj.champ) {
      console.log("Loading Champ from storage")
      obj.champ = window.localStorage.getItem(`sv_champ_${mode.value}`) || "";
    }

    watchEffect(() => {
      window.localStorage.setItem(`sv_champ_${mode.value}`, obj.champ);
      if (mode.value === "player") {
        fetchSingleChampFile(obj.champ).then((model) => {
          if (!model) return;
          rootData.activeChampionModel = model;
          // rootData.currentSpells = Object.values(model.skills);
          // sellAllItems();
          //TODO buy default items
          // this.$notify({
          //   group: "main",
          //   title: "Loading Done.",
          //   type: "info",
          // });
        });
      }
    });
    return {
      obj,
      mode,
      showDamage: ref(mode.value === "player"),
      showDefence: ref(mode.value === "target"),
      showExtra: ref(false),
      showBreakdown: ref(true),
      readonly_base_values: true,
      editMode: ref(true),
      username: mode.value === "player" ? "Attacking Champion" : "Target Data",
    };
  },
  methods: {
    load: function (json) {
      console.log("load(json)");
    },
    save: function () {
      console.log("save(json)");
    },
    clear: function () {
      this.obj.clearStats = true;
    },
    rnd: function (n) {
      return Math.round(n);
    },
  },
};
</script>

<style>
table {
  background-color: transparent !important;
}
.data_holder__grid {
  display: grid;
  grid-template-columns: 10% auto 28px 10% auto 28px;
}
.clear--button:hover,
.clear--button:focus {
  background-color: rgb(202, 0, 0) !important;
}
.switch--text {
  margin: 0 0 0 0.5em;
}

input:checked + .switch--text {
  color: #9ebbf0;
}
</style>
