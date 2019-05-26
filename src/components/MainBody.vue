<template>
  <div class="flex main">
    <champion-div
      class="data_holder block small"
      id="champion_data"
      userid="player"
      :isprimary="true"
    ></champion-div>
    <champion-div
      class="data_holder block small"
      id="champion_data"
      userid="target"
      :isprimary="false"
    ></champion-div>
    <champion-spells
      v-for="spellObj in currentSpells"
      v-bind:key="spellObj.key"
      v-bind:id="spellObj.key"
      v-bind:spellkey="spellObj.key.toUpperCase().replace('I','Passive ')"
      v-bind:spell="spellObj.spell"
      v-bind:champion="spellObj.champion"
      v-bind:spriteurl="spellObj.sprite + spellObj.spell.image.sprite"
    ></champion-spells>
  </div>
</template>

<script>
import ChampionDiv from "./ChampionDiv.vue";
import ChampionSpells from "./ChampionSpells.vue";

export default {
  name: "MainBody",
  props: ["currentSpells"],
  components: {
    ChampionDiv,
    ChampionSpells
  },
};
</script>
