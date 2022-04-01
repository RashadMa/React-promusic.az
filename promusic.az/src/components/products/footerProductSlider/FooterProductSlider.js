import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FooterProductSlider.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as productActions from "../../../redux/actions/productActions";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiHeartCircle } from "react-icons/bi";
import { Row } from "reactstrap";

class SliderProducts extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
      ],
    };
    return (
      <>
        <Row>
          <h1 className="new-products">New Products</h1>
        </Row>
        <Slider {...settings} className="product-slider">
          {this.props.products.items
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
                    <div className="d-grid test">
                      <div className="col-9">
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
                      <div className="col-3">
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
