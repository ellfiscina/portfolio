import React, {Component} from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import TopBar from "../topbar/TopBar";
import HomePage from "../homepage/HomePage";
import "./App.css";
import { ParallaxProvider } from 'react-scroll-parallax';

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
