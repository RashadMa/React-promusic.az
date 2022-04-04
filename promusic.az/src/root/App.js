import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/navigation/Header";
import Categories from "../components/pages/Categories";
import Dashboard from "../components/pages/Dashboard";
import Products from "../components/pages/Products";
import "./common.scss";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/categories/:id" exact component={Categories} />
        <Route path="/products/:id" exact component={Products} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
