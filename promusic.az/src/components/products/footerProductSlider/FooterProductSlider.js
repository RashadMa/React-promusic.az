import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./footerProductSlider.scss";
import { BsCurrencyDollar, BsCart3 } from "react-icons/bs";
import { Row } from "reactstrap";
import { settings } from "./settings";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SliderProducts(props) {
  const { cartItems } = useSelector((state) => state.cartReducer);
  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <>
      <Row>
        <h1 className="new-products">New Products</h1>
      </Row>
      <Slider {...settings} className="product-slider">
        {props.products
          ?.slice(0)
          .reverse()
          .map((item) => (
            <div key={item.id} className="product-slider-card">
              <Link to={`/product/${item.id}`}>
                <Row>
                  <div className="product-slider-header">
                    <div className="slider-image">
                      <img
                        src={
                          "https://localhost:5001/images/products/" + item.image
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </Row>
              </Link>
              <Row>
                <div className="product-slider-footer">
                  <div className="d-flex test">
                    <div className="col-10">
                      <Row>
                        <p className="name">{item.name}</p>
                      </Row>
                      <Row>
                        <p className="price">
                          {item.salePrice}
                          <BsCurrencyDollar className="dollar-sign" />
                        </p>
                      </Row>
                    </div>
                    <div className="col-2">
                      <BsCart3
                        className="wish"
                        onClick={() => props.addToCart(item)}
                      />
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          ))}
      </Slider>
    </>
  );
}

export default SliderProducts;
