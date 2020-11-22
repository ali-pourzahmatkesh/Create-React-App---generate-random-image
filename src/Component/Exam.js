import React, { useState } from "react";

const imagePrefixPath = "http://picsum.photos/200/200"
function Exam() {
  let [image, setImage] = useState(imagePrefixPath);
  
  const generatenewimagePath = () => {
    setImage(`${imagePrefixPath}?random=${Math.random()}`)
  }

  return (
    <div>
      <button 
        onClick={generatenewimagePath}>show a random image</button>
      <br />
      <img src={image} width={200} height={200} alt={"apz alt tooltip;)"} />
    </div>
  );
}

export default Exam;