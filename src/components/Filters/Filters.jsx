import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select, { SelectChangeEvent } from '@material-ui/core/Select';
import useStyles from './styles';

const Filters = ({  }) => {
  const classes = useStyles();
  const [list, setList] = useState('');

  const handleChange = (event) => {
    setList(event.target.value);
  };

  return (
    <div className={classes.filterWrapper}>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filters</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={list}
                    label="Filters"
                    onChange={handleChange}
                >
                    <MenuItem value={0}>Vehicles</MenuItem>
                    <MenuItem value={1}>Starships</MenuItem>
                </Select>
            </FormControl>
        </Box>
    </div>
  );
}

export default Filters;
