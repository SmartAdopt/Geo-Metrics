import { Box, Image, Text, Badge, Flex, Button } from '@chakra-ui/react';
import { type Country } from '../../../types/country.types';
import { useFavorites } from '../../../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';

interface CountryCardProps {
  country: Country;
}

export function CountryCard({ country }: CountryCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const navigate = useNavigate();
  
  const favorite = isFavorite(country.cca3);

  return (
    <Box 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      boxShadow="md"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.02)' }}
    >
      {/* Clickable flag image to go to the detail page */}
      <Image 
        src={country.flags.svg} 
        alt={`Bandera de ${country.name.common}`} 
        height="160px" 
        width="100%" 
        objectFit="cover"
        cursor="pointer"
        onClick={() => navigate(`/country/${country.cca3}`)}
      />

      <Box p={5}>
        <Flex justifyContent="space-between" alignItems="center" mb={2}>
          <Text fontWeight="bold" fontSize="xl" noOfLines={1}>
            {country.name.common}
          </Text>
          <Badge colorScheme="green">{country.cca3}</Badge>
        </Flex>

        <Text fontSize="sm" color="gray.500" mb={4}>
          Región: {country.region} <br/>
          Población: {country.population.toLocaleString()}
        </Text>

        {/* Favorites button using our Context API */}
        <Button 
          w="100%" 
          colorScheme={favorite ? "yellow" : "gray"} 
          variant={favorite ? "solid" : "outline"}
          onClick={() => toggleFavorite(country.cca3)}
        >
          {favorite ? '⭐ Quitar Favorito' : '☆ Marcar Favorito'}
        </Button>
      </Box>
    </Box>
  );
}