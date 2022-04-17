import React, { useState } from "react";
import SliderData from "../slider/data/SliderData";
import { Container, Row, Col } from "reactstrap";
import SliderProducts from "../products/productSlider/SliderProducts";
import Information from "../informations/Information";
import CategoryCard from "../categories/categoryCards/CategoryCard";
import FooterProductSlider from "../products/footerProductSlider/FooterProductSlider";
import BrandSlider from "../brands/brandsSlider/BrandSlider";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import Loading from "../common/loader/Loader";
import Swal from "sweetalert2";

export default function Dashboard() {
  const { items } = useSelector((state) => state.productListReducer);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { isLoadingDone } = useSelector((state) => state.isLoadingReducer);

  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  React.useEffect(() => {
    // setLoader(true);
    getProducts()(dispatch);
  }, [dispatch]);
  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: product.name + " Added to cart",
      showConfirmButton: false,
      timer: 900,
    });
  };
  return (
    <div className="home my-4">
      {/* {!isLoadingDone ? (
        <Loading />
      ) : ( */}
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
      {/* )} */}
    </div>
  );
}
