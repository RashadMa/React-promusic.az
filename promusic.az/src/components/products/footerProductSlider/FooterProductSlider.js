import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./footerProductSlider.scss";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiHeartCircle } from "react-icons/bi";
import { Row } from "reactstrap";
import { settings } from "./settings";

class SliderProducts extends Component {
  render() {
    return (
      <>
        <Row>
          <h1 className="new-products">New Products</h1>
        </Row>
        <Slider {...settings} className="product-slider">
          {this.props.products
            ?.slice(0)
            .reverse()
            .map((item) => (
              <div key={item.id} className="product-slider-card">
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
                        <BiHeartCircle className="wish" />
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
}

export default SliderProducts;
