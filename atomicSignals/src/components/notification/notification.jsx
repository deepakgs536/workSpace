import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Stack, IconButton, Typography } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const StyledNotificationIcon = styled(IconButton)(({ theme }) => ({
    pointerEvents: 'none', // Disable pointer events if you want it unclickable
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.light, 0.15),
    borderRadius: '5px',
    padding: '5px',
}));

const StyledCloseIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    borderRadius: '50%',
    padding: '5px',
    margin: '0',
    '&:focus': {
        outline: 'none',
    },
}));

const StyledDateTime = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.disabled,
    fontSize: '14px',
}));

const StyledNotificationFrom = styled(Typography)(({ theme }) => ({
    padding: '0',
    margin: '0',
    color: theme.palette.text.primary,
    fontSize: '16px',
}));

const StyledNotificationContainer = {
    width: '350px',
    padding: '10px',
    position: 'relative',
    transition: 'background-color 0.3s',
    backgroundColor: 'transparent',
};

const Notification = (props) => {
    const { date, time, fromName, fromNameRole, message, onClick, onCloseClick } = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Stack
            direction="row"
            alignItems="flex-start"
            spacing={2}
            component="notification"
            sx={StyledNotificationContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick} // Attach onClick to the entire container
        >
            <StyledNotificationIcon>
                <NotificationsOutlinedIcon />
            </StyledNotificationIcon>

            <Stack spacing={0.5} width="100%">
                <Stack direction="row" alignItems="center" width="100%" justifyContent="space-between">
                    <StyledDateTime>
                        {date.day} {date.month} {date.year} {time.hour}:{time.minute} {time.noon}
                    </StyledDateTime>
                    <StyledCloseIcon
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent the click from propagating to the container
                            onCloseClick(); // Trigger the close icon's onClick action
                        }}
                        sx={{
                            opacity: isHovered ? 1 : 0,
                            visibility: isHovered ? 'visible' : 'hidden',
                            transition: 'opacity 0.3s',
                        }}
                    >
                        <CloseOutlinedIcon />
                    </StyledCloseIcon>
                </Stack>
                <Stack>
                    <StyledNotificationFrom>
                        {message} <span style={{ fontWeight: 'bold' }}>{fromName}</span>
                    </StyledNotificationFrom>
                    <StyledNotificationFrom>
                        ({fromNameRole})
                    </StyledNotificationFrom>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Notification;
