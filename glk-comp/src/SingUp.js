import React from 'react'
import "./SingUp.css"
function SingUp() {
    return (
        <div className="singIn__container">
        <div className="singIn">
          <div className="title">Create Account</div>
          <div className="singInForm">
            <form>
              <div className="nameSurname">
                <label>Ad-Soyad</label>
                <input type="text" />
              </div>
              <div className="eposta">
                <label>E-posta</label>
                <input type="text" />
              </div>
              <div className="password">
                
                  <label>Password</label>
                  <input type="text" />
                
                
                  <label>Password Again</label>
                  <input type="text" />
                
              </div>
              <div className="termsofUse">
              <div>
              <input type="checkbox" />
              <label>Kullanım Koşullarını Okudum Kabul Ediyorum</label>

              </div>
              
            </div>
              <div className="createButton">
                <button>Create Account</button>
              </div>
              <div className="GoogleSignIn">
            <button>Google Giris</button>
          </div>
              
            </form>
            
          </div>
          
        </div>
      </div>
    )
}

export default SingUp
