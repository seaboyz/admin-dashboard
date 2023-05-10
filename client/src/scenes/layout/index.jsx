import { Box } from "@mui/material";
import Navbar from "components/Navbar.jsx";
import React from 'react';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Box width="100%" heigh="100%">
            <Box>
                <Navbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout


