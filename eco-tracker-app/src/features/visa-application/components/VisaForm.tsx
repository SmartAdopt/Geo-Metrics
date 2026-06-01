import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';
import PersonalInfoSection from './PersonalInfoSection';
import PassportInfoSection from './PassportInfoSection';
import VisaDetailsSection from './VisaDetailsSection';
import EmergencyContactSection from './EmergencyContactSection';
import FormSectionContainer from './FormSectionContainer';
import { validateWithZod, type VisaApplicationFormData } from '@/features/visa-application/schemas/visaValidationSchema';
import { useVisaSubmit } from '@/features/visa-application/hooks/useVisaSubmit';
import { rootStore } from '@/store/globalStore';

interface VisaFormProps {
  onSuccess?: () => void;
}

const VisaForm = observer(({ onSuccess }: VisaFormProps) => {
  const { submitForm, loading } = useVisaSubmit();

  // Fetch countries if not yet loaded (e.g. user navigates directly to /visa)
  useEffect(() => {
    if (rootStore.countries.length === 0) {
      rootStore.fetchCountries();
    }
  }, []);

  // Derived reactively from the MobX store — no local state needed
  const countries = rootStore.countries.map((c) => c.name.common).sort();

  const initialValues: VisaApplicationFormData = {
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    passportNumber: '',
    passportExpirationDate: '',
    nationality: '',
    destinationCountry: '',
    visaType: 'tourist',
    purposeOfVisit: '',
    expectedDuration: 7,
    startDate: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: 'family',
    previousVisaRejections: false,
    visaRejectionExplanation: '',
    healthConditions: [],
    agreeToTerms: false,
  };

  const formik = useFormik({
    initialValues,
    validate: validateWithZod,
    onSubmit: async (values) => {
      const result = await submitForm(values);
      if (result.success) {
        rootStore.addVisaApplication(values);
        if (onSuccess) {
          onSuccess();
        }
      }
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Personal Information Section */}
      <PersonalInfoSection
        values={formik.values}
        errors={formik.errors}
        touched={formik.touched}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
      />

      {/* Passport Information Section */}
      <PassportInfoSection
        values={formik.values}
        errors={formik.errors}
        touched={formik.touched}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        countries={countries}
      />

      {/* Visa Details Section */}
      <VisaDetailsSection
        values={formik.values}
        errors={formik.errors}
        touched={formik.touched}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        countries={countries}
      />

      {/* Emergency Contact Section */}
      <EmergencyContactSection
        values={formik.values}
        errors={formik.errors}
        touched={formik.touched}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
      />

      {/* Previous Visa Rejections Section */}
      <FormSectionContainer 
        title="Información Adicional" 
        description="Completa esta sección si corresponde"
      >
        <Stack spacing={2}>
          <FormControlLabel
            control={
              <Checkbox
                name="previousVisaRejections"
                checked={formik.values.previousVisaRejections}
                onChange={formik.handleChange}
              />
            }
            label="He tenido una solicitud de visa rechazada anteriormente"
          />

          {formik.values.previousVisaRejections && (
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Explicación del Rechazo"
              name="visaRejectionExplanation"
              value={formik.values.visaRejectionExplanation || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.visaRejectionExplanation && Boolean(formik.errors.visaRejectionExplanation)}
              helperText={formik.touched.visaRejectionExplanation && formik.errors.visaRejectionExplanation}
              placeholder="Explica las circunstancias del rechazo anterior..."
              variant="outlined"
            />
          )}
        </Stack>
      </FormSectionContainer>

      {/* Terms and Conditions Section */}
      <FormSectionContainer title="Términos y Condiciones">
        <Stack spacing={2}>
          <FormControlLabel
            control={
              <Checkbox
                name="agreeToTerms"
                checked={formik.values.agreeToTerms}
                onChange={formik.handleChange}
              />
            }
            label="Certifico que la información proporcionada es completa y precisa. Entiendo que proporcionar información falsa puede resultar en la denegación de la visa."
          />
          {formik.touched.agreeToTerms && formik.errors.agreeToTerms && (
            <Box sx={{ color: 'error.main', fontSize: '0.75rem' }}>
              {formik.errors.agreeToTerms}
            </Box>
          )}
        </Stack>
      </FormSectionContainer>

      {/* Submit Section */}
      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} /> : undefined}
          sx={{ flex: 1 }}
        >
          {loading ? 'Enviando...' : 'Enviar Solicitud'}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => formik.resetForm()}
          disabled={loading}
          sx={{ flex: 1 }}
        >
          Limpiar Formulario
        </Button>
      </Stack>
    </Box>
  );
});

export default VisaForm;