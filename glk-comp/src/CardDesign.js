import React,{useEffect, useState} from "react";
import "./CardDesing.css";
import Rating from "@material-ui/lab/Rating";
import { Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Information from "./Information"

import db from "./firebase"

function CardDesign() {
    const [modal,setModal] = useState(false)
    const [productitem,setProductItem] = useState([])
    const [modalProductName,setModalProductName]=useState("")
    const [modalProductRating,setModalProductRating]=useState("")
    const [modalProductInfo,setModalProductInfo]=useState("")
    const [modalProductCount,setModalProductCount]=useState("")
    const [modalProductImg,setModalProductImg]=useState("")


const infoToggle=(id)=>
{
    setModal(!modal)
    productitem.map((product)=>{
     
      
      if(product.id==id)
      {
      
      setModalProductName(product.productName)
      setModalProductRating(product.rating)
      setModalProductInfo(product.description)
      setModalProductCount(product.count)
      setModalProductImg(product.img)
        
      }
    })
   
    

}




useEffect(() => {
  db.collection("product").orderBy("id","asc").onSnapshot((onSnapshot)=>{
    const productItems=[]
    onSnapshot.forEach((product)=>{
      productItems.push(product.data())
    })

    setProductItem(productItems)
})


  
}, [])


  return (
    
    <div className="cardDesign">
    {
      productitem.map((product,index)=>(
        <>
        
        <div key={index}
        className="cardDesignContainer" >
        <div className="moreinfo" onClick={()=>infoToggle(index)} >
          
        <div className="cartImg">
          <img
            src={product.img}
            alt=""
          />
        </div>
        <div className="rating">
          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
          />
        </div>
        <div className="productName">{product.productName}</div>
        <div className="productCount">
          <span className="count">{product.count}</span>
          <span className="countType">₺</span>
        </div>
        </div>
        <div className="addCart">
            <Button color="success"  block>Add Cart
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
  );
}

export default CardDesign;
