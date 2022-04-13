import React from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
import Basket from "./Basket";
import BasketItems from "./BasketItems";

function Cart() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  return (
    <Container>
      {cartItems.length > 0 ? (
        <BasketItems cartItems={cartItems} />
      ) : (
        <Basket />
      )}
    </Container>
  );
}

export default Cart;
