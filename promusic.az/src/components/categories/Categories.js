import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import CategoryCard from "./categoryCards/CategoryCard";
import CategoryList from "./categoryList/CategoryList";
import CategoryListMobile from "./categoryList/CategoryListMobile";

function Categories() {
  const { items } = useSelector((state) => state.categoryListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getCategories()(dispatch);
  }, [dispatch]);
  return (
    <>
      <CategoryCard categories={items} />
      <CategoryList categories={items} />
      <CategoryListMobile categories={items} />
    </>
  );
}

export default Categories;
