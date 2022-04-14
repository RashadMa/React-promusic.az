import alertify from "alertifyjs";
import React from "react";
import { BsCurrencyDollar, BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Row } from "reactstrap";
import "./productCard.scss";

function ProductCard(props) {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { id: subCategoryId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const filterProducts = () => {
    return props.items?.filter(
      (item) => item.subCategoryId === Number(subCategoryId)
    );
  };

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    alertify.success(product.name + " Added to cart");
  };
  const productList = filterProducts();
  return (
    <>
      {props.items ? (
        <div className="d-grid cards my-5">
          {productList.length ? (
            productList.map((item) => (
              <div key={item.id} className="product-slider-card">
                <div
                  onClick={() => {
                    history.push(`/product/${item.id}`);
                  }}
                  key={item.id}
                  className="none"
                >
                  <div>
                    <Row>
                      <div className="product-slider-header">
                        <div className="slider-image">
                          <img
                            src={
                              "https://localhost:5001/images/products/" +
                              item.image
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    </Row>
                  </div>
                </div>
                <Row>
                  <div className="product-slider-footer">
                    <div className="d-flex test">
                      <div className="col-10">
                        <Row>
                          <p className="name">{item.name}</p>
                        </Row>
                        <Row>
                          <p className="price">
                            {item.salePrice}
                            <BsCurrencyDollar className="dollar-sign" />
                          </p>
                        </Row>
                      </div>
                      <div className="col-2">
                        <BsCart3
                          onClick={() => addToCart(item)}
                          className="wish"
                        />
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            ))
          ) : (
            <h4>Empty</h4>
          )}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default ProductCard;
