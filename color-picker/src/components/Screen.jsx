import React, { useState } from "react";
import Plate from "./Plate";

function Screen(){
  var all_colors = ["red", "green", "blue", "yellow", "magenta", "skyblue", "chocolate", "purple", "pink",
        "darkgreen", "orangered", "cyan", "brown", "orange", "royalblue", "gold"];
    
  var [color, changeColor] = useState("pink");
  var [displayColors, changeVisibility] = useState(false);

  var chosenColor = {
    backgroundColor: color 
  };

  function handleChange(event){
    console.log(event.target.name);
    changeColor(event.target.name);
  }
  

  var colorPaletteStyle = {
    visibility: displayColors? "visible":"hidden"
  }

  function pickColor(){
    changeVisibility(!displayColors);
  }


  return(
  <div className="background" style={chosenColor}>
    
     <div className="colors" style={colorPaletteStyle}>
        {all_colors.map( (col) => {
          return(<Plate key={col} name={col} action={handleChange}/>);
        })}
     
     </div>
     <button className="pickColor" onClick={pickColor}>Pick a color</button>
  </div>
  );
}

export default Screen;