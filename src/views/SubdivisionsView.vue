<template>
  <div class="page">
    <h1>Subdivisions Widget Test</h1>

    <div class="content">
      <h2>Select a Country and Subdivision</h2>
      
      <div class="select-group">
        <select
          class="country-selection"
          data-name="country2"
        />
      </div>

      <div class="select-group">
        <select
          class="subdivision-selection"
          data-country="country2"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const publicKey = import.meta.env.VITE_COUNTRIESDB_PUBLIC_KEY

  ;(window as any).CountriesDBConfig = {
    publicKey,
  }

  // Reload widget when navigating to this route
  if ((window as any).CountriesWidgetLoad) {
    ;(window as any).CountriesWidgetLoad({ reload: true })
  } else {
    import('@countriesdb/widget')
  }
})
</script>

<style scoped>
.page {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}

.content {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #111827;
}

.select-group {
  margin-bottom: 1rem;
}

select {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
}
</style>
