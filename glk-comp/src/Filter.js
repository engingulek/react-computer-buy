import React, { useEffect, useState } from "react";

import "./Filter.css";
import Collapses from "./Collapses";
import { useSelector } from "react-redux";

import db from "./firebase";
function Filter() {
    
  const [name, setFilterName] = useState([]);
  const [sub,setSub]=useState([]);


  return (
    <div className="filter">
      <div className="filterContainer">
    





         <Collapses  /> 
       
      </div>
    </div>
  );
}

export default Filter;