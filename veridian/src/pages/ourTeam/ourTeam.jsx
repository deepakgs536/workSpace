import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

import { Box } from '@mui/material';
import OurTeamCard from '../../components/ourTeamCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function OurTeam() {
  const swiperRef = useRef(null); // Create a ref for Swiper instance

  const buttonStyles = {
    position: 'absolute',
    top: '50%',
    zIndex: 10,
    transform: 'translateY(-50%)',
    backgroundColor: '#11423f',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#FFFFFF',
    fontSize: '18px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(17, 66, 63, 0.9)', // Slightly darker grey on hover
    },
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Swiper
        ref={swiperRef} // Pass the ref to access the Swiper instance
        slidesPerView={1.1}
        spaceBetween={20}
        loop={true}
        speed={700} // Set transition speed (500ms for smooth movement)
        className="mySwiper"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <SwiperSlide
            key={index}
            style={{
              transform: 'skew(-20deg)',
              width: '88%',
              boxSizing: 'border-box',
            }}
          >
            <OurTeamCard />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <Box
        onClick={() => swiperRef.current.swiper.slidePrev()} // Trigger previous slide
        sx={{
          ...buttonStyles,
          left: '10px',
        }}
      >
        <ArrowBackIcon/> {/* Left Arrow */}
      </Box>
      <Box
        onClick={() => swiperRef.current.swiper.slideNext()} // Trigger next slide
        sx={{
          ...buttonStyles,
          right: '10px',
        }}
      >
        <ArrowForwardIcon/> {/* Right Arrow */}
      </Box>
    </Box>
  );
}

export default OurTeam;
