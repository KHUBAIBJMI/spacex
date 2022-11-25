import React from "react";
// import { Link } from "react-router-dom";
const RoacketsItems = (props) => {
  return (
  
    <div
      className="container text-light text-start"
      style={{ marginTop: "40px" }}
    >
      <h1>
        <small className="text-muted">{props.name}</small>
      </h1>
      <div className="row">
        <div className="col-sm-6">
          <p>company : {props.company}</p>
          <p>boosters : {props.boosters}</p>
          <p>Country :{props.country}</p>
          <p className={props.active === true ? "text-success" : "text-danger"}>
            {props.active === true ? "active" : "not active"}
          </p>
          <p>Cost: {props.cost}</p>
          <h4>Engine Deatils : </h4>
          <p>Engine Loss Max : {props.engines}</p>
          <p>Number : {props.number}</p>
          <p>Type : {props.type}</p>
          <p>Version : {props.version}</p>
          <a
            href={props.wikipedia}
            type="button"
            className="btn btn-outline-light btn-md"
          >
            wikipedia
          </a>
        </div>
        <div className="col-sm-6">
          <p>First Flight : {props.first_flight}</p>
          <p>mass : {props.mass} kg</p>
          <p className="h4">First Stage :</p>
          <p>Burn Time:{props.first_stage} second</p>
          <p>engine : {props.fstageEngines}</p>
          <p>Fuel Amount : {props.fuel_amount_tons} tons</p>
          <p>resuse : {props.reusable === false ? "No" : "reuseable"}</p>

          <p className="h4">Second Stage :</p>

          <p>Burn Time:{props.secondStageBurnTime} second</p>
          <p>engine : {props.SecondStageengines}</p>
          <p>Fuel Amount : {props.secondStageFuelAmout} tons</p>
          <p>resuse : {props.secondReuse === false ? "no" : "reuseable"}</p>
          <div></div>
        </div>
      </div>
      <div>
        <p calssName="h7 text-start">{props.description}</p>
      </div>
    </div>
  );
};

export default RoacketsItems;
