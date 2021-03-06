import React, { useEffect, useState } from "react";

import "./CartDesign.css"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import db from "./firebase"
import alert from "alertifyjs"
import HomeIcon from '@material-ui/icons/Home';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";
function CartDesign() {
  const [cartProduct, setCartProduct] = useState([])
  const [cartCount,setcartCount]=useState(0)
  const [removeP,setRemoveP]=useState("")
  const [modal, setModal] = useState(false);

  const okeyCart = () => {
    setModal(!modal);
    if (cartProduct.length==0) {
      alert.error("Your Order Has Not Been Confirmed")
}else{
      db.collection("cart")
      .get()
      .then(res => {
        res.forEach(element => {
          element.ref.delete();
        });
      });
      alert.success("Your Order is Confirmed")}}
  
  const noCart =()=>{
    setModal(!modal)
    alert.success("You can continue shopping")
  }

  const toggle =()=>setModal(!modal)
  
  useEffect(() => {
    db.collection("cart").onSnapshot((onSnapshot) => {
      const cartproductItems = []
      onSnapshot.forEach((product) => {
        cartproductItems.push(product.data())})
      setCartProduct(cartproductItems)})
  },[])
  

  useEffect(()=>{
    var top=0;
    var piece=0
    cartProduct.forEach((product)=>{
      piece =product.productPiece
     top+=product.productCount*piece
     setcartCount(top)
})},[cartProduct])

const removeCart=(removeProduct)=>{
  db.collection("cart").onSnapshot((onSnapshot)=>{
    onSnapshot.forEach((remove)=>{
      if(remove.data().productName===removeProduct)
      {
        setRemoveP(remove.id)
      }})})

    if (removeP!=="") {
    db.collection("cart").doc(removeP).delete();
  }
}
  return (
    <div className="cartDesign">
      <div className="cartDesingContainer">
        <div className="yourCart">
          <div className="yourCartTitle">
            <div className="yourCartTitleHome" >
              <Link to="/" className="linka"><HomeIcon style={{ fontSize: 40 }}/></Link>
            </div>
            <div className="yourCartTitleName">
            <span>Your Cart</span>
            </div>
          </div>
          {
            cartProduct.map((cartProductitem) => (
              <div className="yCartProduct">
                <div className="yCartImg">
                  <img src={cartProductitem.productImg} alt="laptop" />
                </div>
                <div className="cartProductInfo">
                  <div className="yCartName"> {cartProductitem.productName} </div>
                  <div className="yCartAdet">
                    <label>Adet</label>
                    <span> {cartProductitem.productPiece} </span>
                  </div>
                </div>
                <div className="yCartProductCount"  > {cartProductitem.productCount*cartProductitem.productPiece} </div>
                <div className="yCartProductRemove"><Button color="danger" onClick={()=>removeCart(cartProductitem.productName)}>Remove</Button></div>
              </div>
            ))
          }
        </div>
        <div className="orderSummery">
          <div className="oStitle"><span>Order Summery</span></div>
          <div className="total">
            <div className="totalTitle">Toplam</div>
            <div className="totalCount">{cartCount} ₺</div>
          </div>
          <div className="orderConfirm"><Button color="success" onClick={toggle}>Confirm Cart <NavigateNextIcon /></Button></div>
        </div>
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Ödeme İşlemini Onaylıyormusunuz
          Toplam = {cartCount}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={okeyCart}>Yes</Button>
          <Button color="secondary" onClick={noCart}>No</Button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
  );
}
export default CartDesign;
