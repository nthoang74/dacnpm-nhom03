import React from 'react';

import { Container } from '@mui/material';

import Header from 'components/Header';
import GroupProductsSlide from 'components/GroupProductsSlide';

const HomePage = () => {
  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <GroupProductsSlide />
      </Container>
    </>
  );
};

export default HomePage;
