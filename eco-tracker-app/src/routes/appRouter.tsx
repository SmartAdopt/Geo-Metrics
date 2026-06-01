import { 
  createRouter, 
  createRoute, 
  createRootRoute, 
  Outlet, 
  Navigate 
} from '@tanstack/react-router';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import CountriesExplorer from '../features/countries-explorer';
import CountryDetail from '../features/country-detail';
import VisaApplication from '../features/visa-application';

/**
 * Componente raíz del enrutador. 
 * Todos los demás componentes se renderizarán dentro de <Outlet />
 */
const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="p-4 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});


/**
 * Ruta de redirección: de '/' a '/countries'
 */
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Navigate to="/countries" />,
});



/**
 * Application router configuration using TanStack Router.
 */
const countriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/countries',
  component: CountriesExplorer,
});

/**
 * Route 2: Detail view (Uses dynamic parameter $code)
 */
const countryDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/country/$code',
  component: CountryDetail,
});

/**
 * Route 3: Visa Application
 */
const visaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/visa-application',
  component: VisaApplication,
});

// Assemble the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  countriesRoute, 
  countryDetailRoute, 
  visaRoute
]);

/**
 * Global router instance to be exported to App.tsx
 */
export const appRouter = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof appRouter;
  }
}
