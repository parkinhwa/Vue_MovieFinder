import { createApp } from "vue";
import App from "~/App";
import store from "~/store";
import router from "~/routes";
import Modal from "~/components/Modal";

const app = createApp(App);
app.use(router);
app.use(store);
app.component("Modal", Modal);
app.mount("#app");
