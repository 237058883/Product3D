import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      isFullscreen: false,
    };
  },
  getters: {},
  mutations: {
    setFullscreen(state, payload) {
      state.isFullscreen = payload;
    },
  },
  actions: {},
  modules: {},
});
