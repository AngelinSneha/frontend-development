import * as React from "react";
import Box from "@mui/material/Box";
import { Button, InputLabel } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import helpers from "../../helper";

const { getInputField } = helpers;

export default function ContactForm({
  contactDetails = "",
  editValue = "",
  setContactDetails = () => {},
  setEditValue = () => {},
}) {
  const [email, setEmail] = React.useState([]);
  const [contact, setContact] = React.useState([]);

  const [addemail, setaddEmail] = React.useState(0);
  const [addcontact, setaddContact] = React.useState(0);

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
      <Box sx={{ marginTop: 5 }}>
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
          }}
          onClick={() => setaddEmail(addemail + 1)}
        >
          Add More
        </Button>
      </Box>
      <Box sx={{ paddingTop: 4, marginBottom: 4 }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Contact Number
        </InputLabel>
        {getInputField(addcontact, contact, setContact, "eg: 8765434701")}
        <Button
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          color="error"
          sx={{
            marginTop: 2,
            width: "100%",
            color: "#990000",
            backgroundColor: "#efdbdb",
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
        }}
        onClick={onSubmit}
      >
        Save
      </Button>
    </Box>
  );
}
