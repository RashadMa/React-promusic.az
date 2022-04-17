import React from "react";
import { Accordion } from "react-bootstrap";
// import { Slider } from "@material-ui/core";
import "./filterByPrice.scss";

function FilterByPrice() {
    // function valuetext(value) {
    //   return `${value}°C`;
    // }
    // const [value, setValue] = React.useState([20, 37]);

    // const handleChange = (event, newValue) => {
    //   setValue(newValue);
    // };
  return (
    <>
      <Accordion className="acc" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Price range</Accordion.Header>
          <Accordion.Body>
            <div className="content">
              <div className="range-slider">
                <form>
                  <div
                    className="range"
                    style={{
                      position: "relative",
                      userSelect: "none",
                      height: "4px",
                      width: "auto",
                      background: "rgb(255, 218, 147)",
                    }}
                  >
                    <button
                      role="slider"
                      aria-valuemin="0"
                      aria-valuemax="7500"
                      aria-valuenow="0"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "0%",
                        zIndex: " 0",
                        transform: "translate(-50%, -50%)",
                        width: "14px",
                        height: " 14px",
                        outline: "none",
                        borderRadius: "100%",
                        background: "rgb(255, 218, 147)",
                        border: "none",
                      }}
                    />
                    <button
                      role="slider"
                      aria-valuemin="0"
                      aria-valuemax="7500"
                      aria-valuenow="7500"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "100%",
                        zIndex: "0",
                        transform: "translate(-50%, -50%)",
                        width: "14px",
                        height: "14px",
                        outline: "none",
                        borderRadius: "100%",
                        background: "rgb(255, 218, 147)",
                        border: "none",
                      }}
                    />
                  </div>
                  <div className="input-container">
                    <input
                      className="first"
                      type="number"
                      placeholder="Start price"
                    />
                    <input type="number" placeholder="End price" />
                  </div>
                  <button className="submit-btn" type="button">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      /> */}
    </>
  );
}

export default FilterByPrice;
