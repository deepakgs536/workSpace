import { Box, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import FollowSteps from './followSteps';
import { useNavigate } from 'react-router-dom';
import SetupSignals from '../signalsGrading/setupSignals';
import SetupGrading from '../signalsGrading/setupGrading';
import MetricsImage from '../../assets/metrics.svg';  // Importing JSX components
import PillarImage from '../../assets/pillar.svg';
import TeamImage from '../../assets/team.svg';
import NextIcon from '../../assets/nextIcon.jsx';

function Steps() {
  const navigate = useNavigate();

  // Get the stored state from localStorage (or set initial state)
  const storedState = JSON.parse(localStorage.getItem('stepsState')) || {
    1: { active: true, completed: false },
    2: { active: false, completed: false },
    3: { active: false, completed: false },
  };

  // State for tracking active and completed status of steps
  const [stepsState, setStepsState] = useState(storedState);

  useEffect(() => {
    // Whenever stepsState changes, update it in localStorage
    localStorage.setItem('stepsState', JSON.stringify(stepsState));
  }, [stepsState]);

  const steps = [
    {
      stepNum: 1,
      stepTitle: 'Setup Signals',
      stepDescription:
        'Signals are attributes against which you can give feedback to someone (Eg. Attitude, Efficiency...)',
      buttonText: 'Add signals',
      componentName: 'SetupSignalsOverlay',
      completedMessage : 'signals',
      image : MetricsImage ,
      onClick: () => setActiveOverlay('SetupSignalsOverlay'),
    },
    {
      stepNum: 2,
      stepTitle: 'Setup Grading',
      stepDescription:
        'Grading is a framework which you can use while giving feedback (Eg. Inefficient, Neutral...)',
      buttonText: 'Add grading',
      componentName: 'SetupGradingOverlay',
      completedMessage : 'grading',
      image : PillarImage ,
      onClick: () => setActiveOverlay('SetupGradingOverlay'),
    },
    {
      stepNum: 3,
      stepTitle: 'Import Team Members',
      stepDescription: 'The power is with the people always, you can import and bring them here',
      buttonText: 'Import team members',
      componentName: 'ImportTeamOverlay',
      completedMessage : 'your team',
      image : TeamImage ,
      onClick: () => {
        markStepCompleted(3); // Mark step 3 as completed
        setTimeout(() => {
            navigate('/dashboard'); // Navigate to the dashboard after a delay
        }, 1000); // Delay of 1 second (1000 milliseconds)
    },
    },
  ];

  const [activeOverlay, setActiveOverlay] = useState(null);

  const markStepCompleted = (stepNum) => {
    setStepsState((prev) => {
      const newState = { ...prev };

      // Mark the current step as completed and inactive
      newState[stepNum] = { ...newState[stepNum], completed: true, active: false };

      // Only activate the next step if it has not already been completed
      if (newState[stepNum + 1] && !newState[stepNum + 1].completed) {
        newState[stepNum + 1] = { ...newState[stepNum + 1], active: true };
      }

      // Save the updated state to localStorage
      localStorage.setItem('stepsState', JSON.stringify(newState));

      return newState;
    });
  };

  const overlay = (() => {
    switch (activeOverlay) {
      case 'SetupSignalsOverlay':
        return (
          <SetupSignals
            onClose={() => setActiveOverlay(null)}
            markCompleted={() => markStepCompleted(1)}
          />
        );
      case 'SetupGradingOverlay':
        return (
          <SetupGrading
            onClose={() => setActiveOverlay(null)}
            markCompleted={() => markStepCompleted(2)}
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
      <Typography sx={{ fontSize: '20px', fontWeight: 500, textShadow: '0.3px 0.3px 0px rgba(0, 0, 0, 1)' }}>
        Hi Sam!
      </Typography>
      <Typography sx={{ fontSize: '16px', margin: '4px 0 22px 0' }}>
        Let’s set up your organization in a jiffy
      </Typography>

      {/* Container Box */}
      <Stack direction="row" justifyContent="space-between" spacing={1}>
        {steps.map((step) => (
          <FollowSteps
            key={step.stepNum}
            stepNum={step.stepNum}
            stepTitle={step.stepTitle}
            stepDescription={step.stepDescription}
            buttonText={step.buttonText}
            active={stepsState[step.stepNum].active} // Pass active state as a prop
            completed={stepsState[step.stepNum].completed} // Pass completed state as a prop
            completedMessage={step.completedMessage}
            onClick={step.onClick}
            onClickSkip={() => markStepCompleted(step.stepNum)} // Wrap in a function to prevent immediate invocation
            image = {step.image}
          />
        ))}
      </Stack>

      {/* Render Overlay */}
      {overlay}

    </Stack>
  );
}

export default Steps;
