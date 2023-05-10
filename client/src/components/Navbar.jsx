import { AppBar, IconButton, InputBase, Toolbar, useTheme } from "@mui/material";
import { Menu as MenuIcon, Search } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import FlexBetween from "./FlexBetween.jsx";

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none"
            }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* left side */}
                <FlexBetween>
                    <IconButton onClick={() => console.log("open/close sidebar")}>
                        <MenuIcon />
                    </IconButton>
                    <FlexBetween
                        backgroundColor={theme.palette.background.alt}
                        borderRadius="9px"
                        gap="3rem"
                        p="0.1rem 1.5rem"
                    >
                        <InputBase placeholder="Search..." />
                        <IconButton onClick={() => console.log("search")} >
                            <Search />
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>
            </Toolbar>

        </AppBar>
    );
};

export default Navbar;
