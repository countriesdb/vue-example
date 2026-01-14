<template>
  <main>
    <h1>CountriesDB Widget Test</h1>
    
    <div class="links">
      <RouterLink to="/countries" class="link-button countries">
        Countries
      </RouterLink>
      <RouterLink to="/subdivisions" class="link-button subdivisions">
        Subdivisions
      </RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
main {
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-heading);
}

.links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: 0 auto;
}

.link-button {
  display: block;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: opacity 0.2s;
}

.link-button.countries {
  background-color: #2563eb;
  color: white;
}

.link-button.countries:hover {
  opacity: 0.9;
}

.link-button.subdivisions {
  background-color: #16a34a;
  color: white;
}.link-button.subdivisions:hover {
  opacity: 0.9;
}
</style>
