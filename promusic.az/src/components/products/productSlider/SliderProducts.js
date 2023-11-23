import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderProducts.scss";
import { BsCurrencyDollar } from "react-icons/bs";
import { settings } from "./settings";
import { Link } from "react-router-dom";

function SliderProducts(props) {
  return (
    <>
      <div className="side-banner">
        <Slider {...settings} className="slider-inline">
          {props.products?.map((product) => (
            <div key={product.id} className="slider-card">
              <Link to={`/product/${product.id}`}>
                <div className="top">
                  <div className="img-container">
                    <img
                      src={
                        "https://localhost:5001/images/products/" +
                        product.image
                      }
                      alt=""
                    />
                  </div>
                  <h1 className="title">Our Products</h1>
                  <p className="product-name">{product.name}</p>
                </div>
              </Link>
              <div className="bottom d-flex align-items-center justify-content-start">
                <div className="price d-flex">
                  <p className="new-price">{product.salePrice}</p>
                  <BsCurrencyDollar className="dollar-sign" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SliderProducts;
