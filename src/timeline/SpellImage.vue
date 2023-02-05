<template>
  <span class="spell-image" :class="size" :style="style"></span>
</template>

<script setup>
import { cdn, v } from '@/api/version.json';

import { computed } from 'vue';

const props = defineProps({
  iconPath: String,
  image: Object,
  size: String,
});
const style = computed(() => {
  if (props.image) {
    if (props.size === 'small')
      return `background: url('${cdn}/${v}/img/sprite/small_${
        props.image.sprite
      }') -${props.image.x * 0.75}px -${props.image.y * 0.75}px;`;
    if (props.size === 'tiny')
      return `background: url('${cdn}/${v}/img/sprite/tiny_${
        props.image.sprite
      }') -${props.image.x * 0.5}px -${props.image.y * 0.5}px;`;
    return `background: url('${cdn}/${v}/img/sprite/${props.image.sprite}') -${props.image.x}px -${props.image.y}px;`;
  }
  if (props.iconPath)
    return `background: url('${props.iconPath}') 0px 0px; background-size:contain;`;
  return `background: transparent; background-size:contain; height: 0;`;
});
</script>

<style>
.spell-image {
  display: inline-block;
  padding: 0;
  border-style: none;
  width: 48px;
  height: 48px;
}

.spell-image.small {
  width: 36px;
  height: 36px;
}

.spell-image.tiny {
  width: 24px;
  height: 24px;
}
</style>
