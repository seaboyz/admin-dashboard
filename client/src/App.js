import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { createTheme, CssBaseline, IconButton, ThemeProvider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "redux/slice.js";
import { themeSettings } from "theme.js";

function App() {
  const mode = useSelector(state => state.global.mode);
  const theme = createTheme(themeSettings(mode));
  const dispatch = useDispatch();


  return (
    <ThemeProvider theme={theme}>
      {/* enable the dark mode for the whole app */}
      <CssBaseline />
      <IconButton onClick={() => dispatch(setMode())}>
        {
          theme.palette.mode === "dark"
            ? <DarkModeOutlined sx={{ fontSize: "25px" }} />
            : <LightModeOutlined sx={{ fontSize: "25px" }} />
        }
      </IconButton>
    </ThemeProvider>
  );
}

export default App;
