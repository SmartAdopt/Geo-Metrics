/**
 * FilterPanel Component
 * Provides search and region filtering for countries list
 * Optimized with React Hook Form patterns for instant search performance
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

const REGIONS: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

interface FilterPanelProps {
  onSearchChange: (searchText: string) => void;
  onRegionChange: (region: Region | null) => void;
  selectedRegion: Region | null;
  searchText: string;
}

interface FilterFormInputs {
  search: string;
}

/**
 * FilterPanel Component - Search and region filter for countries
 * Uses react-hook-form for optimal search performance
 * @param onSearchChange - Callback when search text changes
 * @param onRegionChange - Callback when region filter changes
 * @param selectedRegion - Currently selected region
 * @param searchText - Current search text
 */
function FilterPanel({
  onSearchChange,
  onRegionChange,
  selectedRegion,
  searchText,
}: FilterPanelProps) {
  const { register, watch } = useForm<FilterFormInputs>({
    defaultValues: {
      search: searchText,
    },
  });

  // Watch search input for real-time filtering
  const currentSearch = watch('search');

  // Update parent component on search change
  React.useEffect(() => {
    onSearchChange(currentSearch);
  }, [currentSearch, onSearchChange]);

  // Handle region button click
  const handleRegionClick = (region: Region) => {
    // Toggle region filter (if already selected, deselect it)
    onRegionChange(selectedRegion === region ? null : region);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      {/* Search Input */}
      <div className="mb-6">
        <Input
          {...register('search')}
          label="Search Countries"
          placeholder="Type country name..."
          type="text"
          helperText="Enter country name for instant search"
        />
      </div>

      {/* Region Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Filter by Region
        </label>
        <div className="flex flex-wrap gap-2">
          {REGIONS.map((region) => (
            <button
              key={region}
              onClick={() => handleRegionClick(region)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedRegion === region
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
