import React from "react";
import "./subCategories.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getSubCategories } from "../../../redux/actions/categoryActions";
function SubCategories() {
  const { id: categoryId } = useParams();
  const { items } = useSelector((state) => state.subCategoryListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getSubCategories()(dispatch);
  }, [dispatch]);

  const history = useHistory();
  const filterSubCategories = () => {
    return items?.filter((item) => item.categoryId === Number(categoryId));
  };
  const subCategories = filterSubCategories();
  return (
    <>
      <div className="category-name mb-4">
        {subCategories?.slice(0, 1).map((sub) => (
          <h4 key={sub.id} className="sub-category-page mb-2">{sub.category.name}</h4>
        ))}
      </div>
      {items ? (
        <div className="sub-category-cards d-grid">
          {subCategories.length ? (
            subCategories.map((item) => (
              <div
                onClick={() => {
                  history.push(`/products/${item.id}`);
                }}
                key={item.id}
                className="sub-category-item"
              >
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
            <h4>Empty</h4>
          )}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default SubCategories;
