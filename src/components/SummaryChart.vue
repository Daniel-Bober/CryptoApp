<template>
  <div class="summary-chart">

    <div class="top-section">
      <h1>Summary</h1>
      <button><img src="../assets/icons/menu_dots.svg" alt="menu icon"></button>
    </div>

    <div class="mid-section">
      <canvas id="chart"></canvas>
    </div>

    <div class="bottom-section">

      <div class="month-group">
        <div class="circle"></div>
        <button @click="">This month</button>
      </div>

      <div class="month-group">
        <div class="circle gray"></div>
        <button @click="">Last month</button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Chart from 'chart.js/auto';
import {onMounted} from "vue";
import {getCurrentSummaryChart} from "@/configs/chart";

let balanceSummaryChart: any = null

function toggleData(value: number) {
const visibleData = balanceSummaryChart.isDatasetVisible(value)

  if(visibleData) {
    balanceSummaryChart.hide(value)
  }
  else balanceSummaryChart.show(value)
}

onMounted(() => {

  const canvas = document.getElementById('chart') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const gradientBg = ctx.createLinearGradient(0, 0, 0, 130);
  gradientBg.addColorStop(0, '#7445FB99');
  gradientBg.addColorStop(1, '#7445FB00');

  const config = getCurrentSummaryChart(gradientBg)


  balanceSummaryChart = new Chart(
      canvas,
      config
  );
})


</script>

<style lang='scss' scoped>
.summary-chart {
  @include base-card;

  .mid-section {
    height: 189px;
  }

  .bottom-section {
    padding-left: 20px;
    display: flex;
    gap: 12px;

    .month-group {
      display: flex;
      align-items: center;
      gap: 8px;

      button {
        font-size: $font-12px;
        color: $gray;
        transition: $time-hover-anim;
        pointer-events: none;
      }

    }

    .circle {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: $purple;
    }

    .gray {
      background-color: #D5D5D6;
    }
  }

}

@media (max-width: $screen-size-m) {
  .summary-chart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 350px;
  }

}

@media (max-width: $screen-size-s) {
  .summary-chart {
    padding: 0;

    .mid-section {
      width: 80vw;
    }
  }


}
</style>