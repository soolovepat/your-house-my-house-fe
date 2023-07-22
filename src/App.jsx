import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <GlobalStyle />
      <FontAwesomeIcon icon={faSearch} />
      <div></div>
    </>
  );
}

export default App;
