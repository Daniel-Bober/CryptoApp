<template>
  <div class="list-item">

    <div class="basic-info">

      <img src="src/assets/icons/cryptocurrencies/BTC.svg" alt="currency icon">

      <div class="wrapper">
        <div class="gray-text">{{ symbol }}</div>
        <div class="bold">{{ name }}</div>
      </div>

    </div>

    <div class="wrapper">
      <div class="gray-text">Price</div>

      <div class="bold">{{ priceFormatter.format(price) }}</div>
    </div>

    <div class="wrapper">
      <div class="gray-text">Change</div>

      <div class="change-group">
        <span :class="percentageChangeClassName">{{ Math.abs(change).toString().substring(0, 4) + '%' }}</span>
        <img src="src/assets/icons/profit_small.svg" alt="profit icon" v-if="percentageChangeClassName === greenTextBold">
        <img src="src/assets/icons/lose_small.svg" alt="lose icon" v-else>
      </div>

    </div>

    <div class="chart-wrapper">
      <div class="chart"></div>
    </div>

    <div class="buttons-group">
      <BaseButton>Buy</BaseButton>
      <BaseButton :type="ButtonType.Secondary">Sell</BaseButton>
    </div>
  </div>
</template>

<script setup lang='ts'>

import ButtonType from "@/enums/ButtonType";
import {computed} from "vue";

const props = defineProps({
  symbol: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  change: {
    type: Number,
    required: true
  },
});

const redTextBold = 'red-text bold';
const greenTextBold = 'green-text bold';

const percentageChangeClassName = computed(() => {
  if (props.change < 0) {
    return redTextBold;
  } else return greenTextBold;
})

const priceFormatter = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumSignificantDigits: 3, maximumSignificantDigits: 4})

</script>

<style lang='scss' scoped>
.list-item {
  width: 100%;
  min-width: 820px;
  height: 80px;
  padding: 0 28px 0 20px;
  display: flex;
  align-items: center;
  gap: 25px;
  border: 1px solid $light-gray;
  border-radius: 8px;
  flex-shrink: 0;

  .basic-info {
    display: flex;
    gap: 24px;
    width: 160px;
  }

  .wrapper {
    font-size: $font-14px;
    flex-grow: 1;
    flex-basis: 0;

    .change-group {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .gray-text {
      color: $gray;
      margin-bottom: 6px;
    }

    .green-text {
      color: $green
    }

    .red-text {
      color: $red;
    }

    .bold {
      font-family: 'sf-pro-display-semibold', serif;
    }
  }

  .chart-wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    height: 100%;

    .chart {
      width: 150px;
      height: 100%;
      background-color: #7445FB;
    }
  }

  .buttons-group {
    display: flex;
    gap: 8px;
  }

}
</style>