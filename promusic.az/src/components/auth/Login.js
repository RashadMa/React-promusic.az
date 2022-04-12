import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Input, Label } from "reactstrap";
import { signIn, signUp } from "../../redux/actions/authActions";
import "./login.scss";

function Login() {
  const auth = useSelector((state) => state);
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [creds, setCreds] = useState({
    name: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(creds, push)(dispatch);
    setCreds({ name: "", password: "" });
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value });
  };

  if (auth._id) return <Redirect to="/" />;
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col className="responsive" lg="6">
            <div className="img-content"></div>
          </Col>
          <Col lg="4">
            <h1 className="title">Login</h1>
            <h3 className="subtitle">
              Login for shopping or create a new account!
            </h3>
            <form onSubmit={handleSubmit}>
              <Label for="email">Name</Label>
              <Input
                className="email-input"
                type="email"
                name="name"
                id="email"
                placeholder="example@example.com"
                autoComplete="false"
                defaultValue={creds.email}
                onChange={handleChangeLogin}
              />
              <Label for="password">Password</Label>
              <Input
                className="password-input mb-4"
                type="password"
                name="password"
                id="password"
                autoComplete="false"
                placeholder="Passowrd"
                defaultValue={creds.password}
                onChange={handleChangeLogin}
              />
              <button className="submit-btn-login">Login</button>
            </form>
            <div className="bottom-login-class">
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
