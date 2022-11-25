import React from "react";

const PayloadsItems = (props) => {
  return (
    <div>
      <div className="card bg-dark text-start mb-0" style={{ height: "24rem" }}>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Type : {props.type}</h6>
          <p className="card-text">customers : {props.customers}</p>
          <p className="card-text">
            Mass : {props.mass === null ? "" : props.mass}kg
          </p>
          <p className="card-text">
            reused : {props.reused === false ? "no" : "yes"}
          </p>
          <p className="card-text">nationalities : {props.nationalities}</p>
          <p className="card-text">manufacturerd by : {props.manufacturers} </p>

          <p className="card-text">Reference System:{props.reference_system}</p>
          <p className="card-text">Orbit : {props.orbit}</p>
        </div>
      </div>
    </div>
  );
};

export default PayloadsItems;
