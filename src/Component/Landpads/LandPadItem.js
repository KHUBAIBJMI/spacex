import React from "react";
import { Link } from "react-router-dom";

const LandPadItem = (props) => {
  return (
    <div className="card  text-start bg-dark text-light my-2">
      <img
        className="card-img-top img-fluid bg-black"
        src={props.images}
        alt="Card image"
        style={{ height: "400px" }}
      />
      <div className="card-body">
        <h4 className="card-title">{props.full_name}</h4>
        <p className="card-text">
          {props.details === null
            ? "CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to... "
            : props.details.slice(0, 50)}
          ...
        </p>
        <Link
          key={props.id}
          to={props.id}
          className="btn btn-outline-light mb-0"
        >
          See More
        </Link>
      </div>
    </div>
  );
};
export default LandPadItem;
