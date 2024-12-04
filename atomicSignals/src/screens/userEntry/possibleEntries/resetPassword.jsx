import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import StyledButton from '../../../components/buttons/styledButton';
import TextFieldComponent from '../../../components/textField/textField';
import { useGlobalFunction } from '../../../components/snackbar/snackbar';
import { setUserPassword } from '../../../store/slices/userSlice';
import PropTypes from 'prop-types';

function ResetPassword({ changeUserEntry }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { myFunction } = useGlobalFunction(); // use the hook to get the function

    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleResetPasswordClick = () => {
      if (newPassword.length < 8) {
          myFunction(false, 'Password must be at least 8 characters', 'error');
          return;
      }
      if (newPassword !== confirmNewPassword) {
          myFunction(false, 'Passwords do not match', 'error');
          return;
      }
      dispatch(setUserPassword(newPassword));
      myFunction(true, 'Password Reset Successfully', 'success');
      setTimeout(() => {
          changeUserEntry('logIn');
      }, 1000);
  };
  

    return (
        <>
            <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
                Reset Password
            </Typography>
            <Typography sx={{ fontSize: '14px', color: theme.palette.text.secondary }}>
                Please provide a new password for your account
            </Typography>

            <TextFieldComponent
                type="password"
                label="New password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextFieldComponent
                type="password"
                label="Confirm new password"
                placeholder="Confirm new password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <StyledButton text="Reset Password" onClick={handleResetPasswordClick} />
        </>
    );
}

ResetPassword.propTypes = {
    changeUserEntry: PropTypes.func.isRequired,
};

export default ResetPassword;
