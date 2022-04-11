import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input, Label } from "reactstrap";
import "./login.scss";

function Login() {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col className="responsive" lg="6">
            <div className="img-content"></div>
          </Col>
          <Col lg="4">
            <h1 class="title">Login</h1>
            <h3 class="subtitle">
              Login for shopping or create a new account!
            </h3>
            <form>
              <Label for="name">Name</Label>
              <Input
                className="email-input"
                type="text"
                name="name"
                id="name"
                placeholder="example@example.com"
              />
              <Label for="password">Password</Label>
              <Input
                className="password-input mb-4"
                type="password"
                name="password"
                id="password"
                placeholder="Passowrd"
              />
              <button className="submit-btn-login">Login</button>
            </form>
            <div class="bottom-login-class">
              Do not have an account?{" "}
              <Link className="to-register" to={"/register"}>
                Register
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
