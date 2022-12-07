<template>
  <main>
    <NavBar></NavBar>

    <div class="main-section">
      <div class="current-balance"></div>
      <div class="summary-chart"></div>
      <div class="crypto-list"></div>

    </div>
  </main>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";

export default {
  components: {NavBar}
}

</script>

<style scoped lang="scss">

main {
  width: 100%;
  max-width: 1176px;
  height: 900px;
  background-color: white;
  border-radius: 24px;

  .main-section {
    width: 100%;
    height: calc(100% - 97px);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "item1 item2"
      "item3 item3";

    .current-balance {
      width: 100%;
      height: 100%;


      grid-area: item1;
    }
    .summary-chart {
      width: 100%;
      height: 100%;
      background-color: gray;

      grid-area: item2;
    }
    .crypto-list {
      width: 100%;
      height: 100%;
      background-color: #7445FB;

      grid-area: item3;
    }

  }

  @media (max-width: 700px) {
    .main-section {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      grid-template-areas:
      "item1"
      "item3"
      "item2";
    }
  }
}

</style>
