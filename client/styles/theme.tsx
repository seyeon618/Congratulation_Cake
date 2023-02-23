import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#9333EA",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
