<template>
  <div class="tab-navigation">
    <ul>
      <li
          v-for="tabTitle in tabTitles"
          :key="tabTitle"
          :class="{ selected: tabTitle === selectedTab }"
          @click="selectedTab = tabTitle"
      >
        {{ tabTitle }}
      </li>
    </ul>
    <slot/>
  </div>
</template>

<script setup lang='ts'>
import {provide, ref, useSlots} from "vue";

const slots = useSlots();

if (!slots.default) {
  throw new Error('TabNavigation component is missing slots');
}

const tabTitles = ref(slots.default().map((tab) => tab.props?.title));

const selectedTab = ref(tabTitles.value[0]);

provide('selectedTab', selectedTab);
</script>

<style lang='scss' scoped>
.tab-navigation {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 32px 32px 0;
  margin-top: 32px;

  ul {
    list-style: none;
    display: flex;
    padding: 0;

    li {
      padding: 0 12px 15px;
      cursor: pointer;
      color: $gray;
      user-select: none;
    }

    li.selected {
      border-bottom: 4px solid $purple;
      color: black;
    }
  }
}



@media (max-width: $screen-size-m) {
  .tab-navigation {
    padding: 32px 0 0;
  }
}

@media (max-width: $screen-size-s) {
  .tab-navigation {
    ul {
      li {
        padding: 0 8px 10px;
        font-size: 4.3vw;
      }
    }
  }
}
</style>