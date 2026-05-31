# Geo-Metrics

An analytical dashboard covering geography, demographics, and the global economy. It is highly visual and handles a robust volume of data with multiple related relationships (countries that share borders, languages, currencies).

## 📁 Structure of the Project

```text
src/
├── assets/                 # (This came by default with Vite)
├── components/             # Generic, shared visual components
│   ├── layout/             # Page templates (e.g., Header, Footer, Main Layout)
│   └── ui/                 # Base components (Buttons, Inputs) using Chakra UI
├── config/                 # Global configurations (e.g., Axios/Fetch instance)
├── context/                # Replacement for Zustand/MobX (FavoritesContext goes here)
├── features/               # BUSINESS MODULES (Isolated and independent)
│   ├── countries-explorer/ # Module 1: Country search and grid
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/       # Requests to restcountries.com specific to this view
│   │   └── types/
│   ├── country-detail/     # Module 2: Country detail sheet
│   │   ├── components/
│   │   └── hooks/
│   └── visa-application/   # Module 3: Visa application form
│       ├── components/
│       ├── hooks/
│       └── schemas/        # Zod validations specific to the form
├── routes/                 # React Router v6+ configuration
├── store/                  # (Optional) Context API replaces complex global states
└── types/                  # TypeScript interfaces shared across the app
