import React, { useEffect, useState } from "react";
import { Collapse } from "reactstrap";
import {useDispatch, useSelector} from "react-redux"
import db from "./firebase";
import { setFilterbransname ,setFilterram} from "./features/filterSlice";


function Collapses() {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState([]);
  
  const dispatch = useDispatch()
 
 

  const toggle = (e) => {
    setIsOpen(!isOpen);
    
  };

  useEffect(() => {
    
    db.collection("filter").onSnapshot((onSnapshot) => {
      const filternameitem = [];
      onSnapshot.forEach((doc) => {
        filternameitem.push(doc.data());
      });
      setFilter(filternameitem);
    });
  

    
  }, []);

  const selectFilter=(sub,filtername)=>{
    
      dispatch(setFilterbransname(sub))
      
    

   
  
   
   
   
   
  }
  return (
    <div>
      <div className="markalar">
      <div>
        {
          filter.map((item)=>(
          <>  <button className="collapseButton" onClick={toggle}>
            {item.filtername}
          </button>
          {
            item.subtitle.map((sub)=>(
              <Collapse isOpen={true}>
          <div className="card">
            <div className="cardbody">
              <div className="checkboxs">
                <form>
                  <div onClick={()=>selectFilter(sub)}> 
                    <input type="checkbox" name="all" />
                    <label htmlfor="all"  >{sub}</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
       
          </Collapse>
   

            ))
            
          }
         
          </>
          ))
          
        }
       
        </div>

      </div>
    </div>
  );
}

export default Collapses;
