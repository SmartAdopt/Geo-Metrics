import { useState } from 'react';
import { Box } from '@mui/material';
import Input from "@/components/ui/TextInput.tsx";
import Button from "@/components/ui/Button.tsx";

interface FilterPanelProps {
    onSearch: (query: string) => void;
}

const FilterPanel = ({ onSearch }: FilterPanelProps) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <Box sx={{ display: 'flex', gap: 1, p: 2 }}>
            <Input value={query} onChange={handleInputChange} />
            <Button onClick={handleSearch} />
        </Box>
    );
};

export default FilterPanel;