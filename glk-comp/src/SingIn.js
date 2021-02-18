import React from 'react'
import "./SingIn.css"

function SingIn() {
    return (
        <div className="singIn__container">
        <div className="singIn">
          <div className="singInForm">
            <div className="phoneNumberCont">
              <div>
                <select>
                  <option value="0">+90</option>
                  <option value="1">+190</option>
                  <option value="2">+230</option>
                </select>

                <input type="text" maxLength="10" placeholder="Phone Number" />
              </div>
              <div className="phoneCont bttn">
                <button> Continue with phone</button>
              </div>
              <hr/>
              
              <div className="googleCont bttn">
                <button>Continue with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SingIn
