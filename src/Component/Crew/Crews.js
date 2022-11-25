import React from "react";
import { Link } from "react-router-dom";
const Crews = (props) => {
  return (
    <>
      <div>
        <figure className="figure my-2">
          <Link key={props.id} to={`/crew/${props.id}`}>
            <img
              src={props.image}
              className="rounded mx-auto d-block  bg-dark img-fluid"
              alt="..."
              style={{ width: "330px", height: "400px" }}
            />
          </Link>
        </figure>
      </div>
    </>
  );
};

export default Crews;
