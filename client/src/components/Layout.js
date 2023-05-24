const { Box } = require("@mui/material");
const { useState } = require("react");
const { default: NavBar } = require("./NavBar.js");
const { default: Sidebar } = require("./Sidebar.js");

const Layout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <Box
            display="flex"
            width="100%"
            height="100%"
        >
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <NavBar
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
        </Box>
    );
};

export default Layout;