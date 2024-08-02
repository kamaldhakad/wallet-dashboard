import { createTheme } from "@mui/material/styles";

// Create a custom theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0",
    },
    secondary: {
      main: "#0ff",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    button: {
      textTransform: "none", // Disable uppercase transformation
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
