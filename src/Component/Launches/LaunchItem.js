import React from "react";
import { Link } from "react-router-dom";
const LaunchItem = (props) => {
  return (
    <>
      <div className="card container text-start bg-dark text-light">
        <img
          className="card-img-top img-fluid bg-dark"
          src={
            props.imgs === null
              ? "https://images2.imgbox.com/94/8d/YnZ1SLsT_o.png"
              : props.img
          }
          alt="Card image"
        />
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">
            {props.details === null
              ? "CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to... "
              : props.details.slice(0, 50)}
            ...
          </p>
          <Link
            key={props.id}
            to={props.id}
            className="btn btn-outline-warning mb-0"
          >
            Read More
          </Link>
        </div>
      </div>
      <br />
    </>
  );
};

export default LaunchItem;
