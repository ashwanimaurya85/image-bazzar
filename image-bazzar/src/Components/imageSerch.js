import React,{useState,useEffect} from "react";
import axios from "axios";

//console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY)

 const ImageSearch=({setImages})=>{
const [serchTerm, setSerchTerm]=useState('');



// then catch
// function applySerch(){
// axios.get("https://api.unsplash.com/search/photos",{
//     params: {
// query :serchTerm
//     },headers: {
// Authorization : "Client-ID CQaC1e0P5KuB2yX2ckD-ObnBLJuWMaKyef2TRgqLA-c"
//     }
// })
// .then(response =>console.log( "Success",response.data.results))
// .catch(err =>console.log(err))
// }

// async and await
useEffect(()=>{
applySerch()
},[])
 async function applySerch(){

    try{
 const response= await axios.get("https://api.unsplash.com/search/photos",{
     params: {
 query :serchTerm || "random"
     },headers: {
 //Authorization : "Client-ID CQaC1e0P5KuB2yX2ckD-ObnBLJuWMaKyef2TRgqLA-c"

 Authorization : `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`


     }
 })
 setImages(response.data.results)

    
}
catch(err){
    console.log(err)
    
}
 }

    return(
<div>

    <input type="text" placeholder="Enter something..." onChange={e=>setSerchTerm(e.target.value)}></input>
    <button onClick={applySerch}>Serch</button>
</div>

    )
 }
 export default ImageSearch