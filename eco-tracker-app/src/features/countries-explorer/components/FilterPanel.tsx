import { Formik, Form } from 'formik';

export interface FilterValues {
  search: string;
  region: string;
}

interface FilterPanelProps {
  onFilterChange: (values: FilterValues) => void;
}

/**
 * Filter panel for searching and categorizing countries.
 */
export function FilterPanel({ onFilterChange }: FilterPanelProps) {
  const initialValues: FilterValues = { search: '', region: '' };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        validate={(values) => {
          // Un pequeño truco para capturar los cambios en tiempo real en Formik
          onFilterChange(values);
          return {};
        }}
      >
        {({ values, handleChange }) => (
          <Form className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">Buscar País</label>
              <input
                id="search"
                name="search"
                type="text"
                placeholder="Buscar por nombre..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={values.search}
                onChange={handleChange}
              />
            </div>
            
            <div className="sm:w-48">
              <label htmlFor="region" className="sr-only">Filtrar por Región</label>
              <select
                id="region"
                name="region"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                value={values.region}
                onChange={handleChange}
              >
                <option value="">Todas las regiones</option>
                <option value="Africa">África</option>
                <option value="Americas">América</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceanía</option>
              </select>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
