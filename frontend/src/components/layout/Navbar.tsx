import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Smart Appointment Scheduler
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;