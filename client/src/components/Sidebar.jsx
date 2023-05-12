import { useTheme } from "@emotion/react";
import { AdminPanelSettingsOutlined, CalendarMonthOutlined, ChevronLeft, ChevronLeftOutlined, ChevronRightOutlined, GroupsOutlined, HomeOutlined, PieChartOutlined, PointOfSaleOutlined, PublicOutlined, ReceiptLongOutlined, ShoppingCartOutlined, TodayOutlined, TrendingUpOutlined } from "@mui/icons-material";
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween.jsx";

const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />
    },
    {
        text: "Client Facing",
        icon: null
    },
    {
        text: "Products",
        icon: <ShoppingCartOutlined />
    },
    {
        text: "Customers",
        icon: <GroupsOutlined />
    },
    {
        text: "Transactions",
        icon: <ReceiptLongOutlined />
    },
    {
        text: "Geography",
        icon: <PublicOutlined />
    },
    {
        text: "Sales",
        icon: null
    },
    {
        text: "Overview",
        icon: <PointOfSaleOutlined />
    },
    {
        text: "Daily",
        icon: <TodayOutlined />
    },
    {
        text: "Monthly",
        icon: <CalendarMonthOutlined />
    },
    {
        text: "Breakdown",
        icon: <PieChartOutlined />
    },
    {
        text: "Management",
        icon: null
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />
    },
    {
        text: "Performance",
        icon: <TrendingUpOutlined />
    }
];

const Sidebar = ({ isNoneMobile, isSidebarOpen, drawerWidth, setSidebarOpen }) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigatte = useNavigate();
    const theme = useTheme();

    useEffect(
        // pathname is "/**", use substring(1) to get the string after the "/"
        () => setActive(pathname.substring(1)),
        [pathname]
    );

    return (
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isNoneMobile ? 0 : "2px",
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width="100%">
                        <Box m="1.5rem 2rem 2rem 3rem">
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box display="flex" alignItems="center" gap="0.5rem">
                                    <Typography variant="h4" fontWeight="bold">
                                        ECOMVISION
                                    </Typography>
                                </Box>
                                {isNoneMobile &&
                                    <IconButton onClick={() => setSidebarOpen(!isSidebarOpen)}>
                                        <ChevronLeft />
                                    </IconButton>}
                            </FlexBetween>
                        </Box>
                        <List>
                            {navItems.map(({ text, icon }) => {
                                if (!icon) {
                                    return <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                                        {text}
                                    </Typography>;
                                } else {
                                    const lowerCaseText = text.toLowerCase();
                                    const url = `/${lowerCaseText}`;
                                    return <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                navigatte(url);
                                                setActive(lowerCaseText);
                                            }}
                                            sx={{
                                                backgroundColor:
                                                    active === lowerCaseText
                                                        ? theme.palette.secondary[300]
                                                        : "transparent",
                                                color:
                                                    active === lowerCaseText
                                                        ? theme.palette.primary[600]
                                                        : theme.palette.secondary[100]
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: "2rem",
                                                    color:
                                                        active === lowerCaseText
                                                            ? theme.palette.primary[600]
                                                            : theme.palette.secondary[200]
                                                }}>
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {active === lowerCaseText && <ChevronRightOutlined sx={{ ml: "auto" }} />}
                                        </ListItemButton>
                                    </ListItem>;
                                }
                            })}
                        </List>
                    </Box>
                </Drawer>)}
        </Box>
    );
};

export default Sidebar;
