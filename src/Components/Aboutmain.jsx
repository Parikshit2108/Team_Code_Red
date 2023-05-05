import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import GroupIcon from "@mui/icons-material/Group";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import { Stack } from "@mui/material";
import About from "./About";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function Sidebar(props) {
  let navigate = useNavigate();

  let logOut = () => {
    let res = window.confirm(
      "Are you sure ? you want to logout....press Ok to loagout or Cancel"
    );
    if (res) {
      localStorage.removeItem("logindata");
      navigate("/");
    } else {
      navigate("/Aboutmain");
    }
  };
  let username = JSON.parse(localStorage.getItem("logindata"));

  const { win } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div>
      <Toolbar />
      {/* <Divider /> */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "#ff7043" }}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                navigate("/Aboutmain");
              }}
              primary="About"
              sx={{ color: "#64b5f6" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "#ff7043" }}>
              <CurrencyRupeeIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                navigate("/PlanpriceMain");
              }}
              primary="Plans & Price"
              sx={{ color: "#64b5f6" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "#ff7043" }}>
              <BookmarkAddIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                navigate("/BookingMain");
              }}
              primary="Book Slots"
              sx={{ color: "#64b5f6" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "#ff7043" }}>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                navigate("/Userinfomain");
              }}
              primary="Users"
              sx={{ color: "#64b5f6" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "#ff7043" }}>
              <FormatListNumberedIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                navigate("/Bookinginfo");
              }}
              primary="Bookings"
              sx={{ color: "#64b5f6" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "#ff7043" }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              sx={{ color: "#64b5f6" }}
              onClick={() => logOut()}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container = win !== undefined ? () => win().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#90caf9",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap sx={{ fontWeight: 700 }}>
            Kare_Xpert
          </Typography>

          <Stack direction={"row"}>
            <Typography
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              welcome {username ? username[0] : ""}
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem
                onClick={() => {
                  logOut();
                }}
              >
                Log-Out
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          bgcolor: "#e3f2fd",
        }}
      >
        <Toolbar />
        <About />
      </Box>
    </Box>
  );
}

export default Sidebar;
