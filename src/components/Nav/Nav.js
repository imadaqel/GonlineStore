import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";

export default class Navbar extends Component {
  render() {
    const token = localStorage.getItem("accessToken");
    const handleLogOut = () => {
      localStorage.removeItem("accessToken");
      window.location.href = "/";
    };
    return (
      <Grid container xs={12} className="navbar-container">
        <AppBar position="static" className="Appbar-style">
          <Toolbar className="toolbar-style">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Link to={`/`}>
              <Typography variant="h4" className="navbar-title">
                {token ? "Online Store" : "Drone Admin"}
              </Typography>
            </Link>
            {token && (
              <Button className="logout-button" onClick={handleLogOut}>
                Logout
              </Button>
            )}
            <CartIcon />
          </Toolbar>
        </AppBar>
      </Grid>
    );
  }
}
