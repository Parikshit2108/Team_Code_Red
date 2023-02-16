import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import Aboutmain from "./Components/Aboutmain";
// import Bookinginfo from "./Components/Bookinginfo";
// import Userinfomain from "./Components/Userinfomain";
// import Home from "./Components/Home";
// import UserInfo from "./Components/UserInfo";
import BookingMain from "./Components/BookingMain"
import "./App.css";
import PlanpriceCard from "./plansprice/PlanpriceCard";

const theme = createTheme({});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BookingMain />
        {/* <PlanpriceCard /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
