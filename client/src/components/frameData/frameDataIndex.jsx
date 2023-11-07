import React from "react";

function FrameDataIndex(props){

  return (
    <div>
      {props.character.map(move => {
          <FrameDataItem move={move}/>
        })
      }
    </div>
  )
}

export default FrameDataIndex;