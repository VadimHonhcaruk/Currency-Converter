import React, { useState } from "react";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { Header } from "./components/Header";

function App() {
  const [theme, setTheme] = useState(darkTheme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
