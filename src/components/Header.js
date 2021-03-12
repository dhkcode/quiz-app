import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

export default function Header() {
  return (
    <AppBar color="secondary" className="header">
      <Toolbar>
        <Typography variant="h5"> Quiz App </Typography>
        <div className="flexGrow"></div>
        <Tooltip title="View On GitHub">
          <IconButton
            color="inherit"
            onClick={() =>
              window.open("https://github.com/dhkcode/quiz-app", "_blank")
            }
          >
            <GitHub />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
