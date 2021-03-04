import React, { useEffect, useState } from "react";
import { Collapse } from "reactstrap";
import {useDispatch, useSelector} from "react-redux"
import db from "./firebase";
import { setFiltername } from "./features/filterSlice";


function Collapses() {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState([]);
  const {filterName} =useSelector(state=>state.filter)
  const dispatch = useDispatch()
 
 

  const toggle = (e) => {
    setIsOpen(!isOpen);
    console.log(e.target.id);
  };

  useEffect(() => {
    
    db.collection("filter").onSnapshot((onSnapshot) => {
      const filternameitem = [];
      onSnapshot.forEach((doc) => {
        filternameitem.push(doc.data());
      });
      setFilter(filternameitem);
    });
  

    console.log(filterName)
  }, []);

  const selectFilter=(sub)=>{
   dispatch(setFiltername(sub))
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
