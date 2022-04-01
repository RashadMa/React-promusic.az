import React from "react";
import SliderData from "../slider/data/SliderData";
import { Container, Row, Col } from "reactstrap";
import SliderProducts from "../products/productSlider/SliderProducts";
import Information from "../informations/Information";
import CategoryCard from "../categories/categoryCards/CategoryCard";
import FooterProductSlider from "../products/footerProductSlider/FooterProductSlider";
import BrandSlider from "../brands/brandsSlider/BrandSlider";

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
        <Information />
        <CategoryCard />
        <FooterProductSlider />
        <BrandSlider />
      </Container>
    </div>
  );
}
