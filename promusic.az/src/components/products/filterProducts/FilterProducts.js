import React from "react";
import { useSelector } from "react-redux";
import FilterByBrands from "./filterByBrands/FilterByBrands";
import FilterByRate from "./filterByRate/FilterByRate";
import "./filterProducts.scss";

function FilterProducts({ newProds, handleFilter, checked }) {
  const { items } = useSelector((state) => state.productListReducer);

  return (
    <div className="my-5">
      <FilterByBrands />
      <FilterByRate handleFilter={handleFilter} />
    </div>
  );
}

export default FilterProducts;
