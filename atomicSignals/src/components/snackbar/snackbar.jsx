import { Alert, Snackbar } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'; // Custom icon
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Success icon (default)

const GlobalFunctionContext = createContext();

export const useGlobalFunction = () => useContext(GlobalFunctionContext);

export const GlobalFunctionProvider = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [color, setColor] = useState('success');
  const [icon, setIcon] = useState(null); // To hold the icon

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  // Normal function definition
  function myFunction(openClose, message, color = 'success') {
    // Set the color and icon based on the type
    if (color === 'error') {
      setColor('error');
      setIcon(<NotificationsNoneIcon />);  // Custom icon for error
    } else {
      setColor('success');
      setIcon(<CheckCircleIcon />);  // Default icon for success
    }
    setSnackbarMessage(message);
    setOpen(true);
  }

  return (
    <GlobalFunctionContext.Provider value={{ myFunction }}>
      {children}

      <Snackbar
        TransitionComponent={Fade}
        open={open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          variant="filled"
          sx={{
            zIndex: 1,
            position: 'relative',
            top: '60px',
            width: '100%',
            borderColor: color === 'error' ? 'red' : 'green',  // Border color based on the color state
            backgroundColor: color === 'error'
              ? theme.palette.error.main + 'DF' // Add alpha for opacity
              : theme.palette.success.main + 'CC', // Add alpha for opacity
            opacity: 0.9, // Apply opacity
            borderRadius: '12px',
            '& .MuiAlert-action': {
              outline: 'none',
            },
            '& .MuiAlert-action button:focus': {
              outline: 'none',
            },
          }}
          icon={icon}  // Dynamically set icon
        >
          {snackbarMessage}  {/* Display the snackbar message */}
        </Alert>
      </Snackbar>
    </GlobalFunctionContext.Provider>
  );
};
