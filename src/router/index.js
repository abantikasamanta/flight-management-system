import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardContainer from '@/components/Dashboard/DashboardContainer.vue';
import FlightsContainer from '@/components/Flights/FlightsContainer.vue';
import Container from '@/components/Container.vue'; 

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Container,
    children: [
      { path: '', redirect: '/dashboard' },
      { path: 'dashboard', component: DashboardContainer },
      { path: 'flights', component: FlightsContainer }
    ],
  },
];

const router = new VueRouter({
  mode: 'history', // Enables clean URLs
  routes,
});

export default router;
