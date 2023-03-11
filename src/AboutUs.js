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
    <Box sx={{ p: 2, bgcolor: "background.paper" }}>
      <Typography variant="h4" component="h2">
        About Us
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
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

        <Typography sx={{ p: 2 }} component="h3">
          A.T Links
        </Typography>
        <VerifiedIcon
          color={verifyCompany ? "success" : "disabled"}
          sx={{ p: 2 }}
        />
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            setVerifyCompany(true);
          }}
        >
          Verify Company
        </Link>
      </Box>
      <Box sx={{ p: 2 }} component="span" fontSize="small">
        {companyInfo}
      </Box>
      <IconButton
        color="error"
        aria-label="delete"
        onClick={() => toggleDrawer(true)}
      >
        <EditIcon />
      </IconButton>
      <Box>
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
          <Box sx={{ m: 2 }}>
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
  );
}
