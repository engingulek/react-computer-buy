import React, { useEffect, useState } from "react";
import { Collapse } from "reactstrap";
import {useDispatch,} from "react-redux"
import db from "./firebase";
import { setFilterbransname,setFilterremove } from "./features/filterSlice";
function Collapses() {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState([]);
  const [check,setCheck]=useState("")
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

  const selectFilter=(sub)=>{
      dispatch(setFilterbransname(sub))
     }

  const removeFilter =(removeSub)=>{
    dispatch(setFilterremove(removeSub))
    setCheck(removeSub)
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
                  <div onClick={()=>selectFilter(sub)} > 
                    <label for={sub}   >{sub}</label>
                  </div>
                  <div  className="onlyFiltersubname">
                    <label  onClick={()=>removeFilter(sub)} >sadece</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </Collapse>
            ))}
          </>
          ))
        }
        </div>
      </div>
    </div>
  );
}
export default Collapses;
