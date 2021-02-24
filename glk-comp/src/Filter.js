import React, { useEffect, useState } from "react";

import "./Filter.css";
import Collapses from "./Collapses";
import { useSelector } from "react-redux";
import { setFiltername } from "./features/filterSlice";
import db from "./firebase";
function Filter() {
  const filterName = useSelector(setFiltername);
  const [name, setFilterName] = useState([]);

  useEffect(() => {
    const ref = db.collection("filter");

    ref.onSnapshot((querySnapshot) => {
      const items = [];

      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setFilterName(items);
      name.map((name) => console.log(name));
    });
  }, []);

  // useEffect(()=>{
  //  db.collection('filter').onSnapshot(snapshot=>(
  //   setFilterName(snapshot.docs(doc=>({
  //     filtername:doc.filtername
  //   })))
  //  )
  // },[])

  return (
    <div className="filter">
      <div className="filterContainer">
        <Collapses filter={name} />
      </div>
    </div>
  );
}

export default Filter;
