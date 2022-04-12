import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./navigation.scss";
import { BsSearch, BsPerson } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import LogoDark from "../../common/keyValuePair/LogoDark";
import CategoryList from "../../categories/categoryList/CategoryList";
import { useSelector } from "react-redux";

export default function Navigation({ changeState }) {
  const { cartItems } = useSelector((state) => state.cartReducer);
  return (
    <>
      <Container>
        <div className="header-nav">
          <Row></Row>
        </div>
        <div className="top-navbar">
          <Row>
            <Col xs="3" className="logo d-flex">
              <Link to={"/"} className="d-flex align-items-center">
                <LogoDark />
              </Link>
            </Col>
            <Col xs="6" className="search-container d-flex">
              <form className="form-group">
                <input
                  className="search-input"
                  name="search"
                  placeholder="Products Search..."
                  autoComplete="off"
                />
                <button type="submit" className="search-btn">
                  <BsSearch className="search-icon" />
                </button>
              </form>
            </Col>
            <Col xs="7" md="3" className="auth d-flex user-navigation">
              <Col className="auth-items d-flex justify-content-end align-items-center">
                <Link to={"/cart"} className="icon-container bag">
                  <FiShoppingBag className="bag-icon nav-icon" />{" "}
                  <span className="count">{cartItems.length}</span>
                </Link>
                <Link to={"/login"} className="icon-container">
                  <BsPerson className="person-icon nav-icon" />
                </Link>
                <div onClick={changeState} className="hamburger-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Col>
            </Col>
          </Row>
        </div>
        <CategoryList />
      </Container>
    </>
  );
}
