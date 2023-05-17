import React, { useEffect, useState } from "react";
import { coinsList } from "../config/CoinGeckoApi";
import { CoinState } from "../CoinContext";
import axios from "axios";
import {
  Box,
  Container,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CoinsTable = () => {
  //setting config for dark theme
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  //need this useNavigate function to navigate between pages
  const navigate = useNavigate();

  //get selected currency form state
  const { currency } = CoinState();

  //retrieve data from API
  const fetchCoins = async () => {
    setLoading(true);
    axios
      .get(coinsList(currency))
      .then((response) => {
        setCoins(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin: any) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Cryptocurrency prices by market cap
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></TextField>
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress />
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap"].map((row) => (
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: 300,
                        fontFamily: "Montserrat",
                      }}
                      key={row}
                      align={row === "Coin" ? "left" : "right"}
                    >
                      {row}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {handleSearch().map((row: any) => {
                  let profit = row?.price_change_percentage_24h >= 0;

                  return (
                    <TableRow
                      onClick={() => navigate(`/coins/${row.id}`)}
                      key={row.name}
                    ></TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
