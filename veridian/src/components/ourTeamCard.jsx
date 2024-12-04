import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import OurTeamMember1 from '../assets/ourTeamMember1.jpg';
import { NoEncryption } from '@mui/icons-material';

function OurTeamCard() {
  return (
    <Box
  sx={{
    textAlign: 'start',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    overflow: 'hidden', // Ensure no scrollbars
    backgroundColor: '#fff',
    minHeight: '350px', // Set enough height to prevent scrolling
  }}>
  {/* Top Center Alignment */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'flex-start', // Align to the top
        width: '60%', // Ensure full width for proper centering
        marginBottom: '16px', // Optional spacing below
        transform: 'skew(20deg)',
        zIndex:10
      }}
    >
      <Typography>Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience. In the internet and iGaming industries – including America Online Inc., AOL Time Warner Inc., PartyGaming Plc and other companies. Julian has a focus on fast growth companies in emerging regulatory environments. Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award winning supplier to the international iGaming and betting industries.</Typography>
    </Box>

      <Stack direction='row' spacing={2} sx={{position:'absolute' , bottom:0,left:'0%' , transform: 'skew(20deg)',zIndex:0}}>
      <img src={OurTeamMember1} alt="member1" style={{zIndex:-10,height:'90%',width:'90%'}}/>
      <Box sx={{alignSelf:'end', whiteSpace: 'nowrap',backgroundColor:'#009065',padding:'10px 50px',transform: 'skew(-40deg)',paddingLeft:'70px',position:'absolute',left:'70%',zIndex:-20}}>
        <Typography sx={{transform: 'skew(20deg)',}}>hello sd f sdf</Typography>
        <Typography sx={{transform: 'skew(20deg)',}}>hello sf sfsf sf sd f sdf</Typography>
      </Box>
      </Stack>

</Box>

  );
}

export default OurTeamCard;



//             <Box>
//               <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                 Julian Jarvis
//               </Typography>
//               <Typography variant="subtitle2" color="text.secondary">
//                 Chairman, Founder and CEO
//               </Typography>
//             </Box>


//             <img
//               src={OurTeamMember1}
//               alt="Julian Jarvis"
//               style={{
//                 position:'relative',
//                 width: '100%', // Adjust the size of the image
//                 height: '100%',
//                 border: '4px solid #fff', // Add a border for aesthetics
//               }}
//             />

// <Typography sx={{ marginBottom: '16px',transform: 'skew(20deg)',}}>
//         Julian is an experienced lawyer, businessman, and investor... Julian is an experienced lawyer, businessman, and investor... Julian is an experienced lawyer, businessman, and investor...an, and investor... Julian is an experienced lawyer,an, and investor... Julian is an experienced lawyer,an, and investor... Julian is an experienced lawyer,
//       </Typography>