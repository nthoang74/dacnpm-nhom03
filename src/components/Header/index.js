import React from 'react';

import { Box, Container, Grid, IconButton, Paper } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';

import SearchBar from './components/SearchBar';
import Account from './components/Account';

const Header = () => {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Paper square elevation={3}>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: '#fff',
          padding: '0.5rem 0 !important',
        }}
      >
        <Container maxWidth='xl'>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Account />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container
        maxWidth='xl'
        sx={{
          padding: '8px 16px',
        }}
      >
        <Grid
          container
          columnSpacing={{ xs: 0, sm: 2 }}
          rowSpacing={{ xs: 1, sm: 0 }}
          alignItems='center'
          justifyContent='flex-start'
        >
          {!matchUpSm && (
            <Grid item xs={2} sm={1} textAlign='left'>
              <IconButton>
                <MenuIcon fontSize='large' />
              </IconButton>
            </Grid>
          )}
          <Grid item xs={3} sm={2}>
            <img
              src='https://c1.neweggimages.com/WebResource/Themes/Nest/logos/Newegg_full_color_logo_RGB.SVG'
              alt='newegg-logo'
            />
          </Grid>
          {!matchUpSm && (
            <Grid item xs={7} sm={1} textAlign='right'>
              <IconButton>
                <ShoppingCartOutlinedIcon fontSize='large' />
              </IconButton>
            </Grid>
          )}
          <Grid item xs={12} sm={9}>
            <SearchBar />
          </Grid>
          {matchUpSm && (
            <Grid item xs={2} sm={1} textAlign='right'>
              <IconButton>
                <ShoppingCartOutlinedIcon fontSize='large' />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Container>
    </Paper>
  );
};

export default Header;
