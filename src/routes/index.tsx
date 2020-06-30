import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exac path='/' component={Main}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
