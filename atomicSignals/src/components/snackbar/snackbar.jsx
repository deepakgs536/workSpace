import { Alert, Snackbar } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Fade from '@mui/material/Fade';


const GlobalFunctionContext = createContext();

export const useGlobalFunction = () => useContext(GlobalFunctionContext);

export const GlobalFunctionProvider = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  // Normal function definition
  function myFunction(openClose , message) {
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
            zIndex:1,
            position: 'relative',
            top: '60px',
            width: '100%',
            borderColor: 'green',
            borderRadius: '12px',
            backgroundColor: '#CEF3E4',
            '& .MuiAlert-action': {
              outline: 'none',
            },
            '& .MuiAlert-action button:focus': {
              outline: 'none',
            },
          }}
        >
          {snackbarMessage}  {/* snackbar message */}
        </Alert>
      </Snackbar>
    </GlobalFunctionContext.Provider>
  );
};
