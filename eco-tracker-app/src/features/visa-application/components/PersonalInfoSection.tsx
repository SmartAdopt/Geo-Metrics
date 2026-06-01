import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import type { FormikErrors, FormikTouched } from 'formik';
import FormSectionContainer from './FormSectionContainer';
import type { VisaApplicationFormData } from '@/features/visa-application/schemas/visaValidationSchema';

interface PersonalInfoSectionProps {
  values: VisaApplicationFormData;
  errors: FormikErrors<VisaApplicationFormData>;
  touched: FormikTouched<VisaApplicationFormData>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PersonalInfoSection = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}: PersonalInfoSectionProps) => {
  return (
    <FormSectionContainer title="Información Personal" description="Proporciona tu información personal">
      <Stack spacing={2}>
        <TextField
          fullWidth
          label="Nombre Completo"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.fullName && Boolean(errors.fullName)}
          helperText={touched.fullName && errors.fullName}
          placeholder="Juan Pérez García"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Correo Electrónico"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          placeholder="tu@correo.com"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Teléfono"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone && Boolean(errors.phone)}
          helperText={touched.phone && errors.phone || 'Formato: +XXXXXXXXXXXX'}
          placeholder="+34612345678"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Fecha de Nacimiento"
          name="dateOfBirth"
          type="date"
          value={values.dateOfBirth}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
          helperText={touched.dateOfBirth && errors.dateOfBirth}
          slotProps={{ inputLabel: { shrink: true } }}
          variant="outlined"
        />
      </Stack>
    </FormSectionContainer>
  );
};

export default PersonalInfoSection;
