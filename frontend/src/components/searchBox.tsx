import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


 const SearchBox: React.FC = () => {
  return (
    <Box
      component="form"
      className = "flex flex-wrap my-2"
      
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Search Conditions & Treatments" variant="outlined" className = "w-[500px] m-2" 
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
      
    </Box>
  );
};

export default SearchBox;
