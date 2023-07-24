import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";
import Router from "../src/router/Router";
import GlobalStyle from "../src/styles/GlobalStyle"


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
