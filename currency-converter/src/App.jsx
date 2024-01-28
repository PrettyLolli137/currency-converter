import {Container, Typography,Grid, Box} from '@mui/material'
import InputAmount from './components/InputAmount'
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './components/SwitchCurrency'
import { useContext, useEffect, useState } from 'react'
import { CurrencyContext } from "./components/context/CurrencyContext";
import axios from 'axios'


function App() {


  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,

  } = useContext(CurrencyContext);

  const [resultCurrency, setResultCurrency] = useState(0);
  const codeFromCurrency = fromCurrency.split("")[1];
  const codeToCurrency = toCurrency.split("")[1];



  useEffect(() => {
if(firstAmount){
  axios("https://api.freecurrencyapi.com/v1/latest", {
    params: {
      apikey: "fca_live_qlpwzD7BnnHaNrVVYngrihvbfnSvaAfsYmwwUaGMы",
      base_currency: codeFromCurrency,
      currencies: codeToCurrency
    }
  })
  .then(response => setResultCurrency(response.data.data[codeToCurrency]))
  .catch(error => console.log(error))
}
  }, [firstAmount, fromCurrency, toCurrency])

  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "10rem",
    textAlight: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: " 0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative"

  }


  return (
    <Container maxWidth="md" sx={boxStyles}>
<Typography variant="h5" sx={{marginBottom: "2rem", textAlign: "center"}}>Будь всегда в курсе!</Typography>
<Grid container spacing={2}>
  <InputAmount/>
  <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="Из"/>
  <SwitchCurrency/>
  <SelectCountry value={toCurrency} setValue={setToCurrency} label="В" />
</Grid>
{firstAmount ? (
  <Box sx={{textAlight: "left", marginTop: "1rem"}}>
    <Typography>{firstAmount} {fromCurrency} </Typography>
    <Typography variant="h5"sx={{ marginTop: "5px", fontWeight: "bold"}} >{resultCurrency*firstAmount} {toCurrency} </Typography>

  </Box>
) : ""}
    </Container>
  )
}
export default App
