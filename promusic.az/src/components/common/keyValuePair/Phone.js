import React from "react";
import { useDispatch, useSelector } from "react-redux";
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

export default LogoDark;
