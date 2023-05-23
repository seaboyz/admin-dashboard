import { createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { themeSettings } from "theme.js";

function App() {
  const darkTheme = createTheme(themeSettings("dark"));

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
