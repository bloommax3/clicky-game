import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={(event)=>props.clickAct(event, props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
