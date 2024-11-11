import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import BrandLogo from '../../assets/brandLogo';
import { useTheme } from '@mui/material/styles';

function NavbarOptions({active = false}) {
  const theme = useTheme();

  return (
    <Stack
      alignItems="center"
      spacing={0} // Adds spacing between logo and text
        sx={{
            '& : hover':{
                cursor:'pointer',
            },
        }}
    >
      {/* Logo Section */}
      <Box 
        sx={{ 
            padding: '6px', 
            backgroundColor: active ? theme.palette.success.main : '#286acf',
            borderRadius: '4px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '28px', // Adjust as needed
          height: '28px' 
        }}
      >
        <BrandLogo />
      </Box>

      {/* Text Section */}
      <Typography sx={{ fontSize: '12px', color: theme.palette.secondary.textColor }}>
        Home
      </Typography>
    </Stack>
  );
}

export default NavbarOptions;
