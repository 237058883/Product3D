import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

createApp(App).use(store).use(router).use(Antd).mount("#app");

// axios({
//  baseURL: "http://123.207.32.32:8000",
//  url: "/home/multidata",
// }).then((res) => {
//  console.log(res);
// });
