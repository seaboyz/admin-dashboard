import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "components/Header.js";
import { useSelector } from "react-redux";
import { themeSettings } from "theme.js";

function App() {
  const mode = useSelector(state => state.global.mode);
  const theme = createTheme(themeSettings(mode));

  return (
    <ThemeProvider theme={theme}>
      {/* enable the dark mode for the whole app */}
      <CssBaseline />
      <Header />
    </ThemeProvider>
  );
}

export default App;
