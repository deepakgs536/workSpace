import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
function AddedSignals({text , removeAddedSignal}) {
  return (
    <Stack direction={'row'} justifyContent={'space-between'} sx={{padding:'5px' , backgroundColor:'#F5F5F5'}}>

        <Typography sx={{fontSize:'12px' , alignSelf:'center'}}>{text}</Typography>
        <CloseOutlinedIcon 
        onClick={() => removeAddedSignal(text)}
        sx={{width:'15px' , height:'15px' , alignSelf:'center'}}/>

      
    </Stack>
  )
}

export default AddedSignals
