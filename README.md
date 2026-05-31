# 🌍 Geo-Metrics

An analytical dashboard covering geography, demographics, and the global economy. It is highly visual and handles a robust volume of data with multiple related relationships (countries that share borders, languages, currencies).

## 🚀 Main Technologies

* **Frontend:** React 18, TypeScript, Vite
* **Styling:** Chakra UI v2
* **State Management:** Native Context API
* **HTTP Requests:** TanStack Query (React Query)
* **Forms and Validation:** React Hook Form + Zod
* **Testing:** Jest + React Testing Library

## 📁 Project Structure

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
```

## 📋 Prerequisites

Make sure you have the following installed on your computer:

- Node.js (version 18 or higher)
- Git

## 🛠️ Installation and Setup

Follow these steps to run the project in your local environment:

## Clone the repository:

```bash
git clone https://github.com/your-username/eco-tracker-app.git
cd eco-tracker-app
```

## Install the dependencies:

(This command reads the package.json file and automatically downloads all required libraries.)

```bash
npm install
```

## Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 🧪 Running Tests

To run the unit test suite (Jest), use the following command:

```bash
npm run test
```
