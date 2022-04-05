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

const listProduct = [
  {
    id: 1,
    description:
      'Frostbite with tissue necrosis of other and unspecified sites',
    name: 'TYLENOL Extra Strength',
    price: '$2.29',
    thumbnail: 'http://dummyimage.com/131x127.png/dddddd/000000',
  },
  {
    id: 2,
    description: 'Poisoning by iron and its compounds, undetermined',
    name: 'FLEBEAUTE COLLAGENIC TWO WAY CAKE',
    price: '$1.70',
    thumbnail: 'http://dummyimage.com/139x124.png/dddddd/000000',
  },
  {
    id: 3,
    description:
      'Fracture of orbital floor, unspecified side, subsequent encounter for fracture with delayed healing',
    name: 'Quetiapine fumarate',
    price: '$7.47',
    thumbnail: 'http://dummyimage.com/128x133.png/dddddd/000000',
  },
  {
    id: 4,
    description:
      'Laceration with foreign body of right great toe without damage to nail, sequela',
    name: 'Metoprolol Tartrate and Hydrochlorothiazide',
    price: '$3.49',
    thumbnail: 'http://dummyimage.com/146x146.png/5fa2dd/ffffff',
  },
  {
    id: 5,
    description:
      'Family history of other disabilities and chronic diseases leading to disablement, not elsewhere classified',
    name: 'Xylocaine',
    price: '$1.15',
    thumbnail: 'http://dummyimage.com/143x130.png/ff4444/ffffff',
  },
  {
    id: 6,
    description:
      'Laceration without foreign body of abdominal wall, right upper quadrant with penetration into peritoneal cavity, subsequent encounter',
    name: 'Treatment Set TS330156',
    price: '$7.41',
    thumbnail: 'http://dummyimage.com/128x130.png/ff4444/ffffff',
  },
  {
    id: 7,
    description: 'Other chronic obstructive pulmonary disease',
    name: 'kirkland signature naproxen sodium',
    price: '$5.58',
    thumbnail: 'http://dummyimage.com/149x129.png/cc0000/ffffff',
  },
  {
    id: 8,
    description: 'Minor laceration of right kidney, subsequent encounter',
    name: 'Benzonatate',
    price: '$8.28',
    thumbnail: 'http://dummyimage.com/142x126.png/5fa2dd/ffffff',
  },
  {
    id: 9,
    description:
      'Displaced fracture of hook process of hamate [unciform] bone, right wrist, subsequent encounter for fracture with malunion',
    name: 'Metoprolol Tartrate',
    price: '$5.44',
    thumbnail: 'http://dummyimage.com/131x139.png/dddddd/000000',
  },
  {
    id: 10,
    description: 'Umbilical hernia',
    name: 'Sertraline Hydrochloride',
    price: '$9.29',
    thumbnail: 'http://dummyimage.com/146x148.png/cc0000/ffffff',
  },
  {
    id: 11,
    description: 'Exposure to ignition or melting of nightwear',
    name: 'Apis ex animale 6 Special Order',
    price: '$7.09',
    thumbnail: 'http://dummyimage.com/124x130.png/ff4444/ffffff',
  },
  {
    id: 12,
    description:
      'Nondisplaced fracture of proximal phalanx of right ring finger, initial encounter for closed fracture',
    name: 'Modesa',
    price: '$8.86',
    thumbnail: 'http://dummyimage.com/147x125.png/5fa2dd/ffffff',
  },
];

const GroupProductsSlide = () => {
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
        }}
      >
        LAPTOP
      </Typography>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={matchUpSm ? (matchBetweenSmLg ? 3 : 6) : 2}
        slidesPerGroup={matchUpSm ? (matchBetweenSmLg ? 3 : 6) : 2}
        spaceBetween={16}
        className='mySwiper'
      >
        {listProduct.map((product) => (
          <SwiperSlide key={product.id}>
            <Product productInfo={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GroupProductsSlide;
