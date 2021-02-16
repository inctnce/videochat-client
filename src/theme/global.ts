import { Theme } from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useGlobal = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
  });
});

export default useGlobal;
