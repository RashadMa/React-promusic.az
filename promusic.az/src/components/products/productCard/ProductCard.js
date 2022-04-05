import React from "react";
import { BiHeartCircle } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Row } from "reactstrap";
import "./productCard.scss";

function ProductCard(props) {
  const { id: subCategoryId } = useParams();
  const filterProducts = () => {
    return props.items?.filter(
      (item) => item.subCategoryId === Number(subCategoryId)
    );
  };
  // console.log(props.items);
  const productList = filterProducts();
  return (
    <>
      {props.items ? (
        <div className="d-grid cards my-5">
          {productList.length ? (
            productList.map((item) => (
              <div key={item.id} className="product-slider-card">
                <Row>
                  <div className="product-slider-header">
                    <div className="slider-image">
                      <img
                        src={
                          "https://localhost:5001/images/products/" + item.image
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
                        <BiHeartCircle className="wish" />
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
