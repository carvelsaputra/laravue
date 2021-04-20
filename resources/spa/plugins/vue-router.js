import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
import routes from "../routers/index.js";

export default new VueRouter({
    routes,
    mode: "history"
});
