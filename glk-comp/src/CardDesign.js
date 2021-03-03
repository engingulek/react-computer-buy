import React, { useEffect, useState } from "react";
import "./CardDesing.css";
import Rating from "@material-ui/lab/Rating";
import { Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Information from "./Information"
import db from "./firebase"
import alertify from "alertifyjs"


function CardDesign() {
  const [modal, setModal] = useState(false)
  const [productitem, setProductItem] = useState([])
  const [modalProductName, setModalProductName] = useState("")
  const [modalProductRating, setModalProductRating] = useState("")
  const [modalProductInfo, setModalProductInfo] = useState("")
  const [modalProductCount, setModalProductCount] = useState("")
  const [modalProductImg, setModalProductImg] = useState("")
  const [name,setName]=useState("")
  

  
  
  



  const infoToggle = (id) => {
    setModal(!modal)
    productitem.map((product) => {


      if (product.data().id == id) {

        setModalProductName(product.data().productName)
        setModalProductRating(product.data().rating)
        setModalProductInfo(product.data().description)
        setModalProductCount(product.data().count)
        setModalProductImg(product.data().img)
        setModalProductRating(product.data().rating)

      }
    })



  }
  

  
  
  const addtoCart = (cartproductadd) => {
    
    
    db.collection("cart").doc(cartproductadd.id).set({
      productId:cartproductadd.data().id,
      productName:cartproductadd.data().productName,
      productImg:cartproductadd.data().img,
      productCount:cartproductadd.data().count,
      productPiece:cartproductadd.data().piece
    })
    setName(cartproductadd.data().productName)
    if (name===cartproductadd.data().productName) {
      alertify.error("Go to cart for increase")
    }
    else{
      alertify.success(cartproductadd.data().productName+" Add to cart")
    }
    

    


    
    
  }












  useEffect(() => {

    

     db.collection("product").orderBy("id", "asc").onSnapshot((onSnapshot) => {
     const productItems = []
     
       onSnapshot.forEach((product) => {
         productItems.push(product)
         

       })

      setProductItem(productItems)
     })



  }, [])


  return (
<div>


    <div className="cardDesign">
      {
        productitem.map((product,index) => (
          <>

            <div key={index}
              className="cardDesignContainer" >
              <div className="moreinfo" onClick={() => infoToggle(product.data().id)} >

                <div className="cartImg">
                  <img
                    src={product.data().img}
                    alt=""
                  />
                </div>
                <div className="rating">
                  <Rating
                    name="half-rating-read"
                    defaultValue={product.data().rating}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className="productName">{product.data().productName}</div>
                <div className="productCount">
                  <span className="count">{product.data().count}</span>
                  <span className="countType">₺</span>
                </div>
              </div>
              <div className="addCart">
                <Button color="success" onClick={() => addtoCart(product)} block>Add Cart
            </Button>
              </div>
            </div>
       

            <Modal isOpen={modal} toggle={infoToggle}  >
              <ModalHeader toggle={infoToggle} className="header"><span>More Information</span></ModalHeader>
              <ModalBody>
                <Information info={modalProductInfo}
                  count={modalProductCount}
                  productName={modalProductName}
                  img={modalProductImg}
                  rating={modalProductRating}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={infoToggle}>Close</Button>{' '}

              </ModalFooter>


            </Modal>





          </>


        ))
      }
      






    </div>
    
    </div>
  );
}

export default CardDesign;
