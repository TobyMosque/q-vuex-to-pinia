import { boot } from "quasar/wrappers";
import { useCounterOptionsStore } from "src/stores/counter-options";
import { useCounterSetupStore } from "src/stores/counter-setup";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ store }) => {
  const pinia = store.pinia;
  const counterOptionsStore = useCounterOptionsStore(pinia);
  const counterSetupStore = useCounterSetupStore(pinia);

  store.commit("counter/setCounter", store.getters["counter/doubleCount"]);
  await store.dispatch("counter/increment");

  counterOptionsStore.counter = counterOptionsStore.doubleCount;
  counterOptionsStore.increment();

  counterSetupStore.counter = counterSetupStore.doubleCount;
  counterSetupStore.increment();

  // console.log(counterSetupStore.doubleCountVx);
});
