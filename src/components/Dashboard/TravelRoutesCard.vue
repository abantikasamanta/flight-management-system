<template>
  <v-card style="max-width: 100%; height: 100%">
    <v-card-title>
      Popular Routes
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            Last Week
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="changePeriod('Last Week')">
            <v-list-item-title>Last Week</v-list-item-title>
          </v-list-item>
          <v-list-item @click="changePeriod('This Month')">
            <v-list-item-title>This Month</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="(route, index) in routes" :key="index">
        <v-list-item-content>
          <v-list-item-title
            >{{ route.from }} to {{ route.to }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action>
          <strong>{{ route.count }}</strong>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "TravelRoutesCard",
  data() {
    return {
      routes: [
        { from: "Kuala Lumpur (KUL)", to: "Singapore (SIN)", count: 120 },
        { from: "Hong Kong (HKG)", to: "Taipei (TPE)", count: 110 },
        { from: "Toronto (YYZ)", to: "New York (LGA)", count: 80 },
        { from: "Jakarta (CGK)", to: "Kuala Lumpur (KUL)", count: 60 },
      ],
      selectedPeriod: "Last Week",
    };
  },
  methods: {
    changePeriod(period) {
      this.selectedPeriod = period;
    },
  },
};
</script>

<style scoped>
.v-card {
  max-width: 400px;
}
</style>
