import { Card, CardContent, Box, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Address() {
  return (
    <Card variant="outlined" sx={{ minHeight: "180px" }}>
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
  );
}
