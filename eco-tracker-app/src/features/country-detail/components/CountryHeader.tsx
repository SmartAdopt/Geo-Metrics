import type { CountryDetail } from '../../../types/country.types';

interface Props {
  country: CountryDetail;
}

export function CountryHeader({ country }: Props) {
  return (
    <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-t-xl">
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white mb-2">{country.name.common}</h1>
          <p className="text-xl text-gray-200">{country.name.official}</p>
        </div>
      </div>
    </div>
  );
}
