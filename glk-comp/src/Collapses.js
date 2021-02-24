import React, { useEffect, useState } from "react";
import { Collapse } from "reactstrap";

function Collapses({ filter }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="markalar">
        <div>
          {filter.map((filter) => (
            <div>
              <button className="collapseButton" onClick={toggle}>
                {filter.filtername}
              </button>

              <Collapse isOpen={isOpen}>
                <div className="card">
                  <div className="cardbody">
                    <div className="checkboxs">
                      <form>
                        <div>
                          <input type="checkbox" name="all" />
                          <label htmlfor="all"></label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collapses;
