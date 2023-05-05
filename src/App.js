import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Aboutmain from "./Components/Aboutmain";
import Bookinginfo from "./Components/Bookinginfo";
import Userinfomain from "./Components/Userinfomain";
import PlanpriceMain from "./Components/PlanpriceMain";
import BookingMain from "./Components/BookingMain";
import { useEffect } from "react";
// import Mock from "./mock/Mock";
// import FormValidation from "./mock/FormValidation";
// import FindVowels from "./mock/FindVowels";
// import AxiosFetch from "./mock/AxiosFetch";

const theme = createTheme({});

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("logindata"))) {
      navigate("/");
    }
  }, []);

  return (
    <div className="App">
      {/* <FormValidation /> */}
      {/* <AxiosFetch /> */}
      {/* <FindVowels /> */}
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Aboutmain" element={<Aboutmain />}></Route>
          <Route path="/Bookinginfo" element={<Bookinginfo />}></Route>
          <Route path="/Userinfomain" element={<Userinfomain />}></Route>
          <Route path="/PlanpriceMain" element={<PlanpriceMain />}></Route>
          <Route path="/BookingMain" element={<BookingMain />}></Route>
        </Routes>
      </ThemeProvider>
      {/* <Mock /> */}
    </div>
  );
}

export default App;
