export default {
  state: {
    state: {
      user: null,
    },
  },

  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
  },

  actions: {
    registerUser() {},

    loginUser() {},

    logout() {},
  },

  getters: {
    user(state) {
      return state.user;
    },
  },
};
