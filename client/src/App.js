import logo from "./logo.svg";
import "./App.css";
import {Router} from '@reach/router';
import Main from "./views/Main";
import Detail from "./views/Detail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Main path="/api/products" />
        <Detail path="/api/products/:_id" />
      </Router>
    </div>
  );
}

export default App;
