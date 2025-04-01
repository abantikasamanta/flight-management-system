<template>
  <v-card class="mx-auto" max-width="100%" height="max-content">
    <v-card-title class="pb-0"
      ><span class="card-heading"> Flights Information</span>
    </v-card-title>

    <v-card-text class="text--primary">
        <v-card class="mx-auto mt-4" max-width="100%" height="350"></v-card>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "FlightInformation",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.card-heading {
  font-size: x-large;
  font-weight: 1000 !important;
}
</style>