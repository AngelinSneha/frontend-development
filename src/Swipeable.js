import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, InputLabel, TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ContactsIcon from "@mui/icons-material/Contacts";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Swipeable({
  contactDetails = [],
  showModal,
  toggleDrawer = () => {},
}) {
  console.log("contactDetails", contactDetails);
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 450,
        p: 4,
        height: "100%",
      }}
      role="presentation"
    >
      <Typography variant="h5">
        <ArrowBackIcon sx={{ paddingRight: 1 }} onClick={toggleDrawer(false)} />
        Contacts
      </Typography>
      <Typography sx={{ paddingTop: 1 }} color="grey">
        Please provide the company's email & contact
      </Typography>
      <Box>
        {contactDetails &&
          contactDetails.length > 0 &&
          contactDetails.map((details) => (
            <Card variant="outlined" sx={{ marginBottom: 3, marginTop: 2 }}>
              <CardContent>
                <Box>
                  <Typography variant="h6" component="div">
                    <ContactsIcon color="disabled" sx={{ marginRight: 1 }} />
                    {details.team}
                    <IconButton
                      color="error"
                      sx={{ float: "right" }}
                      // onClick={}
                      aria-label="delete"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      sx={{ float: "right" }}
                      // onClick={}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Typography>
                </Box>
                <Box sx={{ marginTop: 1 }}>
                  <EmailIcon
                    color="disabled"
                    fontSize="tiny"
                    sx={{ marginRight: 1 }}
                  />
                  {details.email.join("/ \n")}
                </Box>
                <Box sx={{ marginTop: 1 }}>
                  <CallIcon
                    color="disabled"
                    fontSize="tiny"
                    sx={{ marginRight: 1 }}
                  />
                  {details.phone.join("/ \n")}
                </Box>
              </CardContent>
            </Card>
          ))}
      </Box>
      {/* <Box>
        <Box sx={{ paddingTop: 4 }}>
          <InputLabel htmlFor="input-with-icon-adornment">Email ID</InputLabel>
          <TextField
            placeholder="eg: salesteam@br.in"
            variant="outlined"
            sx={{ backgroundColor: "#f2f2f2;", border: "none", width: "100%" }}
          />
          <Button
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              marginTop: 2,
              width: "100%",
              color: "#990000",
              backgroundColor: "#efdbdb",
              textTransform: "none",
            }}
          >
            Add More
          </Button>
        </Box>
        <Box sx={{ paddingTop: 4 }}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Contact Number
          </InputLabel>
          <TextField
            placeholder="eg: 8765434701"
            variant="outlined"
            sx={{ backgroundColor: "#f2f2f2", border: "none", width: "100%" }}
          />
          <Button
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            color="error"
            sx={{
              marginTop: 2,
              width: "100%",
              color: "#990000",
              backgroundColor: "#efdbdb",
              textTransform: "none",
            }}
          >
            Add More
          </Button>
        </Box>
      </Box> */}
      <Button
        variant="contained"
        color="error"
        sx={{
          bottom: 16,
          position: "sticky",
          width: "90%",
          textTransform: "none",
        }}
      >
        Save
      </Button>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="right">
        <SwipeableDrawer
          anchor="right"
          open={showModal}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
