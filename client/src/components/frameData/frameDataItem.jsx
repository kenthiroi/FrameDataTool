import React from "react";

function FrameDataItem(props){
  return (
    <div className="move-container">
      <span className="move-name">
        {props.moveName}
      </span>
      <span className="move-damage">
        {props.damage}
      </span>
      <span className="guard-point">
        {props.guard}
      </span>
      <span className="move-startup">
        {props.startup}
      </span>
      <span className="move-active">
        {props.active}
      </span>
      <span className="move-recovery">
        {props.recovery}
      </span>
      <span className="move-onblock">
        {props.onblock}
      </span>
      <span className="move-onhit">
        {props.onhit}
      </span>
      <span className="move-oncounterhit">
        {props.oncounterhit}
      </span>
    </div>
  )
}

export default FrameDataItem;