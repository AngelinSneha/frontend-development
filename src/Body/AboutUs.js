import * as React from "react";
import { IconButton, Link, Box, Tabs, Tab, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VerifiedIcon from "@mui/icons-material/Verified";
import TabPanel from "./Components/TabPanel";
import Info from "./Components/Info";
import Swipeable from "./Components/Swipeable";
import constant from "./constants";
import CompanyDescriptionForm from "./Components/CompanyDescriptionForm";

const { companyInformation, getTabs } = constant;

export default function AboutUs() {
  const [companyDescription, setCompanyDescription] =
    React.useState(companyInformation);
  const [tab, setTab] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [verifyCompany, setVerifyCompany] = React.useState(false);
  let initialTextField = "";

  function toggleDrawer(open) {
    setShowModal(open);
  }
  function onCloseModal() {
    toggleDrawer(false);
  }
  function verifyCompanyDetails() {
    setVerifyCompany(true);
  }
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
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
            onClick={verifyCompanyDetails}
          >
            Verify Company
          </Link>
        )}
      </Box>
      <Box sx={{ padding: "16px" }} component="span">
        {companyDescription}
      </Box>
      <IconButton
        color="error"
        aria-label="edit"
        onClick={() => toggleDrawer(true)}
      >
        <EditIcon fontSize="small" />
      </IconButton>
      <Box sx={{ marginTop: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tab}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {getTabs.map((value, index) => (
              <Tab label={value} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
        {getTabs.map((value, index) => (
          <TabPanel value={tab} index={index}>
            {tab !== 0 ? value : <Info />}
          </TabPanel>
        ))}
      </Box>
      <Swipeable showModal={showModal} onCloseModal={onCloseModal}>
        <CompanyDescriptionForm
          setCompanyDescription={setCompanyDescription}
          initialTextField={initialTextField}
          toggleDrawer={toggleDrawer}
          companyDescription={companyDescription}
        />
      </Swipeable>
    </Box>
  );
}
