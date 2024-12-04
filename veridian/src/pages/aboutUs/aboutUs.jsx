import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import VeridianImage from '../../assets/veritianImage.jpg';
import { Styles } from './styles';
import AboutUsDetails from '../../components/aboutUsDetails';
import ExcellenceIcon from '../../assets/excellenceIcon.jpg';
import InitiativeIcon from '../../assets/initiativeIcon.jpg';
import IntegrityIcon from '../../assets/integrityIcon.jpg';
import SustainabilityIcon from '../../assets/sustainabilityIcon.jpg';

function AboutUs() {
  const aboutUsInfo = [
    {
      Header : 'Excellence',
      Icon: ExcellenceIcon,
      Message:
        'We strive for excellence by continuously honing our skills & expanding our knowledge. Our commitment to excellence drives innovation and quality, setting us apart as leaders in our field.',
    },
    {
      Header : 'Initiative',
      Icon: InitiativeIcon,
      Message:
        'We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities for growth. We drive creativity and transformative solutions.',
    },
    {
      Header : 'Sustainability',
      Icon: SustainabilityIcon,
      Message:
        'We are dedicated to sustainable practices that positively impact our community and environment. Our commitment to responsibility ensures we contribute to a better future for generations to come.',
    },
    {
      Header : 'Integrity',
      Icon: IntegrityIcon,
      Message:
        'We operate with honesty and uphold the highest ethical standards. Integrity is the cornerstone of our business, guiding our actions and decisions to earn the trust of our clients and partners.',
    },
  ];

  return (
    <Stack direction="column" sx={{ width: '100%', margin: 'auto' }}>
      {/* Top Section */}
      <Stack direction="row" spacing={3} sx={{ marginBottom: '20px' }}>
        {/* Left Image */}
        <Box sx={{ flex: 1 }}>
          <img src={VeridianImage} alt="Veridian" style={{ width: '100%', borderRadius: '8px' }} />
        </Box>

        {/* Right Text */}
        <Stack spacing={2} sx={{ flex: 2 }}>
          <Typography sx={Styles.textStyle}>
            Veridian is an investment, management, and development company based in Gibraltar. We
            create value in our investments by leveraging our own experience, using tried-and-true
            strategies and extensive industry expertise.
          </Typography>
          <Typography sx={Styles.textStyle}>
            We work with our business management team to develop and implement tailored strategies
            focused on strong products with powerful sales, to develop profit-generating growth
            models. Value creation is fundamental to our goal and we develop our businesses with
            this in mind.
          </Typography>
          <Typography sx={Styles.textStyle}>
            Veridian's expertise is delivered with a responsible approach to our business, our team,
            our local community, and the environment.
          </Typography>
        </Stack>
      </Stack>

      {/* Bottom Section: Dynamic Rendering */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '30px',
        }}
      >
        {aboutUsInfo.map((info, index) => (
          <AboutUsDetails
            key={index}
            header={info.Header}
            aboutUsIcon={info.Icon}
            aboutUsMessage={info.Message}
          />
        ))}
      </Box>
    </Stack>
  );
}

export default AboutUs;
