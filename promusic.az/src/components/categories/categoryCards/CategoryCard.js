import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getCategories } from "../../../redux/actions/categoryActions";
import SubCategoryList from "../subCategories/SubCategoryList";

import "./categoryCard.scss";

function CategoryCard() {
  const { items } = useSelector((state) => state.categoryListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getCategories()(dispatch);
  }, [dispatch]);
  const history = useHistory();
  return (
    <>
      <div className="category-cards d-grid">
        {items?.map((category) => (
          <div key={category.id} className="category-card-item">
            <div className="overlay"></div>
            <img
              src={"https://localhost:5001/images/categories/" + category.image}
              alt=""
            />
            <div className="category-container">
              <div className="category-list">
                <h3
                  onClick={() => {
                    history.push(`/category/${category.id}`);
                  }}
                  className="title"
                >
                  {category.name}
                </h3>
                <SubCategoryList id={category.id} />
              </div>
            </div>
            <Link
              to={`/category/${category.id}`}
              className="category-card-btn d-flex align-items-center justify-content-center"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default CategoryCard;
