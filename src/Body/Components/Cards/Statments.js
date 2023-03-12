import * as React from "react";
import {
  Card,
  CardContent,
  Box,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Statements() {
  return (
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
          <Box>You think it we int it. </Box>
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
  );
}
