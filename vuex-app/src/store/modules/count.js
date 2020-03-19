const state = {
  count: 0
};

const getters = {
  count: state => {
    return state.count;
  }
};

const mutations = {
  incrementCount(state) {
    state.count++;
  },
  decrementCount(state, payload) {
    state.count -= payload.amout;
  }
};

const actions = {
  incrementCountAsync({ commit }) {
    setTimeout(() => {
      commit('incrementCount');
    }, 2000);
  },
  decrementCountAsync({ commit }, payload) {
    setTimeout(() => {
      commit('decrementCount', payload);
    }, 1000);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
