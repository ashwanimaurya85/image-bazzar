







 import React from "react";


const ImageList = ({images}) => {
// // [10]
// // const images=[10,20,30,40,50]
    return(

 <div>
 {images.map((image,index) =>(
    <img key={image.id} src={image.urls.small} alt={image.alt_description}/>//image.id or index use the key Date.now()
// //<img key={index} src={image.urls.thumb} alt={image.alt_description}/>
// //https://www.npmjs.com/package/uuid

))}
 </div>

    )
 }

 export default ImageList