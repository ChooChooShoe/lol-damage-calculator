<template>
  <div class="p-fluid grid formgrid">
    <!-- 
        <Button type="button" label="Toggle" @click="toggle" />
        <OverlayPanel ref="op">
            <img src="/demo/images/nature/nature1.jpg" alt="Nature Image">
        </OverlayPanel> -->

    <div class="field col-12 md:col-6">
      <label for="horizontal">Bounty Hunter stacks</label>
      <SelectButton
        v-model="obj.bountyHunterStacks"
        :options="[0, 1, 2, 3, 4, 5]"
        :unselectable="false"
      />
    </div>

    <BlockStat
      v-model:total="obj.darkHarvestStacks"
      title="Dark Harvest stacks"
      labelClass="lifesteal"
      suffix=" stacks"
      :min="0"
      :max="255"
    >
      <template v-slot:default>
        Deal 20 − 60 (based on level) (+ 5 per Soul) (+ 25% bonus AD) (+ 15% AP)
        bonus</template
      >
      <template v-slot:footer>
        <p>
          Souls Harvested: <b class="total">{{ obj.darkHarvestStacks }}</b
          >. Dark harvest will deal an additional
          <b class="bonus">{{ obj.darkHarvestStacks * 5 }}</b> damage.
        </p>
      </template>
    </BlockStat>
    <BlockStat
      v-model:total="obj.legendStacks"
      title="Legend stacks"
      labelClass="lifesteal"
      suffix=" stacks"
      :min="0"
      :max="15"
    >
      <template v-slot:default>
        <span class="template_sbc"><b>Legend:</b></span> Gain
        <i>Legend</i> stacks for every 100 points earned, up to 10 (15 for
        Legend: Bloodline):
        <ul>
          <li>
            100 points for champion
            <span
              class="glossary"
              style="white-space: pre; position: relative"
              data-game="lol"
              data-tip="Takedown"
              ><a href="/wiki/Takedown" title="Takedown"
                ><img
                  alt="Damage rating.png"
                  src="/wiki/images/Damage_rating.png"
                  decoding="async"
                  loading="lazy"
                  class="lazyload"
                  width="20"
                  height="20"
              /></a>
              <a href="/wiki/Takedown" title="Takedown">takedowns</a></span
            >
          </li>
          <li>
            100 points for epic monster
            <span
              class="glossary"
              style="white-space: pre; position: relative"
              data-game="lol"
              data-tip="Takedown"
              ><a href="/wiki/Takedown" title="Takedown"
                ><img
                  alt="Damage rating.png"
                  src="/wiki/images/Damage_rating.png"
                  decoding="async"
                  loading="lazy"
                  class="lazyload"
                  width="20"
                  height="20"
              /></a>
              <a href="/wiki/Takedown" title="Takedown">takedowns</a></span
            >
          </li>
          <li>25 points for large monster kills</li>
          <li>4 points for minion kills</li>
        </ul>
      </template>
      <template v-slot:footer>
        <p>
          Legend stacks: <b class="total">{{ obj.legendStacks }}</b
          >.
        </p>
      </template>
    </BlockStat>
  </div>
</template>

<script setup lang="ts">
import BlockStat from '../../components/simple/BlockStat.vue';
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';
import InputNumber from 'primevue/inputnumber';

import SelectButton from 'primevue/selectbutton';

import { toRefs, inject, ref, computed, watchEffect } from 'vue';
import type { ChampObjModel } from '../../model/ChampObj';

const op = ref<InstanceType<typeof OverlayPanel> | null>(null);

const hunterStacks = ref(0);

const obj = inject<ChampObjModel>('obj')!;

const toggle = (event: Event) => {
  op.value?.toggle(event);
};
</script>
