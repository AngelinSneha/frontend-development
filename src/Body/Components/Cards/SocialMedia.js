import * as React from "react";
import { Card, CardContent, Box, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function SocialMedia() {
  return (
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
  );
}
