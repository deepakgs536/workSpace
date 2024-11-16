import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; // Import from react-router-dom
import UserEntry from '../screens/userEntry/userEntry'; // UserEntry component
import LogIn from '../screens/userEntry/possibleEntries/logIn';
import SignUp from '../screens/userEntry/possibleEntries/signUp';
import ForgetPassword from '../screens/userEntry/possibleEntries/forgetPassword';
import ResetPassword from '../screens/userEntry/possibleEntries/resetPassword';
import GetUserInformation from '../screens/userEntry/getUserInformation/getUserInformation';
import Dashboard from '../screens/Dashboard/dashboard';
import Steps from '../screens/steps/localStorage';
import SetupSignals from '../screens/signalsGrading/setupSignals';
import SetupGrading from '../screens/signalsGrading/setupGrading';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserEntry />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/setupSignals' element={<SetupSignals />} />
        <Route path='/setupGrading' element={<SetupGrading />} />
        <Route path="/userEntry/information" element={<GetUserInformation />} />
        <Route path='/steps' element={<Steps/>} /> 
        
      </Routes>
    </BrowserRouter>
  );
}
