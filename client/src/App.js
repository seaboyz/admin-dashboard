import { createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { themeSettings } from "theme.js";

function App() {
  const mode = useSelector(state => state.global.mode);
  const darkTheme = createTheme(themeSettings(mode));

  return (
    <ThemeProvider theme={darkTheme}>
      {/* enable the dark mode for the whole app */}
      <CssBaseline />
      <Typography variant="h3">
        App
      </Typography>
    </ThemeProvider>
  );
}

export default App;
