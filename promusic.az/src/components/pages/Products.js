import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getProducts } from "../../redux/actions/productActions";
import FilterProducts from "../products/filterProducts/FilterProducts";
import ProductCard from "../products/productCard/ProductCard";

function Products() {
  const { items } = useSelector((state) => state.productListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getProducts()(dispatch);
  }, [dispatch]);

  const showDiscount = () => {
    return items?.filter((item) => item.discountPercent > 0);
  };
  const showNewProducts = () => {
    return items?.slice(0,3);
  };
  // const showByBrands = () => {
  //   ret
  // }
  const newProds = showNewProducts();
  // const discount = showDiscount();
  return (
    <Container>
      <Row>
        <Col lg="3">
          <FilterProducts items={items} newProds={newProds} />
        </Col>
        <Col lg="9">
          <ProductCard items={items} />
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
