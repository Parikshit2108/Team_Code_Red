import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import "./App.css";

const theme = createTheme({});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}></ThemeProvider>
    </div>
  );
}

export default App;
