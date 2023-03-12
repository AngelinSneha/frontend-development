import * as React from "react";
import {
  Box,
  Button,
  Tabs,
  Tab,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import constant from "../../constants";

import { ThemeProvider, createTheme } from "@mui/material/styles";
const { sideNavValues } = constant;

const theme = createTheme({
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
          textTransform: "none",
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
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
  },
});

export default function SideNav({ value = 0, handleChange = () => {} }) {
  function a11yProps(index) {
    return {
      id: `vertical-tab vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <ThemeProvider theme={theme}>
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
        >
          {sideNavValues.map((value, i) => (
            <Tab
              key={i}
              icon={value.icon}
              iconPosition="start"
              label={value.name}
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
        <Card variant="outlined" sx={{ textAlign: "center", m: 2 }}>
          <CardContent>
            <Box>
              <ContactSupportIcon color="disabled" sx={{ paddingRight: 1 }} />
              <Typography variant="h6" component="div">
                Need Help?
              </Typography>
              <Typography sx={{ fontSize: "12px", lineHeight: 0 }}>
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
    </ThemeProvider>
  );
}
