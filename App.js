import React from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";

import themes from './src/themes';

import Home from "./src/Home";

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.dark;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
