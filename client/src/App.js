import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "components/Layout.js";
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
      <Layout />
    </ThemeProvider>
  );
}

export default App;
