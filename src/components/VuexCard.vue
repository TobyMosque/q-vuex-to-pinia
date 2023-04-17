<template>
  <suspense>
    <template #default>
      <vuex-card-async />
    </template>
    <template #fallback>
      <suspense-card />
    </template>
  </suspense>
</template>

<script setup>
import VuexCardAsync from "./VuexCardAsync.vue";
import SuspenseCard from "./SuspenseCard.vue";
</script>
