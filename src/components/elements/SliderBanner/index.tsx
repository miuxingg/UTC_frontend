import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

export const AutoPlay: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: 'linear',
  };
  return (
    <Box width="100%" height="500px">
      <img
        src="https://www.openaccess.edu.au/images/_800x330_crop_center-top_100_none/library-banner.jpg"
        alt="thumb"
        style={{ width: '100%', height: '100%' }}
      />
    </Box>
  );
};

export default AutoPlay;
