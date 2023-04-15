import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Coinpage from "./pages/Coinpage";
import { makeStyles } from "@mui/styles";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className={"app"}>
        <Header />
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/coins/:id" Component={Coinpage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
