import React from 'react'
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'
import StyledButton from '../../../components/buttons/styledButton';
import TextFieldComponent from '../../../components/textField/textField';
import { useGlobalFunction } from '../../../components/snackbar/snackbar';
import { useNavigate } from 'react-router-dom';
// import { changeUserEntry } from '../userEntry';

function forgetPassword({changeUserEntry }) {
    const theme = useTheme();
    const navigate = useNavigate();
    const { myFunction } = useGlobalFunction();
  return (
    <>
    
    <Typography sx={{fontSize:'20px' , fontWeight:'600'}}>
        Forget Password
    </Typography>
    <Typography sx={{fontSize:'14px' , color: theme.palette.text.secondary }}>
        Provide us the registered email to reset your password.
    </Typography>

    <TextFieldComponent type='email' label='Email' placeholder='Sam Parker'/>

    <StyledButton
    text="Get Link"
    onClick={() => {
        myFunction(true, 'Link sent to registered email');
        setTimeout(() => {
        changeUserEntry('resetPassword');
        }, 2000);
    }}
    />


    <Typography sx={{ textAlign: 'center' , color: theme.palette.text.secondary, fontSize:'14px' }}>
                Already have an account? &nbsp;
                <span onClick={() => changeUserEntry('login')} 
                    style={{ 
                    color: theme.palette.text.primary, 
                    cursor: 'pointer', 
                    fontWeight: 600, 
                    textDecoration: 'underline' 
                    }}
                >
                    Log in
                </span>
         </Typography>
    </>
  )
}

export default forgetPassword
