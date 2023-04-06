import { defineStore } from "pinia";
import { useCounterSetupStore } from "./counter-setup";

export const useCounterOptionsStore = defineStore("counter-options", {
  state: () => ({
    counter: 1,
  }),
  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
    doubleCountPS() {
      const counterSetupStore = useCounterSetupStore();
      return counterSetupStore.doubleCount;
    },
    doubleCountVx() {
      return this.store.getters["counter/doubleCount"];
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
    incrementPS() {
      const counterSetupStore = useCounterSetupStore();
      counterSetupStore.increment();
    },
    async incrementVx() {
      await this.store.dispatch("counter/increment");
    },
  },
});
