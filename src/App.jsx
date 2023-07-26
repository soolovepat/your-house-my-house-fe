import { ThemeProvider } from "styled-components";

import theme from "./Styles/theme";
import Router from "../src/router/Router";
import GlobalStyle from "./Styles/GlobalStyle";


const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
