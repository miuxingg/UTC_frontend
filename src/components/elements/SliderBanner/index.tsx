import { Box, Button, Grid, styled } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import Slider from 'react-slick';
import { Routers } from '../../../configs/navigator';
import Typography from '../Typography';

export const IntroBookmark = styled(Box)({
  width: 758,
  height: 234,
  padding: '24px 32px',
  margin: 'auto',
  background: 'rgba(255, 255, 255, 0.75)',
  position: 'relative',
});

interface IIntro {
  title: string;
  desc: string;
}
export const Intro: React.FC<IIntro> = ({ title, desc }) => {
  const router = useRouter();
  return (
    <IntroBookmark>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Typography fontSize="28px" color="#006ED2">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography fontSize="16px">{desc}</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#D92F33',
              color: '#fff',
              textTransform: 'none',
            }}
            onClick={() => router.push(Routers.products.path)}
          >
            Tham gia ngay
          </Button>
        </Grid>
      </Grid>
    </IntroBookmark>
  );
};

export const IntroList = [
  { title: 'Mua sắm online', desc: 'Chẳng sợ covid' },
  { title: 'Back to school', desc: 'Theo chân bạn nhỏ đến trường' },
  { title: 'Deal hè', desc: 'Săn sale sách - mua thả ga' },
];
interface IAutoplayImage {
  src: string[];
  height?: string;
}
export const AutoPlay: React.FC<IAutoplayImage> = ({ src }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 5000,
  };

  return (
    // <Box width="100%" height={height}>
    //   <img src={src[0]} alt="thumb" style={{ width: '100%', height: '100%' }} />
    // </Box>
    <Slider {...settings}>
      {src.map((item, index) => {
        return (
          <Box width="100%" height="400px" key={index}>
            <Box
              width="100%"
              height="400px"
              style={{
                backgroundImage: `url(${item})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              display="flex"
              alignItems="center"
            >
              {src.length > 1 ? <Intro {...IntroList[index]} /> : null}
            </Box>
          </Box>
        );
      })}
    </Slider>
  );
};

export default AutoPlay;
