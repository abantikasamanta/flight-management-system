<template>
  <v-app>
    <!-- Left Sidebar -->
    <LeftMenu></LeftMenu>

    <!-- Right Main Content -->
    <v-main>
      <v-container fluid>
        <v-row>
          <RightContent style="width: 100% !important"></RightContent>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LeftMenu from "./LeftMenu.vue";
import RightContent from "./RightContent.vue";
export default {
  name: "EmptyContainer",
  data() {
    return {};
  },
  components: {
    LeftMenu,
    RightContent,
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 20px;
  padding: 16px;
}
</style>
