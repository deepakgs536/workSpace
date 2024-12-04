import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContactUsShadow from '../../components/contactUsShadow';

function ContactUs() {
  return (
    <Box
      sx={{
        justifyContent: 'center',
        backgroundColor: '#009065',
        position: 'relative',
        color: '#FFFFFF',
        width: '100%',
        overflow: 'hidden',
        paddingY: '5%',
      }}
    >
      <Box sx={{ zIndex: 100 }}>
        <Typography sx={{ marginBottom: '8px' }}>Contact Us</Typography>
        <Typography sx={{ marginBottom: '16px' }}>
          Have questions or need more information? Reach out to us at.
        </Typography>
        <a
            href="mailto:info@veridian.com"
            style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
          >
        <Stack direction="row" sx={{ justifySelf: 'center', whiteSpace: 'nowrap' }}>
          {/* Email Section */}
          
            <Stack
              direction="row"
              spacing={2}
              sx={{
                backgroundColor: '#006547',
                padding: '10px 20px',
                alignItems: 'center', // Center items vertically
                cursor: 'pointer', // Change cursor to pointer on hover
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#f9c300',
                  color: '#000000',
                  fontSize: '14px',
                  padding: '5px 10px',
                  display: 'flex', // Add flex to align text
                  alignItems: 'center', // Center vertically
                  justifyContent: 'center', // Center horizontally
                }}
              >
                MAIL TO
              </Box>
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                info@veridian.com
              </Typography>
            </Stack>
          

          {/* Arrow Section */}
          <Box
            sx={{
              color: '#FFFFFF',
              width: '10%',
              height: 'auto',
              display: 'flex', // Use flexbox
              alignItems: 'center', // Vertically center the icon
              justifyContent: 'center', // Horizontally center the icon
              backgroundColor: 'rgba(0, 81, 57, 1)', // Original background color with full opacity
              paddingX: '10px',
              '&:hover': {
                backgroundColor: 'rgba(0, 81, 57, 0.85)', // Reduce background opacity to 0.7 on hover
              },
            }}
          >
            <ArrowForwardIcon />
          </Box>
        </Stack>
        </a>
        <Typography sx={{ marginTop: '16px' }}>We're here to help</Typography>
      </Box>
      <Box>
        <ContactUsShadow top="0%" right="-70%" opacity="0.4" />
        <ContactUsShadow top="25%" right="-77%" opacity="0.7" />
        <ContactUsShadow top="50%" right="-84%" opacity="1" />
        <ContactUsShadow bottom="0%" left="-70%" opacity="0.4" />
        <ContactUsShadow bottom="25%" left="-77%" opacity="0.7" />
        <ContactUsShadow bottom="50%" left="-84%" opacity="1" />
      </Box>
    </Box>
  );
}

export default ContactUs;
