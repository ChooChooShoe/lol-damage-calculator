<template>
  <div class="p-fluid grid formgrid">
    <BlockStat
      v-if="showDamage"
      stat="ad"
      v-model:base="obj.base_ad"
      v-model:bonus="obj.bonus_ad"
      v-model:total="obj.total_ad"
      title="Attack Damage"
      labelClass="attack-damage"
    >
      Increases the amount of damage you deal with Attacks and AD scaling
      Spells.
    </BlockStat>
    <BlockStat
      v-if="showDamage"
      stat="ap"
      v-model:total="obj.total_ap"
      title="Ability Power"
      labelClass="ap"
    >
      Increases the amount of damage you deal with AP scaling Spells.</BlockStat
    >

    <BlockStat
      v-if="showDefence"
      stat="armor"
      v-model:base="obj.base_armor"
      v-model:bonus="obj.bonus_armor"
      v-model:total="obj.total_armor"
      title="Armor"
      labelClass="armor"
    >
      <template v-slot:default
        >Reduces the amount of damage taken from
        <span class="physical-damage">physical damage sources</span>
      </template>
      <template v-slot:footer>
        <p>
          You take
          <span class="total">{{
            Math.round(obj.percent_pysical_reduction * 100)
          }}</span
          >% reduced <span class="pysical-damage">pysical damage</span>
        </p>
      </template>
    </BlockStat>

    <BlockStat
      v-if="showDefence"
      stat="mr"
      v-model:base="obj.base_mr"
      v-model:bonus="obj.bonus_mr"
      v-model:total="obj.total_mr"
      title="Magic Resist"
      labelClass="mr"
    >
      <template v-slot:default>
        Reduces the amount of damage taken from
        <span class="magic-damage">magical damage sources</span>
      </template>
      <template v-slot:footer>
        <p>
          You take
          <span class="total">{{
            Math.round(obj.percent_magic_reduction * 100)
          }}</span
          >% reduced <span class="magic-damage">magic damage</span>
        </p>
      </template>
    </BlockStat>

    <BlockStat
      v-if="showExtra"
      v-model:total="obj.bonus_attackspeed"
      title="Attack Speed"
      labelClass="attack-speed"
    >
      <template v-slot:default>
        Attack Speed does not affect calculations</template
      >
      <template v-slot:footer>
        <p>
          Bonus Attack Speed:
          <b class="total">{{ Math.round(obj.bonus_attackspeed) }}</b
          >%
        </p>
        <p>
          Current attacks per second:
          <b class="bonus">{{
            Math.round(obj.total_attackspeed * 1000) / 1000
          }}</b>
        </p>
        <p>
          Ratio: <b class="base">{{ obj.base_attackspeed }}</b>
        </p>
      </template>
    </BlockStat>

    <BlockStat
      v-if="showExtra"
      v-model:total="obj.tenacity"
      title="Tenacity"
      labelClass="mana"
      sufix="%"
    >
      <template v-slot:default
        >Measured in percentages of how much the duration of most disables will
        be reduced.</template
      >
    </BlockStat>

    <BlockStat
      v-if="showExtra"
      v-model:total="obj.slow_resist"
      title="Slow resist"
      labelClass="mana"
      sufix="%"
    >
      <template v-slot:default
        >Measured in percentages of how much the strength of slows will be
        reduced.</template
      >
    </BlockStat>

    <BlockStat
      v-if="showExtra"
      stat="ability_haste"
      v-model:total="obj.ability_haste"
      title="Ability Haste"
      labelClass="mana"
    >
      <template v-slot:default>
        Ability Haste does not affect calculations</template
      >
      <template v-slot:footer>
        <p>
          Equivalent to having
          <b class="total">{{ Math.round(obj.cdr * 100) }}</b
          >% cooldown reduction.
        </p>
      </template>
    </BlockStat>

    <BlockStat
      v-if="showDamage"
      v-model:total="obj.lifesteal"
      title="Life steal"
      labelClass="red"
      suffix="%"
    >
      The percentage of the damage done by a champion's basic attacks that is
      returned to them as health.
    </BlockStat>
    <BlockStat
      v-if="showDamage"
      v-model:total="obj.omnivamp"
      title="Omnivamp"
      labelClass="red"
      suffix="%"
    >
      The percentage of the damage done by a champion that is returned to them
      as health.
    </BlockStat>
    <BlockStat
      v-if="showDamage"
      v-model:total="obj.pysicalvamp"
      title="Physical vamp"
      labelClass="red"
      suffix="%"
    >
      The percentage of the physical damage done by a champion that is returned
      to them as health.
    </BlockStat>

    <BlockStat
      v-if="showDamage"
      v-model:total="obj.total_critchance"
      title="Critical strike chance"
      labelClass="crit-chance"
      suffix="%"
      :step="20"
      :min="0"
      :max="100"
    >
      <template v-slot:default
        >The percent chance that a basic attack will critically strike to deal
        increased damage.</template
      >
      <template v-slot:footer>
        <p>
          Current critical strike chance:
          <b class="total">{{ obj.total_critchance }}</b
          >%
        </p>
        <p>
          Current Crit Strike Damage:
          <b class="total">{{ obj.total_critdamage }}</b
          >% (<b class="base">{{ obj.base_critdamage }}</b
          >% base + <b class="bonus">{{ obj.bonus_critdamage }}</b
          >% bonus)
        </p>
      </template>
    </BlockStat>

    <BlockStat
      v-if="showDamage"
      v-model:total="obj.bonus_critdamage"
      title="Critical strike damage"
      labelClass="crit-chance"
      suffix="%"
    >
      <template v-slot:default
        >The percent chance that a basic attack will critically strike to deal
        increased damage.</template
      >
      <template v-slot:input>
        <Dropdown
          v-model="obj.total_critdamage"
          :options="[
            { name: 'Default (175%)', code: 175 },
            { name: 'Infinity Edge (+35%)', code: 210 },
            { name: 'Yasuo/Yone (157.5%)', code: 175 * 0.9 },
            {
              name: 'Yasuo/Yone (157.5%) with IE (+31.5%)',
              code: (175 + 35) * 0.9,
            },
            { name: 'Senna (160.125%)', code: 175 * 0.915 },
            {
              name: 'Senna (160.125%) with IE (+32.025%)',
              code: (175 + 35) * 0.915,
            },
            { name: `Jhin (${175 * 0.86}%)`, code: 175 * 0.86 },
            {
              name: `Jhin (${175 * 0.86}%) with IE (+${30.1}%)`,
              code: 175 * 0.86 + 30.1,
            },
          ]"
          optionLabel="name"
          optionValue="code"
          placeholder="Select a Critical strike damage"
          scrollHeight="400px"
        />
      </template>
    </BlockStat>

    <BlockStat
      v-if="showExtra"
      v-model:base="obj.base_movespeed"
      v-model:bonus="obj.bonus_movespeed"
      v-model:total="obj.total_movespeed"
      title="Move Speed"
      labelClass="speed"
    >
      <template v-slot:default>
        Movespeed does not affect calculations</template
      >
      <template v-slot:footer>
        <p>
          Current Move Speed: <b class="total">{{ obj.total_movespeed }}</b> (<b
            class="base"
            >{{ obj.base_movespeed }}</b
          >
          base + <b class="bonus">{{ obj.bonus_movespeed }}</b> bonus) units per
          second.
        </p>
      </template>
    </BlockStat>

    <BlockStat
      v-if="showDamage"
      v-model:total="obj.flat_magicpen"
      title="Flat Magic Penetration"
      labelClass="magic-damage"
    >
      Flat Magic Penetration is from Sorcerer Shoes, Luden's Tempest, etc.
    </BlockStat>
    <BlockStat
      mode="percent"
      v-if="showDamage"
      v-model:total="obj.percent_magicpen"
      title="Percent Magic Penetration"
      labelClass="magic-damage"
      suffix="%"
    >
      Percent Magic Penetration is from Void Staff.
    </BlockStat>

    <BlockStat
      v-if="showDamage"
      v-model:total="obj.lethality"
      title="Lethality"
      labelClass="lethality"
    >
      <template v-slot:default>
        Lethality is from all the assassin items.<br />Lethality sacales based
        on champion level.</template
      >
      <template v-slot:footer>
        <p>
          Equivalent to having
          <b class="total">{{ Math.round(obj.flat_armorpen) }}</b> Flat Armor
          Penetration at level {{ obj.level }}.
        </p>
      </template>
    </BlockStat>
    <BlockStat
      mode="percent"
      v-if="showDamage"
      v-model:total="obj.percent_armorpen"
      title="Percent Armor Penetration"
      labelClass="physical-damage"
      suffix="%"
    >
      Percent Armor Penetration is from Lord Dominik's Regards.
    </BlockStat>

    <!-- <span v-if="showExtra" class="mana" title="Mana per 5 seconds"><span class="title--underline">MP5</span></span> -->
    <BlockStat
      v-if="showExtra"
      v-model:base="obj.base_manaregen"
      v-model:bonus="obj.bonus_manaregen"
      v-model:total="obj.total_manaregen"
      title="Mana Regeneration"
    >
      MP5 does not affect calculations
    </BlockStat>
    <!-- <span v-if="showExtra" class="health" title="Health Regen per 5 seconds"><span class="title--underline">HP5</span></span> -->
    <BlockStat
      v-if="showExtra"
      v-model:base="obj.base_hpregen"
      v-model:bonus="obj.bonus_hpregen"
      v-model:total="obj.total_hpregen"
      title="Health Regeneration"
    >
      HP5 does not affect calculations
    </BlockStat>
  </div>
</template>

<script setup lang="ts">
import BlockStat from '../../components/simple/BlockStat.vue';
import Dropdown from 'primevue/dropdown';
import { toRefs, inject, ref, computed, watchEffect } from 'vue';
import { ChampObjModel } from '../../model/ChampObj';

const props = defineProps<{
  obj: ChampObjModel;
  showDamage: boolean;
  showDefence: boolean;
  showExtra: boolean;
}>();
</script>
