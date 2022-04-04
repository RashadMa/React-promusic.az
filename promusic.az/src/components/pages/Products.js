import React from "react";
import { Col, Container, Row } from "reactstrap";
import FilterProducts from "../products/filterProducts/FilterProducts";
import ProductCard from "../products/productCard/ProductCard";

function Products() {
  return (
    <Container>
      <Row>
        <Col lg="3">
          <FilterProducts />
        </Col>
        <Col lg="9">
          <ProductCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
