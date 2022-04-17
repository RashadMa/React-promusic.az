import axios from "axios";
import jwtDecode from "jwt-decode";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsCurrencyDollar } from "react-icons/bs";
import "./order.scss";
import Cash from "../../assets/images/background/Cash";
import { Input, Label } from "reactstrap";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

function Order() {
  const [total, setTotal] = React.useState(0);
  const history = useHistory();
  const [openForm, setOpenForm] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState("");
  let token = localStorage.getItem("token");
  token = jwtDecode(token);
  let obj = localStorage.getItem("cartItems");
  obj = JSON.parse(obj);
  React.useEffect(() => {
    let sum = 0;
    obj.forEach((cartItem) => {
      sum =
        sum +
        cartItem.salePrice *
          (1 - cartItem.discountPercent / 100) *
          cartItem.count;
    });
    setTotal(sum);
  }, [obj]);
  React.useEffect(() => {
    let cartCount = 0;
    obj.forEach((cartItem) => {
      cartCount = cartItem.count;
    });
    setCount(cartCount);
  }, [obj]);
  const [formSubmit, setFormSubmit] = React.useState({
    status: 1,
    appUserId: token.Name,
    email: "",
    adress: "",
    phone: "",
  });
  const { email, phone, adress } = formSubmit;
  const handleInputChange = (e) => {
    let { id, value } = e.target;
    setFormSubmit({ ...formSubmit, [id]: value });
  };
  const changeState = () => {
    setOpenForm(!openForm);
  };
  let orderPost = {
    products: obj,
    order: formSubmit,
    count: count,
  };

  const post = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:5001/member/api/Orders", orderPost, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(console.log(orderPost), history.push("/"))
      .then(
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your order is ready",
          showConfirmButton: false,
          timer: 900,
        })
      )
      .catch((error) => console.log(error));
    localStorage.removeItem("cartItems");
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg="6">
            <div className="content-container my-5">
              <div className="order-header d-flex align-items-center justify-content-between">
                <h3 className="my-0">Total:</h3>
                <p className="my-0">
                  {total} <BsCurrencyDollar className="mb-1" />{" "}
                </p>
              </div>
              <div className="order-body">
                <h4>Free Shipping</h4>
                <div className="cash-pay my-3">
                  <Cash />
                </div>
                <div className="order-confirm">
                  <button form="order-form" className="confirm">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6" className="d-flex justify-content-center">
            <Col lg="6">
              {openForm ? (
                <div className="my-5">
                  <form id="order-form" onSubmit={post}>
                    <Label for="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      onChange={handleInputChange}
                      placeholder="example@example.com"
                      defaultValue={email}
                    />
                    <Label for="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="number"
                      onChange={handleInputChange}
                      placeholder="000-000-00-00"
                      defaultValue={phone}
                    />
                    <Label for="adress">Adress</Label>
                    <Input
                      id="adress"
                      type="text"
                      placeholder="Example st. example 7"
                      onChange={handleInputChange}
                      defaultValue={adress}
                    />
                  </form>
                </div>
              ) : (
                <div className="my-5">
                  <div className="border-sec">
                    <div className="map-section d-flex align-items-center justify-content-center">
                      <button onClick={changeState} className="open-form">
                        Fill form
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Order;
