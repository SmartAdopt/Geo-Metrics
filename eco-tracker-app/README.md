# Geo-Metrics App

Geo-Metrics is a premium, modern web application designed to explore detailed geographical information, metrics, and demographics of countries worldwide, as well as manage travel visa applications. 

Built using **React 19**, **TypeScript**, and **Vite**, the application leverages state-of-the-art libraries like **Material-UI (MUI)**, **MobX**, **Formik**, and **Zod** to deliver a performant, reliable, and visually stunning user experience.

---

## 🎯 Purpose of the Project

The primary purpose of **Geo-Metrics** is to serve as a comprehensive dashboard for global country information and travel preparation. By consuming the [REST Countries API](https://restcountries.com/), the application:
1. **Explores Global Data**: Enables users to search, filter, and discover geographical, political, and demographic data for all countries in real-time.
2. **Details Country Metrics**: Provides in-depth analysis of individual countries, including currencies, spoken languages, timezone configurations, active borders, and direct links to mapping services (Google Maps & OpenStreetMaps).
3. **Visa Application Processing**: Integrates a client-side visa request flow with strict schema-based form validation, ensuring user inputs meet strict guidelines before application logging.

---

## 🛠️ Tools & Technologies Used

### Core Framework & Build Tools
- **[React 19](https://react.dev/)**: The core UI library utilizing the latest concurrent features.
- **[TypeScript 6](https://www.typescriptlang.org/)**: Ensures strict type-safety across components, features, and stores.
- **[Vite 8](https://vite.dev/)**: The next-generation frontend build tool providing fast Hot Module Replacement (HMR) and optimized bundling.
- **[React Router DOM v7](https://reactrouter.com/)**: Enables declarative routing and view transitions.

### State Management
- **[MobX 6](https://mobx.js.org/) & [MobX React Lite 9](https://github.com/mobxjs/mobx/tree/main/packages/mobx-react-lite)**: Reactive state management using observable stores to seamlessly coordinate API responses, query logic, and user applications.

### User Interface (UI) & Styling
- **[Material-UI (MUI) v9](https://mui.com/)**: Comprehensive component library following Material Design standards.
- **[Emotion](https://emotion.sh/)**: CSS-in-JS style engine driving component layout, styling, and grid distribution.
- **[@fontsource/roboto](https://fontsource.org/fonts/roboto)**: Premium typography default styling.
- **[MUI Icons Material](https://mui.com/material-ui/material-icons/)**: Modern icon set for intuitive navigation.

### Form Handling & Validation
- **[Formik](https://formik.org/)**: Manages form state, submissions, and field values.
- **[Zod](https://zod.dev/)**: Strong schema declaration and validation library to validate visa forms (handling age limits, international phone patterns, expiration ranges, etc.).
- **[Zod Formik Adapter](https://github.com/robertmendes/zod-formik-adapter)**: Adapts Zod schemas seamlessly for Formik validations.

### HTTP Client & Tools
- **[Axios](https://axios-http.com/)**: Handles async promises and configured API requests to the REST Countries endpoint.
- **[ESLint 10](https://eslint.org/)**: For static code analysis, code formatting, and code quality control.
- **[Cypress 15](https://www.cypress.io/)**: For End-to-End (E2E) integration testing.

---

## 🚀 How to Run the Project

Follow these steps to set up and launch the development environment locally:

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system. You can verify your setup by running:
```bash
node -v
npm -v
```

### 2. Installation
Clone the repository and navigate into the project directory. Install all package dependencies:
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory (or use the existing `.env`) and define the REST Countries base API endpoint:
```env
VITE_API_BASE_URL=https://restcountries.com/v3.1/
```

### 4. Running the Development Server
Launch the Vite development server on the pre-configured local port:
```bash
npm run dev
```
Once started, open your browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📦 Build & Deployment

### Build for Production
To generate a compiled, optimized, and minified production bundle under the `dist/` directory, run:
```bash
npm run build
```

### Preview the Build
To preview the production bundle locally before deploying:
```bash
npm run preview
```

---

## 🧪 Testing & Code Quality

### E2E Testing with Cypress
To launch the Cypress test runner for interactive E2E testing:
```bash
npx cypress open
```
Or to run tests headless in the CLI:
```bash
npx cypress run
```

### Linting
To check and format the codebase structure against the project's ESLint rules:
```bash
npm run lint
```
