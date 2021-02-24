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
          {filter.map((filter,id) => (
            <div>
              <button key={id} className="collapseButton" onClick={toggle}>
                 {filter.filtername}
                
              </button>
              {
                sub.map((value,index)=>(
                  <Collapse isOpen={isOpen}>
                <div className="card">
                  <div className="cardbody">
                    <div className="checkboxs">
                      <form>
                      {
                        id===0?<div>
                          <input type="checkbox" name="all" />
                          <label htmlfor="all">{value.subtitle}</label>
                        </div>:null
                       
                       
                      }
                      
                      </form>
                    </div>
                  </div>
                </div>
              </Collapse>



                ))
              }

             

              
            </div>
          ))}
        </div>
      </div>
  

     
    </div>
  );
}

export default Collapses;