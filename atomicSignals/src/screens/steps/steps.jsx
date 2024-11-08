import { useTheme } from '@emotion/react';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import FollowSteps from './followSteps';
import { useNavigate } from 'react-router-dom';

function Steps() {
    const navigate = useNavigate();
  return (
    <Stack
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#fafafa',
        // alignItems: 'center', // Center content horizontally
        // justifyContent: 'center', // Center content vertically
        padding: '20px',
      }}
    >
      <Typography sx={{fontSize:'20px' ,fontWeight: 500,textShadow: '0.3px 0.3px 0px rgba(0, 0, 0, 1)',}}>Hi Sam!</Typography>
      <Typography sx={{fontSize:'16px',margin:'4px 0 22px 0'}}>Let’s set up your organization in a jiffy</Typography>

      {/* Container Box */}
      <Stack direction="row" justifyContent="space-between" spacing={1}>
        <FollowSteps active={true} />
        <FollowSteps active={false} />
        <FollowSteps active={false} />
    </Stack>

    </Stack>
  );
}

export default Steps;
