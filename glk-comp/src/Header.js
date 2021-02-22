import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  
} from "reactstrap";
import SingIn from "./SingIn";
import SingUp from "./SingUp";


function Header() {
  const [modal, setModal] = useState(false);
  const [singup,setSingup] =useState(false)
  const toggle = () => {
    setModal(!modal);
    console.log(modal);
  }
  

  const singIn = () => {
    setModal(!modal);
  };

  const singUpB = () => {
    console.log("Merhaba");
    setSingup(!singup);
    toggle();
  };
  const create=()=>
  {
    setSingup(!singup)
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

          <button
            onClick={singIn}
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            SingIn
          </button>
          
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
        <Button color="success"><span>Cart</span></Button>
        </div>
       
       

        
      </div>
    </div>
  );
}

export default Header;
