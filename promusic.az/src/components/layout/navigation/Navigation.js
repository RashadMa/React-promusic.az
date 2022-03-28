import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Navigation.scss";
import { BsSearch, BsPerson } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { BiHeart } from "react-icons/bi";
import LogoDark from "../../../assets/images/logo/LogoDark";

export default function Navigation() {
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
                <div className="hamburger-menu hamburger-menu-two">
                  <input
                    type="checkbox"
                    className="input-check2"
                    id="input-check2"
                    hidden
                  />
                  <label
                    className="bars-container bars-container2"
                    for="input-check2"
                  >
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                  </label>
                </div>
              </Col>
            </Col>
          </Row>
        </div>
        <Col className="categories" xs="12" lg="9">
          <div>
            <a>Keys</a>
            <a>Guitars</a>
            <a>Studio</a>
            <a>Audio</a>
            <a>Microphones</a>
            <a>Drums</a>
            <a>Violin&Chello</a>
            <a>Winds</a>
            <a>Folks</a>
            <a>Cables</a>
          </div>
        </Col>
      </Container>
    </>
  );
}
