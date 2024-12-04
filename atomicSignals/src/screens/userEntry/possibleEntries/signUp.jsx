import { Card, Stack, Box, Typography, Divider } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import SignUpWithGoogle from '../../../components/buttons/signUpWithGoogle';
import StyledButton from '../../../components/buttons/styledButton';
import TextField from '@mui/material/TextField';
import BrandIcon from '../../../assets/brandIcon';
import GoogleIcon from '../../../assets/googleIcon.svg';
import OutlookIcon from '../../../assets/outlookIcon.svg';
import SignUpBackgroundImage from '../../../assets/signUpBackgroundImage.svg';
import { Navigate, useNavigate } from 'react-router-dom';
import TextFieldComponent from '../../../components/textField/textField';
import { useSelector } from 'react-redux';
// import { changeUserEntry } from '../userEntry';

function SignUp( {changeUserEntry} ) {
    // const {name} = useSelector((state) => state.user);
    const theme = useTheme();
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false); // Track hover state
    return (
        <>
            <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
                Sign Up
            </Typography>
            <Typography sx={{ fontSize: '12px', color: theme.palette.text.secondary }}>
                You're just a few details away to set up a culture of feedback and a thriving environment.
            </Typography>
            
            <SignUpWithGoogle iconSrc={GoogleIcon} text="Sign Up with Google" disabled={false} />
            <SignUpWithGoogle iconSrc={OutlookIcon} text="Sign Up with Outlook" disabled={false} />
            
            <Divider sx={{ width: '60%', alignSelf: 'center' }}>
                <Typography sx={{ fontSize: '12px' }}>or</Typography>
            </Divider>
            
            <TextFieldComponent
                type='email' label='Work Email' placeholder='atomicsignals@gmail.com'
            />
            
            <StyledButton text='Sign Up' onClick= {() => navigate('/userEntry/information')}/>
            
            <Typography sx={{ textAlign: 'center', color: theme.palette.text.secondary, fontSize: '14px' }}>
                Already have an account? &nbsp;
                <span
                    onClick={() => changeUserEntry('login')}
                    onMouseEnter={() => setIsHovered(true)} // Mouse enter triggers hover effect
                    onMouseLeave={() => setIsHovered(false)} // Mouse leave resets hover effect
                    style={{
                        color: theme.palette.text.primary,
                        cursor: 'pointer',
                        fontWeight: 600,
                        textDecoration: 'none', // Remove default underline
                        position: 'relative', // Needed for ::after pseudo-element
                    }}
                >
                    Log in
                    <span
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '1.5px', // Define underline height
                            backgroundColor: isHovered ? 'rgba(0,0,0,0.8)' : 'rgba(0, 0, 0, 0.3)', // Simulate opacity on hover
                            transition: 'background-color 0.3s ease', // Smooth transition for color change
                        }}
                    />
                </span>
            </Typography>
        </>
    );
}

export default SignUp;
