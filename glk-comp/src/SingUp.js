import React, { useState } from 'react'
import "./SingUp.css"
import db from "./firebase"
import alert from "alertifyjs"
function SingUp() {
  const [accountnameSurname,setAccountnameSurname]=useState("")
  const [accountemail,setAccountemail]=useState("")
  const [accountpassword,setAccountpassword]=useState("")
  const [accountpasswordAgain,setAccountpasswordAgain]=useState("")
  const createAccount =(e)=>{
    e.preventDefault()
    if (accountpassword===accountpasswordAgain) {
      if(accountnameSurname==="" ||accountemail===""||accountpassword===""|| accountpasswordAgain==="")  {
        alert.error("Fill in the empty")
      }
      else(
        db.collection("account").doc(accountnameSurname).set({
          nameSurname:accountnameSurname,
          email:accountemail,
          password:accountpassword,
        })
      )
    }else(
      alert.error("Match password do not")
    )
    
  }
  const nameSurname=(namesurname)=>{
    setAccountnameSurname(namesurname)
  }
  const email=(emaill)=>{
    setAccountemail(emaill)
  }
  const password=(passwordd)=>{
    setAccountpassword(passwordd)
  }
  const passwordAgain=(passwordagain)=>{
    
    setAccountpasswordAgain(passwordagain)
  }


    return (
        <div className="singIn__container">
        <div className="singIn">
          <div className="title">Create Account</div>
          <div className="singInForm">
            <form>
              <div className="nameSurname">
                <label>Ad-Soyad</label>
                <input type="text" onChange={(e)=>nameSurname(e.target.value)} />
              </div>
              <div className="eposta">
                <label>E-posta</label>
                <input type="text" onChange={(e)=>email(e.target.value)} />
              </div>
              <div className="password">
                  <label>Password</label>
                  <input type="password" onChange={(e)=>password(e.target.value)} />
                  <label>Password Again</label>
                  <input type="password" onChange={(e)=>passwordAgain(e.target.value)} />
              </div>
              <div className="termsofUse">
              <div>
              <input type="checkbox" />
              <label>Kullanım Koşullarını Okudum Kabul Ediyorum</label>
              </div>
            </div>
              <div className="createButton bttn">
                <button onClick={createAccount}>Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default SingUp
