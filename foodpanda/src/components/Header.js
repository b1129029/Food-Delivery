import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../auth/LoginDialog"

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLoginDialogOpen = () => setOpenLoginDialog(true);
  const handleLoginDialogClose = () => setOpenLoginDialog(false);

  return (
    <AppBar position="static" color="inherit" sx={{ boxShadow: "none", borderBottom: "1px solid #e0e0e0" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          foodpanda
        </Typography>
        <Button color="inherit" onClick={handleLoginDialogOpen}>登入</Button>
        <Button variant="contained" color="secondary" sx={{ ml: 1 }} onClick={handleLoginDialogOpen}>
          註冊
        </Button>
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <LanguageIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>繁體中文</MenuItem>
          <MenuItem onClick={handleMenuClose}>English</MenuItem>
        </Menu>
        <IconButton color="inherit" sx={{ ml: 1 }}>
          <ShoppingCartIcon />
        </IconButton>
        <Avatar sx={{ ml: 1 }}>F</Avatar>
      </Toolbar>
      <LoginDialog open={openLoginDialog} onClose={handleLoginDialogClose}/>
    </AppBar>
  );
};

export default Header;
