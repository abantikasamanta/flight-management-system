<template>
  <div class="flight-form pa-2 ">
    <div class="form-group">
      <label>Flight Number*</label>
      <input
        type="text"
        v-model="flightNumber"
        placeholder="Enter flight number"
      />
    </div>
    <div class="form-group">
      <label>Flight Type*</label>
      <input type="text" v-model="flightType" />
    </div>
    <div class="form-group">
      <label>Departure Airport*</label>
      <select v-model="departureAirport">
        <option value="">Select</option>
        <option v-for="airport in airports" :key="airport" :value="airport">
          {{ airport }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label>Destination Airport*</label>
      <select v-model="destinationAirport">
        <option value="">Select</option>
        <option v-for="airport in airports" :key="airport" :value="airport">
          {{ airport }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label>Flight Route*</label>
      <select v-model="flightRoute">
        <option value="">Select</option>
        <option v-for="route in routes" :key="route" :value="route">
          {{ route }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label>Flight Duration*</label>
      <select v-model="flightDuration">
        <option value="">Select</option>
        <option v-for="duration in durations" :key="duration" :value="duration">
          {{ duration }}
        </option>
      </select>
    </div>
    <div class="buttons">
      <button class="primary" @click="saveAndContinue">Save & Continue</button>
      <button class="secondary" @click="saveAndExit">Save & Exit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlightDetails",
  data() {
    return {
      flightNumber: "",
      flightType: "International",
      departureAirport: "",
      destinationAirport: "",
      flightRoute: "",
      flightDuration: "",
      airports: ["JFK", "LAX", "ORD", "DFW", "DEN"],
      routes: ["Route A", "Route B", "Route C"],
      durations: ["1hr", "2hrs", "3hrs", "4hrs"],
    };
  },
  methods: {
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
.flight-form {
  display: grid;
  gap: 16px;
  max-width: 100%;
  margin: auto;
  background-color: white;

}
.form-group {
  display: flex;
  flex-direction: column;
}
input,
select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.buttons {
  grid-column: span 2;
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
