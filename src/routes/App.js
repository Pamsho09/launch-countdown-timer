import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timer from "../containers/Timer"
import Home from "../containers/Home"
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/timer/:day?/:hours?/:minutes?/:seconds?/:user?" component={Timer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
