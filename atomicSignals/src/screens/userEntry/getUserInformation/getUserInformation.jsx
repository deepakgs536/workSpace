import { Box, Stack, Typography, Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import BrandIcon from '../../../assets/brandIcon' ;
import FeedbackTool from '../../../assets/feedbackTool';
import FeedbackStructure from './feedbackStructure';
import StyledButton from '../../../components/buttons/styledButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useTheme } from '@emotion/react';
import TextFieldComponent from '../../../components/textField/textField';
import { useNavigate } from 'react-router-dom';

function GetUserInformation() {
    const [selected, setSelected] = useState({
        'reportingTo': {
            'status': true,
            'message': 'Only reporting managers can give feedback',
        },
        'peerToPeer': {
            'status': false,
            'message': 'Team members can give feedback to another team member except the reporting manager'
        },
        'degree': {
            'status': false,
            'message': 'Team members can give feedback to another team member including the reporting manager'
        },
    });

    const options = ['CEO', 'Manager','Employee'];
    const theme = useTheme();
    const navigate = useNavigate();
    const handleFeedbackChange = (ariaLabel) => {
        setSelected(prevSelected => ({
            'reportingTo': { ...prevSelected.reportingTo, status: false },
            'peerToPeer': { ...prevSelected.peerToPeer, status: false },
            'degree': { ...prevSelected.degree, status: false },
            [ariaLabel]: { ...prevSelected[ariaLabel], status: true }
        }));
    };

    const activeMessage = Object.values(selected).find(item => item.status)?.message || '';
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    return (
        <Box width="100vw" height="100vh" sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            bgcolor: '#F8F8F8',
        }}>
            <Stack width="40%" minWidth='420px' ariaLabel='message'>
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

            <Stack spacing={1.5} width="32%" minWidth='420px' maxWidth='450px' ariaLabel='almost-there'>
                <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Almost there!</Typography>

                <TextFieldComponent
                    type='text' label='Your name' placeholder='Sam Parker'
                />

                <Stack>
                <Typography sx={{ fontSize: '12px', marginBottom: '4px' }}>
                    Designation
                    <span style={{ color: 'red' }}> *</span>
                </Typography>
                <Autocomplete
                    freeSolo
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                    id="controllable-states-demo"
                    options={options}
                    disableClearable
                    openIcon={null}
                    sx={{
                        fontSize: '14px',
                        width: '100%',
                    }}
                    
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        placeholder="CEO, Manager, etc"
                        inputProps={{
                            ...params.inputProps,
                            readOnly: true,  // Disable typing by making the field read-only
                        }}
                        
                        sx={{
                            borderRadius: '4px',
                            bgcolor: '#FFFFFF',
                            width: '100%',
                            height:'50%',
                            '& .MuiInputBase-input': {
                            fontSize:'14px',
                            color: theme.palette.text.primary,
                            pointerEvents: 'none', // Prevent cursor and any interaction
                            },
                            '& .MuiInputBase-root': {
                            padding: '3px 5px', // Remove padding around the input field itself
                            }
                        }}
                        />
                    )}
                />
                </Stack>

                <TextFieldComponent
                    type='password' label='Set password' placeholder='P@ssw0rd'
                />
                <TextFieldComponent
                    type='email' label='Workspace name' placeholder='Company name'
                    endAdornmentText='@atomicsignals.com'  // Ensure this prop is handled in your TextFieldComponent
                />

                <Stack spacing={1}>
                    <Typography sx={{ fontSize: '12px' }}>
                        What type of feedback structure would you like to implement?
                        <span style={{ color: 'red' }}> *</span>
                    </Typography>
                    <Stack
                        direction="row"
                        height="120px"
                        width="100%"
                        sx={{ justifyContent: 'space-between' }}
                    >
                        <FeedbackStructure
                            selected={selected.reportingTo.status}
                            ariaLabel="Reporting to"
                            onClick={() => handleFeedbackChange('reportingTo')}
                        />
                        <FeedbackStructure
                            selected={selected.peerToPeer.status}
                            ariaLabel="Peer to peer"
                            onClick={() => handleFeedbackChange('peerToPeer')}
                        />
                        <FeedbackStructure
                            selected={selected.degree.status}
                            ariaLabel="360°"
                            onClick={() => handleFeedbackChange('degree')}
                        />
                    </Stack>

                    <Stack direction={'row'}>
                        <InfoOutlinedIcon sx={{
                            color: theme.palette.success.main,
                            width: '12px', height: '12px',
                            alignSelf: 'top',
                            margin: '3px 8px 0 0'
                        }} />
                        <Typography sx={{ minHeight: '36px', fontSize: '12px' }}>
                            {activeMessage}
                        </Typography>
                    </Stack>
                </Stack>

                <StyledButton text='Lets dive in' onClick={() => navigate('/dashboard')}/>
            </Stack>
        </Box>
    );
}

export default GetUserInformation;
