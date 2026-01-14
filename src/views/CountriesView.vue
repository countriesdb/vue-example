<template>
  <div class="page">
    <h1>Countries Widget Test</h1>

    <div class="content">
      <h2>Select a Country</h2>
      <p>
        Navigate to Subdivisions page to test widget reload between routes.
      </p>
      
      <select
        class="country-selection"
        data-name="country1"
      />
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
    (window as any).CountriesWidgetLoad({ reload: true })
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

p {
  color: #4b5563;
  margin-bottom: 1rem;
  line-height: 1.6;
}

select {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
}
</style>
