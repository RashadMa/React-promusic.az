import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container } from "reactstrap";
import "./Slider.scss";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 200000,
      pauseOnHover: false,
    };
    return (
      <Container>
        <Col lg="9" md="12">
          <Slider {...settings}>
            <div className="image-container">
              <img
                className="slider-items"
                src={"https://localhost:5001/images/strings.jpeg"}
                alt="salam"
              />
              <div className="content">
                <div className="title">Classic Guitars</div>
                <div className="button">See Products</div>
              </div>
            </div>
            <div className="image-container">
              <img
                className="slider-items"
                src={"https://localhost:5001/images/29amps.jpeg"}
                alt="salam"
              />
              <div className="content">
                <div className="title">Classic Guitars</div>
                <div className="button">See Products</div>
              </div>
            </div>
            <div className="image-container">
              <img
                className="slider-items"
                src={"https://localhost:5001/images/0amps.jpeg"}
                alt="salam"
              />
              <div className="content">
                <div className="title">Classic Guitars</div>
                <div className="button">See Products</div>
              </div>
            </div>
          </Slider>
        </Col>
      </Container>
    );
  }
}
