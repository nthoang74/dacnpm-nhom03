import React from 'react';

import { Button, Grid, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import useStyles from './style';

const SearchBar = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <OutlinedInput
        className={classes.searchBar}
        placeholder='Search...'
        endAdornment={
          <InputAdornment position='end'>
            <Button
              className={classes.searchBtn}
              variant='contained'
              aria-label='search button'
              edge='end'
            >
              <SearchIcon />
            </Button>
          </InputAdornment>
        }
      />
    </Grid>
  );
};

export default SearchBar;
