import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import Aboutmain from "./Components/Aboutmain";
// import Bookinginfo from "./Components/Bookinginfo";
// import Userinfomain from "./Components/Userinfomain";
// import Home from "./Components/Home";
// import UserInfo from "./Components/UserInfo";
import "./App.css";

const theme = createTheme({});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Aboutmain />
      </ThemeProvider>
    </div>
  );
}

export default App;
