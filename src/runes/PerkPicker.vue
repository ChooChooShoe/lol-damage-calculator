<template>
  <div class="perk_picker">
    <div class="perk_picker__flex">
      <SinglePerk
        :perk="x"
        :is-path="true"
        v-for="x in perkstyles"
        :key="x.id"
        :selection="runes.primaryStyle"
        @click="setPrimary(x.id)"
      >
      </SinglePerk>
    </div>
    <div class="perk_picker__flex">
      <SinglePerk
        :perk="x"
        :is-path="true"
        v-for="x in primaryPath?.allowedSubStyles.map((pid) =>
          perkStyle(pid)!
        ) || []"
        :key="x.id"
        :selection="runes.subStyle"
        @click="setSecondary(x.id)"
      >
      </SinglePerk>
    </div>
    <hr />
    <hr />
    <div v-if="primaryPath">
      <div class="rune_row__keystone">
        <SinglePerk
          v-for="p in primaryPath.slots.KeyStone.perks.map(pid => perk(pid)!)"
          :key="p.id"
          :perk="p"
          :isKeyStone="true"
          :selection="runes.primarySelections[0]"
          @click="runes.primarySelections[0] = p!.id"
        >
        </SinglePerk>
      </div>
      <hr />
      <div class="rune_row">
        <SinglePerk
          v-for="p in primaryPath.slots.Mixed1.perks.map(pid => perk(pid)!)"
          :key="p.id"
          :perk="p"
          :selection="runes.primarySelections[1]"
          @click="runes.primarySelections[1] = p.id"
        >
        </SinglePerk>
      </div>
      <div class="rune_row">
        <SinglePerk
          v-for="p in primaryPath.slots.Mixed2.perks.map(pid => perk(pid)!)"
          :key="p.id"
          :perk="p"
          :selection="runes.primarySelections[2]"
          @click="runes.primarySelections[2] = p.id"
        >
        </SinglePerk>
      </div>
      <div class="rune_row">
        <SinglePerk
          v-for="p in primaryPath.slots.Mixed3.perks.map(pid => perk(pid)!)"
          :key="p.id"
          :perk="p"
          :selection="runes.primarySelections[3]"
          @click="runes.primarySelections[3] = p.id"
        >
        </SinglePerk>
      </div>
    </div>
    <div v-else>Select Primary Rune Path</div>
    <div>
      <template v-if="secondaryPath">
        <div class="rune_row">
          <SinglePerk
            v-for="p in secondaryPath.slots.Mixed1.perks.map(pid => perk(pid)!)"
            :key="p.id"
            :perk="p"
            :selection="subStyleSelectionsDisplay[0]"
            @click="updateSecondary(p.id, 0)"
          >
          </SinglePerk>
        </div>
        <div class="rune_row">
          <SinglePerk
            v-for="p in secondaryPath.slots.Mixed2.perks.map(pid => perk(pid)!)"
            :key="p!.id"
            :perk="p"
            :selection="subStyleSelectionsDisplay[1]"
            @click="updateSecondary(p.id, 1)"
          >
          </SinglePerk>
        </div>
        <div class="rune_row">
          <SinglePerk
            v-for="p in secondaryPath.slots.Mixed3.perks.map(pid => perk(pid)!)"
            :key="p!.id"
            :perk="p"
            :selection="subStyleSelectionsDisplay[2]"
            @click="updateSecondary(p.id, 2)"
          >
          </SinglePerk>
        </div>
      </template>
      <template v-else> Select Secondary Rune Path </template>
      <hr />
      <div class="rune_row_stats">
        <SinglePerk
          class="StatsModBox"
          v-for="p in [5008, 5005, 5007].map(pid => perk(pid)!)"
          :key="p!.id"
          :perk="p"
          :selection="runes.statPerks.offense"
          @click="runes.statPerks.offense = p.id"
        >
        </SinglePerk>
      </div>
      <div class="rune_row_stats">
        <SinglePerk
          class="StatsModBox"
          v-for="p in [5008, 5002, 5003].map(pid => perk(pid)!)"
          :key="p!.id"
          :perk="p"
          :selection="runes.statPerks.flex"
          @click="runes.statPerks.flex = p.id"
        >
        </SinglePerk>
      </div>
      <div class="rune_row_stats">
        <SinglePerk
          class="StatsModBox"
          v-for="p in [5001, 5002, 5003].map(pid => perk(pid)!)"
          :key="p!.id"
          :perk="p"
          :selection="runes.statPerks.defense"
          @click="runes.statPerks.defense = p.id"
        >
        </SinglePerk>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, ref, Ref } from "vue";
import SinglePerk from "./SinglePerk.vue";
import { computed } from "@vue/reactivity";
import {
  perkStyle,
  perkstyles,
  PerkSelections,
  perk,
  StyleIdOrNone,
  PerkIdOrNone,
} from "./perks";

const props = defineProps<{ runes: PerkSelections }>();

const primaryPath = computed(() => perkStyle(props.runes.primaryStyle));
const secondaryPath = computed(() => perkStyle(props.runes.subStyle));

function setPrimary(id: StyleIdOrNone): void {
  if (id === props.runes.primaryStyle) return;
  props.runes.primarySelections = [0, 0, 0, 0];
  props.runes.primaryStyle = id;
  if (props.runes.subStyle === id) {
    setSecondary(0);
  }
}
function setSecondary(id: StyleIdOrNone): void {
  if (id === props.runes.subStyle) return;
  props.runes.subSelections = [0, 0];
  subStyleSelectionsDisplay[0] = 0;
  subStyleSelectionsDisplay[1] = 0;
  subStyleSelectionsDisplay[2] = 0;
  secondaryIdx = [];
  props.runes.subStyle = id;
}

const subStyleSelectionsDisplay: [PerkIdOrNone, PerkIdOrNone, PerkIdOrNone] =
  reactive([0, 0, 0]);
let secondaryIdx: number[] = [];
function updateSecondary(id: PerkIdOrNone, idx: number) {
  if (id !== subStyleSelectionsDisplay[idx]) {
    subStyleSelectionsDisplay[idx] = id;
    if (secondaryIdx[0] !== idx && secondaryIdx[1] !== idx) {
      secondaryIdx.push(idx);
      if (secondaryIdx.length > 2) {
        const remove = secondaryIdx.shift()!;
        subStyleSelectionsDisplay[remove] = 0;
      }
    }
  }
  props.runes.subSelections[0] = subStyleSelectionsDisplay[secondaryIdx[0]];
  props.runes.subSelections[1] = subStyleSelectionsDisplay[secondaryIdx[1]];
}
</script>

<style>
.perk_picker {
  display: grid;
  /* grid-template: 1fr / 1fr 1fr; */
  grid-template: 1fr / 228px 228px;
  align-items: stretch;
  /* overflow: auto; */
  user-select: none;
}

.perk_picker__flex {
  display: flex;
  justify-content: space-evenly;
}

.rune_row__keystone {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.rune_row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 3px 28px;
}
.rune_row_stats {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: -1px 28px;
}
</style>
