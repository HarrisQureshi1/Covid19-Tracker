import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// const options = ["Global", "Country", "Country1"];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectCountry(props) {

  const options = Object.keys(props.data).map(key => ( 
    props.data[key].title
  ))

  console.log(options)
  // const [value, setValue] = useState(options[0]);
  // const [inputValue, setInputValue] = useState("");

  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
      <div style={{ color: "#112d4e" }}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          {Object.keys(props.data).map(key => ( 
    <MenuItem key={props.data[key].ourid} value={props.data[key].title}>{props.data[key].title}</MenuItem>))}
        </Select>
      </FormControl>

      </div>
    );
}