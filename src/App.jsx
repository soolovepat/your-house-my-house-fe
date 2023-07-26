import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Router from "./router/router";
import GlobalStyle from "./style/GlobalStyle";

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
