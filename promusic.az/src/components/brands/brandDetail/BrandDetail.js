import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { getBrands } from "../../../redux/actions/brandActions";
import "./brandDetail.scss";
import BrandSlider from "../brandsSlider/BrandSlider";
import AboutBrand from "./AboutBrand";

function BrandDetail() {
  const [state, setState] = React.useState(false);
  const { items } = useSelector((state) => state.brandListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getBrands()(dispatch);
  }, [dispatch]);
  const { id: brandId } = useParams();
  const brandFilter = () => {
    return items?.filter((item) => item.id === Number(brandId));
  };
  const changeState = () => {
    setState(!state);
  };
  const brands = brandFilter();
  return (
    <Container>
      {brands?.map((item) => (
        <div key={item.id} className="brand-content my-5">
          <div className="brand-about">
            <div className="brand-image">
              <img
                src={"https://localhost:5001/images/brands/" + item.image}
                alt=""
              />
            </div>
            <h5 className="brand-title">{item.name}</h5>
          </div>
          <div className="about d-flex justify-content-center text-align-center">
            <Link onClick={changeState} className="brand-products">
              All brands
            </Link>
            <Link onClick={changeState} className="about-brand">
              About the brand
            </Link>
          </div>
          <div className="tab-contents">
            {state ? (
              <div className="content about-brnd">
                <AboutBrand items={brands} />
              </div>
            ) : (
              <div className="brand-slider content">
                <BrandSlider items={items} />
              </div>
            )}
          </div>
        </div>
      ))}
    </Container>
  );
}

export default BrandDetail;
