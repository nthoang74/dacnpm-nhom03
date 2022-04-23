import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';
import { Navigation } from 'swiper';

import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Product from 'components/Product';

const GroupProductsSlide = ({ groupProducts }) => {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const matchBetweenSmLg = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

  return (
    <>
      <Typography
        sx={{
          color: '#0F5B9A',
          fontSize: {
            xs: '16px',
            sm: '32px',
          },
          fontWeight: 'bold',
          textAlign: 'left',
          marginTop: '16px',
          textTransform: 'uppercase',
        }}
      >
        {groupProducts.groupName}
      </Typography>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={matchUpSm ? (matchBetweenSmLg ? 3 : 6) : 2}
        slidesPerGroup={matchUpSm ? (matchBetweenSmLg ? 3 : 6) : 2}
        spaceBetween={16}
        className='mySwiper'
      >
        {groupProducts.products.map((product, index) => (
          <SwiperSlide key={index}>
            <Product productInfo={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GroupProductsSlide;
