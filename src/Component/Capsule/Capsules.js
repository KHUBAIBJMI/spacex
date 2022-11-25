import React from "react";

const Capsules = (props) => {
  return (
    <div className="container my-3">
      <div
        className="card my-2 bg-dark text-light my-2"
        style={{ height: "450px" }}
      >
        <div className="card-body">
          <ul
            className="list-group list-group-flush text-warning"
          >
            <li className="card-title list-group-item bg-dark  text-light">
              <strong>{props.type}</strong>:{props.capsule_serial}
            </li>
            <li
              className={
                props.status === "active"
                  ? "text-success card-text list-group-item bg-dark"
                  : "text-danger card-text list-group-item bg-dark "
              }
            >
              <strong className="text-light">Status</strong> {props.status}
            </li>
            <li className="list-group-item bg-dark  text-light">
              landing:{props.landings}
            </li>
            <li className="list-group-item bg-dark  text-light">
              landing:{props.name}
            </li>
            <li className="list-group-item bg-dark  text-light">
              reused :{props.reuse_count}
            </li>
            <li className="list-group-item bg-dark  text-light">
              {props.details}
            </li>
            <li className="list-group-item bg-dark  text-light">
              {props.original_launch}
            </li>
          </ul>
          {/* </article> */}
        </div>
      </div>
    </div>
  );
};

export default Capsules;
