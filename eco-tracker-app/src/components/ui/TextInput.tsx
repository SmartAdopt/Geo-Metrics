import InputBase from '@mui/material/InputBase';
import '@fontsource/roboto/300.css'

interface TextInputProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const TextInput = ({ value = "", onChange, placeholder = "Ecuador" }: TextInputProps) => {
    return (
        <InputBase
            sx={{ml: 1, flex: 1}}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default TextInput;