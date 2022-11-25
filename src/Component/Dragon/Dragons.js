import React from "react";
// import DragonInfo from "./DragonInfo";
const Dragons = (props) => {
  return (
    <div className="container text-light" style={{ marginTop: "90px" }}>
      <h1>
        <small className="text-muted">{props.name}</small>
      </h1>
      <h4 class>
        First Fligh Date :
        <small className="text-muted">{props.first_flight}</small>
      </h4>
      <div className="row">
        <div className="col-sm-6">
          <p>Type : {props.type}</p>
          <p>Crew : {props.crew_capacity}</p>
          <p>Dray Mass :{props.mass}kg</p>
          <p className={props.active === true ? "text-success" : "text-danger"}>
            {props.active === true ? "active" : null}
          </p>
          <p>Return Payload Mass: {props.return_payload_mass} kg</p>
          <button type="button" className="btn btn-outline-light btn-md">
            wikipedia
          </button>
        </div>
        <div className="col-sm-6">
          <p className="h6">Heat sheild deatil</p>
          <p>Materail:{props.material}</p>
          <p>size : {props.size}m</p>
          <p>Temprature:{props.temp_degree} degree</p>
          <p>Dev partner : {props.dev_partner}</p>
          <div>
            <h6>Other Deatil:</h6>
            <p>Launch Payload Mass : {props.launch_payload_mass.kg}</p>
            <p>
              Presssurize Capsule Payload Volume : {props.pressurized_capsule}{" "}
              meter cube
            </p>
          </div>
        </div>
      </div>
      <div>
        <p calssName="h7 text-start">{props.description}</p>
      </div>
    </div>
  );
};
export default Dragons;

/* <div style={{ marginTop: "90px" }}>
<div
  className="card my-5 mx-3 bg-dark  text-light"
  style={{ width: "40rem", marginTop: "110px" }}
>

  <div className="card-header">{props.name}</div>
  <div className="card-body">
    <h5 className="card-title ">
      active:
      <strong className="text-success">
        {props.active === true ? "true" : "false"}
      </strong>
    </h5>
    <p className="card-text">
      {props.description.length >= 300
        ? props.description.slice(0, 300)
        : props.description}
    </p>
    <ul className="list-group bg-dark  text-light">
      <li className="list-group-item bg-dark  text-light">
        <strong className="text-danger">Crew Capacity</strong> :
        {props.crew_capacity}
      </li>
      <li className="list-group-item bg-dark  text-light">
        <strong className="text-danger"> Mass:</strong> :{props.mass}
      </li>
      <li className="list-group-item bg-dark  text-light">
        {props.size}
      </li>
      <li className="list-group-item bg-dark  text-light">
        first_flight:{props.first_flight}
      </li>
      <li className="list-group-item bg-dark  text-light">
        type: {props.type}
      </li>
      <li className="list-group-item bg-dark  text-light">
        dev Partner {props.dev_partner}
      </li>
      <li className="list-group-item bg-dark  text-light">
        {props.material}
      </li>
      <li className="list-group-item bg-dark  text-light">
        {props.size}
      </li>
    </ul>
    <div className="card-text">
      <a href={props.wikipedia} className="btn btn-outline-info">
        Wikipedia
      </a>

      <Link to="/dragon/info" className="btn btn-outline-info mx-2 ">
        dragon Info
      </Link>
      {/* <Routes>
    <Route path = "/dragon/info" element = {<DragonInfo />} />
   </Routes> 
//     </div>
//   </div>
// </div>
// </div>
// <div className="card-body mb-4"></div> */
