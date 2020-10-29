import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

let headerStyle = {
  color: "white",
  textDecoration: "none",
};

let navStyle = {
  textAlign: "right",
};

function Header() {
  return (
    <div>
      <AppBar position="static" display="flex" justifyContent="flex-end">
        <Toolbar>
          <Grid
            justify="space-between" 
            container
            spacing={24}
          >
            <Grid item>
              <Typography variant="title" color="inherit">
                CoMake: Community Collaboration Made Easy
              </Typography>
            </Grid>
            <Grid item>
              <nav classname="navStyle">
                <Link to="/home" style={headerStyle}>
                  {" "}
                  Home{" "}
                </Link>
                <Link to="/dashboard" style={headerStyle}>
                  {" "}
                  Dashboard{" "}
                </Link>
                <Link to="/login" style={headerStyle}>
                  {" "}
                  Login{" "}
                </Link>
                <Link to="/register" style={headerStyle}>
                  {" "}
                  Sign Up{" "}
                </Link>
              </nav>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
