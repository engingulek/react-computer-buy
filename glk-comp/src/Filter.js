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

  useEffect(() => {
    const ref = db.collection("filter");

    ref.onSnapshot((querySnapshot) => {
      const items = [];
      const subtitle =[];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        
        
          db.collection("filter").doc(doc.id).collection("subtitle").onSnapshot((onSnapshot)=>{
            onSnapshot.forEach((doc)=>{
              subtitle.push(doc.data())
              console.log(doc.data())
              
            })
          })
        
        
      });
      setFilterName(items);
      setSub(subtitle)
    });

  
  }, []);
  return (
    <div className="filter">
      <div className="filterContainer">
    





         <Collapses filter={name}
         sub={sub} /> 
       
      </div>
    </div>
  );
}

export default Filter;