import { createContext } from "react";
import { useState } from 'react';

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState("🇳🇮 NIO - Nicaragua");
  const [toCurrency, setToCurrency] = useState("🇦🇺 AUD - Australia");
  const [firstAmount, setFirstAmount] = useState("");


  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
