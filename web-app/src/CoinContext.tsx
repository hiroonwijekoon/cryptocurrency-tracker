import { createContext, useContext, useEffect, useState } from "react";

type ContextProps = {
  children: any;
};

const Coin = createContext<any>(undefined);

const CoinContext = ({ children }: ContextProps) => {
  const [currrency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  useEffect(() => {
    switch (currrency) {
      case "USD":
        setSymbol("$");
      case "JPY":
        setSymbol("¥");
      case "LKR":
        setSymbol("Rs");
    }
  }, [currrency]);
  return (
    <Coin.Provider value={{ currrency, symbol, setCurrency }}>
      {children}
    </Coin.Provider>
  );
};

export default CoinContext;

export const CoinState = () => {
  return useContext(Coin);
};
