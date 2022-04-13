import React from "react";
import { Col } from "react-bootstrap";
import { BsCurrencyDollar, BsTrash } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

function BasketItems(props) {
  let sum = 0;
  for (let num of props.cartItems) {
    sum = sum + num.salePrice * (1 - num.discountPercent / 100);
  }
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
                        <span className="quantity">7 Unit</span>{" "}
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
                          <button className="minus">
                            <FiMinus className="crease" />
                          </button>
                          <span className="quantity">7</span>
                          <button className="plus">
                            <AiOutlinePlus />
                          </button>
                        </div>
                        <button className="delete-btn">
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
                      {sum} <BsCurrencyDollar className="mb-1" />{" "}
                    </div>
                  </div>
                  <button className="make-order-btn">Order</button>
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
