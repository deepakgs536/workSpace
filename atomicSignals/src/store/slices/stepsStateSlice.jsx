import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepsState: {
    1: { active: true, completed: false }, // Initially active and not completed
    2: { active: false, completed: false },
    3: { active: false, completed: false },
  },
  activeOverlay: "",
  hasNavigatedDashboard : false ,

};

const StepStateSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    setStepsState: (state, action) => {
      const stepNum = action.payload;

      // Mark the current step as completed and inactive
      if (state.stepsState[stepNum]) {
        state.stepsState[stepNum].completed = true;
        state.stepsState[stepNum].active = false;
      }

      // Activate the next step if it exists and is not completed
      if (state.stepsState[stepNum + 1] && !state.stepsState[stepNum + 1].completed) {
        state.stepsState[stepNum + 1].active = true;
      }
    },
    setActiveOverlay: (state, action) => {
        state.activeOverlay = action.payload; // Updates the activeOverlay state
    },
    setHasNavigatedToDashboard : (state) => {
      state.hasNavigatedDashboard = true ;    
    },
  },
});

export const { setStepsState, setActiveOverlay ,setHasNavigatedToDashboard } = StepStateSlice.actions;

export default StepStateSlice.reducer;
