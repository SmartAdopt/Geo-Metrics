import { Box, Heading, SimpleGrid, Spinner, Center, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useCountries } from './hooks/useCountries';
import { CountryCard } from './components/CountryCard';
import { FilterPanel, type FilterFormValues } from './components/FilterPanel';

export default function CountriesExplorer() {
  const { data: countries, isLoading, isError } = useCountries();

  // Initialize React Hook Form
  const { register, watch } = useForm<FilterFormValues>({
    defaultValues: {
      search: '',
      region: '',
    },
  });

  // 'watch' observes changes in real time
  const searchTerm = watch('search').toLowerCase();
  const regionTerm = watch('region');

  // Filter countries based on what the user selected or typed
  const filteredCountries = countries?.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm);
    const matchesRegion = regionTerm ? country.region === regionTerm : true;
    return matchesSearch && matchesRegion;
  });

  if (isLoading) {
    return (
      <Center h="50vh" flexDirection="column" gap={4}>
        <Spinner size="xl" color="blue.500" thickness="4px" />
        <Text>Cargando información del mundo...</Text>
      </Center>
    );
  }

  if (isError) {
    return (
      <Center h="50vh">
        <Text color="red.500" fontSize="xl">Hubo un error al cargar los países.</Text>
      </Center>
    );
  }

  return (
    <Box p={5} maxW="1200px" mx="auto">
      <Heading size="lg" mb={6} textAlign="center">
        Explorador Global de Países
      </Heading>
      
      {/* Pass the register function to our child component */}
      <FilterPanel register={register} />

      {/* Render the filtered array instead of the full array */}
      {filteredCountries?.length === 0 ? (
        <Center h="20vh">
          <Text fontSize="lg" color="gray.500">No se encontraron países con esos filtros.</Text>
        </Center>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {filteredCountries?.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}