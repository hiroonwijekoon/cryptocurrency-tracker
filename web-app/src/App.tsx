import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Homepage from "./pages/Homepage";
import Coinpage from "./pages/Coinpage";

function App() {
  return (
    <BrowserRouter>
      <div>
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
