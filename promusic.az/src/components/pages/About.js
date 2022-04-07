import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./about.scss";

function About() {
  return (
    <div className="about-content py-5">
      <Container>
        <Row className="pb-5">
          <Col lg="12">
            <div className="background-picture"></div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col lg="8">
            <h2 className="head-title d-flex justify-content-center">
              About us
            </h2>
            <p className="desc">
              Promusic was launched in 2010 and has become one of the largest
              retailers of musical instruments and equipment in Azerbaijan.
              Through our dedicated sales personnel and deep knowledge of the
              music industry, we provide the best musical instruments at the
              best price and offer excellent services to our customers in
              Azerbaijan. Whilst our major revenue comes directly from
              consumers, we supply educational and governmental institutions and
              other retailers in Azerbaijan. Promusic has a well developed
              international network in the musical industry. Through our direct
              distribution experience, we source from many reliable
              manufacturers around the world. We have got some of the biggest
              brands in stock including M-Audio, Akai, Marantz, Soundsation,
              Marshall, D'Addario, Korg, Yamaha, Fender, Ibanez, Alesis,
              Behringer, Gibson, Shure, Dynacord and many others.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
