import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState("Guest");

  return user ? <ApplicationNav user={user} /> : "...loading";
};

const ApplicationNav = (props) => {
  return (
    <Router>
      {/* <Navigation user={props.user} /> */}
      <Switch>
        <Route path="/about">
          <h2>about area</h2>
        </Route>
        <Route path="/second">
          <h1>Second page!</h1>
        </Route>
        <React path="/puppies">
          <h2>Puppies</h2>
        </React>
        <Route exact path="/">
          <h1>Main Area</h1>
          <Link to="/second">second</Link>|<Link to="/about">about</Link>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
