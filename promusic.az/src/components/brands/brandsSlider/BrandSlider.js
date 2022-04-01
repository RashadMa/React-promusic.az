import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BrandSlider.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as brandActions from "../../../redux/actions/brandActions";
import { Row } from "reactstrap";

class BrandSlider extends Component {
  componentDidMount() {
    this.props.actions.getBrands();
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
        <div className="brand-slider-header">
          <Row>
            <h1 className="slider-title">Brands</h1>
          </Row>
          <Slider {...settings} className="brand-slider">
            {this.props.brands.items?.map((item) => (
              <div key={item.id} className="brand-slider-card">
                <a className="brand-slider-href" href="/">
                  <div className="brand-slider-image">
                    <img
                      src={"https://localhost:5001/images/brands/" + item.image}
                      alt="brand"
                    />
                  </div>
                  <div className="brand-slider-content">
                    <h6 className="brand-name">{item.name}</h6>
                  </div>
                </a>
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
    brands: state.brandListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getBrands: bindActionCreators(brandActions.getBrands, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandSlider);
