import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { getBrands } from "../../../redux/actions/brandActions";
import "slick-carousel/slick/slick-theme.css";
import "./brandSlider.scss";
import { Row } from "reactstrap";
import { settings } from "./settings";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function BrandSlider() {
  const { items } = useSelector((state) => state.brandListReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getBrands()(dispatch);
  }, [dispatch]);
  const history = useHistory();
  return (
    <>
      <div className="brand-slider-header">
        <Row>
          <h1 className="slider-title">Brands</h1>
        </Row>
        <Slider {...settings} className="brand-slider">
          {items?.map((item) => (
            <div
              onClick={() => {
                history.push(`/brand/${item.id}`);
              }}
              key={item.id}
              className="brand-slider-card"
            >
              <div className="brand-slider-href">
                <div className="brand-slider-image">
                  <img
                    src={"https://localhost:5001/images/brands/" + item.image}
                    alt="brand"
                  />
                </div>
                <div className="brand-slider-content">
                  <h6 className="brand-name">{item.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default BrandSlider;
