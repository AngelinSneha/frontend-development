import NavBar from "./Header/NavBar";
import Main from "./Body/Main";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          marginRight: 1,
          textAlign: "left",
        },
        indicator: {
          backgroundColor: "#990000",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          "&.Mui-selected": {
            color: "black",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          position: "static",
          backgroundColor: "white",
          color: "black",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 24,
          height: 24,
          color: "#990000",
          backgroundColor: "#efdbdb",
          fontSize: "10px",
          cursor: "pointer",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          position: "absolute",
          left: "530px",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Main />
    </ThemeProvider>
  );
}

export default App;
