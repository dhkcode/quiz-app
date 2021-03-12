import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  mainMenu: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  content: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  btn: {
    minWidth: "200px",
  },
  question: {
    marginBottom: "50px",
  },
  flexBox: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    // alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: "50px",
    height: "auto",
  },
  options: {
    marginRight: 100,
  },
}));
export default useStyle;
