import { TextField } from "@mui/material";

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

const helpers = { getInputField };

export default helpers;
