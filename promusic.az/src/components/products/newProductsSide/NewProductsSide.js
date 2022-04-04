import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/productActions";
import "./newProductsSide.scss";
import { BsCurrencyDollar } from "react-icons/bs";

function NewProductsSide() {
  const { items } = useSelector((state) => state.productListReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getProducts()(dispatch);
  }, [dispatch]);
  return (
    <>
      <div className="category-new-products mt-4">
        <div className="product-header">New products</div>
        <ul className="cat-product-list">
          {items
            ?.slice(0, 3)
            .reverse()
            .map((item) => (
              <li key={item.id} className="cat-product-list-item">
                <a
                  href="/"
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="product-detail">
                    <p className="product-name">{item.name}</p>
                    <div className="product-price">
                      <div className="new-price d-flex align-items-center">
                        {item.salePrice}
                        <BsCurrencyDollar style={{ fill: "#ff2459" }} />
                      </div>
                    </div>
                  </div>
                  <div className="img-container">
                    <img
                      alt=""
                      src={
                        "https://localhost:5001/images/products/" + item.image
                      }
                    />
                  </div>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default NewProductsSide;
