import { ThemeProvider } from "styled-components";
<<<<<<< HEAD
import theme from "../src/styles/Theme";
import Router from "../src/router/Router";
import GlobalStyle from "../src/styles/GlobalStyle";
=======
import theme from "./styles/Theme";
import Router from "../src/router/Router";
import GlobalStyle from "./styles/GlobalStyle";
>>>>>>> 73dbe9653c07c6836816e01c43cf35089ea5c6c8

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
