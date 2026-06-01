# 🌍 Geo-Metrics

An analytical dashboard covering geography, demographics, and the global economy. It is highly visual and handles a robust volume of data with multiple related relationships (countries that share borders, languages, currencies).

## 🚀 Main Technologies
- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Routing:** TanStack Router
- **State Management:** Native Context API
- **HTTP Requests:** Manual Axios (without caching libraries)
- **Forms and Validation:** Formik + Zod (Schema Validation)
- **Testing:** Cypress (Component Testing)

## 📁 Project Structure
```text
src/
├── assets/                 # (This came by default with Vite)
├── components/             # Generic, shared visual components
│   ├── layout/             # Page templates (e.g., Header, Footer)
│   └── ui/                 # Base components (Buttons, Inputs, Spinner) using Tailwind CSS
├── config/                 # Global configurations (e.g., Axios instance)
├── features/               # BUSINESS MODULES (Isolated and independent / Feature-Driven)
│   ├── countries-explorer/ # Module 1: Country search and grid
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/       # API requests to restcountries.com specific to this view
│   ├── country-detail/     # Module 2: Country detail sheet
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   └── visa-application/   # Module 3: Visa application form
│       ├── hooks/          # Custom hooks for form state management
│       └── schemas/        # Zod validation schemas
├── routes/                 # TanStack Router configuration and Type-Safety
├── store/                  # Context API replaces complex global states (FavoritesContext)
└── types/                  # TypeScript interfaces shared across the app
cypress/                    # Automated testing environment configuration
```

## 📋 Prerequisites
Make sure you have the following installed on your computer:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Git](https://git-scm.com/)

## 🛠️ Installation and Setup
Follow these steps to run the project in your local environment:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/eco-tracker-app.git
   cd eco-tracker-app
   ```

2. **Install the dependencies:**
   (This command reads the package.json file and automatically downloads all required libraries.)
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 🧪 Running Tests
To run the component testing suite (Cypress), use the following commands:

- To open the Cypress interactive UI:
  ```bash
  npm run cy:open
  ```
- To run tests in headless mode (terminal):
  ```bash
  npx cypress run --component
  ```
