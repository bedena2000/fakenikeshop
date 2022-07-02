import React from "react";
import { TbError404 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <TbError404 style={{ fontSize: "64px", margin: "0 auto" }} />
      <h1>oh sorry, something went wrong</h1>
      <NavLink to="/">Main Page</NavLink>
    </div>
  );
};

export default Error;
