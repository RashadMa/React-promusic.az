import React from "react";
import SliderData from "../slider/data/SliderData";
import { Container, Row, Col } from "reactstrap";
import SliderProducts from "../slider/product/SliderProducts";

export default function Dashboard() {
  return (
    <div className="home my-4">
      <Container>
        <Row>
          <Col lg="9">
            <SliderData />
          </Col>
          <Col lg="3">
            <SliderProducts />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
