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
import helper from "./helper";
import TabPanel from "./TabPanel";
import Info from "./Info";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled, alpha } from "@mui/material/styles";
const { sideNavValues } = helper;

export default function SideNav({ value, handleChange }) {
  function a11yProps(index) {
    return {
      id: `vertical-tab vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <ThemeProvider
      theme={createTheme({
        palette: { primary: { main: "#d1005e" } },
        components: {
          MuiTabs: {
            styleOverrides: {
              indicator: {
                backgroundColor: "white",
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                minHeight: "60px",
                justifyContent: "flex-start",
                margin: "0 8px",
                borderRadius: "5px",
                "&.Mui-selected": {
                  color: "#990000",
                  backgroundColor: "#efdbdb",
                },
              },
            },
          },
        },
      })}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          margin: "24px 8px 16px 16px",
          minWidth: "220px",
          maxWidth: "220px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center",
            p: 1,
            m: 1,
            borderRadius: 1,
            textAlign: "center",
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

          <Typography sx={{ p: 2, fontWeight: 500 }} component="h2">
            A.T Links
          </Typography>
        </Box>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ marginRight: 1, textAlign: "left" }}
        >
          {sideNavValues.map((value, i) => (
            <Tab
              icon={value.icon}
              iconPosition="start"
              label={value.name}
              {...a11yProps(i)}
              sx={{ textTransform: "none" }}
            />
          ))}
        </Tabs>
        <Card variant="outlined" sx={{ textAlign: "center", m: 2 }}>
          <CardContent>
            <Box>
              <ContactSupportIcon
                color="disabled"
                // fontSize="large"
                sx={{ paddingRight: 1 }}
              />
              <Typography variant="h6" component="div">
                Need Help?
              </Typography>
              <Typography
                component="body1"
                sx={{ fontSize: "12px", lineHeight: 0 }}
              >
                our support team is at your dispossal
              </Typography>
            </Box>
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                marginTop: "16px",
                borderRadius: "none",
                textTransform: "none",
              }}
              size="small"
              variant="contained"
            >
              Get Help
            </Button>
          </CardContent>
        </Card>
      </Box>
      {/* 
      <List sx={{ color: "grey" }}>
        {sideNavValues.map((obj) => (
          <ListItem key={obj.name} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "grey" }}>{obj.icon}</ListItemIcon>
              <ListItemText primary={obj.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Card variant="outlined" sx={{ textAlign: "center", m: 2 }}>
        <CardContent>
          <Box>
            <ContactSupportIcon
              color="disabled"
              fontSize="large"
              sx={{ paddingRight: 1 }}
            />
            <Typography variant="h6" component="div">
              Need Help?
            </Typography>
            <Typography
              component="body1"
              sx={{ fontSize: "12px", lineHeight: 0 }}
            >
              our support team is at your dispossal
            </Typography>
          </Box>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: "16px",
              borderRadius: "none",
              textTransform: "none",
            }}
            size="small"
            variant="contained"
          >
            Get Help
          </Button>
        </CardContent>
      </Card> */}
    </ThemeProvider>
  );
}
