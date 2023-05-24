import { useTheme } from "@emotion/react";
import { AdminPanelSettingsOutlined, CalendarMonthOutlined, ChevronRightOutlined, GroupsOutlined, HomeOutlined, PieChartOutlined, PointOfSaleOutlined, PublicOutlined, ReceiptLongOutlined, ShoppingCartOutlined, TodayOutlined, TrendingUpOutlined } from "@mui/icons-material";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";

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

const Sidebar = () => {
    const theme = useTheme();


    return (
        <Box component="nav">
            <Drawer
                open
                variant="persistent"
                anchor="left"
                sx={{
                    "& .MuiDrawer-paper": {
                        bgcolor: "background.alt",
                        boxSizing: "border-box",
                        borderWidth: "2px",
                        width: "250px"
                    },
                    width: "250px"
                }}
            >
                <Box width="100%">
                    <List >
                        {navItems.map(({ text, icon }) => {
                            if (!icon) {
                                return <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                                    {text}
                                </Typography>;
                            } else {
                                return <ListItem key={text} disablePadding>
                                    <ListItemButton
                                        sx={{
                                            backgroundColor: "transparent",
                                            color: theme.palette.secondary[100]
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                ml: "2rem",
                                                color: theme.palette.secondary[200]
                                            }}>
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                                    </ListItemButton>
                                </ListItem>;
                            }
                        })}
                    </List>
                </Box>
            </Drawer >
        </Box>
    );
};

export default Sidebar;
