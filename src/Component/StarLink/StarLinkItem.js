import React from "react";

const StarLinkItem = (props) => {
  return (
    <div className="card bg-dark">
      <div className="card-body">
        <h5 className="card-title">
          {props.name} Version : {props.version}
        </h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">Creation Date : {props.date}</p>
        <p className="card-text">Launch Date : {props.ldate}</p>
        <p clasName="card-text">Center Name : {props.centerName}</p>
        <p className="card-text">Orgnitor : {props.ORIGINATOR}</p>
      </div>
    </div>
  );
};

export default StarLinkItem;
