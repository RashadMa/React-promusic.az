import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./brandSlider.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as brandActions from "../../../redux/actions/brandActions";
import { Row } from "reactstrap";
import { settings } from "./settings";

class BrandSlider extends Component {
  componentDidMount() {
    this.props.actions.getBrands();
  }
  render() {
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
