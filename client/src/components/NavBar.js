import { DarkModeOutlined, LightModeOutlined, Menu, Search } from "@mui/icons-material";
import { AppBar, Box, IconButton, InputBase, Toolbar, Typography, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { setMode } from "redux/slice.js";

const NavBar = () => {
	const theme = useTheme();
	const dispatch = useDispatch();

	return (
		<AppBar
			sx={{
				position: "static",
				background: "none",
				boxShadow: "none"
			}}
		>
			<Toolbar>

				<IconButton >
					<Menu />
				</IconButton>

				<Box sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					bgcolor: "background.alt",
					p: "0.1rem 1.5rem",

				}}>
					<InputBase placeholder="Search..." />
					<IconButton>
						<Search />
					</IconButton>
				</Box>

				<IconButton onClick={() => dispatch(setMode())} >
					{
						theme.palette.mode === "dark"
							? <DarkModeOutlined sx={{ fontSize: "25px" }} />
							: <LightModeOutlined sx={{ fontSize: "25px" }} />
					}
				</IconButton>

			</Toolbar>
		</AppBar >
	);
};

export default NavBar;
