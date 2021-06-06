import Vue from "vue";
import App from "@/App.vue";
import BootstrapVue from "bootstrap-vue";

import router from "@/router";
import Breadcrumbs from "@/components/bread_crumbs";
import { store } from "@/store";
import Vue2Filters from "vue2-filters";
import VueSweetalert2 from "vue-sweetalert2";
import VueFormWizard from "vue-form-wizard";
import VueTour from "vue-tour";
import Notifications from "vue-notification";
import { Vue2Dragula } from "vue2-dragula";
import Toasted from "vue-toasted";
import SmartTable from "vuejs-smart-table";
import * as VueGoogleMaps from "vue2-google-maps";
import { VueMasonryPlugin } from "vue-masonry";
import VueFeather from "vue-feather";
import VueApexCharts from "vue-apexcharts";
import FunctionalCalendar from "vue-functional-calendar";
import vueKanban from "vue-kanban";

// Import Theme scss
import "../src/assets/scss/app.scss"; //"./assets/scss/app.scss";

import vuetify from "@/plugins/vuetify";
import "@babel/polyfill";
// api services
import ApiService from "@/services/api.service";
//
import DataTable from "@/components/datatable.vue";
import FormMuzaki from "@/components/form-muzaki.vue";
import FormMustahik from "@/components/form-mustahik.vue";
import FormKantorLayanan from "@/components/form-kantorlayanan.vue";
import FormUser from "@/components/form-user.vue";

import PxCard from "@/components/Pxcard.vue";
import { Icon } from "leaflet";

// Multi Language Add
import VueI18n from "vue-i18n";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import id from "@/locales/id.json";
import { defaultLocale, localeOptions } from "@/constants/config.js";

const messages = { en: en, es: es, id: id };

Vue.component("data-table", DataTable);
Vue.component("FormMuzaki", FormMuzaki);
Vue.component("FormMustahik", FormMustahik);
Vue.component("FormKantorLayanan", FormKantorLayanan);
Vue.component("FormUser", FormUser);

Vue.component("Breadcrumbs", Breadcrumbs);

Vue.component("apexchart", VueApexCharts);

//

Vue.component(PxCard.name, PxCard);

delete Icon.Default.prototype._getIconUrl;

ApiService.init();

Vue.use(VueFeather);

Vue.use(Toasted, {
  iconPack: "fontawesome",
});
Vue.use(Vue2Dragula);

Vue.use(VueGoogleMaps, {
  load: {
    key: "API_KEY",
    libraries: "places",
  },
});

Vue.use(Notifications);
Vue.use(Vue2Filters);
Vue.use(VueSweetalert2);
Vue.use(VueFormWizard);
Vue.use(VueTour);
Vue.use(BootstrapVue);
Vue.use(SmartTable);
Vue.use(require("vue-chartist"));
Vue.use(require("vue-moment"));
Vue.use(VueMasonryPlugin);
Vue.use(FunctionalCalendar, {
  dayNames: ["M", "T", "W", "T", "F", "S", "S"],
});
Vue.use(vueKanban);
Vue.use(VueI18n);
const locale =
  window.localStorage.getItem("currentLanguage") &&
  localeOptions.filter(
    (x) => x.id === window.localStorage.getItem("currentLanguage")
  ).length > 0
    ? window.localStorage.getItem("currentLanguage")
    : defaultLocale;

const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: "en",
  messages: messages,
});

Vue.config.productionTip = false;
new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
