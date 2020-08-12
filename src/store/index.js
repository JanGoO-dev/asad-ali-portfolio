import { createStore } from "vuex";

export default createStore({
  state: {
    navLinksShow: false,
  },
  getters: {
    GET_navLinksShow: (state) => state.navLinksShow,
  },
  mutations: {
    toggle(state) {
      console.log(state.navLinksShow);
      state.navLinksShow = !state.navLinksShow;
      console.log(state.navLinksShow);
    },
  },
  actions: {},
  modules: {},
});
