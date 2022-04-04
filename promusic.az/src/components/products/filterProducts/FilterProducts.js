import React from "react";
import FilterByBrands from "./filterByBrands/FilterByBrands";
import FilterByDiscount from "./filterByDiscount/FilterByDiscount";
import "./filterProducts.scss";

function FilterProducts() {
  return (
    <div className="my-5">
      <FilterByDiscount />
      <FilterByBrands />
    </div>
  );
}

export default FilterProducts;
