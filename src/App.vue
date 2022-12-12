<template>
  <main>
    <NavBar/>

    <div class="main-section">
      <div class="main-section__current-balance">
        <CurrentBalance/>
      </div>
      <div class="main-section__summary-chart">
        <SummaryChart/>
      </div>
      <div class="main-section__tab-navigation">
        <TabNavigation>

          <TheTab title="Summary">
            <CryptoCurrencyList/>
          </TheTab>

          <TheTab title="Table">Table</TheTab>
          <TheTab title="Charts">Charts</TheTab>
          <TheTab title="Reporting">Reporting</TheTab>
          <TheTab title="Analysis">Analysis</TheTab>
        </TabNavigation>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import CurrentBalance from  "@/components/CurrentBalance.vue"
import SummaryChart from "@/components/SummaryChart.vue";
import TabNavigation from "@/components/TabNav/TabNavigation.vue";
import TheTab from "@/components/TabNav/TheTab.vue";
import CryptoCurrencyList from "@/components/TabNav/TheTabContent/Summary/CryptocurrencyList.vue";


</script>

<style scoped lang="scss">

main {
  width: 100%;
  max-width: 1176px;
  height: 92vh;
  background-color: white;
  border-radius: 24px;
  overflow: hidden;

  .main-section {
    height: calc(100% - 97px);
    padding: 32px 68px 0 68px;
    display: grid;
    column-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "item1 item2"
      "item3 item3";

    &__current-balance, {
      grid-area: item1;
    }
    &__summary-chart {
      grid-area: item2;
    }
    &__tab-navigation {
      grid-area: item3;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
  }
}


@media (max-width: $screen-size-m) {
  main {
    .main-section {
      padding: 32px 5% 0 5%;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      grid-template-areas:
      "item1"
      "item3"
      "item2";
      overflow-y: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &__tab-navigation {
        min-height: 400px;
      }
    }

    .main-section::-webkit-scrollbar {
      display: none;
    }
  }
}

@media (max-width: $screen-size-s) {
  main {
    .main-section {
      padding: 32px 3% 0 3%;
    }
  }
}
</style>
