import { useGlobalFunction } from '../../../components/snackbar/snackbar';
import { Box, Stack, Typography, Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import BrandIcon from '../../../assets/brandIcon';
import FeedbackTool from '../../../assets/feedbackTool';
import FeedbackStructure from './feedbackStructure';
import StyledButton from '../../../components/buttons/styledButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useTheme } from '@emotion/react';
import TextFieldComponent from '../../../components/textField/textField';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks
import { setUserName, setUserEmail, setUserPassword, setDesignation, setFeedbackStructure ,setWorkspaceName } from '../../../store/slices/userSlice'; // Import actions
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

function GetUserInformation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { myFunction } = useGlobalFunction();

    // Access Redux state
    const { selected, feedbackStructureSelected, name, designation, password, email , workspaceName } = useSelector(
        (state) => state.userdetail
    );

    const options = ['CEO', 'Manager', 'Employee'];
    const theme = useTheme();

    // Local state for Autocomplete input
    const [inputValue, setInputValue] = useState('');

    // Handle feedback structure change
    const handleFeedbackChange = (ariaLabel) => {
        dispatch(setFeedbackStructure(ariaLabel)); // Dispatch Redux action to change feedback structure
    };

    // Handle form submission
    const handleUserInfoSubmit = () => {
        if (
            name.trim() !== "" &&
            designation.trim() !== ""  &&// Validate designation
            password.trim().length >= 8 && 
            workspaceName.trim() !== ""
            // email.trim() !== "" 
        ) {
            myFunction(true, 'Kudos! You’re into building the right feedback culture' , 'success');
            navigate('/steps'); // Navigate to the next step
        } 
        else {
            myFunction(false,'Please fill all fields correctly','error');
        }
    };

    const activeMessage = feedbackStructureSelected || '';

    return (
        <Box
            width="100vw"
            height="100vh"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                bgcolor: '#F8F8F8',
            }}
        >
            {/* Left Section */}
            <Stack width="40%" minWidth="420px" aria-label="message">
                <BrandIcon width="230px" height="42.02px" />
                <Box sx={{ margin: '1rem 0' }}>
                    <FeedbackTool width="385.27px" height="154.03px" />
                </Box>
                <Typography sx={{ fontSize: '14.6px', color: theme.palette.text.primary }}>
                    “I think it’s very important to have a feedback loop, where you’re constantly
                    thinking about what you’ve done and how you could be doing it better.”
                </Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: 600, marginTop: '8px' }}>
                    -Elon Musk
                </Typography>
            </Stack>

            {/* Right Section */}
            <Stack spacing={1.5} width="32%" minWidth="420px" maxWidth="450px" aria-label="almost-there">
                <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Almost there!</Typography>

                {/* Name Field */}
                <TextFieldComponent
                    type="text"
                    label="Your name"
                    placeholder="Sam Parker"
                    value={name} // Controlled from Redux state
                    onChange={(e) => {
                        dispatch(setUserName(e.target.value)); // Update Redux state
                    }}
                    />


                {/* Designation Field */}
                <Stack>
                    <Typography sx={{ fontSize: '12px', marginBottom: '4px' }}>
                        Designation
                        <span style={{ color: 'red' }}> *</span>
                    </Typography>

                    <Autocomplete
                        freeSolo
                        value={designation} // Bind to Redux state
                        onChange={(event, newValue) => {
                            dispatch(setDesignation(newValue)); // Dispatch action to set designation
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                        options={options}
                        disableClearable
                        sx={{ fontSize: '14px', width: '100%' }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="CEO, Manager, etc"
                                sx={{
                                    borderRadius: '4px',
                                    bgcolor: '#FFFFFF',
                                    width: '100%',
                                    '& .MuiInputBase-input': {
                                        fontSize: '14px',
                                        color: theme.palette.text.primary,
                                    },
                                    '& .MuiInputBase-root': {
                                        padding: '3px 5px',
                                    },
                                }}
                            />
                        )}
                    />
                </Stack>

                {/* Password Field */}
                <TextFieldComponent
                    type="password"
                    label="Set password"
                    placeholder="P@ssw0rd"
                    value={password}
                    onChange={(e) => dispatch(setUserPassword(e.target.value))} // Dispatch Redux action
                />

                {/* Email Field */}
                <TextFieldComponent
                    type="email"
                    label="Workspace name"
                    placeholder="Company name"
                    endAdornmentText="@atomicsignals.com"
                    value={workspaceName}
                    onChange={(e) => dispatch(setWorkspaceName(e.target.value))} // Dispatch Redux action
                />

                {/* Feedback Structure */}
                <Stack spacing={1}>
                    <Typography sx={{ fontSize: '12px' }}>
                        What type of feedback structure would you like to implement?
                        <span style={{ color: 'red' }}> *</span>
                    </Typography>

                    <Stack
                        height="120px"
                        width="100%"
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '10px',
                        }}
                    >
                        <FeedbackStructure
                            feedbackIcon={AccountTreeOutlinedIcon}
                            selected={selected.reportingTo.status}
                            ariaLabel="reportingTo"
                            onClick={() => handleFeedbackChange('reportingTo')}
                        />
                        <FeedbackStructure
                            feedbackIcon={SwapVertOutlinedIcon}
                            selected={selected.peerToPeer.status}
                            ariaLabel="peerToPeer"
                            onClick={() => handleFeedbackChange('peerToPeer')}
                        />
                        <FeedbackStructure
                            feedbackIcon={WidgetsOutlinedIcon}
                            selected={selected.degree.status}
                            ariaLabel="degree"
                            onClick={() => handleFeedbackChange('degree')}
                        />
                    </Stack>

                    <Stack direction="row">
                        <InfoOutlinedIcon
                            sx={{
                                color: theme.palette.success.main,
                                width: '12px',
                                height: '12px',
                                alignSelf: 'top',
                                margin: '3px 8px 0 0',
                            }}
                        />
                        <Typography sx={{ minHeight: '36px', fontSize: '12px' }}>
                            {activeMessage}
                        </Typography>
                    </Stack>
                </Stack>

                <StyledButton text="Let's dive in" onClick={handleUserInfoSubmit} />
            </Stack>
        </Box>
    );
}

export default GetUserInformation;
