import React from 'react';

import { Paper, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import useStyles from './style';

const Product = ({ productInfo }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Paper elevation={3} className={classes.root}>
      <img
        src={productInfo.thumbnail}
        alt={productInfo.name}
        className={classes.thumbnail}
        style={{
          width: matchUpSm ? '150px' : '124px',
          height: matchUpSm ? '150px' : '124px',
        }}
      />

      <Typography className={classes.productName}>
        {productInfo.name}
      </Typography>

      <Typography className={classes.discountPrice}>
        {productInfo.price}
      </Typography>
      <Typography className={classes.price}>{productInfo.price}</Typography>
    </Paper>
  );
};

export default Product;
