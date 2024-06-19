import React from "react";
import PropTypes from "prop-types";

// default parameter values

export default function About({ age = "100" }) {
  // const addData = (val) => {
  //   alert("Data added.." + val);
  // };

  return (
    <div>
      I am {age} years old
      {/* This is About Component
      <button onClick={() => addData("user 1")}>Add Data</button> */}
    </div>
  );
}

About.propTypes = {
  age: PropTypes.string,
};
