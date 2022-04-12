import React from "react";
import ReactDOM from "react-dom";
import App from "./root/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";


const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

