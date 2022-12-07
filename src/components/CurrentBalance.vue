<template>
  <div class="current-balance">

    <div class="top-section">
      <h1>Current Balance</h1>
      <button><img src="../assets/icons/menu_dots.svg" alt="menu icon"></button>
    </div>

    <div class="mid-section">

      <div class="balance">
        <span class="gray-text">$</span>
        <span class="font-medium" >{{ currentBalance }}</span>
      </div>

      <div class="gain">
        <img src="../assets/icons/profit.svg" alt="profit icon">
        <span>{{ percentageGain }}</span>
        <span>% in last month</span>
      </div>
    </div>

    <div class="bottom-section">
      <BaseButton mode="margin-right-8px">Quick Invest</BaseButton>
      <BaseButton mode="clear">Show Report</BaseButton>
    </div>


  </div>
</template>

<script lang='ts'>
import {ref} from "vue";

export default {

  setup() {

    const currentBalance = ref('21 432.23');
    const percentageGain = ref(12);



    return {
      currentBalance,
      percentageGain
    }
  }
}
</script>

<style lang='scss' scoped>
.current-balance {
  width: 100%;
  max-width: 509px;
  height: 100%;
  max-height: 336px;
  padding: 32px;
  margin: 32px auto 0 auto;
  background-color: $dirty-white;
  border-radius: 16px;

  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mid-section {
    margin-top: 40px;

    .balance {
      span {
        font-size: $font-56px;
      }
    }

    .gain {
      display: flex;
      align-items: center;

      img {
        margin-right: 6px;
      }

      span {
        font-family: 'sf-pro-display-medium', serif;
        font-size: $font-18px;
        color: $green;
      }
    }

    .gray-text {
      font-family: 'sf-pro-display-light', serif;
      color: $gray;
    }
  }

  .bottom-section {
    margin-top: 72px;
  }
}
</style>