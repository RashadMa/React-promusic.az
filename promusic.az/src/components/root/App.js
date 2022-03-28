import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Navigation from "../layout/navigation/Navigation";
import Dashboard from "./Dashboard";

function App() {
  // function test(a = 0, b = 0, c = 0, ...args) {
  //   let total = a + b + c;
  //   console.log(total);
  // }

  // //0

  // function test2(a = 0, ...args) {
  //   return test(a, 40, ...args);
  // }

  // test2();

  // test2(3, 20, 30);

  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </Container>
  );
}

export default App;
