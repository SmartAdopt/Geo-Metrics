import { RouterProvider } from '@tanstack/react-router';
import { appRouter } from './routes/appRouter';
import { FavoritesProvider } from './store/globalStore';
import './App.css';

/**
 * Root Application Component.
 * Initializes global context providers and the router.
 */
function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={appRouter} />
    </FavoritesProvider>
  );
}

export default App;

