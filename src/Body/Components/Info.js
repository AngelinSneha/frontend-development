import * as React from "react";
import {
  Card,
  CardContent,
  Box,
  IconButton,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import constant from "../../constants";
import ContactTab from "./ContactTab";
import Swipeable from "./Swipeable";
import Address from "./Cards/Address";
import Operations from "./Cards/Operations";
import SocialMedia from "./Cards/SocialMedia";
import Statements from "./Cards/Statments";

const { contactInfo } = constant;

export default function Info() {
  const [contactDetails, setContactDetails] = React.useState(contactInfo);
  const [showModal, setShowModal] = React.useState(false);
  const [viewContacts, setViewContacts] = React.useState(false);
  const [editValue, setEditValue] = React.useState(-1);

  function toggleDrawer(open) {
    setShowModal(open);
  }
  function onCloseModal() {
    toggleDrawer(false, setShowModal);
    setEditValue(-1);
    setViewContacts(false);
  }
  function deleteDetails(index) {
    if (index > -1) {
      contactDetails.splice(index, 1);
      setContactDetails([...contactDetails]);
    }
  }
  function viewContactsFn() {
    toggleDrawer(true);
    setViewContacts(true);
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
                  aria-label="edit"
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
                {contactDetails[0]?.email?.length &&
                  contactDetails[0].email.join(" / \n")}
              </Box>
              {contactDetails.length > 0 && (
                <Avatar onClick={viewContactsFn}>
                  +{contactDetails.length - 1}
                </Avatar>
              )}
            </Box>
            <Box sx={{ marginTop: 1 }}>
              <CallIcon
                color="disabled"
                fontSize="tiny"
                sx={{ paddingRight: 1 }}
              />
              {contactDetails[0]?.phone?.length &&
                contactDetails[0].phone.join("/ \n")}
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Address />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Operations />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SocialMedia />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Statements />
      </Grid>
      <Swipeable showModal={showModal} onCloseModal={onCloseModal}>
        <ContactTab
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
