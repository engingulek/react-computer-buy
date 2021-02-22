import React from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./Information.css"
import Rating from "@material-ui/lab/Rating"
import ShareIcon from '@material-ui/icons/Share'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';;
function Information() {
  return (
    <div className="information">
      <div className="informationContainer">
        <div className="infoImg">
          <img src="https://market.miuiturkiye.net/image/catalog/10000%202.%20Nesil/pro-hd-2/laptop-xiaomi-mi-air-13-3-a38511d3d-gl_.jpg" 
          alt="laptop" />
        </div>
        <div className="prdoductInfo">
       
          <div className="productNameInfo">Huawe Matebook D15</div>
          <div className="ratingInfo" >
        <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
        </div>
          <div className="productInfo">16 Gb Ram 526 SSd 536 HDD Nvidia 2060Tı parmak izi okuyuxu Ips ekran arkandan aydınlatmalı klavye</div>
          <div className="productCountInfo"><span>5.799₺</span></div>
        </div>
      </div>
      <div className="informationFooter">
        <div className="iconLike"><FavoriteBorderIcon/></div>
        <div className="iconShare"><ShareIcon /></div>
        <div className="addList"><BookmarkBorderIcon/></div>
      </div>
    </div>
  );
}

export default Information;
