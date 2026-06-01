/**
 * Country Detail Page
 * Displays comprehensive information about a selected country
 */

import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { Country } from '../models/country';
import { getCountryByCode, getCountriesByCodes } from '../services/getCountryDetail';

import BorderCountries from '../components/BorderCountries';
import CountryCardInformation from '../components/CountryCardInformation';

/**
 * CountryDetailPage Component - Detailed view of a specific country
 */
function CountryDetailPage() {
  const { code } = useParams<{ code: string }>();

  const {
    data: country,
    isLoading: isCountryLoading,
    error: countryError,
  } = useQuery({
    queryKey: ['country', code],
    queryFn: () => {
      if (!code) throw new Error('Invalid country code');
      return getCountryByCode(code);
    },
    enabled: Boolean(code),
  });

  const borderCodes = useMemo(() => {
    return country?.borders?.length ? country.borders : [];
  }, [country]);

  const {
    data: borderCountries = [],
    isLoading: isBordersLoading,
    error: bordersError,
  } = useQuery({
    queryKey: ['country-borders', borderCodes],
    queryFn: () => getCountriesByCodes(borderCodes),
    enabled: borderCodes.length > 0,
  });

  const isLoading = isCountryLoading || (country && borderCodes.length > 0 ? isBordersLoading : false);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="lg" message="Loading country details..." />
      </div>
    );
  }

  if (countryError || !country) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            <p className="font-bold">Error</p>
            <p>{countryError instanceof Error ? countryError.message : 'Country not found'}</p>
          </div>
        </div>
      </div>
    );
  }

  if (bordersError) {
    // Render country info even if borders fail
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <CountryCardInformation country={country as Country} />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <BorderCountries borderCountries={borderCountries} isLoading={false} />
        </div>
      </div>
    </div>
  );
}

export default CountryDetailPage;

