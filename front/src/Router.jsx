import React from 'react';
import {Route, Switch} from "react-router";
import {TopPage} from "./templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={TopPage} />
    </Switch>
  );
};

export default Router