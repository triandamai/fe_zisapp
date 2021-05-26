import Vue from "vue";
import Vuex from "vuex";
// import 'es6-promise/auto';
import layout from "./modules/layout";
import auth from "./modules/auth";
import master from "./modules/master";
import menu from "./modules/menu";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    formakad: false,
    formdeposito: false,
    formjenistransaksi: false,
    formpembiayaan: false,
    formproduk: false,
    formsimpanan: false,
    body: {}
  },
  mutations: {
    changeLang(state, payload) {
      localStorage.setItem("currentLanguage", payload.id);
      localStorage.setItem("currentLanguageIcon", payload.icon);
      window.location.reload();
    },
    hideForm(state, {}) {
      state.formakad = false;
      state.formdeposito = false;
      state.formjenistransaksi = false;
      state.formpembiayaan = false;
      state.formproduk = false;
      state.formsimpanan = false;
    },
    showForm(state, form) {
      state.body = {};
      switch (form) {
        case "akad":
          state.formakad = true;
          state.formdeposito = false;
          state.formjenistransaksi = false;
          state.formpembiayaan = false;
          state.formproduk = false;
          state.formsimpanan = false;
          break;
        case "jenistransaksi":
          state.formakad = false;
          state.formdeposito = false;
          state.formjenistransaksi = true;
          state.formpembiayaan = false;
          state.formproduk = false;
          state.formsimpanan = false;
          break;
        case "produk":
          state.formakad = false;
          state.formdeposito = false;
          state.formjenistransaksi = false;
          state.formpembiayaan = false;
          state.formproduk = true;
          state.formsimpanan = false;
          break;
        case "deposito":
          state.formakad = false;
          state.formdeposito = true;
          state.formjenistransaksi = false;
          state.formpembiayaan = false;
          state.formproduk = false;
          state.formsimpanan = false;
          break;
        case "pembiayaan":
          state.formakad = false;
          state.formdeposito = false;
          state.formjenistransaksi = false;
          state.formpembiayaan = true;
          state.formproduk = false;
          state.formsimpanan = false;
          break;
        case "simpanan":
          state.formakad = false;
          state.formdeposito = false;
          state.formjenistransaksi = false;
          state.formpembiayaan = false;
          state.formproduk = false;
          state.formsimpanan = true;
          break;
      }
    }
  },
  actions: {
    setLang({ commit }, payload) {
      commit("changeLang", payload);
    }
  },
  modules: {
    layout,
    auth,
    master,
    menu
  }
});

export * from "./modules/layout";
export * from "./modules/auth";
export * from "./modules/master";
export * from "./modules/menu";
