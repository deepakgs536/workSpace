import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import SelectGradings from './selectGradings';
import StyledButton from '../../components/buttons/styledButton';
import { useSelector, useDispatch } from 'react-redux';
import { removeGradings} from '../../store/slices/signalsGradingsSlice'; // Adjust the path
import { Styles } from './styles';

function SetupGrading({ onClose, markCompleted }) {
  const theme = useTheme();
  const navigate = useNavigate();

  // Access Redux state
  const gradings = useSelector((state) => state.grading.Gradings);

  // Get Redux dispatch
  const dispatch = useDispatch();

  // Function to delete a grading
  const handleDeleteGrading = (gradeText) => {
    dispatch(removeGradings(gradeText));
  };

  return (
    <Box sx={Styles.cointainer} aria-label="body">
      <Stack sx={Styles.popup} aria-label="popup">
        <Stack direction="row" justifyContent="space-between" paddingBottom="20px">
          <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Setup grading</Typography>
          <CloseOutlinedIcon
            onClick={onClose}
            sx={{ alignSelf: 'center', cursor: 'pointer' }}
          />
        </Stack>
        <Divider sx={{ height: '100%' }} />
        <Stack
          paddingTop="16px"
          height="400px"
          overflow="auto"
          aria-label="display grades"
          sx={{
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
          }}
        >
          <Typography sx={{ fontSize: '12px', color: theme.palette.text.secondary }}>
            Please feel free to edit the grading titles :)
          </Typography>
          <Stack spacing={1} paddingTop="16px">
            {gradings.map((grade, index) => (
              <SelectGradings
                key={index}
                gradeImage={grade.image}
                grade={grade.text}
                onCloseClick={() => handleDeleteGrading(grade.text)}
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
