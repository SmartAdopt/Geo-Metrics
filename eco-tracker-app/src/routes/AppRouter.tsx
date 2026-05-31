import { Routes, Route } from 'react-router-dom';
import { Box, Flex, Button } from '@chakra-ui/react';
// 1. Replace Link with useNavigate
import { useNavigate } from 'react-router-dom'; 

import CountriesExplorer from '../features/countries-explorer';
import CountryDetail from '../features/country-detail';
import VisaApplication from '../features/visa-application';

export default function AppRouter() {
  // 2. Initialize the navigation hook
  const navigate = useNavigate(); 

  return (
    <Box>
      <Flex as="nav" bg="gray.800" color="white" p={4} gap={4} mb={5}>
        {/* 3. Replace 'as' and 'to' with the onClick event */}
        <Button onClick={() => navigate('/countries')} colorScheme="blue" variant="solid">
          Explorador
        </Button>
        <Button onClick={() => navigate('/visa-application')} colorScheme="blue" variant="solid">
          Solicitud de Visado
        </Button>
      </Flex>

      <Routes>
        <Route path="/" element={<CountriesExplorer />} />
        <Route path="/countries" element={<CountriesExplorer />} />
        <Route path="/country/:code" element={<CountryDetail />} />
        <Route path="/visa-application" element={<VisaApplication />} />
      </Routes>
    </Box>
  );
}