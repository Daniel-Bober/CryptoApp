<template>
  <div class="crypto-currency-list">
      <ListItem
          v-for="(item, index) in cryptocurrencyList"
          :key="item.id"
          :symbol="item.symbol"
          :name="item.name"
          :price="item.quote.USD.price"
          :change="item.quote.USD.percent_change_7d"
          :id ="index"
          :logo-url="cryptocurrencyLogoList[item.id]?.logo"
      ></ListItem>
  </div>
</template>

<script setup lang='ts'>
import ListItem from "@/components/TabNav/TheTabContent/Summary/ListItem.vue";
import {onMounted, ref} from "vue";
import {getCryptocurrencyListRequest, getCryptocurrencyLogoListRequest} from "@/services/apiService";

let cryptocurrencyList = ref([]);
let cryptocurrencyLogoList = ref([]);

onMounted(async () => {
  cryptocurrencyList.value = await getCryptocurrencyListRequest();
  const cryptocurrencyIDs = cryptocurrencyList.value.map((el: any) => {return el.id});
  cryptocurrencyLogoList.value = await getCryptocurrencyLogoListRequest(cryptocurrencyIDs);
});
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