import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderData.scss";
import { settings } from "./settings";
import { useDispatch, useSelector } from "react-redux";
import { getSliders } from "../../../redux/actions/sliderActions";

function SliderData() {
  const { items } = useSelector((state) => state.sliderListReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getSliders()(dispatch);
  }, [dispatch]);

  return (
    <>
      <Slider {...settings} className="slider-inline">
        {items?.map((slider) => (
          <div key={slider.id} className="image-container">
            <img
              className="slider-items"
              src={"https://localhost:5001/images/slider/" + slider.image}
              alt="salam"
            />
            <div className="content">
              <div className="title">{slider.title}</div>
              <div className="button">{slider.btnText}</div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default SliderData;
