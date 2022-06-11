import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

interface IAutoplayImage {
  src: string[];
  height?: string;
}
export const AutoPlay: React.FC<IAutoplayImage> = ({
  src,
  height = '500px',
}) => {
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
    <Box width="100%" height={height}>
      <img src={src[0]} alt="thumb" style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};

export default AutoPlay;
