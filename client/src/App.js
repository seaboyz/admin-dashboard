import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "components/NavBar.js";
import Sidebar from "components/Sidebar.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme.js";

function App() {
  const mode = useSelector(state => state.global.mode);
  const theme = createTheme(themeSettings(mode));

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      {/* enable the dark mode for the whole app */}
      <CssBaseline />
      <Box
        display="flex"
        width="100%"
        height="100%"
      >
        <Sidebar isSidebarOpen={isSidebarOpen}
        />
        <NavBar
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
