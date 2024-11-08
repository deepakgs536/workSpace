import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function SelectGradings({ gradeImage, grade, onCloseClick }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{ padding: '10px', border: '1px grey solid', borderRadius: '4px' }}>
      {/* Displaying the image */}
      <img src={gradeImage} alt={`${grade} icon`} width={45} height={28} />
      
      {/* Vertical Divider */}
      <Divider orientation="vertical" flexItem sx={{ alignSelf: 'stretch' }} />
      
      {/* Message and Close Section */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ flex: 1 }}>
        <Typography>{grade}</Typography>
        <CloseOutlinedIcon 
          onClick={onCloseClick}  
          sx={{ width: '15px', height: '15px', alignSelf: 'center', cursor:'pointer'}} 
        />
      </Stack>
    </Stack>
  );
}

export default SelectGradings;
