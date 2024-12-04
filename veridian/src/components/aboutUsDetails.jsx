import React from 'react'
import { Stack, Typography } from '@mui/material';
function AboutUsDetails({aboutUsIcon = null  , aboutUsMessage = "", header = ""}) {
  return (
    <Stack direction='row' spacing={2}>
        <Stack>
            <Typography sx={{fontSize:'18px', fontWeight:600 ,textAlign:'start' , marginBottom:'5px'}}>{header}</Typography>
            <Typography sx={{fontSize:'14px' ,textAlign:'start'}} >
            {aboutUsMessage}
            </Typography>
        </Stack>
        <img src={aboutUsIcon} alt="aboutUsIcon" />
    </Stack>
  )
}

export default AboutUsDetails
