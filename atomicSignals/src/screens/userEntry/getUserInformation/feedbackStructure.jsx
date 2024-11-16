import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Stack, Typography, styled } from '@mui/material';
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
  transition :'color 0.2s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent:'center',
  padding: '16px 0',
}));

function FeedbackStructure({ selected = false, ariaLabel, onClick, feedbackIcon: FeedbackIcon }) {
  const theme = useTheme();

  return (
    <StyledButton selected={selected} onClick={onClick} >
      <Stack spacing={0.5}>
        <Box
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
          }}
        >
          <FeedbackIcon sx={{ width: '35px', height: '35px', }} /> {/* Adjust icon size to fit container */}
        </Box>
        <Typography
          sx={{
            fontSize: '14px',
            color: theme.palette.text.primary,
            textAlign: 'center',
            fontWeight: selected ? 600 : 500,
          }}
        >
          {ariaLabel}
        </Typography>
      </Stack>
      
    </StyledButton>
  );
}
export default FeedbackStructure;