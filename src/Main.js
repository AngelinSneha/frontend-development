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
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import sideNavValues from "./helper";
// import TabPanel from "./TabPanel";
import Info from "./Info";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import SideNav from "./SideNav";
import AboutUs from "./AboutUs";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: "white",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Main() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("value", value);
  return (
    <Box sx={{ flexGrow: 1, display: "flex", alignItems: "flex-start" }}>
      <SideNav value={value} handleChange={handleChange} />

      <TabPanel value={value} index={0}>
        one
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
      <TabPanel value={value} index={5}>
        Item six
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AboutUs />
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item eight
      </TabPanel>
    </Box>
    // <Box sx={{ flexGrow: 1, display: "flex", m: 1 }}>
    //   <Tabs
    //     orientation="vertical"
    //     variant="scrollable"
    //     value={value}
    //     onChange={handleChange}
    //     aria-label="Vertical tabs example"
    //     sx={{ marginRight: 1 }}
    //   >
    //     <Tab label="Item One" {...a11yProps(0)} />
    //     <Tab label="Item Two" {...a11yProps(1)} />
    //     <Tab label="Item Three" {...a11yProps(2)} />
    //     <Tab label="Item Four" {...a11yProps(3)} />
    //     <Tab label="Item Five" {...a11yProps(4)} />
    //     <Tab label="Item Six" {...a11yProps(5)} />
    //     <Tab label="Item Seven" {...a11yProps(6)} />
    //   </Tabs>

    // </Box>
    // <Grid container sx={{ m: 1 }}>
    //   <Grid item xs={4} md={2}>
    //     <Item>
    //       <SideNav />
    //     </Item>
    //   </Grid>
    //   <Grid item xs={8} md={10}>
    //     <Item style={{ p: 2 }}>
    //       <AboutUs />
    //     </Item>
    //   </Grid>
    // </Grid>
  );
}
