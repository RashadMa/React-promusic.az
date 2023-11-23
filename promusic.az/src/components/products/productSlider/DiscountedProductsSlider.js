import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderProducts.scss";
import { BsCurrencyDollar } from "react-icons/bs";
import { settings } from "./settings";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/productActions";
import { Link } from "react-router-dom";

function DiscountedProductsSlider() {
  const { items } = useSelector((state) => state.productListReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getProducts()(dispatch);
  }, [dispatch]);

  return (
    <>
      <div className="disc">Those at a discount</div>
      <div className="side-banner mb-3">
        <Slider {...settings} className="slider-inline">
          {items?.map((product) =>
            product.discountPercent > 0 ? (
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
                    <h1 className="title">Discounted Products</h1>
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
            ) : (
              ""
            )
          )}
        </Slider>
      </div>
    </>
  );
}

export default DiscountedProductsSlider;
