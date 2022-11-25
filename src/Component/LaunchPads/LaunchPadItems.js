import React from "react";
import { Link } from "react-router-dom";
const LaunchPadItems = (props) => {
  return (
    <div className="card text-start mb-0 bg-dark text-light">
      <img
        src={props.image}
        className="card-img-top img-fluid bg-dark"
        alt="..."
        style={{ width: "500px", height: "270px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-title">{props.fullName.slice(0, 10)}...</h6>

        <p className="card-text">{props.description.slice(0, 50)}...</p>
        <div className="card-body mb-0">
          <Link key={props.id} to={props.id} className="btn btn-outline-warning">
            Read More
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default LaunchPadItems;
