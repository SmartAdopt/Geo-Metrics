import { createMemoryHistory, createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import { CountryCard } from './CountryCard';
import { FavoritesProvider } from '../../../store/globalStore';

// Mock data to isolate the test from real API calls
const mockCountry = {
  cca3: 'MEX',
  name: { common: 'Mexico', official: 'United Mexican States' },
  flags: { svg: 'https://flagcdn.com/mx.svg', png: 'https://flagcdn.com/w320/mx.png' },
  region: 'Americas',
  population: 128932753,
};

// Mock Router configuration to prevent TanStack Router 
// from throwing errors due to missing <Link> context
const rootRoute = createRootRoute({
  component: () => (
    <div className="p-8 w-[400px]">
      <CountryCard country={mockCountry} />
    </div>
  ),
});

const countryDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/country/$code',
});

const routeTree = rootRoute.addChildren([countryDetailRoute]);
const memoryHistory = createMemoryHistory();
const router = createRouter({ routeTree, history: memoryHistory });

describe('CountryCard Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test to ensure a clean state
    localStorage.removeItem('geo_metrics_favorites');

    cy.mount(
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    );
  });

  it('renders country information correctly', () => {
    // Verify name is displayed
    cy.contains('Mexico').should('be.visible');
    
    // Verify population and region are displayed and formatted
    cy.contains('Americas').should('be.visible');
    // Use toLocaleString() to match the browser's native formatting
    cy.contains(mockCountry.population.toLocaleString()).should('be.visible');

    // Verify flag image is loaded
    cy.get('img')
      .should('have.attr', 'src', 'https://flagcdn.com/mx.svg')
      .should('have.attr', 'alt', 'Flag of Mexico');
  });

  it('toggles favorite status', () => {
    // Initially it should not be marked as favorite
    cy.get('button').contains('☆ Mark Favorite').should('be.visible');

    // Click the favorite button
    cy.get('button').click();

    // Verify it is now marked as favorite (solid star)
    cy.get('button').contains('★ Saved Favorite').should('be.visible');

    // Click again to unmark it
    cy.get('button').click();

    // Verify it returned to the normal state
    cy.get('button').contains('☆ Mark Favorite').should('be.visible');
  });
});
