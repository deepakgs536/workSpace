import { Box } from '@mui/material';
import React from 'react';

function ContactUsShadow({ opacity = 1, top, left, right, bottom }) {
  return (
    <Box
      sx={{
        width: '100%',  // Set the width and height for the shadow
        height: '100%',
        backgroundColor: '#01805a',  // Shadow color (you can adjust this)
        opacity: opacity,
        position: 'absolute',
        top: top || (right || bottom ? 'none' : 'auto'),  // If top is provided, set it, else 'none' if right/bottom is given
        left: left || (bottom || right ? 'none' : 'auto'),  // If left is provided, set it, else 'none' if bottom/right is given
        right: right || 'auto',  // If right is provided, set it
        bottom: bottom || 'auto',  // If bottom is provided, set it
        zIndex: 10,  // Ensure the shadow is behind other elements
        
      }}
    />
  );
}

export default ContactUsShadow;
