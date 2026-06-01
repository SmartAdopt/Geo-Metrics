import { Routes, Route } from 'react-router-dom';
import { Box, Flex, Button } from '@chakra-ui/react';
// 1. Replace Link with useNavigate
import { useNavigate } from 'react-router-dom'; 

import CountriesExplorer from '../features/countries-explorer';
import CountryDetail from '../features/country-detail';
import VisaApplication from '../features/visa-application';

import { FavoritesDrawer } from '../components/FavoritesDrawer';

export default function AppRouter() {
  // 2. Initialize the navigation hook
  const navigate = useNavigate(); 

return (
    <Box>
      {/* We updated the Flex to separate the buttons on the left and the Drawer on the right*/}
      <Flex as="nav" bg="gray.800" color="white" p={4} gap={4} mb={5} justifyContent="space-between" alignItems="center">
        <Flex gap={4}>
          <Button onClick={() => navigate('/countries')} colorScheme="blue" variant="solid">
            Explorador
          </Button>
          <Button onClick={() => navigate('/visa-application')} colorScheme="blue" variant="solid">
            Solicitud de Visado
          </Button>
        </Flex>

        {/* Here we inject the side menu */}
        <FavoritesDrawer />
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