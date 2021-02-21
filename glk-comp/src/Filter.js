import React, { useEffect, useState } from "react";

import "./Filter.css";
import Collapses from "./Collapses";
function Filter() {
 
  const filter = [
    {
      filterName: "Brans",
      subtitle: [
        {
          name: "Lenova",
        },
        {
          name: "Asus",
        },
      ],
    },
    {
      filterName: "RAM",
      subtitle: [
        {
          name: "8",
        },
        {
          name: "16",
        },
      ],
    },
  ];

 

  return (
    <div className="filter">
      <div className="filterContainer">
     
        
        <Collapses 
        filter={filter}
       
          
        
        />
        
     
      
      
   
     
        
      
      </div>
    </div>
  );
}

export default Filter;
