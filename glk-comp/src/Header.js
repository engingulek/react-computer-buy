import React, { useState,useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import {useSelector,useDispatch} from "react-redux"



import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  
} from "reactstrap";

import SingIn from "./SingIn";
import SingUp from "./SingUp";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { login, logout, selectUser } from "./features/userSlice";
import { auth ,providerGoogle} from "./firebase";
function Header() {
  const [modal, setModal] = useState(false);
  const [singup,setSingup] =useState(false)
  const toggle = () => {
    setModal(!modal);
   
  }
  

  const singIn = () => {
    setModal(!modal);
  };

  const singUpB = () => {
    
    setSingup(!singup);
    toggle();
  };
  const create=()=>
  {
    setSingup(!singup)
  }

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
  auth.onAuthStateChanged(authUser=>{
    if(authUser)
    {
      dispatch(login({
        uid : authUser.uid,
        displayName :authUser.displayName
      }))
    }
    else
    {
      dispatch(logout({
        uid:null,
        displayName:null

      }))
    }
  })
  }, [dispatch])

  const singOut=()=>
  {
   auth.signOut()
  }


  return (
    <div className="header">
      <div className="header__contaiber">
        <div className="navbar">
          <div className="title">
            <span className="glk">Glk</span>
            <span className="comp">computer</span>
          </div>
          <div className="search">
            <form>
              <input type="text" />
              <button>
                <SearchIcon />
              </button>
            </form>
          </div>
          {
            user ?  <button
            onClick={singOut}
            type="button"
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Exit
          </button>:
         ( <button
            onClick={singIn}
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
           SingIn
          </button>)
          }
          
            
        
         
          


         
          
        </div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            <div className="modaltitle">
              <span>Sing In</span>
            </div>
          </ModalHeader>
          <ModalBody>
          <SingIn/>
          
           
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={singUpB}>
              SingUp
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={singup} toggle={create}>
          <ModalHeader toggle={create}>
            <div className="modaltitle">
              <span>Sing In</span>
            </div>
          </ModalHeader>
          <ModalBody>
          <SingUp/>
          
          
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={create}>
              Create
            </Button>
             
          </ModalFooter>
         
        </Modal>
        <div className="cart">
        <Button color="success" ><span><Link className="link" to="/cart">Cart</Link></span></Button>
        </div>
       
       

        
      </div>
    </div>
  );
}

export default Header;
