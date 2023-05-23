import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { setMode } from "redux/slice.js";

const Header = () => {
	const theme = useTheme();
	const dispatch = useDispatch();

	return (
		<AppBar>
			<Toolbar>
				<IconButton onClick={() => dispatch(setMode())} >
					{
						theme.palette.mode === "dark"
							? <DarkModeOutlined sx={{ fontSize: "25px" }} />
							: <LightModeOutlined sx={{ fontSize: "25px" }} />
					}
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
