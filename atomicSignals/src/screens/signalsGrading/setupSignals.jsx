import { useTheme } from '@emotion/react';
import { alpha, Box, Divider, Fab, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddedSignals from './addedSignals';
import StyledButton from '../../components/buttons/styledButton';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSignals, removeSignals } from '../../store/slices/signalsGradingsSlice'; // Adjust the path
import { Styles } from './styles';

function SetupSignals({ onClose, markCompleted }) {
  const [addSignal, setAddSignal] = useState('');
  const theme = useTheme();
  const navigate = useNavigate();

  // Access Redux state
  const addedSignals = useSelector((state) => state.grading.Signals);

  // Get Redux dispatch
  const dispatch = useDispatch();

  const handleAddSignal = () => {
    if (addSignal && !addedSignals.includes(addSignal)) {
      dispatch(setSignals(addSignal)); // Add signal to Redux state
      setAddSignal(''); // Clear input field after adding
    }
  };

  const removeAddedSignal = (signalToRemove) => {
    dispatch(removeSignals(signalToRemove)); // Remove signal from Redux state
  };

  return (
    <Box sx={Styles.cointainer} aria-label="body">
      <Stack sx={Styles.popup} aria-label="popup">
        <Stack direction="row" justifyContent="space-between" paddingBottom="20px">
          <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Setup signals</Typography>
          <CloseOutlinedIcon
            onClick={onClose} // Close overlay on click
            sx={{ alignSelf: 'center', cursor: 'pointer' }}
          />
        </Stack>
        <Divider />
        <Stack paddingTop="20px" aria-label="add signals">
          <Typography sx={{ fontSize: '12px', color: theme.palette.text.primary }}>Signal name</Typography>
          <Box sx={{ position: 'relative', maxWidth: 500, paddingTop: '8px' }}>
            <TextField
              multiline
              rows={3}
              variant="outlined"
              fullWidth
              value={addSignal}
              onChange={(e) => setAddSignal(e.target.value)}
              placeholder="Ex: Communication, Attitude, Efficiency etc"
              sx={{
                '& .MuiInputBase-input': {
                  fontSize: '14px',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent',
                  border: `1px solid ${alpha(theme.palette.text.disabled, 1)}`,
                },
              }}
            />
            <Fab
              size="small"
              disableRipple
              onClick={handleAddSignal}
              sx={{
                '&:hover': {
                  backgroundColor: alpha(theme.palette.success.main, 0.7),
                },
                '&:focus, &:active': {
                  outline: 'none',
                  boxShadow: 'none',
                },
                color: theme.palette.secondary.textColor,
                backgroundColor: theme.palette.success.main,
                width: '24px',
                height: '24px',
                minHeight: 'unset',
                outline: 'none',
                boxShadow: 'none',
                position: 'absolute',
                bottom: 8,
                right: 8,
                zIndex: 0,
              }}
            >
              <AddOutlinedIcon sx={{ width: '18px', height: '18px' }} />
            </Fab>
          </Box>
        </Stack>
        <Box>
          <Stack justifyContent="space-between" direction="row" paddingTop="16px" aria-label="display signals">
            <Typography sx={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Added signals ({addedSignals.length})</Typography>
            <Typography sx={{ color: theme.palette.text.secondary, fontSize: '10px', whiteSpace: 'nowrap' }}>
              Feel free to remove the signals we have added for you :)
            </Typography>
          </Stack>
          <Stack
            spacing={1}
            height="180px"
            paddingTop="8px"
            sx={{
              overflowY: 'scroll',
              '&::-webkit-scrollbar': { display: 'none' },
              '-ms-overflow-style': 'none',
              scrollbarWidth: 'none',
            }}
          >
            {addedSignals.map((signal, key) => (
              <AddedSignals key={key} text={signal} removeAddedSignal={removeAddedSignal} />
            ))}
          </Stack>
        </Box>
        <Box display="flex" justifyContent="flex-end" aria-label="cancel/save">
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

export default SetupSignals;
