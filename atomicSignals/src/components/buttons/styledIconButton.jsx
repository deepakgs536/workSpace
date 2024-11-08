import React from 'react';
import { IconButton, styled } from "@mui/material";
import { alpha } from "@mui/material/styles"; // Import alpha for opacity handling

// StyledIconButton with specified styles
const StyledIconButton = styled(IconButton)(({ theme, size = 'large', disabled = false }) => ({
    width: 'max-content', 
    textTransform: 'none', 
    '&:focus': {
        outline: 'none',
    },
    // Default styles for the button
    ...(size === 'large' && {
        borderRadius: '5px',
        padding: '10px 12px',
        backgroundColor: theme.palette.success.main,
        color: theme.palette.secondary.textColor,
        '&:hover': {
            backgroundColor: alpha(theme.palette.success.main, 0.8),
        },
        '&.Mui-disabled': {
            backgroundColor: theme.palette.text.disabled,
            color: theme.palette.secondary.textColor,
        },
    }),

    // Styles for small size
    ...(size === 'small' && {
        borderRadius: '50%',
        padding: '8px',
        color: theme.palette.success.main,
        backgroundColor: alpha(theme.palette.success.main, 0.1),
        '&:hover': {
            backgroundColor: alpha(theme.palette.success.main, 0.25),
        },
        '&.Mui-disabled': {
            backgroundColor: alpha(theme.palette.text.disabled, 0.15),
            color: theme.palette.text.disabled,
        },
    }),
}));

// Main component accepting icon as a prop
const IconButtonWithIcon = ({ icon, ...props }) => {
    return (
        <StyledIconButton {...props} disableRipple>
            {icon}
        </StyledIconButton>
    );
};

export default IconButtonWithIcon;
