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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function ContactForm({
  contactDetails,
  editValue,
  setContactDetails,
  setEditValue = () => {},
}) {
  const [email, setEmail] = React.useState([]);
  const [contact, setContact] = React.useState([]);

  const [addemail, setaddEmail] = React.useState(0);
  const [addcontact, setaddContact] = React.useState(0);

  const getInputField = (length, value, setValue, placeholder) => {
    const res = [];
    for (let i = 0; i <= length; i++) {
      res.push(
        <TextField
          key={i}
          placeholder={placeholder}
          variant="outlined"
          sx={{
            backgroundColor: "#f2f2f2;",
            border: "none",
            width: "100%",
            marginBottom: 2,
          }}
          onChange={(e) => {
            value[i] = e.target.value;
            setValue([...value]);
          }}
        />
      );
    }
    return res;
  };
  const onSubmit = () => {
    contactDetails[editValue].email = [
      ...contactDetails[editValue].email,
      ...email.filter((i) => i !== undefined),
    ];
    contactDetails[editValue].phone = [
      ...contactDetails[editValue].phone,
      ...contact.filter((i) => i !== undefined),
    ];
    setContactDetails([...contactDetails]);
    setEditValue(-1);
  };

  return (
    <Box>
      <Box sx={{ paddingTop: 4 }}>
        <InputLabel htmlFor="input-with-icon-adornment">Email ID</InputLabel>
        {getInputField(addemail, email, setEmail, "eg: salesteam@br.in")}
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
          onClick={() => setaddEmail(addemail + 1)}
        >
          Add More
        </Button>
      </Box>
      <Box sx={{ paddingTop: 4 }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Contact Number
        </InputLabel>
        {getInputField(addcontact, contact, setContact, "eg: 8765434701")}
        {/* <TextField
          placeholder="eg: 8765434701"
          variant="outlined"
          sx={{ backgroundColor: "#f2f2f2", border: "none", width: "100%" }}
        /> */}
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
          onClick={() => setaddContact(addcontact + 1)}
        >
          Add More
        </Button>
      </Box>
      <Button
        variant="contained"
        color="error"
        sx={{
          bottom: 16,
          position: "sticky",
          width: "100%",
          textTransform: "none",
        }}
        onClick={onSubmit}
      >
        Save
      </Button>
    </Box>
  );
}
