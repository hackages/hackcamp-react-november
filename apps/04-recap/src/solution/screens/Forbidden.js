import React from "react";
import { Link } from "react-router-dom";

export const Forbidden = () => {
  return (
    <div>
      <h2>No access!!!!!!!!!!!!</h2>
      <h3>Please login</h3>
      <h3>
        Or go to the <Link to="/">home page</Link>
      </h3>
    </div>
  );
};
