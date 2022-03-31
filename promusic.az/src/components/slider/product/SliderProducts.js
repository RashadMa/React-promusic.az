import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderProducts.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as productActions from "../../../redux/actions/productActions";
import { BsCurrencyDollar } from "react-icons/bs";

class SliderProducts extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: false,
    };
    return (
      <>
        <div className="side-banner">
          <Slider {...settings} className="slider-inline">
            {this.props.products.items?.map((product) => (
              <div key={product.id} className="slider-card">
                <a href="/">
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
                </a>
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
}

function mapStateToProps(state) {
  return {
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderProducts);
