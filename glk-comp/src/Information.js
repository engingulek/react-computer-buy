import React from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./Information.css"
import Rating from "@material-ui/lab/Rating"
import ShareIcon from '@material-ui/icons/Share'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';;
function Information({info,count,productName,img}) {
  return (
    <div className="information">
      <div className="informationContainer">
        <div className="infoImg">
          <img src={img}
          alt="laptop" />
        </div>
        <div className="prdoductInfo">
       
          <div className="productNameInfo">{productName}</div>
          <div className="ratingInfo" >
        <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
        </div>
          <div className="productInfo">{info}</div>
          <div className="productCountInfo"><span>{count}</span></div>
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
