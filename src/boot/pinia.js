import { boot } from "quasar/wrappers";
import createStore from "src/stores/index";
import { unref } from "vue";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (ctx) => {
  const { ssrContext } = ctx;
  const { app, store } = ctx;
  const pinia = createStore(ctx);
  store.pinia = pinia;
  pinia.use(() => ({
    store,
  }));

  app.use(pinia);

  if (process.env.MODE === "ssr") {
    if (process.env.SERVER) {
      ssrContext.onRendered(function () {
        const state = unref(pinia.state);
        this.__pinia = JSON.stringify(JSON.stringify(state));
      });
    }
    if (process.env.CLIENT) {
      const script = document.getElementById("pinia-state");
      if (script) {
        pinia.state.value = JSON.parse(window.__PINIA_STATE__);
        delete window.__PINIA_STATE__;
        script.remove();
      }
    }
  }
});
