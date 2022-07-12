import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login";
import Register from "../components/Register";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      props: true,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      props: true,
    },
  ],
});

export default router;
