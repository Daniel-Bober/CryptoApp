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

      <div class="percentage-profit">
        <img src="../assets/icons/profit.svg" alt="profit icon">
        <span>{{ percentageGain }}</span>
        <span>% in last month</span>
      </div>
    </div>

    <div class="bottom-section">
      <BaseButton>Quick Invest</BaseButton>
      <BaseButton :type="ButtonType.Secondary">Show Report</BaseButton>
    </div>

  </div>
</template>

<script setup lang='ts'>
import {ref} from "vue";
import ButtonType from "@/enums/ButtonType";

const currentBalance = ref('21 432.23');
const percentageGain = ref(12);
</script>

<style lang='scss' scoped>
.current-balance {
  @include base-card;


  .mid-section {
    margin-top: 40px;

    .balance {
      span {
        font-size: $font-56px;
      }
    }

    .percentage-profit {
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
    display: flex;
    gap: 8px;
    margin-top: 72px;

  }
}


@media (max-width: $screen-size-s) {
  .current-balance {
    .mid-section {
      .balance {
        span {
          font-size: 14vw;
        }
      }
    }
  }
  }

</style>