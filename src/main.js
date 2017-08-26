import Vue from "vue";
import "./config/startup";
import { router } from "./router";
import { store } from "./store";
import App from "./app.vue";
import "mavon-editor/dist/css/index.css";
var mavonEditor = require("./views/components/md.vue");

new Vue({
  el: "#main",
  router: router,
  store: store,
  render: h => h(App)
});
