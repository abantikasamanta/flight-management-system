<template>
  <v-row no-gutters class="progress-tracker pl-4">
    <v-col
      cols="2"
      v-for="(step, index) in steps"
      :key="index"
      class="step-wrapper mr-8"
    >
      <div
        class="step"
        :class="currentStep >= index + 1 ? 'active' : 'inactive'"
      >
        {{ index + 1 }}
      </div>
      <span
        class="label pl-1"
        :class="{ 'active-label': currentStep >= index + 1 }"
        >{{ step }}</span
      >
      <v-spacer></v-spacer>
      <span v-if="index < steps.length - 1" class="separator pl-5"
        >&raquo;</span
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  data() {
    return {
      steps: [
        "Flight details",
        "Schedule",
        "Aircraft Info",
        "Pricing",
        "Review",
      ],
    };
  },
};
</script>

<style scoped>
.progress-tracker {
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 60px;
  background-color: #fff;
  border-radius: 6px;
}
.step-wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
}
.step {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  color: #fff;
  border-radius: 5px;
}
.inactive {
  background-color: #777;
}
.active {
  background-color: #7300e6;
}
.completed {
  background-color: #bbb;
}
.label {
  color: #aaa;
  font-size: 14px;
}
.active-label {
  color: #7300e6;
  font-weight: bold;
}
.separator {
  color: #aaa;
  font-size: 22px;
  padding-bottom: 4px;
}
</style>
