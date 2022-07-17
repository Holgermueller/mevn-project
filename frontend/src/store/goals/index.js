export default {
  state: {
    state: {
      goals: [],
    },
  },

  mutations: {
    SET_GOALS() {},

    ADD_GOAL() {},

    DELETE_GOAL() {},
  },

  actions: {
    getGoals() {},

    addGoal() {},

    deleteGoal() {},
  },

  getters: {
    goals(state) {
      return state.goals;
    },
  },
};
