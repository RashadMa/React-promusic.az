import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import Header from "../layout/navigation/Header";
import Dashboard from "./Dashboard";
import "./common.scss";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
