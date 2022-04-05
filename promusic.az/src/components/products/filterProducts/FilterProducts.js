import React from "react";
import FilterByBrands from "./filterByBrands/FilterByBrands";
import FilterByDiscount from "./filterByDiscount/FilterByDiscount";
import FilterByPrice from "./filterByPrice/FilterByPrice";
import FilterByRate from "./filterByRate/FilterByRate";
import "./filterProducts.scss";

function FilterProducts(props) {
  const filterProds = props.newProds;
  return (
    <div className="my-5">
      <FilterByDiscount filterProds={filterProds} />
      <FilterByBrands />
      <FilterByRate />
      <FilterByPrice />
    </div>
  );
}

export default FilterProducts;
