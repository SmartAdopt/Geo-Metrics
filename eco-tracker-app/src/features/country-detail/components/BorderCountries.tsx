import { Link } from '@tanstack/react-router';

interface Props {
  borders?: string[];
}

export function BorderCountries({ borders }: Props) {
  if (!borders || borders.length === 0) {
    return <span className="text-gray-500 italic">None</span>;
  }

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {borders.map((borderCode) => (
        <Link
          key={borderCode}
          to="/country/$code"
          params={{ code: borderCode }}
          className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
        >
          {borderCode}
        </Link>
      ))}
    </div>
  );
}
