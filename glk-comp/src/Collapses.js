import React, { useEffect, useState } from "react";
import { Collapse } from "reactstrap";
import db from "./firebase";
function Collapses({ filter,sub }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e) => {
    setIsOpen(!isOpen);
  
  };

  return (
    <div>
      <div className="markalar">
        <div>

        {
          db.collection("filter").doc("1").collection("subtitle").onSnapshot((onSnapshot)=>(
            onSnapshot.docs.map((doc)=>(
            
              <button  className="collapseButton" onClick={toggle}>
                 
                {doc.data().subtitle}
              </button>
            ))
          ))
        }

   
          
            
              
                
                 



               

             

              
            </div>
          
        </div>
      </div>
  

     
    
  );
}

export default Collapses;