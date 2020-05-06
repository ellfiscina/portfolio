import React, {Component} from "react";
import TopBar from "./TopBar";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import HomePage from "./HomePage";
import "./App.css";

const history = createHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <TopBar />
          <Route path="/" exact component={HomePage} />
        </Router>
      </div>
    );
  }
}

export default App;
