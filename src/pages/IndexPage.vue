<template>
  <q-page class="flex flex-center">
    <div class="row q-col-gutter-sm justify-center q-pa-sm">
      <div class="col col-auto store-card">
        <vuex-card></vuex-card>
      </div>
      <div class="col col-auto store-card">
        <pinia-options-card></pinia-options-card>
      </div>
      <div class="col col-auto store-card">
        <pinia-setup-card></pinia-setup-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import VuexCard from "src/components/VuexCard.vue";
import PiniaOptionsCard from "src/components/PiniaOptionsCard.vue";
import PiniaSetupCard from "src/components/PiniaSetupCard.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const vuexStore = useStore();
const vuexCounter = computed({
  get() {
    return vuexStore.state.counter.counter;
  },
  set(value) {
    vuexStore.commit("counter/setCounter", value);
  },
});
const vuexDouble = computed(() => vuexStore.getters["counter/doubleCount"]);
async function vuexIncrement() {
  await vuexStore.dispatch("counter/increment");
}
</script>

<style lang="scss">
.store-card {
  width: 480px;
  min-width: 480px;
}
</style>
