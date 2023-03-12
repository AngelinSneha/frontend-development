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
import ContactTab from "./ContactTab";
import { Avatar } from "@mui/material";

const { contactInfo } = helper;

export default function Info() {
  const [contactDetails, setContactDetails] = React.useState(contactInfo);
  const [showModal, setShowModal] = React.useState(false);
  const [viewContacts, setViewContacts] = React.useState(false);
  const [editValue, setEditValue] = React.useState(-1);

  function toggleDrawer(open) {
    setShowModal(open);
  }
  function onCloseModal() {
    toggleDrawer(false);
    setEditValue(-1);
    setViewContacts(false);
  }
  function deleteDetails(index) {
    if (index > -1) {
      contactDetails.splice(index, 1);
      setContactDetails([...contactDetails]);
    }
  }

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card variant="outlined" sx={{ minHeight: "180px" }}>
          <CardContent>
            <Box>
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                <ContactsIcon
                  color="disabled"
                  fontSize="small"
                  sx={{ paddingRight: 1, marginTop: 1 }}
                />
                Contact
                <IconButton
                  color="error"
                  sx={{ float: "right" }}
                  onClick={() => toggleDrawer(true)}
                  aria-label="delete"
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: 3,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Box>
                <EmailIcon
                  color="disabled"
                  fontSize="tiny"
                  sx={{ paddingRight: 1 }}
                />
                {contactDetails[0].email.join(" / \n")}
              </Box>
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  color: "#990000",
                  backgroundColor: "#efdbdb",
                  fontSize: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  toggleDrawer(true);
                  setViewContacts(true);
                }}
              >
                +{contactDetails.length - 1}
              </Avatar>
            </Box>
            <Box sx={{ marginTop: 1 }}>
              <CallIcon
                color="disabled"
                fontSize="tiny"
                sx={{ paddingRight: 1 }}
              />
              {contactDetails[0].phone.join("/ \n")}
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card variant="outlined" sx={{ minWidth: "30px", minHeight: "180px" }}>
          <CardContent>
            <Box>
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                <LocationOnIcon
                  color="disabled"
                  fontSize="small"
                  sx={{ paddingRight: 1, marginTop: 1 }}
                />
                Address
                <IconButton
                  color="error"
                  sx={{ float: "right" }}
                  aria-label="delete"
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </Typography>
            </Box>
            <Box sx={{ margin: "16px 8px" }}>
              C-1 / 351 / 4, GIDC Makarpura, Vadodara - 390010, Gujarat, India.
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card variant="outlined" sx={{ minHeight: "180px" }}>
          <CardContent>
            <Box>
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                <WorkHistoryIcon
                  color="disabled"
                  fontSize="small"
                  sx={{ paddingRight: 1, marginTop: 1 }}
                />
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
            <Box sx={{ margin: "16px 8px" }}>
              Monday to Friday - 09:00 Am to 06:00 Pm
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card variant="outlined" sx={{ minHeight: "180px" }}>
          <CardContent>
            <Box>
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                <InsertLinkIcon
                  color="disabled"
                  fontSize="small"
                  sx={{ paddingRight: 1, marginTop: 1 }}
                />
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
                margin: "16px 8px",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <LanguageIcon color="disabled" />
                <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
                  Website
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <InstagramIcon color="disabled" />
                <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
                  Instagram
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <FacebookRoundedIcon color="disabled" />
                <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
                  Facebook
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
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
        <Card variant="outlined" sx={{ minHeight: "180px" }}>
          <CardContent>
            <Box>
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                <FormatQuoteIcon
                  color="disabled"
                  fontSize="small"
                  sx={{ paddingRight: 1, marginTop: 1 }}
                />
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
            <Box
              sx={{
                margin: "36px 8px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Box sx={{}}>You think it we int it. </Box>
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  color: "#990000",
                  backgroundColor: "#efdbdb",
                  fontSize: "10px",
                  cursor: "pointer",
                }}
              >
                +1
              </Avatar>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {console.log("contactDetails info", contactDetails)}
      <Swipeable showModal={showModal} onCloseModal={onCloseModal}>
        <ContactTab
          showModal={showModal}
          toggleDrawer={toggleDrawer}
          contactDetails={contactDetails}
          setContactDetails={setContactDetails}
          deleteDetails={deleteDetails}
          editValue={editValue}
          viewContacts={viewContacts}
          setEditValue={setEditValue}
        />
      </Swipeable>
    </Grid>
  );
}
