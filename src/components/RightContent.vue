<template>
  <div>
    <TopBar></TopBar>
    <v-row class="ma-4">
      <v-col v-for="(item, index) in overview" :key="index" cols="12" md="3">
        <OverviewCard :data="item"></OverviewCard>
      </v-col>
    </v-row>
    <v-row class="ma-4">
      <v-col cols="8"><FlightInformation></FlightInformation></v-col>
      <v-col cols="4"><CurrentFlightStatus></CurrentFlightStatus></v-col>
    </v-row>
  </div>
</template>
<script>
import TopBar from "./TopBar.vue";
import OverviewCard from "./OverviewCard.vue";
import FlightInformation from "./FlightInformation.vue";
import CurrentFlightStatus from "./CurrentFlightStatus.vue"
export default {
  name: "RightContent",
  components: {
    TopBar,
    OverviewCard,
    FlightInformation,
    CurrentFlightStatus
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
