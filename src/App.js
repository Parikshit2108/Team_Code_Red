import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import "./App.css";
import About from "./Components/About";
import Users from "./Components/Users";

const theme = createTheme({});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <About />
        <Users />
      </ThemeProvider>
    </div>
  );
}

export default App;
