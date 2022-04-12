import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmptyCart from "../../assets/images/basket/EmptyCart";
import "./basket.scss";

function Basket() {
  return (
    <>
      <Container>
        <div className="empty-cart">
          <div className="empty-cart-header d-flex justify-content-center">
            <div className="empty-cart-ellipse">
              <EmptyCart />
            </div>
          </div>
          <div className="empty-cart-title">Basket is empty</div>
          <div className="empty-cart-desc">
            Add products to basket or account for your previous orders
            <Link className="to-register" to={"/login"}>
              Login
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            <Link
              to={"/"}
              className="empty-cart-button d-flex align-items-center justify-content-center"
            >
              Do Shopping
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Basket;
