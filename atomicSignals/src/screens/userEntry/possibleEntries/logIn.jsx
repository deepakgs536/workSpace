import React from 'react'
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'
import StyledButton from '../../../components/buttons/styledButton';
import TextFieldComponent from '../../../components/textField/textField';
import { useNavigate } from 'react-router-dom';
// import { changeUserEntry } from '../userEntry';


function logIn({changeUserEntry}) {
    const theme = useTheme();
    const navigate = useNavigate();
  return (
    <>
    
    <Typography sx={{fontSize:'20px' , fontWeight:'600'}}>
        Welcome!
    </Typography>
    <Typography sx={{fontSize:'14px' , color: theme.palette.text.secondary }}>
        One positive feedback per day or week can make us 
        grow exponentially
    </Typography>

    <TextFieldComponent
                    type='email' label='Email' placeholder='Sam Parker'
    />
    <TextFieldComponent
                    type='password' label='Password' placeholder='Sam Parker'
    />

    <Typography onClick={() => changeUserEntry('forgetPassword')}
            sx={{ 
                textAlign:'end',
                fontSize: '14px',
                color: theme.palette.text.primary, 
                cursor: 'pointer', 
                textDecoration: 'underline',
                textShadow: '0.3px 0.3px 0px rgba(0, 0, 0, 1)',
            }}>
        Forget Password?
    </Typography>

    <StyledButton text='Log In' onClick={() => navigate('/dashboard')} />
    
    </>
  )
}

export default logIn
