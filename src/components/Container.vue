<template>
  <v-app>
    <left-menu></left-menu>

    <top-bar></top-bar>
    <v-main>
      <v-container fluid class="pa-0">
        <!-- <router-view></router-view> -->
        <DashboardContainerVue></DashboardContainerVue>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from "./TopBar.vue";
import LeftMenu from "./LeftMenu.vue";
import DashboardContainerVue from './Dashboard/DashboardContainer.vue';

export default {
  name: "EmptyContainer",
  components: {
    TopBar,
    LeftMenu,
    DashboardContainerVue
  },
};
</script>

<style scoped>
.left-menu {
  width: 250px; /* Adjust width as needed */
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
