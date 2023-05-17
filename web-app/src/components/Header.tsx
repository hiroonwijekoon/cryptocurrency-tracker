import {
  AppBar,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { CoinState } from "../CoinContext";

const Header = () => {
  //styling using sx styles instead of css
  const titleStyles = {
    flex: 1,
    color: "ivory",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const selectStyles = {
    width: 100,
    height: 40,
    marginLeft: 15,
  };

  const containerStyles = {
    paddingTop: 1,
    paddingBottom: 1,
  };

  //need this useNavigate function to navigate between pages
  const navigate = useNavigate();

  //setting config for dark theme
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  //using state to keep track of currency
  const { currency, setCurrency } = CoinState();
  const { symbol } = CoinState();
  console.log(currency);
  console.log(symbol);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="transparent">
        <Container sx={containerStyles}>
          <Toolbar>
            <Typography
              sx={titleStyles}
              onClick={() => navigate("/")}
              variant="h5"
            >
              KoinFynder
            </Typography>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <Select
                variant="outlined"
                sx={selectStyles}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"JPY"}>JPY</MenuItem>
                <MenuItem value={"LKR"}>LKR</MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
