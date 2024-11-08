import CssBaseline from '@mui/material/CssBaseline';
import { Box, FormControl, FormLabel, Input, Stack, ThemeProvider } from '@mui/material';
import StyledButton from './components/buttons/styledButton';
import LightTheme from './components/themes/lightTheme';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import StyledIconButton from './components/buttons/styledIconButton'
import SignUpWithGoogle from './components/buttons/signUpWithGoogle'
import Notification from './components/notification/notification';
import GoogleLogo from './assets/googleIcon.svg';
import UserEntry from './screens/userEntry/userEntry';
import GetUserInformation from './screens/userEntry/getUserInformation/getUserInformation'
import { AppRouter } from './router';
import Steps from './screens/steps/steps';
import SetupSignals from './screens/signalsGrading/setupSignals';
import SetupGrading from './screens/signalsGrading/setupGrading';
// import FeedbackType from './components/feedbackType';
// import Temp from './components/temp'
import { GlobalFunctionProvider } from './components/snackbar/snackbar';  // import the provider
function App() {
  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={LightTheme}>
      <GlobalFunctionProvider>
      <AppRouter/> 
      </GlobalFunctionProvider>

      {/* <UserEntry/> */}
            
      {/* <UserEntry/>   */}
      {/* <Steps/> */}
      {/* <SetupSignals/> */}
      {/* <SetupGrading/> */}

    </ThemeProvider>
    </>
  )
}

export default App ;
