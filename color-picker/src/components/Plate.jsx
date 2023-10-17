import React from "react";

function Plate(props){
  return(
    <button className="plate" name={props.name} style={{backgroundColor: props.name}} onClick={props.action}></button>
  );
}

export default Plate;