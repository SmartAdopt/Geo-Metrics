import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VisaForm from '@/features/visa-application/components/VisaForm';

const VisaApplicationPage = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleFormSuccess = () => {
    setShowSuccess(true);
    setShowForm(false);
  };

  const handleNewApplication = () => {
    setShowSuccess(false);
    setShowForm(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <Box component="main" sx={{ flex: 1, py: 4 }}>
        <Container maxWidth="md">
          <Stack spacing={3}>
            {/* Page Title */}
            <Box>
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                Solicitud de Visa
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Completa este formulario para solicitar tu visa. Asegúrate de que toda la información sea correcta y precisa.
              </Typography>
            </Box>

            {/* Success Message */}
            {showSuccess && (
              <Alert severity="success" sx={{ py: 2 }}>
                <Typography variant="h6" gutterBottom>
                  ¡Solicitud Enviada Exitosamente!
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Tu solicitud de visa ha sido registrada. Recibirás un correo de confirmación en breve con los próximos pasos del proceso.
                </Typography>
                <Button 
                  variant="contained" 
                  color="success"
                  onClick={handleNewApplication}
                  sx={{ mt: 2 }}
                >
                  Enviar Otra Solicitud
                </Button>
              </Alert>
            )}

            {/* Form */}
            {showForm && (
              <Box>
                <VisaForm onSuccess={handleFormSuccess} />
              </Box>
            )}
          </Stack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default VisaApplicationPage;