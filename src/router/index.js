import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomePage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";
import PressCenterPage from "../views/PressCenterPage.vue";
import AccountPage from "../views/AccountPage.vue";
import PartnerPage from "../views/Partner.vue";
import ChatPage from "../views/ChatPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactPage
  },
  {
    path: "/press-center",
    name: "PressCenter",
    component: PressCenterPage
  },
  {
    path: "/account",
    name: "account",
    component: AccountPage
  },
  {
    path: "/become-partner",
    name: "partner",
    component: PartnerPage
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatPage
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
