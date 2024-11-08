import { Box, Stack, Snackbar, Alert, alpha } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import BrandIcon from '../../assets/brandIcon';
import ResetPassword from './possibleEntries/resetPassword';
import LogIn from './possibleEntries/logIn';
import ForgetPassword from './possibleEntries/forgetPassword';
import SignUp from './possibleEntries/signUp';
import SignUpBackgroundImage from '../../assets/signUpBackgroundImage.svg';

function UserEntry() {
  const theme = useTheme();
  const [activeComponent, setActiveComponent] = useState(null);

  const changeUserEntry = (componentType) => {
    setActiveComponent(componentType);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'login':
        return <LogIn changeUserEntry={changeUserEntry} />;
      case 'forgetPassword':
        return <ForgetPassword changeUserEntry={changeUserEntry} />;
      case 'resetPassword':
        return <ResetPassword changeUserEntry={changeUserEntry} />;
      default:
        return <SignUp changeUserEntry={changeUserEntry} />;
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#EFEEFB',
        backgroundImage: `url(${SignUpBackgroundImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >

      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: '29.27vw',
          minWidth: '350px',
          maxWidth: '500px',
          bgcolor: theme.palette.secondary.textColor,
          padding: '20px',
          display: 'flex',
          height: 'auto',
          borderRadius: '12px',
          overflow: 'auto',
          boxSizing: 'border-box',
        }}
      >
        <Box>
          <BrandIcon />
        </Box>

        {/* Render the active component */}
        {renderComponent()}
      </Stack>
    </Box>
  );
}

export default UserEntry;
