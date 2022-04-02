import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as settingActions from "../../../redux/actions/settingActions";
import { getSettings } from "../../../redux/actions/settingActions";

function LogoDark() {
  const { items } = useSelector((state) => state.settingListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getSettings()(dispatch);
  }, [dispatch]);
  return (
    <>
      {items?.map(({ key, value }) => {
        if (key === "Phone") {
          return value;
        }
        return null;
      })}
    </>
  );
}

function mapStateToProps(state) {
  return {
    settings: state.settingListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getSettings: bindActionCreators(settingActions.getSettings, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoDark);
