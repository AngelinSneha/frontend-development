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
import sideNavValues from "./helper";
import TabPanel from "./TabPanel";
import Info from "./Info";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Link from "@mui/material/Link";
import { IconButton } from "@mui/material";

export default function AboutUs() {
  const [companyInfo, setCompanyInfo] = React.useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  );
  const [value, setValue] = React.useState(0);
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
    <Box sx={{ p: 2 }}>
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
        <VerifiedIcon color="disabled" sx={{ p: 2 }} />
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          Verify Company
        </Link>
      </Box>
      <Box sx={{ p: 2 }} component="span" fontSize="small">
        {companyInfo}
      </Box>
      <IconButton color="error" aria-label="delete">
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
    </Box>
  );
}
