<template>
  <form class="space-y-4">
    <div>
      <label for="name" class="block">Name:</label>
      <input type="text" id="name" class="w-full p-2 border rounded" />
    </div>
    <div>
      <label for="email" class="block">Email:</label>
      <input type="email" id="email" class="w-full p-2 border rounded" />
    </div>
    <div>
      <label for="message" class="block">Nachricht:</label>
      <textarea id="message" class="w-full p-2 border rounded"></textarea>
    </div>
    <button type="submit" class="bg-gf_green text-white p-2 rounded">
      Senden
    </button>
  </form>
</template>

<script setup></script>

<style scoped></style>
