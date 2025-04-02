<template>
  <v-card class="sales-card pr-2" elevation="4" :style="{ background: data.color }">
    <v-row align="center">
      <!-- Icon -->
      <v-col cols="2">
        <v-avatar size="32" class="icon-container">
          <v-icon color="white">{{ data.icon }}</v-icon>
        </v-avatar>
      </v-col>

      <v-spacer></v-spacer>
      <!-- Percentage Change -->
      <v-col cols="8" class="text-right">
        <v-chip
          color="white"
          text-color="black"
          small
          style="border-radius: 4px !important"
          >{{ data.percentage }}</v-chip
        >
      </v-col>
    </v-row>

    <!-- Text and Amount -->
    <v-row>
      <v-col cols="12">
        <p class="sales-text mt-5">{{ data.title }}</p>
        <h2 class="sales-amount">{{ data.value }}</h2>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "OverviewCard",
  components: {},
  mixins: [],
  props: {
    data: { type: Object, default: () => {} },
  },
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
.sales-card {
  width: 100%;
  height: 168px;
  border-radius: 12px;
  color: white;
  padding: 16px;
}

.icon-container {
  background: rgba(255, 255, 255, 0.2);
}

.sales-text {
  font-size: 14px;
  margin: 0;
}

.sales-amount {
  font-size: 20px;
  font-weight: bold;
  margin: 4px 0 0 0;
}
</style>
