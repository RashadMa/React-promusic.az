import React from "react";

function FilterByDiscount() {
  return (
    <>
      <div className="sidebar-category-card">
        <label htmlFor="is-discount" className="custom-checkbox">
          <input
            type="checkbox"
            id="is-discount"
            className="custom-checkbox-input"
          />
          Discounted product
        </label>
        <label htmlFor="is-new" className="custom-checkbox">
          <input
            type="checkbox"
            id="is-new"
            className="custom-checkbox-input"
          />
          New products
        </label>
      </div>
    </>
  );
}

export default FilterByDiscount;
