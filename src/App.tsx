import React from "react";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages";
import { defaultTheme } from "./utils"

export default () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Home /> 
      </ThemeProvider> 
    </>
  )
};
