import { createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Typography variant="h3">
        App
      </Typography>
    </ThemeProvider>
  );
}

export default App;
