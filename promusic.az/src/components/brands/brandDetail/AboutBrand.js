import React from "react";

function AboutBrand(props) {
  return (
    <>
      {props.items?.map((item) => (
        <div className="fools" key={item.id}>{item.desc}</div>
      ))}
    </>
  );
}

export default AboutBrand;
