import React, { useState } from 'react'
import "./SingIn.css"
import { auth, providerGoogle } from "./firebase";
import db from "./firebase"
function SingIn() {
  const [femail,setfEmail]=useState("")
  const [fpassword,setfPassword]=useState("")
  const login=(e)=>{
    e.preventDefault();
    auth.signInWithPopup(providerGoogle).catch((error)=>alert("Hata"))
  }

  const loginAccount=()=>{
    db.collection("account").onSnapshot((onSnaphot)=>{
      onSnaphot.forEach((account)=>{
        if (account.data().email===femail && account.data().password===fpassword) {
          console.log("Giriş yapıldı")   
        }
        else{
          console.log("Bilgilerinizi Kontrol Ediniz")
        }})
    })
  }
  const emailLogin=(email)=>{
    setfEmail(email)}

  const passwordLogin=(password)=>{
    setfPassword(password)
  }
    return (
        <div className="singIn__container">
        <div className="singIn">
          <div className="singInForm">
            <div className="phoneNumberCont">
              <div>
                <div>
                <label htmlFor="email" >Email</label>
                <input type="email" id="email"  placeholder="Email" 
                onChange={(e)=>emailLogin(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Password"
                onChange={(e)=>passwordLogin(e.target.value)}
                /> 
                </div>
              </div>
              <div className="phoneCont bttn">
                <button onClick={loginAccount}> Continue with Account</button>
              </div>
              <hr/>
              <div className="googleCont bttn">
                <button onClick={login}>Continue with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SingIn
