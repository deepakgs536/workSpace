import { Box, Divider, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Negative1 from '../../assets/Negative1.svg';
import Negative2 from '../../assets/Negative2.svg';
import Negative3 from '../../assets/Negative3.svg';
import Neutral0 from '../../assets/Neutral0.svg';
import Positive1 from '../../assets/Positive1.svg';
import Positive2 from '../../assets/Positive2.svg';
import Positive3 from '../../assets/Positive3.svg';
import SelectGradings from './selectGradings';
import StyledButton from '../../components/buttons/styledButton';
import { Styles } from './styles';

function SetupGrading({onClose,markCompleted}) {
  const theme = useTheme();
  const navigate = useNavigate();

  const [gradings, setGradings] = useState([
    { text: 'Completely away', image: Negative1 },
    { text: 'Need to improve a lot', image: Negative2 },
    { text: 'Need to improve', image: Negative3 },
    { text: 'Good', image: Neutral0 },
    { text: 'Very Good', image: Positive1 },
    { text: 'Spectacular', image: Positive2 },
    { text: 'Impactful', image: Positive3 },
  ]);

  // Function to delete a grading based on its text
  const deleteGrading = (gradeText , onClose) => {
    setGradings(gradings.filter(grade => grade.text !== gradeText));
  };

  return (
    <Box sx={Styles.cointainer} aria-label='body'>
      <Stack sx={Styles.popup} aria-label='popup'>
        <Stack direction="row" justifyContent="space-between" paddingBottom="20px">
          <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Setup grading</Typography>
          <CloseOutlinedIcon
            onClick={onClose}
            sx={{ alignSelf: 'center', cursor: 'pointer' }}
          />
        </Stack>
        <Divider sx={{height:'100%'}} />
        <Stack paddingTop="16px" height="400px" overflow="auto" aria-label='display grades' sx={{
            '&::-webkit-scrollbar': {
            display: 'none',  // Hides scrollbar in webkit browsers (Chrome, Safari, Edge)
            },
            scrollbarWidth: 'none', // Hides scrollbar in Firefox
        }}>
          <Typography sx={{ fontSize: '12px', color: theme.palette.text.secondary }}>
            Please feel free to edit the grading titles :)
          </Typography>
          <Stack
            spacing={1}
            paddingTop="16px"
            >
            {gradings.map((grade, index) => (
              <SelectGradings
                key={index}
                gradeImage={grade.image}
                grade={grade.text}
                onCloseClick={() => deleteGrading(grade.text)} // Pass the text as identifier
              />
            ))}
          </Stack>
        </Stack>
        <Box display="flex" justifyContent="flex-end">
          <Stack direction="row" spacing={2} width="170px" paddingTop="20px">
            <StyledButton size="small" text="Cancel" onClick={onClose} variant="outlined" sx={{ width: '100%' }} />
            <StyledButton
              size="small"
              text="Save"
              onClick={() => {
                markCompleted();
                onClose();
              }}
              sx={{ width: '100%' }}
            />  
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default SetupGrading;
