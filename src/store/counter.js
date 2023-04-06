import { useCounterOptionsStore } from "src/stores/counter-options";
import { useCounterSetupStore } from "src/stores/counter-setup";

export default function (store) {
  return {
    namespaced: true,
    state() {
      return {
        counter: 1,
      };
    },
    mutations: {
      setCounter(state, value) {
        state.counter = value;
      },
    },
    getters: {
      doubleCount(state) {
        return state.counter * 2;
      },
      doubleCountPO(...args) {
        const counterOptionsStore = useCounterOptionsStore(store.pinia);
        return counterOptionsStore.doubleCount;
      },
      doubleCountPS() {
        const counterSetupStore = useCounterSetupStore(store.pinia);
        return counterSetupStore.doubleCount;
      },
    },
    actions: {
      increment({ commit, state }) {
        commit("setCounter", state.counter + 1);
      },
      incrementPO(ctx) {
        const counterOptionsStore = useCounterOptionsStore(this.pinia);
        counterOptionsStore.increment();
      },
      incrementPS(ctx) {
        const counterSetupStore = useCounterSetupStore(this.pinia);
        counterSetupStore.increment();
      },
    },
  };
}
