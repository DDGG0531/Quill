import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/index.css";
import "quill/dist/quill.snow.css";
import "quill-image-uploader/dist/quill.imageUploader.min.css";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
