import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ContactBim from "../views/ContactBim.vue";
import OffreBim from "../views/OffreBim.vue";
import ServiceBim from "../views/ServiceBim.vue";
import DashBoard from "../views/DashBoard.vue";
import VueScrollTo from "vue-scrollto";


Vue.use(VueRouter);
Vue.use(VueScrollTo);

const routes = [
  {
    path: "/",
    name: "Zuhause",
    component: Home
  },
  {
    path: "/ContactBim",
    name: "ContactBim",
    component: ContactBim
  },
  {
    path: "/OffreBim",
    name: "OffreBim",
    component: OffreBim
  },
  {
    path: "/ServiceBim",
    name: "ServiceBim",
    component: ServiceBim
  },
  {
    path: "/DashBoard",
    name: "DashBoard",
    component: DashBoard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
});

export default router;
