import React from "react";
import { Accordion } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

function FilterByRate() {
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
