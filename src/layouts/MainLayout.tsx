import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: "220px",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;