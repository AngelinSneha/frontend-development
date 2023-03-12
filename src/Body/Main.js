import * as React from "react";
import { Box, Typography } from "@mui/material";
import SideNav from "./SideNavBar/SideNav";
import AboutUs from "./AboutUs";
import constant from "../constants";

const { sideNavValues } = constant;

export default function Main() {
  const [value, setValue] = React.useState(6);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const styles = { flexGrow: 1, display: "flex", alignItems: "flex-start" };

  return (
    <Box sx={styles}>
      <SideNav value={value} handleChange={handleChange} />
      {sideNavValues.map((nav, index) => (
        <div
          key={index}
          role="tabpanel"
          hidden={value !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              {nav.name === "About Us" ? (
                <AboutUs />
              ) : (
                <Typography>{nav.name}</Typography>
              )}
            </Box>
          )}
        </div>
      ))}
    </Box>
  );
}
