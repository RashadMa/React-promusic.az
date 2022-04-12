import React, { useState } from "react";
import { Row, Container, Col, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Input, Label } from "reactstrap";
import { signUp } from "../../redux/actions/authActions";
import "./login.scss";

function Register() {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user, push));
  };

  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col className="responsive" lg="6">
            <div className="img-content"></div>
          </Col>
          <Col lg="6">
            <h1 className="title">Create a new account</h1>
            <h3 className="subtitle">
              Log in to your account by confirming your mobile number and easily
              manage your orders.
            </h3>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col lg="6">
                  <Label for="email">E-mail</Label>
                  <Input
                    className="email-input"
                    type="email"
                    name="email"
                    autoComplete="false"
                    id="email"
                    placeholder="example@example.com"
                    defaultValue={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </Col>
                <Col lg="6">
                  <Label for="username">Username</Label>
                  <Input
                    className="email-input"
                    type="text"
                    name="username"
                    autoComplete="false"
                    id="username"
                    placeholder="Your username"
                    defaultValue={user.userName}
                    onChange={(e) =>
                      setUser({ ...user, userName: e.target.value })
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col lg="6">
                  <Label for="name">Name</Label>
                  <Input
                    className="email-input"
                    type="text"
                    autoComplete="false"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    defaultValue={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </Col>
                <Col lg="6">
                  <Label for="password">Password</Label>
                  <Input
                    className="password-input mb-4"
                    type="password"
                    name="password"
                    autoComplete="false"
                    id="password"
                    placeholder="Passowrd"
                    defaultValue={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </Col>
              </Row>

              <button className="submit-btn-login" type="submit">
                Register
              </button>
            </Form>
            <div className="bottom-login-class">
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
