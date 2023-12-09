import React from "react";

function NavbarTopIcon(props){
  
  let gameImg = '';

  switch (props.game){
    case "GBVSR":
      break;
    case "KOFXV":
      break;
    default:
      gameImg = '';
  }

  return (
    <div id="current-game-icon">
      <img source={gameImg}/>
    </div>
  )
}

export default NavbarTopIcon;