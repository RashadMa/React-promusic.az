import React from "react";
import { Col } from "react-bootstrap";
import { BsCurrencyDollar, BsTrash } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

function BasketItems(props) {
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
        <div className="basket-page-container">
          <Col lg="8">
            <div className="main-section">
              {props.cartItems?.map((item) => (
                <div className="cart-table">
                  <div className="im-container">
                    <img
                      src={
                        "https://localhost:5001/images/products/" + item.image
                      }
                      alt=""
                    />
                  </div>
                  <div className="table-content">
                    <div className="ordered-product">
                      <p className="product-name">{item.name}</p>
                      <p className="product-count">
                        <span className="quantity">7 Unit</span>
                        <span className="count-price">
                          {item.price} <BsCurrencyDollar />
                        </span>
                      </p>
                    </div>
                    <div className="cart-table-functions">
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
          <Col lg="4"></Col>
        </div>
      </div>
    </>
  );
}

export default BasketItems;
