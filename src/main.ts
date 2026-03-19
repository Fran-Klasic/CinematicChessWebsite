import { createApp } from "vue";
import "animate.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const redirect = sessionStorage.redirect;

if (redirect) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirect);
}

const app = createApp(App);
app.use(router);
app.mount("#app");
