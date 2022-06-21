<template>
  <div class="control champsearch">
    <div class="select">
      <input
        class="input champsearch"
        ref="input"
        :value="champ"
        @focus="$event.target.value = ''"
        @blur="$event.target.value = champ"
        @change="onInput($event.target)"
        list="list-of-champions"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  champ: String,
  mode: String,
});
const emit = defineEmits(["update:champ"]);
const router = useRouter();

const onInput = (target) => {
  if (props.mode === "emit") {
    emit("update:champ", target.value);
  } else {
    const route = { params: {} };
    route.params[props.mode] = target.value;
    router.push(route);
  }
  target.blur();
};
</script>

<style>
.champsearch {
  display: inline-block;
  width: 200px !important;
  cursor: text;
}
</style>