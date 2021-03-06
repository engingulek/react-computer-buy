import React, { useState } from "react";
import "./Filter.css";
import Collapses from "./Collapses";
function Filter() {
  return (
    <div className="filter">
      <div className="filterContainer">
         <Collapses  /> 
      </div>
    </div>
  );
}

export default Filter;