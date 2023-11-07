import React from "react";

function CharacterItem(props){
  

  return (
    <div className="character-select-item">
      <img source={props.character.name}/>
    </div>
  )
}

export default CharacterItem;