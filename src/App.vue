<template>
  <main>
    <NavBar></NavBar>

    <div class="main-section">
      <div class="current-balance-section">
        <CurrentBalance></CurrentBalance>
      </div>
      <div class="summary-chart-section">
        <SummaryChart></SummaryChart>
      </div>
      <div class="tab-navigation-section">
        <TabNavigation selected="" tabs="">
          <TheTab title="Summary">Siema</TheTab>
          <TheTab title="Table"></TheTab>
          <TheTab title="Charts"></TheTab>
          <TheTab title="Reporting"></TheTab>
          <TheTab title="Analysis"></TheTab>
        </TabNavigation>
      </div>

    </div>
  </main>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import CurrentBalance from  "@/components/CurrentBalance.vue"
import SummaryChart from "@/components/SummaryChart.vue";
import TabNavigation from "@/components/TabNav/TabNavigation.vue";
import TheTab from "@/components/TabNav/TheTab.vue";


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
