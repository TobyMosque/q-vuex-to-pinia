<template>
  <q-card>
    <q-card-section class="text-center text-h6 text-bold">
      Pinia Options
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
          <td class="text-center text-bold">Pinia Options</td>
          <td class="text-center">{{ counter }}</td>
          <td class="text-center">{{ double }}</td>
          <td class="text-center">
            <q-btn label="Increment" dense color="primary" @click="increment">
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
        <tr>
          <td class="text-center text-bold">Vuex</td>
          <td class="text-center">{{ counterVx }}</td>
          <td class="text-center">{{ doubleVx }}</td>
          <td class="text-center">
            <q-btn label="Increment" dense color="primary" @click="incrementVx">
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
import { storeToRefs } from "pinia";
import { useCounterOptionsStore } from "src/stores/counter-options";
import { useCounterSetupStore } from "src/stores/counter-setup";
import { usePreFetch } from "src/composables/prefetch";
import { delay } from "src/composables/utils";

const counterStore = useCounterOptionsStore();
const counterStoreSetup = useCounterSetupStore();
const vuexStore = useStore();

const { counter } = storeToRefs(counterStore);
const { counter: counterPS } = storeToRefs(counterStoreSetup);
const counterVx = computed(() => vuexStore.state.counter.counter);

const double = computed(() => counterStore.doubleCount);
const doublePS = computed(() => counterStore.doubleCountPS);
const doubleVx = computed(() => counterStore.doubleCountVx);

const { increment, incrementPS, incrementVx } = counterStore;

await usePreFetch(async () => {
  await delay(1000);
  console.log("pinia options:", process.env.SERVER ? "server" : "client");
});
</script>
