import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

interface FormSectionContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const FormSectionContainer = ({ title, description, children }: FormSectionContainerProps) => {
  return (
    <Paper elevation={0} sx={{ p: 3, backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 2 }}>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          )}
        </Box>
        <Stack spacing={2}>
          {children}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default FormSectionContainer;
