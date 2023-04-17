<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { enabled } from "src/composables/prefetch";

if (process.env.CLIENT) {
  onMounted(() => (enabled.value = true));
}
</script>
