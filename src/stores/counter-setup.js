import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useCounterOptionsStore } from "./counter-options";
import { Notify } from "quasar";

export const useCounterSetupStore = defineStore("counter-setup", () => {
  const counter = ref(1);

  const counterOptionsStore = useCounterOptionsStore();

  const doubleCount = computed(() => counter.value * 2);
  const doubleCountPO = computed(() => counterOptionsStore.doubleCount);
  // we can't access the vuex store in a getter, so we'll use a action as a workaround
  // const doubleCountVx = computed(function () {
  //   const vuexStore = useStore();
  //   return vuexStore.getters["counter/doubleCount"];
  // });

  function increment() {
    this.counter++;
  }

  function incrementPO() {
    counterOptionsStore.increment();
  }

  async function incrementVx() {
    await this.store.dispatch("counter/increment");
  }

  function doubleCountVx() {
    return this.store.getters["counter/doubleCount"];
  }

  return {
    counter,
    doubleCount,
    doubleCountPO,
    doubleCountVx,
    increment,
    incrementPO,
    incrementVx,
  };
});
