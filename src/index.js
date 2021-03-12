import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import { Footer, Header } from "./components";
import { QuizContextProvider } from "./helpers";
import { MainMenu } from "./screen";
import { ThemeProvider } from "./theme";

ReactDOM.render(
  <>
    <QuizContextProvider>
      <ThemeProvider>
        <CssBaseline />
        <Header />
        <MainMenu />
        <Footer />
      </ThemeProvider>
    </QuizContextProvider>
  </>,
  document.getElementById("root")
);
