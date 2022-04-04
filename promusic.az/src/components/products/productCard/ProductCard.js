import React from "react";
import { BiHeartCircle } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row } from "reactstrap";
import { getProducts } from "../../../redux/actions/productActions";
import "./productCard.scss";

function ProductCard() {
  const { id: subCategoryId } = useParams();
  const { items } = useSelector((state) => state.productListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getProducts()(dispatch);
  }, [dispatch]);
  const filterProducts = () => {
    return items?.filter(
      (item) => item.subCategoryId === Number(subCategoryId)
    );
  };
  const productList = filterProducts();
  return (
    <>
      {items ? (
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
