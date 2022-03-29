import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../layout/navigation/Header";
import Navigation from "../layout/navigation/Navigation";
import NavigationMobile from "../layout/navigation/NavigationMobile";
import Dashboard from "./Dashboard";

function App() {
  // const [state, setState] = React.useState(false);
  // const changeState = () => {
  //   setState(!state);
  // };
  return (
    <>
      {/* {state ? (
        <NavigationMobile changeState={changeState} />
      ) : (
        <Navigation changeState={changeState} />
      )} */}
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
