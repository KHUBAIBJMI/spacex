import React from "react";
import { Link } from "react-router-dom";
const ShipsItems = (props) => {
  return (
    <div>
      <div className="card my-3 mb-0 text-start mb-0 bg-dark text-warning">
        <img
          src={
            props.image === null
              ? "https://i.imgur.com/ngYgFnn.jpg"
              : props.image
          }
          className="card-img-top img-fluid bg-dark"
          alt="..."
          style={{ width: "500px", height: "270px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-title">Home Port : {props.home_port}</h6>
          <div className="card-body mb-0">
            <Link
              key={props.id}
              to={props.id}
              className="btn btn-outline-warning sm-large"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipsItems;
