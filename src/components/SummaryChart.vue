<template>
  <div class="summary-chart">

    <div class="top-section">
      <h1>Summary</h1>
      <button><img src="../assets/icons/menu_dots.svg" alt="menu icon"></button>
    </div>

    <div class="mid-section">
      <canvas id="chart"></canvas>
    </div>


    <!--    <div class="bottom-section">-->

    <!--      <div class="this-month-group">-->
    <!--        <div class="circle"></div>-->
    <!--        <span>This month</span>-->
    <!--      </div>-->

    <!--      <div>-->
    <!--        <div class="circle gray"></div>-->
    <!--        <span>Last month</span>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script setup lang='ts'>
import Chart from 'chart.js/auto';
import {onMounted} from "vue";
import type {ChartConfiguration} from "chart.js";

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let gradientBg = null;

const data = {
  labels: labels,
  datasets: [{
    label: 'This month',
    data: [20020, 20010, 20022, 20027, 20025, 20012, 20018, 20021, 20035, 20027, 20012, 20000, 20020, 20041, 20052, 20025, 20018, 20007],
    fill: {
      target: 'shape',
    },
    borderColor: '#7445FB',
    borderCapStyle: 'round',
    borderWidth: 2,
    tension: 0.4,
    pointBorderColor: 'rgba(0, 0, 0, 0)',
    pointBackgroundColor: 'rgba(0, 0, 0, 0)',
    pointHoverBackgroundColor: 'rgb(250, 250, 250)',
    pointHoverBorderColor: '#7445FB',
    hoverBorderWidth: 2
  },
    {
      label: 'Last Month',
      data: [20050, 20020, 20030, 20035, 20040, 20022, 20028, 20031, 20045, 20037, 20032, 20000, 20030, 20031, 20032, 20035, 20038, 20047],
      borderColor: 'rgba(133, 133, 133, 0.3)',
      borderCapStyle: 'round',
      fill: false,
      borderDash: [4, 5],
      borderWidth: 2,
      tension: 0.4,
      pointBorderColor: 'rgba(0, 0, 0, 0)',
      pointBackgroundColor: 'rgba(0, 0, 0, 0)',
      pointHoverBackgroundColor: 'rgb(250, 250, 250)',
      pointHoverBorderColor: 'rgba(133, 133, 133, 0.3)',
      hoverBorderWidth: 2
    }],
};

const config: ChartConfiguration = {
  type: 'line',
  data: data,
  options: {
    hover: {
      intersect: false
    },
    responsive: true,
    scales: {
      y: {
        display: true,
        border: {
          display: false,
          dash: [1, 6],
          dashOffset: 10
        },
        grid: {
          drawTicks: false,
          color: 'rgba(133, 133, 133, 0.64)',
          lineWidth: 1,
        },
        ticks: {
          padding:18,
        }
      },
      x: {
        display: false
      }
    },
  }
};

// const canvas = document.getElementById('balance-summary-chart') as HTMLCanvasElement;
// const ctx = canvas.getContext('2d')!;


onMounted(() => {
  const canvas: any = document.getElementById('chart');
  const ctx: any = canvas.getContext('2d');
  gradientBg = ctx.createLinearGradient(0, 0, 0, 400);
  gradientBg.addColorStop(0, '#7445FB');
  gradientBg.addColorStop(1, '#7445FB00');




  const balanceSummaryChart = new Chart(
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
    display: flex;

    .this-month-group {
      margin-right: 12px;
    }

    span {
      font-size: $font-12px;
      color: $gray;
    }

    .circle {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      color: $purple;
    }

    .gray {
      color: #D5D5D6;
    }
  }

}

@media (max-width: $screen-size-m) {
 .summary-chart {
   .mid-section {
     height: 129px;
   }

 #chart {
 width: 200px}
 }
}

@media (max-width: $screen-size-m) {
  .mid-section {

    .balance {
      span {
        font-size: 14vw;
      }
    }
  }
}
</style>