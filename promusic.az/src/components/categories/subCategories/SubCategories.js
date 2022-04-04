import React from "react";
import "./subCategories.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSubCategories } from "../../../redux/actions/categoryActions";
function SubCategories() {
  const { id: categoryId } = useParams();
  const { items } = useSelector((state) => state.subCategoryListReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getSubCategories()(dispatch);
  }, [dispatch]);

  const filterSubCategories = () => {
    return items?.filter((item) => item.categoryId === Number(categoryId));
  };
  const subCategories = filterSubCategories();

  return (
    <>
      <div className="category-name mb-4">
        <h4 className="sub-category-page mb-2">Guitars</h4>
      </div>

      {items ? (
        <div className="sub-category-cards d-grid">
          {subCategories.length ? (
            subCategories.map((item) => (
              <div className="sub-category-item">
                <div className="sub-category-top">
                  <img
                    className="sub-category-img"
                    src={
                      "https://localhost:5001/images/subcategories/" +
                      item.image
                    }
                    alt=""
                  />
                </div>
                <div className="sub-category-bottom">
                  <div className="sub-category-title">{item.name}</div>
                </div>
              </div>
            ))
          ) : (
            <h1>Empty</h1>
          )}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}

      {/* <div className="sub-category-item">
        <div className="sub-category-top">
          <img alt="" />
        </div>
        <div className="sub-category-bottom">
          <div></div>
        </div>
      </div> */}

      {/* {items ? (
        <ul className="cat-list">
          {subCategories.length ? (
            subCategories.map((item) => (
              <li key={item.id} className="cat-list-item">
                <a href="/product-list?categories=5">{item.name}</a>
              </li>
            ))
          ) : (
            <h1>Empty</h1>
          )}
        </ul>
      ) : (
        <h1>Loading...</h1>
      )} */}
    </>
  );
}

export default SubCategories;
