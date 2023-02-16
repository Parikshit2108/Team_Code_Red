import { createTheme } from "@mui/material";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./Components/Login"
// import About from "./Components/About"
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Sidebar from "./Components/Sidebar";
import PlanpriceCard from "./plansprice/PlanpriceCard";
// import { ThemeProvider } from "@mui/styles";
// import Aboutmain from "./Components/Aboutmain";
// import Bookinginfo from "./Components/Bookinginfo";
// import Userinfomain from "./Components/Userinfomain";
// import Home from "./Components/Home";
// import UserInfo from "./Components/UserInfo";
import "./App.css";
import Sidebar from "./Components/Sidebar";

const theme = createTheme({});

function App() {
  return (
    <div className="App">
      {/* <ThemeProver theme={theme}>id */}
       <Sidebar />
       
        {/* <Aboutmain /> */}
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
