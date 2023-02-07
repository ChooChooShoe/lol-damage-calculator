<template>
  <div class="control champsearch">
    <!-- <div class="select">
      <input class="input champsearch" ref="input" :value="champ" @focus="$event.target.value = ''" @blur="$event.target.value = champ" @change="onInput($event.target)" list="list-of-champions" />
    </div> -->
    <DropdownSelect label="Champion">
      <template v-slot:value>
        <SpellImage
          size="tiny"
          :image="championList[champ]?.image"
        ></SpellImage>
        <span class="champsearch__name">{{ champ }}</span>
      </template>
      <ul class="dd__champlist">
        <li
          :data-name="c.name"
          v-for="c in championList"
          :class="{ hidden: c.name.toLowerCase().indexOf(searchLower) === -1 }"
        >
          <a class="flex__center" @click="to(c.name, $event)" :key="c.name">
            <SpellImage size="tiny" :image="c.image"></SpellImage>
            <span class="champsearch__name">{{ c.name }}</span>
          </a>
        </li>
      </ul>
      <div class="multiColumnsFilterSearchField">
        <input
          type="text"
          v-model="search"
          placeholder="Search Champion"
          autocomplete="off"
        />
      </div>
    </DropdownSelect>
  </div>
</template>

<script setup lang="ts">
import championList from './../../api/ChampionList.json';
import { useRouter } from 'vue-router';
import SpellImage from '../../timeline/SpellImage.vue';
import { ref } from 'vue';
import { computed } from 'vue';
import DropdownSelect from './DropdownSelect.vue';
import type { ChampionName } from '@/model/ChampObj';

const props = defineProps<{
  champ: ChampionName;
  mode: 'target' | 'player' | 'emit';
}>();

const input = ref(null);

const search = ref('');
const searchLower = computed(() => {
  return search.value.toLowerCase();
});

const emit = defineEmits(['update:champ']);
const router = useRouter();

function to(champ: string, event: Event) {
  document.body.focus();
  if (props.mode === 'player') {
    router.push({ params: { player: champ } });
  } else if (props.mode === 'target') {
    router.push({ params: { target: champ } });
  } else {
    emit('update:champ', champ);
  }
}
</script>

<style>
.champsearch {
  display: inline-block;
  /* width: 200px !important; */
  cursor: text;
  width: 100%;
}

.champsearch ul {
  max-height: 350px;
  min-height: 22px;
  width: 550px;
  overflow: hidden scroll;
}

.champsearch li {
  float: left;
  width: 25%;
}

.champsearch li a {
  padding: 1px;
  color: #ebebeb;
  border: 1px solid transparent;
}

.champsearch li a:hover {
  background-color: rgba(119, 119, 119, 0.25);
  border-color: goldenrod;
  text-decoration: none;
}

.champsearch__name {
  padding: 0 0.5rem;
}

.flex__center {
  display: flex;
  align-items: center;
}
</style>
