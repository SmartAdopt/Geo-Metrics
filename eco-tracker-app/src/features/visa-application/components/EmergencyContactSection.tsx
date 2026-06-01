import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import type { FormikErrors, FormikTouched } from 'formik';
import FormSectionContainer from './FormSectionContainer';
import type { VisaApplicationFormData } from '@/features/visa-application/schemas/visaValidationSchema';

interface EmergencyContactSectionProps {
  values: VisaApplicationFormData;
  errors: FormikErrors<VisaApplicationFormData>;
  touched: FormikTouched<VisaApplicationFormData>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const RELATIONSHIPS = [
  { value: 'family', label: 'Familia' },
  { value: 'friend', label: 'Amigo' },
  { value: 'colleague', label: 'Colega' },
  { value: 'other', label: 'Otro' },
];

const EmergencyContactSection = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}: EmergencyContactSectionProps) => {
  return (
    <FormSectionContainer 
      title="Contacto de Emergencia" 
      description="Proporciona información de una persona que podamos contactar en caso de emergencia"
    >
      <Stack spacing={2}>
        <TextField
          fullWidth
          label="Nombre del Contacto"
          name="emergencyContactName"
          value={values.emergencyContactName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.emergencyContactName && Boolean(errors.emergencyContactName)}
          helperText={touched.emergencyContactName && errors.emergencyContactName}
          placeholder="María García López"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Teléfono de Contacto"
          name="emergencyContactPhone"
          value={values.emergencyContactPhone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.emergencyContactPhone && Boolean(errors.emergencyContactPhone)}
          helperText={touched.emergencyContactPhone && errors.emergencyContactPhone || 'Formato: +XXXXXXXXXXXX'}
          placeholder="+34612345678"
          variant="outlined"
        />

        <TextField
          fullWidth
          select
          label="Relación"
          name="emergencyContactRelationship"
          value={values.emergencyContactRelationship}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.emergencyContactRelationship && Boolean(errors.emergencyContactRelationship)}
          helperText={touched.emergencyContactRelationship && errors.emergencyContactRelationship}
          variant="outlined"
        >
          <MenuItem value="">Selecciona una relación</MenuItem>
          {RELATIONSHIPS.map((rel) => (
            <MenuItem key={rel.value} value={rel.value}>
              {rel.label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
    </FormSectionContainer>
  );
};

export default EmergencyContactSection;
