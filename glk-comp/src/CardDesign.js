import React, { useEffect, useState } from "react";
import "./CardDesing.css";
import Rating from "@material-ui/lab/Rating";
import { Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Information from "./Information"
import db from "./firebase"

import {useSelector} from "react-redux"


function CardDesign() {
  const [modal, setModal] = useState(false)
  const [productitem, setProductItem] = useState([])
  const [modalProductName, setModalProductName] = useState("")
  const [modalProductRating, setModalProductRating] = useState("")
  const [modalProductInfo, setModalProductInfo] = useState("")
  const [modalProductCount, setModalProductCount] = useState("")
  const [modalProductImg, setModalProductImg] = useState("")
  const [modalProductId,setModalProductId]=useState("")
  const [cartname,setcartName]=useState([])
  const {filterbransName} =useSelector(state=>state.filter)
  const {searchbar}=useSelector(state=>state.filter)
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
        setModalProductId(product.id)

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
    
    

    

      db.collection("cart").onSnapshot((onSnapshot) => {
        const cartProduct=[]
        onSnapshot.forEach((product) => {
          cartProduct.push(product)
          
          
        })
        setcartName(cartProduct)
        
      })


      cartname.map((product)=>{
        if (product.id!==cartproductadd.id) {
          console.log("ilk eklendi")
          
        }

        else
        {
          db.collection("cart").doc(cartproductadd.id).update({
            productPiece:product.data().productPiece+1
            

          })
        }
      })

      
      

      
  

    


    
    
  }












  useEffect(() => {

if (filterbransName.length!==0) {
  db.collection("product").where("bransName","in",filterbransName).onSnapshot((onSnapshot) => {
    const productItems = []
    
      onSnapshot.forEach((product) => {
        productItems.push(product)
        

      })

     setProductItem(productItems)
    })
  
}
  }, [filterbransName])


  useEffect(()=>{
    db.collection("product").onSnapshot((onSnapshot) => {
      const productItems = []
      
        onSnapshot.forEach((product) => {
          productItems.push(product)
          
  
        })
        const filterProductItems=productItems.filter((name)=>{
          return name.data().productName.toLowerCase().includes(searchbar.toLowerCase())
        })
  
       setProductItem(filterProductItems)
      })
    
  }
    

  ,[searchbar])

  


  
 

  useEffect(() => {

    

    db.collection("product").onSnapshot((onSnapshot) => {
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
                  id={modalProductId}
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
