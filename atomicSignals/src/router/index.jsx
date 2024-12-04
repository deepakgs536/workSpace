import React from 'react';
import { Router } from './routers';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; // Import from react-router-dom
import UserEntry from '../screens/userEntry/userEntry'; // UserEntry component
import GetUserInformation from '../screens/userEntry/getUserInformation/getUserInformation';
import Dashboard from '../screens/Dashboard/dashboard';
import Steps from '../screens/steps/steps';
// import LogIn from '../screens/userEntry/possibleEntries/logIn';
// import SignUp from '../screens/userEntry/possibleEntries/signUp';
// import ForgetPassword from '../screens/userEntry/possibleEntries/forgetPassword';
// import ResetPassword from '../screens/userEntry/possibleEntries/resetPassword';
// import SetupSignals from '../screens/signalsGrading/setupSignals';
// import SetupGrading from '../screens/signalsGrading/setupGrading';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Router.userEntry} element={<UserEntry />} />
        <Route path={Router.dashboard} element={<Dashboard/>}/>
        <Route path={Router.getUserInformation} element={<GetUserInformation />} />
        <Route path={Router.steps} element={<Steps/>} /> 
        
      </Routes>
    </BrowserRouter>
  );
}
