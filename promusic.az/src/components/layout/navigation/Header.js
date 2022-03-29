import React from "react";
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";

function Header() {
  const [state, setState] = React.useState(false);
  const changeState = () => {
    setState(!state);
  };
  return (
    <>
      {state ? (
        <NavigationMobile changeState={changeState} />
      ) : (
        <Navigation changeState={changeState} />
      )}
    </>
  );
}

export default Header;
