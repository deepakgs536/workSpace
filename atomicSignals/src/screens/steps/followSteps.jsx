import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Metrics from '../../assets/metrics.svg';
import StyledButton from '../../components/buttons/styledButton';
import { useTheme } from '@emotion/react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { useNavigate } from 'react-router-dom';
import { useGlobalFunction } from '../../components/snackbar/snackbar';

function FollowSteps({ active = false }) {
    const theme = useTheme();
    const navigate = useNavigate();
    const { myFunction } = useGlobalFunction();
  
    return (
      <Box
        sx={{
          opacity: active ? 1 : 0.5,
          pointerEvents: active ? 'auto' : 'none',
          transition: 'opacity 0.3s ease-in-out',
          textAlign: 'center',
          border: `2px solid ${theme.palette.text.disabled}`,
          padding: '24px', // Consistent padding
          height: '100%',
          width: '32.5%',
          minWidth: '350px', // For responsiveness
          maxWidth: '600px', // Max width control
          borderRadius: '8px', // Rounded corners
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Stack spacing={1} sx={{ padding: '32px 10px',margin:'50px 0' , marginTop:'0', justifyContent: 'center' }}>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              alignSelf: 'center',
              width: 'max-content',
              padding: '4px 8px', // Padding for balance
              borderRadius: '18px',
              color: theme.palette.primary.main,
              background: 'linear-gradient(90deg, #F3F2FF 0%, #F3F2FF00 100%)',
            }}
          >
            Step 1
          </Typography>

          <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>Setup Signals</Typography>

          <Typography sx={{ fontSize: '14px', color: theme.palette.text.secondary, marginBottom: '24px' }}>
            Signals are attributes against which you can give feedback to someone (Eg. Attitude, Efficiency...)
          </Typography>

          {/* Display Image */}
          <img
            src={Metrics}
            alt="Metrics"
            style={{
              margin: '24px auto', // Centered with auto margins
              width: '50%',
              maxWidth: '400px',
              display: 'block',
            }}
          />
        </Stack>

        {/* Styled Button */}
        <StyledButton
            aria-label="Add Signal"
            onClick={
                active
                ? () => {
                    setTimeout(() => {
                        navigate('/setupSignals');
                    }, 1000); // 2000 milliseconds = 2 seconds
                    }
                : undefined
            }
            text="Add Signals"
            sx={{ marginTop: '24px' }}
        />


      </Box>
    );
}

export default FollowSteps;
