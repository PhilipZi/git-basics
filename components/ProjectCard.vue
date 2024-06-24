<template>
  <div class="border p-4 rounded shadow-md">
    <h2 class="text-2xl font-bold mb-2">{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
});
</script>

<style scoped></style>
