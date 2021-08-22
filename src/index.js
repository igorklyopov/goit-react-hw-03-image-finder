import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme, StyledCommon } from "./StyledCommon";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledCommon />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
