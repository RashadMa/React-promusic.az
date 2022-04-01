import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../../redux/actions/categoryActions";
import { getCategories } from "../../../redux/actions/categoryActions";
import "./categoryCard.scss";

function CategoryCard() {
  const { items } = useSelector((state) => state.categoryListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getCategories()(dispatch);
  }, [dispatch]);

  return (
    <>
      <div className="category-cards d-grid">
        {items?.map((item) => (
          <div key={item.id} className="category-card-item">
            <div className="overlay"></div>
            <img
              src={"https://localhost:5001/images/categories/" + item.image}
              alt=""
            />
            <div className="category-container">
              <div className="category-list">
                <h3 className="title">{item.name}</h3>
                <ul className="cat-list">
                  <li className="cat-list-item">
                    <a href="/product-list?categories=5">Keyboards</a>
                  </li>
                  <li className="cat-list-item">
                    <a href="/product-list?categories=16">Digital pianos</a>
                  </li>
                  <li className="cat-list-item">
                    <a href="/product-list?categories=17">Stands</a>
                  </li>
                  <li className="cat-list-item">
                    <a href="/product-list?categories=18">Key pedals</a>
                  </li>
                  <li className="cat-list-item">
                    <a href="/product-list?categories=19">Bags</a>
                  </li>
                </ul>
              </div>
              <a
                className="category-card-btn d-flex align-items-center justify-content-center"
                href="/"
              >
                Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCard);
