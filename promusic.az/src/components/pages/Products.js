import React from "react";
import { Col, Container, Row } from "reactstrap";
import ProductCard from "../products/productCard/ProductCard";

function Products() {
  return (
    <Container>
      <Row>
        <Col lg="3">Salam</Col>
        <Col lg="9">
          <ProductCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
