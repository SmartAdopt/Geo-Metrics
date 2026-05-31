import { Flex, Input, Select } from '@chakra-ui/react';
import type { UseFormRegister } from 'react-hook-form';

// Define which fields our search form will have
export interface FilterFormValues {
  search: string;
  region: string;
}

interface FilterPanelProps {
  // Receive the React Hook Form register function from the parent
  register: UseFormRegister<FilterFormValues>;
}

export function FilterPanel({ register }: FilterPanelProps) {
  return (
    <Flex gap={4} mb={8} flexDir={{ base: 'column', md: 'row' }}>
      {/* Uncontrolled input connected to React Hook Form */}
      <Input
        placeholder="Buscar país por nombre..."
        {...register('search')}
        bg="white"
        size="lg"
        boxShadow="sm"
      />
      
      {/* Continent selector */}
      <Select 
        {...register('region')} 
        placeholder="Todos los continentes" 
        bg="white" 
        size="lg"
        boxShadow="sm"
        w={{ base: '100%', md: '300px' }}
      >
        <option value="Americas">América</option>
        <option value="Europe">Europa</option>
        <option value="Asia">Asia</option>
        <option value="Africa">África</option>
        <option value="Oceania">Oceanía</option>
      </Select>
    </Flex>
  );
}