<template>
  <div class="tab-navigation">
    <ul>
      <li
          v-for="tabTitle in tabTitles"
          :key="tabTitle"
          class="tab-item"
          @click="selectedTab = tabTitle"
      >
        {{ tabTitle }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import {provide, ref, useSlots} from "vue";

const slots = useSlots();

//@ts-ignore
const tabTitles = ref(slots.default().map((tab) => tab.props?.title));

const selectedTab = ref(tabTitles.value[0]);

provide('selectedTab', selectedTab);
</script>

<style lang='scss' scoped>
.tab-navigation {


  ul {
    list-style: none;
    display: flex;
    padding: 0;

    li {
      padding: 5px 12px;
      cursor: pointer;
    }
  }
}


</style>