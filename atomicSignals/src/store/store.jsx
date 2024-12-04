import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './slices/userSlice';
import StepsStateSlice from './slices/stepsStateSlice';
import signalsGradingSlice from './slices/signalsGradingsSlice'

const store = configureStore({
    reducer:{
        userdetail : UserSlice ,
        stepState : StepsStateSlice ,   
        grading : signalsGradingSlice ,
    }
})
export default store ;