import deepPurple from "@material-ui/core/colors/deepPurple";
import teal from "@material-ui/core/colors/teal";
import createMuiTheme, { Theme } from "@material-ui/core/styles/createMuiTheme";

const Dark: Theme = createMuiTheme({
  palette: {
    type: "light",
    primary: teal,
    secondary: deepPurple,
    background: {
      paper: "#2d2d2d",
      default: "#121212",
    },
    text: {
      primary: "rgba(255,255,255,1)",
      secondary: "rgba(255,255,255,0.7)",
      disabled: "rgba(255,255,255,0.38)",
      hint: "rgba(255,255,255,0.38)",
    },
    divider: "rgba(255,255,255,0.12)",
  },
});

export default Dark;
