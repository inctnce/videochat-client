import deepPurple from "@material-ui/core/colors/deepPurple";
import teal from "@material-ui/core/colors/teal";
import createMuiTheme, { Theme } from "@material-ui/core/styles/createMuiTheme";

const Light: Theme = createMuiTheme({
  palette: {
    type: "light",
    primary: teal,
    secondary: deepPurple,
  },
});

export default Light;
