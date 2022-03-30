import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container } from "reactstrap";
import "./Slider.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as sliderActions from "../../redux/actions/sliderActions";

class PauseOnHover extends Component {
  componentDidMount() {
    this.props.actions.getSliders();
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
      <Container>
        <Col lg="9" md="12">
          <Slider {...settings}>
            {this.props.sliders.items?.map((slider) => console.log(slider))}

            {this.props.sliders.items?.map((slider) => (
              <div key={slider.id} className="image-container">
                <img
                  className="slider-items"
                  src={"https://localhost:5001/images/strings.jpeg"}
                  alt="salam"
                />
                <div className="content">
                  <div className="title">{slider.title}</div>
                  <div className="button">{slider.btnText}</div>
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    sliders: state.sliderListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getSliders: bindActionCreators(sliderActions.getSliders, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PauseOnHover);
