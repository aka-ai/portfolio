import React from "react";
import "./Index.css";
import { Home, About, Projects, Nav } from "./Components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  render() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  };
};

export default App;