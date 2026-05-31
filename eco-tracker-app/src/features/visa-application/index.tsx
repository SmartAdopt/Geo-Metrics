import { Box, Heading, FormControl, FormLabel, Input, Button, Checkbox, Select, FormErrorMessage, VStack, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { visaValidationSchema, type VisaFormData } from './schemas/visaValidationSchema';
import { useNavigate } from 'react-router-dom';

export default function VisaApplication() {
  const toast = useToast();
  const navigate = useNavigate();

  // Connect React Hook Form with Zod
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<VisaFormData>({
    resolver: zodResolver(visaValidationSchema),
    defaultValues: {
      requiresPassport: false,
    }
  });

  // Observe whether the checkbox is checked to visually disable or enable the input
  const requiresPassport = watch('requiresPassport');

  const onSubmit = (data: VisaFormData) => {
    // Simulate sending the data to a backend server
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Datos enviados al servidor:", data);
        toast({
          title: "Solicitud enviada.",
          description: "Tu aplicación de visado ha sido registrada exitosamente.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        resolve(true);
        navigate('/countries'); // Return to the start after submitting
      }, 1500);
    });
  };

  return (
    <Box maxW="600px" mx="auto" p={5}>
      <Heading size="lg" mb={6} textAlign="center">
        Solicitud de Visado Internacional
      </Heading>

      <Box bg="white" p={8} borderRadius="lg" boxShadow="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={5}>
            
            <FormControl isInvalid={!!errors.fullName}>
              <FormLabel>Nombre Completo</FormLabel>
              <Input placeholder="Ej. Juan Pérez" {...register('fullName')} />
              <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.originCountry}>
              <FormLabel>País de Origen (Código)</FormLabel>
              <Input placeholder="Ej. ECU" {...register('originCountry')} />
              <FormErrorMessage>{errors.originCountry?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.destinationCountry}>
              <FormLabel>País de Destino (Código)</FormLabel>
              <Input placeholder="Ej. USA" {...register('destinationCountry')} />
              <FormErrorMessage>{errors.destinationCountry?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.budget}>
              <FormLabel>Presupuesto Estimado (USD)</FormLabel>
              <Input type="number" placeholder="500" {...register('budget', { valueAsNumber: true })} />
              <FormErrorMessage>{errors.budget?.message}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <Checkbox colorScheme="blue" {...register('requiresPassport')}>
                ¿El país de destino exige pasaporte obligatorio?
              </Checkbox>
            </FormControl>

            <FormControl isInvalid={!!errors.passportNumber}>
              <FormLabel color={requiresPassport ? "black" : "gray.400"}>
                Número de Pasaporte {requiresPassport && '*'}
              </FormLabel>
              <Input 
                placeholder="AB123456" 
                {...register('passportNumber')} 
                isDisabled={!requiresPassport} 
              />
              <FormErrorMessage>{errors.passportNumber?.message}</FormErrorMessage>
            </FormControl>

            <Button 
              type="submit" 
              colorScheme="blue" 
              size="lg" 
              w="100%" 
              mt={4} 
              isLoading={isSubmitting}
            >
              Enviar Solicitud
            </Button>
            
          </VStack>
        </form>
      </Box>
    </Box>
  );
}