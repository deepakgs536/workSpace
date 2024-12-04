
import { useTheme } from "@emotion/react";

const Styles = () => {
    const theme = useTheme();
    return  {
    stepsCard :
        {
        transition: 'opacity 0.3s ease-in-out',
        textAlign: 'center',
        border: 'none',
        padding: '24px',
        width: '32.5%',
        minWidth: '350px',
        maxWidth: '600px',
        borderRadius: '8px',
        backgroundColor: theme.palette.background.paper,
        display: 'flex', // Flex container
        flexDirection: 'column', // Column layout
        justifyContent: 'space-between', // Push content to top and bottom
        position : 'relative',
      },

      skipButton:
        {
        backgroundColor:'transparent',
        zIndex:'10',
        position: 'absolute',
        top: '10px',
        right: '10px',
        border: 'none',
        '&:hover': {
          border: 'none',
        },
        '&:active': {
          border: 'none',
        },
      },

      stepNumber:
        {
        fontSize: '18px',
        fontWeight: 600,
        alignSelf: 'center',
        width: 'max-content',
        padding: '4px 8px',
        borderRadius: '18px',
        color: theme.palette.primary.main,
        background: 'linear-gradient(90deg, #F3F2FF 0%, #F3F2FF00 100%)',
      },

      navigateToDashboard :
        {
        backgroundColor:'transparent',
        border: 'transparent',
        '&:hover': {
          border: 'none',
        },
        '&:active': {
          border: 'none',
        },
        padding: '5px',
        pointerEvents: 'auto', // Enable interaction when completed      },
      },
      editButton :
      {
        backgroundColor:'transparent',
        border: 'transparent',
        '&:hover': {
          border: 'none',
        },
        '&:active': {
          border: 'none',
        },
        padding: '5px',
        pointerEvents: 'auto', // Enable interaction when completed      },
      },
      addButton :
      {
        padding: '5px',
      },

      editBox : 
      {
        zIndex: 10, // Ensures button is above lower layers
        mt: 'auto',
        mb: '0px', // Space from the bottom
        alignSelf: 'center', // Center button horizontally
        width: '100%',
      },

      image : 
      {
        margin: '24px auto',
        width: '45%',
        maxWidth: '400px',
        display: 'block',
      },

      completedIcon :
      {
        color: theme.palette.success.main,
        height: '45px',
        width: '40px',
      },
};
};
export default Styles