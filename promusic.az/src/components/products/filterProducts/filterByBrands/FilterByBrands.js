import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../../../redux/actions/brandActions";
import { Accordion } from "react-bootstrap";
import "./filterByBrands.scss";

function FilterByBrands() {
  const { items } = useSelector((state) => state.brandListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getBrands()(dispatch);
  }, [dispatch]);
  return (
    <>
      <div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Brands</Accordion.Header>
            <Accordion.Body>
              {/* <div className="filter-by-price">
  <div className="header">
    <div className="header-wrapper">
      <h4>Brands</h4>
    </div>
    <button className="btn"></button>
  </div> */}
              <div className="content">
                {items?.slice(0, 4).map((item) => (
                  <label
                    key={item.id}
                    htmlFor={"brands" + item.id}
                    className="custom-checkbox"
                  >
                    <input
                      type="checkbox"
                      id={"brands" + item.id}
                      name="brands"
                      className="custom-checkbox-input"
                    />
                    {item.name}
                  </label>
                ))}
              </div>
              {/* </div>  */}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default FilterByBrands;
