import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ContactsIcon from "@mui/icons-material/Contacts";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import IconButton from "@mui/material/IconButton";
import Swipeable from "./Swipeable";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import helper from "./helper";

const { contactInfo } = helper;

export default function Info() {
  const [contactDetails, setContactDetails] = React.useState(contactInfo);
  const [showModal, setShowModal] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowModal(open);
  };

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card variant="outlined">
          <CardContent>
            <Box>
              <Typography variant="h6" component="div">
                <ContactsIcon color="disabled" sx={{ paddingRight: 1 }} />
                Contact
                <IconButton
                  color="error"
                  sx={{ float: "right" }}
                  onClick={toggleDrawer(true)}
                  aria-label="delete"
                >
                  <EditIcon />
                </IconButton>
              </Typography>
            </Box>
            <Box sx={{ marginTop: 1 }}>
              <EmailIcon color="disabled" fontSize="tiny" />
              {contactDetails[0].email.join("/ \n")}
            </Box>
            <Box sx={{ marginTop: 1 }}>
              <CallIcon color="disabled" fontSize="tiny" />
              {contactDetails[0].phone.join("/ \n")}
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card variant="outlined" sx={{ minWidth: "30px" }}>
          <CardContent>
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ paddingBottom: 1 }}
              >
                <LocationOnIcon color="disabled" sx={{ paddingRight: 1 }} />
                Address
                <IconButton
                  sx={{ float: "right" }}
                  aria-label="delete"
                  color="error"
                >
                  <EditIcon />
                </IconButton>
              </Typography>
            </Box>
            <Box sx={{ m: 1 }}>
              C-1 / 351 / 4, GIDC Makarpura, Vadodara - 390010, Gujarat, India.
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card variant="outlined">
          <CardContent>
            <Box>
              <Typography variant="h6" component="div">
                <WorkHistoryIcon color="disabled" sx={{ paddingRight: 1 }} />
                Hours & Operations
                <IconButton
                  sx={{ float: "right" }}
                  aria-label="delete"
                  color="error"
                >
                  <EditIcon />
                </IconButton>
              </Typography>
            </Box>
            <Box sx={{ m: 1 }}>Monday to Friday - 09:00 Am to 06:00 Pm</Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card variant="outlined">
          <CardContent>
            <Box>
              <Typography variant="h6" component="div">
                <InsertLinkIcon color="disabled" sx={{ paddingRight: 1 }} />
                Social Media & Links
                <IconButton
                  sx={{ float: "right" }}
                  aria-label="delete"
                  color="error"
                >
                  <EditIcon />
                </IconButton>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                p: 1,
                m: 2,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <Box>
                <LanguageIcon color="disabled" />
                <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
                  Website
                </Typography>
              </Box>
              <Box>
                <InstagramIcon color="disabled" />
                <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
                  Instagram
                </Typography>
              </Box>
              <Box>
                <FacebookRoundedIcon color="disabled" />
                <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
                  Facebook
                </Typography>
              </Box>
              <Box>
                <TwitterIcon color="disabled" />
                <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
                  Twitter
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card variant="outlined">
          <CardContent>
            <Box>
              <Typography variant="h6" component="div">
                <FormatQuoteIcon color="disabled" sx={{ paddingRight: 1 }} />
                Statements
                <IconButton
                  sx={{ float: "right" }}
                  aria-label="delete"
                  color="error"
                >
                  <EditIcon />
                </IconButton>
              </Typography>
            </Box>
            <Box sx={{ m: 1 }}>You think it we int it.</Box>
          </CardContent>
        </Card>
      </Grid>
      {console.log("contactDetails info", contactDetails)}
      <Swipeable
        showModal={showModal}
        toggleDrawer={toggleDrawer}
        contactDetails={contactDetails}
      />
    </Grid>
  );
}
