import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import VeridianLogo from '../../assets/veridianLogo.jpeg';
import { Divider, Stack, Typography } from '@mui/material';
import Home from '../home/home';
import Shadow from '../../components/shadow';
import AboutUs from '../aboutUs/aboutUs';
import HolisticInvestmentApproach from '../holisticInvestmentApproach/holisticInvestmentApproach';
import ContactUs from '../contactUs/contactUs';
import OurTeam from '../ourTeam/ourTeam';

function Navbar() {
  const [currentTab, setCurrentTab] = React.useState("home");

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);

    // Smooth scroll to the section with the same ID as the value
    const section = document.getElementById(newValue);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box 
      sx={{ 
        width: '100vw', // Full width container
        maxWidth: '100vw', // Prevent any width overflow
        paddingY: '10px', 
        paddingX: '70px',
        boxSizing: 'border-box', // Ensure padding is included in total width
        overflowX: 'hidden', // Prevent horizontal scrolling
      }}
    >
      {/* Sticky Tab List */}
      <Stack
        direction={'row'}
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          backgroundColor: 'white',
          alignItems: 'center',
          width: '100%', // Full width navbar
        }}
      >
        {/* Logo aligned to the left */}
        <Box sx={{ flex: '0' }}>
          <img
            src={VeridianLogo}
            alt="VeridianLogo"
            style={{ maxWidth: '100px', height: 'auto' }}
          />
        </Box>

        {/* Tabs centered */}
        <TabContext value={currentTab}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              display: 'flex',
              ml: 'auto', // Push tabs to fill the remaining space
              mr: 'auto', // Center the tabs
              '& .MuiTab-root': {
                outline: 'none',
                fontSize: '0.875rem',
                textTransform: 'none',
                color: 'inherit',
                fontSize: '16px',
                fontWeight: 600 ,
                padding: '6px 12px',
                minWidth: 'unset',
              },
              '& .MuiTab-root.Mui-selected': {
                color: '#009065', // Apply green color to the selected tab
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#009065',
                height: '5px',
                width: 'max-content',
                minWidth: 'unset',
              },
            }}
          >
            <Tab label="Home" value="home" disableRipple />
            <Tab label="About Us" value="aboutUs" disableRipple />
            <Tab label="Our Team" value="ourTeam" disableRipple />
            <Tab label="Investment Approach" value="investmentApproach" disableRipple />
            <Tab label="Contact Us" value="contactUs" disableRipple />
          </TabList>
        </TabContext>
      </Stack>

      {/* Divider for visual separation */}
      <Divider sx={{ width: '100%', borderBottomWidth: 2 }} />

      {/* Sections corresponding to each tab */}
      <Box id="home" >
        <Box sx={{ position: 'relative', width: '100%',backgroundColor:'#009065', overflow:'hidden' }}>
          {/* Box with Shadow Effect */}
          <Shadow top={-50} left={30} />
          <Shadow bottom={-60} right={30} />
          <Shadow top={-50} right={30} />
          <Shadow bottom={-60} left={30} />
          {/* Home content */}
          <Home />
        </Box>
      </Box>

      <Box id="aboutUs" >
        <Typography variant="h4" color="initial">About Us</Typography>
            <AboutUs/>
      </Box>
      <Box id="ourTeam" sx={{ py: 5 }}>
        <OurTeam/>
      </Box>
      <Box id="investmentApproach" sx={{ py: 5 }}>
        <HolisticInvestmentApproach/>
      </Box>
      <Box id="contactUs" sx={{ py: 5 }}>
        <ContactUs/>
      </Box>
    </Box>
  );
}

export default Navbar;
