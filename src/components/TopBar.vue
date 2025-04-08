<template>
    <v-app-bar app color="white">
      <!-- Title -->
      <v-toolbar-title class="font-weight-bold">Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Bar -->
      <v-flex class="search-container">
        <v-text-field
          label="Search ..."
          append-icon="mdi-magnify"
          dense
          outlined
          hide-details
          class="rounded-input"
        ></v-text-field>
      </v-flex>

      <v-spacer></v-spacer>

      <!-- Notifications & User Profile -->
      <v-icon class="mr-4">mdi-bell</v-icon>
      <v-avatar color="indigo" class="mr-4">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>

      <v-col class="user-info">
        <v-row class="user-name">Abantika Samanta</v-row>
        <v-row class="user-action">Action</v-row>
      </v-col>

      <v-icon class="mr-4">mdi-chevron-down</v-icon>
    </v-app-bar>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style scoped>
/* Make top bar fixed */
.topbarcontainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

/* Prevent content from hiding behind fixed top bar */
body {
  padding-top: 56px; /* Adjust this if the bar height changes */
}

.search-container {
  max-width: 300px;
}

.rounded-input {
  border-radius: 24px;
  width: 100%;
}

.user-info {
  text-align: right;
  max-width: max-content;
}

.user-name {
  font-weight: bold;
}
</style>
