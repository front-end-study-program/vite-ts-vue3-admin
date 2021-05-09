import { createStore } from 'vuex';

interface IState {
  count: number;
}

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: IState) {
      state.count++;
    },
  },
});

export default store;
