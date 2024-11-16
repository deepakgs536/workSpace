import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import { Alert, alpha, Button, Snackbar, TextField } from '@mui/material'
import StyledButton from '../../../components/buttons/styledButton';
import TextFieldComponent from '../../../components/textField/textField';
import { useGlobalFunction } from '../../../components/snackbar/snackbar';
// import { changeUserEntry } from '../userEntry';

function resetPassword({changeUserEntry}) {
    const theme = useTheme();
    const { myFunction } = useGlobalFunction();  // use the hook to get the function

  return (
    <>

    <Typography sx={{fontSize:'20px' , fontWeight:'600'}}>
        Reset Password
    </Typography>
    <Typography sx={{fontSize:'14px' , color: theme.palette.text.secondary }}>
        Please provide a new password for your account
    </Typography>

    <TextFieldComponent
            type='password' label='New password' placeholder='Sam Parker'
    />
    <TextFieldComponent
            type='password' label='Confirm new password' placeholder='Sam Parker'
    />
    <StyledButton text='Reset Password' 
      onClick={() => {
      myFunction(true, 'Password Reseted Successfully');
      setTimeout(() => {
      changeUserEntry('logIn');
      }, 1000);
    }}
    />
    
    </>
  )
}

export default resetPassword

