import { Button, createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "redux/slice.js";
import { themeSettings } from "theme.js";

function App() {
  const mode = useSelector(state => state.global.mode);
  const darkTheme = createTheme(themeSettings(mode));
  const dispatch = useDispatch();


  return (
    <ThemeProvider theme={darkTheme}>
      {/* enable the dark mode for the whole app */}
      <CssBaseline />
      <Typography variant="h3">
        App
      </Typography>
      <Button color="primary" onClick={() => dispatch(setMode())}>Toggle Mode</Button>
    </ThemeProvider>
  );
}

export default App;
