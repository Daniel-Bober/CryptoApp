<template>
  <button :class="type">
    <slot></slot>
  </button>
</template>

<script setup lang='ts'>
import ButtonType from '../enums/ButtonType'
import type {PropType} from "vue";

const props = defineProps({
    type: String as PropType<ButtonType>
})
</script>

<style lang='scss' scoped>
button {
  min-height: 40px;
  padding: 0.5rem 1rem;
  font-family: 'sf-pro-display-semibold', serif;
  font-size: $font-14px;
  color: white;
  background-color: $purple;
  border-radius: 4px;
}

.secondary {
  color: $purple;
  border: 1px solid $light-gray;
  background-color: white;
}
</style>