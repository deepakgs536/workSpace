import { Button, styled, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

// StyledButton with common properties extracted
const StyledButton = styled(Button)(({ theme, ...props }) => {
    const { variant = 'filled', size = 'large', startIcon = '', disabled = false, text = 'Button' } = props;

    const commonStyles = {
        flex:1,
        textTransform: 'none',
        whiteSpace: 'nowrap',
        justifyContent: startIcon ? 'flex-start' : 'center',

        // Full width only when no startIcon and size is large
        ...(variant && size === 'large' && !startIcon && {
            width: '100%',
        }),

        // Auto width with inline-flex when startIcon is present
        ...(startIcon && variant && {
            width: 'max-content',
            display: 'inline-flex',
            padding: '5px 10px',
        }),

        // Small size button padding
        ...(size === 'small' && {
            width: 'max-content',
            padding: '5px 10px',
        }),
        
        '&:focus': {
            outline: 'none',
        },

        ...(disabled && {
            pointerEvents: 'none',
        }),
    };

    return {
        ...commonStyles,

        ...(variant === 'outlined' && {
            backgroundColor: theme.palette.secondary.textColor,
            border: `2px solid ${theme.palette.success.main}`,
            color: theme.palette.success.main,

            '&:hover': {
                border: `2px solid ${alpha(theme.palette.success.main, 2)}`,
                backgroundColor: alpha(theme.palette.success.main, 0.1),
            },

            ...(disabled && {
                backgroundColor: theme.palette.secondary.textColor,
                color: theme.palette.text.disabled,
                border: `2px solid ${theme.palette.text.disabled}`,
            }),
        }),

        ...(variant === 'filled' && {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.secondary.textColor,
            border: `2px solid ${theme.palette.success.main}`,

            '&:hover': {
                backgroundColor: alpha(theme.palette.success.main, 0.8),
                border: `2px solid ${theme.palette.success.main}`,
            },

            '&.Mui-disabled': {
                backgroundColor: theme.palette.text.disabled,
                color: theme.palette.secondary.textColor,
                border: `2px solid ${theme.palette.text.disabled}`,
            },
        }),
    };
});

// Usage
const styledButton = (props) => {
    return (
        <StyledButton {...props} disableRipple onClick={props.onClick} endIcon={props.endIcon}>
            <Typography sx={{fontSize:'14px'}}>{props.text}</Typography>
        </StyledButton>
    );
};

export default styledButton;
