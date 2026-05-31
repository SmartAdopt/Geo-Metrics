import { Box, Heading, Image, Text, Button, Flex, Spinner, Center, Badge, SimpleGrid } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCountryDetail } from './hooks/useCountryDetail';
import { useFavorites } from '../../context/FavoritesContext';

export default function CountryDetail() {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const { data: country, isLoading, isError } = useCountryDetail(code);

  if (isLoading) return <Center h="50vh"><Spinner size="xl" /></Center>;
  if (isError || !country) return <Center h="50vh"><Text color="red.500">País no encontrado</Text></Center>;

  const favorite = isFavorite(country.cca3);

  return (
    <Box maxW="800px" mx="auto" p={5}>
      <Button mb={6} onClick={() => navigate(-1)} colorScheme="gray" variant="outline">
        &larr; Volver
      </Button>

      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" bg="white">
        <Image 
          src={country.flags.svg} 
          alt={`Bandera de ${country.name.common}`} 
          w="100%" 
          h="300px" 
          objectFit="cover" 
        />
        
        <Box p={8}>
          <Flex justifyContent="space-between" alignItems="center" mb={6}>
            <Heading size="xl">{country.name.official}</Heading>
            <Button 
              colorScheme={favorite ? "yellow" : "gray"} 
              onClick={() => toggleFavorite(country.cca3)}
            >
              {favorite ? '⭐ Favorito' : '☆ Marcar'}
            </Button>
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={6}>
            <Text fontSize="lg"><b>Capital:</b> {country.capital?.[0] || 'N/A'}</Text>
            <Text fontSize="lg"><b>Región:</b> {country.region}</Text>
            <Text fontSize="lg"><b>Población:</b> {country.population.toLocaleString()}</Text>
            <Text fontSize="lg">
              <b>Idiomas:</b> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
            </Text>
          </SimpleGrid>

          <Box mt={6} pt={6} borderTopWidth="1px">
            <Heading size="md" mb={4}>Países Fronterizos (Códigos)</Heading>
            <Flex gap={2} flexWrap="wrap">
              {country.borders?.length ? (
                country.borders.map(borderCode => (
                  <Badge key={borderCode} colorScheme="blue" p={2} borderRadius="md" fontSize="sm">
                    {borderCode}
                  </Badge>
                ))
              ) : (
                <Text color="gray.500">No tiene fronteras terrestres.</Text>
              )}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}