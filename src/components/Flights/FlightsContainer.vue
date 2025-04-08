<template>
  <div class="flight-dashboard ma-3">
    <v-tabs
      v-model="activeTab"
      background-color="transparent"
      color="basil"
      width=" fit-content"
    >
      <v-tab v-for="item in tabItems" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="activeTab" style="background: none">
      <v-tab-item>
        <v-row no-gutters>
          <div class="date-container my-3 px-3">
            <span class="date-text">{{ getCurrentDate }}</span>
            <v-menu v-model="menu" transition="scale-transition" offset-y>
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" variant="text" icon>
                  <v-icon>mdi-calendar</v-icon>
                </v-btn>
              </template>
              <v-date-picker
                v-model="selectedDate"
                @update:model-value="updateDate"
              ></v-date-picker>
            </v-menu>
          </div>
          <v-spacer></v-spacer>
          <div class="date-selector">
            <button
              @click="prevMonth"
              class="date-container date-selectore-arrow px-2 mr-2"
            >
              &#8249;
            </button>
            <button
              @click="nextMonth"
              class="date-container date-selectore-arrow px-2"
            >
              &#8250;
            </button>
          </div>
        </v-row>

        <div class="days">
          <div
            class="date-box"
            v-for="day in days"
            :key="day.date"
            :class="selectedDay === day.date ? 'active' : 'inactive'"
            @click="selectDay(day.date)"
          >
            <div>{{ day.date }}</div>
            <div>{{ day.day }}</div>
          </div>
        </div>

        <div class="flights">
          <div
            v-for="flight in flights"
            :key="flight.id"
            :class="['flight-card']"
          >
            <div>
              <div class="flight-header">
                <span style="margin-top: 6px; margin-right: 12px">{{
                  flight.aircraft
                }}</span>
                <span :class="['status', flight.status.toLowerCase()]">{{
                  flight.status
                }}</span>
                <v-spacer></v-spacer>
                <v-icon>mdi-dots-vertical</v-icon>
              </div>
              <div class="flight-details">
                <div class="departure">
                  <span>{{ flight.departureTime }}</span>
                  <span>{{ flight.departureAirport }}</span>
                </div>
                <span class="duration">{{ flight.duration }}</span>
                <div class="arrival">
                  <span>{{ flight.arrivalTime }}</span>
                  <span>{{ flight.arrivalAirport }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "FlightContainer",
  data() {
    return {
      tabItems: ["Upcoming", "Completed", "Real-time tracking"],
      activeTab: "upcoming",
      selectedDay: "04",
      selectedDate: new Date().toISOString().substr(0, 10),
      menu: false,
      days: [
        { day: "SUN", date: "02" },
        { day: "MON", date: "03" },
        { day: "TUE", date: "04" },
        { day: "WED", date: "05" },
        { day: "THU", date: "06" },
        { day: "FRI", date: "07" },
        { day: "SAT", date: "08" },
      ],
      flights: [
        {
          id: 1,
          aircraft: "Airbus A350",
          status: "Ready for Departure",
          departureTime: "12:15",
          departureAirport: "YYZ",
          arrivalTime: "11:25",
          arrivalAirport: "DEL",
          duration: "13h 40m",
          occupancy: "70% (60/210 Economy | 21 Business left)",
        },
        {
          id: 2,
          aircraft: "Airbus A350",
          status: "Cancelled",
          departureTime: "12:15",
          departureAirport: "YYZ",
          arrivalTime: "11:25",
          arrivalAirport: "DEL",
          duration: "13h 40m",
        },
      ],
    };
  },
  computed: {
    getCurrentDate() {
      const date = new Date(this.selectedDate);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });
    },
  },
  methods: {
    selectDay(date) {
      this.selectedDay = date;
    },
    updateDate(newDate) {
      this.selectedDate = newDate;
      this.menu = false;
    },
    prevMonth() {
      alert("Previous month selected");
    },
    nextMonth() {
      alert("Next month selected");
    },
  },
};
</script>

<style scoped>
.date-text {
  padding-top: 6px;
}
.date-container {
  max-width: fit-content;
  background: white;
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

.date-selectore-arrow {
  max-height: fit-content;
  font-weight: 400;
  font-size: larger;
}
.flight-dashboard {
  max-width: 100%;
  margin: auto;
  font-family: Arial, sans-serif;
}
.tabs {
  display: flex;
  gap: 10px;
}
.tabs button {
  padding: 8px 12px;
  border: none;
  background: lightgray;
  cursor: pointer;
}
.tabs .active {
  background: purple;
  color: white;
}
.date-selector {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.days {
  display: flex;
  justify-content: space-between;
  height: 84px;
}
.days .date-box {
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  width: 140px;
}
.days .active {
  background: purple;
  color: white;
}

.days .inactive {
  background-color: white;
  color: black;
}
.flight-card {
  background: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
.flight-header {
  display: flex;
  justify-content: start;
}
.status {
  padding: 4px 8px;
  border-radius: 4px;
}
.ready {
  background: #9ef1c3;
  border: 2px solid #1aeb78;
}
.cancelled {
  background: #f18e8e;
  border: 2px solid #db0303;
}
.flight-details {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
