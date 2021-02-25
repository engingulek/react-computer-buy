import React, { useEffect, useState } from "react";
import { Collapse } from "reactstrap";
import db from "./firebase";

function Collapses() {
  const [isOpen, setIsOpen] = useState(false);
  const [filtername, setFiltername] = useState([]);
  const [subtitlel, setSubtitle] = useState([]);

  const toggle = (e) => {
    setIsOpen(!isOpen);
    console.log(e.target.id);
  };

  useEffect(() => {
    const subtitle = [];
    db.collection("filter").onSnapshot((onSnapshot) => {
      const filternameitem = [];
      onSnapshot.forEach((doc) => {
        filternameitem.push(doc.data());
      });
      setFiltername(filternameitem);
    });

    // subtitlel.map((sub)=>{
    //   console.log(sub)
    // });
  }, []);
  return (
    <div>
      <div className="markalar">
      <div>
        {
          filtername.map((item)=>(
          <>  <button className="collapseButton" onClick={toggle}>
            {item.filtername}
          </button>
          {
            item.subtitle.map((sub)=>(
              <Collapse isOpen={isOpen}>
          <div className="card">
            <div className="cardbody">
              <div className="checkboxs">
                <form>
                  <div>
                    <input type="checkbox" name="all" />
                    <label htmlfor="all">{sub}</label>
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
