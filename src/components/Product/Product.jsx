import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import vehicle from './vehicle.png';
import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();

  const formatCurrency = (value) => {
    return Number.isInteger(parseInt(value)) ? new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR' }).format(value) : 'Not Available';
  };

  return (
    <>
      {product.map((item) => (
        <Card className={classes.root} key={item.name}>
          <CardMedia className={classes.media} image={vehicle} title={item.name} />
          <CardContent>
            <div className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {formatCurrency(item.cost_in_credits)}
              </Typography>
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.model} is manufactured by {item.manufacturer}, with {item.passengers} passenger capacity
            </Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.cardActions}>
            <Button size="small" color="primary">
              View Details
            </Button>
          </CardActions>
        </Card>
        ))}
    </>
  );
}

export default Product;
