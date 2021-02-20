
import React, { useState } from "react";
import { Collapse } from "reactstrap";


function Collapses({filter}) {
    const [isOpen, setIsOpen] = useState(false);
  

    const toggle = (e) =>
    {
      setIsOpen(!isOpen);
      console.log(e.target.id)
   
       
     
    }
    return (
        <div>
        <div className="markalar">
       
        
        <button className="collapseButton" onClick={toggle}>
        {filter}
        </button>

  
     
        <Collapse isOpen={isOpen}>
        <div className="card">
          <div className="cardbody">
            <div className="checkboxs">
              <form>
                <div>
                  <input type="checkbox" name="all" />
                  <label for="all">Hepsi</label>
                </div>
                <div>
        <input type="checkbox" name="ka" />
        <label htmlFor="ka">Lenova</label>
      </div>
              </form>
            </div>
          </div>
        </div>
      </Collapse>
        

   
 
      
      
    </div>
            
        </div>
    )
}

export default Collapses

