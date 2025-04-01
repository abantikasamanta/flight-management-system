<template>
  <div>
    <v-navigation-drawer app>
      <div class="ma-4"> 
        <v-icon size="32">mdi-airplane</v-icon>
        <span class="ml-2">FLIGHTMS</span>
      </div>
      <v-list dense>
        <v-list-item v-for="(item, i) in menuItems" :key="i" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "LeftMenu",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      menuItems: [
        { text: "Dashboard", icon: "mdi-view-dashboard" },
        { text: "Flights", icon: "mdi-airplane" },
        { text: "Bookings", icon: "mdi-book" },
        { text: "Staff", icon: "mdi-account" },
        { text: "Help Desk", icon: "mdi-help-circle" },
        { text: "Manage Aircrafts", icon: "mdi-airplane-cog" },
        { text: "Reports & Analytics", icon: "mdi-chart-bar" },
        { text: "Payments & Refunds", icon: "mdi-cash-refund" },
      ],
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="" scoped></style>
