import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


 const HomeBodySearchBox: React.FC = () => {
  return (
    <Box
      component="form"
      className = "flex flex-wrap my-2"
      
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Search Conditions & Treatments" variant="outlined" className = "w-[850px] m-2 h-[100px]" 
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
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#FFF", // Set border color to white
            height: "80px",
            width: "850px"
          },
          "&:hover fieldset": {
            borderColor: "#FFF", // White border on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "#FFF", // White border when focused
          },
        },
      }}
    />
      
    </Box>
  );
};

export default HomeBodySearchBox;
