<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script lang='ts'>
export default {
  props: {
    mode: String
  }
}
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

.clear {
  color: $purple;
  border: 1px solid $light-gray;
  background-color: white;
}

.margin-right-8px {
  margin-right: 8px;
}


</style>