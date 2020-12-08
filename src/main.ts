import { defineCustomElements, setAssetPath } from "@shoelace-style/shoelace";
import "@shoelace-style/shoelace/dist/shoelace/shoelace.css";
import "@vue/runtime-core";
import { createApp } from "vue";
import "./assets/style/main.scss";
import App from "./components/App.vue";
import router from "./routes";

defineCustomElements();

createApp(App).use(router).mount("#root");
