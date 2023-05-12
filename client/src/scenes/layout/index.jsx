import { Box, useMediaQuery } from "@mui/material";
import Navbar from "components/Navbar.jsx";
import Sidebar from "components/Sidebar.jsx";
import React, { useState } from 'react';
import { Outlet } from "react-router-dom";

const Layout = () => {
    // mobile < 600px
    const isNoneMobile = useMediaQuery("(min-width:600px)");
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    return (
        <Box
            display={isNoneMobile ? "flex" : "block"}
            width="100%"
            height="100%"
        >
            <Sidebar
                isNoneMobile={isNoneMobile}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            <Box
                width="100%"
                height="100%"
            >
                <Navbar
                    isSidebarOpen={isSidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout


