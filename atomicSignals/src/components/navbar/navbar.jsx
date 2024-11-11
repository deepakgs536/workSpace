import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import BrandLogo from '../../assets/brandLogo';
import { useTheme } from '@mui/material/styles';
import NavbarOptions from './navbarOptions';

function Navbar() {
  const theme = useTheme();
  
  return (
    <Stack
      alignItems="center"
      sx={{
        width: '5vw',
        minWidth: '60px',
        maxWidth: '70px',
        height: '100vh',
        backgroundColor: theme.palette.primary.light,
      }}
    >
      {/* Top Logo Section */}
      <Stack spacing={1} alignItems="center" paddingY="17px">
        <BrandLogo />
        <Typography color={theme.palette.secondary.textColor} sx={{fontSize:'12px'}}>V 1.0.02</Typography>
      </Stack>

      {/* Divider with enhanced visibility */}
      <Divider
        sx={{
          width: '60%', // Make it shorter than the full width for spacing
          backgroundColor: theme.palette.secondary.textColor, // Use theme divider color
        }}
      />

      {/* Navbar Options */}
      <Stack direction="column" justifyContent="space-between" height="100%" padding={'17px'}>
        <Stack spacing={2}>
          <NavbarOptions />
          <NavbarOptions />
          <NavbarOptions />
        </Stack>
        <Stack spacing={2}>
          <NavbarOptions />
          <NavbarOptions />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Navbar;
