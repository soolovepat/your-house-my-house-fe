import Router from "./route/router";
import "./App.css";
import GlobalStyle from "./Styles/GlobalStyle";
import LoginPage from "./pages/logninPage";

function App() {
    return (
        <> 
         <Router />
            <GlobalStyle />
            <div></div>
        </>
    );
}

export default App;
