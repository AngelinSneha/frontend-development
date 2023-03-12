import * as React from "react";
import { Card, CardContent, Box, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

export default function Operations() {
  return (
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
  );
}
