import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Col } from "reactstrap";
import { getCategories } from "../../../redux/actions/categoryActions";
import "./categoryList.scss";

function CategoryList(props) {
  const { items } = useSelector((state) => state.categoryListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getCategories()(dispatch);
  }, [dispatch]);
  const history = useHistory();
  return (
    <>
      <Col className="categories d-flex" lg="9">
        <ul className="d-flex">
          {items?.map((item) => (
            <li key={item.id}>
              <p
                onClick={() => {
                  history.push(`/categories/${item.id}`);
                }}
              >
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </Col>
    </>
  );
}

export default CategoryList;
