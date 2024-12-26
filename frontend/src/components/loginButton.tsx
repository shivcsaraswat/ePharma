import * as React from 'react';
import  { Button }  from '@mui/material';
import LoginIcon from './loginIcon.tsx';

const LoginButton: React.FC = () => {
  return (

      <Button  startIcon={<LoginIcon />} className = "p-4" >
        <span className = "text-pink-500"> Login </span>
      </Button>
    
  );
};



export default LoginButton;