import { Typography, makeStyles } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  root: {
    width: "100vw",
    display: "flex",
    padding: "10px 20px",
    position: "fixed",
    bottom: "0",
    left: "0",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));
export default function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography variant="h6">Created By Darshan Dhakal</Typography>
    </div>
  );
}
