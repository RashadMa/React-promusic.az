import React from "react";
import { BiHeartCircle } from "react-icons/bi";
import { BsCurrencyDollar, BsCart3 } from "react-icons/bs";
import { useHistory, useParams } from "react-router-dom";
import { Row } from "reactstrap";
import "./productCard.scss";

function ProductCard(props) {
  const { id: subCategoryId } = useParams();
  const history = useHistory();
  const filterProducts = () => {
    return props.items?.filter(
      (item) => item.subCategoryId === Number(subCategoryId)
    );
  };
  const productList = filterProducts();
  return (
    <>
      {props.items ? (
        <div className="d-grid cards my-5">
          {productList.length ? (
            productList.map((item) => (
              <div
                onClick={() => {
                  history.push(`/product/${item.id}`);
                }}
                key={item.id}
                className="none"
              >
                <div className="product-slider-card">
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
                          <BsCart3 className="wish" />
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
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
