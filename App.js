import React from "react";
import { ThemeProvider } from "styled-components";

import themes from './src/themes';

import Home from "./src/Home";

export default function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <Home />
    </ThemeProvider>
  );
}
