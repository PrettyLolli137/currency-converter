import { Grid, InputAdornment, TextField } from "@mui/material";

function InputAmount() {
  return (
    <Grid item xs={12}>
      <TextField
        label="Сумма"
        fullWidth
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
      />
    </Grid>
  );
}

export default InputAmount;
