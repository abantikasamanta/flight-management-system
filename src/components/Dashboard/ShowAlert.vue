<template>
  <v-card class="pa-4 outlined-card" outlined>
    <v-card-title class="font-weight-bold cart pa-0">Alerts</v-card-title>
    <v-divider></v-divider>
    <v-list style="height: 170px">
      <v-list-item v-for="alert in alerts" :key="alert.id">
        <v-list-item-content>
          <v-list-item-title class="font-weight-medium">
            <v-icon left color="red">{{ alert.icon }}</v-icon>
            {{ alert.message }}
          </v-list-item-title>
          <v-list-item-subtitle class="ml-8"
            >{{ alert.details }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <span class="text-caption text--secondary">{{ alert.time }}</span>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ShowAlert",
  data() {
    return {
      alerts: [
        {
          id: 1,
          icon: "mdi-wifi-off",
          message: "Connection loss",
          details: "N1234H",
          time: "20 min ago",
        },
        {
          id: 2,
          icon: "mdi-signal-cellular-outline",
          message: "Less than 25% data remaining",
          details: "Jet Connect for B140Y2",
          time: "1 hour ago",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-heading {
  font-size: x-large;
  font-weight: 1000 !important;
}
.outlined-card {
  border: 4px solid rgb(102, 217, 255) !important;
}
</style>
