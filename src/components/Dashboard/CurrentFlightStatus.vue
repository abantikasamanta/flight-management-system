<template>
  <div class="pa-0" style="height: 100%">
    <v-card style="height: 100%">
      <v-card-title>
        <span class="card-heading">Current Flight Status</span>
        <v-spacer></v-spacer>
        <v-select
          label="Region"
          :items="['Global', 'Local']"
          dense
          outlined
          style="max-width: 120px"
          hide-details
        ></v-select>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="flights"
        hide-default-footer
        class="elevation-1 centered-table"
      >
        <template #[`item.aircraft`]="{ item }">
          <span v-if="item.alert" class="red--text font-weight-bold">
            {{ item.aircraft }} <v-icon size="18">mdi-alert</v-icon>
          </span>
          <span v-else>{{ item.aircraft }}</span>
        </template>

        <template #[`item.status`]="{ item }">
          <span dark>{{ item.status }}</span>
        </template>

        <template #[`item.dep`]="{ item }">
          <span class="font-weight-bold">{{ item.dep }}</span>
        </template>

        <template #[`item.arr`]="{ item }">
          <span class="font-weight-bold">{{ item.arr }}</span>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CurrentFlightStatus",
  data() {
    return {
      flights: [
        {
          aircraft: "A350",
          dep: "KLAX ETD 1103Z",
          status: "Enroute",
          arr: "KJFK ETA 1503Z",
          alert: true,
        },
        {
          aircraft: "A380",
          dep: "KATL ETD 1103Z",
          status: "Taxi",
          arr: "KPHX ETA 0508Z",
          alert: false,
        },
        {
          aircraft: "A380",
          dep: "KATL ETD 1103Z",
          status: "ETC",
          arr: "KPHX ETA 0508Z",
          alert: false,
        },
        {
          aircraft: "B737",
          dep: "KPHX ETD 1103Z",
          status: "Failed",
          arr: "KJFK ETA 0735Z",
          alert: false,
        },
      ],
      headers: [
        { text: "Aircraft", value: "aircraft", align: "center" },
        { text: "Dep", value: "dep", align: "center" },
        { text: "Status", value: "status", align: "center" },
        { text: "Arr", value: "arr", align: "center" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.card-heading {
  font-size: x-large;
  font-weight: 1000 !important;
}

::v-deep(.v-data-table-header th) {
  text-align: center !important;
}
</style>
