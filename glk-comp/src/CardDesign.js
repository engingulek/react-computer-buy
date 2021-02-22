import React,{useState} from "react";
import "./CardDesing.css";
import Rating from "@material-ui/lab/Rating";
import { Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Information from "./Information";

function CardDesign() {
    const [modal,setModal] = useState(false)

const infoToggle=()=>
{
    setModal(!modal)

}
  return (
    <div className="cardDesign">
      <div className="cardDesignContainer" >
        <div className="moreinfo" onClick={infoToggle}>
        <div className="cartImg">
          <img
            src="https://market.miuiturkiye.net/image/catalog/10000%202.%20Nesil/pro-hd-2/laptop-xiaomi-mi-air-13-3-a38511d3d-gl_.jpg"
            alt=""
          />
        </div>
        <div className="rating">
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
        </div>
        <div className="productName">HUAWEI MATEBOOK D 15</div>
        <div className="productCount">
          <span className="count">5.799</span>
          <span className="countType">₺</span>
        </div>
        </div>
        <div className="addCart">
            <Button color="success"  block>Add Cart
            </Button>
        </div>
      </div>
      <Modal isOpen={modal} toggle={infoToggle} >
        <ModalHeader toggle={infoToggle} className="header"><span>More Information</span></ModalHeader>
        <ModalBody>
         <Information/>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={infoToggle}>Close</Button>{' '}
         
        </ModalFooter>
      </Modal>
      
    </div>
  );
}

export default CardDesign;
