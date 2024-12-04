import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'
import StyledButton from '../../../components/buttons/styledButton';
import TextFieldComponent from '../../../components/textField/textField';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGlobalFunction } from '../../../components/snackbar/snackbar'; 
// import { changeUserEntry } from '../userEntry';


function logIn({changeUserEntry}) {
    const { myFunction } = useGlobalFunction();
    const {email , password} = useSelector((state) => state.userdetail)
    const theme = useTheme();
    const navigate = useNavigate();
    const [localEmail , setLocalEmail] = useState("")
    const [localPassword , setLocalPassword] = useState("")
    const handleLogInClick = () => {
        if(email === localEmail && password === localPassword){
            myFunction(false, 'Log in successful','success')
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000); // 2000 milliseconds (2 seconds)
            
        }
        else {
            myFunction(false, 'Wrong password or Email','error')
        }
        
    }
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
                    value = {localEmail}
                    onChange={(e) => setLocalEmail(e.target.value)}
    />
    <TextFieldComponent
                    type='password' label='Password' placeholder='Sam Parker'
                    value= {localPassword}
                    onChange={(e)=> setLocalPassword(e.target.value)}
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

    <StyledButton text='Log In' onClick={handleLogInClick} />
    
    </>
  )
}

export default logIn
