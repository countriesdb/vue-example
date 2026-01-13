<template>
  <div class="container mx-auto p-8 max-w-4xl">
    <h1 class="text-3xl font-bold mb-6">CountriesDB Widget Test</h1>
    
    <div class="space-y-4">
      <RouterLink to="/countries" class="block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center">
        Countries
      </RouterLink>
      <RouterLink to="/subdivisions" class="block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 text-center">
        Subdivisions
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
