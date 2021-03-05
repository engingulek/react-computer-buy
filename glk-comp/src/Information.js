import React, { useEffect, useState } from "react";
import db from "./firebase"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./Information.css"
import Rating from "@material-ui/lab/Rating"
import ShareIcon from '@material-ui/icons/Share'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';

function Information({info,count,productName,img,rating,id}) {
 
  const [list,setList]=useState(false)
  const [like,setLike]=useState(false)
const likeItems=[]

  

  
  const addLike=(productName,count,img,id)=>{
    db.collection("like").doc(id).set({
      likeProductName:productName,
      likeCount:count,
      likeImg:img
      
    })
    likeItems.push(id)
    setLike(true)

  }
  const removeLike=(id)=>{
    db.collection("like").doc(id).delete();
    setLike(false)
  }

  const addShare=(productName,count,img,id)=>{
    db.collection("share").doc(id).set({
      shareProductName:productName,
      shareCount:count,
      shareImg:img
      
    })
  }

  const addList=(productName,count,img,id)=>{
    db.collection("list").doc(id).set({
      listProductName:productName,
      listCount:count,
      listImg:img
      
    })
    setList(true)
  }

  const removeList=(id)=>{
    db.collection("list").doc(id).delete()
    setList(false)
  }


  return (
    <div className="information">
    {console.log(productName)}
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
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
        </div>
          <div className="productInfo">{info}</div>
          <div className="productCountInfo"><span>{count}</span></div>
        </div>
      </div>
      <div className="informationFooter">
        {
          like==false?<div className="iconLike" onClick={()=>addLike(productName,count,img,id)}><FavoriteBorderIcon/></div>:
          <div className="iconLikeClick" onClick={()=>removeLike(id)}> <FavoriteIcon/> </div>
        }
       
        <div className="iconShare" onClick={()=>addShare(productName,count,img,id)}><ShareIcon /></div>
        {
          list==false?<div className="addList" onClick={()=>addList(productName,count,img,id)}><BookmarkBorderIcon/></div>:
          <div className="addList" onClick={()=>removeList(id)}><BookmarkIcon/></div>


        }
        
      </div>
    </div>
  );
}

export default Information;
