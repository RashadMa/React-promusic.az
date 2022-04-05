import React from "react";

function FilterByDiscount(props) {
  console.log(props.filterProds);
  return (
    <>
      <div className="sidebar-category-card">
        <label htmlFor="is-new" className="custom-checkbox">
          <input
            onChange={() => props.filterProds()}
            type="radio"
            id="is-new"
            name="isNew"
            className="custom-checkbox-input"
          />
          New products
        </label>
        <label htmlFor="is-disc" className="custom-checkbox">
          <input
            type="radio"
            id="is-disc"
            name="isNew"
            className="custom-checkbox-input"
          />
          Discounted products
        </label>
      </div>
    </>
  );
}

export default FilterByDiscount;
