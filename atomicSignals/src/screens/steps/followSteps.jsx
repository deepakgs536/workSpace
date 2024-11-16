import { alpha, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import StyledButton from '../../components/buttons/styledButton';
import { useTheme } from '@emotion/react';
import CompletedIcon from '../../assets/completedIcon';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import zIndex from '@mui/material/styles/zIndex';
import { useNavigate } from 'react-router-dom';
import NextIcon from '../../assets/nextIcon.svg';

function FollowSteps({ 
  stepNum = 1,
  stepTitle = "Setup Signals",
  stepDescription = "Signals are attributes against which you can give feedback to someone (Eg. Attitude, Efficiency...)", 
  active = false,
  completed = false,
  buttonText = "Add signals",
  onClick ,
  completedMessage , 
  image ,
}) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        pointerEvents: active ? 'auto' : 'none',
        transition: 'opacity 0.3s ease-in-out',
        textAlign: 'center',
        border: 'none',
        boxShadow: active ? '0px 4px 6px rgba(0, 0, 0, 0.2)' : '0px 4px 6px rgba(0, 0, 0, 0.15)', // Adding box shadow
        padding: '24px',
        width: '32.5%',
        minWidth: '350px',
        maxWidth: '600px',
        borderRadius: '8px',
        backgroundColor: theme.palette.background.paper,
        display: 'flex', // Flex container
        flexDirection: 'column', // Column layout
        justifyContent: 'space-between', // Push content to top and bottom
      }}
    >
      {stepnum === 3 ? <Stack sx={{position:'absolute' , top : '10px ', right:' 10px'}}>
          <Typography variant="body1" color="initial">skip</Typography>
          <img src= {NextIcon}/>
      </Stack> : none} 
      {/* Top Content */}
      <Stack spacing={1} sx={{ padding: '32px 10px', justifyContent: 'center',
        opacity: active ? 1 : (completed ? 0.5 : 0.7), // Conditional opacity logic
       }}>
        {/* Step Number */}
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 600,
            alignSelf: 'center',
            width: 'max-content',
            padding: '4px 8px',
            borderRadius: '18px',
            color: theme.palette.primary.main,
            background: 'linear-gradient(90deg, #F3F2FF 0%, #F3F2FF00 100%)',
          }}
        >
          Step {stepNum}
        </Typography>

        {/* Step Title */}
        <Typography sx={{ fontSize: '20px', fontWeight: 600 }}>{stepTitle}</Typography>

        {/* Step Description */}
        <Typography sx={{ fontSize: '14px', color: theme.palette.text.secondary, height: '100px', marginBottom: '24px' }}>
          {stepDescription}
        </Typography>

        {/* Conditional Rendering for Completed or Metrics */}
        <Box sx={{height:'250px'}}>
        {completed ? (
          <Stack
            direction="column"
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{ margin: '24px auto' }}
          >
            {/* Completed Icon */}
            <CompletedIcon
              sx={{
                color: theme.palette.success.main,
                height: '45px',
                width: '40px',
              }}
            />
            {/* Typography */}
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                fontSize: '14px',
              }}
            >
              Thank you for setting up {completedMessage}
            </Typography>
          </Stack>
        ) : (
          <img
            src={image}
            alt="Metrics"
            style={{
              margin: '24px auto',
              width: '45%',
              maxWidth: '400px',
              display: 'block',
            }}
          />
        )}
        </Box>
      </Stack>

      {/* Styled Button */}
      <Box
  sx={{
    zIndex: 10, // Ensures button is above lower layers
    mt: 'auto',
    mb: '0px', // Space from the bottom
    alignSelf: 'center', // Center button horizontally
    width: '100%',
  }}
>
  {completed && stepNum === 3 ? 
    <StyledButton
    onClick={() => navigate('/dashboard')}  
    size="small"
    variant="outlined"
    aria-label="edit"
    text="Navigate to dashboard"
    sx={{
      border: 'transparent',
      '&:hover': {
        border: 'none',
      },
      '&:active': {
        border: 'none',
      },
      padding: '5px',
      pointerEvents: 'auto', // Enable interaction when completed
    }}
  />
  : completed ? (
    <StyledButton
      onClick={onClick}
      size="small"
      variant="outlined"
      aria-label="edit"
      endIcon={<CreateOutlinedIcon />}
      text="Edit"
      sx={{
        border: 'transparent',
        '&:hover': {
          border: 'none',
        },
        '&:active': {
          border: 'none',
        },
        padding: '5px',
        pointerEvents: 'auto', // Enable interaction when completed
      }}
    />
  ) : (
    <StyledButton
      pointerEvents="auto"
      aria-label={buttonText}
      onClick={active ? onClick : undefined}
      text={buttonText}
      sx={{
        padding: '5px',
      }}
    />
  )}
</Box>

    </Box>
  );
}

export default FollowSteps;
