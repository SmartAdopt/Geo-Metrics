import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface ButtonProps {
    onClick?: () => void;
}

const Button = ({onClick}: ButtonProps) => {
    return (
        <>
            <IconButton type="button" sx={{p: '10px'}} aria-label="search" onClick={onClick}>
                <SearchIcon/>
            </IconButton>
        </>
    );
};

export default Button;