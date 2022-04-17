import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { BsCurrencyDollar, BsTrash } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function BasketItems(props) {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: product.name + " Removed from cart",
      showConfirmButton: false,
      timer: 900,
    });
  };
  React.useEffect(() => {
    let sum = 0;
    cartItems.forEach((cartItem) => {
      sum =
        sum +
        cartItem.salePrice *
          (1 - cartItem.discountPercent / 100) *
          cartItem.count;
    });
    setTotal(sum);
  }, [cartItems]);

  const increase = (item) => {
    dispatch({ type: "INCREASE", payload: item });
  };
  const decrease = (item) => {
    dispatch({ type: "DECREASE", payload: item });
  };
  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <>
      <div className="basket-page my-5">
        <div className="basket-page-header">
          <div className="white">ProMusic</div>
          <div className="basket-page-info">
            <p className="title">My basket</p>
            <p className="customer-code">{props.cartItems.length} Product</p>
          </div>
        </div>
        <div className="basket-page-container row pb-5">
          <Col className="col-lg-8">
            <div className="main-section">
              {props.cartItems?.map((item) => (
                <div key={item.id} className="cart-table">
                  <div className="im-container">
                    <img
                      src={
                        "https://localhost:5001/images/products/" + item.image
                      }
                      alt=""
                    />
                  </div>
                  <div className="table-content">
                    <div className="ordered-product col-lg-6">
                      <p className="product-name">{item.name}</p>
                      <p className="product-count">
                        <span className="quantity">{item.count} Unit</span>{" "}
                        <span className="count-price">
                          {item.discountPercent > 0
                            ? item.salePrice * (1 - item.discountPercent / 100)
                            : item.salePrice}{" "}
                          <BsCurrencyDollar className="mb-1" />
                        </span>
                        <span style={{ display: "block" }} className="quantity">
                          {item.discountPercent > 0 ? (
                            <>
                              Discount percent :{" "}
                              <span className="greend">
                                {item.discountPercent}%
                              </span>
                            </>
                          ) : (
                            ""
                          )}
                        </span>
                      </p>
                    </div>
                    <div className="cart-table-functions col-lg-6">
                      <div className="cart-table-delete-quantity">
                        <div className="quantity-container">
                          <button
                            onClick={() => decrease(item)}
                            className="minus"
                          >
                            <FiMinus className="crease" />
                          </button>
                          <span className="quantity">{item.count}</span>
                          <button className="plus">
                            <AiOutlinePlus onClick={() => increase(item)} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item)}
                          className="delete-btn"
                        >
                          <BsTrash className="trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col className="col-lg-4">
            <div className="side-section">
              <h1 className="title">Pay</h1>
              <div className="wrapper">
                <div className="cart-calculations">
                  <div className="total">
                    <p className="left">Count of products</p>
                    <p className="right">{props.cartItems.length} products</p>
                  </div>
                </div>
                <div className="total-amount">
                  <div className="total-amount-text">
                    <p className="left">Total:</p>
                    <div className="right">
                      {total} <BsCurrencyDollar className="mb-1" />{" "}
                    </div>
                  </div>
                  <div>
                    <Link to={"/order"} className="make-order-btn">
                      Order
                    </Link>
                  </div>
                  <div className="login-span d-flex justify-content-center mb-2">
                    *You must Register to order
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </div>
    </>
  );
}

export default BasketItems;
