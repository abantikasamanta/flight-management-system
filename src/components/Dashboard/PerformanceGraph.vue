<template>
  <v-container class="pa-0">
    <v-card>
      <v-card-title class="font-weight-bold cart"
        >Performance
        <v-spacer></v-spacer>
        <v-select
          label="Today"
          dense
          outlined
          style="max-width: 120px"
          hide-details
        ></v-select
      ></v-card-title>
      <v-row align="center">
        <v-col
          cols="4"
          v-for="(chart, index) in charts"
          :key="index"
          class="text-center"
        >
          <div class="chart-container">
            <canvas :id="'chart-' + index"></canvas>
            <div class="chart-text">{{ chart.value }}%</div>
          </div>
          <div class="mt-2 font-weight-bold">{{ chart.label }}</div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "PerformanceGraph",
  data() {
    return {
      charts: [
        {
          id: "chart-0",
          value: 70,
          label: "Fleet Occupancy",
          color: "#7C4DFF",
        },
        { id: "chart-1", value: 30, label: "Delays", color: "#4CAF50" },
        { id: "chart-2", value: 30, label: "Cancellations", color: "#2196F3" },
      ],
    };
  },
  mounted() {
    this.charts.forEach((chart, index) => {
      const ctx = document.getElementById(`chart-${index}`).getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [chart.value, 100 - chart.value],
              backgroundColor: [chart.color, "#E0E0E0"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          cutoutPercentage: 75, // Adjust the hole size
          responsive: true,
          maintainAspectRatio: false,
          legend: { display: false },
          tooltips: { enabled: false },
        },
      });
    });
  },
};
</script>

<style scoped>
.chart-container {
  position: relative;
  display: inline-block;
  width: 120px;
  height: 120px;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
}
.chart-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
}
.card-heading {
  font-size: x-large;
  font-weight: 1000 !important;
}
</style>
