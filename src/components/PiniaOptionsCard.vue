<template>
  <suspense>
    <template #default>
      <pinia-options-card-async />
    </template>
    <template #fallback>
      <suspense-card />
    </template>
  </suspense>
</template>

<script setup>
import PiniaOptionsCardAsync from "./PiniaOptionsCardAsync.vue";
import SuspenseCard from "./SuspenseCard.vue";
</script>
