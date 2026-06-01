/**
 * Country detail models
 */

import type { Country } from './country';

export type CountryDetailInfo = Country & {
  area?: number;
  timezones?: string[];
  independent?: boolean;
};

