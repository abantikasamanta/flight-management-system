<template>
  <v-app>
    <!-- Left Sidebar -->
    <LeftMenu></LeftMenu>

    <!-- Right Main Content -->
    <v-main>
      <TopBar></TopBar>
      <v-container fluid class="right-content">
        <v-row>
          <!-- <DashboardContainer style="width: 100% !important"></DashboardContainer> -->
          <FlightsContainer style="width: 100% !important"></FlightsContainer>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from "./TopBar.vue";
import LeftMenu from "./LeftMenu.vue";
// import DashboardContainer from "./Dashboard/DashboardContainer.vue";
import FlightsContainer from "./Flights/FlightsContainer.vue"
export default {
  name: "EmptyContainer",
  data() {
    return {};
  },
  components: {
    TopBar,
    LeftMenu,
    // DashboardContainer,
    FlightsContainer
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 20px;
  padding: 16px;
}

.right-content {
  background-color: rgb(239, 245, 245);
}
</style>
