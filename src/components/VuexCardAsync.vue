<template>
  <q-card>
    <q-card-section class="text-center text-h6 text-bold">
      Vuex
    </q-card-section>
    <q-card-section>
      <q-input filled v-model="counter" label="Counter"> </q-input>
    </q-card-section>
    <q-separator></q-separator>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-center">Source</th>
          <th class="text-center">Value (State)</th>
          <th class="text-center">Double (Getter)</th>
          <th class="text-center">Increment (Action)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center text-bold">Vuex</td>
          <td class="text-center">{{ counter }}</td>
          <td class="text-center">{{ double }}</td>
          <td class="text-center">
            <q-btn label="Increment" dense color="primary" @click="increment">
            </q-btn>
          </td>
        </tr>
        <tr>
          <td class="text-center text-bold">Pinia Options</td>
          <td class="text-center">{{ counterPO }}</td>
          <td class="text-center">{{ doublePO }}</td>
          <td class="text-center">
            <q-btn label="Increment" dense color="primary" @click="incrementPO">
            </q-btn>
          </td>
        </tr>
        <tr>
          <td class="text-center text-bold">Pinia Setup</td>
          <td class="text-center">{{ counterPS }}</td>
          <td class="text-center">{{ doublePS }}</td>
          <td class="text-center">
            <q-btn label="Increment" dense color="primary" @click="incrementPS">
            </q-btn>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-card>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useCounterOptionsStore } from "src/stores/counter-options";
import { storeToRefs } from "pinia";
import { useCounterSetupStore } from "src/stores/counter-setup";
import { usePreFetch } from "src/composables/prefetch";
import { delay } from "src/composables/utils";

const store = useStore();
const counterStoreOptions = useCounterOptionsStore();
const counterStoreSetup = useCounterSetupStore();

const counter = computed({
  get() {
    return store.state.counter.counter;
  },
  set(value) {
    store.commit("counter/setCounter", value);
  },
});
const { counter: counterPO } = storeToRefs(counterStoreOptions);
const { counter: counterPS } = storeToRefs(counterStoreSetup);

const double = computed(() => store.getters["counter/doubleCount"]);
const doublePO = computed(() => store.getters["counter/doubleCountPO"]);
const doublePS = computed(() => store.getters["counter/doubleCountPS"]);

async function increment() {
  await store.dispatch("counter/increment");
}

async function incrementPO() {
  await store.dispatch("counter/incrementPO");
}
async function incrementPS() {
  await store.dispatch("counter/incrementPS");
}

console.log("hello vuex");
await usePreFetch(async () => {
  await delay(2000);
  console.log("vuex:", process.env.SERVER ? "server" : "client");
});
</script>
