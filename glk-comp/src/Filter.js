import React, { useEffect, useState } from "react";

import "./Filter.css";
import Collapses from "./Collapses";
import { useSelector } from "react-redux";
import { setFiltername } from "./features/filterSlice";
import db from "./firebase";
function Filter() {
    const filterName = useSelector(setFiltername);
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