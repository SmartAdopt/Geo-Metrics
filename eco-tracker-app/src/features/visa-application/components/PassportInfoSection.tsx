import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import type { FormikErrors, FormikTouched } from 'formik';
import FormSectionContainer from './FormSectionContainer';
import type { VisaApplicationFormData } from '@/features/visa-application/schemas/visaValidationSchema';

interface PassportInfoSectionProps {
  values: VisaApplicationFormData;
  errors: FormikErrors<VisaApplicationFormData>;
  touched: FormikTouched<VisaApplicationFormData>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  countries: string[];
}

const PassportInfoSection = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  countries,
}: PassportInfoSectionProps) => {
  return (
    <FormSectionContainer title="Información del Pasaporte" description="Datos de tu documento de viaje">
      <Stack spacing={2}>
        <TextField
          fullWidth
          label="Número de Pasaporte"
          name="passportNumber"
          value={values.passportNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.passportNumber && Boolean(errors.passportNumber)}
          helperText={touched.passportNumber && errors.passportNumber}
          placeholder="A12345678"
          variant="outlined"
          slotProps={{ htmlInput: { style: { textTransform: 'uppercase' } } }}
        />

        <TextField
          fullWidth
          label="Fecha de Expiración del Pasaporte"
          name="passportExpirationDate"
          type="date"
          value={values.passportExpirationDate}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.passportExpirationDate && Boolean(errors.passportExpirationDate)}
          helperText={touched.passportExpirationDate && errors.passportExpirationDate}
          slotProps={{ inputLabel: { shrink: true } }}
          variant="outlined"
        />

        <TextField
          fullWidth
          select
          label="Nacionalidad"
          name="nationality"
          value={values.nationality}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.nationality && Boolean(errors.nationality)}
          helperText={touched.nationality && errors.nationality}
          variant="outlined"
        >
          <MenuItem value="">Selecciona una nacionalidad</MenuItem>
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
    </FormSectionContainer>
  );
};

export default PassportInfoSection;
