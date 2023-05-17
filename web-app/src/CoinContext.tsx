import { createContext, useContext, useEffect, useState } from "react";

type ContextProps = {
  children: any;
};

const Coin = createContext<any>(undefined);

const CoinContext = ({ children }: ContextProps) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  useEffect(() => {
    switch (currency) {
      case "USD":
        setSymbol("$");
      case "JPY":
        setSymbol("¥");
      case "LKR":
        setSymbol("Rs");
    }
  }, [currency]);
  return (
    <Coin.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Coin.Provider>
  );
};

export default CoinContext;

export const CoinState = () => {
  return useContext(Coin);
};
