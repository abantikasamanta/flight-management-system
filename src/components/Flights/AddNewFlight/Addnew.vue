<template>
  <div style="max-width: 100%">
    <v-row
      ><v-icon>mdi-arrow-left</v-icon
      ><span class="card-heading">Add New Flight</span></v-row
    >
    <v-row no-gutters class="pt-3"
      ><ProgressBar :currentStep="currentStep"></ProgressBar
    ></v-row>
    <FlightDetails class="my-2" v-if="currentStep === 1"></FlightDetails>
    <FlightSchedule class="my-2" v-if="currentStep === 2"></FlightSchedule>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import FlightDetails from "./FlightDetails.vue";
import FlightSchedule from "./FlightSchedule.vue";
export default {
  name: "AddNew",
  components: {
    ProgressBar,
    FlightDetails,
    FlightSchedule,
  },
  data(){
    return {
      currentStep:1
    }
  }
};
</script>

<style scoped>
.card-heading {
  font-size: x-large;
  font-weight: 1000 !important;
}
</style>