import { createSlice } from "@reduxjs/toolkit";
import Negative1 from '../../assets/Negative1.svg';
import Negative2 from '../../assets/Negative2.svg';
import Negative3 from '../../assets/Negative3.svg';
import Neutral0 from '../../assets/Neutral0.svg';
import Positive1 from '../../assets/Positive1.svg';
import Positive2 from '../../assets/Positive2.svg';
import Positive3 from '../../assets/Positive3.svg';

const initialState = {
    Signals: ['Communication', 'Efficiency', 'Time Management', 'Attitude', 'Unavailability'],
    Gradings: [
        { text: 'Completely away', image: Negative1 },
        { text: 'Need to improve a lot', image: Negative2 },
        { text: 'Need to improve', image: Negative3 },
        { text: 'Good', image: Neutral0 },
        { text: 'Very Good', image: Positive1 },
        { text: 'Spectacular', image: Positive2 },
        { text: 'Impactful', image: Positive3 },
    ],
};

const signalsGradingsSlice = createSlice({
    name: 'grading',
    initialState: initialState,
    reducers: {
        setSignals: (state, action) => {
            state.Signals.unshift(action.payload); // Add to the start of the list
        },
        removeSignals: (state, action) => {
            state.Signals = state.Signals.filter((x) => x !== action.payload); // Remove from Signals
        },
        removeGradings: (state, action) => {
            state.Gradings = state.Gradings.filter((x) => x.text !== action.payload); // Remove from Grading by text
        },
    },
});

export const { setSignals, removeSignals, removeGradings } = signalsGradingsSlice.actions;
export default signalsGradingsSlice.reducer;
