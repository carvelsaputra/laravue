import Vue from "vue";
import Template from "./layouts/default.vue";
//we can import new plugins here
import { VueInjector } from "./plugins/index.js";

const $vue = new Vue({
    render: h => h(Template),
    el: "#app",
    //we can init new plugins and init inside this scope
    ...VueInjector
});
console.log($vue);
