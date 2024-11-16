import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Typography, styled } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';

const StyledButton = styled(Box)(({ theme, selected }) => ({
    cursor:'pointer',
  borderRadius: '4px',
  borderWidth: '1.5px',           // Add border width
  borderStyle: 'solid',   
  borderColor: selected ? alpha(theme.palette.success.main, 0.8) : alpha(theme.palette.text.disabled, 0.8) ,
  backgroundColor: selected
    ? alpha(theme.palette.success.main, 0.15)
    : theme.palette.secondary.textColor,
  color: selected ? theme.palette.success.main : theme.palette.text.primary,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px 0',
}));

function FeedbackStructure({ selected = false ,ariaLabel , onClick , feedbackIcon}) {
  const theme = useTheme();

  return (
    <StyledButton selected={selected} onClick={onClick}>
      <AccessTimeIcon sx={{ width: '35px', height: '35px', margin: '5px 48px 10px 48px' }} />
      <Typography
        sx={{
            fontSize:'14px',
          color: theme.palette.text.primary,
          textAlign: 'center',
          fontWeight: selected ? 600 : 500,
        }}
      >
        {ariaLabel}
      </Typography>
    </StyledButton>
  );
}

export default FeedbackStructure;
