import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import Router from "./router/router";
import GlobalStyle from "./styles/GlobalStyle";

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
