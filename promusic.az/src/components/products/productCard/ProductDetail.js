import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "../../../redux/actions/productActions";
import { Col, Container, Row } from "reactstrap";
import { FiShield, FiMail, FiSkipBack, FiShoppingCart } from "react-icons/fi";
import { AiOutlineLike, AiFillStar, AiOutlinePercentage } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { Accordion } from "react-bootstrap";
import "./productDetail.scss";
import FooterProductSlider from "../footerProductSlider/FooterProductSlider";
import alertify from "alertifyjs";

function ProductDetail() {
  const { items } = useSelector((state) => state.productListReducer);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    alertify.success(product.name + " Added to cart");
  };
  React.useEffect(() => {
    getProducts()(dispatch);
  }, [dispatch]);
  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const { id: productId } = useParams();
  const filterProducts = () => {
    return items?.filter((item) => item.id === Number(productId));
  };
  const prod = filterProducts();
  return (
    <Container className="detail my-5">
      {prod?.slice(0.1).map((item) => (
        <Row key={item.id}>
          <Col lg="6">
            <div className="image-slave">
              <img
                src={"https://localhost:5001/images/products/" + item.image}
                alt=""
              />
            </div>
            <Accordion className="acc-2 my-5" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Order and Delivery</Accordion.Header>
                <Accordion.Body>
                  <div className="content">
                    <Row className="features">
                      <Col lg="2">
                        <div className="icon">
                          <FiMail className="icn" />
                        </div>
                      </Col>
                      <Col lg="10">
                        <Row>
                          <h1 className="cash">Online or cash payment</h1>
                          <p className="dsc">
                            Place your orders online or on our website Pay at
                            the time of delivery at the door.
                          </p>
                        </Row>
                        <Row></Row>
                      </Col>
                    </Row>
                    <Row className="features">
                      <Col lg="2">
                        <div className="icon">
                          <AiOutlineLike className="icn" />
                        </div>
                      </Col>
                      <Col lg="10">
                        <Row>
                          <h1 className="cash">Customer satisfaction</h1>
                          <p className="dsc">
                            Your satisfaction is what matters.
                          </p>
                        </Row>
                        <Row></Row>
                      </Col>
                    </Row>
                    <Row className="features">
                      <Col lg="2">
                        <div className="icon">
                          <BsBoxSeam className="icn" />
                        </div>
                      </Col>
                      <Col lg="10">
                        <Row>
                          <h1 className="cash">Delivery</h1>
                          <p className="dsc">
                            Delivering products to any address. Your comfort is
                            important to us.
                          </p>
                        </Row>
                        <Row></Row>
                      </Col>
                    </Row>
                    <Row className="features">
                      <Col lg="2">
                        <div className="icon">
                          <FiShield className="icn" />
                        </div>
                      </Col>
                      <Col lg="10">
                        <Row>
                          <h1 className="cash">Security</h1>
                          <p className="dsc">
                            Pay for your orders online or at the time of
                            delivery
                          </p>
                        </Row>
                        <Row></Row>
                      </Col>
                    </Row>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg="6">
            <div className="features">
              <div className="warranty">
                <div className="icon-background">
                  <FiShield />
                </div>
                12 month guarantee
              </div>
            </div>
            <div className="product-info">
              <p className="product-name">{item.name}</p>
            </div>
            <div className="product-statistics">
              <div className="rating">
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
              </div>
              <div className="comment">0 Comment</div>
              <Link to={`/brand/${item.brand.id}`} className="prod-brand">
                {item.brand.name}
              </Link>
            </div>
            <div className="product-price">
              <div className="price-section">
                <div className="prices">
                  <div className="new-price">
                    {item.discountPercent > 0 ? (
                      <>
                        <del className="d-price">{item.salePrice}</del>
                        {item.salePrice * (1 - item.discountPercent / 100)}
                      </>
                    ) : (
                      item.salePrice
                    )}
                    <BiDollar />
                  </div>
                </div>
              </div>
              <div className="product-disc">
                <div className="new-price">
                  Discount percent {item.discountPercent}
                  <AiOutlinePercentage />
                </div>
              </div>
            </div>
            <div className="product-buttons">
              <Link to={"/"} className="button buy-now">
                <p className="back-to">Back to shopping</p>
                <FiSkipBack className="non-yes" />
              </Link>
              <button
                onClick={() => addToCart(item)}
                className="button add-cart"
              >
                <p className="cart">Add to cart</p>
                <FiShoppingCart className="non-yes" />
              </button>
            </div>
            <Accordion className="acc" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>About product</Accordion.Header>
                <Accordion.Body>
                  <div className="content">
                    <p className="desc">{item.desc}</p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="acc" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Buyer reviews</Accordion.Header>
                <Accordion.Body>
                  <div className="content">
                    <div className="wrapper">
                      <div className="customer-comments">
                        <div className="comments-header">
                          <p className="count">
                            Common <span>0</span> Comment
                          </p>
                          <p className="rating">
                            0 <AiFillStar className="star" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      ))}
      <FooterProductSlider addToCart={addToCart} products={items} />
    </Container>
  );
}

export default ProductDetail;
