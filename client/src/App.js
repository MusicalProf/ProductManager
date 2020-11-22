import logo from "./logo.svg";
import "./App.css";
import {Link, Router} from '@reach/router';
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Main path="/" />
        <Detail path="/products/:_id" />
        <Update path="/products/:_id/edit"/>
      </Router>
    </div>
  );
}

export default App;
