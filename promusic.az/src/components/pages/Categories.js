import React from "react";
import { Col, Container, Row } from "reactstrap";
import SubCategories from "../categories/subCategories/SubCategories";
import BrandSlider from "../brands/brandsSlider/BrandSlider";
import DiscountedProductsSlider from "../products/productSlider/DiscountedProductsSlider";
import NewProductsSide from "../products/newProductsSide/NewProductsSide";

function Categories() {
  return (
    <Container className="pt-5">
      <Row>
        <Col lg="9">
          <SubCategories />
        </Col>
        <Col lg="3">
          <DiscountedProductsSlider />
          <NewProductsSide />
        </Col>
      </Row>
      <BrandSlider />
    </Container>
  );
}

export default Categories;
