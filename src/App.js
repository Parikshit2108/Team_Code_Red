import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import About from "./Components/About";
import "./App.css";

const theme = createTheme({});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <About />
      </ThemeProvider>
    </div>
  );
}

export default App;
