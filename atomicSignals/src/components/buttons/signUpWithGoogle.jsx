import React from 'react';
import { Typography, Button, styled } from '@mui/material';
import { alpha } from '@mui/material/styles';

const GoogleSignUpButton = styled(Button)(({ theme }) => ({
    minWidth: '250px',
    width: '100%',
    position: 'relative',
    padding: '10px',
    backgroundColor: alpha(theme.palette.text.disabled, 0.13),
    color: theme.palette.text.primary,
    borderRadius: '5px',
    textTransform: 'none',

    '&:focus': {
        outline: 'none',
    },
    '&:hover': {
        backgroundColor: alpha(theme.palette.text.disabled, 0.2),
    },
    '&.Mui-disabled': {
        opacity: 0.9,
        pointerEvents: 'none',
    },
}));

const GoogleIcon = ({ src, disabled }) => (
    <img 
        src={src} 
        alt="Google Logo" 
        style={{
            width: '16px', 
            height: '16px', 
            position: 'absolute', 
            left: '15px', 
            opacity: disabled ? 0.5 : 1
        }} 
    />
);

const StyledGoogleIcon = styled(GoogleIcon)({
    position: 'absolute',
    left: '10px',
});

const SignUpWithGoogle = ({ iconSrc, text, disabled, onClick }) => {
    return (
        <GoogleSignUpButton disabled={disabled} onClick={onClick} disableRipple>
            <StyledGoogleIcon src={iconSrc} disabled={disabled} />
            <Typography sx={{fontSize:'14px'}}>{text}</Typography>
        </GoogleSignUpButton>
    );
};

export default SignUpWithGoogle;
