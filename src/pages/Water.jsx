import React from "react";
import { Outlet } from "react-router-dom";
import "./Water.css";

const Water = () => {
  return (
    <div className="content">
      <Outlet />
    </div>
  );
};

export default Water;
