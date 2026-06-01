# Geo-Metrics - Country Explorer Application

A modern React application for exploring countries information and applying for visas.

## 📋 Features

- **Countries Explorer**: Browse countries with real-time search and region filtering
- **Country Details**: View comprehensive information about each country including borders
- **Visa Application**: Submit visa applications with form validation
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Performance Optimized**: Uses React Hook Form for instant search performance

## 🛠️ Tech Stack

- **React 19.2.6**: Modern React with hooks
- **React Router 7.0.2**: Client-side routing
- **React Hook Form 7.53.0**: Efficient form management with instant validation
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript

## 📁 Project Structure

```
src/
├── assets/                  # Static files (logos, images)
│
├── components/              # Reusable components
│   ├── ui/                  # UI components (Button, Input, Spinner)
│   └── layout/              # Layout components (Header, Footer)
│
├── config/                  # Global configuration
│
├── features/                # Feature modules
│   ├── countries-explorer/  # Browse and search countries
│   │   ├── components/      # Country cards, filters
│   │   ├── hooks/           # useCountries hook
│   │   ├── services/        # API calls for countries
│   │   └── types/           # Feature types
│   │
│   ├── country-detail/      # Country detail view
│   │   ├── components/      # Border countries, info widget
│   │   ├── hooks/           # useCountryDetail hook
│   │   ├── services/        # API calls for country details
│   │   └── types/           # Feature types
│   │
│   └── visa-application/    # Visa form
│       ├── components/      # Visa form component
│       ├── hooks/           # useVisaSubmit hook
│       └── types/           # Form types
│
├── pages/                   # Page components
│   ├── CountriesPage.tsx
│   ├── CountryDetailPage.tsx
│   └── VisaApplicationPage.tsx
│
├── routes/                  # Routing configuration
│   └── appRouter.tsx        # Main router setup
│
├── types/                   # Global TypeScript types
│   └── country.types.ts
│
├── App.tsx                  # Root component
├── index.css                # Global styles with Tailwind
└── main.tsx                 # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages

### 1. Countries Explorer (`/countries`)
- **Description**: Browse and search countries from around the world
- **Features**:
  - Real-time search with React Hook Form (optimized for performance)
  - Filter by continent (Africa, Americas, Asia, Europe, Oceania)
  - Grid display of country cards
  - Click on any country to view details

### 2. Country Detail (`/country/:code`)
- **Description**: Comprehensive information about a specific country
- **Features**:
  - Large country flag display
  - Population, capital, and languages
  - Border countries with navigation
  - Additional information (area, timezones, independent status)

### 3. Visa Application (`/visa-application`)
- **Description**: Apply for a visa with a validated form
- **Features**:
  - Full form validation with React Hook Form
  - Real-time error feedback
  - Purpose selection dropdown
  - Terms acceptance checkbox
  - Loading state during submission

## 🎨 Design

- **Color Scheme**:
  - Primary: Blue (#0066cc)
  - Secondary: Green (#00a86b)
  
- **Responsive Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## 📊 Performance Optimizations

1. **React Hook Form**: Minimizes re-renders during form interaction
2. **Memoized Callbacks**: Filter operations use `useCallback` to prevent unnecessary re-renders
3. **Lazy Loading**: Components imported only when needed via React Router
4. **Image Optimization**: Flags loaded from REST Countries API

## 🔌 API

The application uses the free **REST Countries API**:
- Base URL: `https://restcountries.com/v3.1`
- No authentication required
- Endpoints used:
  - `/all` - Get all countries
  - `/region/{name}` - Get countries by region
  - `/name/{name}` - Search countries by name
  - `/alpha/{code}` - Get specific country by code

## 📝 Code Standards

- All components are fully commented in English
- TypeScript strict mode for type safety
- Consistent naming conventions (PascalCase for components, camelCase for functions)
- Separation of concerns (components, hooks, services, types)

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Module Not Found Error
Ensure all dependencies are installed:
```bash
npm install
```

### API Errors
Check your internet connection. The application requires access to the REST Countries API.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues or questions, please open an issue in the repository.

---

**Happy exploring!** 🌍
