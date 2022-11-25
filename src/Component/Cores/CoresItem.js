import React from "react";

const CoresItem = (props) => {
  return (
    <div>
      <div
        className="card bg-dark text-start mb-0 text-light"
        style={{ height: "24rem" }}
      >
        <div className="card-body">
          <h5 className="card-title"> Serial : {props.serial}</h5>
          <h6 className="card-subtitle mb-2">
            Status :{" "}
            <strong
              className={
                props.status === "active" ? "text-success" : "text-danger"
              }
            >
              {props.status}
            </strong>
          </h6>
          <p className="card-text">Reuse Count : {props.reuse_count}</p>
          <p className="card-text">Block : {props.block}</p>
          <p className="card-text">Rtls Attempt : {props.rtls_attempts}</p>
          <p className="card-text">Rtls Landing : {props.rtls_landings}</p>
          <p className="card-text">Last Update : {props.last_update}</p>
        </div>
      </div>
    </div>
  );
};

export default CoresItem;
