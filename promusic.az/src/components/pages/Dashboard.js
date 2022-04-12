import React from "react";
import SliderData from "../slider/data/SliderData";
import { Container, Row, Col } from "reactstrap";
import SliderProducts from "../products/productSlider/SliderProducts";
import Information from "../informations/Information";
import CategoryCard from "../categories/categoryCards/CategoryCard";
import FooterProductSlider from "../products/footerProductSlider/FooterProductSlider";
import BrandSlider from "../brands/brandsSlider/BrandSlider";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

export default function Dashboard() {
  const { items } = useSelector((state) => state.productListReducer);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getProducts()(dispatch);
  }, [dispatch]);
  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (items) => {
    dispatch({ type: "ADD_TO_CART", payload: items });
  };
  return (
    <div className="home my-4">
      <Container>
        <Row>
          <Col lg="9">
            <SliderData />
          </Col>
          <Col lg="3">
            <SliderProducts products={items} />
          </Col>
        </Row>
        <Information />
        <CategoryCard />
        <FooterProductSlider addToCart={addToCart} products={items} />
        <BrandSlider />
      </Container>
    </div>
  );
}
