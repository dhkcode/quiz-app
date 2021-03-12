import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider as MuiTheme,
} from "@material-ui/core";

let theme = createMuiTheme({
  typography: {
    fontFamily: "'Rubik', sans-serif",

    button: {
      fontWeight: 500,
      letterSpacing: 1.25,
      fontSize: 15,
    },
  },
  palette: {
    primary: {
      main: "#0336FF",
    },
    secondary: {
      main: "#FFDE03",
    },
  },
});
theme = responsiveFontSizes(theme);

export default function ThemeProvider({ children }) {
  return <MuiTheme theme={theme}>{children}</MuiTheme>;
}
