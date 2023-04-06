import { boot } from "quasar/wrappers";
import createStore from "src/stores/index";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (ctx) => {
  const { app, store } = ctx;
  const pinia = createStore(ctx);
  store.pinia = pinia;
  pinia.use(() => ({
    store,
  }));

  app.use(pinia);
});
