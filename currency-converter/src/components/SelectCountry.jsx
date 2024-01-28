import {Grid,Autocomplete,TextField } from '@mui/material'

function SelectCountry() {


  return (
    <Grid item xs={12}>
    <Autocomplete
    value="option1"
        options={["option1","option2"]}
        renderInput={(params) => (
          <TextField {...params} label="из"/>
        )}
      />
    </Grid>

  )
}

export default SelectCountry;