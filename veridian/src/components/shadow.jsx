import { Box } from '@mui/material'
import React from 'react'

function Shadow({ top = 'none', bottom = 0, right = 0, left = 'none' }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: top === 'none' ? undefined : top,     // If 'top' is 'none', don't apply top style
        bottom: bottom,                             // Apply bottom value
        right: right,                               // Apply right value
        left: left === 'none' ? undefined : left,   // If 'left' is 'none', don't apply left style
        width: '8%',                                // Fixed width, can be adjusted if needed
        height: '80%',                              // Fixed height, can be adjusted if needed
        transform: left !== 'none' ? 'rotate(-45deg)' : 'rotate(45deg)',                // Rotate the box by 45 degrees
        background: 'linear-gradient(to bottom, rgb(0, 128, 90), rgba(0, 128, 90, 0))',
        zIndex: 1,                                  // Placed behind content
      }}
    />
  )
}

export default Shadow
