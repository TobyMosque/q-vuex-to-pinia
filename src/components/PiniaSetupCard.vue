<template>
  <suspense>
    <template #default>
      <pinia-setup-card-async />
    </template>
    <template #fallback>
      <suspense-card />
    </template>
  </suspense>
</template>

<script setup>
import PiniaSetupCardAsync from "./PiniaSetupCardAsync.vue";
import SuspenseCard from "./SuspenseCard.vue";
</script>
