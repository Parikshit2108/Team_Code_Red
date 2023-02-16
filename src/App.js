import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import Aboutmain from "./Components/Aboutmain";
import Bookinginfo from "./Components/Bookinginfo";
import Userinfomain from "./Components/Userinfomain";
// import Home from "./Components/Home";
// import UserInfo from "./Components/UserInfo";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "../../newapp/src/Casestudy/Login";
// import Home from "../../newapp/src/Casestudy/Home";

const theme = createTheme({});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Login />}></Route>
            <Route path="/Home" element={<Home />}></Route> */}
            <Route path="/" element={<Aboutmain />}></Route>
            <Route path="/Bookinginfo" element={<Bookinginfo />}></Route>
            <Route path="/Userinfomain" element={<Userinfomain />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
