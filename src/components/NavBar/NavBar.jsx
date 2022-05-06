import React, { useState } from 'react';
import { AppBar, Toolbar, InputBase, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const NavBar = ({ query, onQueryChange }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
                Star war shop
            </Typography>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => onQueryChange(e.target.value)}
                    value={query}
                />
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;