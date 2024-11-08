import { useTheme } from '@emotion/react';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';

function TextFieldComponent({ type = 'text', label = 'name', placeholder = 'John', required = true, endAdornmentText = '' }) {
  const theme = useTheme();
  return (
    <Box sx={{ marginTop: '18px' }}>
      <Typography sx={{ fontSize: '12px', marginBottom: '4px' }}>
        {label}
        {required ? <span style={{ color: 'red' }}> *</span> : ''}
      </Typography>
      <TextField
        placeholder={placeholder}
        type={type}
        required={required}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                <Typography sx={{fontSize:'14px'}}>{endAdornmentText}</Typography>
            </InputAdornment>
          ),
        }}
        sx={{
          borderRadius: '4px',
          bgcolor: '#FFFFFF',
          width: '100%', // Full width
          '& .MuiInputBase-input': {
            padding: '10px', // Padding inside the input field
            fontSize: '14px', // Set the font size for the input text
            color: theme.palette.text.primary, // Set the input text color
          },
          '& .MuiInputBase-root.Mui-focused': {
            borderColor: theme.palette.text.disabled, // Set focus border color
            boxShadow: 'none', // Remove default box-shadow on focus
          },
          '& .MuiOutlinedInput-root': {
            borderColor: theme.palette.text.disabled, // Apply border color to all states
          },
        }}
      />
    </Box>
  );
}

export default TextFieldComponent;
