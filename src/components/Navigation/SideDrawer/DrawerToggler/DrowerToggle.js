
import React from "react";
import "./DrowerToggle.css";
const drowerToggle = (props) => {
  return (
    <div className="DrawerToggle" onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drowerToggle;
