import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { FormikErrors, FormikTouched } from 'formik';
import FormSectionContainer from './FormSectionContainer';
import type { VisaApplicationFormData } from '@/features/visa-application/schemas/visaValidationSchema';

interface VisaDetailsSectionProps {
  values: VisaApplicationFormData;
  errors: FormikErrors<VisaApplicationFormData>;
  touched: FormikTouched<VisaApplicationFormData>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  countries: string[];
}

const VISA_TYPES = [
  { value: 'tourist', label: 'Turista' },
  { value: 'business', label: 'Negocios' },
  { value: 'student', label: 'Estudiante' },
  { value: 'work', label: 'Trabajo' },
  { value: 'family', label: 'Reunificación Familiar' },
];

const VisaDetailsSection = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  countries,
}: VisaDetailsSectionProps) => {
  return (
    <FormSectionContainer title="Detalles de la Visa" description="Información sobre tu solicitud de visa">
      <Stack spacing={2}>
        <TextField
          fullWidth
          select
          label="País de Destino"
          name="destinationCountry"
          value={values.destinationCountry}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.destinationCountry && Boolean(errors.destinationCountry)}
          helperText={touched.destinationCountry && errors.destinationCountry}
          variant="outlined"
        >
          <MenuItem value="">Selecciona un país</MenuItem>
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          select
          label="Tipo de Visa"
          name="visaType"
          value={values.visaType}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.visaType && Boolean(errors.visaType)}
          helperText={touched.visaType && errors.visaType}
          variant="outlined"
        >
          <MenuItem value="">Selecciona un tipo de visa</MenuItem>
          {VISA_TYPES.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Propósito de la Visita"
          name="purposeOfVisit"
          value={values.purposeOfVisit}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.purposeOfVisit && Boolean(errors.purposeOfVisit)}
          helperText={touched.purposeOfVisit && errors.purposeOfVisit}
          placeholder="Describe el propósito de tu visita..."
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Duración Esperada (días)"
          name="expectedDuration"
          type="number"
          value={values.expectedDuration}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.expectedDuration && Boolean(errors.expectedDuration)}
          helperText={touched.expectedDuration && errors.expectedDuration}
          slotProps={{ htmlInput: { min: 1, max: 730 } }}
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Fecha de Inicio del Viaje"
          name="startDate"
          type="date"
          value={values.startDate}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.startDate && Boolean(errors.startDate)}
          helperText={touched.startDate && errors.startDate}
          slotProps={{ inputLabel: { shrink: true } }}
          variant="outlined"
        />

        {values.expectedDuration && values.startDate && (
          <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>
            Fecha de retorno estimada: {new Date(new Date(values.startDate).getTime() + values.expectedDuration * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES')}
          </Typography>
        )}
      </Stack>
    </FormSectionContainer>
  );
};

export default VisaDetailsSection;
