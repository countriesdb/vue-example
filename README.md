# CountriesDB Widget Vue Example

Example Vue 3 app demonstrating CountriesDB widget integration with Vue Router. Shows how to use `reload: true` option when navigating between routes to ensure the widget properly re-scans the DOM for select elements.

## Overview

This example demonstrates:
- Using the CountriesDB widget with Vue 3 and Vue Router
- Handling widget reload when navigating between routes
- Setting up environment variables for the public key and backend URL
- Creating multiple routes with country and subdivision selects

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```bash
VITE_COUNTRIESDB_PUBLIC_KEY=YOUR_PUBLIC_KEY
VITE_COUNTRIESDB_BACKEND_URL=
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser to the URL shown in the terminal (usually `http://localhost:5173`)

## Routes

- **`/`** - Home page with navigation links
- **`/countries`** - Country select widget
- **`/subdivisions`** - Country and subdivision select widgets (linked)

Navigate between routes to test that the widget properly reloads on route changes.

## Key Code Pattern

```typescript
import { onMounted } from 'vue'

onMounted(() => {
  const publicKey = import.meta.env.VITE_COUNTRIESDB_PUBLIC_KEY
  const backendUrl = import.meta.env.VITE_COUNTRIESDB_BACKEND_URL

  ;(window as any).CountriesDBConfig = {
    publicKey,
    ...(backendUrl && { backendUrl }),
  }

  // Reload widget when navigating to this route
  if ((window as any).CountriesWidgetLoad) {
    ;(window as any).CountriesWidgetLoad({ reload: true })
  } else {
    import('@countriesdb/widget')
  }
})
```

The `reload: true` option is important for client-side routing frameworks like Vue Router, as it ensures the widget re-scans the DOM for select elements after route navigation.

## Documentation Links

- [CountriesDB Documentation](https://countriesdb.com/docs)
- [CountriesDB Widget](https://countriesdb.com/docs/widgets)
- [Vue Router Documentation](https://router.vuejs.org/)

---

This example is maintained by **[NAYEE LLC](https://nayee.net)** (the publisher of CountriesDB).
