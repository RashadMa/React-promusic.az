import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../../../redux/actions/brandActions";
import { Accordion } from "react-bootstrap";
import "./filterByBrands.scss";
import { getProducts } from "../../../../redux/actions/productActions";
function FilterByBrands() {
  const { items } = useSelector((state) => state.brandListReducer);
  const productsFiltered = useSelector(
    (state) => state.productListReducerFiltered
  );
  const [isChecked] = React.useState(false);
  const [elements, setElements] = React.useState([]);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const { name, checked } = e.target;
    setElements([...elements, e.target]);

    console.log("productsFiltered", checked);
    checked
      ? dispatch({
          type: "GET_PRODUCT_SUCCESS",
          payload: {
            ...productsFiltered,
            items: productsFiltered?.items?.filter(
              (product) => product?.brand?.name === name
            ),
          },
        })
      : getProducts()(dispatch);
  };

  React.useEffect(() => {
    getBrands()(dispatch);
  }, [dispatch]);
  return (
    <>
      <div>
        <Accordion className="acc" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Brands</Accordion.Header>
            <Accordion.Body>
              <div className="content">
                {items?.slice(0, 4).map((item) => (
                  <label
                    key={item.id}
                    htmlFor={"brands" + item?.id}
                    className="custom-checkbox"
                  >
                    <input
                      type="checkbox"
                      id={"brands" + item.id}
                      name={item?.name}
                      value={isChecked}
                      onChange={handleFilter}
                      className="custom-checkbox-input"
                    />
                    {item?.name}
                  </label>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default FilterByBrands;
