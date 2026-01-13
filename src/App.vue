<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/countries">Countries</RouterLink>
      <RouterLink to="/subdivisions">Subdivisions</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 1rem 2rem;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  font-weight: 600;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--color-text);
  transition: color 0.2s;
}

nav a:hover {
  color: var(--color-text);
  opacity: 0.8;
}
</style>
