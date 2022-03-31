import React from "react";
import "./Information.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { getInformation } from "../../redux/actions/informationActions";
import * as informationActions from "../../redux/actions/informationActions";

function Information() {
  const { items } = useSelector((state) => state.informationListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getInformation()(dispatch);
  }, [dispatch]);
  return (
    <>
      <div className="info">
      {items?.map((item) => (
        <div key={item.id} className="info-card">
          <div className="info-top d-flex align-items-center">
            <div className="info-img-box">
              <img
                className="info-img"
                src={"https://localhost:5001/images/information/" + item.image}
                alt=""
              />
            </div>
            <h1 className="info-title">{item.title}</h1>
          </div>
          <p className="info-content">{item.desc}</p>
        </div>
      ))}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    informations: state.informationListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getInformation: bindActionCreators(
        informationActions.getInformation,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Information);
