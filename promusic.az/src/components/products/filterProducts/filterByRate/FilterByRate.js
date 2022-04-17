import React from "react";
import { Accordion } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../redux/actions/productActions";


function FilterByRate() {

  const dispatch = useDispatch()
  const { items: products } = useSelector((state) => state.productListReducer);

  const handleFilter = (e) => {
    const { checked, value } = e.target
    checked ? dispatch({
      type: "GET_PRODUCT_SUCCESS",
      payload: {...products, items: products?.filter((product)=>checked &&  product?.rate === Number(value))}
    }) : getProducts()(dispatch)
  }
  return (
    <>
      <div>
        <Accordion className="acc" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Rating</Accordion.Header>
            <Accordion.Body>
              <div className="content">
                <label htmlFor="5rate" className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="5rate"
                    name="rate"
                    value="5"
                    onChange={handleFilter}
                    className="custom-checkbox-input"
                  />
                  <span className="d-flex">
                    5 <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                  </span>
                </label>
                <label htmlFor="4rate" className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="4rate"
                    name="rate"
                    value="4"
                    onChange={handleFilter}
                    className="custom-checkbox-input"
                  />
                  <span className="d-flex">
                    4 <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                  </span>
                </label>
                <label htmlFor="3rate" className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="3rate"
                    name="rate"
                    value="3"
                    onChange={handleFilter}
                    className="custom-checkbox-input"
                  />
                  <span className="d-flex">
                    3 <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                  </span>
                </label>
                <label htmlFor="2rate" className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="2rate"
                    name="rate"
                    value="2"
                    onChange={handleFilter}
                    className="custom-checkbox-input"
                  />
                  <span className="d-flex">
                    2 <AiFillStar className="star" />
                    <AiFillStar className="star" />
                  </span>
                </label>
                <label htmlFor="1rate" className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="1rate"
                    name="rate"
                    value="1"
                    onChange={handleFilter}
                    className="custom-checkbox-input"
                  />
                  <span className="d-flex">
                    1 <AiFillStar className="star" />
                  </span>
                </label>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default FilterByRate;
