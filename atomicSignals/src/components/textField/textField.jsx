import { useTheme } from '@emotion/react';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';

function TextFieldComponent({ 
  type = 'text', 
  label = 'name', 
  placeholder = 'John', 
  required = true, 
  endAdornmentText = '', 
  value = '', 
  onChange = () => {} // Default to a no-op to avoid errors
}) {
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
        value={value} // Controlled value
        onChange={onChange} // Pass onChange handler
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Typography sx={{ fontSize: '14px' }}>{endAdornmentText}</Typography>
            </InputAdornment>
          ),
        }}
        sx={{
          borderRadius: '4px',
          bgcolor: '#FFFFFF',
          width: '100%',
          '& .MuiInputBase-input': {
            padding: '10px',
            fontSize: '14px',
            color: theme.palette.text.primary,
          },
          '& .MuiInputBase-root.Mui-focused': {
            borderColor: theme.palette.text.disabled,
            boxShadow: 'none',
          },
          '& .MuiOutlinedInput-root': {
            borderColor: theme.palette.text.disabled,
          },
        }}
      />
    </Box>
  );
}

export default TextFieldComponent;
