import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSubCategories } from "../../../redux/actions/categoryActions";

function SubCategoryList(props) {
  const categoryId = props.id;
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
      {items ? (
        <ul className="cat-list">
          {subCategories.length ? (
            subCategories.map((item) => (
              <li key={item.id} className="cat-list-item">
                <Link to={`/products/${item.id}`}>{item.name}</Link>
              </li>
            ))
          ) : (
            <h1 style={{ color: "white" }}>Empty</h1>
          )}
        </ul>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default SubCategoryList;
