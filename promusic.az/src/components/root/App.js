import { Route, Switch } from "react-router-dom";
import Navigation from "../layout/navigation/Navigation";
import NavigationMobile from "../layout/navigation/NavigationMobile";
import Dashboard from "./Dashboard";

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <NavigationMobile />
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
