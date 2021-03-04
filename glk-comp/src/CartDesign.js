import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import "./CartDesign.css"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import db from "./firebase"
function CartDesign() {
  const [cartProduct, setCartProduct] = useState([])
  const [cartCount,setcartCount]=useState(0)
  
  useEffect(() => {
    


    
    db.collection("cart").onSnapshot((onSnapshot) => {
      const cartproductItems = []

      onSnapshot.forEach((product) => {
        cartproductItems.push(product.data())
        


      })

      setCartProduct(cartproductItems)
    })

   
   

    
    

 

    



  }, [])
  
  useEffect(()=>{
    var top=0;
    var piece=0
    cartProduct.forEach((product)=>{
      piece =product.productPiece
     top+=product.productCount*piece
     setcartCount(top)
     
     
    })
    
    
    

  },[cartProduct])


  



  

  





  return (
    <div className="cartDesign">
      <div className="cartDesingContainer">
        <div className="yourCart">
          <div className="yourCartTitle">
            <span>Your Cart</span>
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

                    <button>-</button>
                    <span> {cartProductitem.productPiece} </span>
                    <button>+</button>


                  </div>
                </div>
                <div className="yCartProductCount"> {cartProductitem.productCount} </div>
                <div className="yCartProductRemove"><Button color="danger">Remove</Button></div>
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
          <div className="orderConfir"><Button color="success">Confirm Cart <NavigateNextIcon /></Button></div>

        </div>
      </div>
    </div>
  );
}

export default CartDesign;
