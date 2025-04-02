<template>
  <div class="flight-schedule-form">
    <div class="form-row">
      <div class="form-group pa-4">
        <label>Departure Date*</label>
        <input type="date" v-model="departureDate" />
      </div>
      <div class="form-group">
        <label>Departure Time*</label>
        <input type="time" v-model="departureTime" />
      </div>
      <div class="form-group">
        <label>Timezone*</label>
        <select v-model="departureTimezone">
          <option value="">Select</option>
          <option v-for="zone in timezones" :key="zone" :value="zone">
            {{ zone }}
          </option>
        </select>
      </div>
    </div>

    <div class="form-row pa-4">
      <div class="form-group">
        <label>Arrival Date*</label>
        <input type="date" v-model="arrivalDate" />
      </div>
      <div class="form-group">
        <label>Arrival Time*</label>
        <input type="time" v-model="arrivalTime" />
      </div>
      <div class="form-group">
        <label>Timezone*</label>
        <select v-model="arrivalTimezone">
          <option value="">Select</option>
          <option v-for="zone in timezones" :key="zone" :value="zone">
            {{ zone }}
          </option>
        </select>
      </div>
    </div>

    <div class="recurrence pa-4">
      <h3>Recurrence</h3>
      <div class="form-row">
        <div class="form-group">
          <label>Repeat Every</label>
          <select v-model="repeatEvery">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <select v-model="repeatUnit">
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <label>Repeat On</label>
        <div class="repeat-days">
          <button
            v-for="day in days"
            :key="day"
            :class="{ active: repeatDays.includes(day) }"
            @click="toggleDay(day)"
          >
            {{ day }}
          </button>
        </div>
      </div>
      <div class="form-group">
        <label>Ends On</label>
        <select v-model="endsOn">
          <option value="Never">Never</option>
          <option value="After">After</option>
          <option value="On Date">On Date</option>
        </select>
      </div>
    </div>

    <div class="buttons px-4">
      <button class="primary" @click="saveAndContinue">Save & Continue</button>
      <button class="secondary" @click="saveAndExit">Save & Exit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlightSchedule",
  data() {
    return {
      departureDate: "",
      departureTime: "",
      departureTimezone: "",
      arrivalDate: "",
      arrivalTime: "",
      arrivalTimezone: "",
      timezones: ["UTC", "EST", "PST", "CET", "IST"],
      repeatEvery: "1",
      repeatUnit: "Week",
      repeatDays: ["Sun"],
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      endsOn: "Never",
    };
  },
  methods: {
    toggleDay(day) {
      if (this.repeatDays.includes(day)) {
        this.repeatDays = this.repeatDays.filter((d) => d !== day);
      } else {
        this.repeatDays.push(day);
      }
    },
    saveAndContinue() {
      alert("Saving and continuing...");
    },
    saveAndExit() {
      alert("Saving and exiting...");
    },
  },
};
</script>

<style scoped>
.flight-schedule-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 100%;
  margin: auto;
  background-color: white;
}
.form-row {
  display: flex;
  gap: 16px;
}
.form-group {
  display: flex;
  flex-direction: column;
  flex: 1;
}
input,
select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.recurrence {
  background: white;
  border-radius: 8px;
}
.repeat-days button {
  padding: 8px 12px;
  margin: 4px;
  border: none;
  background: #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
}
.repeat-days .active {
  background: #4b0082;
  color: white;
}
.buttons {
  display: flex;
  gap: 10px;
  justify-content: start;
}
.primary {
  background-color: #4b0082;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}
.secondary {
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
