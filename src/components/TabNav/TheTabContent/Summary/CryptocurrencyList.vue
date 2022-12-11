<template>
  <div class="crypto-currency-list">
      <ListItem
          v-for="item in cryptocurrencyList"
          :key="item.id"
          :symbol="item.symbol"
          :name="item.name"
          :price="item.quote.USD.price"
          :change="item.quote.USD.percent_change_7d"
      ></ListItem>

  </div>
</template>

<script setup lang='ts'>
import ListItem from "@/components/TabNav/TheTabContent/Summary/ListItem.vue";
import {onMounted, ref} from "vue";
import {getCryptocurrencyListRequest} from "@/composables/apiService";


let cryptocurrencyList = ref([])

onMounted(async () => {
  cryptocurrencyList.value = await getCryptocurrencyListRequest()
  // localStorage.setItem('data', JSON.stringify(cryptocurrencyList.value))TODO do usunięcia

})

// //@ts-ignore
// let cryptocurrenciesList = JSON.parse(localStorage.getItem('data'))//TODO do usunięcia

</script>

<style lang='scss' scoped>
.crypto-currency-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.crypto-currency-list::-webkit-scrollbar {
  display: none;
}

</style>