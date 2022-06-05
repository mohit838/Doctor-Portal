import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  const textColor = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={textColor} to="/">
                <h5>Doctors Portal</h5>
              </Link>
            </Typography>
            <Link style={{ textDecoration: "none" }} to="/appointment">
              <Button style={{ color: "white" }}>Appointment</Button>
            </Link>

            {user?.email ? (
              <Button onClick={logOut} style={textColor}>
                LogOut
              </Button>
            ) : (
              <Link style={{ textDecoration: "none" }} to="/login">
                <Button style={{ color: "white" }}>Login</Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
