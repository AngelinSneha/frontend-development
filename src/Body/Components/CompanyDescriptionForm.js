import * as React from "react";
import { InputLabel, TextField, Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CompanyDescriptionForm({
  setCompanyDescription = () => {},
  initialTextField = "",
  toggleDrawer = () => {},
  companyDescription = "",
}) {
  const [editContact, setEditContact] = React.useState(-1);
  function onClickArrow() {
    if (editContact === -1) {
      toggleDrawer(false);
    }
    setEditContact(-1);
  }
  function handleInput(input) {
    initialTextField = input;
  }
  function onSave() {
    if (initialTextField.length > 0) {
      setCompanyDescription(initialTextField);
    }
    toggleDrawer(false);
  }
  return (
    <Box
      sx={{
        width: 300,
        p: 4,
        height: "100%",
      }}
      role="presentation"
    >
      <Typography variant="h5">
        <ArrowBackIcon
          sx={{ paddingRight: 1, cursor: "pointer" }}
          onClick={onClickArrow}
        />
        Company Description
      </Typography>
      <Box sx={{ margin: "40px 16px" }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Share more details about <br />
          the Company
        </InputLabel>
        <TextField
          fullWidth
          id="outlined-multiline-static"
          multiline
          rows={4}
          variant="filled"
          defaultValue={companyDescription}
          onChange={(e) => handleInput(e.target.value)}
        />
      </Box>
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
    </Box>
  );
}
