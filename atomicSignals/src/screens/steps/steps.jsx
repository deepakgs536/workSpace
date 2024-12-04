import { Stack, Typography } from '@mui/material';
import React, { useEffect, useRef} from 'react';
import FollowSteps from './followSteps';
import { useNavigate } from 'react-router-dom';
import SetupSignals from '../signalsGrading/setupSignals';
import SetupGrading from '../signalsGrading/setupGrading';
import MetricsImage from '../../assets/metrics.svg';
import PillarImage from '../../assets/pillar.svg';
import TeamImage from '../../assets/team.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setStepsState, setActiveOverlay , setHasNavigatedToDashboard } from "../../store/slices/stepsStateSlice";

function Steps() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { activeOverlay, stepsState , hasNavigatedDashboard } = useSelector((state) => state.stepState);

    useEffect(() => {
        // Check if we need to navigate to the dashboard
        if (stepsState[3]?.completed && !hasNavigatedDashboard) {
            dispatch(setHasNavigatedToDashboard())   // Prevent further navigation
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        }
    }, [stepsState, navigate]);

    const steps = [
        {
            stepNum: 1,
            stepTitle: 'Setup Signals',
            stepDescription:
                'Signals are attributes against which you can give feedback to someone (Eg. Attitude, Efficiency...)',
            buttonText: 'Add signals',
            componentName: 'SetupSignalsOverlay',
            completedMessage: 'signals',
            image: MetricsImage,
            onClick: () => dispatch(setActiveOverlay('SetupSignalsOverlay')),
        },
        {
            stepNum: 2,
            stepTitle: 'Setup Grading',
            stepDescription:
                'Grading is a framework which you can use while giving feedback (Eg. Inefficient, Neutral...)',
            buttonText: 'Add grading',
            componentName: 'SetupGradingOverlay',
            completedMessage: 'grading',
            image: PillarImage,
            onClick: () => dispatch(setActiveOverlay('SetupGradingOverlay')),
        },
        {
            stepNum: 3,
            stepTitle: 'Import Team Members',
            stepDescription: 'The power is with the people always, you can import and bring them here',
            buttonText: 'Import team members',
            componentName: 'ImportTeamOverlay',
            completedMessage: 'your team',
            image: TeamImage,
            onClick: () => {
                dispatch(setStepsState(3)); // Mark step 3 as completed
                setTimeout(() => {
                    navigate('/dashboard');
                }, 1000);
            },
        },
                  ];

    const overlay = (() => {
        switch (activeOverlay) {
            case 'SetupSignalsOverlay':
                return (
                    <SetupSignals
                        onClose={() => dispatch(setActiveOverlay(null))}
                        markCompleted={() => dispatch(setStepsState(1))}
                    />
                );
            case 'SetupGradingOverlay':
                return (
                    <SetupGrading
                        onClose={() => dispatch(setActiveOverlay(null))}
                        markCompleted={() => dispatch(setStepsState(2))}
                    />
                );
            default:
                return null;
        }
    })();

    return (
        <Stack
            sx={{
                width: '100vw',
                height: '100vh',
                backgroundColor: '#fafafa',
                padding: '20px',
            }}
        >
            <Typography
                sx={{
                    fontSize: '20px',
                    fontWeight: 500,
                    textShadow: '0.3px 0.3px 0px rgba(0, 0, 0, 1)',
                }}
            >
                Hi Sam!
            </Typography>
            <Typography sx={{ fontSize: '16px', margin: '4px 0 22px 0' }}>
                Let’s set up your organization in a jiffy
            </Typography>

            {/* Steps Container */}
            <Stack direction="row" justifyContent="space-between" spacing={1}>
                {steps.map((step) => (
                    <FollowSteps
                        key={step.stepNum}
                        stepNum={step.stepNum}
                        stepTitle={step.stepTitle}
                        stepDescription={step.stepDescription}
                        buttonText={step.buttonText}
                        active={stepsState[step.stepNum]?.active}
                        completed={stepsState[step.stepNum]?.completed}
                        completedMessage={step.completedMessage}
                        onClick={step.onClick}
                        image={step.image}
                        onClickSkip={() => dispatch(setStepsState(step.stepNum))}
                    />
                ))}
            </Stack>

            {/* Render Overlay */}
            {overlay}
        </Stack>
    );
}

export default Steps;
