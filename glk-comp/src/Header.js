import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import PhoneIcon from '@material-ui/icons/Phone';

function Header() {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
    console.log(modal);
  };

  const singIn = () => {
    console.log("Sing In");
    setModal(!modal);
  };

  const singUp = () => {
    console.log("Sing Up");
    setModal(!modal);
  };

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
            onClick={toggle}
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
                    <div className="facebookCont bttn">
                      <button>Continue with Facebook</button>
                    </div>
                    <div className="googleCont bttn">
                      <button>Continue with Google</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={singUp}>
              SingUp
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
