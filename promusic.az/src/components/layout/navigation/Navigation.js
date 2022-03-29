import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Navigation.scss";
import { BsSearch, BsPerson } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { BiHeart } from "react-icons/bi";
import LogoDark from "../../../assets/images/logo/LogoDark";
import CategoryList from "../../categories/CategoryList";

export default function Navigation({ changeState }) {
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
              <Col className="d-flex justify-content-evenly align-items-center">
                <a className="icon-container bag" href="/cart">
                  <FiShoppingBag className="bag-icon nav-icon" />
                </a>
                <a className="icon-container heart" href="/favorite">
                  <BiHeart className="heart-icon nav-icon" />
                </a>
                <a className="icon-container" href="/login">
                  <BsPerson className="person-icon nav-icon" />
                </a>
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
