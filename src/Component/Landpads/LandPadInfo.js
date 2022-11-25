import React from "react";

const LandPadInfo = (props) => {
  return (
    <div>
      <div className="container text-light" style={{ marginTop: "90px" }}>
        <h1>
          <small className="text-muted">{props.name}</small>
        </h1>
        <h4 class>
          First Fligh Date :
          <small className="text-muted">{props.type}</small>
        </h4>
        <div className="row">
          <div className="col-sm-6">
            <p>Type : {props.type}</p>
            <p>Crew : {props.crew_capacity}</p>
            <p>Dray Mass :{props.mass}kg</p>
            <p
              className={props.active === true ? "text-success" : "text-danger"}
            >
              {props.active === true ? "active" : null}
            </p>
            <p>Return Payload Mass: {props} kg</p>
            <button type="button" className="btn btn-outline-light btn-md">
              wikipedia
            </button>
          </div>
          <div className="col-sm-6">
            <p className="h6">Heat sheild deatil</p>
            <p>Materail:{props.material}</p>
            <p>size : {props.size}m</p>
            <p>Temprature:{props.temp_degree} degree</p>
            <p>Dev partner : {props}</p>
            <div>
              <h6>Other Deatil:</h6>
              <p>Launch Payload Mass : {props}</p>
              <p>
                Presssurize Capsule Payload Volume : {props}
                meter cube
              </p>
            </div>
          </div>
        </div>
        <div>
          <p calssName="h7 text-start">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default LandPadInfo;
