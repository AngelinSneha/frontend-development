import * as React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Avatar, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ECF2FF",
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(8),
  flexGrow: 1,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Box
            component="img"
            sx={{
              height: 50,
              paddingLeft: 1,
            }}
            alt="Your logo"
            src="https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png"
          />
          <Search>
            <SearchIconWrapper>
              <SearchIcon color="disabled" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                marginRight: "20px",
                borderRadius: "none",
                width: "180px",
              }}
              size="small"
              variant="contained"
              startIcon={<ShoppingCartOutlinedIcon />}
            >
              Checkout (200)
            </Button>

            <Avatar
              alt="User Admin"
              src="https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png"
            />
            <Button
              style={{ color: "black" }}
              size="small"
              endIcon={<KeyboardArrowDownIcon />}
            >
              User Admin
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
