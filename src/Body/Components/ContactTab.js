import * as React from "react";
import { Button, Card, CardContent, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ContactsIcon from "@mui/icons-material/Contacts";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ContactForm from "./ContactForm";

export default function ContactTab({
  contactDetails = [],
  toggleDrawer = () => {},
  setContactDetails = () => {},
  deleteDetails = () => {},
  editValue = "",
  setEditValue = () => {},
  viewContacts = false,
}) {
  function onClickArrowBack() {
    if (editValue === -1) {
      toggleDrawer(false);
    }
    setEditValue(-1);
  }
  function onSave() {
    setEditValue(-1);
    toggleDrawer(false);
  }
  return (
    <Box
      sx={{
        width: 450,
        p: 4,
        height: "100%",
      }}
      role="presentation"
    >
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        <ArrowBackIcon
          sx={{ paddingRight: 1, cursor: "pointer" }}
          onClick={onClickArrowBack}
        />
        Contacts
      </Typography>
      <Typography sx={{ paddingTop: 1 }} color="grey">
        Please provide the company's email & contact
      </Typography>
      {editValue === -1 ? (
        <Box>
          {contactDetails?.length > 0 &&
            contactDetails.map((details, i) => (
              <Card
                variant="outlined"
                key={i}
                sx={{ marginBottom: 3, marginTop: 2 }}
              >
                <CardContent>
                  <Box>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 600 }}
                    >
                      <ContactsIcon
                        color="disabled"
                        fontSize="small"
                        sx={{ paddingRight: 1, marginTop: 1 }}
                      />
                      {details.team}
                      {!viewContacts && (
                        <>
                          <IconButton
                            color="error"
                            sx={{ float: "right" }}
                            onClick={() => setEditValue(i)}
                            aria-label="edit"
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            color="error"
                            sx={{ float: "right" }}
                            onClick={() => deleteDetails(i)}
                            aria-label="delete"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </>
                      )}
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: 3 }}>
                    <EmailIcon
                      color="disabled"
                      fontSize="tiny"
                      sx={{ paddingRight: 1 }}
                    />
                    {details.email.join("/ \n")}
                  </Box>
                  <Box sx={{ marginTop: 3 }}>
                    <CallIcon
                      color="disabled"
                      fontSize="tiny"
                      sx={{ paddingRight: 1 }}
                    />
                    {details.phone.join("/ \n")}
                  </Box>
                </CardContent>
              </Card>
            ))}
          {!viewContacts && contactDetails?.length > 0 && (
            <Button
              variant="contained"
              color="error"
              sx={{
                bottom: 16,
                position: "sticky",
                width: "100%",
              }}
              onClick={onSave}
            >
              Save
            </Button>
          )}
        </Box>
      ) : (
        <ContactForm
          contactDetails={contactDetails}
          setContactDetails={setContactDetails}
          editValue={editValue}
          setEditValue={setEditValue}
        />
      )}
    </Box>
  );
}
