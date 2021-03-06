import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import BrandDetail from "../components/brands/brandDetail/BrandDetail";
import NotFound from "../components/common/notFound/NotFound";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/navigation/Header";
import About from "../components/pages/About";
import Categories from "../components/pages/Categories";
import Dashboard from "../components/pages/Dashboard";
import Products from "../components/pages/Products";
import ProductDetail from "../components/products/productCard/ProductDetail";
import { BrowserRouter as Router } from "react-router-dom";
import "./common.scss";
import Cart from "../components/basket/Cart";
import Order from "../components/order/Order";

function App() {
  const [state] = React.useState(localStorage.getItem("token"));
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/categories/:id" exact component={Categories} />
        <Route path="/products/:id" exact component={Products} />
        <Route path="/product/:id" exact component={ProductDetail} />
        <Route path="/brand/:id" exact component={BrandDetail} />
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/order" exact component={Order} />
        {state === null && <Route path="/login" exact component={Login} />}
        <Route path="/search?:textQuery" exact component={Cart} />
        <Route path="/error" exact component={NotFound} />
        <Redirect to="/error" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
