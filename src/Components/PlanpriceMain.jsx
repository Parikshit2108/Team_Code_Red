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
import {Toolbar} from "@mui/material";
import {Typography} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import GroupIcon from "@mui/icons-material/Group";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import { Grid, Stack } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import "../plansprice/PlansPrice.css";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import { useNavigate } from "react-router";

const drawerWidth = 240;

const plan = [
  {
    test: "Blood Test",
    Price: "$500",
    Drname: "Dr.Alisha",
    availableslot: 5,
  },
  {
    test: "Sugar Test",
    Price: "$700",
    Drname: "Dr.Wisdom",
    availableslot: 5,
  },
  {
    test: "Tyroid Test",
    Price: "$800",
    Drname: "Dr.Edword",
    availableslot: 5,
  },
  {
    test: "Covid 19 Test",
    Price: "$900",
    Drname: "Dr.Jenny",
    availableslot: 5,
  },
  {
    test: "Bp Test",
    Price: "$500",
    Drname: "Dr.Charls",
    availableslot: 5,
  },
  {
    test: "Hiv Test",
    Price: "$2000",
    Drname: "Dr.Das",
    availableslot: 5,
  },
  {
    test: "CT scans ",
    Price: "$5000",
    Drname: "Dr.Sheetal",
    availableslot: 5,
  },
  {
    test: "Urine Test ",
    Price: "$200",
    Drname: "Dr.Parikshit",
    availableslot: 5,
  },
  {
    test: "Diabetes ",
    Price: "$500",
    Drname: "Dr.Drake Rmory",
    availableslot: 5,
  },
  {
    test: "Malaria Test ",
    Price: "$50",
    Drname: "Dr.Chandler",
    availableslot: 5,
  },
  {
    test: "kidney Test ",
    Price: "$100",
    Drname: "Dr.Ross",
    availableslot: 5,
  },
  {
    test: "Eye Test ",
    Price: "$100",
    Drname: "Dr.Rachel",
    availableslot: 5,
  },
];
localStorage.setItem("plandata", JSON.stringify(plan));

function Sidebar(props) {
  let navigate = useNavigate();

  let logOut = function log() {
    alert("Are you sure, You want to logout...");
    localStorage.removeItem("logindata");
    navigate("/");
  };
  let username = JSON.parse(localStorage.getItem("logindata"));
  // console.log(username);

  const { window } = props;
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
              onClick={() => {
                logOut();
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
        {/* <UserInfo />
        <Users /> 
        <About /> */}
        <Grid
          container
          className="card"
          columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        >
          {/* <div className='cardbody'> */}
          {plan.map((element, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card className="cordsize">
                <CardContent key={index}>
                  <td>
                    {
                      <BloodtypeIcon
                        style={{
                          backgroundColor: "white",
                          color: "red",
                          height: 30,
                          width: 40,
                          borderRadius: "50%",
                        }}
                      />
                    }
                  </td>
                  <Typography
                    sx={{ fontFamily: "initial", fontWeight: "bolder" }}
                    className="text"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Test={element.test}
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "initial" }}
                    className="textc"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Price={element.Price}
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "initial" }}
                    className="textc"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    DR.Name={element.Drname}
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "initial" }}
                    className="textc"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Available Slot={element.availableslot}
                  </Typography>
                </CardContent>
              </Card>{" "}
            </Grid>
          ))}
          {/* </div> */}
        </Grid>
      </Box>
    </Box>
  );
}

export default Sidebar;