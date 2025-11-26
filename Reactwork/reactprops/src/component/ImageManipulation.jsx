import React, { useState } from 'react'
import cat from './cat3.png';
function ImageManipulation() {
 const [catHeight,setCatHeight]=useState(200);
 const[catWidth,setCatWidth]=useState(200);
 const[red,setRed]=useState(0);
 const[green,setGreen]=useState(0);
 const[blue,setBlue]=useState(0);
 const[imgAngle,setImgAngle]=useState(0);


 function increaseCatWidth(){
       setCatWidth(catWidth+20);
 }

 function changeBGColor(){
  setRed(Math.random()*255);
  setGreen(Math.random()*255);
  setBlue(Math.random()*255);
 }

 function imageRotate(){
  setImgAngle(imgAngle+30);
 }

  return (
    <div style={{margin:'0px auto', border:'2px solid red', height:'500px', width:'400px',paddingLeft:'100px', paddingTop:'50px'}}>
        ImageManipulation
        <div>
<img src={cat} height={catHeight} width={catWidth} style={{transform:`rotate(${imgAngle}deg)`,backgroundColor:`rgb(${red},${green},${blue})`}} alt='' />
        </div>
        <div>

            <button onClick={()=>setCatHeight(catHeight+20)}>Increase Height</button>
            <button onClick={increaseCatWidth}>Increase Width</button>
            <button onClick={changeBGColor}>changeBGColor</button>
            <button>ImageRotate</button>
           <div>
            <h2>
              Red Color Value:{red}
            </h2>
            <h2>
              Green Color Value={green}
            </h2>
            <h2>
              Blue Colour Value:{blue}
            </h2>
            </div>
        </div>
        
        </div>
  )
}

export default ImageManipulation