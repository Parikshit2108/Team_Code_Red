import { createTheme } from "@mui/material";
// import { ThemeProvider } from "@mui/styles";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./Components/Login"
// import About from "./Components/About"
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Sidebar from "./Components/Sidebar";
import PlanpriceCard from "./plansprice/PlanpriceCard";

const theme = createTheme({});

function App() {
  return (
    <div className="App">
     <PlanpriceCard />
    </div>
  );
}

export default App;