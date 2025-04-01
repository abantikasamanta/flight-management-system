<template>
  <div class="topbarcontainer">
    <v-app-bar color="white accent-4" dense light>
      <v-toolbar-title>Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-row class="search-bar">
        <v-text-field
          label="Search ..."
          append-icon="mdi-magnify"
          outlined
          dense
          hide-details
          class="rounded-input"
        ></v-text-field>
      </v-row>

      <v-spacer> </v-spacer>

      <v-icon class="mr-4">mdi-bell</v-icon>
      <v-avatar color="indigo" class="mr-4">
        <v-icon dark> mdi-account-circle </v-icon>
      </v-avatar>
      <v-col class="mr-4" style="max-width: max-content">
        <v-row style="max-width: max-content">Abantika Samanta</v-row>
        <v-row> Action</v-row>
      </v-col>
      <v-icon class="mr-4"> mdi-chevron-down</v-icon>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "TopBar",
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
.topbarcontainer {
  width: 100% !important;
}
.topbar >>> .v-sheet {
  height: 200px !important;
}

.rounded-input {
  border-radius: 24px;
  width: 40%;
}
</style>
