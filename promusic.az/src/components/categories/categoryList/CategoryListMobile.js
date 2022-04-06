import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/actions/categoryActions";

function CategoryListMobile(props) {
  const { items } = useSelector((state) => state.categoryListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getCategories()(dispatch);
  }, [dispatch]);

  return (
    <ul className="categories">
      {items?.map((item) => (
        <li key={item.id}>
          <a>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default CategoryListMobile;
