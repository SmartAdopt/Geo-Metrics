# Geo-Metrics — eco-tracker-app

Aplicación React (Vite + TypeScript) para explorar países y completar una solicitud de visa.

## Características

- **Countries Explorer**: búsqueda en tiempo real + filtro por región.
- **Country Detail**: información detallada y países fronterizos.
- **Visa Application**: formulario con validación en tiempo real (React Hook Form).
- **TanStack Query**: proveedor global para consultas/caché.
- **UI responsive** con Tailwind CSS.

## Stack

- React
- React Router
- TypeScript
- Tailwind CSS
- React Hook Form
- TanStack Query

## Estructura del proyecto

```txt
src/
├─ assets/
│  └─ react.svg
├─ components/
│  ├─ BorderCountries.tsx
│  ├─ Button.tsx
│  ├─ CountryCard.tsx
│  ├─ CountryCardInformation.tsx
│  ├─ FilterPanel.tsx
│  ├─ Footer.tsx
│  ├─ Header.tsx
│  ├─ Input.tsx
│  ├─ Spinner.tsx
│  ├─ VisaForm.tsx
│  └─ WeatherWidget.tsx
├─ models/
│  ├─ country.ts
│  ├─ countryDetail.ts
│  └─ visaForm.ts
├─ pages/
│  ├─ CountriesPage.tsx
│  ├─ CountryDetailPage.tsx
│  └─ VisaApplicationPage.tsx
├─ services/
│  ├─ getCountries.ts
│  └─ getCountryDetail.ts
├─ App.tsx
├─ index.css
└─ main.tsx
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build (producción)

```bash
npm run build
```

## Preview (producción)

```bash
npm run preview
```

## Rutas (Pages)

- **`/countries`** → `src/pages/CountriesPage.tsx`
  - Búsqueda + filtro por región.

- **`/country/:code`** → `src/pages/CountryDetailPage.tsx`
  - Detalle del país + fronterizos.

- **`/visa-application`** → `src/pages/VisaApplicationPage.tsx`
  - Formulario de visa (`src/components/VisaForm.tsx`).

## Nota sobre API

La app consume la **REST Countries API** (`https://restcountries.com/v3.1`) para obtener información.

- `src/services/getCountries.ts` → listado (y/o por región)
- `src/services/getCountryDetail.ts` → detalle por código + fronterizos

## TanStack Query

- `src/main.tsx` usa `QueryClientProvider` para el cliente global.
- `src/query/queryClient.ts` define defaults (staleTime, retry, etc.).
- `CountriesPage` carga el listado con `useQuery`.
- `CountryDetailPage` carga país y fronteras con `useQuery`.

## Verificación rápida (demo)

1) Levanta el servidor: `npm run dev`
2) Abre:
   - `http://localhost:5173/countries`
   - `http://localhost:5173/country/<code>`
3) En DevTools → Network, observa que se consulten endpoints de `https://restcountries.com/v3.1`.


