import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TabPanel from "./TabPanel";
import Info from "./Info";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Link from "@mui/material/Link";
import { IconButton, InputBase, InputLabel, TextField } from "@mui/material";
import Swipeable from "./Swipeable";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function AboutUs() {
  const [companyInfo, setCompanyInfo] = React.useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  );
  const [value, setValue] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [verifyCompany, setVerifyCompany] = React.useState(false);
  const [editValue, setEditValue] = React.useState(-1);
  let c = "";
  function toggleDrawer(open) {
    setShowModal(open);
  }
  function onCloseModal() {
    toggleDrawer(false);
  }
  console.log("valuevalue", value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <ThemeProvider
      theme={createTheme({
        // palette: { primary: { main: "#d1005e" } },
        components: {
          MuiTabs: {
            styleOverrides: {
              indicator: {
                backgroundColor: "#990000",
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                textTransform: "none",
                "&.Mui-selected": {
                  color: "black",
                },
              },
            },
          },
        },
      })}
    >
      <Box
        sx={{
          p: 4,
          bgcolor: "background.paper",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5" component="h1" sx={{ p: 2, fontWeight: 600 }}>
          About Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            margin: "24px 8px",
            borderRadius: 1,
          }}
        >
          <Box
            component="img"
            sx={{
              height: 50,
              textAlign: "left",
            }}
            alt="Your logo."
            src="https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "1em",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
              }}
              variant="h6"
            >
              A.T Links
            </Typography>
            <Typography sx={{ color: "grey" }} component="h3">
              Digital Links
            </Typography>
          </Box>
          <VerifiedIcon
            color={verifyCompany ? "success" : "disabled"}
            sx={{ paddingLeft: 3 }}
          />
          {!verifyCompany && (
            <Link
              component="button"
              variant="body2"
              sx={{ position: "absolute", left: "530px" }}
              onClick={() => {
                setVerifyCompany(true);
              }}
            >
              Verify Company
            </Link>
          )}
        </Box>
        <Box sx={{ padding: "16px" }} component="span">
          {companyInfo}
        </Box>
        <IconButton
          color="error"
          aria-label="delete"
          onClick={() => toggleDrawer(true)}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <Box sx={{ marginTop: 3 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Info" {...a11yProps(0)} />
              <Tab label="FAQ" {...a11yProps(1)} />
              <Tab label="Complaints and Feedback" {...a11yProps(2)} />
              <Tab label="Privacy Policy" {...a11yProps(4)} />
              <Tab label="Terms & Conditions" {...a11yProps(5)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Info />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
        </Box>
        <Swipeable showModal={showModal} onCloseModal={onCloseModal}>
          <Box
            sx={{
              width: 300,
              p: 4,
              height: "100%",
            }}
            role="presentation"
          >
            <Typography variant="h5">
              <ArrowBackIcon
                sx={{ paddingRight: 1, cursor: "pointer" }}
                onClick={() => {
                  if (editValue !== -1) {
                    // console
                    setEditValue(-1);
                  } else {
                    setEditValue(-1);
                    toggleDrawer(false);
                  }
                }}
              />
              Company Description
            </Typography>
            <Box sx={{ margin: "40px 16px" }}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Share more details about <br></br>the Company
              </InputLabel>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                multiline
                rows={4}
                variant="filled"
                defaultValue={companyInfo}
                onChange={(e) => (c = e.target.value)}
              />
            </Box>
            <Button
              variant="contained"
              color="error"
              sx={{
                bottom: 16,
                position: "sticky",
                width: "100%",
                textTransform: "none",
              }}
              onClick={() => {
                setCompanyInfo(c);
                toggleDrawer(false);
              }}
            >
              Save
            </Button>
          </Box>
        </Swipeable>
      </Box>
    </ThemeProvider>
  );
}
