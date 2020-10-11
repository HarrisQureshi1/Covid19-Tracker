import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');



    return (
      <div style={{ color: "#112d4e" }}>
        <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
          <div>{`inputValue: '${inputValue}'`}</div>
          <br />
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Controllable" variant="outlined" />}
          />

<Autocomplete
            id="size-small-standard"
            size="small"
            options={options}
            getOptionLabel={option => (option.title ? option.title : "")}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            renderInput={params => (
              <TextField
                {...params}
                variant="standard"
                label="Size small"
                placeholder="Favorites"
                fullWidth
              />
            )}
          />

      </div>
    );
}