import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input, Label } from "reactstrap";
import "./login.scss";

function Register() {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col className="responsive" lg="6">
            <div className="img-content"></div>
          </Col>
          <Col lg="6">
            <h1 class="title">Create a new account</h1>
            <h3 class="subtitle">
              Log in to your account by confirming your mobile number and easily
              manage your orders.
            </h3>
            <form>
              <Row>
                <Col lg="6">
                  <Label for="email">E-mail</Label>
                  <Input
                    className="email-input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                  />
                </Col>
                <Col lg="6">
                  <Label for="username">Username</Label>
                  <Input
                    className="email-input"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Your username"
                  />
                </Col>
              </Row>

              <Row>
                <Col lg="6">
                  <Label for="name">Name</Label>
                  <Input
                    className="email-input"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                  />
                </Col>
                <Col lg="6">
                  <Label for="password">Password</Label>
                  <Input
                    className="password-input mb-4"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Passowrd"
                  />
                </Col>
              </Row>

              <button className="submit-btn-login">Register</button>
            </form>
            <div class="bottom-login-class">
              Do you have an account?{" "}
              <Link className="to-register" to={"/login"}>
                Login
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
