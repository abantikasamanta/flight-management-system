<template>
  <div class="ma-3">
    <v-row no-gutters>
      <v-col
        v-for="(item, index) in overview"
        :key="index"
        cols="12"
        md="3"
        class="pr-2"
      >
        <OverviewCard :data="item"></OverviewCard>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-3">
      <v-col cols="8" class="pr-3"
        ><FlightInformation></FlightInformation
      ></v-col>
      <v-col cols="4"><CurrentFlightStatus></CurrentFlightStatus></v-col>
    </v-row>
    <v-row no-gutters class="mt-3">
      <v-col cols="8" class="pr-3"><PerformanceGraph></PerformanceGraph></v-col>
      <v-col cols="4"><ShowAlert></ShowAlert></v-col>
    </v-row>
    <v-row no-gutters class="mt-3">
      <v-col cols="8" class="pr-3"><SalesChart></SalesChart></v-col>
      <v-col cols="4"><TravelRoutesCard></TravelRoutesCard></v-col>
    </v-row>
  </div>
</template>
<script>
import OverviewCard from "./OverviewCard.vue";
import FlightInformation from "./FlightInformation.vue";
import CurrentFlightStatus from "./CurrentFlightStatus.vue";
import PerformanceGraph from "./PerformanceGraph.vue";
import ShowAlert from "./ShowAlert.vue";
import SalesChart from "./SalesChart.vue";
import TravelRoutesCard from "./TravelRoutesCard.vue";
export default {
  name: "DashboardContainer",
  components: {
    OverviewCard,
    FlightInformation,
    CurrentFlightStatus,
    PerformanceGraph,
    ShowAlert,
    SalesChart,
    TravelRoutesCard,
  },
  mixins: [],
  props: {},
  data() {
    return {
      overview: {},
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.getOverviewDetails();
  },
  methods: {
    getOverviewDetails() {
      fetch("/overview.json")
        .then((response) => response.json())
        .then((data) => {
          this.overview = data;
        })
        .catch((error) => console.error("Error loading JSON:", error));
    },
  },
};
</script>
<style lang="" scoped></style>
