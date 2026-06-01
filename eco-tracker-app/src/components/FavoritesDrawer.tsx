import {
  Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
  Button, useDisclosure, VStack, Text, Badge
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

export function FavoritesDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <>
      <Button colorScheme="yellow" onClick={onOpen} variant="solid">
        ⭐ Mis Favoritos ({favorites.length})
      </Button>
      
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Países Guardados</DrawerHeader>
          <DrawerBody pt={4}>
            {favorites.length === 0 ? (
              <Text color="gray.500">Aún no has guardado ningún país.</Text>
            ) : (
              <VStack align="stretch" spacing={3}>
                {favorites.map((code) => (
                  <Button
                    key={code}
                    justifyContent="space-between"
                    variant="outline"
                    colorScheme="blue"
                    onClick={() => {
                      navigate(`/country/${code}`);
                      onClose(); // Cerramos el menú al navegar
                    }}
                  >
                    Ver detalles <Badge colorScheme="blue">{code}</Badge>
                  </Button>
                ))}
              </VStack>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}