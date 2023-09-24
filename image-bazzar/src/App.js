import React,{useState} from "react";

import ImageSearch from "./Components/imageSerch";
import ImageList from "./Components/ImageList";


const App=()=>{
  const [images, setImages]=useState([]);

  return(
<div>
  <ImageSearch setImages={setImages}/>
  <ImageList images={images}/>
</div>

  );
}
export default App;

// array =>[]
// object =>null
//number =>0

