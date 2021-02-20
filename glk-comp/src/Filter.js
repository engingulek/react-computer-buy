import React from "react";

import "./Filter.css";
import Collapses from "./Collapses";
function Filter() {
  

  const filter =[
      {
          "filterName":"Msi"
      },
      {
        "filterName":"lenova"
    },
    {
        "filterName":"Mi"
    }
  ]
  





  return (
    <div className="filter">
      <div className="filterContainer">
      {
          filter.map((filter,id)=>(
            <Collapses key={id} filter={filter.filterName}/>

          ))
      }
      
      
      

      
     
       
      </div>
    </div>
  );
}

export default Filter;
