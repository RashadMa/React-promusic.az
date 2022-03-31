import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../layout/navigation/Header";

import Dashboard from "./Dashboard";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
