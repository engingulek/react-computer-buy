import React, { useEffect, useState } from "react";
import { Collapse } from "reactstrap";

function Collapses({filter}) {
  const [isOpen, setIsOpen] = useState(false);


  const toggle = (e) => {
    setIsOpen(!isOpen);
  };
  
  

  return (
    <div>
      <div className="markalar">
      <div>
      {
      filter.map((item)=>
        <div><button className="collapseButton" onClick={toggle}>{item.filterName}</button>
       
        {
          item.subtitle.map((sub)=>
         
          <Collapse isOpen={isOpen}>
          <div className="card">
            <div className="cardbody">
              <div className="checkboxs">
                <form>
                  <div>
                    <input type="checkbox" name="all" />
                    <label htmlfor="all">{sub.name}</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Collapse>
          
          )

        }
        
        </div>
      
        )
      }
      
      
    
        
       
         
           
           
         
        
        </div>
       
     

       

       
      </div>
    </div>
  );
}

export default Collapses;
