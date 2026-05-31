import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Button = () => {
    return (
        <>
            <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </>
    );
};

export default Button;