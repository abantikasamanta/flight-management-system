<template>
  <v-card class="pa-0">
    <v-card-title class="text-h6 d-flex justify-space-between">
      Sales
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Last Week ▼</v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>This Week</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Last Month</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-divider></v-divider>
    <div style="height: 300px">
      <canvas ref="salesChart" class="py-2 px-3"></canvas>
    </div>
  </v-card>
</template>

<script>
import Vue from "vue";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default Vue.extend({
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.salesChart.getContext("2d");
      this.chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "June 01",
            "June 02",
            "June 03",
            "June 04",
            "June 05",
            "Sept 16",
          ],
          datasets: [
            {
              label: "Sales",
              data: [80, 40, 60, 20, 90, 50],
              backgroundColor: "#2c1e50",
            },
            {
              label: "Target",
              data: [100, 100, 100, 100, 100, 100],
              backgroundColor: "rgba(44, 30, 80, 0.2)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: { stepSize: 25 },
            },
          },
        },
      });
    },
  },
});
</script>
